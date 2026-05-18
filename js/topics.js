// ═══════════════════════════════════════════════════════
// topics.js — Curated topic bank for DiplomacyPrep
// Each category has 10+ topics for varied practice.
// Add new topics: { en, de, sub_en, sub_de }
// ═══════════════════════════════════════════════════════

const TOPICS = {

  // ── 1 ──────────────────────────────────────────────
  "International Law": [
    { en: "The Responsibility to Protect (R2P)", de: "Die Schutzverantwortung (R2P)", sub_en: "When does sovereignty give way to international intervention?", sub_de: "Wann weicht Souveränität dem internationalen Eingriff?" },
    { en: "The International Criminal Court", de: "Der Internationale Strafgerichtshof", sub_en: "Legitimacy, jurisdiction, and the challenge of enforcement.", sub_de: "Legitimität, Zuständigkeit und die Herausforderung der Strafverfolgung." },
    { en: "Customary International Law", de: "Völkergewohnheitsrecht", sub_en: "How unwritten norms become binding on states.", sub_de: "Wie ungeschriebene Normen für Staaten verbindlich werden." },
    { en: "The Law of the Sea (UNCLOS)", de: "Das Seerechtsübereinkommen (UNCLOS)", sub_en: "Maritime zones, navigation rights, and resource sovereignty.", sub_de: "Meeresgebiete, Navigationsrechte und Ressourcensouveränität." },
    { en: "State Sovereignty and its Limits", de: "Staatliche Souveränität und ihre Grenzen", sub_en: "How international law constrains what states may do within their borders.", sub_de: "Wie das Völkerrecht staatliches Handeln im Inneren begrenzt." },
    { en: "The Vienna Convention on Consular Relations", de: "Das Wiener Übereinkommen über konsularische Beziehungen", sub_en: "Consular protection, access, and the rights of foreign nationals.", sub_de: "Konsularischer Schutz, Zugang und Rechte ausländischer Staatsangehöriger." },
    { en: "International Humanitarian Law", de: "Internationales humanitäres Recht", sub_en: "The laws of armed conflict and the protection of civilians.", sub_de: "Das Recht der bewaffneten Konflikte und der Schutz von Zivilpersonen." },
    { en: "The Use of Force in International Law", de: "Gewaltverbot im Völkerrecht", sub_en: "Article 2(4) of the UN Charter, self-defence, and exceptions.", sub_de: "Artikel 2(4) der UN-Charta, Selbstverteidigung und Ausnahmen." },
    { en: "Treaty Law and the Vienna Convention", de: "Vertragsrecht und die Wiener Vertragsrechtskonvention", sub_en: "How international treaties are made, interpreted, and terminated.", sub_de: "Wie völkerrechtliche Verträge geschlossen, ausgelegt und beendet werden." },
    { en: "Universal Jurisdiction", de: "Universelle Gerichtsbarkeit", sub_en: "Can any state prosecute the gravest international crimes?", sub_de: "Kann jeder Staat die schwersten Völkerrechtsverbrechen verfolgen?" },
    { en: "The Role of the International Court of Justice", de: "Die Rolle des Internationalen Gerichtshofs", sub_en: "Settling disputes between states — powers, limits, and enforcement.", sub_de: "Streitbeilegung zwischen Staaten — Befugnisse, Grenzen, Durchsetzung." },
  ],

  // ── 2 ──────────────────────────────────────────────
  "Global Governance": [
    { en: "Reform of the UN Security Council", de: "Reform des UN-Sicherheitsrats", sub_en: "Expanding representation vs. preserving effectiveness.", sub_de: "Repräsentativität erweitern vs. Handlungsfähigkeit wahren." },
    { en: "Multilateralism in Crisis?", de: "Multilateralismus in der Krise?", sub_en: "Challenges to global cooperation in a multipolar world.", sub_de: "Herausforderungen für globale Zusammenarbeit in einer multipolaren Welt." },
    { en: "The Role of Non-State Actors", de: "Die Rolle nichtstaatlicher Akteure", sub_en: "NGOs, corporations, and civil society in international affairs.", sub_de: "NGOs, Unternehmen und Zivilgesellschaft in den internationalen Beziehungen." },
    { en: "Global Health Governance", de: "Globale Gesundheitsgovernance", sub_en: "The WHO, pandemic preparedness, and international solidarity.", sub_de: "Die WHO, Pandemievorbereitung und internationale Solidarität." },
    { en: "The G7 and G20 as Governance Forums", de: "G7 und G20 als Governance-Foren", sub_en: "Informal summitry versus formal multilateral institutions.", sub_de: "Informelle Gipfeldiplomatie versus formale multilaterale Institutionen." },
    { en: "The Veto Power in the UN Security Council", de: "Das Vetorecht im UN-Sicherheitsrat", sub_en: "How the P5 veto shapes — and blocks — international responses.", sub_de: "Wie das Vetorecht der P5 internationale Reaktionen prägt und blockiert." },
    { en: "Global Internet Governance", de: "Globale Internetgovernance", sub_en: "Who controls the internet — and who should?", sub_de: "Wer kontrolliert das Internet — und wer sollte es tun?" },
    { en: "The UN General Assembly's Role", de: "Die Rolle der UN-Generalversammlung", sub_en: "Norm-setting power without binding authority.", sub_de: "Normsetzungsmacht ohne bindende Autorität." },
    { en: "Legitimacy of International Institutions", de: "Legitimität internationaler Institutionen", sub_en: "Democratic accountability in global bodies.", sub_de: "Demokratische Rechenschaftspflicht in globalen Organisationen." },
    { en: "The Governance of Artificial Intelligence", de: "Die Governance künstlicher Intelligenz", sub_en: "International regulation, national competition, and the race for AI standards.", sub_de: "Internationale Regulierung, nationaler Wettbewerb und der Kampf um KI-Standards." },
    { en: "Climate Governance and COP Negotiations", de: "Klimagovernance und COP-Verhandlungen", sub_en: "How the UN climate process works — actors, ambition, and accountability.", sub_de: "Wie der UN-Klimaprozess funktioniert — Akteure, Ambitionen und Rechenschaftspflicht." },
  ],

  // ── 3 ──────────────────────────────────────────────
  "European Union": [
    { en: "The EU's Strategic Autonomy", de: "Die strategische Autonomie der EU", sub_en: "Europe's capacity for independent foreign and defence policy.", sub_de: "Europas Kapazität zu eigenständiger Außen- und Verteidigungspolitik." },
    { en: "EU Enlargement Policy", de: "Die EU-Erweiterungspolitik", sub_en: "The Western Balkans, Ukraine, and the future of accession.", sub_de: "Westbalkan, Ukraine und die Zukunft der Beitrittspolitik." },
    { en: "The Rule of Law in the EU", de: "Rechtsstaatlichkeit in der EU", sub_en: "Mechanisms for upholding democratic norms among member states.", sub_de: "Mechanismen zur Wahrung demokratischer Normen in den Mitgliedstaaten." },
    { en: "EU Foreign Policy and CFSP", de: "EU-Außenpolitik und GASP", sub_en: "The Common Foreign and Security Policy — achievements and limits.", sub_de: "Die Gemeinsame Außen- und Sicherheitspolitik — Errungenschaften und Grenzen." },
    { en: "The Euro and European Monetary Union", de: "Der Euro und die Europäische Währungsunion", sub_en: "Successes, stresses, and the debate over fiscal union.", sub_de: "Erfolge, Spannungen und die Debatte über eine Fiskalunion." },
    { en: "EU Neighbourhood Policy", de: "Die Europäische Nachbarschaftspolitik", sub_en: "Relations with countries on Europe's eastern and southern borders.", sub_de: "Beziehungen zu den Ländern an Europas östlichen und südlichen Grenzen." },
    { en: "Brexit and its Aftermath", de: "Brexit und seine Folgen", sub_en: "What does the UK's departure mean for the EU and for Britain?", sub_de: "Was bedeutet der Austritt Großbritanniens für die EU und für Britannien?" },
    { en: "The EU's Role in Global Climate Policy", de: "Die EU als globaler Klimaakteur", sub_en: "Leading by example — the Green Deal and international negotiations.", sub_de: "Führung durch Beispiel — der Green Deal und internationale Verhandlungen." },
    { en: "Schengen and Border Management", de: "Schengen und Grenzmanagement", sub_en: "Free movement under pressure from migration and security concerns.", sub_de: "Freizügigkeit unter dem Druck von Migration und Sicherheitsbedenken." },
    { en: "EU Defence and PESCO", de: "EU-Verteidigung und PESCO", sub_en: "Permanent structured cooperation and the dream of a European army.", sub_de: "Ständige Strukturierte Zusammenarbeit und der Traum einer europäischen Armee." },
    { en: "The EU's Single Market", de: "Der europäische Binnenmarkt", sub_en: "Four freedoms, regulatory power, and the world's largest trading bloc.", sub_de: "Vier Grundfreiheiten, Regulierungsmacht und der größte Handelsblock der Welt." },
  ],

  // ── 4 ──────────────────────────────────────────────
  "Security & Defence": [
    { en: "NATO's Role in the 21st Century", de: "Die Rolle der NATO im 21. Jahrhundert", sub_en: "Collective defence, burden sharing, and Article 5 in a changing world.", sub_de: "Kollektive Verteidigung, Lastenteilung und Artikel 5 in einer sich wandelnden Welt." },
    { en: "Nuclear Non-Proliferation", de: "Nukleare Nichtverbreitung", sub_en: "The NPT regime: successes, failures, and future prospects.", sub_de: "Das NVV-Regime: Erfolge, Misserfolge und Zukunftsperspektiven." },
    { en: "Hybrid Warfare", de: "Hybride Kriegsführung", sub_en: "Disinformation, cyber operations, and grey-zone conflicts.", sub_de: "Desinformation, Cyberoperationen und Konflikte in der Grauzone." },
    { en: "Arms Control Treaties", de: "Rüstungskontrollverträge", sub_en: "The erosion of Cold War arms control frameworks.", sub_de: "Der Zerfall der Rüstungskontrollarchitektur aus dem Kalten Krieg." },
    { en: "UN Peacekeeping Operations", de: "UN-Friedensmissionen", sub_en: "Mandates, effectiveness, and the limits of blue-helmet missions.", sub_de: "Mandate, Wirksamkeit und die Grenzen von Blauhelmmissionen." },
    { en: "The Future of Nuclear Deterrence", de: "Die Zukunft der nuklearen Abschreckung", sub_en: "Does deterrence still hold in a multipolar nuclear world?", sub_de: "Hält Abschreckung noch in einer multipolaren Nuklearwelt?" },
    { en: "Space as a New Security Domain", de: "Weltraum als neue Sicherheitsdomäne", sub_en: "Satellite warfare, space debris, and the militarisation of orbit.", sub_de: "Satellitenkampf, Weltraumschrott und die Militarisierung des Orbits." },
    { en: "Terrorism and Counter-Terrorism", de: "Terrorismus und Terrorismusbekämpfung", sub_en: "International cooperation, civil liberties, and the limits of force.", sub_de: "Internationale Zusammenarbeit, bürgerliche Freiheiten und die Grenzen von Gewalt." },
    { en: "Private Military Companies", de: "Private Militärunternehmen", sub_en: "Accountability gaps when states outsource the use of force.", sub_de: "Verantwortungslücken bei der Auslagerung staatlicher Gewaltanwendung." },
    { en: "Energy Security", de: "Energiesicherheit", sub_en: "Dependence, diversification, and the geopolitics of pipelines.", sub_de: "Abhängigkeit, Diversifizierung und die Geopolitik von Pipelines." },
    { en: "Autonomous Weapons Systems", de: "Autonome Waffensysteme", sub_en: "Lethal AI on the battlefield — ethics, law, and strategic risk.", sub_de: "Tödliche KI auf dem Schlachtfeld — Ethik, Recht und strategisches Risiko." },
    { en: "Maritime Security", de: "Maritime Sicherheit", sub_en: "Piracy, sea lane control, and competing claims in contested waters.", sub_de: "Piraterie, Kontrolle von Seewegen und konkurrierende Ansprüche in umstrittenen Gewässern." },
  ],

  // ── 5 ──────────────────────────────────────────────
  "Development & Sustainability": [
    { en: "The UN Sustainable Development Goals", de: "Die UN-Nachhaltigkeitsziele", sub_en: "Progress, challenges, and the 2030 Agenda.", sub_de: "Fortschritte, Herausforderungen und die Agenda 2030." },
    { en: "Climate Diplomacy", de: "Klimadiplomatie", sub_en: "The Paris Agreement, COP negotiations, and climate finance.", sub_de: "Das Pariser Abkommen, COP-Verhandlungen und Klimafinanzierung." },
    { en: "Development Aid vs. Development Finance", de: "Entwicklungshilfe vs. Entwicklungsfinanzierung", sub_en: "Shifting paradigms in North-South cooperation.", sub_de: "Paradigmenwechsel in der Nord-Süd-Kooperation." },
    { en: "Food Security and Global Hunger", de: "Ernährungssicherheit und globaler Hunger", sub_en: "Structural causes and the politics of international food systems.", sub_de: "Strukturelle Ursachen und die Politik internationaler Ernährungssysteme." },
    { en: "Loss and Damage in Climate Negotiations", de: "Verluste und Schäden in den Klimaverhandlungen", sub_en: "Who compensates the most climate-vulnerable nations?", sub_de: "Wer entschädigt die am stärksten vom Klima betroffenen Länder?" },
    { en: "The Role of China in African Development", de: "Chinas Rolle in der afrikanischen Entwicklung", sub_en: "Belt and Road in Africa — investment, debt, and dependency.", sub_de: "Belt and Road in Afrika — Investitionen, Schulden und Abhängigkeit." },
    { en: "Transboundary Water Conflicts", de: "Grenzüberschreitende Wasserkonflikte", sub_en: "Shared river basins, dam diplomacy, and the risk of water wars.", sub_de: "Gemeinsame Flusseinzugsgebiete, Staudammdiplomatie und das Risiko von Wasserkriegen." },
    { en: "Just Transition and Global Equity", de: "Gerechter Übergang und globale Gerechtigkeit", sub_en: "Can the green transition be fair for developing economies?", sub_de: "Kann die grüne Wende für Entwicklungsländer gerecht gestaltet werden?" },
    { en: "Biodiversity Loss as a Global Security Threat", de: "Biodiversitätsverlust als globale Sicherheitsbedrohung", sub_en: "The Kunming-Montreal Framework and its implementation.", sub_de: "Das Kunming-Montreal-Rahmenwerk und seine Umsetzung." },
    { en: "Climate Change Adaptation and Mitigation", de: "Klimawandelanpassung und -minderung", sub_en: "The difference between adapting to what is coming and preventing further warming — and who pays.", sub_de: "Der Unterschied zwischen Anpassung an den Klimawandel und seiner Verhinderung — und wer zahlt." },
    { en: "Critical Raw Materials and the Green Economy", de: "Kritische Rohstoffe und die grüne Wirtschaft", sub_en: "Who controls the minerals the energy transition depends on?", sub_de: "Wer kontrolliert die Mineralien, von denen die Energiewende abhängt?" },
  ],

  // ── 6 ──────────────────────────────────────────────
  "Economics & Trade": [
    { en: "The WTO in the Age of Protectionism", de: "Die WTO im Zeitalter des Protektionismus", sub_en: "Free trade under pressure — can multilateral rules hold?", sub_de: "Freihandel unter Druck — halten multilaterale Regeln stand?" },
    { en: "Economic Sanctions as a Foreign Policy Tool", de: "Wirtschaftssanktionen als außenpolitisches Instrument", sub_en: "Effectiveness, side effects, and legal limits.", sub_de: "Wirksamkeit, Nebenwirkungen und rechtliche Grenzen." },
    { en: "The Global Financial Architecture", de: "Die globale Finanzarchitektur", sub_en: "IMF, World Bank, and the politics of debt relief.", sub_de: "IWF, Weltbank und die Politik der Schuldenentlastung." },
    { en: "Trade and Human Rights", de: "Handel und Menschenrechte", sub_en: "Linking market access to human rights standards.", sub_de: "Marktzugang an Menschenrechtsstandards knüpfen." },
    { en: "The Dollar as Global Reserve Currency", de: "Der Dollar als globale Reservewährung", sub_en: "The privilege, the risks, and the search for alternatives.", sub_de: "Das Privileg, die Risiken und die Suche nach Alternativen." },
    { en: "Supply Chain Resilience and Decoupling", de: "Lieferkettensicherheit und Entkopplung", sub_en: "Rethinking globalisation after COVID and geopolitical shocks.", sub_de: "Globalisierung neu denken nach COVID und geopolitischen Schocks." },
    { en: "The Rise of the BRICS Economies", de: "Der Aufstieg der BRICS-Staaten", sub_en: "A rival economic order — or just rhetoric?", sub_de: "Eine rivalisierende Wirtschaftsordnung — oder nur Rhetorik?" },
    { en: "Free Trade Agreements in the 21st Century", de: "Freihandelsabkommen im 21. Jahrhundert", sub_en: "Beyond tariffs: standards, services, and digital trade.", sub_de: "Jenseits von Zöllen: Standards, Dienstleistungen und digitaler Handel." },
    { en: "Tax Havens and Global Tax Reform", de: "Steueroasen und globale Steuerreform", sub_en: "The OECD's global minimum tax and what it changes.", sub_de: "Die globale Mindeststeuer der OECD und was sie verändert." },
    { en: "The Geopolitics of Trade in Services", de: "Die Geopolitik des Dienstleistungshandels", sub_en: "Finance, data, and the invisible backbone of global commerce.", sub_de: "Finanzen, Daten und das unsichtbare Rückgrat des globalen Handels." },
    { en: "Economic Statecraft", de: "Wirtschaftliche Staatskunst", sub_en: "How states use economic tools to achieve geopolitical goals.", sub_de: "Wie Staaten wirtschaftliche Mittel für geopolitische Ziele einsetzen." },
    { en: "Regional Development Banks", de: "Regionale Entwicklungsbanken", sub_en: "The ADB, AfDB, IADB and their role alongside — and against — Bretton Woods.", sub_de: "ADB, AfDB, IADB und ihre Rolle neben — und gegen — die Bretton-Woods-Institutionen." },
  ],

  // ── 7 ──────────────────────────────────────────────
  "Human Rights & Democracy": [
    { en: "Women, Peace and Security", de: "Frauen, Frieden und Sicherheit", sub_en: "UN Security Council Resolution 1325 and the gendered dimensions of conflict.", sub_de: "UN-Sicherheitsratsresolution 1325 und die geschlechtsspezifischen Dimensionen von Konflikten." },
    { en: "Transitional Justice", de: "Transitionale Gerechtigkeit", sub_en: "Truth commissions, tribunals, and reconciliation after atrocity.", sub_de: "Wahrheitskommissionen, Tribunale und Versöhnung nach Massengräueln." },
    { en: "Freedom of the Press Internationally", de: "Pressefreiheit international", sub_en: "Threats to journalism and the role of states in protecting it.", sub_de: "Bedrohungen des Journalismus und die Rolle der Staaten beim Schutz." },
    { en: "Democratic Backsliding", de: "Demokratischer Rückschritt", sub_en: "Trends in authoritarianism and the international response.", sub_de: "Trends des Autoritarismus und die internationale Reaktion." },
    { en: "The Rights of Indigenous Peoples", de: "Die Rechte indigener Völker", sub_en: "The UN Declaration and ongoing struggles for self-determination.", sub_de: "Die UN-Erklärung und anhaltende Kämpfe um Selbstbestimmung." },
    { en: "Children's Rights in Conflict Zones", de: "Kinderrechte in Konfliktgebieten", sub_en: "Child soldiers, education, and the CRC in practice.", sub_de: "Kindersoldaten, Bildung und die KRK in der Praxis." },
    { en: "The Death Penalty and International Norms", de: "Todesstrafe und internationale Normen", sub_en: "Abolitionist progress and ongoing resistance from retentionist states.", sub_de: "Abolitionistische Fortschritte und anhaltender Widerstand von Befürworterstaaten." },
    { en: "LGBTQ+ Rights as Foreign Policy", de: "LGBTQ+-Rechte als außenpolitisches Thema", sub_en: "Rights conditionality, cultural diplomacy, and state sovereignty.", sub_de: "Rechtskonditionalität, Kulturdiplomatie und staatliche Souveränität." },
    { en: "Election Observation and Democratic Integrity", de: "Wahlbeobachtung und demokratische Integrität", sub_en: "International monitoring: tool of accountability or interference?", sub_de: "Internationale Beobachtung: Instrument der Rechenschaft oder Einmischung?" },
    { en: "The Human Rights Council", de: "Der UN-Menschenrechtsrat", sub_en: "Membership controversies and the politics of UN human rights bodies.", sub_de: "Mitgliedschaftskontroversen und die Politik der UN-Menschenrechtsgremien." },
    { en: "Corporate Responsibility for Human Rights", de: "Unternehmensverantwortung für Menschenrechte", sub_en: "The UN Guiding Principles and mandatory human rights due diligence.", sub_de: "Die UN-Leitprinzipien und verbindliche menschenrechtliche Sorgfaltspflichten." },
  ],

  // ── 8 ──────────────────────────────────────────────
  "Diplomacy & Statecraft": [
    { en: "Mediation and Conflict Resolution", de: "Mediation und Konfliktlösung", sub_en: "The role of third-party mediators in peace processes.", sub_de: "Die Rolle von Drittpartei-Vermittlern in Friedensprozessen." },
    { en: "Public Diplomacy and Soft Power", de: "Öffentliche Diplomatie und Soft Power", sub_en: "How states shape foreign opinion through culture and communication.", sub_de: "Wie Staaten durch Kultur und Kommunikation ausländische Meinungen formen." },
    { en: "Diplomatic Immunity", de: "Diplomatische Immunität", sub_en: "The Vienna Convention, its rationale, and its limits.", sub_de: "Das Wiener Übereinkommen, seine Begründung und seine Grenzen." },
    { en: "Summit Diplomacy", de: "Gipfeldiplomatie", sub_en: "The value and risks of high-level leader negotiations.", sub_de: "Wert und Risiken von Verhandlungen auf höchster Ebene." },
    { en: "Track II Diplomacy", de: "Track-II-Diplomatie", sub_en: "Unofficial dialogue — when back channels matter.", sub_de: "Inoffizielle Dialoge — wenn Hinterkanäle zählen." },
    { en: "Economic Diplomacy", de: "Wirtschaftsdiplomatie", sub_en: "Promoting trade, investment, and national interests abroad.", sub_de: "Förderung von Handel, Investitionen und nationalen Interessen im Ausland." },
    { en: "Consular Affairs and Citizen Protection", de: "Konsularwesen und Bürgerbetreuung", sub_en: "Protecting nationals abroad — legal frameworks and practical limits.", sub_de: "Schutz von Staatsbürgern im Ausland — rechtliche Rahmenbedingungen und praktische Grenzen." },
    { en: "Negotiation Theory in International Affairs", de: "Verhandlungstheorie in den internationalen Beziehungen", sub_en: "BATNA, integrative bargaining, and the diplomat's toolkit.", sub_de: "BATNA, integratives Verhandeln und das Werkzeug des Diplomaten." },
    { en: "The Foreign Service as a Career", de: "Der Auswärtige Dienst als Beruf", sub_en: "Skills, values, and the changing demands of modern diplomacy.", sub_de: "Fähigkeiten, Werte und die veränderten Anforderungen moderner Diplomatie." },
    { en: "Multilateral Negotiation Dynamics", de: "Multilaterale Verhandlungsdynamiken", sub_en: "Coalition-building, blocking minorities, and agenda control.", sub_de: "Koalitionsbildung, Sperrminoritäten und Tagesordnungskontrolle." },
    { en: "Digital Diplomacy", de: "Digitale Diplomatie", sub_en: "Social media, e-government, and the transformation of diplomatic practice.", sub_de: "Social Media, E-Government und die Transformation diplomatischer Praxis." },
  ],

  // ── 9 — NEW ────────────────────────────────────────
  "Technology & Cyber": [
    { en: "Cybersecurity as a Foreign Policy Issue", de: "Cybersicherheit als außenpolitisches Thema", sub_en: "State-sponsored attacks, attribution, and norms of behaviour in cyberspace.", sub_de: "Staatlich unterstützte Angriffe, Attribution und Verhaltensnormen im Cyberraum." },
    { en: "Artificial Intelligence and International Security", de: "Künstliche Intelligenz und internationale Sicherheit", sub_en: "How AI changes the balance of military and economic power.", sub_de: "Wie KI das militärische und wirtschaftliche Machtgefüge verändert." },
    { en: "The Governance of Artificial Intelligence", de: "Die Governance künstlicher Intelligenz", sub_en: "International regulation, national competition, and the race for standards.", sub_de: "Internationale Regulierung, nationaler Wettbewerb und der Kampf um Standards." },
    { en: "Critical Infrastructure Protection", de: "Schutz kritischer Infrastruktur", sub_en: "Cyber attacks on power grids, hospitals, and financial systems — who is responsible?", sub_de: "Cyberangriffe auf Stromnetze, Krankenhäuser und Finanzsysteme — wer trägt die Verantwortung?" },
    { en: "Disinformation as a Tool of Foreign Policy", de: "Desinformation als außenpolitisches Instrument", sub_en: "State-sponsored influence operations and democratic resilience.", sub_de: "Staatlich gelenkte Einflussoperationen und demokratische Resilienz." },
    { en: "The Digital Silk Road", de: "Die digitale Seidenstraße", sub_en: "China's tech infrastructure exports and the battle for digital sovereignty.", sub_de: "Chinas Exporte digitaler Infrastruktur und der Kampf um digitale Souveränität." },
    { en: "Semiconductor Geopolitics", de: "Geopolitik der Halbleiter", sub_en: "Chips, export controls, and the new technology cold war.", sub_de: "Chips, Exportkontrollen und der neue Technologiekalte Krieg." },
    { en: "International Norms for Cyberwarfare", de: "Internationale Normen für Cyberkriegsführung", sub_en: "The Tallinn Manual, state responsibility, and the attribution problem.", sub_de: "Das Tallinn-Handbuch, staatliche Verantwortung und das Zurechnungsproblem." },
    { en: "Data Sovereignty and Cross-Border Data Flows", de: "Datensouveränität und grenzüberschreitende Datenflüsse", sub_en: "Localisation mandates versus the open internet.", sub_de: "Datenlokalisierungsgebote versus das offene Internet." },
    { en: "Tech Giants and Foreign Policy", de: "Tech-Konzerne und Außenpolitik", sub_en: "When platforms become political actors on the world stage.", sub_de: "Wenn Plattformen zu politischen Akteuren auf der Weltbühne werden." },
    { en: "Space Technology and International Competition", de: "Raumfahrttechnologie und internationaler Wettbewerb", sub_en: "A new space race — cooperation, commercialisation, and conflict.", sub_de: "Ein neues Weltraumrennen — Kooperation, Kommerzialisierung und Konflikt." },
  ],

  // ── 10 — NEW ───────────────────────────────────────
  "Migration & Refugees": [
    { en: "The 1951 Refugee Convention Today", de: "Die Genfer Flüchtlingskonvention von 1951 heute", sub_en: "Is the Convention still fit for the 21st century's displacement crises?", sub_de: "Ist die Konvention noch geeignet für die Verdrängungskrisen des 21. Jahrhunderts?" },
    { en: "The Global Compact on Refugees", de: "Der Globale Flüchtlingspakt", sub_en: "Burden-sharing, host communities, and the limits of political will.", sub_de: "Lastenteilung, Aufnahmegemeinschaften und die Grenzen politischen Willens." },
    { en: "Climate Migration", de: "Klimamigration", sub_en: "Who is a climate refugee — and what legal protections do they have?", sub_de: "Wer ist ein Klimaflüchtling — und welchen rechtlichen Schutz genießen sie?" },
    { en: "The EU's Migration Policy", de: "Die Migrationspolitik der EU", sub_en: "The New Pact on Migration and Asylum — ambitions and fault lines.", sub_de: "Der Neue Pakt zu Migration und Asyl — Ambitionen und Sollbruchstellen." },
    { en: "Migration and Development", de: "Migration und Entwicklung", sub_en: "Remittances, brain drain, and the development potential of diaspora.", sub_de: "Rücküberweisungen, Braindrain und das Entwicklungspotenzial der Diaspora." },
    { en: "Statelessness in International Law", de: "Staatenlosigkeit im Völkerrecht", sub_en: "Millions without citizenship — causes, consequences, and solutions.", sub_de: "Millionen ohne Staatsbürgerschaft — Ursachen, Folgen und Lösungen." },
    { en: "Externalisation of Border Control", de: "Externalisierung der Grenzkontrolle", sub_en: "Outsourcing border management to third countries — legal and ethical questions.", sub_de: "Auslagerung von Grenzkontrolle an Drittländer — rechtliche und ethische Fragen." },
    { en: "Internal Displacement", de: "Binnenvertreibung", sub_en: "IDPs, the Guiding Principles, and the gap in international protection.", sub_de: "IDPs, die Leitprinzipien und die Schutzlücke im Völkerrecht." },
    { en: "The Politics of Asylum", de: "Die Politik des Asyls", sub_en: "How political pressures shape refugee determination and protection.", sub_de: "Wie politischer Druck Asylverfahren und Schutzstandards beeinflusst." },
    { en: "Labour Migration and Global Inequality", de: "Arbeitsmigration und globale Ungleichheit", sub_en: "The global care chain, migrant workers' rights, and sending-state interests.", sub_de: "Die globale Sorgekette, Rechte von Wanderarbeitnehmern und Interessen der Herkunftsländer." },
    { en: "UNHCR and the International Refugee System", de: "UNHCR und das internationale Flüchtlingssystem", sub_en: "Mandate, funding, and the challenge of growing displacement.", sub_de: "Mandat, Finanzierung und die Herausforderung wachsender Vertreibung." },
  ],

  // ── 11 — NEW ───────────────────────────────────────
  "History of International Relations": [
    { en: "The Westphalian Order", de: "Die Westfälische Ordnung", sub_en: "1648 and the birth of the modern state system.", sub_de: "1648 und die Geburt des modernen Staatensystems." },
    { en: "The Congress of Vienna (1815)", de: "Der Wiener Kongress (1815)", sub_en: "Restoring order after Napoleon — lessons for modern peacemaking.", sub_de: "Ordnung nach Napoleon wiederherstellen — Lehren für moderne Friedenssicherung." },
    { en: "The League of Nations — Rise and Failure", de: "Der Völkerbund — Aufstieg und Scheitern", sub_en: "What went wrong, and what the UN learned from it.", sub_de: "Was schiefging — und was die UN daraus gelernt hat." },
    { en: "The Yalta and Potsdam Conferences", de: "Die Konferenzen von Jalta und Potsdam", sub_en: "How the post-war order was shaped by wartime diplomacy.", sub_de: "Wie die Nachkriegsordnung durch Kriegsdiplomatie geformt wurde." },
    { en: "The Cold War as a Geopolitical Structure", de: "Der Kalte Krieg als geopolitische Struktur", sub_en: "Bipolarity, proxy conflicts, and the logic of deterrence.", sub_de: "Bipolarität, Stellvertreterkriege und die Logik der Abschreckung." },
    { en: "Decolonisation and Independence Movements", de: "Dekolonisierung und Unabhängigkeitsbewegungen", sub_en: "The collapse of empire and the emergence of new states in Africa, Asia, and beyond.", sub_de: "Der Zerfall der Imperien und die Entstehung neuer Staaten in Afrika, Asien und darüber hinaus." },
    { en: "The Cuban Missile Crisis", de: "Die Kubakrise", sub_en: "Thirteen days that shaped nuclear diplomacy for decades.", sub_de: "Dreizehn Tage, die die nukleare Diplomatie für Jahrzehnte prägten." },
    { en: "Multipolarity and Global Power Shifts", de: "Multipolarität und globale Machtverschiebungen", sub_en: "From unipolarity to a contested multipolar order — causes, dynamics, and consequences.", sub_de: "Von der Unipolarität zu einer umstrittenen multipolaren Ordnung — Ursachen, Dynamiken und Folgen." },
    { en: "The End of the Cold War", de: "Das Ende des Kalten Krieges", sub_en: "Why the Soviet Union collapsed — and what it meant for world order.", sub_de: "Warum die Sowjetunion zusammenbrach — und was dies für die Weltordnung bedeutete." },
    { en: "The Post-Cold War 'Unipolar Moment'", de: "Der 'unipolare Moment' nach dem Kalten Krieg", sub_en: "American primacy, its promises, and its eventual limits.", sub_de: "Amerikanische Vorherrschaft, ihre Versprechen und ihre schließlichen Grenzen." },
    { en: "The Concert of Europe", de: "Das Europäische Konzert", sub_en: "Great-power management and the balance of power in the 19th century.", sub_de: "Großmächteverwaltung und das Gleichgewicht der Kräfte im 19. Jahrhundert." },
    { en: "The Non-Aligned Movement and the Global South", de: "Die Blockfreienbewegung und der Globale Süden", sub_en: "Third World solidarity, strategic autonomy, and the legacy of Bandung.", sub_de: "Dritte-Welt-Solidarität, strategische Autonomie und das Erbe von Bandung." },
    { en: "State Formation and Border-Making", de: "Staatsentstehung und Grenzziehung", sub_en: "How modern borders were drawn — colonialism, war, and the politics of self-determination.", sub_de: "Wie moderne Grenzen entstanden — Kolonialismus, Krieg und die Politik der Selbstbestimmung." },
  ],

  // ── 12 ─────────────────────────────────────────────
  "Foreign Policy & Area Studies": [
    { en: "US–China Relations", de: "Die amerikanisch-chinesischen Beziehungen", sub_en: "Strategic competition, trade war, and the risk of great-power conflict.", sub_de: "Strategischer Wettbewerb, Handelskrieg und das Risiko eines Großmachtkonflikts." },
    { en: "Africa's Regional Diplomacy", de: "Afrikas regionale Diplomatie", sub_en: "The African Union, ECOWAS, and the continent's emerging diplomatic voice.", sub_de: "Die Afrikanische Union, ECOWAS und Afrikas wachsende diplomatische Stimme." },
    { en: "The Indo-Pacific / Asia-Pacific", de: "Der Indo-Pazifik / Asien-Pazifik", sub_en: "Strategic competition, alliances, and the new security architecture of the region.", sub_de: "Strategischer Wettbewerb, Allianzen und die neue Sicherheitsarchitektur der Region." },
    { en: "Middle East Security Architecture", de: "Die Sicherheitsarchitektur des Nahen Ostens", sub_en: "Shifting alliances, proxy conflicts, and the search for regional order.", sub_de: "Sich verändernde Allianzen, Stellvertreterkriege und die Suche nach regionaler Ordnung." },
    { en: "Latin America's Regional Diplomacy", de: "Lateinamerikas regionale Diplomatie", sub_en: "CELAC, Mercosur, and the region's role in a changing global order.", sub_de: "CELAC, Mercosur und die Rolle der Region in einer sich wandelnden Weltordnung." },
    { en: "ASEAN and Regional Cooperation", de: "ASEAN und regionale Zusammenarbeit", sub_en: "The ASEAN way — consensus, non-interference, and regional integration.", sub_de: "Der ASEAN-Weg — Konsens, Nichteinmischung und regionale Integration." },
    { en: "Arctic Governance", de: "Arktisgovernance", sub_en: "Melting ice, new sea routes, and great-power competition at the poles.", sub_de: "Schmelzendes Eis, neue Seewege und Großmächtekonkurrenz an den Polen." },
    { en: "Russia in Regional and Global Politics", de: "Russland in der Regional- und Weltpolitik", sub_en: "Russia's strategic interests, alliances, and role in shaping the international order.", sub_de: "Russlands strategische Interessen, Allianzen und seine Rolle bei der Gestaltung der internationalen Ordnung." },
    { en: "India as a Rising Power", de: "Indien als aufsteigende Macht", sub_en: "Strategic autonomy, the Quad, and India's balancing act between great powers.", sub_de: "Strategische Autonomie, der Quad und Indiens Balanceakt zwischen den Großmächten." },
    { en: "Turkey's Foreign Policy", de: "Die Außenpolitik der Türkei", sub_en: "NATO member, regional power, and independent actor — Ankara's strategic balancing.", sub_de: "NATO-Mitglied, Regionalmacht und unabhängiger Akteur — Ankaras strategische Balance." },
    { en: "The Gulf States and Regional Order", de: "Die Golfstaaten und die regionale Ordnung", sub_en: "Saudi Arabia, the UAE, and the Gulf's growing geopolitical ambitions.", sub_de: "Saudi-Arabien, die VAE und die wachsenden geopolitischen Ambitionen des Golfs." },
  ],

};

const CATEGORIES = Object.keys(TOPICS);
