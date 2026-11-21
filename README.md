# susanna-fill.com

Portfolio von Susanna Fill – statische Seite, gehostet auf Vercel.

- `content.mjs` – alle Inhalte (Projekte, Texte, Videos, Lebenslauf)
- `images/<projekt>/NN.jpg` – Projektbilder (erstes Bild = Cover)
- `build.mjs` – erzeugt die Seite nach `out/` (`node build.mjs`)
- `style.css`, `app.js` – Gestaltung und Bilderspur im Hero

Jeder Push auf `main` wird von Vercel automatisch gebaut und veröffentlicht.

Live: https://susanna-fill-site.vercel.app
