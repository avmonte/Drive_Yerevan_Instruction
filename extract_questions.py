#!/usr/bin/env python3
"""Extract road-exam questions from PDFs: text + per-question PNG clips.

Russian PDFs use boxed cells anchored by 'отв' markers — extracted with
cell detection.  All other languages use a page-flow format with a
language-specific answer marker on its own line.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parent
PDF_DIR = ROOT / "pdfs"
QUESTIONS_DIR = ROOT / "questions"
MEDIA_DIR = ROOT / "media"

# Russian patterns (used by cell-based extractor)
ANS_LINE = re.compile(r"отв\s*[^\d\n]*(\d+)\s*$", re.UNICODE | re.IGNORECASE)
OPT_LINE = re.compile(r"^\s*(\d+)\.(.+)$")

# Per-language config
#   ans_search  – literal string passed to page.search_for() for image clipping
#   ans_re      – regex whose group(1) gives the 1-based correct answer index
#   opt_re      – regex that matches one option line
#   use_cells   – True only for Russian (boxed cell layout)
LANG_CONFIG: dict[str, dict] = {
    "ru": {
        "ans_search": "отв",
        "ans_re":     ANS_LINE,
        "opt_re":     OPT_LINE,
        "use_cells":  True,
    },
    "am": {
        "ans_search": "Պատ",
        "ans_re":     re.compile(r"Պատ[^\d]*(\d+)\s*$", re.UNICODE),
        "opt_re":     re.compile(r"^\s*(\d+)\.(.*)$", re.UNICODE),
        "use_cells":  True,
    },
    "en": {
        "ans_search": "Ans",
        "ans_re":     re.compile(r"Ans[^\d]*(\d+)\s*$", re.UNICODE),
        "opt_re":     re.compile(r"^\s*(\d+)\.(.*)$", re.UNICODE),
        "use_cells":  True,
    },
}


# ---------------------------------------------------------------------------
# Russian cell-based parsing (unchanged)
# ---------------------------------------------------------------------------

def expand_merged_option_lines(lines: list[str]) -> list[str]:
    out: list[str] = []
    for line in lines:
        s = line.strip()
        if not s:
            continue
        if re.match(r"^\d+\.", s):
            chunks = re.split(r"\s+(?=\d+\.)", s)
            out.extend(chunks)
        else:
            out.append(s)
    return out


def parse_cell_text(text: str, ans_re: re.Pattern = ANS_LINE) -> dict | None:
    lines = [ln.rstrip() for ln in text.splitlines()]
    buf: list[str] = []
    for line in lines:
        m = ans_re.search(line)
        if m:
            ans = int(m.group(1))
            pre = line[: m.start()].rstrip()
            if pre:
                buf.append(pre)
            block = "\n".join(buf).strip()
            buf = []
            if not block:
                continue
            raw_lines = [ln for ln in block.split("\n") if ln.strip()]
            raw_lines = expand_merged_option_lines(raw_lines)
            stem_lines: list[str] = []
            options: list[str] = []
            for ln in raw_lines:
                om = OPT_LINE.match(ln)
                if om:
                    options.append(om.group(2).strip())
                else:
                    if options:
                        cont = ln.strip()
                        if re.search(r"\s+\d+\.", cont):
                            parts = re.split(r"\s+(?=\d+\.)", cont)
                            options[-1] = (options[-1] + " " + parts[0].strip()).strip()
                            for p in parts[1:]:
                                om2 = OPT_LINE.match(p.strip())
                                if om2:
                                    options.append(om2.group(2).strip())
                        else:
                            options[-1] = (options[-1] + " " + cont).strip()
                    else:
                        stem_lines.append(ln)
            stem = "\n".join(x for x in stem_lines if x.strip()).strip()
            if options and 1 <= ans <= len(options):
                return {"stem": stem, "options": options, "correctIndex": ans - 1}
        else:
            buf.append(line)
    return None


def parse_page_text(text: str) -> list[dict]:
    lines = [ln.rstrip() for ln in text.splitlines()]
    buf: list[str] = []
    questions: list[dict] = []
    for line in lines:
        m = ANS_LINE.search(line)
        if m:
            ans = int(m.group(1))
            pre = line[: m.start()].rstrip()
            if pre:
                buf.append(pre)
            block = "\n".join(buf).strip()
            buf = []
            if not block:
                continue
            raw_lines = [ln for ln in block.split("\n") if ln.strip()]
            raw_lines = expand_merged_option_lines(raw_lines)
            stem_lines: list[str] = []
            options: list[str] = []
            for ln in raw_lines:
                om = OPT_LINE.match(ln)
                if om:
                    options.append(om.group(2).strip())
                else:
                    if options:
                        cont = ln.strip()
                        if re.search(r"\s+\d+\.", cont):
                            parts = re.split(r"\s+(?=\d+\.)", cont)
                            options[-1] = (options[-1] + " " + parts[0].strip()).strip()
                            for p in parts[1:]:
                                om2 = OPT_LINE.match(p.strip())
                                if om2:
                                    options.append(om2.group(2).strip())
                        else:
                            options[-1] = (options[-1] + " " + cont).strip()
                    else:
                        stem_lines.append(ln)
            stem = "\n".join(x for x in stem_lines if x.strip()).strip()
            if options and 1 <= ans <= len(options):
                questions.append({"stem": stem, "options": options, "correctIndex": ans - 1})
        else:
            buf.append(line)
    return questions


# ---------------------------------------------------------------------------
# Cell detection (Russian only)
# ---------------------------------------------------------------------------

def find_question_cells(page: fitz.Page, ans_search: str) -> list[fitz.Rect]:
    pr = page.rect
    drawings = page.get_drawings()
    all_rects: list[fitz.Rect] = []
    for d in drawings:
        r = fitz.Rect(d["rect"])
        if r.width < 60 or r.height < 60:
            continue
        if r.width > pr.width * 0.95 and r.height > pr.height * 0.95:
            continue
        all_rects.append(r)

    if not all_rects:
        return []

    ans_hits = page.search_for(ans_search)
    if not ans_hits:
        return []

    seen: set[tuple[int, int, int, int]] = set()
    cells: list[fitz.Rect] = []

    for hit in ans_hits:
        ox = (hit.x0 + hit.x1) / 2
        oy = (hit.y0 + hit.y1) / 2
        best: fitz.Rect | None = None
        best_area = float("inf")
        for r in all_rects:
            if r.x0 <= ox <= r.x1 and r.y0 <= oy <= r.y1:
                area = r.width * r.height
                if area < best_area:
                    best = r
                    best_area = area
        if best is not None:
            key = (round(best.x0), round(best.y0), round(best.x1), round(best.y1))
            if key not in seen:
                seen.add(key)
                cells.append(best)

    if cells:
        row_h = max(min(c.height for c in cells) * 0.3, 10)
        cells.sort(key=lambda r: (round(r.y0 / row_h) * row_h, r.x0))

    return cells


def cell_clip(page: fitz.Page, cell: fitz.Rect, ans_search: str) -> fitz.Rect:
    pr = page.rect
    inset = 3
    clip = fitz.Rect(
        cell.x0 + inset, cell.y0 + inset, cell.x1 - inset, cell.y1 - inset
    )
    for m in sorted(page.search_for(ans_search), key=lambda r: r.y0):
        if cell.x0 <= m.x0 <= cell.x1 and cell.y0 <= m.y0 <= cell.y1:
            cut = m.y0 - 2
            if cut - clip.y0 > 20:
                clip.y1 = min(clip.y1, cut)
            break
    clip = clip & pr
    if clip.width < 10 or clip.height < 10:
        return fitz.Rect(
            cell.x0 + inset, cell.y0 + inset, cell.x1 - inset, cell.y1 - inset
        ) & pr
    return clip


# ---------------------------------------------------------------------------
# Page-flow parsing (non-Russian PDFs)
# ---------------------------------------------------------------------------

def _parse_opt(line: str, opt_re: re.Pattern) -> tuple[int, str] | None:
    """LTR option `N.text` → (option_number, text)."""
    m = opt_re.match(line.strip())
    if not m:
        return None
    num = int(m.group(1))
    text = m.group(2).strip() if m.lastindex >= 2 else ""
    return (num, text or str(num))


def parse_page_flow(text: str, ans_re: re.Pattern, opt_re: re.Pattern) -> list[dict]:
    """Parse questions from a page using language-specific markers."""
    lines = [ln.rstrip() for ln in text.splitlines()]
    questions: list[dict] = []
    buf: list[str] = []

    for line in lines:
        m = ans_re.search(line)
        if m:
            ans = int(m.group(1))
            block = [ln for ln in buf if ln.strip()]
            buf = []
            stem_lines: list[str] = []
            opts: list[tuple[int, str]] = []
            for ln in block:
                parsed = _parse_opt(ln, opt_re)
                if parsed:
                    opts.append(parsed)
                elif not opts:
                    stem_lines.append(ln)
            opts.sort(key=lambda x: x[0])
            options = [t for _, t in opts]
            stem = "\n".join(x for x in stem_lines if x.strip()).strip()
            if options and 1 <= ans <= len(options):
                questions.append({"stem": stem, "options": options, "correctIndex": ans - 1})
        else:
            buf.append(line)

    return questions


# ---------------------------------------------------------------------------
# Main extraction
# ---------------------------------------------------------------------------

def extract_from_pdf(pdf_path: Path, lang: str = "unknown", dpi: int = 144) -> list[dict]:
    cfg = LANG_CONFIG.get(lang, LANG_CONFIG["ru"])
    use_cells  = cfg["use_cells"]
    ans_search = cfg["ans_search"]
    ans_re     = cfg["ans_re"]
    opt_re     = cfg["opt_re"]

    out: list[dict] = []
    pdf_stem   = pdf_path.stem
    source_rel = str(pdf_path.relative_to(PDF_DIR))
    doc = fitz.open(pdf_path)
    mat = fitz.Matrix(dpi / 72, dpi / 72)

    for page_index in range(doc.page_count):
        page  = doc.load_page(page_index)
        cells = find_question_cells(page, ans_search) if use_cells else []

        MEDIA_DIR.mkdir(parents=True, exist_ok=True)

        if cells:
            # Russian boxed-cell layout
            for cell_idx, cell in enumerate(cells):
                q = parse_cell_text(page.get_text("text", clip=cell), ans_re)
                if q is None:
                    continue
                qid      = f"{pdf_stem}-p{page_index}-q{cell_idx}"
                img_name = f"{qid}.png"
                pix = page.get_pixmap(matrix=mat, clip=cell_clip(page, cell, ans_search), alpha=False)
                pix.save(str(MEDIA_DIR / img_name))
                out.append({
                    "id": qid, "source": source_rel, "page": page_index,
                    "image": f"media/{img_name}", "text": q["stem"],
                    "options": q["options"], "correctIndex": q["correctIndex"],
                })
        else:
            # Page-flow layout (non-Russian)
            ans_hits = sorted(page.search_for(ans_search), key=lambda r: r.y0)
            qs       = parse_page_flow(page.get_text(), ans_re, opt_re)
            pr       = page.rect

            for q_idx, q in enumerate(qs):
                qid      = f"{pdf_stem}-p{page_index}-q{q_idx}"
                img_name = f"{qid}.png"
                # Clip per-question region using answer marker positions
                if q_idx < len(ans_hits):
                    y_start = ans_hits[q_idx - 1].y1 + 2 if q_idx > 0 else pr.y0
                    y_end   = ans_hits[q_idx].y1 + 4
                    clip    = fitz.Rect(pr.x0, y_start, pr.x1, y_end) & pr
                else:
                    clip = pr
                pix = page.get_pixmap(matrix=mat, clip=clip, alpha=False)
                pix.save(str(MEDIA_DIR / img_name))
                out.append({
                    "id": qid, "source": source_rel, "page": page_index,
                    "image": f"media/{img_name}", "text": q["stem"],
                    "options": q["options"], "correctIndex": q["correctIndex"],
                })

    doc.close()
    return out


def main() -> None:
    filter_langs = set(sys.argv[1:])
    pdfs = sorted(PDF_DIR.rglob("*.pdf"))
    if not pdfs:
        print("No PDF files found in", PDF_DIR, file=sys.stderr)
        sys.exit(1)
    by_lang: dict[str, list[dict]] = {}
    for pdf in pdfs:
        if pdf.name.startswith("."):
            continue
        lang = pdf.parent.name if pdf.parent != PDF_DIR else "unknown"
        if filter_langs and lang not in filter_langs:
            continue
        print(f"Extracting [{lang}] {pdf.name} ...", flush=True)
        qs = extract_from_pdf(pdf, lang)
        for q in qs:
            q["lang"] = lang
        by_lang.setdefault(lang, []).extend(qs)
    if not by_lang:
        print("No languages extracted.", file=sys.stderr)
        sys.exit(1)
    QUESTIONS_DIR.mkdir(exist_ok=True)
    for lang, qs in sorted(by_lang.items()):
        path = QUESTIONS_DIR / f"{lang}.json"
        path.write_text(
            json.dumps({"version": 1, "count": len(qs), "questions": qs}, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        print(f"Wrote {path} with {len(qs)} questions")


if __name__ == "__main__":
    main()
