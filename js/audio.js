/* ============================================================
   WonderSprout — Sound & Speech Engine (Web Audio, zero assets)
   ============================================================ */

const WSAudio = (function () {
  "use strict";
  let ctx = null;
  let master = null;
  let muted = false;

  const NOTE_FREQ = {
    C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.0, A3: 220.0, B3: 246.94,
    C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.0, A4: 440.0, B4: 493.88,
    C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.0,
  };

  function ensure() {
    try {
      if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        ctx = new AC();
        master = ctx.createGain();
        master.gain.value = 0.5;
        master.connect(ctx.destination);
      }
      if (ctx.state === "suspended") ctx.resume().catch(function () {});
      return ctx;
    } catch (e) { return null; }
  }

  function setVolume(v) { if (master) master.gain.value = Math.max(0, Math.min(1, v)); }
  function mute(m) { muted = !!m; }
  function isMuted() { return muted; }

  /* A soft, rounded tone — friendly for little ears */
  function tone(freq, opts) {
    const c = ensure(); if (!c || muted) return;
    opts = opts || {};
    const dur = opts.dur || 0.5;
    const type = opts.type || "triangle";
    const vol = opts.vol || 0.35;
    const t = c.currentTime;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (opts.glide) osc.frequency.exponentialRampToValueAtTime(Math.max(30, opts.glide), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g); g.connect(master);
    osc.start(t); osc.stop(t + dur + 0.05);
  }

  function noise(opts) {
    const c = ensure(); if (!c || muted) return;
    opts = opts || {};
    const dur = opts.dur || 0.2;
    const vol = opts.vol || 0.2;
    const t = c.currentTime;
    const len = Math.floor(c.sampleRate * dur);
    const buf = c.createBuffer(1, len, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = c.createBufferSource(); src.buffer = buf;
    const g = c.createGain(); g.gain.value = vol;
    const filt = c.createBiquadFilter();
    filt.type = opts.filter || "lowpass";
    filt.frequency.value = opts.freq || 900;
    src.connect(filt); filt.connect(g); g.connect(master);
    src.start(t);
  }

  const SFX = {
    tap: function () { tone(520, { dur: 0.12, vol: 0.25 }); },
    pop: function () { tone(760, { dur: 0.14, vol: 0.3, glide: 220 }); noise({ dur: 0.08, vol: 0.12, freq: 1800 }); },
    sparkle: function () {
      [880, 1174, 1568].forEach(function (f, i) {
        setTimeout(function () { tone(f, { dur: 0.3, vol: 0.22, type: "sine" }); }, i * 90);
      });
    },
    cheer: function () {
      [523, 659, 784, 1046].forEach(function (f, i) {
        setTimeout(function () { tone(f, { dur: 0.45, vol: 0.3 }); }, i * 110);
      });
    },
    wrong: function () { tone(240, { dur: 0.22, vol: 0.18, type: "sine", glide: 190 }); },
    note: function (name) { tone(NOTE_FREQ[name] || 440, { dur: 0.7, vol: 0.32 }); },
    water: function () {
      [300, 420, 350, 500].forEach(function (f, i) {
        setTimeout(function () { tone(f, { dur: 0.16, vol: 0.18, type: "sine", glide: f * 1.6 }); }, i * 110);
      });
    },
    splash: function () { noise({ dur: 0.45, vol: 0.3, freq: 1100 }); tone(180, { dur: 0.3, vol: 0.2, glide: 90 }); },
    bounce: function () { tone(160, { dur: 0.1, vol: 0.25, type: "sine", glide: 90 }); },
    whoosh: function () { noise({ dur: 0.3, vol: 0.12, freq: 2400, filter: "bandpass" }); },
    shutter: function () { noise({ dur: 0.06, vol: 0.3, freq: 3000 }); setTimeout(function () { noise({ dur: 0.05, vol: 0.2, freq: 2500 }); }, 90); },
    send: function () { tone(660, { dur: 0.1, vol: 0.2, type: "sine" }); tone(990, { dur: 0.14, vol: 0.16, type: "sine" }); },
    drum: function () { tone(90, { dur: 0.25, vol: 0.4, type: "sine", glide: 50 }); },
    shaker: function () { noise({ dur: 0.18, vol: 0.16, freq: 5000, filter: "highpass" }); },
  };

  function play(name) { if (SFX[name]) SFX[name](); }

  /* Schedule a melody of {n, d} notes; calls onNote(i) at each note start.
     Returns a cancel function. */
  function melody(notes, bpm, onNote, onEnd) {
    ensure();
    const beat = 60 / (bpm || 100);
    const timers = [];
    let elapsed = 0;
    notes.forEach(function (note, i) {
      const id = setTimeout(function () {
        if (note.n && !muted) tone(NOTE_FREQ[note.n] || 440, { dur: note.d * beat * 0.95, vol: 0.34, type: "triangle" });
        if (onNote) onNote(i);
      }, elapsed * 1000 + 60);
      timers.push(id);
      elapsed += note.d * beat;
    });
    const endId = setTimeout(function () { if (onEnd) onEnd(); }, elapsed * 1000 + 350);
    timers.push(endId);
    return function cancel() { timers.forEach(clearTimeout); };
  }

  /* Speech — gentle read-aloud; degrades silently when unavailable */
  function speak(text, opts) {
    try {
      if (!("speechSynthesis" in window)) return false;
      opts = opts || {};
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = opts.rate || 0.92;
      u.pitch = opts.pitch || 1.15;
      u.volume = muted ? 0 : 1;
      u.lang = opts.lang || (typeof WSI18n !== "undefined" ? WSI18n.bcp() : "en-US");
      if (opts.onend) u.onend = opts.onend;
      window.speechSynthesis.speak(u);
      return true;
    } catch (e) { return false; }
  }
  function stopSpeak() { try { if ("speechSynthesis" in window) window.speechSynthesis.cancel(); } catch (e) {} }

  return { ensure, tone, noise, play, note: SFX.note, melody, speak, stopSpeak, setVolume, mute, isMuted, NOTE_FREQ };
})();

if (typeof module !== "undefined" && module.exports) module.exports = WSAudio;
