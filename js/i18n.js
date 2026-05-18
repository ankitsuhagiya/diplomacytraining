// ═══════════════════════════════════════════════════════
// i18n.js — English & German UI translations
// Add a new language by copying one block and translating
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
  de: {
    phaseNum1: "01", phaseIdle: "Start", phasePrep: "Vorbereitung", phaseSpeak: "Vortrag", phaseDone: "Auswertung",
    heroTitle: "Vorbereitung auf den Auswärtigen Dienst",
    heroSub: "Zieh ein zufälliges Thema aus der Außenpolitik, notiere Kernpunkte und übe den freien Vortrag — genau wie in der Prüfung.",
    prepLabel: "Vorbereitungszeit",
    speakLabel: "Vortragszeit",
    catLabel: "Themenbereiche",
    drawBtn: "Thema ziehen",
    histLabel: "Sitzungsverlauf",
    prepPhaseLabel: "Vorbereitungsphase",
    prepNote: "Stichpunkte, Argumente, Beispiele notieren.",
    prepLeft: "verbleibend",
    hintTitle: "Tipp:",
    hintText: "Struktur: Kurzdefinition → Kontext → Akteure → Bewertung → Schlussfolgerung.",
    startSpeakBtn: "Vortrag beginnen",
    newTopicBtn: "Neues Thema",
    speakPhaseLabel: "Vortragsphase — Jetzt frei sprechen",
    speakLeft: "verbleibend",
    pauseBtn: "⏸ Pause",
    resumeBtn: "▶ Weiter",
    finishBtn: "✓ Vorzeitig beenden",
    notesRef: "Deine Notizen",
    doneLabel: "Runde abgeschlossen",
    yourNotesLabel: "Deine Notizen",
    selfEvalTitle: "Selbstauswertung:",
    evalItems: [
      "Habe ich mit einer klaren Definition oder Einordnung begonnen?",
      "Habe ich konkrete Beispiele, Verträge oder Institutionen genannt?",
      "Habe ich mehrere Perspektiven beleuchtet?",
      "War mein Schluss klar und überzeugend?",
      "War mein Vortrag strukturiert und flüssig?",
    ],
    nextTopicBtn: "Nächstes Thema ziehen",
    homeBtn: "↩ Startseite",
    notesPlaceholder: "Kernpunkte, Beispiele, Argumente…",
    timesUp: "Zeit abgelaufen",
    prepDone: "Vorbereitung beendet",
    secSpoken: "Sek. gesprochen",
    minSpoken: "Min. gesprochen",
    impressumLink: "Impressum",
    datenschutzLink: "Datenschutz",
    shareLabel: "Teilen",
  },
};

// Current language — can be changed at runtime via setLang()
let lang = "en";

function t(key) {
  return T[lang][key] ?? key;
}

function setLang(l) {
  lang = l;
  document.getElementById("btn-en").classList.toggle("active", l === "en");
  document.getElementById("btn-de").classList.toggle("active", l === "de");
  applyTranslations();
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

  // Sync language in any open modals
  document.querySelectorAll(".modal-lang-en").forEach(el => { el.style.display = lang === "en" ? "" : "none"; });
  document.querySelectorAll(".modal-lang-de").forEach(el => { el.style.display = lang === "de" ? "" : "none"; });

  buildCatChips();
}
