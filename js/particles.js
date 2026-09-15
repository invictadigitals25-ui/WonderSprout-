/* ============================================================
   WonderSprout — Celebration FX (confetti, sparkles, stars)
   ============================================================ */

const WSFX = (function () {
  "use strict";
  let canvas = null, ctx = null, particles = [], raf = null;

  const COLORS = ["#35B878", "#FFC545", "#57B0F7", "#FF7D68", "#9B8CF0", "#4CC9C0"];

  function ensureCanvas() {
    if (canvas && document.body.contains(canvas)) return true;
    canvas = document.getElementById("fx");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = "fx";
      document.body.appendChild(canvas);
    }
    resize();
    ctx = canvas.getContext("2d");
    return !!ctx;
  }

  function resize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);

  function loop() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(function (p) { return p.life > 0; });
    particles.forEach(function (p) {
      p.x += p.vx; p.y += p.vy; p.vy += p.g; p.life -= 1; p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.min(1, p.life / 30);
      if (p.shape === "star") {
        drawStar(ctx, 0, 0, p.size, p.color);
      } else if (p.shape === "circle") {
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(0, 0, p.size, 0, Math.PI * 2); ctx.fill();
      } else {
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      }
      ctx.restore();
    });
    if (particles.length) raf = requestAnimationFrame(loop);
    else { raf = null; ctx.clearRect(0, 0, canvas.width, canvas.height); }
  }

  function drawStar(c, x, y, r, color) {
    c.fillStyle = color;
    c.beginPath();
    for (let i = 0; i < 10; i++) {
      const rad = i % 2 === 0 ? r : r * 0.45;
      const a = (Math.PI / 5) * i - Math.PI / 2;
      if (i === 0) c.moveTo(x + rad * Math.cos(a), y + rad * Math.sin(a));
      else c.lineTo(x + rad * Math.cos(a), y + rad * Math.sin(a));
    }
    c.closePath(); c.fill();
  }

  function start() { if (!raf) raf = requestAnimationFrame(loop); }

  /* Burst of confetti from a point (default: centre-top) */
  function confetti(x, y, count) {
    if (!ensureCanvas()) return;
    x = x == null ? canvas.width / 2 : x;
    y = y == null ? canvas.height * 0.25 : y;
    count = count || 70;
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 2 + Math.random() * 7;
      particles.push({
        x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 3,
        g: 0.16, life: 70 + Math.random() * 40, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3,
        size: 5 + Math.random() * 7, color: COLORS[(Math.random() * COLORS.length) | 0],
        shape: Math.random() < 0.35 ? "star" : "rect",
      });
    }
    start();
  }

  /* Small sparkle burst — for taps and pops */
  function sparkle(x, y) {
    if (!ensureCanvas()) return;
    for (let i = 0; i < 12; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 1 + Math.random() * 3.5;
      particles.push({
        x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        g: 0.05, life: 34 + Math.random() * 16, rot: 0, vr: 0.1,
        size: 3 + Math.random() * 4, color: COLORS[(Math.random() * COLORS.length) | 0],
        shape: Math.random() < 0.6 ? "star" : "circle",
      });
    }
    start();
  }

  /* Celebration: full-width confetti rain + audio handled by caller */
  function celebrate() {
    confetti(window.innerWidth * 0.3, window.innerHeight * 0.18, 55);
    setTimeout(function () { confetti(window.innerWidth * 0.7, window.innerHeight * 0.22, 55); }, 180);
  }

  function sparkleAt(el) {
    if (!el || !el.getBoundingClientRect) return sparkle(window.innerWidth / 2, window.innerHeight / 2);
    const r = el.getBoundingClientRect();
    sparkle(r.left + r.width / 2, r.top + r.height / 2);
  }

  function clear() { particles = []; }

  return { confetti, sparkle, celebrate, sparkleAt, clear };
})();

if (typeof module !== "undefined" && module.exports) module.exports = WSFX;
