/* ============================================================
   WonderSprout Studio — Six Creative Activities
   Free Draw · Colour In · Trace Lines · Shape Stamps ·
   Sticker Scenes · Surprise Me
   ============================================================ */

(function () {
  "use strict";

  const PALETTE = ["#2C3A4B", "#F04E3E", "#FF8A3D", "#FFC545", "#3DBE5F", "#3E7BF0", "#9B59E8", "#F27BB5", "#8A6B4F", "#FFFFFF"];
  const STAMPS = ["🌸", "⭐", "🐞", "🌈", "🦋", "🍎", "🐟", "🌙", "🐝", "❤️", "🍀", "☀️"];

  const MODES = [
    { id: "draw", label: "🖍 Free Draw" },
    { id: "color", label: "🎨 Colour In" },
    { id: "trace", label: "✏️ Trace Lines" },
    { id: "shapes", label: "🔷 Shape Stamps" },
    { id: "scenes", label: "🏝 Sticker Scenes" },
    { id: "surprise", label: "🎲 Surprise Me" },
  ];
  /* tab labels come from the selected language (tab0-tab5), English kept as fallback */
  MODES.forEach(function (m, mi) {
    if (typeof WSI18n !== "undefined") m.label = WSI18n.k("tab" + mi, m.label);
  });

  /* Shared drawing engine on a canvas */
  function makeCanvas(w, h) {
    const wrap = el("div", { class: "canvas-wrap", style: { maxWidth: "820px", margin: "0 auto", width: "100%" } });
    const canvas = el("canvas", { width: String(w), height: String(h) });
    wrap.appendChild(canvas);
    const ctx = canvas.getContext ? canvas.getContext("2d") : null;
    function pos(ev) {
      const rect = canvas.getBoundingClientRect();
      const t = ev.touches ? ev.touches[0] : ev;
      return { x: (t.clientX - rect.left) * (w / rect.width), y: (t.clientY - rect.top) * (h / rect.height) };
    }
    return { wrap, canvas, ctx, pos, w, h };
  }

  function paletteRow(onPick, initial) {
    const bar = el("div", { class: "toolbar" });
    let current = initial || PALETTE[1];
    PALETTE.forEach(function (c, i) {
      const s = el("button", { class: "swatch" + (c === current ? " on" : ""), style: { background: c } });
      s.addEventListener("click", function () {
        current = c;
        bar.querySelectorAll(".swatch").forEach(function (x) { x.classList.remove("on"); });
        s.classList.add("on");
        WSAudio.play("tap");
        if (onPick) onPick(c);
      });
      bar.appendChild(s);
    });
    return { bar, get: function () { return current; } };
  }

  /* ---------- 1. Free Draw ---------- */
  function freeDraw(stage) {
    const c = makeCanvas(820, 520);
    let color = PALETTE[1], size = 10, erasing = false, stamp = null;
    const history = [];
    let drawing = false, last = null;

    const bar = el("div", { class: "toolbar" });
    const pal = paletteRow(function (col) { color = col; erasing = false; stamp = null; refresh(); }, color);
    bar.appendChild(pal.bar);
    const sizeRow = el("div", { class: "size-row" });
    [[6, 14], [10, 20], [18, 30]].forEach(function (p, i) {
      const d = el("button", { class: "size-dot" + (i === 1 ? " on" : ""), style: { width: p[0] + "px", height: p[0] + "px" } });
      d.addEventListener("click", function () {
        size = p[1];
        sizeRow.querySelectorAll(".size-dot").forEach(function (x) { x.classList.remove("on"); });
        d.classList.add("on"); WSAudio.play("tap");
      });
      sizeRow.appendChild(d);
    });
    bar.appendChild(sizeRow);
    const eraserBtn = el("button", { class: "tool-btn", text: (typeof WSI18n !== "undefined" ? WSI18n.k("toolEraser", "🧽 Eraser") : "🧽 Eraser") });
    eraserBtn.addEventListener("click", function () { erasing = !erasing; stamp = null; refresh(); WSAudio.play("tap"); });
    bar.appendChild(eraserBtn);
    const undoBtn = el("button", { class: "tool-btn", text: (typeof WSI18n !== "undefined" ? WSI18n.k("toolUndo", "↩️ Undo") : "↩️ Undo") });
    const clearBtn = el("button", { class: "tool-btn", text: (typeof WSI18n !== "undefined" ? WSI18n.k("toolClear", "🗑️ Clear") : "🗑️ Clear") });
    const saveBtn = el("button", { class: "tool-btn", text: (typeof WSI18n !== "undefined" ? WSI18n.k("toolSave", "💾 Save art") : "💾 Save art") });
    bar.appendChild(undoBtn); bar.appendChild(clearBtn); bar.appendChild(saveBtn);
    stage.appendChild(bar);
    stage.appendChild(c.wrap);

    const tray = el("div", { class: "stamp-tray" });
    STAMPS.forEach(function (s2) {
      const b = el("button", { text: s2 });
      b.addEventListener("click", function () {
        stamp = stamp === s2 ? null : s2; erasing = false; refresh();
        tray.querySelectorAll("button").forEach(function (x, j) { x.classList.toggle("on", stamp === STAMPS[j]); });
        WSAudio.play("tap");
      });
      tray.appendChild(b);
    });
    stage.appendChild(tray);
    stage.appendChild(el("p", { class: "guide-note", text: (typeof WSI18n !== "undefined" ? WSI18n.k("noteDraw", "Draw with your finger or mouse — or pick a sticker and tap to stamp it!") : "Draw with your finger or mouse — or pick a sticker and tap to stamp it!") }));

    function refresh() {
      bar.querySelectorAll(".swatch").forEach(function (s3, i) { s3.classList.toggle("on", !erasing && !stamp && PALETTE[i] === color); });
      eraserBtn.classList.toggle("on", erasing);
    }

    function fillBg() { if (c.ctx) { c.ctx.fillStyle = "#FFFFFF"; c.ctx.fillRect(0, 0, c.w, c.h); } }
    function pushHistory() { if (!c.ctx) return; try { history.push(c.canvas.toDataURL()); if (history.length > 14) history.shift(); } catch (e) {} }

    function down(ev) {
      ev.preventDefault();
      const p = c.pos(ev);
      if (stamp) {
        pushHistory();
        if (c.ctx) { c.ctx.font = "54px serif"; c.ctx.textAlign = "center"; c.ctx.textBaseline = "middle"; c.ctx.fillText(stamp, p.x, p.y); }
        WSAudio.play("pop");
        return;
      }
      pushHistory();
      drawing = true; last = p; draw(p);
    }
    function move(ev) { if (drawing) { ev.preventDefault(); draw(c.pos(ev)); } }
    function up() { drawing = false; last = null; }
    function draw(p) {
      if (!c.ctx || !last) return;
      c.ctx.strokeStyle = erasing ? "#FFFFFF" : color;
      c.ctx.lineWidth = erasing ? size * 2.2 : size;
      c.ctx.lineCap = "round"; c.ctx.lineJoin = "round";
      c.ctx.beginPath(); c.ctx.moveTo(last.x, last.y); c.ctx.lineTo(p.x, p.y); c.ctx.stroke();
      last = p;
    }

    c.canvas.addEventListener("mousedown", down);
    c.canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    c.canvas.addEventListener("touchstart", down, { passive: false });
    c.canvas.addEventListener("touchmove", move, { passive: false });
    c.canvas.addEventListener("touchend", up);

    undoBtn.addEventListener("click", function () {
      if (!c.ctx) return;
      const prev = history.pop();
      if (!prev) { toast((typeof WSI18n !== "undefined" ? WSI18n.k("toastUndo", "Nothing to undo yet!") : "Nothing to undo yet!")); return; }
      const img = new Image();
      img.onload = function () { c.ctx.clearRect(0, 0, c.w, c.h); c.ctx.drawImage(img, 0, 0); };
      img.src = prev;
      WSAudio.play("tap");
    });
    clearBtn.addEventListener("click", function () { pushHistory(); fillBg(); WSAudio.play("pop"); toast((typeof WSI18n !== "undefined" ? WSI18n.k("toastClear", "Fresh paper! 📄") : "Fresh paper! 📄")); });
    saveBtn.addEventListener("click", function () {
      try {
        const a = document.createElement("a");
        a.download = "wondersprout-masterpiece.png";
        a.href = c.canvas.toDataURL("image/png");
        a.click();
        WSAudio.play("cheer"); WSFX.celebrate();
        toast((typeof WSI18n !== "undefined" ? WSI18n.k("toastSaved", "Masterpiece saved! Frame it! 🖼️") : "Masterpiece saved! Frame it! 🖼️"));
      } catch (e) { toast((typeof WSI18n !== "undefined" ? WSI18n.k("toastSaveBlocked", "Saving is blocked in this preview — screenshot it instead 📸") : "Saving is blocked in this preview — screenshot it instead 📸")); }
    });

    if (c.ctx) fillBg();
    return function () {
      window.removeEventListener("mouseup", up);
      c.canvas.removeEventListener("mousedown", down);
      c.canvas.removeEventListener("mousemove", move);
      c.canvas.removeEventListener("touchstart", down);
      c.canvas.removeEventListener("touchmove", move);
      c.canvas.removeEventListener("touchend", up);
    };
  }

  /* ---------- 2. Colour In ---------- */
  const PAGES = {
    "🌼 Flower": `<svg viewBox="0 0 400 400">
      <circle class="cregion" cx="330" cy="60" r="34"/>
      <ellipse class="cregion" cx="200" cy="90" rx="34" ry="52"/><ellipse class="cregion" cx="270" cy="140" rx="52" ry="34"/>
      <ellipse class="cregion" cx="130" cy="140" rx="52" ry="34"/><ellipse class="cregion" cx="160" cy="215" rx="34" ry="50" transform="rotate(28 160 215)"/>
      <ellipse class="cregion" cx="240" cy="215" rx="34" ry="50" transform="rotate(-28 240 215)"/>
      <circle class="cregion" cx="200" cy="165" r="34"/>
      <rect class="cregion" x="190" y="230" width="20" height="130" rx="8"/>
      <path class="cregion" d="M190 300 Q130 280 120 340 Q180 350 190 300 Z"/>
      <path class="cregion" d="M210 270 Q270 250 285 305 Q225 320 210 270 Z"/>
      <rect class="cregion" x="0" y="360" width="400" height="40"/></svg>`,
    "🐟 Fish": `<svg viewBox="0 0 400 400">
      <rect class="cregion" x="0" y="300" width="400" height="100"/>
      <ellipse class="cregion" cx="190" cy="190" rx="120" ry="80"/>
      <path class="cregion" d="M310 190 L380 130 L370 190 L380 250 Z"/>
      <path class="cregion" d="M170 112 Q200 60 230 112 Z"/>
      <circle class="cregion" cx="120" cy="170" r="16"/>
      <circle class="cregion" cx="330" cy="80" r="18"/><circle class="cregion" cx="350" cy="44" r="12"/>
      <path class="cregion" d="M100 250 q40 30 90 12 q-50 26 -90 -12 Z"/></svg>`,
    "🚀 Rocket": `<svg viewBox="0 0 400 400">
      <circle class="cregion" cx="60" cy="70" r="6"/><circle class="cregion" cx="340" cy="50" r="6"/><circle class="cregion" cx="320" cy="150" r="6"/>
      <path class="cregion" d="M200 40 Q260 120 250 260 L150 260 Q140 120 200 40 Z"/>
      <circle class="cregion" cx="200" cy="150" r="34"/>
      <path class="cregion" d="M150 200 L90 300 L150 270 Z"/>
      <path class="cregion" d="M250 200 L310 300 L250 270 Z"/>
      <path class="cregion" d="M170 270 Q200 360 230 270 Z"/>
      <circle class="cregion" cx="330" cy="330" r="40"/><circle cx="330" cy="330" r="8" fill="none" stroke="#2C3A4B" stroke-width="3"/></svg>`,
  };

  function colorIn(stage) {
    let color = PALETTE[1];
    const pal = paletteRow(function (c) { color = c; });
    stage.appendChild(pal.bar);
    const pageRow = el("div", { class: "flex-center", style: { paddingBottom: "12px" } });
    const holder = el("div", { class: "color-wrap" });
    stage.appendChild(pageRow);
    stage.appendChild(holder);
    stage.appendChild(el("p", { class: "guide-note", text: (typeof WSI18n !== "undefined" ? WSI18n.k("noteColor", "Pick a colour, then tap any part of the picture to fill it in!") : "Pick a colour, then tap any part of the picture to fill it in!") }));

    function loadPage(name) {
      holder.innerHTML = PAGES[name];
      holder.querySelectorAll(".cregion").forEach(function (r) {
        r.addEventListener("click", function () {
          r.style.fill = color;
          WSAudio.play("pop");
        });
      });
      WSAudio.speak(name.slice(2) + "! Tap and colour it in!");
    }
    Object.keys(PAGES).forEach(function (name, i) {
      const b = el("button", { class: "tool-btn" + (i === 0 ? " on" : ""), text: name });
      b.addEventListener("click", function () {
        pageRow.querySelectorAll(".tool-btn").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        loadPage(name);
      });
      pageRow.appendChild(b);
    });
    loadPage(Object.keys(PAGES)[0]);
  }

  /* ---------- 3. Trace Lines ---------- */
  const GUIDES = [
    { name: "A straight road", draw: function (x) { x.beginPath(); x.moveTo(60, 260); x.lineTo(760, 260); x.stroke(); } },
    { name: "Waves on the sea", draw: function (x) { x.beginPath(); for (let i = 0; i <= 24; i++) { const px = 60 + i * 29, py = 260 + Math.sin(i * 0.9) * 70; if (i === 0) x.moveTo(px, py); else x.lineTo(px, py); } x.stroke(); } },
    { name: "A zigzag mountain", draw: function (x) { x.beginPath(); x.moveTo(60, 380); for (let i = 1; i <= 7; i++) x.lineTo(60 + i * 100, i % 2 ? 140 : 380); x.stroke(); } },
    { name: "A big round circle", draw: function (x) { x.beginPath(); x.arc(410, 260, 170, 0, Math.PI * 2); x.stroke(); } },
    { name: "Falling raindrops", draw: function (x) { for (let i = 0; i < 6; i++) { x.beginPath(); x.moveTo(100 + i * 125, 80); x.lineTo(100 + i * 125, 440); x.stroke(); } } },
  ];

  function traceLines(stage) {
    const c = makeCanvas(820, 520);
    let color = PALETTE[0], idx = 0;
    const pal = paletteRow(function (col) { color = col; }, color);
    stage.appendChild(pal.bar);
    stage.appendChild(c.wrap);
    const row = el("div", { class: "flex-center", style: { paddingTop: "12px" } });
    const label = el("b", { style: { fontSize: "1.05rem" } });
    const nextBtn = el("button", { class: "tool-btn", text: (typeof WSI18n !== "undefined" ? WSI18n.k("toolNext", "Next line →") : "Next line →") });
    const clearBtn = el("button", { class: "tool-btn", text: (typeof WSI18n !== "undefined" ? WSI18n.k("toolRetrace", "🗑️ Retrace") : "🗑️ Retrace") });
    row.appendChild(label); row.appendChild(nextBtn); row.appendChild(clearBtn);
    stage.appendChild(row);
    stage.appendChild(el("p", { class: "guide-note", text: (typeof WSI18n !== "undefined" ? WSI18n.k("noteTrace", "Trace over the dotted line with your finger — going slowly is the secret!") : "Trace over the dotted line with your finger — going slowly is the secret!") }));

    function render() {
      if (!c.ctx) return;
      const x = c.ctx;
      x.clearRect(0, 0, c.w, c.h);
      x.fillStyle = "#FFFDF6"; x.fillRect(0, 0, c.w, c.h);
      x.save();
      x.strokeStyle = "#C9D4C5"; x.lineWidth = 10; x.lineCap = "round"; x.setLineDash([4, 26]);
      GUIDES[idx].draw(x);
      x.restore();
      label.textContent = "✏️ " + ((typeof WSI18n !== "undefined") ? WSI18n.k("trace" + idx, GUIDES[idx].name) : GUIDES[idx].name);
    }
    nextBtn.addEventListener("click", function () { idx = (idx + 1) % GUIDES.length; render(); WSAudio.play("tap"); });
    clearBtn.addEventListener("click", function () { render(); WSAudio.play("pop"); });

    let drawing = false, last = null;
    function down(ev) { ev.preventDefault(); drawing = true; last = c.pos(ev); dot(last); }
    function move(ev) { if (!drawing) return; ev.preventDefault(); const p = c.pos(ev); line(last, p); last = p; }
    function up() { drawing = false; last = null; }
    function dot(p) { line(p, { x: p.x + 0.5, y: p.y + 0.5 }); }
    function line(a, b) {
      if (!c.ctx || !a || !b) return;
      c.ctx.strokeStyle = color; c.ctx.lineWidth = 12; c.ctx.lineCap = "round";
      c.ctx.beginPath(); c.ctx.moveTo(a.x, a.y); c.ctx.lineTo(b.x, b.y); c.ctx.stroke();
    }
    c.canvas.addEventListener("mousedown", down);
    c.canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    c.canvas.addEventListener("touchstart", down, { passive: false });
    c.canvas.addEventListener("touchmove", move, { passive: false });
    c.canvas.addEventListener("touchend", up);
    render();
    return function () {
      window.removeEventListener("mouseup", up);
      c.canvas.removeEventListener("mousedown", down);
      c.canvas.removeEventListener("mousemove", move);
      c.canvas.removeEventListener("touchstart", down);
      c.canvas.removeEventListener("touchmove", move);
      c.canvas.removeEventListener("touchend", up);
    };
  }

  /* ---------- 4. Shape Stamps ---------- */
  function shapeStamps(stage) {
    const c = makeCanvas(820, 520);
    let color = PALETTE[1], shape = "circle", size = 44;
    const pal = paletteRow(function (col) { color = col; }, color);
    stage.appendChild(pal.bar);
    const row = el("div", { class: "flex-center", style: { paddingBottom: "10px", gap: "8px" } });
    [["⭕", "circle"], ["🟦", "square"], ["🔺", "triangle"], ["⭐", "star"]].forEach(function (s2, i) {
      const b = el("button", { class: "tool-btn" + (i === 0 ? " on" : ""), text: s2[0] });
      b.addEventListener("click", function () {
        shape = s2[1];
        row.querySelectorAll(".tool-btn").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on"); WSAudio.play("tap");
      });
      row.appendChild(b);
    });
    const sizeRow = el("div", { class: "size-row" });
    [[28, 26], [44, 44], [70, 70]].forEach(function (p, i) {
      const d = el("button", { class: "size-dot" + (i === 1 ? " on" : ""), style: { width: (p[0] / 3) + "px", height: (p[0] / 3) + "px" } });
      d.addEventListener("click", function () {
        size = p[1];
        sizeRow.querySelectorAll(".size-dot").forEach(function (x) { x.classList.remove("on"); });
        d.classList.add("on"); WSAudio.play("tap");
      });
      sizeRow.appendChild(d);
    });
    row.appendChild(sizeRow);
    const clearBtn = el("button", { class: "tool-btn", text: (typeof WSI18n !== "undefined" ? WSI18n.k("toolClear", "🗑️ Clear") : "🗑️ Clear") });
    row.appendChild(clearBtn);
    stage.appendChild(row);
    stage.appendChild(c.wrap);
    stage.appendChild(el("p", { class: "guide-note", text: (typeof WSI18n !== "undefined" ? WSI18n.k("noteShapes", "Pick a shape, then tap the paper — build a shape city, a robot, anything!") : "Pick a shape, then tap the paper — build a shape city, a robot, anything!") }));

    function stampShape(p) {
      if (!c.ctx) return;
      const x = c.ctx;
      x.fillStyle = color;
      x.beginPath();
      if (shape === "circle") { x.arc(p.x, p.y, size / 2, 0, Math.PI * 2); }
      else if (shape === "square") { x.rect(p.x - size / 2, p.y - size / 2, size, size); }
      else if (shape === "triangle") { x.moveTo(p.x, p.y - size / 2); x.lineTo(p.x + size / 2, p.y + size / 2); x.lineTo(p.x - size / 2, p.y + size / 2); x.closePath(); }
      else {
        for (let i = 0; i < 10; i++) {
          const rad = i % 2 === 0 ? size / 2 : size / 4.5;
          const a = (Math.PI / 5) * i - Math.PI / 2;
          if (i === 0) x.moveTo(p.x + rad * Math.cos(a), p.y + rad * Math.sin(a));
          else x.lineTo(p.x + rad * Math.cos(a), p.y + rad * Math.sin(a));
        }
        x.closePath();
      }
      x.fill();
      WSAudio.play("pop");
    }
    function down(ev) { ev.preventDefault(); stampShape(c.pos(ev)); }
    c.canvas.addEventListener("mousedown", down);
    c.canvas.addEventListener("touchstart", down, { passive: false });
    clearBtn.addEventListener("click", function () { if (c.ctx) { c.ctx.fillStyle = "#fff"; c.ctx.fillRect(0, 0, c.w, c.h); } WSAudio.play("pop"); });
    if (c.ctx) { c.ctx.fillStyle = "#fff"; c.ctx.fillRect(0, 0, c.w, c.h); }
    return function () {
      c.canvas.removeEventListener("mousedown", down);
      c.canvas.removeEventListener("touchstart", down);
    };
  }

  /* ---------- 5. Sticker Scenes ---------- */
  const SCENES = {
    "🏖 Beach": {
      stamps: ["🌴", "🐚", "⛵", "🦀", "☀️", "🐠", "🏐", "🍦"],
      bg: function (x, w, h) {
        const g = x.createLinearGradient(0, 0, 0, h * 0.55); g.addColorStop(0, "#BFE8FF"); g.addColorStop(1, "#EAF7FF");
        x.fillStyle = g; x.fillRect(0, 0, w, h * 0.55);
        x.fillStyle = "#57B0F7"; x.fillRect(0, h * 0.55, w, h * 0.2);
        x.fillStyle = "#8ECAE6"; for (let i = 0; i < 6; i++) { x.beginPath(); x.ellipse(w * (0.1 + i * 0.16), h * (0.6 + (i % 2) * 0.06), 46, 6, 0, 0, Math.PI * 2); x.fill(); }
        x.fillStyle = "#F0DFB4"; x.fillRect(0, h * 0.75, w, h * 0.25);
      },
    },
    "🚀 Space": {
      stamps: ["🚀", "🪐", "⭐", "👽", "🌙", "🛸", "☄️", "🌍"],
      bg: function (x, w, h) {
        x.fillStyle = "#141E33"; x.fillRect(0, 0, w, h);
        x.fillStyle = "rgba(255,255,255,.85)";
        for (let i = 0; i < 70; i++) { x.beginPath(); x.arc(Math.random() * w, Math.random() * h, Math.random() * 1.7 + 0.4, 0, Math.PI * 2); x.fill(); }
        const g = x.createRadialGradient(w * 0.8, h * 0.2, 4, w * 0.8, h * 0.2, 60);
        g.addColorStop(0, "#FFF3C4"); g.addColorStop(0.5, "#FFC545"); g.addColorStop(1, "rgba(255,197,69,0)");
        x.fillStyle = g; x.beginPath(); x.arc(w * 0.8, h * 0.2, 60, 0, Math.PI * 2); x.fill();
      },
    },
    "🌷 Garden": {
      stamps: ["🌸", "🦋", "🐝", "🌷", "🐞", "🌈", "🐌", "🌻"],
      bg: function (x, w, h) {
        const g = x.createLinearGradient(0, 0, 0, h * 0.6); g.addColorStop(0, "#BFE8FF"); g.addColorStop(1, "#EAF7FF");
        x.fillStyle = g; x.fillRect(0, 0, w, h * 0.6);
        x.fillStyle = "#FFC545"; x.beginPath(); x.arc(w * 0.82, h * 0.15, 40, 0, Math.PI * 2); x.fill();
        x.fillStyle = "#8CCB7C"; x.fillRect(0, h * 0.6, w, h * 0.4);
        x.fillStyle = "#6FB862"; for (let i = 0; i < 8; i++) { x.beginPath(); x.ellipse(w * (0.06 + i * 0.13), h * 0.62, 50, 10, 0, 0, Math.PI * 2); x.fill(); }
      },
    },
  };

  function stickerScenes(stage) {
    const c = makeCanvas(820, 520);
    let sceneName = Object.keys(SCENES)[0], stamp = SCENES[sceneName].stamps[0];
    const sceneRow = el("div", { class: "flex-center", style: { paddingBottom: "8px" } });
    const tray = el("div", { class: "stamp-tray" });
    stage.appendChild(sceneRow);
    stage.appendChild(c.wrap);
    stage.appendChild(tray);
    stage.appendChild(el("p", { class: "guide-note", text: (typeof WSI18n !== "undefined" ? WSI18n.k("noteScenes", "Choose a place, pick a sticker, then tap to build your scene!") : "Choose a place, pick a sticker, then tap to build your scene!") }));

    function drawScene() {
      if (!c.ctx) return;
      SCENES[sceneName].bg(c.ctx, c.w, c.h);
    }
    function buildTray() {
      tray.innerHTML = "";
      SCENES[sceneName].stamps.forEach(function (s2, i) {
        const b = el("button", { text: s2, class: i === 0 ? "on" : "" });
        b.addEventListener("click", function () {
          stamp = s2;
          tray.querySelectorAll("button").forEach(function (x, j) { x.classList.toggle("on", SCENES[sceneName].stamps[j] === s2); });
          WSAudio.play("tap");
        });
        tray.appendChild(b);
      });
    }
    Object.keys(SCENES).forEach(function (name, i) {
      const b = el("button", { class: "tool-btn" + (i === 0 ? " on" : ""), text: name });
      b.addEventListener("click", function () {
        sceneName = name;
        sceneRow.querySelectorAll(".tool-btn").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        drawScene(); buildTray();
        WSAudio.play("pop");
      });
      sceneRow.appendChild(b);
    });
    function down(ev) {
      ev.preventDefault();
      const p = c.pos(ev);
      if (c.ctx) { c.ctx.font = "64px serif"; c.ctx.textAlign = "center"; c.ctx.textBaseline = "middle"; c.ctx.fillText(stamp, p.x, p.y); }
      WSAudio.play("pop");
    }
    c.canvas.addEventListener("mousedown", down);
    c.canvas.addEventListener("touchstart", down, { passive: false });
    drawScene(); buildTray();
    return function () {
      c.canvas.removeEventListener("mousedown", down);
      c.canvas.removeEventListener("touchstart", down);
    };
  }

  /* ---------- 6. Surprise Me ---------- */
  const PROMPTS = [
    "Draw a purple dinosaur eating ice cream! 🦕",
    "Draw your family as superheroes! 🦸",
    "Draw a house for a mouse — with tiny doors! 🐭",
    "Draw the tastiest cake in the world! 🎂",
    "Draw a fish with rainbow stripes! 🌈",
    "Draw a robot that gives hugs! 🤗",
    "Draw what the Moon had for dinner! 🌙",
    "Draw your dream playground! 🛝",
    "Draw a cat driving a bus! 🚌",
    "Draw the sun wearing sunglasses! 😎",
  ];

  function surpriseMe(stage) {
    const card = el("div", { class: "roll-card" });
    const label = el("div", { class: "roll-prompt", text: (typeof WSI18n !== "undefined" ? WSI18n.k("rollLabel", "Ready for a silly drawing challenge?") : "Ready for a silly drawing challenge?") });
    const rollBtn = el("button", { class: "btn btn-sun", text: (typeof WSI18n !== "undefined" ? WSI18n.k("rollBtn", "🎲 Roll a challenge!") : "🎲 Roll a challenge!") });
    card.appendChild(label);
    card.appendChild(el("div", { class: "flex-center", style: { marginTop: "10px" } }, [rollBtn]));
    stage.appendChild(card);

    let cleanup = null;
    function newPrompt() {
      const pi = (Math.random() * PROMPTS.length) | 0;
      const p = (typeof WSI18n !== "undefined") ? WSI18n.k("draw" + pi, PROMPTS[pi]) : PROMPTS[pi];
      label.textContent = p;
      WSAudio.speak(p.replace(/[^\w\s'!?.,-]/g, ""));
      WSAudio.play("sparkle");
    }
    rollBtn.addEventListener("click", newPrompt);

    const drawBox = el("div");
    stage.appendChild(drawBox);
    cleanup = freeDraw(drawBox);

    return function () { if (cleanup) cleanup(); };
  }

  /* ---------- Route ---------- */
  const BUILDERS = { draw: freeDraw, color: colorIn, trace: traceLines, shapes: shapeStamps, scenes: stickerScenes, surprise: surpriseMe };

  WSRouter.register("#/studio", function (view) {
    view.appendChild(el("span", { class: "eyebrow", text: (typeof WSI18n !== "undefined" ? WSI18n.k("studio.eyebrow", "WonderSprout Studio · a DINVICTA EDU studio") : "WonderSprout Studio · a DINVICTA EDU studio") }));
    view.appendChild(el("h1", { class: "section-title", text: (typeof WSI18n !== "undefined" ? WSI18n.k("studio.title", "Make something wonderful 🎨") : "Make something wonderful 🎨") }));
    view.appendChild(el("p", { class: "section-sub", text: (typeof WSI18n !== "undefined" ? WSI18n.k("studio.sub", "Six ways to create: free draw, colouring pages, tracing, shape stamps, sticker scenes and surprise challenges. No rules, no wrong answers.") : "Six ways to create: free draw, colouring pages, tracing, shape stamps, sticker scenes and surprise challenges. No rules, no wrong answers.") }));

    const tabBar = el("div", { class: "mode-tabs" });
    const stage = el("div", { style: { marginTop: "10px" } });
    let cleanup = null;

    function setMode(id) {
      if (cleanup) { try { cleanup(); } catch (e) {} cleanup = null; }
      stage.innerHTML = "";
      WSAudio.play("tap");
      cleanup = BUILDERS[id](stage) || null;
    }
    MODES.forEach(function (m, i) {
      const b = el("button", { class: "tool-btn" + (i === 0 ? " on" : ""), text: m.label });
      b.addEventListener("click", function () {
        tabBar.querySelectorAll(".tool-btn").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        setMode(m.id);
      });
      tabBar.appendChild(b);
    });
    view.appendChild(tabBar);
    view.appendChild(stage);
    setMode("draw");

    view.appendChild(el("div", { class: "card mt24", html: (typeof WSI18n !== "undefined" ? WSI18n.k("studio.parent", "<b>👪 Parent:</b> ask about the creation, never grade it — “Tell me about your picture!” builds language and pride. Print or screenshot the best ones for the Wonder Journal. Colouring and tracing also strengthen the hand muscles needed for writing later.") : "<b>👪 Parent:</b> ask about the creation, never grade it — “Tell me about your picture!” builds language and pride. Print or screenshot the best ones for the Wonder Journal. Colouring and tracing also strengthen the hand muscles needed for writing later.") }));
  });
})();
