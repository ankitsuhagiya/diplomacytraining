// ═══════════════════════════════════════════════════════
// topics.js — Curated topic bank for DiplomacyPrep
// Each category has 10+ topics for varied practice.
// Add new topics: { en, de, sub_en, sub_de }
// ═══════════════════════════════════════════════════════

const TOPICS = {

  // ── 1 ──────────────────────────────────────────────
  "International Law": [
    { en: "The Responsibility to Protect (R2P)", de: "Die Schutzverantwortung (R2P)", sub_en: "Sovereignty, intervention, humanitarian action.", sub_de: "Souveränität, Intervention, humanitäres Handeln." },
    { en: "The International Criminal Court", de: "Der Internationale Strafgerichtshof", sub_en: "Jurisdiction, legitimacy, enforcement.", sub_de: "Zuständigkeit, Legitimität, Strafverfolgung." },
    { en: "Customary International Law", de: "Völkergewohnheitsrecht", sub_en: "Customary law, state practice, legal obligation.", sub_de: "Gewohnheitsrecht, Staatspraxis, rechtliche Verpflichtung." },
    { en: "The Law of the Sea (UNCLOS)", de: "Das Seerechtsübereinkommen (UNCLOS)", sub_en: "Law of the sea, maritime zones, navigation, resources.", sub_de: "Seerecht, Meereszonen, Navigation, Ressourcen." },
    { en: "State Sovereignty and its Limits", de: "Staatliche Souveränität und ihre Grenzen", sub_en: "Domestic jurisdiction, international limits, state conduct.", sub_de: "Inländische Gerichtsbarkeit, internationale Grenzen, staatliches Handeln." },
    { en: "The Vienna Convention on Consular Relations", de: "Das Wiener Übereinkommen über konsularische Beziehungen", sub_en: "Consular protection, access, foreign nationals.", sub_de: "Konsularischer Schutz, Zugang, ausländische Staatsangehörige." },
    { en: "International Humanitarian Law", de: "Internationales humanitäres Recht", sub_en: "Armed conflict, civilian protection, humanitarian law.", sub_de: "Bewaffneter Konflikt, Zivilschutz, humanitäres Recht." },
    { en: "The Use of Force in International Law", de: "Gewaltverbot im Völkerrecht", sub_en: "Use of force, self-defence, UN Charter.", sub_de: "Gewaltanwendung, Selbstverteidigung, UN-Charta." },
    { en: "Treaty Law and the Vienna Convention", de: "Vertragsrecht und die Wiener Vertragsrechtskonvention", sub_en: "Treaty formation, interpretation, termination.", sub_de: "Vertragsabschluss, Auslegung, Beendigung." },
    { en: "Universal Jurisdiction", de: "Universelle Gerichtsbarkeit", sub_en: "International crimes, jurisdiction, accountability.", sub_de: "Völkerrechtsverbrechen, Gerichtsbarkeit, Rechenschaftspflicht." },
    { en: "The Role of the International Court of Justice", de: "Die Rolle des Internationalen Gerichtshofs", sub_en: "Interstate disputes, settlement, enforcement.", sub_de: "Zwischenstaatliche Streitigkeiten, Beilegung, Durchsetzung." },
  ],

  // ── 2 ──────────────────────────────────────────────
  "Global Governance": [
    { en: "Reform of the UN Security Council", de: "Reform des UN-Sicherheitsrats", sub_en: "Representation, effectiveness, legitimacy.", sub_de: "Repräsentation, Effektivität, Legitimität." },
    { en: "Multilateralism in Crisis?", de: "Multilateralismus in der Krise?", sub_en: "Multipolarity, cooperation, coordination.", sub_de: "Multipolarität, Kooperation, Koordination." },
    { en: "The Role of Non-State Actors", de: "Die Rolle nichtstaatlicher Akteure", sub_en: "NGOs, business, civil society.", sub_de: "NGOs, Wirtschaft, Zivilgesellschaft." },
    { en: "Global Health Governance", de: "Globale Gesundheitsgovernance", sub_en: "WHO, pandemic preparedness, global solidarity.", sub_de: "WHO, Pandemievorbereitung, globale Solidarität." },
    { en: "The G7 and G20 as Governance Forums", de: "G7 und G20 als Governance-Foren", sub_en: "Informal summitry, multilateral institutions.", sub_de: "Informelle Gipfeldiplomatie, multilaterale Institutionen." },
    { en: "The Veto Power in the UN Security Council", de: "Das Vetorecht im UN-Sicherheitsrat", sub_en: "Security Council veto, international responses.", sub_de: "Sicherheitsratsveto, internationale Reaktionen." },
    { en: "Global Internet Governance", de: "Globale Internetgovernance", sub_en: "Internet governance, digital rule-making.", sub_de: "Internetgovernance, digitale Regelsetzung." },
    { en: "The UN General Assembly's Role", de: "Die Rolle der UN-Generalversammlung", sub_en: "Norm-setting, authority, implementation.", sub_de: "Normsetzung, Autorität, Umsetzung." },
    { en: "Legitimacy of International Institutions", de: "Legitimität internationaler Institutionen", sub_en: "Accountability, representation, oversight.", sub_de: "Rechenschaftspflicht, Repräsentation, Aufsicht." },
    { en: "The Governance of Artificial Intelligence", de: "Die Governance künstlicher Intelligenz", sub_en: "AI standards, regulation, competition.", sub_de: "KI-Standards, Regulierung, Wettbewerb." },
    { en: "Climate Governance and COP Negotiations", de: "Klimagovernance und COP-Verhandlungen", sub_en: "UN climate process, actors, ambition, implementation.", sub_de: "UN-Klimaprozess, Akteure, Ambitionen, Umsetzung." },
  ],

  // ── 3 ──────────────────────────────────────────────
  "European Union": [
    { en: "The EU's Strategic Autonomy", de: "Die strategische Autonomie der EU", sub_en: "Strategic autonomy, foreign and defence policy.", sub_de: "Strategische Autonomie, Außen- und Verteidigungspolitik." },
    { en: "EU Enlargement Policy", de: "Die EU-Erweiterungspolitik", sub_en: "Enlargement, Western Balkans, Ukraine.", sub_de: "Erweiterung, Westbalkan, Ukraine." },
    { en: "The Rule of Law in the EU", de: "Rechtsstaatlichkeit in der EU", sub_en: "Rule of law, democratic standards, member states.", sub_de: "Rechtsstaatlichkeit, demokratische Standards, Mitgliedstaaten." },
    { en: "EU Foreign Policy and CFSP", de: "EU-Außenpolitik und GASP", sub_en: "Common Foreign and Security Policy, coordination, limits.", sub_de: "Gemeinsame Außen- und Sicherheitspolitik, Koordination, Grenzen." },
    { en: "The Euro and European Monetary Union", de: "Der Euro und die Europäische Währungsunion", sub_en: "Fiscal integration, euro area, economic governance.", sub_de: "Fiskalintegration, Euroraum, wirtschaftliche Governance." },
    { en: "EU Neighbourhood Policy", de: "Die Europäische Nachbarschaftspolitik", sub_en: "Neighbourhood policy, eastern and southern borders.", sub_de: "Nachbarschaftspolitik, östliche und südliche Grenzen." },
    { en: "Brexit and its Aftermath", de: "Brexit und seine Folgen", sub_en: "EU–UK relations, post-Brexit cooperation.", sub_de: "EU-UK-Beziehungen, Zusammenarbeit nach dem Brexit." },
    { en: "The EU's Role in Global Climate Policy", de: "Die EU als globaler Klimaakteur", sub_en: "Green Deal, climate policy, external action.", sub_de: "Green Deal, Klimapolitik, externes Handeln." },
    { en: "Schengen and Border Management", de: "Schengen und Grenzmanagement", sub_en: "Free movement, migration, security.", sub_de: "Freizügigkeit, Migration, Sicherheit." },
    { en: "EU Defence and PESCO", de: "EU-Verteidigung und PESCO", sub_en: "Defence cooperation, PESCO, European integration.", sub_de: "Verteidigungskooperation, PESCO, europäische Integration." },
    { en: "The EU's Single Market", de: "Der europäische Binnenmarkt", sub_en: "Four freedoms, single market, regulatory power.", sub_de: "Vier Grundfreiheiten, Binnenmarkt, Regulierungsmacht." },
  ],

  // ── 4 ──────────────────────────────────────────────
  "Security & Defence": [
    { en: "NATO's Role in the 21st Century", de: "Die Rolle der NATO im 21. Jahrhundert", sub_en: "Collective defence, burden sharing, Article 5.", sub_de: "Kollektive Verteidigung, Lastenteilung, Artikel 5." },
    { en: "Nuclear Non-Proliferation", de: "Nukleare Nichtverbreitung", sub_en: "Nuclear non-proliferation, NPT, verification.", sub_de: "Nukleare Nichtverbreitung, NVV, Verifikation." },
    { en: "Hybrid Warfare", de: "Hybride Kriegsführung", sub_en: "Disinformation, cyber operations, grey-zone conflict.", sub_de: "Desinformation, Cyberoperationen, Grauzonenkonflikt." },
    { en: "Arms Control Treaties", de: "Rüstungskontrollverträge", sub_en: "Arms control, confidence-building, verification.", sub_de: "Rüstungskontrolle, Vertrauensbildung, Verifikation." },
    { en: "UN Peacekeeping Operations", de: "UN-Friedensmissionen", sub_en: "UN peacekeeping, mandates, effectiveness.", sub_de: "UN-Friedenssicherung, Mandate, Wirksamkeit." },
    { en: "The Future of Nuclear Deterrence", de: "Die Zukunft der nuklearen Abschreckung", sub_en: "Nuclear deterrence, escalation, strategic stability.", sub_de: "Nukleare Abschreckung, Eskalation, strategische Stabilität." },
    { en: "Space as a New Security Domain", de: "Weltraum als neue Sicherheitsdomäne", sub_en: "Space security, satellites, debris, militarisation.", sub_de: "Weltraumsicherheit, Satelliten, Weltraumschrott, Militarisierung." },
    { en: "Terrorism and Counter-Terrorism", de: "Terrorismus und Terrorismusbekämpfung", sub_en: "Use of force, civilian protection, legal limits.", sub_de: "Gewaltanwendung, Zivilschutz, rechtliche Grenzen." },
    { en: "Private Military Companies", de: "Private Militärunternehmen", sub_en: "Private military companies, outsourcing, regulation.", sub_de: "Private Militärunternehmen, Auslagerung, Regulierung." },
    { en: "Energy Security", de: "Energiesicherheit", sub_en: "Energy security, pipelines, diversification.", sub_de: "Energiesicherheit, Pipelines, Diversifizierung." },
    { en: "Autonomous Weapons Systems", de: "Autonome Waffensysteme", sub_en: "Autonomous weapons, AI, legal and strategic risk.", sub_de: "Autonome Waffen, KI, rechtliche und strategische Risiken." },
    { en: "Maritime Security", de: "Maritime Sicherheit", sub_en: "Maritime security, piracy, contested waters, sea lanes.", sub_de: "Maritime Sicherheit, Piraterie, umstrittene Gewässer, Seewege." },
  ],

  // ── 5 ──────────────────────────────────────────────
  "Development & Sustainability": [
    { en: "The UN Sustainable Development Goals", de: "Die UN-Nachhaltigkeitsziele", sub_en: "SDGs, development cooperation, implementation.", sub_de: "SDGs, Entwicklungszusammenarbeit, Umsetzung." },
    { en: "Climate Diplomacy", de: "Klimadiplomatie", sub_en: "Paris Agreement, COP, climate finance.", sub_de: "Pariser Abkommen, COP, Klimafinanzierung." },
    { en: "Development Aid vs. Development Finance", de: "Entwicklungshilfe vs. Entwicklungsfinanzierung", sub_en: "North-South cooperation, partnerships, equity.", sub_de: "Nord-Süd-Kooperation, Partnerschaften, Gerechtigkeit." },
    { en: "Food Security and Global Hunger", de: "Ernährungssicherheit und globaler Hunger", sub_en: "Food security, agriculture, global supply chains.", sub_de: "Ernährungssicherheit, Landwirtschaft, globale Lieferketten." },
    { en: "Loss and Damage in Climate Negotiations", de: "Verluste und Schäden in den Klimaverhandlungen", sub_en: "Loss and damage, climate vulnerability, financing.", sub_de: "Verluste und Schäden, Klimavulnerabilität, Finanzierung." },
    { en: "The Role of China in African Development", de: "Chinas Rolle in der afrikanischen Entwicklung", sub_en: "China in Africa, infrastructure, investment, debt.", sub_de: "China in Afrika, Infrastruktur, Investitionen, Schulden." },
    { en: "Transboundary Water Conflicts", de: "Grenzüberschreitende Wasserkonflikte", sub_en: "Water cooperation, shared river basins, dams.", sub_de: "Wasserkooperation, gemeinsame Flusseinzugsgebiete, Staudämme." },
    { en: "Just Transition and Global Equity", de: "Gerechter Übergang und globale Gerechtigkeit", sub_en: "Just transition, energy transition, development.", sub_de: "Gerechter Übergang, Energiewende, Entwicklung." },
    { en: "Biodiversity Loss as a Global Security Threat", de: "Biodiversitätsverlust als globale Sicherheitsbedrohung", sub_en: "Biodiversity, Kunming-Montreal Framework, implementation.", sub_de: "Biodiversität, Kunming-Montreal-Rahmenwerk, Umsetzung." },
    { en: "Climate Change Adaptation and Mitigation", de: "Klimawandelanpassung und -minderung", sub_en: "Climate adaptation, mitigation, finance.", sub_de: "Klimaanpassung, Minderung, Finanzierung." },
    { en: "Critical Raw Materials and the Green Economy", de: "Kritische Rohstoffe und die grüne Wirtschaft", sub_en: "Critical raw materials, supply chains, transition.", sub_de: "Kritische Rohstoffe, Lieferketten, Transition." },
  ],

  // ── 6 ──────────────────────────────────────────────
  "Economics & Trade": [
    { en: "The WTO in the Age of Protectionism", de: "Die WTO im Zeitalter des Protektionismus", sub_en: "Trade rules, WTO, dispute settlement.", sub_de: "Handelsregeln, WTO, Streitbeilegung." },
    { en: "Economic Sanctions as a Foreign Policy Tool", de: "Wirtschaftssanktionen als außenpolitisches Instrument", sub_en: "Sanctions, restrictions, legal limits.", sub_de: "Sanktionen, Beschränkungen, rechtliche Grenzen." },
    { en: "The Global Financial Architecture", de: "Die globale Finanzarchitektur", sub_en: "IMF, World Bank, debt relief.", sub_de: "IWF, Weltbank, Schuldenentlastung." },
    { en: "Trade and Human Rights", de: "Handel und Menschenrechte", sub_en: "Trade and human rights, conditionality.", sub_de: "Handel und Menschenrechte, Konditionalität." },
    { en: "The Dollar as Global Reserve Currency", de: "Der Dollar als globale Reservewährung", sub_en: "Reserve currencies, financial power, alternatives.", sub_de: "Reservewährungen, Finanzmacht, Alternativen." },
    { en: "Supply Chain Resilience and Decoupling", de: "Lieferkettensicherheit und Entkopplung", sub_en: "Globalisation, supply chains, shocks.", sub_de: "Globalisierung, Lieferketten, Schocks." },
    { en: "The Rise of the BRICS Economies", de: "Der Aufstieg der BRICS-Staaten", sub_en: "BRICS, cooperation, economic formats.", sub_de: "BRICS, Kooperation, Wirtschaftsformate." },
    { en: "Free Trade Agreements in the 21st Century", de: "Freihandelsabkommen im 21. Jahrhundert", sub_en: "Free trade agreements, market access.", sub_de: "Freihandelsabkommen, Marktzugang." },
    { en: "Tax Havens and Global Tax Reform", de: "Steueroasen und globale Steuerreform", sub_en: "International taxation, tax havens, minimum tax.", sub_de: "Internationale Besteuerung, Steueroasen, Mindeststeuer." },
    { en: "The Geopolitics of Trade in Services", de: "Die Geopolitik des Dienstleistungshandels", sub_en: "Services trade, digital trade, standards.", sub_de: "Dienstleistungshandel, digitaler Handel, Standards." },
    { en: "Economic Statecraft", de: "Wirtschaftliche Staatskunst", sub_en: "Economic statecraft, leverage, interdependence.", sub_de: "Wirtschaftliche Staatskunst, Hebel, Interdependenz." },
    { en: "Regional Development Banks", de: "Regionale Entwicklungsbanken", sub_en: "Development banks, regional finance, lending.", sub_de: "Entwicklungsbanken, regionale Finanzierung, Kreditvergabe." },
  ],

  // ── 7 ──────────────────────────────────────────────
  "Human Rights & Democracy": [
    { en: "Women, Peace and Security", de: "Frauen, Frieden und Sicherheit", sub_en: "Women, peace and security, conflict.", sub_de: "Frauen, Frieden und Sicherheit, Konflikt." },
    { en: "Transitional Justice", de: "Transitionale Gerechtigkeit", sub_en: "Transitional justice, tribunals, reconciliation.", sub_de: "Transitionale Gerechtigkeit, Tribunale, Versöhnung." },
    { en: "Freedom of the Press Internationally", de: "Pressefreiheit international", sub_en: "Press freedom, journalism, media protection.", sub_de: "Pressefreiheit, Journalismus, Medienschutz." },
    { en: "Democratic Backsliding", de: "Demokratischer Rückschritt", sub_en: "Authoritarianism, democratic resilience, international response.", sub_de: "Autoritarismus, demokratische Resilienz, internationale Reaktion." },
    { en: "The Rights of Indigenous Peoples", de: "Die Rechte indigener Völker", sub_en: "Self-determination, indigenous rights, autonomy.", sub_de: "Selbstbestimmung, indigene Rechte, Autonomie." },
    { en: "Children's Rights in Conflict Zones", de: "Kinderrechte in Konfliktgebieten", sub_en: "Children in armed conflict, education, protection.", sub_de: "Kinder in bewaffneten Konflikten, Bildung, Schutz." },
    { en: "The Death Penalty and International Norms", de: "Todesstrafe und internationale Normen", sub_en: "Death penalty, abolition, retention.", sub_de: "Todesstrafe, Abschaffung, Beibehaltung." },
    { en: "LGBTQ+ Rights as Foreign Policy", de: "LGBTQ+-Rechte als außenpolitisches Thema", sub_en: "Rights conditionality, sovereignty, cultural context.", sub_de: "Rechtskonditionalität, Souveränität, kultureller Kontext." },
    { en: "Election Observation and Democratic Integrity", de: "Wahlbeobachtung und demokratische Integrität", sub_en: "Human rights monitoring, accountability, implementation.", sub_de: "Menschenrechtsbeobachtung, Rechenschaftspflicht, Umsetzung." },
    { en: "The Human Rights Council", de: "Der UN-Menschenrechtsrat", sub_en: "Human Rights Council, membership, legitimacy.", sub_de: "Menschenrechtsrat, Mitgliedschaft, Legitimität." },
    { en: "Corporate Responsibility for Human Rights", de: "Unternehmensverantwortung für Menschenrechte", sub_en: "Business and human rights, due diligence.", sub_de: "Wirtschaft und Menschenrechte, Sorgfaltspflichten." },
  ],

  // ── 8 ──────────────────────────────────────────────
  "Diplomacy": [
    { en: "Mediation and Conflict Resolution", de: "Mediation und Konfliktlösung", sub_en: "Mediation, third-party facilitation, peace processes.", sub_de: "Mediation, Drittpartei-Vermittlung, Friedensprozesse." },
    { en: "Public Diplomacy and Soft Power", de: "Öffentliche Diplomatie und Soft Power", sub_en: "Public diplomacy, culture, communication.", sub_de: "Öffentliche Diplomatie, Kultur, Kommunikation." },
    { en: "Diplomatic Immunity", de: "Diplomatische Immunität", sub_en: "Vienna Convention, diplomatic law, limits.", sub_de: "Wiener Übereinkommen, Diplomatenrecht, Grenzen." },
    { en: "Summit Diplomacy", de: "Gipfeldiplomatie", sub_en: "Summit diplomacy, leader-level negotiations.", sub_de: "Gipfeldiplomatie, Verhandlungen auf höchster Ebene." },
    { en: "Track II Diplomacy", de: "Track-II-Diplomatie", sub_en: "Back channels, informal dialogue, Track II.", sub_de: "Hinterkanäle, informeller Dialog, Track II." },
    { en: "Economic Diplomacy", de: "Wirtschaftsdiplomatie", sub_en: "Economic diplomacy, trade, investment, national interests.", sub_de: "Wirtschaftsdiplomatie, Handel, Investitionen, nationale Interessen." },
    { en: "Consular Affairs and Citizen Protection", de: "Konsularwesen und Bürgerbetreuung", sub_en: "Consular protection, nationals abroad, legal frameworks.", sub_de: "Konsularischer Schutz, Staatsbürger im Ausland, rechtliche Rahmenbedingungen." },
    { en: "Negotiation Theory in International Affairs", de: "Verhandlungstheorie in den internationalen Beziehungen", sub_en: "Negotiation, BATNA, integrative bargaining.", sub_de: "Verhandlung, BATNA, integratives Verhandeln." },
    { en: "The Foreign Service as a Career", de: "Der Auswärtige Dienst als Beruf", sub_en: "Diplomatic skills, values, professional practice.", sub_de: "Diplomatische Fähigkeiten, Werte, professionelle Praxis." },
    { en: "Multilateral Negotiation Dynamics", de: "Multilaterale Verhandlungsdynamiken", sub_en: "Coalition-building, blocking minorities, agenda-setting.", sub_de: "Koalitionsbildung, Sperrminoritäten, Tagesordnungsgestaltung." },
    { en: "Digital Diplomacy", de: "Digitale Diplomatie", sub_en: "Digital diplomacy, social media, e-government.", sub_de: "Digitale Diplomatie, soziale Medien, E-Government." },
  ],

  // ── 9 ──────────────────────────────────────────────
  "Technology & Cyber": [
    { en: "Cybersecurity as a Foreign Policy Issue", de: "Cybersicherheit als außenpolitisches Thema", sub_en: "Cybersecurity, state responsibility, attribution.", sub_de: "Cybersicherheit, staatliche Verantwortung, Attribution." },
    { en: "Artificial Intelligence and International Security", de: "Künstliche Intelligenz und internationale Sicherheit", sub_en: "AI, security, military and economic power.", sub_de: "KI, Sicherheit, militärische und wirtschaftliche Macht." },
    { en: "The Governance of Artificial Intelligence", de: "Die Governance künstlicher Intelligenz", sub_en: "AI regulation, standards, international competition.", sub_de: "KI-Regulierung, Standards, internationaler Wettbewerb." },
    { en: "Critical Infrastructure Protection", de: "Schutz kritischer Infrastruktur", sub_en: "Critical infrastructure, cyberattacks, resilience.", sub_de: "Kritische Infrastruktur, Cyberangriffe, Resilienz." },
    { en: "Disinformation as a Tool of Foreign Policy", de: "Desinformation als außenpolitisches Instrument", sub_en: "Influence operations, democratic resilience.", sub_de: "Einflussoperationen, demokratische Resilienz." },
    { en: "The Digital Silk Road", de: "Die digitale Seidenstraße", sub_en: "Digital sovereignty, infrastructure, technology policy.", sub_de: "Digitale Souveränität, Infrastruktur, Technologiepolitik." },
    { en: "Semiconductor Geopolitics", de: "Geopolitik der Halbleiter", sub_en: "Semiconductors, export controls, supply chains.", sub_de: "Halbleiter, Exportkontrollen, Lieferketten." },
    { en: "International Norms for Cyberwarfare", de: "Internationale Normen für Cyberkriegsführung", sub_en: "Cyberspace, state responsibility, norms.", sub_de: "Cyberraum, staatliche Verantwortung, Normen." },
    { en: "Data Sovereignty and Cross-Border Data Flows", de: "Datensouveränität und grenzüberschreitende Datenflüsse", sub_en: "Data localisation, internet governance, openness.", sub_de: "Datenlokalisierung, Internetgovernance, Offenheit." },
    { en: "Tech Giants and Foreign Policy", de: "Tech-Konzerne und Außenpolitik", sub_en: "Platforms, political influence, global regulation.", sub_de: "Plattformen, politischer Einfluss, globale Regulierung." },
    { en: "Space Technology and International Competition", de: "Raumfahrttechnologie und internationaler Wettbewerb", sub_en: "Space technology, satellites, commercialisation, security.", sub_de: "Raumfahrttechnologie, Satelliten, Kommerzialisierung, Sicherheit." },
  ],

  // ── 10 ─────────────────────────────────────────────
  "Migration & Refugees": [
    { en: "The 1951 Refugee Convention Today", de: "Die Genfer Flüchtlingskonvention von 1951 heute", sub_en: "Refugee protection, 1951 Convention, asylum.", sub_de: "Flüchtlingsschutz, Genfer Konvention, Asyl." },
    { en: "The Global Compact on Refugees", de: "Der Globale Flüchtlingspakt", sub_en: "Host communities, burden-sharing, political will.", sub_de: "Aufnahmegemeinschaften, Lastenteilung, politischer Wille." },
    { en: "Climate Migration", de: "Klimamigration", sub_en: "Climate-related displacement, protection, mobility.", sub_de: "Klimabedingte Vertreibung, Schutz, Mobilität." },
    { en: "The EU's Migration Policy", de: "Die Migrationspolitik der EU", sub_en: "New Pact on Migration and Asylum, implementation.", sub_de: "Neuer Migrations- und Asylpakt, Umsetzung." },
    { en: "Migration and Development", de: "Migration und Entwicklung", sub_en: "Remittances, brain drain, diaspora.", sub_de: "Rücküberweisungen, Braindrain, Diaspora." },
    { en: "Statelessness in International Law", de: "Staatenlosigkeit im Völkerrecht", sub_en: "Statelessness, nationality, legal identity.", sub_de: "Staatenlosigkeit, Staatsangehörigkeit, rechtliche Identität." },
    { en: "Externalisation of Border Control", de: "Externalisierung der Grenzkontrolle", sub_en: "External border management, third countries.", sub_de: "Externes Grenzmanagement, Drittländer." },
    { en: "Internal Displacement", de: "Binnenvertreibung", sub_en: "Internal displacement, Guiding Principles, protection gaps.", sub_de: "Binnenvertreibung, Leitprinzipien, Schutzlücken." },
    { en: "The Politics of Asylum", de: "Die Politik des Asyls", sub_en: "Asylum procedures, standards, domestic policy.", sub_de: "Asylverfahren, Standards, nationale Politik." },
    { en: "Labour Migration and Global Inequality", de: "Arbeitsmigration und globale Ungleichheit", sub_en: "Labour migration, migrant workers, sending states.", sub_de: "Arbeitsmigration, Wanderarbeitnehmer, Herkunftsländer." },
    { en: "UNHCR and the International Refugee System", de: "UNHCR und das internationale Flüchtlingssystem", sub_en: "UNHCR, mandate, funding, displacement.", sub_de: "UNHCR, Mandat, Finanzierung, Vertreibung." },
  ],

  // ── 11 ─────────────────────────────────────────────
  "History of International Relations": [
    { en: "The Westphalian Order", de: "Die Westfälische Ordnung", sub_en: "State system, sovereignty, diplomacy.", sub_de: "Staatensystem, Souveränität, Diplomatie." },
    { en: "The Congress of Vienna (1815)", de: "Der Wiener Kongress (1815)", sub_en: "Congress of Vienna, balance of power.", sub_de: "Wiener Kongress, Gleichgewicht der Kräfte." },
    { en: "The League of Nations — Rise and Failure", de: "Der Völkerbund — Aufstieg und Scheitern", sub_en: "League of Nations, collective security.", sub_de: "Völkerbund, kollektive Sicherheit." },
    { en: "The Yalta and Potsdam Conferences", de: "Die Konferenzen von Jalta und Potsdam", sub_en: "Postwar diplomacy, United Nations, institutions.", sub_de: "Nachkriegsdiplomatie, Vereinte Nationen, Institutionen." },
    { en: "The Cold War as a Geopolitical Structure", de: "Der Kalte Krieg als geopolitische Struktur", sub_en: "Bipolarity, proxy conflicts, deterrence.", sub_de: "Bipolarität, Stellvertreterkriege, Abschreckung." },
    { en: "Decolonisation and Independence Movements", de: "Dekolonisierung und Unabhängigkeitsbewegungen", sub_en: "Decolonisation, independence, new states.", sub_de: "Dekolonisierung, Unabhängigkeit, neue Staaten." },
    { en: "The Cuban Missile Crisis", de: "Die Kubakrise", sub_en: "Cuban Missile Crisis, nuclear diplomacy.", sub_de: "Kubakrise, nukleare Diplomatie." },
    { en: "The End of the Cold War", de: "Das Ende des Kalten Krieges", sub_en: "End of the Cold War, transition, change.", sub_de: "Ende des Kalten Krieges, Übergang, Wandel." },
    { en: "The Concert of Europe", de: "Das Europäische Konzert", sub_en: "Great-power management, nineteenth century.", sub_de: "Großmächteverwaltung, neunzehntes Jahrhundert." },
    { en: "The Non-Aligned Movement and the Global South", de: "Die Blockfreienbewegung und der Globale Süden", sub_en: "Bandung, non-alignment, Global South.", sub_de: "Bandung, Blockfreiheit, Globaler Süden." },
    { en: "State Formation and Border-Making", de: "Staatsentstehung und Grenzziehung", sub_en: "Borders, self-determination, state formation.", sub_de: "Grenzen, Selbstbestimmung, Staatsentstehung." },
  ],

  // ── 12 ─────────────────────────────────────────────
  "Foreign Policy & Area Studies": [
    { en: "US–China Relations", de: "Die amerikanisch-chinesischen Beziehungen", sub_en: "US–China relations, trade, technology, security.", sub_de: "US-China-Beziehungen, Handel, Technologie, Sicherheit." },
    { en: "Africa's Regional Diplomacy", de: "Afrikas regionale Diplomatie", sub_en: "Africa's regional diplomacy, AU, ECOWAS, mediation.", sub_de: "Afrikas regionale Diplomatie, AU, ECOWAS, Mediation." },
    { en: "The Indo-Pacific / Asia-Pacific", de: "Der Indo-Pazifik / Asien-Pazifik", sub_en: "Asia–Pacific regional order, alliances, security architecture.", sub_de: "Asien-Pazifik-Regionalordnung, Allianzen, Sicherheitsarchitektur." },
    { en: "Middle East Security Architecture", de: "Die Sicherheitsarchitektur des Nahen Ostens", sub_en: "Middle East regional order, alliances, proxy conflicts.", sub_de: "Nahöstliche Regionalordnung, Allianzen, Stellvertreterkriege." },
    { en: "Latin America's Regional Diplomacy", de: "Lateinamerikas regionale Diplomatie", sub_en: "Latin America's regional diplomacy, CELAC, Mercosur.", sub_de: "Lateinamerikas regionale Diplomatie, CELAC, Mercosur." },
    { en: "ASEAN and Regional Cooperation", de: "ASEAN und regionale Zusammenarbeit", sub_en: "ASEAN, consensus, non-interference, integration.", sub_de: "ASEAN, Konsens, Nichteinmischung, Integration." },
    { en: "Arctic Governance", de: "Arktisgovernance", sub_en: "Arctic governance, climate, Indigenous peoples.", sub_de: "Arktisgovernance, Klima, indigene Völker." },
    { en: "Russia in Regional and Global Politics", de: "Russland in der Regional- und Weltpolitik", sub_en: "Russia in the world, conflict, international order.", sub_de: "Russland in der Welt, Konflikt, internationale Ordnung." },
    { en: "India as a Rising Power", de: "Indien als aufsteigende Macht", sub_en: "India as a rising power, neighbourhood, balancing.", sub_de: "Indien als aufsteigende Macht, Nachbarschaft, Balancierung." },
    { en: "Turkey's Foreign Policy", de: "Die Außenpolitik der Türkei", sub_en: "Turkey's foreign policy, regional role, alliances.", sub_de: "Türkische Außenpolitik, regionale Rolle, Allianzen." },
    { en: "The Gulf States and Regional Order", de: "Die Golfstaaten und die regionale Ordnung", sub_en: "Gulf states and regional order, energy, security, cooperation.", sub_de: "Golfstaaten und regionale Ordnung, Energie, Sicherheit, Kooperation." },
  ],

};

const CATEGORIES = Object.keys(TOPICS);
