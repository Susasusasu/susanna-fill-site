// Erzeugt die statische Seite aus content.mjs nach ./out (flache Struktur für Vercel cleanUrls).
// Aufruf: node build.mjs  (Vercel macht das bei jedem Push automatisch)
import { mkdir, writeFile, copyFile, rm, cp } from "node:fs/promises";
import { site, experience, education, awards, projects } from "./content.mjs";

const OUT = "out";

const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
// Bilder liegen lokal unter /images/<slug>/NN.ext (aus Squarespace übernommen)
const localMap = new Map();
for (const p of projects) p.images.forEach((u, k) => {
  // alle Bilder als JPG, max. 2000 px breit / 2400 px hoch (Vercel Hobby: 100 MB Upload-Limit)
  localMap.set(u, `/images/${p.slug}/${String(k + 1).padStart(2, "0")}.jpg`);
});
const img = (u) => localMap.get(u) || u;
const vimeoId = (u) => u.match(/(\d+)/)[1];
const label = (p) => (p.title ? `${p.client} /// ${p.title}` : p.client);

const head = (title, desc = "Susanna Fill – Art Direction") => `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:image" content="${img(projects[0].images[0], 1500)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..900&display=swap" rel="stylesheet">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/style.css">
</head>
<body>
<a class="skip" href="#main">Zum Inhalt</a>
<header class="nav">
  <nav class="nav-l" aria-label="Seiten"><a href="/#work">Work</a><a href="/#about">About</a></nav>
  <a class="nav-c" href="/">Susanna Fill <span class="sl">///</span> Art Direction</a>
  <nav class="nav-r" aria-label="Kontakt"><a href="${site.contact.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a href="/#contact">Contact</a></nav>
</header>
`;

const foot = `
<footer class="foot">
  <span>© ${new Date().getFullYear()} Susanna Fill</span>
</footer>
<script src="/app.js" defer></script>
</body>
</html>`;

const arrow = `<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4.5 11.5l7-7M5.5 4.5h6v6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`;

const card = (p, i) => `
    <li class="card">
      <a href="/${p.slug}">
        <div class="card-img"><img src="${img(p.images[0], 1000)}" alt="${esc(label(p))}" loading="${i < 4 ? "eager" : "lazy"}" width="1000" height="750"></div>
        <div class="card-meta">
          <div><h3>${esc(p.client)}</h3>${p.title ? `<p>${esc(p.title)}</p>` : ""}</div>
          <span class="btn-arrow">${arrow}</span>
        </div>
      </a>
    </li>`;

const trail = projects.map((p) => img(p.images[0], 750));

const home = `${head("Susanna Fill /// Art Direction")}
<main id="main">
  <section class="hero" data-trail='${esc(JSON.stringify(trail))}' aria-labelledby="hero-h">
    <h1 id="hero-h" class="name">Art<br>Direction</h1>
  </section>

  <section id="work" class="work" aria-labelledby="work-h">
    <h2 id="work-h" class="big">Work</h2>
    <ul class="grid">${projects.map(card).join("")}
    </ul>
  </section>

  <section id="about" class="about" aria-labelledby="about-h">
    <h2 id="about-h" class="big muted">About me</h2>
    <div class="cv">
      <div>
        <h3>Work experience</h3>
        <ul class="rows">${experience.map((e) => `<li><span>${esc(e.period)}</span><span>${e.role ? esc(e.role) + ", " : ""}${e.url ? `<a href="${e.url}" target="_blank" rel="noopener">${esc(e.company)}</a>` : esc(e.company)}</span></li>`).join("")}</ul>
      </div>
      <div>
        <h3>Education</h3>
        <ul class="rows">${education.map((e) => `<li><span>${esc(e.period)}</span><span>${[e.school, e.title].filter(Boolean).map(esc).join(", ")}</span></li>`).join("")}</ul>
        <h3>Languages</h3>
        <p>German, Italian, English</p>
        <h3>Awards</h3>
        <p class="awards">${awards.map(esc).join(" <span class=\"sl\">///</span> ")}</p>
      </div>
    </div>
  </section>

  <section id="contact" class="contact" aria-labelledby="contact-h">
    <h2 id="contact-h" class="big">Contact</h2>
    <p><a class="cta" href="${site.contact.linkedin}" target="_blank" rel="noopener">LinkedIn ${arrow}</a>${site.contact.email ? ` <a class="cta ghost" href="mailto:${site.contact.email}">${esc(site.contact.email)}</a>` : ""}</p>
  </section>
</main>
${foot}`;

const page = (p, i) => {
  const next = projects[(i + 1) % projects.length];
  return `${head(`${label(p)} — Susanna Fill`)}
<main id="main" class="project">
  <header class="p-head">
    <a class="back" href="/#work">Alle Projekte</a>
    <h1 class="p-client">${esc(p.client)}</h1>
    ${p.title ? `<p class="p-title">${esc(p.title)}</p>` : ""}
    ${p.agency ? `<p class="p-agency">Agency: <a href="https://www.heimat-berlin.com" target="_blank" rel="noopener">${esc(p.agency)}</a></p>` : ""}
  </header>
  ${p.text ? `<div class="p-text">${p.text.map((t) => `<p>${esc(t)}</p>`).join("")}</div>` : ""}
  <div class="p-media">
    ${(p.videos || []).map((v) => `<div class="video"><iframe src="https://player.vimeo.com/video/${vimeoId(v)}?dnt=1&amp;title=0&amp;byline=0&amp;portrait=0" title="Video ${esc(label(p))}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`).join("\n    ")}
    ${p.images.map((u, k) => `<img src="${img(u, 2500)}" alt="${esc(label(p))}, Bild ${k + 1}" loading="${k < 2 ? "eager" : "lazy"}">`).join("\n    ")}
  </div>
  <a class="next" href="/${next.slug}"><span>Nächstes Projekt</span><strong>${esc(label(next))}</strong></a>
</main>
${foot}`;
};

const redirects = projects
  .filter((p) => p.oldSlug !== `/${p.slug}`)
  .map((p) => ({ source: p.oldSlug, destination: `/${p.slug}`, permanent: true }));
redirects.push({ source: "/about", destination: "/#about", permanent: true });
redirects.push({ source: "/new-gallery-1", destination: "/", permanent: true });

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
await writeFile(`${OUT}/index.html`, home);
for (const [i, p] of projects.entries()) await writeFile(`${OUT}/${p.slug}.html`, page(p, i));
await writeFile(`${OUT}/404.html`, `${head("Seite nicht gefunden — Susanna Fill")}<main id="main" class="nf"><h1 class="big">404</h1><p>Diese Seite gibt es nicht mehr.</p><p><a class="cta" href="/#work">Zu den Projekten</a></p></main>${foot}`);
const vercel = { buildCommand: "node build.mjs", outputDirectory: "out", framework: null, cleanUrls: true, trailingSlash: false, redirects };
await writeFile("vercel.json", JSON.stringify(vercel, null, 2) + "\n");
await cp("images", `${OUT}/images`, { recursive: true });
await copyFile("style.css", `${OUT}/style.css`);
await copyFile("app.js", `${OUT}/app.js`);
await writeFile(`${OUT}/favicon.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#000"/><text x="32" y="44" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="30" fill="#fff" text-anchor="middle">SF</text></svg>`);
console.log(`${projects.length} Projektseiten, ${redirects.length} Redirects → ${OUT}/`);
