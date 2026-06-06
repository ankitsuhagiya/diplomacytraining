// ═══════════════════════════════════════════════════════
// i18n.js — English UI strings
// ═══════════════════════════════════════════════════════

const T = {
  en: {
    phaseNum1: "01", phaseIdle: "Start", phasePrep: "Prepare", phaseSpeak: "Speak", phaseDone: "Review",
    heroTitle: "Prepare for the Diplomatic Service",
    heroSub: "Draw a random topic from international relations, note key points, then practice your free speech — just as you would in the exam.",
    prepLabel: "Prep time",
    speakLabel: "Speak time",
    catLabel: "Topic categories",
    drawBtn: "Draw Topic",
    histLabel: "Session History",
    prepPhaseLabel: "Preparation Phase",
    prepNote: "Jot down key points, arguments, examples.",
    prepLeft: "left",
    hintTitle: "Tip:",
    hintText: "Structure: brief definition → context → key actors → your assessment → conclusion.",
    startSpeakBtn: "Begin Speaking",
    newTopicBtn: "New Topic",
    speakPhaseLabel: "Speaking Phase — Deliver your response",
    speakLeft: "remaining",
    pauseBtn: "⏸ Pause",
    resumeBtn: "▶ Resume",
    finishBtn: "✓ Finish Early",
    notesRef: "Your Notes",
    doneLabel: "Round Complete",
    yourNotesLabel: "Your Notes",
    selfEvalTitle: "Self-evaluation:",
    evalItems: [
      "Did I open with a clear definition or framing?",
      "Did I reference specific examples, treaties, or institutions?",
      "Did I present multiple perspectives?",
      "Was my conclusion clear and confident?",
      "Did I maintain a structured, fluent delivery?",
    ],
    nextTopicBtn: "Draw Next Topic",
    homeBtn: "↩ Home",
    notesPlaceholder: "Key points, examples, arguments, quotes…",
    timesUp: "Time's up",
    prepDone: "Preparation done",
    secSpoken: "sec spoken",
    minSpoken: "min spoken",
    impressumLink: "Legal Notice",
    datenschutzLink: "Privacy Policy",
    shareLabel: "Share",
  },
};

const lang = "en";

function t(key) {
  return T.en[key] ?? key;
}

function applyTranslations() {
  document.querySelectorAll("[data-t]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-t"));
  });
  document.querySelectorAll("[data-t-placeholder]").forEach((el) => {
    el.placeholder = t(el.getAttribute("data-t-placeholder"));
  });

  // Re-render eval list if on done screen
  if (document.getElementById("screen-done").style.display !== "none") {
    renderEvalList();
  }

  // Keep pause button label in sync
  const pauseLabel = document.getElementById("pauseLabel");
  if (pauseLabel) {
    pauseLabel.textContent = paused ? t("resumeBtn") : t("pauseBtn");
  }
}
