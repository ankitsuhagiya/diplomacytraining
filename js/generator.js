// ═══════════════════════════════════════════════════════
// generator.js — Offline ML Subtopic Generator
// ═══════════════════════════════════════════════════════

const STOPWORDS = new Set([
  "the", "and", "a", "of", "to", "in", "is", "that", "it", "on", "for", "with", "as", 
  "was", "at", "by", "an", "be", "this", "are", "from", "or", "have", "not", "but", 
  "your", "we", "our", "their", "my", "you", "i", "he", "she", "they", "this", "these",
  "those", "then", "also", "very", "some", "any", "out", "into", "about", "which", 
  "who", "whom", "whose", "what", "which", "how", "why", "where", "when", "on", "about",
  "over", "under", "between", "against", "during", "before", "after"
]);

const CATEGORY_KEYWORDS = {
  "International Law": ["law", "legal", "treaty", "court", "sovereignty", "jurisdiction", "unclos", "vienna", "convention", "charter", "tribunal", "compliance", "obligation", "rights"],
  "Global Governance": ["un", "multilateralism", "governance", "cooperation", "reform", "who", "g7", "g20", "multilateral", "institutions", "coalition", "system", "global"],
  "European Union": ["eu", "europe", "european", "schengen", "pesco", "binnenmarkt", "single", "market", "enlargement", "commission", "brussels", "union"],
  "Security & Defence": ["nato", "security", "defence", "weapons", "nuclear", "warfare", "conflict", "deterrence", "military", "force", "terrorism", "alliances", "threat", "escalation"],
  "Development & Sustainability": ["climate", "sustainability", "sdg", "biodiversity", "environment", "cop", "carbon", "green", "aid", "sustainable", "warming", "energy"],
  "Economics & Trade": ["trade", "economy", "market", "finance", "sanctions", "tariffs", "wto", "economic", "supply", "chain", "investment", "interdependence"],
  "Human Rights & Democracy": ["rights", "human", "democracy", "equality", "freedom", "indigenous", "values", "backsliding", "civic", "liberties", "speech", "justice"],
  "Diplomacy": ["diplomacy", "negotiation", "mediation", "immunity", "summit", "dialogue", "soft", "power", "consular", "ambassador", "bilateral", "relations"],
  "Technology & Cyber": ["cyber", "ai", "technology", "artificial", "intelligence", "semiconductor", "digital", "infrastructure", "chips", "tech", "hacks", "data"],
  "Migration & Refugees": ["migration", "refugee", "asylum", "unhcr", "border", "displacement", "immigrant", "stateless", "migrants", "refugees"],
  "History of International Relations": ["history", "cold", "war", "westphalian", "potsdam", "yalta", "congress", "vienna", "decolonisation", "historical", "treaties", "past"],
  "Foreign Policy & Area Studies": ["china", "us", "russia", "india", "middle", "east", "africa", "asia", "latin", "america", "indo-pacific", "american", "russian", "chinese"]
};

const CATEGORY_TEMPLATES = {
  "International Law": [
    "Determine the legal frameworks and conventions (e.g. UN Charter) governing [Keyword 1].",
    "Analyze the conflict between state sovereignty and compliance with [Keyword 2].",
    "Evaluate potential arbitration or dispute settlement mechanisms."
  ],
  "Global Governance": [
    "Outline the role of multilateral institutions (e.g. UN, G20) in addressing [Keyword 1].",
    "Evaluate cooperation barriers and national interest conflicts regarding [Keyword 2].",
    "Propose structural reforms to improve systemic accountability."
  ],
  "European Union": [
    "Examine the EU's policy alignment and strategic autonomy on [Keyword 1].",
    "Detail the internal market regulations or single market implications for [Keyword 2].",
    "Assess EU relations with external partners concerning this issue."
  ],
  "Security & Defence": [
    "Contextualize the threat profile and strategic stability surrounding [Keyword 1].",
    "Evaluate the role of defensive alliances (like NATO) or [Keyword 2] in deterrence.",
    "Assess the risks of military escalation and crisis communication channels."
  ],
  "Development & Sustainability": [
    "Connect [Keyword 1] to the UN Sustainable Development Goals (SDGs) and climate targets.",
    "Analyze the North-South division regarding funding and technology transfer for [Keyword 2].",
    "Formulate key steps for a green economy transition."
  ],
  "Economics & Trade": [
    "Analyze how [Keyword 1] and [Keyword 2] impact supply chain resilience and trade flows.",
    "Evaluate the effectiveness of economic statecraft (e.g. tariffs, sanctions) here.",
    "Assess the long-term trade-offs between decoupling and global interdependence."
  ],
  "Human Rights & Democracy": [
    "Assess the normative human rights dimensions or democratic values at stake with [Keyword 1].",
    "Analyze the tension between universal rights and sovereign jurisdiction on [Keyword 2].",
    "Propose measures to reinforce democratic resilience or minority rights."
  ],
  "Diplomacy": [
    "Explore bilateral or multilateral negotiation strategies for resolving [Keyword 1].",
    "Evaluate the role of summit diplomacy and [Keyword 2] as leverage.",
    "Detail public diplomacy or soft power channels to build consensus."
  ],
  "Technology & Cyber": [
    "Evaluate the cybersecurity threats and infrastructure vulnerabilities linked to [Keyword 1].",
    "Analyze regulatory standard-setting and competition over [Keyword 2].",
    "Discuss how technological sovereignty impacts diplomatic relations."
  ],
  "Migration & Refugees": [
    "Frame [Keyword 1] within the 1951 Refugee Convention and international obligations.",
    "Analyze border control policies and humanitarian responsibility-sharing for [Keyword 2].",
    "Propose integration or protection pathways for displaced groups."
  ],
  "History of International Relations": [
    "Trace the historical roots and Westphalian principles underlying [Keyword 1].",
    "Compare the current dispute to past diplomatic crises (e.g. Cold War, Yalta) on [Keyword 2].",
    "Detail the evolution of state borders or regional alliances."
  ],
  "Foreign Policy & Area Studies": [
    "Outline the bilateral relationship and geopolitical friction between key states on [Keyword 1].",
    "Evaluate the regional influence and alliances regarding [Keyword 2].",
    "Predict the strategic policy shifts of major powers (e.g. US, China)."
  ],
  "General": [
    "Identify the primary state and non-state actors and their strategic interests in [Keyword 1].",
    "Deconstruct the immediate policy challenges and systemic implications of [Keyword 2].",
    "Formulate forward-looking recommendations that address the core trade-offs."
  ]
};

function generateSubtopicsForTopic(topicText) {
  // 1. Clean and tokenize text
  const cleanText = topicText.toLowerCase().replace(/[^a-z\s]/g, " ");
  const rawTokens = cleanText.split(/\s+/).filter(t => t.length > 2);
  const tokens = rawTokens.filter(t => !STOPWORDS.has(t));

  // 2. Classify to find category
  const scores = {};
  Object.keys(CATEGORY_KEYWORDS).forEach(cat => {
    scores[cat] = 0;
    CATEGORY_KEYWORDS[cat].forEach(kw => {
      if (tokens.includes(kw)) {
        scores[cat] += 1;
      }
    });
  });

  let matchedCategory = "General";
  let highestScore = 0;
  Object.keys(scores).forEach(cat => {
    if (scores[cat] > highestScore) {
      highestScore = scores[cat];
      matchedCategory = cat;
    }
  });

  // If no category matched, fall back to "General" (but display under "Diplomacy" for user context)
  const displayCategory = matchedCategory === "General" ? "Diplomacy" : matchedCategory;

  // 3. Extract top keywords
  // Capitalize tokens for clean template rendering
  const cleanKeywords = tokens.map(t => t.charAt(0).toUpperCase() + t.slice(1));
  
  let keyword1 = "this topic";
  let keyword2 = "diplomatic affairs";

  if (cleanKeywords.length > 0) {
    keyword1 = cleanKeywords[0];
  }
  if (cleanKeywords.length > 1) {
    keyword2 = cleanKeywords[1];
  } else if (cleanKeywords.length === 1) {
    keyword2 = "related policies";
  }

  // 4. Fill templates
  const templates = CATEGORY_TEMPLATES[matchedCategory];
  const subtopics = templates.map(tpl => {
    return tpl.replace("[Keyword 1]", keyword1).replace("[Keyword 2]", keyword2);
  });

  return {
    category: displayCategory,
    subtopics: subtopics
  };
}
