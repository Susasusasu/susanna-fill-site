// Hero: Kampagnenbilder tauchen hinter "Art Direction" auf.
// Mit Maus folgen sie dem Zeiger; sonst (Touch, oder solange die Maus nicht im Hero ist)
// erscheinen sie von selbst nacheinander. Bei reduzierter Bewegung: ein ruhendes Bild.
(() => {
  const hero = document.querySelector(".hero[data-trail]");
  if (!hero) return;
  const srcs = JSON.parse(hero.dataset.trail);
  let idx = 0;

  const spawn = (x, y, cls = "") => {
    const img = document.createElement("img");
    img.className = `trail-img ${cls}`.trim();
    img.src = srcs[idx++ % srcs.length];
    img.alt = "";
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    hero.appendChild(img);
    if (!cls.includes("static")) img.addEventListener("animationend", () => img.remove());
    return img;
  };

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    spawn(hero.clientWidth / 2, hero.clientHeight / 2, "static");
    return;
  }

  srcs.forEach((s) => { const i = new Image(); i.src = s; }); // vorladen

  // Automatischer Ablauf
  let timer = null;
  const autoStep = () => {
    const w = hero.clientWidth, h = hero.clientHeight;
    const x = w * (0.2 + Math.random() * 0.6);
    const y = h * (0.22 + Math.random() * 0.56);
    spawn(x, y, "slow");
  };
  const startAuto = () => { if (!timer) { autoStep(); timer = setInterval(autoStep, 650); } };
  const stopAuto = () => { clearInterval(timer); timer = null; };

  // Nur rechnen, wenn der Hero sichtbar ist
  let visible = true, mouseInside = false;
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    visible && !mouseInside ? startAuto() : stopAuto();
  }).observe(hero);

  // Maus-Spur
  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let lastX = -999, lastY = -999;
    const GAP = 110;
    hero.addEventListener("pointerenter", () => { mouseInside = true; stopAuto(); });
    hero.addEventListener("pointerleave", () => { mouseInside = false; if (visible) startAuto(); });
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (Math.hypot(x - lastX, y - lastY) < GAP) return;
      lastX = x; lastY = y;
      spawn(x, y);
    });
  }
})();

// Work-Kacheln der Printprojekte: beim Hover durch die Motive blättern
(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!matchMedia("(hover: hover)").matches) return;
  document.querySelectorAll(".card-img[data-hover]").forEach((box) => {
    const srcs = JSON.parse(box.dataset.hover);
    const img = box.querySelector("img");
    const first = img.src;
    let timer = null, k = 0, loaded = false;
    const start = () => {
      if (!loaded) { srcs.forEach((s) => { const i = new Image(); i.src = s; }); loaded = true; }
      k = 0;
      timer = setInterval(() => { k = (k + 1) % srcs.length; img.src = srcs[k]; }, 550);
    };
    const stop = () => { clearInterval(timer); timer = null; img.src = first; };
    const link = box.closest("a");
    link.addEventListener("pointerenter", start);
    link.addEventListener("pointerleave", stop);
    link.addEventListener("focus", start);
    link.addEventListener("blur", stop);
  });
})();
