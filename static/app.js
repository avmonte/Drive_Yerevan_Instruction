/* ---- Translations ---- */
const TRANSLATIONS = {
  en: {
    tab_practice: "Practice",
    tab_exam: "Exam",
    tab_problems: "Mistakes",
    tab_hard: "Hard",
    tab_balancer: "Balancer",
    btn_check: "Check",
    btn_next: "Next",
    btn_explain: "Explain",
    btn_original: "Original",
    btn_review_ok: "Correct",
    btn_review_bad: "Wrong",
    btn_reset: "Reset",
    btn_go: "Go",
    btn_exam_start: "Start Exam",
    btn_exam_again: "Try again",
    btn_exam_from_problems: "Exam from mistakes",
    btn_clear: "Clear",
    no_mistakes: "No mistakes yet",
    no_mistakes_yet: "No mistakes yet — answer questions in practice or exam first.",
    exam_intro: "20 questions. You need at least 18 correct to pass.",
    comp_desc: "Practice questions you've previously answered incorrectly.",
    bal_desc: "More mistakes = more repetitions. Correct answers reduce weight.",
    confirm_reset: "Reset all progress?",
    confirm_clear: "Clear all mistakes?",
    stats: (total, answered, correct, wrong) =>
      `Total: ${total} · answered: ${answered} · correct: ${correct} · wrong: ${wrong}`,
    q_index: (n) => `Question ${n}`,
    feedback_correct: "Correct!",
    feedback_wrong: (n) => `Wrong. Correct answer: ${n}.`,
    review_ok_title: "Correct (last attempt)",
    review_bad_title: "Wrong (last attempt)",
    exam_progress: (idx, total, correct, wrong, maxWrong) =>
      `Question ${idx} / ${total}  —  correct: ${correct}  ·  wrong: ${wrong} (max ${maxWrong})`,
    exam_passed: "PASSED",
    exam_failed: "FAILED",
    exam_result_correct: (correct, total) => `Correct: ${correct} out of ${total}`,
    exam_result_mistakes: (wrong, allowed) => `Mistakes: ${wrong} (allowed: ${allowed})`,
    problems_count: (n) => `Mistakes: ${n} questions`,
    bal_stats: (total, unique) => `Balancer: ${total} entries (${unique} unique)`,
    bal_empty: "Balancer is empty — no mistakes yet.",
    review_empty: "Empty",
    loading_explanation: "Loading explanation...",
    no_explanation: "No explanation",
  },
  ru: {
    tab_practice: "Практика",
    tab_exam: "Экзамен",
    tab_problems: "Ошибки",
    tab_hard: "Сложные",
    tab_balancer: "Балансир",
    btn_check: "Проверить",
    btn_next: "Далее",
    btn_explain: "Объяснить",
    btn_original: "Оригинал",
    btn_review_ok: "Правильные",
    btn_review_bad: "Ошибочные",
    btn_reset: "Сбросить",
    btn_go: "Перейти",
    btn_exam_start: "Начать экзамен",
    btn_exam_again: "Попробовать снова",
    btn_exam_from_problems: "Экзамен из ошибок",
    btn_clear: "Очистить",
    no_mistakes: "Ошибок пока нет",
    no_mistakes_yet: "Ошибок пока нет — ответьте на вопросы в практике или экзамене.",
    exam_intro: "20 вопросов. Нужно набрать не менее 18 правильных ответов.",
    comp_desc: "Вопросы, в которых вы ранее ошиблись.",
    bal_desc: "Больше ошибок = больше повторений. Правильные ответы снижают вес.",
    confirm_reset: "Сбросить весь прогресс?",
    confirm_clear: "Очистить все ошибки?",
    stats: (total, answered, correct, wrong) =>
      `Всего: ${total} · отвечено: ${answered} · верных: ${correct} · неверных: ${wrong}`,
    q_index: (n) => `Вопрос ${n}`,
    feedback_correct: "Верно!",
    feedback_wrong: (n) => `Неверно. Правильный ответ: ${n}.`,
    review_ok_title: "Правильные (последняя попытка)",
    review_bad_title: "Ошибочные (последняя попытка)",
    exam_progress: (idx, total, correct, wrong, maxWrong) =>
      `Вопрос ${idx} / ${total}  —  верно: ${correct}  ·  неверно: ${wrong} (макс. ${maxWrong})`,
    exam_passed: "СДАЛ",
    exam_failed: "НЕ СДАЛ",
    exam_result_correct: (correct, total) => `Верно: ${correct} из ${total}`,
    exam_result_mistakes: (wrong, allowed) => `Ошибки: ${wrong} (допустимо: ${allowed})`,
    problems_count: (n) => `Ошибок: ${n} вопросов`,
    bal_stats: (total, unique) => `Балансир: ${total} записей (${unique} уникальных)`,
    bal_empty: "Балансир пуст — ошибок ещё нет.",
    review_empty: "Пусто",
    loading_explanation: "Загрузка объяснения...",
    no_explanation: "Нет объяснения",
  },
  am: {
    tab_practice: "Պրակտիկա",
    tab_exam: "Քննություն",
    tab_problems: "Սխալներ",
    tab_hard: "Բարդ",
    tab_balancer: "Հավասարակշռիչ",
    btn_check: "Ստուգել",
    btn_next: "Հաջորդ",
    btn_explain: "Բացատրել",
    btn_original: "Բնօրինակ",
    btn_review_ok: "Ճիշտ",
    btn_review_bad: "Սխալ",
    btn_reset: "Վերականգնել",
    btn_go: "Գնալ",
    btn_exam_start: "Սկսել քննություն",
    btn_exam_again: "Կրկին փորձել",
    btn_exam_from_problems: "Քննություն սխալներից",
    btn_clear: "Մաքրել",
    no_mistakes: "Սխալներ դեռ չկան",
    no_mistakes_yet: "Սխալներ դեռ չկան — նախ պատասխանեք հարցերին:",
    exam_intro: "20 հարց: Անցնելու համար անհրաժեշտ է առնվազն 18 ճիշտ պատասխան:",
    comp_desc: "Հարցեր, որոնցում նախկինում սխալ եք պատասխանել:",
    bal_desc: "Ավելի շատ սխալ = ավելի շատ կրկնություն: Ճիշտ պատասխանները նվազեցնում են կշիռը:",
    confirm_reset: "Ջնջե՞լ ամբողջ առաջընթացը:",
    confirm_clear: "Մաքրե՞լ բոլոր սխալները:",
    stats: (total, answered, correct, wrong) =>
      `Ընդամենը: ${total} · պատասխանված: ${answered} · ճիշտ: ${correct} · սխալ: ${wrong}`,
    q_index: (n) => `Հարց ${n}`,
    feedback_correct: "Ճիշտ է!",
    feedback_wrong: (n) => `Սխալ: Ճիշտ պատասխան՝ ${n}:`,
    review_ok_title: "Ճիշտ (վերջին փորձ)",
    review_bad_title: "Սխալ (վերջին փորձ)",
    exam_progress: (idx, total, correct, wrong, maxWrong) =>
      `Հարց ${idx} / ${total}  —  ճիշտ: ${correct}  ·  սխալ: ${wrong} (առավելագույն: ${maxWrong})`,
    exam_passed: "ՀԱՋՈՂԵՑ",
    exam_failed: "ՁԱԽՈՂԵՑ",
    exam_result_correct: (correct, total) => `Ճիշտ: ${correct} ${total}-ից`,
    exam_result_mistakes: (wrong, allowed) => `Սխալ: ${wrong} (թույլատրելի: ${allowed})`,
    problems_count: (n) => `Սխալ պատասխաններ: ${n} հարց`,
    bal_stats: (total, unique) => `Հավասարակշռիչ: ${total} գրառում (${unique} եզակի)`,
    bal_empty: "Հավասարակշռիչը դատարկ է — սխալներ դեռ չկան:",
    review_empty: "Դատարկ",
    loading_explanation: "Բեռնվում է...",
    no_explanation: "Բացատրություն չկա",
  },
};

function t(key, ...args) {
  const lang = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const val = lang[key] !== undefined ? lang[key] : (TRANSLATIONS.en[key] ?? key);
  return typeof val === "function" ? val(...args) : val;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
}

/* ---- Globals ---- */
let current = null;
let answered = false;
let examAnswered = false;
let examCurrent = null;
let compCurrent = null;
let compAnswered = false;
let balCurrent = null;
let balAnswered = false;
let currentLang = localStorage.getItem("lang") || "";

function langParam() {
  return currentLang ? `lang=${encodeURIComponent(currentLang)}` : "";
}
function langQS(prefix = "?") {
  const p = langParam();
  return p ? prefix + p : "";
}

/* ---- Tabs ---- */
const tabs = document.querySelectorAll(".tab");
const sections = {
  practice:    document.getElementById("tabPractice"),
  exam:        document.getElementById("tabExam"),
  problems:    document.getElementById("tabProblems"),
  complicated: document.getElementById("tabComplicated"),
  balancer:    document.getElementById("tabBalancer"),
};

function switchTab(name) {
  tabs.forEach(t => t.classList.toggle("active", t.dataset.tab === name));
  Object.entries(sections).forEach(([k, el]) => { el.hidden = k !== name; });
  if (name === "problems") loadProblemsTab();
  if (name === "complicated") loadComplicatedQuestion();
  if (name === "balancer") loadBalancerQuestion();
}

tabs.forEach(t => t.addEventListener("click", () => switchTab(t.dataset.tab)));

/* ---- Stats ---- */
async function refreshStats() {
  const r = await fetch("/api/progress" + langQS());
  const d = await r.json();
  document.getElementById("stats").textContent =
    t("stats", d.totalQuestions, d.answeredAtLeastOnce, d.lastCorrect, d.lastWrong);
}

function showError(msg) {
  const el = document.getElementById("err");
  el.textContent = msg;
  el.hidden = !msg;
}

/* ---- Helpers ---- */
function imgSrc(path) {
  if (!path) return null;
  return path.startsWith("/") ? path : "/" + path;
}

function showImage(fig, img, path) {
  const src = imgSrc(path);
  if (src) { img.src = src; fig.hidden = false; }
  else { fig.hidden = true; img.removeAttribute("src"); }
}

function buildOptions(container, options, radioName) {
  container.innerHTML = "";
  options.forEach((text, i) => {
    const lab = document.createElement("label");
    const inp = document.createElement("input");
    inp.type = "radio";
    inp.name = radioName;
    inp.value = String(i);
    const span = document.createElement("span");
    span.textContent = `${i + 1}. ${text}`;
    lab.appendChild(inp);
    lab.appendChild(span);
    container.appendChild(lab);
  });
}

function highlightOpts(container, choiceIndex, correctIndex) {
  container.querySelectorAll("label").forEach((lab, i) => {
    lab.classList.add("locked");
    lab.querySelector("input").disabled = true;
    if (i === correctIndex) lab.classList.add("correct");
    else if (i === choiceIndex && choiceIndex !== correctIndex) lab.classList.add("wrong");
  });
}

function itemButton(text, onClick) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "review-item";
  const t = (text || "").replace(/\s+/g, " ").trim();
  btn.textContent = t.length > 100 ? t.slice(0, 97) + "..." : t;
  btn.addEventListener("click", onClick);
  li.appendChild(btn);
  return li;
}

function setPageLink(linkEl, q) {
  if (q && q.source && q.page !== undefined && q.page !== null) {
    linkEl.href = `/api/page-image/${q.page}/${q.source}`;
    linkEl.hidden = false;
  } else {
    linkEl.hidden = true;
  }
}

function renderQIndex(container, q) {
  const idx = q.index !== undefined && q.index >= 0 ? q.index : null;
  container.textContent = idx !== null ? t("q_index", idx + 1) : "";
}

async function fetchExplanation(qid, container) {
  container.hidden = false;
  container.textContent = t("loading_explanation");
  try {
    const r = await fetch("/api/explain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questionId: qid }),
    });
    if (!r.ok) {
      const txt = await r.text();
      container.textContent = "Error: " + txt;
      return;
    }
    const d = await r.json();
    container.textContent = d.explanation || t("no_explanation");
  } catch (e) {
    container.textContent = "Error: " + String(e);
  }
}

/* ============ PRACTICE TAB ============ */

function openReview(title, items) {
  const panel = document.getElementById("reviewPanel");
  document.getElementById("reviewTitle").textContent = title;
  const ul = document.getElementById("reviewList");
  ul.innerHTML = "";
  if (items.length === 0) {
    const li = document.createElement("li");
    li.className = "review-empty";
    li.textContent = t("review_empty");
    ul.appendChild(li);
  } else {
    items.forEach(row => {
      ul.appendChild(itemButton(row.text, () => {
        panel.hidden = true;
        loadQuestionById(row.id);
      }));
    });
  }
  panel.hidden = false;
}

document.getElementById("btnReviewOk").addEventListener("click", async () => {
  try {
    const d = await (await fetch("/api/review" + langQS())).json();
    openReview(t("review_ok_title"), d.lastCorrect || []);
  } catch (e) { showError(String(e)); }
});

document.getElementById("btnReviewBad").addEventListener("click", async () => {
  try {
    const d = await (await fetch("/api/review" + langQS())).json();
    openReview(t("review_bad_title"), d.lastWrong || []);
  } catch (e) { showError(String(e)); }
});

document.getElementById("reviewClose").addEventListener("click", () => {
  document.getElementById("reviewPanel").hidden = true;
});

document.getElementById("btnReset").addEventListener("click", async () => {
  if (!confirm(t("confirm_reset"))) return;
  await fetch("/api/progress/reset", { method: "POST" });
  document.getElementById("reviewPanel").hidden = true;
  refreshStats();
});

/* -- Jump to question -- */
document.getElementById("btnJump").addEventListener("click", () => {
  const inp = document.getElementById("jumpInput");
  const num = parseInt(inp.value, 10);
  if (!num || num < 1) return;
  loadQuestionAt(num - 1);
});

document.getElementById("jumpInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("btnJump").click();
  }
});

function renderQuestion(q) {
  current = q;
  answered = false;
  showError("");
  document.getElementById("feedback").hidden = true;
  document.getElementById("nextBtn").hidden = true;
  document.getElementById("explainBtn").hidden = true;
  document.getElementById("explanation").hidden = true;
  document.getElementById("submitBtn").disabled = false;
  showImage(document.getElementById("fig"), document.getElementById("qimg"), q.image);
  renderQIndex(document.getElementById("qIndex"), q);
  document.getElementById("stem").textContent = q.text || "";
  buildOptions(document.getElementById("opts"), q.options, "ans");
  setPageLink(document.getElementById("pageLink"), q);
}

async function loadQuestion() {
  try {
    const r = await fetch("/api/question?mode=random&" + langParam());
    if (!r.ok) throw new Error(await r.text() || r.statusText);
    renderQuestion(await r.json());
  } catch (e) { showError(String(e)); }
}

async function loadQuestionById(id) {
  try {
    const r = await fetch("/api/question/" + encodeURIComponent(id));
    if (!r.ok) throw new Error(await r.text() || r.statusText);
    renderQuestion(await r.json());
  } catch (e) { showError(String(e)); }
}

async function loadQuestionAt(index) {
  try {
    const r = await fetch("/api/question/at/" + index + langQS());
    if (!r.ok) throw new Error(await r.text() || r.statusText);
    renderQuestion(await r.json());
  } catch (e) { showError(String(e)); }
}

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (answered) return;
  const picked = document.querySelector('#opts input[name="ans"]:checked');
  if (!picked || !current) return;
  answered = true;
  const choiceIndex = Number(picked.value);
  const r = await fetch("/api/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ questionId: current.id, choiceIndex }),
  });
  const d = await r.json();
  highlightOpts(document.getElementById("opts"), choiceIndex, d.correctIndex);
  const fb = document.getElementById("feedback");
  fb.hidden = false;
  fb.className = "feedback " + (d.correct ? "ok" : "bad");
  fb.textContent = d.correct ? t("feedback_correct") : t("feedback_wrong", d.correctIndex + 1);
  document.getElementById("submitBtn").disabled = true;
  document.getElementById("nextBtn").hidden = false;
  document.getElementById("explainBtn").hidden = false;
  refreshStats();
});

document.getElementById("nextBtn").addEventListener("click", loadQuestion);

document.getElementById("explainBtn").addEventListener("click", () => {
  if (current) fetchExplanation(current.id, document.getElementById("explanation"));
});


/* ============ EXAM TAB ============ */

function showExamQuestion(q, index, total, correct, wrong) {
  examCurrent = q;
  examAnswered = false;
  const maxWrong = total - 18;
  document.getElementById("examProgress").textContent =
    t("exam_progress", index + 1, total, correct, wrong, maxWrong);
  showImage(document.getElementById("examFig"), document.getElementById("examImg"), q.image);
  renderQIndex(document.getElementById("examQIndex"), q);
  document.getElementById("examStem").textContent = q.text || "";
  buildOptions(document.getElementById("examOpts"), q.options, "examAns");
  setPageLink(document.getElementById("examPageLink"), q);
  document.getElementById("examSubmitBtn").disabled = false;
  document.getElementById("examNextBtn").hidden = true;
  document.getElementById("examExplainBtn").hidden = true;
  document.getElementById("examExplanation").hidden = true;
  document.getElementById("examFeedback").hidden = true;
  document.getElementById("examActive").hidden = false;
  document.getElementById("examResult").hidden = true;
  document.getElementById("examIntro").hidden = true;
}

document.getElementById("btnExamStart").addEventListener("click", async () => {
  try {
    const r = await fetch("/api/exam/start" + langQS(), { method: "POST" });
    const d = await r.json();
    showExamQuestion(d.question, d.index, d.total, 0, 0);
  } catch (e) { alert(String(e)); }
});

document.getElementById("examForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (examAnswered) return;
  const picked = document.querySelector('#examOpts input[name="examAns"]:checked');
  if (!picked) return;
  examAnswered = true;
  const choiceIndex = Number(picked.value);
  const r = await fetch("/api/exam/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ choiceIndex }),
  });
  const d = await r.json();
  highlightOpts(document.getElementById("examOpts"), choiceIndex, d.correctIndex);
  const fb = document.getElementById("examFeedback");
  fb.hidden = false;
  fb.className = "feedback " + (d.correct ? "ok" : "bad");
  fb.textContent = d.correct ? t("feedback_correct") : t("feedback_wrong", d.correctIndex + 1);
  document.getElementById("examSubmitBtn").disabled = true;
  document.getElementById("examExplainBtn").hidden = false;
  if (d.finished) {
    showExamResult(d);
  } else {
    document.getElementById("examNextBtn").hidden = false;
    document.getElementById("examNextBtn").onclick = () => {
      showExamQuestion(d.nextQuestion, d.index, d.total, d.score.correct, d.score.wrong);
    };
  }
});

document.getElementById("examExplainBtn").addEventListener("click", () => {
  if (examCurrent) fetchExplanation(examCurrent.id, document.getElementById("examExplanation"));
});


function showExamResult(d) {
  const el = document.getElementById("examResult");
  const passed = d.passed;
  el.className = "exam-result " + (passed ? "passed" : "failed");
  el.innerHTML =
    `<div class="big">${passed ? t("exam_passed") : t("exam_failed")}</div>` +
    `<div>${t("exam_result_correct", d.score.correct, d.total)}</div>` +
    `<div>${t("exam_result_mistakes", d.score.wrong, d.total - 18)}</div>` +
    `<button type="button" id="examAgain" class="btn-primary">${t("btn_exam_again")}</button>`;
  document.getElementById("examActive").hidden = true;
  el.hidden = false;
  el.querySelector("#examAgain").addEventListener("click", () => {
    el.hidden = true;
    document.getElementById("examIntro").hidden = false;
  });
}

/* ============ PROBLEMS TAB ============ */

async function loadProblemsTab() {
  try {
    const d = await (await fetch("/api/problems" + langQS())).json();
    const list = document.getElementById("problemsList");
    const empty = document.getElementById("problemsEmpty");
    list.innerHTML = "";
    document.getElementById("problemsCount").textContent =
      t("problems_count", d.count);
    if (d.problems.length === 0) {
      empty.hidden = false;
    } else {
      empty.hidden = true;
      d.problems.forEach(row => {
        list.appendChild(itemButton(row.text, () => {
          switchTab("practice");
          loadQuestionById(row.id);
        }));
      });
    }
  } catch (e) { console.error(e); }
}

document.getElementById("btnProblemsExam").addEventListener("click", async () => {
  try {
    const r = await fetch("/api/exam/start-from-problems" + langQS(), { method: "POST" });
    const d = await r.json();
    switchTab("exam");
    showExamQuestion(d.question, d.index, d.total, 0, 0);
  } catch (e) { alert(String(e)); }
});

document.getElementById("btnProblemsClear").addEventListener("click", async () => {
  if (!confirm(t("confirm_clear"))) return;
  await fetch("/api/problems/clear", { method: "POST" });
  loadProblemsTab();
});

/* ============ COMPLICATED TAB ============ */

async function loadComplicatedQuestion() {
  const empty = document.getElementById("compEmpty");
  const active = document.getElementById("compActive");
  try {
    const r = await fetch("/api/complicated/question" + langQS());
    if (r.status === 404) {
      empty.textContent = t("no_mistakes_yet");
      empty.hidden = false;
      active.hidden = true;
      return;
    }
    if (!r.ok) throw new Error(await r.text());
    empty.hidden = true;
    active.hidden = false;
    renderComplicatedQuestion(await r.json());
  } catch (e) {
    empty.textContent = String(e);
    empty.hidden = false;
    active.hidden = true;
  }
}

function renderComplicatedQuestion(q) {
  compCurrent = q;
  compAnswered = false;
  showImage(document.getElementById("compFig"), document.getElementById("compImg"), q.image);
  renderQIndex(document.getElementById("compQIndex"), q);
  document.getElementById("compStem").textContent = q.text || "";
  buildOptions(document.getElementById("compOpts"), q.options, "compAns");
  setPageLink(document.getElementById("compPageLink"), q);
  document.getElementById("compSubmitBtn").disabled = false;
  document.getElementById("compNextBtn").hidden = true;
  document.getElementById("compExplainBtn").hidden = true;
  document.getElementById("compExplanation").hidden = true;
  document.getElementById("compFeedback").hidden = true;
}

document.getElementById("compForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (compAnswered) return;
  const picked = document.querySelector('#compOpts input[name="compAns"]:checked');
  if (!picked || !compCurrent) return;
  compAnswered = true;
  const choiceIndex = Number(picked.value);
  const r = await fetch("/api/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ questionId: compCurrent.id, choiceIndex }),
  });
  const d = await r.json();
  highlightOpts(document.getElementById("compOpts"), choiceIndex, d.correctIndex);
  const fb = document.getElementById("compFeedback");
  fb.hidden = false;
  fb.className = "feedback " + (d.correct ? "ok" : "bad");
  fb.textContent = d.correct ? t("feedback_correct") : t("feedback_wrong", d.correctIndex + 1);
  document.getElementById("compSubmitBtn").disabled = true;
  document.getElementById("compNextBtn").hidden = false;
  document.getElementById("compExplainBtn").hidden = false;
  refreshStats();
});

document.getElementById("compNextBtn").addEventListener("click", loadComplicatedQuestion);

document.getElementById("compExplainBtn").addEventListener("click", () => {
  if (compCurrent) fetchExplanation(compCurrent.id, document.getElementById("compExplanation"));
});


/* ============ BALANCER TAB ============ */

async function loadBalancerQuestion() {
  const empty = document.getElementById("balEmpty");
  const active = document.getElementById("balActive");
  const statsEl = document.getElementById("balStats");
  try {
    const sr = await fetch("/api/balancer/stats" + langQS());
    const sd = await sr.json();
    statsEl.textContent = t("bal_stats", sd.total, sd.unique);
    if (sd.total === 0) {
      empty.hidden = false;
      active.hidden = true;
      return;
    }
    const r = await fetch("/api/balancer/question" + langQS());
    if (r.status === 404) {
      empty.hidden = false;
      active.hidden = true;
      return;
    }
    if (!r.ok) throw new Error(await r.text());
    empty.hidden = true;
    active.hidden = false;
    renderBalancerQuestion(await r.json());
  } catch (e) {
    statsEl.textContent = t("bal_stats", 0, 0);
    empty.hidden = false;
    active.hidden = true;
  }
}

function renderBalancerQuestion(q) {
  balCurrent = q;
  balAnswered = false;
  showImage(document.getElementById("balFig"), document.getElementById("balImg"), q.image);
  renderQIndex(document.getElementById("balQIndex"), q);
  document.getElementById("balStem").textContent = q.text || "";
  buildOptions(document.getElementById("balOpts"), q.options, "balAns");
  setPageLink(document.getElementById("balPageLink"), q);
  document.getElementById("balSubmitBtn").disabled = false;
  document.getElementById("balNextBtn").hidden = true;
  document.getElementById("balExplainBtn").hidden = true;
  document.getElementById("balExplanation").hidden = true;
  document.getElementById("balFeedback").hidden = true;
}

document.getElementById("balForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (balAnswered) return;
  const picked = document.querySelector('#balOpts input[name="balAns"]:checked');
  if (!picked || !balCurrent) return;
  balAnswered = true;
  const choiceIndex = Number(picked.value);
  const r = await fetch("/api/balancer/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ questionId: balCurrent.id, choiceIndex }),
  });
  const d = await r.json();
  highlightOpts(document.getElementById("balOpts"), choiceIndex, d.correctIndex);
  const fb = document.getElementById("balFeedback");
  fb.hidden = false;
  fb.className = "feedback " + (d.correct ? "ok" : "bad");
  fb.textContent = d.correct ? t("feedback_correct") : t("feedback_wrong", d.correctIndex + 1);
  document.getElementById("balSubmitBtn").disabled = true;
  document.getElementById("balNextBtn").hidden = false;
  document.getElementById("balExplainBtn").hidden = false;
  refreshStats();
});

document.getElementById("balNextBtn").addEventListener("click", loadBalancerQuestion);

document.getElementById("balExplainBtn").addEventListener("click", () => {
  if (balCurrent) fetchExplanation(balCurrent.id, document.getElementById("balExplanation"));
});


const LANG_NAMES = { am: "Հայերեն", ru: "Русский", en: "English" };

/* ---- Language selector ---- */
async function loadLanguages() {
  const r = await fetch("/api/languages");
  const d = await r.json();
  const sel = document.getElementById("langSelect");
  sel.innerHTML = "";
  d.languages.forEach(lang => {
    const opt = document.createElement("option");
    opt.value = lang;
    opt.textContent = LANG_NAMES[lang] || lang.toUpperCase();
    sel.appendChild(opt);
  });
  if (currentLang && d.languages.includes(currentLang)) {
    sel.value = currentLang;
  } else if (d.languages.length > 0) {
    currentLang = d.languages[0];
    sel.value = currentLang;
    localStorage.setItem("lang", currentLang);
  }
}

document.getElementById("langSelect").addEventListener("change", (e) => {
  currentLang = e.target.value;
  localStorage.setItem("lang", currentLang);
  applyTranslations();
  refreshStats();
  loadQuestion();
});

/* ---- Init ---- */
loadLanguages().then(() => {
  applyTranslations();
  refreshStats();
  loadQuestion();
});
