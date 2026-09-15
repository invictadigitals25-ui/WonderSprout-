/* ============================================================
   WonderSprout — Router & App Shell
   ============================================================ */

const WSRouter = (function () {
  "use strict";
  const routes = {};
  const NAV = [
    { hash: "#/", key: "platform", label: "Platform" },
    { hash: "#/world", key: "world", label: "🌍 World", kid: true },
    { hash: "#/parent", key: "parent", label: "Parent" },
    { hash: "#/labs", key: "labs", label: "Labs" },
    { hash: "#/stories", key: "stories", label: "Stories" },
    { hash: "#/music", key: "music", label: "Music" },
    { hash: "#/studio", key: "studio", label: "Studio" },
    { hash: "#/camera", key: "camera", label: "Camera" },
    { hash: "#/ai", key: "ai", label: "AI" },
    { hash: "#/kits", key: "kits", label: "Kits" },
  ];

  function register(pattern, fn) { routes[pattern] = fn; }

  function navigate(hash) {
    if (location.hash === hash) render();
    else location.hash = hash;
  }

  function parse(hash) {
    const clean = (hash || "#/").replace(/^#\/?/, "");
    const parts = clean.split("/").filter(Boolean);
    return { full: "#/" + parts.join("/"), root: parts[0] || "", param: parts[1] || null };
  }

  function findRoute(parsed) {
    if (routes[parsed.full]) return { fn: routes[parsed.full], param: parsed.param };
    if (parsed.root && routes["#/" + parsed.root]) return { fn: routes["#/" + parsed.root], param: parsed.param };
    return { fn: routes["#/"], param: null };
  }

  /* DOM helpers used by every module */
  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      const v = attrs[k];
      if (v == null) return;
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else if (k === "text") node.textContent = v;
      else if (k.indexOf("on") === 0 && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === "style" && typeof v === "object") Object.assign(node.style, v);
      else node.setAttribute(k, v);
    });
    (Array.isArray(children) ? children : children != null ? [children] : []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function toast(msg, ms) {
    let t = document.querySelector(".toast");
    if (!t) { t = el("div", { class: "toast" }); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._tid);
    t._tid = setTimeout(function () { t.classList.remove("show"); }, ms || 2600);
  }

  const LOGO_SVG = `
  <svg viewBox="0 0 100 100" role="img" aria-label="WonderSprout logo">
    <circle cx="50" cy="50" r="47" fill="#E7F6EE"/>
    <path d="M50 82 C50 60 50 48 50 40" stroke="#22965C" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M50 46 C34 46 24 36 24 20 C42 20 50 30 50 46 Z" fill="#35B878"/>
    <path d="M50 42 C66 42 76 32 76 16 C58 16 50 26 50 42 Z" fill="#6FD7A5"/>
    <circle cx="68" cy="58" r="4.6" fill="#FFC545"/>
    <circle cx="32" cy="62" r="3.4" fill="#57B0F7"/>
    <circle cx="58" cy="70" r="2.8" fill="#FF7D68"/>
    <ellipse cx="50" cy="86" rx="20" ry="5" fill="#CDE8C4"/>
  </svg>`;

  function brandNode() {
    const b = el("a", { class: "brand", href: "#/" });
    b.innerHTML = LOGO_SVG + `<span>Wonder<em>Sprout</em></span><span class='brand-by'>${typeof WSI18n !== "undefined" ? WSI18n.k("brand.by", "by DINVICTA EDU") : "by DINVICTA EDU"}</span>`;
    return b;
  }

  function buildShell() {
    const app = document.getElementById("app");
    if (!app || app.dataset.shell) return;
    app.dataset.shell = "1";
    app.innerHTML = "";

    const top = el("div", { class: "topbar" });
    const inner = el("div", { class: "topbar-inner" });
    inner.appendChild(brandNode());
    const nav = el("nav", { class: "nav", id: "mainnav" });
    NAV.forEach(function (n) {
      nav.appendChild(el("a", { href: n.hash, "data-hash": n.hash, class: n.kid ? "nav-kid" : "" }, (n.kid ? "🌍 " : "") + (typeof WSI18n !== "undefined" ? WSI18n.t(n.key) : n.label)));
    });
    inner.appendChild(nav);
    const langBtn = el("button", { class: "lang-btn", "aria-label": (typeof WSI18n !== "undefined" ? WSI18n.k("x.langAria", "Language") : "Language"), text: "🌐" });
    langBtn.addEventListener("click", function () { if (typeof WSI18n !== "undefined") WSI18n.menu(langBtn); });
    inner.appendChild(langBtn);
    top.appendChild(inner);
    app.appendChild(top);

    const view = el("main", { class: "page", id: "view" });
    app.appendChild(view);

    const foot = el("footer", { class: "footer" });
    foot.innerHTML = `<div class="foot-brand">WonderSprout <span style="font-weight:700; color:var(--ink-soft); font-size:.8rem">${typeof WSI18n !== "undefined" ? WSI18n.k("foot.product", "· a DINVICTA EDU product") : "· a DINVICTA EDU product"}</span></div>
      <div class="foot-tag">Little minds. Big wonders.</div>
      <div>${typeof WSI18n !== "undefined" ? WSI18n.k("foot.see", "See · Hear · Touch · Explore · Wonder — a parent-guided learning ecosystem for ages 0–36 months.") : "See · Hear · Touch · Explore · Wonder — a parent-guided learning ecosystem for ages 0–36 months."}</div>
      <div style="margin-top:8px; font-size:.78rem">${typeof WSI18n !== "undefined" ? WSI18n.k("foot.tryReal", "Every screen moment ends with a “Try it in real life” step. No ads, no rankings, no diagnosis — ever.") : "Every screen moment ends with a “Try it in real life” step. No ads, no rankings, no diagnosis — ever."}</div>
      <div style="margin-top:8px; font-weight:800; letter-spacing:.14em; font-size:.72rem; color:#A9B2BC">© DINVICTA EDU</div>`;
    app.appendChild(foot);

    /* Persistent brand watermark (all pages, incl. child mode) */
    if (!document.querySelector(".wm-fixed")) {
      const wm = el("div", { class: "wm-fixed", html: "DINVICTA<span>EDU</span>" });
      document.body.appendChild(wm);
    }
  }

  function markNav(hash) {
    const links = document.querySelectorAll("#mainnav a");
    let best = null;
    links.forEach(function (a) {
      a.classList.remove("active");
      const h = a.getAttribute("data-hash");
      if (h === "#/" ? (hash === "#/" || hash === "") : hash.indexOf(h) === 0) {
        if (!best || h.length > best.length) best = h;
      }
    });
    if (best) {
      const a = document.querySelector(`#mainnav a[data-hash="${best}"]`);
      if (a) a.classList.add("active");
    }
  }

  function render() {
    try { if (typeof WSAudio !== "undefined") WSAudio.stopSpeak(); } catch (e) {}
    document.dispatchEvent(new CustomEvent("ws:navigate"));
    const parsed = parse(location.hash);
    const childMode = parsed.root === "world";
    document.body.classList.toggle("child-mode", childMode);

    buildShell();
    if (typeof WSI18n !== "undefined") WSI18n.apply();
    markNav(parsed.full);

    const view = document.getElementById("view");
    view.innerHTML = "";
    view.className = childMode ? "page child-page" : "page";
    const route = findRoute(parsed);
    try {
      route.fn(view, parsed.param);
    } catch (err) {
      console.error("Route render failed:", parsed.full, err);
      view.appendChild(el("div", { class: "card" }, (typeof WSI18n !== "undefined" ? WSI18n.k("x.underConstruction", "This world is still under construction.") : "This world is still under construction.") + " " + String(err && err.message || err)));
    }
    window.scrollTo(0, 0);
  }

  function start() {
    window.addEventListener("hashchange", render);
    render();
  }

  return { register, navigate, start, render, el, toast, LOGO_SVG, parse };
})();

/* Shorthands used across modules */
const el = WSRouter.el;
const toast = WSRouter.toast;

if (typeof module !== "undefined" && module.exports) module.exports = WSRouter;
