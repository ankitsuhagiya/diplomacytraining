// ═══════════════════════════════════════════════════════
// app.js — DiplomacyPrep core application logic
// ═══════════════════════════════════════════════════════

// ── State ──────────────────────────────────────────────
let selectedCats = new Set();
let currentTopic = null;
let currentCat = null;
let timerInterval = null;
let remaining = 0;
let totalTime = 0;
let paused = false;
let phase = "idle"; // idle | prep | speak | done
let history = [];
let speakStart = null;

// ── Category chips ─────────────────────────────────────
function buildCatChips() {
  const wrap = document.getElementById("catChips");
  wrap.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const chip = document.createElement("button");
    chip.className = "chip" + (selectedCats.has(cat) ? " selected" : "");
    chip.textContent = cat;
    chip.addEventListener("click", () => toggleCat(cat, chip));
    wrap.appendChild(chip);
  });
}

function toggleCat(cat, chip) {
  if (selectedCats.has(cat)) {
    selectedCats.delete(cat);
    chip.classList.remove("selected");
  } else {
    selectedCats.add(cat);
    chip.classList.add("selected");
  }
  updateDrawBtn();
}

function updateDrawBtn() {
  const btn = document.getElementById("drawBtn");
  if (!btn) return;
  const empty = selectedCats.size === 0;
  btn.disabled = empty;
  btn.title = empty ? "Select at least one category" : "";
}

// ── Round logic ────────────────────────────────────────
function startRound() {
  if (selectedCats.size === 0) return;
  clearInterval(timerInterval);
  paused = false;

  // Pick random category & topic
  const cats = [...selectedCats];
  currentCat = cats[Math.floor(Math.random() * cats.length)];
  const pool = TOPICS[currentCat];
  
  // Filter out already-practiced topics in history
  let unpracticed = pool.filter(t => !history.some(h => h.topic === t.en || h.topic === t.de));
  if (unpracticed.length === 0) {
    unpracticed = pool; // Fallback to full pool if all are practiced
  }
  currentTopic = unpracticed[Math.floor(Math.random() * unpracticed.length)];

  const topicDisplay = lang === "en" ? currentTopic.en : currentTopic.de;
  const subDisplay   = lang === "en" ? currentTopic.sub_en : currentTopic.sub_de;

  document.getElementById("topicCat").textContent  = currentCat;
  document.getElementById("topicText").textContent = topicDisplay;
  document.getElementById("topicSub").textContent  = subDisplay;
  document.getElementById("topicCat2").textContent  = currentCat;
  document.getElementById("topicText2").textContent = topicDisplay;

  document.getElementById("notesArea").value = "";

  showScreen("prep");
  setPhase("prep");

  const prepSec = parseInt(document.getElementById("prepTime").value);
  startTimer("prep", prepSec, () => autoStartSpeak());
}

function startCustomRound() {
  const inputEl = document.getElementById("customTopicInput");
  if (!inputEl) return;
  const topicText = inputEl.value.trim();
  if (!topicText) return;

  clearInterval(timerInterval);
  paused = false;

  // Run generator
  const analysis = generateSubtopicsForTopic(topicText);
  currentCat = analysis.category;
  
  // Create mock topic object
  currentTopic = {
    en: topicText,
    de: topicText,
    sub_en: analysis.subtopics.join(", "),
    sub_de: analysis.subtopics.join(", ")
  };

  const topicDisplay = topicText;
  const subDisplay = analysis.subtopics.join(" • ");

  document.getElementById("topicCat").textContent  = currentCat;
  document.getElementById("topicText").textContent = topicDisplay;
  document.getElementById("topicSub").textContent  = subDisplay;
  document.getElementById("topicCat2").textContent  = currentCat;
  document.getElementById("topicText2").textContent = topicDisplay;

  document.getElementById("notesArea").value = "";

  showScreen("prep");
  setPhase("prep");

  const prepSec = parseInt(document.getElementById("prepTime").value);
  startTimer("prep", prepSec, () => autoStartSpeak());
  
  // Clear input
  inputEl.value = "";
}

function autoStartSpeak() {
  document.getElementById("speakBtn").textContent = "▶ " + t("startSpeakBtn");
  startSpeak();
}

function startSpeak() {
  clearInterval(timerInterval);
  paused = false;

  const notes = document.getElementById("notesArea").value;
  document.getElementById("notesReadback").textContent = notes || "—";

  showScreen("speak");
  setPhase("speak");

  const speakSec = parseInt(document.getElementById("speakTime").value);
  speakStart = Date.now();
  startTimer("speak", speakSec, () => finishRound());
}

function finishRound() {
  clearInterval(timerInterval);
  const elapsed = speakStart ? Math.round((Date.now() - speakStart) / 1000) : 0;

  const topicDisplay = lang === "en" ? currentTopic.en : currentTopic.de;
  document.getElementById("doneTopic").textContent = topicDisplay;

  const timeStr =
    elapsed < 60
      ? `${elapsed} ${t("secSpoken")}`
      : `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, "0")} ${t("minSpoken")}`;

  const notesVal = document.getElementById("notesArea").value || "";

  document.getElementById("doneTime").textContent = timeStr;
  document.getElementById("doneNotes").textContent = notesVal || "—";

  renderEvalList();

  history.unshift({ topic: topicDisplay, cat: currentCat, time: timeStr, notes: notesVal });
  if (history.length > 50) history.pop();
  renderHistory();

  showScreen("done");
  setPhase("done");
}

function renderEvalList() {
  const list = document.getElementById("evalList");
  list.innerHTML = "";
  t("evalItems").forEach((item) => {
    const li = document.createElement("li");
    li.style.cssText = "display:flex; align-items:flex-start; gap:6px; padding:3px 0;";
    li.innerHTML = `<span style="color:var(--gold); margin-top:2px;">◇</span> ${item}`;
    list.appendChild(li);
  });
}

function goIdle() {
  clearInterval(timerInterval);
  showScreen("idle");
  setPhase("idle");
}

function resetRound() {
  clearInterval(timerInterval);
  goIdle();
}

function togglePause() {
  paused = !paused;
  document.getElementById("pauseLabel").textContent = paused
    ? t("resumeBtn")
    : t("pauseBtn");
}

// ── Timer engine ───────────────────────────────────────
function startTimer(type, seconds, onDone) {
  remaining = seconds;
  totalTime = seconds;
  clearInterval(timerInterval);

  const clockEl = document.getElementById(type === "prep" ? "prepClock" : "speakClock");
  const ringEl  = document.getElementById(type === "prep" ? "prepRing"  : "speakRing");
  const circ    = type === "prep" ? 239 : 427;

  function tick() {
    if (paused) return;
    remaining--;
    updateTimerDisplay(clockEl, ringEl, circ, remaining, totalTime);
    if (remaining <= 0) {
      clearInterval(timerInterval);
      clockEl.textContent = "0:00";
      clockEl.className = "timer-display done-color";
      ringEl.style.strokeDashoffset = circ;
      ringEl.classList.add("success-color");
      onDone();
    }
  }

  updateTimerDisplay(clockEl, ringEl, circ, remaining, totalTime);
  timerInterval = setInterval(tick, 1000);
}

function updateTimerDisplay(clockEl, ringEl, circ, rem, total) {
  const mins = Math.floor(rem / 60);
  const secs = String(rem % 60).padStart(2, "0");
  clockEl.textContent = `${mins}:${secs}`;

  ringEl.style.strokeDashoffset = circ * (1 - rem / total);

  const urgent = rem <= 15 && rem > 0;
  clockEl.className = "timer-display" + (urgent ? " urgent" : "");
  ringEl.className  = "ring-fill"     + (urgent ? " urgent" : "");
}

// ── Screen & phase management ──────────────────────────
function showScreen(name) {
  ["idle", "prep", "speak", "done"].forEach((s) => {
    const el = document.getElementById(`screen-${s}`);
    el.style.display = s === name ? "block" : "none";
    if (s === name) el.classList.add("fade-in");
  });
}

function setPhase(p) {
  phase = p;
  const order = ["idle", "prep", "speak", "done"];
  const idx = order.indexOf(p);
  order.forEach((ph, i) => {
    const el = document.getElementById(`phase-${ph}`);
    el.classList.remove("active", "done");
    if (i < idx) el.classList.add("done");
    else if (i === idx) el.classList.add("active");
  });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderHistory() {
  const wrap = document.getElementById("historyWrap");
  const list = document.getElementById("historyList");
  if (history.length === 0) { wrap.style.display = "none"; return; }
  wrap.style.display = "block";
  list.innerHTML = "";
  history.forEach((h) => {
    const li = document.createElement("li");
    li.className = "history-item";
    
    const formattedNotes = h.notes ? escapeHtml(h.notes) : "<em>No notes taken.</em>";

    li.innerHTML = `
      <div class="history-item-header">
        <span style="flex-grow: 1;">
          <span style="font-size:0.7rem;color:var(--gold);">${h.cat}</span><br>
          <span class="history-topic">${h.topic}</span>
        </span>
        <span class="history-meta">
          <span>${h.time}</span>
          <span class="history-chevron">▶</span>
        </span>
      </div>
      <div class="history-item-notes">${formattedNotes}</div>
    `;

    li.addEventListener("click", () => {
      li.classList.toggle("expanded");
    });
    list.appendChild(li);
  });
}

function clearHistory() {
  history = [];
  renderHistory();
}

// ── Init ───────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  buildCatChips();
  updateDrawBtn();
  applyTranslations();
  showScreen("idle");
  setPhase("idle");
});
