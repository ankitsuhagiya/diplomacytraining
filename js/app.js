// ═══════════════════════════════════════════════════════
// app.js — DiplomacyPrep core application logic
// ═══════════════════════════════════════════════════════

// ── State ──────────────────────────────────────────────
let selectedCats  = new Set();
let currentTopic  = null;
let currentCat    = null;
let timerInterval = null;
let remaining     = 0;
let totalTime     = 0;
let prepPaused    = false;  // pause state for prep screen only
let speakPaused   = false;  // pause state for speak screen only
let phase         = "idle"; // idle | prep | speak | done
let history       = [];
let speakStart    = null;
let urgencyBeeped = false;

// ── Audio engine ───────────────────────────────────────
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let _audioCtx = null;
function getAudioCtx() {
  if (!_audioCtx) _audioCtx = new AudioCtx();
  return _audioCtx;
}

function beep(freq = 880, dur = 0.15, vol = 0.35, delay = 0, type = 'sine') {
  try {
    const ctx  = getAudioCtx();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
    gain.gain.setValueAtTime(0, ctx.currentTime + delay);
    gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + delay + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + dur);
    osc.start(ctx.currentTime + delay);
    osc.stop(ctx.currentTime + delay + dur + 0.05);
  } catch (e) { /* audio blocked — silent fallback */ }
}

/** Three short rising pips — 15 s warning */
function playUrgencyWarning() {
  beep(660, 0.10, 0.3, 0.00);
  beep(770, 0.10, 0.3, 0.15);
  beep(880, 0.12, 0.4, 0.30);
}

/** Two soft descending tones — time's up */
function playTimesUp() {
  beep(880, 0.20, 0.4, 0.00);
  beep(660, 0.30, 0.3, 0.25);
}

// ── localStorage persistence ───────────────────────────
const STORAGE_KEY = "diplomacyPrep_history";

function saveHistory() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(history)); }
  catch (e) { /* storage unavailable */ }
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) history = JSON.parse(raw);
  } catch (e) { history = []; }
}

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
  syncSelectAllBtn();
}

function syncSelectAllBtn() {
  const btn = document.getElementById("selectAllBtn");
  if (!btn) return;
  const allSelected = CATEGORIES.every(c => selectedCats.has(c));
  btn.textContent   = allSelected ? "✕ Deselect All" : "✓ Select All";
  btn.dataset.state = allSelected ? "deselect" : "select";
}

function selectAllToggle() {
  const btn = document.getElementById("selectAllBtn");
  if (btn && btn.dataset.state === "deselect") {
    selectedCats.clear();
  } else {
    CATEGORIES.forEach(c => selectedCats.add(c));
  }
  buildCatChips();
  updateDrawBtn();
}

function toggleCat(cat, chip) {
  if (selectedCats.has(cat)) {
    selectedCats.delete(cat);
    chip.classList.remove("selected");
  } else {
    selectedCats.add(cat);
    chip.classList.add("selected");
  }
  syncSelectAllBtn();
  updateDrawBtn();
}

function updateDrawBtn() {
  const btn = document.getElementById("drawBtn");
  if (!btn) return;
  const empty = selectedCats.size === 0;
  btn.disabled = empty;
  btn.title = empty ? "Select at least one category" : "";
}

// ── Pause helpers ──────────────────────────────────────
function setPrepPaused(state) {
  prepPaused = state;
  const btn = document.getElementById("prepPauseBtn");
  const lbl = document.getElementById("prepPauseLabel");
  if (!btn || !lbl) return;
  lbl.textContent = prepPaused ? t("resumeBtn") : t("pauseBtn");
  if (prepPaused) {
    btn.classList.add("btn-paused");
  } else {
    btn.classList.remove("btn-paused");
  }
}

function setSpeakPaused(state) {
  speakPaused = state;
  const btn = document.getElementById("speakPauseBtn");
  const lbl = document.getElementById("speakPauseLabel");
  if (!btn || !lbl) return;
  lbl.textContent = speakPaused ? t("resumeBtn") : t("pauseBtn");
  if (speakPaused) {
    btn.classList.add("btn-paused");
  } else {
    btn.classList.remove("btn-paused");
  }
}

function togglePrepPause() { setPrepPaused(!prepPaused); }
function toggleSpeakPause() { setSpeakPaused(!speakPaused); }

// ── Round logic ────────────────────────────────────────
function startRound() {
  if (selectedCats.size === 0) return;
  clearInterval(timerInterval);
  setPrepPaused(false);
  setSpeakPaused(false);

  // Pick random category & topic
  const cats = [...selectedCats];
  currentCat = cats[Math.floor(Math.random() * cats.length)];
  const pool = TOPICS[currentCat];

  // Filter out already-practiced topics this session
  let unpracticed = pool.filter(t => !history.some(h => h.topic === t.en || h.topic === t.de));
  if (unpracticed.length === 0) unpracticed = pool;
  currentTopic = unpracticed[Math.floor(Math.random() * unpracticed.length)];

  const topicDisplay = lang === "en" ? currentTopic.en : currentTopic.de;
  const subDisplay   = lang === "en" ? currentTopic.sub_en : currentTopic.sub_de;

  document.getElementById("topicCat").textContent   = currentCat;
  document.getElementById("topicText").textContent  = topicDisplay;
  document.getElementById("topicSub").textContent   = subDisplay;
  document.getElementById("topicCat2").textContent  = currentCat;
  document.getElementById("topicText2").textContent = topicDisplay;
  document.getElementById("notesArea").value = "";

  showScreen("prep");
  setPhase("prep");

  const prepSec = parseInt(document.getElementById("prepTime").value);
  startTimer("prep", prepSec, () => autoStartSpeak());
}

function autoStartSpeak() {
  const btn = document.getElementById("speakBtn");
  if (btn) btn.textContent = "▶ " + t("startSpeakBtn");
  startSpeak();
}

function startSpeak() {
  clearInterval(timerInterval);
  setSpeakPaused(false);

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

  document.getElementById("doneTime").textContent  = timeStr;
  document.getElementById("doneNotes").textContent = notesVal || "—";

  renderEvalList();

  history.unshift({ topic: topicDisplay, cat: currentCat, time: timeStr, notes: notesVal });
  if (history.length > 50) history.pop();
  saveHistory();
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

// ── Timer engine ───────────────────────────────────────
function startTimer(type, seconds, onDone) {
  remaining     = seconds;
  totalTime     = seconds;
  urgencyBeeped = false;
  clearInterval(timerInterval);

  const isPrep  = type === "prep";
  const clockEl = document.getElementById(isPrep ? "prepClock" : "speakClock");
  const ringEl  = document.getElementById(isPrep ? "prepRing"  : "speakRing");
  const circ    = isPrep ? 239 : 427;

  function tick() {
    // Respect the correct pause state for each timer type
    if (isPrep ? prepPaused : speakPaused) return;
    remaining--;

    if (remaining === 15 && !urgencyBeeped) {
      urgencyBeeped = true;
      playUrgencyWarning();
    }

    updateTimerDisplay(clockEl, ringEl, circ, remaining, totalTime);

    if (remaining <= 0) {
      clearInterval(timerInterval);
      clockEl.textContent = "0:00";
      clockEl.className   = "timer-display done-color";
      ringEl.style.strokeDashoffset = circ;
      ringEl.classList.add("success-color");
      playTimesUp();
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
  const idx   = order.indexOf(p);
  order.forEach((ph, i) => {
    const el = document.getElementById(`phase-${ph}`);
    el.classList.remove("active", "done");
    if (i < idx)      el.classList.add("done");
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

// ── History rendering ──────────────────────────────────
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

    li.addEventListener("click", () => li.classList.toggle("expanded"));
    list.appendChild(li);
  });
}

function clearHistory() {
  history = [];
  saveHistory();
  renderHistory();
}

// ── Init ───────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Start with nothing selected — user picks their own or clicks Select All
  buildCatChips();
  updateDrawBtn();
  loadHistory();
  renderHistory();
  applyTranslations();
  showScreen("idle");
  setPhase("idle");
});
