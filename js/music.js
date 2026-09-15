/* ============================================================
   WonderSprout Music — Songs & Sound
   ============================================================ */

(function () {
  "use strict";
  const S = window.WSState;
  let cancelMelody = null;

  document.addEventListener("ws:navigate", function () {
    if (cancelMelody) { cancelMelody(); cancelMelody = null; }
  });

  function shelf(view) {
    view.appendChild(el("span", { class: "eyebrow", text: (typeof WSI18n !== "undefined" ? WSI18n.k("music.eyebrow", "WonderSprout Music") : "WonderSprout Music") }));
    view.appendChild(el("h1", { class: "section-title", text: (typeof WSI18n !== "undefined" ? WSI18n.k("music.title", "Sing, clap, play! 🎵") : "Sing, clap, play! 🎵") }));
    view.appendChild(el("p", { class: "section-sub", text: (typeof WSI18n !== "undefined" ? WSI18n.k("music.sub", "Public-domain nursery rhymes with karaoke words, plus free-play instruments. Music builds rhythm, memory and language — all before the first word is read.") : "Public-domain nursery rhymes with karaoke words, plus free-play instruments. Music builds rhythm, memory and language — all before the first word is read.") }));

    const list = el("div", { class: "grid mt16", style: { maxWidth: "640px" } });
    function hasAcc() { try { return !!(window.WSBackend && WSBackend.hasAccount && WSBackend.hasAccount()); } catch (e) { return false; } }
    WSData.SONGS.forEach(function (song, si) {
      const locked = !hasAcc() && si >= 3;
      const row = el("button", { class: "song-row" + (locked ? " locked" : "") });
      row.innerHTML = `<span class="s-emoji">${song.emoji}</span>
        <span><b>${typeof WSI18n !== "undefined" ? WSI18n.k("song" + si + ".t", song.title) : song.title}</b><small>${typeof WSI18n !== "undefined" ? WSI18n.k("song" + si + ".d", song.desc) : song.desc}</small></span>
        <span class="play-ic">${locked ? "🔒" : "▶"}</span>`;
      row.addEventListener("click", function () {
        if (locked) { WSAudio.play("wrong"); toast(WSI18n.k("x.lockedSong", "🔒 The full songbook unlocks with a free parent account!")); try { if (window.WSAuthPrompt) WSAuthPrompt.show(); } catch (e) {} return; }
        WSAudio.play("tap"); WSRouter.navigate("#/music/" + song.id);
      });
      list.appendChild(row);
    });
    view.appendChild(list);

    const extras = el("div", { class: "grid grid-2 mt24" });
    const free = el("button", { class: "card", style: { textAlign: "left", cursor: "pointer" } });
    free.innerHTML = `<div style="font-size:2rem">🎹</div><h3 style="font-weight:900; margin:8px 0 4px">${typeof WSI18n !== "undefined" ? WSI18n.k("music.freeTitle", "Free Play Pad") : "Free Play Pad"}</h3>
      <p style="font-size:.86rem; color:var(--ink-soft); line-height:1.5">${typeof WSI18n !== "undefined" ? WSI18n.k("music.freeDesc", "Tap the coloured pads — every note sounds good together. No wrong notes in WonderSprout!") : "Tap the coloured pads — every note sounds good together. No wrong notes in WonderSprout!"}</p>`;
    free.addEventListener("click", function () { WSRouter.navigate("#/music/pads"); });
    const clap = el("button", { class: "card", style: { textAlign: "left", cursor: "pointer" } });
    clap.innerHTML = `<div style="font-size:2rem">👏</div><h3 style="font-weight:900; margin:8px 0 4px">${typeof WSI18n !== "undefined" ? WSI18n.k("music.clapTitle", "Clap the Beat") : "Clap the Beat"}</h3>
      <p style="font-size:.86rem; color:var(--ink-soft); line-height:1.5">${typeof WSI18n !== "undefined" ? WSI18n.k("music.clapDesc", "A heartbeat pulse — clap along when it grows! Rhythm first, notes later.") : "A heartbeat pulse — clap along when it grows! Rhythm first, notes later."}</p>`;
    clap.addEventListener("click", function () { WSRouter.navigate("#/music/clap"); });
    extras.appendChild(free); extras.appendChild(clap);
    view.appendChild(extras);

    view.appendChild(el("div", { class: "card mt24", html: (typeof WSI18n !== "undefined" ? WSI18n.k("music.tip1", "<b>👪 Parent tip:</b> sing along out loud, even badly! Your voice is your child's favourite instrument — and live singing beats any recording for language learning.") : "<b>👪 Parent tip:</b> sing along out loud, even badly! Your voice is your child's favourite instrument — and live singing beats any recording for language learning.") }));
  }

  /* ---------- Karaoke player ---------- */
  function player(view, songId) {
    const song = WSData.SONGS.filter(function (s) { return s.id === songId; })[0];
    if (!song) { WSRouter.navigate("#/music"); return; }

    const card = el("div", { class: "karaoke" });
    card.appendChild(el("div", { style: { fontSize: "2.6rem" }, text: song.emoji }));
    card.appendChild(el("h2", { style: { fontWeight: 900, fontSize: "1.4rem", marginTop: "6px" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("song" + WSData.SONGS.indexOf(song) + ".t", song.title) : song.title) }));

    const line = el("div", { class: "karaoke-line mt16" });
    const wordEls = song.notes.map(function (n) {
      const w = el("span", { class: "word", text: n.w });
      line.appendChild(w);
      return w;
    });
    card.appendChild(line);

    const ring = el("div", { class: "pulse-ring" });
    card.appendChild(ring);

    const bar = el("div", { class: "player-bar" });
    const playBtn = el("button", { class: "btn btn-primary", text: (typeof WSI18n !== "undefined" ? WSI18n.k("music.sing", "▶ Sing!") : "▶ Sing!") });
    const stopBtn = el("button", { class: "btn btn-soft", text: (typeof WSI18n !== "undefined" ? WSI18n.k("music.stop", "⏹ Stop") : "⏹ Stop") });
    const backBtn = el("button", { class: "btn btn-soft", text: WSI18n.k("x.allSongs", "🎵 All songs") });
    bar.appendChild(playBtn); bar.appendChild(stopBtn); bar.appendChild(backBtn);
    card.appendChild(bar);

    const speedRow = el("div", { class: "flex-center", style: { paddingTop: "12px" } });
    let tempo = song.bpm;
    [[typeof WSI18n !== "undefined" ? WSI18n.k("music.tempo0", "🐢 Slow") : "🐢 Slow", 0.66], [typeof WSI18n !== "undefined" ? WSI18n.k("music.tempo1", "🚶 Normal") : "🚶 Normal", 1], [typeof WSI18n !== "undefined" ? WSI18n.k("music.tempo2", "🐇 Bouncy") : "🐇 Bouncy", 1.3]].forEach(function (opt, i) {
      const b = el("button", { class: "tool-btn" + (i === 1 ? " on" : ""), text: opt[0] });
      b.addEventListener("click", function () {
        tempo = Math.round(song.bpm * opt[1]);
        speedRow.querySelectorAll(".tool-btn").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        WSAudio.play("tap");
      });
      speedRow.appendChild(b);
    });
    card.appendChild(speedRow);
    view.appendChild(card);

    view.appendChild(el("div", { class: "card mt16", html: (typeof WSI18n !== "undefined" ? WSI18n.k("music.tip2", "<b>👪 Parent:</b> sing the words with your child and add actions — twinkle fingers, rowing arms, sleeping hands. Actions + melody + words = triple memory hooks.") : "<b>👪 Parent:</b> sing the words with your child and add actions — twinkle fingers, rowing arms, sleeping hands. Actions + melody + words = triple memory hooks.") }));

    backBtn.addEventListener("click", function () { WSRouter.navigate("#/music"); });
    stopBtn.addEventListener("click", function () {
      if (cancelMelody) cancelMelody();
      cancelMelody = null;
      wordEls.forEach(function (w) { w.classList.remove("active", "sung"); });
      playBtn.textContent = "▶ Sing!";
    });

    playBtn.addEventListener("click", function () {
      if (cancelMelody) cancelMelody();
      wordEls.forEach(function (w) { w.classList.remove("active", "sung"); });
      playBtn.textContent = "🎶 Singing…";
      const beatMs = 60000 / tempo;
      let beatTimer = setInterval(function () {
        ring.classList.add("beat");
        setTimeout(function () { ring.classList.remove("beat"); }, 110);
      }, beatMs);
      cancelMelody = WSAudio.melody(song.notes, tempo, function (i) {
        wordEls.forEach(function (w, j) {
          w.classList.toggle("active", j === i);
          if (j < i) w.classList.add("sung");
        });
      }, function () {
        clearInterval(beatTimer);
        cancelMelody = null;
        playBtn.textContent = "▶ Sing again!";
        S.counters.songs++;
        WSAudio.play("cheer");
        WSFX.celebrate();
        toast((typeof WSI18n !== "undefined" ? WSI18n.k("music.singToast", "Beautiful singing! 🎤⭐") : "Beautiful singing! 🎤⭐"));
      });
      const origCancel = cancelMelody;
      cancelMelody = function () { clearInterval(beatTimer); origCancel(); };
    });
  }

  /* ---------- Free play pads ---------- */
  const PAD_NOTES = [
    { n: "C4", c: "#F04E3E", label: "Do" }, { n: "D4", c: "#FF8A3D", label: "Re" },
    { n: "E4", c: "#FFC545", label: "Mi" }, { n: "G4", c: "#3DBE5F", label: "Sol" },
    { n: "A4", c: "#3E7BF0", label: "La" }, { n: "C5", c: "#9B59E8", label: "Do!" },
  ];
  function pads(view) {
    view.appendChild(el("div", { class: "prompt-banner", text: (typeof WSI18n !== "undefined" ? WSI18n.k("music.padsPrompt", "Tap the pads — make your own song! 🎹") : "Tap the pads — make your own song! 🎹") }));
    const grid = el("div", { class: "pad-grid" });
    PAD_NOTES.forEach(function (p) {
      const pad = el("button", { class: "pad", style: { background: p.c }, text: p.label });
      pad.addEventListener("pointerdown", function () {
        WSAudio.note(p.n);
        pad.classList.add("lit");
        setTimeout(function () { pad.classList.remove("lit"); }, 140);
      });
      grid.appendChild(pad);
    });
    view.appendChild(grid);
    view.appendChild(el("div", { class: "flex-center mt16" }, [
      el("button", { class: "btn btn-soft", onclick: function () { WSRouter.navigate("#/music"); }, text: WSI18n.k("x.allSongs", "← All songs") }),
    ]));
    view.appendChild(el("div", { class: "card mt16", html: (typeof WSI18n !== "undefined" ? WSI18n.k("music.tip3", "<b>👪 Parent:</b> the pads use a pentatonic scale — every combination sounds pleasant, so exploration is always rewarded. Try copying your child's little melody back to them!") : "<b>👪 Parent:</b> the pads use a pentatonic scale — every combination sounds pleasant, so exploration is always rewarded. Try copying your child's little melody back to them!") }));
  }

  /* ---------- Clap the beat ---------- */
  function clapGame(view) {
    view.appendChild(el("div", { class: "prompt-banner", text: (typeof WSI18n !== "undefined" ? WSI18n.k("music.clapPrompt", "Clap when the heart grows! 👏") : "Clap when the heart grows! 👏") }));
    const card = el("div", { class: "card center" });
    const heart = el("div", { style: { fontSize: "5rem", transition: "transform .12s ease-out", display: "inline-block" }, text: "💛" });
    card.appendChild(heart);
    const score = el("div", { style: { fontWeight: 900, fontSize: "1.2rem", marginTop: "12px" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("music.goodClaps", "Good claps: {n}") : "Good claps: {n}").split("{n}").join("0") });
    card.appendChild(score);
    const msg = el("div", { style: { color: "var(--ink-soft)", fontWeight: 700, marginTop: "6px", minHeight: "24px" }, text: (typeof WSI18n !== "undefined" ? WSI18n.k("music.watchHeart", "Watch the heart… then tap it ON the beat!") : "Watch the heart… then tap it ON the beat!") });
    card.appendChild(msg);
    view.appendChild(card);

    let good = 0, lastBeat = 0, timer = null;
    const BPM = 84, beatMs = 60000 / BPM;
    timer = setInterval(function () {
      lastBeat = performance.now();
      heart.style.transform = "scale(1.45)";
      WSAudio.play("drum");
      setTimeout(function () { heart.style.transform = "scale(1)"; }, 130);
    }, beatMs);

    heart.parentElement.addEventListener("click", function () {
      const off = Math.abs(performance.now() - lastBeat);
      const off2 = Math.min(off, Math.abs(performance.now() - lastBeat - beatMs));
      if (off2 < 220) {
        good++;
        score.textContent = (typeof WSI18n !== "undefined" ? WSI18n.k("music.goodClaps", "Good claps: {n}") : "Good claps: {n}").split("{n}").join(String(good));
        WSAudio.play("shaker");
        msg.textContent = good % 5 === 0 ? (typeof WSI18n !== "undefined" ? WSI18n.k("music.amazing", "Amazing rhythm! 🎉") : "Amazing rhythm! 🎉") : (typeof WSI18n !== "undefined" ? WSI18n.k("music.onBeat", "Yes! Right on the beat! 👏") : "Yes! Right on the beat! 👏");
        if (good % 5 === 0) { WSFX.celebrate(); WSAudio.play("cheer"); }
      } else {
        WSAudio.play("tap");
        msg.textContent = (typeof WSI18n !== "undefined" ? WSI18n.k("music.almost", "Almost! Wait for the heart to grow… 💛") : "Almost! Wait for the heart to grow… 💛");
      }
    });

    view.appendChild(el("div", { class: "flex-center mt16" }, [
      el("button", { class: "btn btn-soft", onclick: function () { WSRouter.navigate("#/music"); }, text: WSI18n.k("x.allSongs", "← All songs") }),
    ]));
    view.appendChild(el("div", { class: "card mt16", html: (typeof WSI18n !== "undefined" ? WSI18n.k("music.tip4", "<b>👪 Parent:</b> feel the beat together — clap hands, pat knees, bounce gently. Rhythm sense at this age predicts later reading fluency. No scoring pressure: every clap counts as play.") : "<b>👪 Parent:</b> feel the beat together — clap hands, pat knees, bounce gently. Rhythm sense at this age predicts later reading fluency. No scoring pressure: every clap counts as play.") }));

    return timer;
  }

  let clapTimer = null;
  document.addEventListener("ws:navigate", function () { if (clapTimer) { clearInterval(clapTimer); clapTimer = null; } });

  WSRouter.register("#/music", function (view, param) {
    if (!param) return shelf(view);
    if (param === "pads") return pads(view);
    if (param === "clap") { clapTimer = clapGame(view); return; }
    player(view, param);
  });
})();
