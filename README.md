# DiplomacyPrep

**Free Speech Training for Diplomatic Careers**

A clean, professional web app for practising oral exams in international relations. Draw a random topic, take a minute to prepare notes, then deliver a timed free speech — in English or German.

## Features

- **Topic Selection & Drawing**: Choose topics from 12+ international relations categories (e.g. International Law, European Union, Security & Defence).
- **Timed Practice**: Adjustable preparation time (1 to 2 minutes) and speaking time (1 to 5 minutes) with real-time countdown rings.
- **Preparation Notes**: Take notes during the preparation phase. Your notes stay visible as a reference while speaking.
- **Session History with Notes**: Browse past practices in your session. Click any entry in the history list to expand it and review the notes you took during that practice round.
- **Sharing & Contacts**: Easily share your progress on LinkedIn or WhatsApp, get in touch with the team, or support the project.
- **Polished & Responsive Design**: Optimized for readability on desktop and mobile with custom typography, clean parchment styling, sticky footer formatting, and zoomed layout support.

---

## Project structure

```
diplomacyprep/
├── index.html          # Main HTML — structure & templates
├── css/
│   └── style.css       # All styles (navy/gold/parchment theme)
├── js/
│   ├── topics.js       # Topic bank (add new topics here)
│   ├── i18n.js         # EN/DE translations (add languages here)
│   └── app.js          # App logic: timers, screens, state
└── README.md
```

---

## Running locally

No build tools needed — it's plain HTML, CSS, and JS.

**Option 1 — VS Code Live Server (recommended)**

1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code
2. Open the `diplomacyprep/` folder in VS Code
3. Right-click `index.html` → **Open with Live Server**
4. Your browser opens at `http://127.0.0.1:5500`

**Option 2 — Python (no extensions needed)**

```bash
cd diplomacyprep
python3 -m http.server 8080
# then open http://localhost:8080
```

**Option 3 — Node.js**

```bash
npx serve diplomacyprep
```

> ⚠️ Do not open `index.html` directly as a `file://` URL — fonts and scripts load correctly only when served over HTTP.

---

## Setting up GitHub

### First time

```bash
# 1. Initialise git in the project folder
cd diplomacyprep
git init

# 2. Stage all files
git add .

# 3. First commit
git commit -m "Initial commit — DiplomacyPrep v1"

# 4. Create a new repository on github.com (no README, no .gitignore)
#    then link it here:
git remote add origin https://github.com/ankitsuhagiya/diplomacytraining.git

# 5. Push
git push -u origin main
```

### Day-to-day workflow

```bash
# After making changes:
git add .
git commit -m "describe what you changed"
git push
```

### Recommended VS Code extensions

| Extension | Purpose |
|---|---|
| **Live Server** | One-click local server |
| **GitLens** | Visual git history & blame |
| **Prettier** | Auto-format HTML/CSS/JS |
| **GitHub Copilot** *(optional)* | AI code suggestions |

---

## Adding topics

Open `js/topics.js` and add an entry to any category:

```js
{ en: "Your Topic in English", de: "Ihr Thema auf Deutsch",
  sub_en: "A short guiding question or framing in English.",
  sub_de: "Eine kurze Leitfrage auf Deutsch." },
```

To add a whole new category, add a new key to the `TOPICS` object:

```js
"New Category": [
  { en: "...", de: "...", sub_en: "...", sub_de: "..." },
],
```

## Adding a language

Open `js/i18n.js`, copy the `en` block, translate all values, and add it under a new key (e.g. `fr`). Then add a button in `index.html`:

```html
<button class="lang-btn" id="btn-fr" onclick="setLang('fr')">FR</button>
```

---

## Deploying online (free)

Once on GitHub, you can publish for free via **GitHub Pages**:

1. Go to your repo → **Settings** → **Pages**
2. Source: `main` branch, `/ (root)` folder
3. Click **Save** — your site will be live at:
   `https://YOUR_USERNAME.github.io/diplomacyprep`

---

## License

MIT — free to use, modify, and share.
