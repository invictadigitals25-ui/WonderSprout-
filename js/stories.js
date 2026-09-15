/* ============================================================
   WonderSprout Stories — Interactive Branching Stories
   ============================================================ */

(function () {
  "use strict";
  const S = window.WSState;

  /* ---------- Scene art (flat SVG illustrations) ---------- */
  function svg(inner) {
    return `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
  }
  const ARTS = {
    "pip-cover": svg(`<defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#BFE8FF"/><stop offset="1" stop-color="#EAF7E9"/></linearGradient></defs>
      <rect width="800" height="450" fill="url(#g1)"/><circle cx="650" cy="80" r="46" fill="#FFC545"/>
      <text x="400" y="330" font-size="170" text-anchor="middle">🌱</text><text x="250" y="380" font-size="60">🌼</text><text x="560" y="390" font-size="54">🐝</text>`),
    "underground": svg(`<defs><linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8A6B4F"/><stop offset="1" stop-color="#5E4632"/></linearGradient></defs>
      <rect width="800" height="450" fill="url(#g2)"/>
      <path d="M0 60 Q200 30 400 60 T800 60 L800 0 L0 0 Z" fill="#7CBF6A"/>
      <circle cx="400" cy="250" r="72" fill="#C68B59"/><circle cx="400" cy="250" r="58" fill="#B07545"/>
      <circle cx="380" cy="240" r="9" fill="#3A2A1B"/><circle cx="422" cy="240" r="9" fill="#3A2A1B"/>
      <path d="M382 272 Q400 286 420 272" stroke="#3A2A1B" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M400 322 Q390 370 400 420" stroke="#E8D5B8" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M400 350 Q360 380 350 420" stroke="#E8D5B8" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M400 350 Q440 380 450 420" stroke="#E8D5B8" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="180" cy="150" r="8" fill="rgba(255,255,255,.25)"/><circle cx="620" cy="120" r="6" fill="rgba(255,255,255,.2)"/>`),
    "sprout": svg(`<defs><linearGradient id="g3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9FD8FF"/><stop offset="1" stop-color="#EAF7E9"/></linearGradient></defs>
      <rect width="800" height="450" fill="url(#g3)"/><circle cx="660" cy="90" r="50" fill="#FFC545"/>
      <rect y="330" width="800" height="120" fill="#7CBF6A"/>
      <path d="M400 340 L400 250" stroke="#2E9E5B" stroke-width="12" stroke-linecap="round"/>
      <path d="M400 260 Q340 240 336 190 Q396 200 400 260" fill="#3DBE5F"/>
      <path d="M400 260 Q460 240 464 190 Q404 200 400 260" fill="#57CE7C"/>
      <circle cx="386" cy="300" r="6" fill="#1B4A2E"/><circle cx="414" cy="300" r="6" fill="#1B4A2E"/>
      <path d="M390 316 Q400 326 410 316" stroke="#1B4A2E" stroke-width="5" fill="none" stroke-linecap="round"/>
      <ellipse cx="400" cy="345" rx="70" ry="14" fill="#6AAE5C"/><text x="120" y="120" font-size="70">☁️</text>`),
    "bee": svg(`<rect width="800" height="450" fill="#BFE8FF"/><circle cx="120" cy="90" r="46" fill="#FFC545"/>
      <rect y="340" width="800" height="110" fill="#7CBF6A"/>
      <text x="420" y="230" font-size="150">🐝</text>
      <ellipse cx="430" cy="250" rx="150" ry="90" fill="none" stroke="#FFF" stroke-width="3" stroke-dasharray="4 10" opacity=".7"/>
      <text x="150" y="330" font-size="110">🌼</text><text x="600" y="340" font-size="90">🌷</text>
      <path d="M520 130 q60 -40 120 0 q-60 40 -120 0" fill="#fff" opacity=".9"/>`),
    "growing": svg(`<defs><linearGradient id="g5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9FD8FF"/><stop offset="1" stop-color="#EAF7E9"/></linearGradient></defs>
      <rect width="800" height="450" fill="url(#g5)"/><circle cx="680" cy="80" r="44" fill="#FFC545"/>
      <rect y="350" width="800" height="100" fill="#7CBF6A"/>
      <path d="M400 360 L400 200" stroke="#2E9E5B" stroke-width="14" stroke-linecap="round"/>
      <path d="M400 300 Q330 280 320 220 Q390 235 400 300" fill="#3DBE5F"/>
      <path d="M400 260 Q470 240 480 180 Q410 195 400 260" fill="#57CE7C"/>
      <path d="M400 215 Q345 200 340 155 Q392 168 400 215" fill="#3DBE5F"/>
      <text x="100" y="140" font-size="80">🌧️</text>
      <text x="150" y="220" font-size="30">💧</text><text x="120" y="270" font-size="30">💧</text><text x="180" y="260" font-size="30">💧</text>`),
    "bud": svg(`<rect width="800" height="450" fill="#BFE8FF"/><rect y="350" width="800" height="100" fill="#7CBF6A"/>
      <circle cx="660" cy="90" r="46" fill="#FFC545"/>
      <path d="M400 360 L400 220" stroke="#2E9E5B" stroke-width="14" stroke-linecap="round"/>
      <path d="M400 310 Q340 290 332 240 Q392 252 400 310" fill="#3DBE5F"/>
      <path d="M400 270 Q460 250 468 200 Q408 212 400 270" fill="#57CE7C"/>
      <ellipse cx="400" cy="195" rx="34" ry="44" fill="#F6C445"/><ellipse cx="400" cy="195" rx="34" ry="44" fill="none" stroke="#E0A62B" stroke-width="4"/>
      <path d="M400 155 L400 175" stroke="#E0A62B" stroke-width="4" stroke-linecap="round"/>
      <text x="500" y="180" font-size="40">✨</text><text x="280" y="160" font-size="34">✨</text><text x="560" y="260" font-size="60">🐝</text>`),
    "flower": svg(`<defs><radialGradient id="g6" cx=".5" cy=".3"><stop offset="0" stop-color="#FFF6D9"/><stop offset="1" stop-color="#BFE8FF"/></radialGradient></defs>
      <rect width="800" height="450" fill="url(#g6)"/><rect y="350" width="800" height="100" fill="#7CBF6A"/>
      <path d="M400 370 L400 250" stroke="#2E9E5B" stroke-width="14" stroke-linecap="round"/>
      <path d="M400 320 Q340 300 332 250 Q392 262 400 320" fill="#3DBE5F"/>
      <text x="400" y="235" font-size="160" text-anchor="middle">🌼</text>
      <text x="620" y="150" font-size="70">🐝</text><text x="120" y="330" font-size="90">👧</text>
      <text x="240" y="120" font-size="40">✨</text><text x="560" y="300" font-size="36">✨</text><text x="700" y="340" font-size="60">🌷</text>`),
    "bloop-cover": svg(`<defs><linearGradient id="g7" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DFF3FF"/><stop offset="1" stop-color="#A5D8F5"/></linearGradient></defs>
      <rect width="800" height="450" fill="url(#g7)"/>
      <rect x="150" y="240" width="500" height="180" rx="40" fill="#fff"/><rect x="170" y="270" width="460" height="140" rx="30" fill="#8ECAE6"/>
      <circle cx="400" cy="200" r="66" fill="#57B0F7"/><circle cx="378" cy="188" r="9" fill="#08345C"/><circle cx="424" cy="188" r="9" fill="#08345C"/>
      <path d="M378 220 Q400 238 422 220" stroke="#08345C" stroke-width="6" fill="none" stroke-linecap="round"/>
      <circle cx="352" cy="150" r="12" fill="#BFE3FA"/><circle cx="440" cy="140" r="9" fill="#BFE3FA"/>
      <text x="600" y="250" font-size="70">🦆</text><text x="140" y="220" font-size="50">🫧</text><text x="660" y="180" font-size="44">🫧</text>`),
    "bath": svg(`<rect width="800" height="450" fill="#EAF6FF"/>
      <rect x="120" y="230" width="560" height="190" rx="44" fill="#fff" stroke="#D8E8F2" stroke-width="6"/>
      <path d="M150 280 h500 v110 a30 30 0 0 1 -30 30 h-440 a30 30 0 0 1 -30 -30 Z" fill="#8ECAE6"/>
      <path d="M150 280 q60 -14 120 0 t120 0 t120 0 t120 0 v8 h-480 Z" fill="#BFE3FA"/>
      <text x="200" y="210" font-size="80">🦆</text><text x="530" y="210" font-size="70">🪨</text>
      <circle cx="400" cy="140" r="52" fill="#57B0F7"/><circle cx="384" cy="130" r="7" fill="#08345C"/><circle cx="418" cy="130" r="7" fill="#08345C"/>
      <path d="M384 154 Q400 168 416 154" stroke="#08345C" stroke-width="5" fill="none" stroke-linecap="round"/>
      <text x="90" y="120" font-size="44">🫧</text><text x="660" y="120" font-size="38">🫧</text>`),
    "duckfloat": svg(`<rect width="800" height="450" fill="#EAF6FF"/>
      <rect x="120" y="230" width="560" height="190" rx="44" fill="#fff" stroke="#D8E8F2" stroke-width="6"/>
      <path d="M150 280 h500 v110 a30 30 0 0 1 -30 30 h-440 a30 30 0 0 1 -30 -30 Z" fill="#8ECAE6"/>
      <ellipse cx="400" cy="292" rx="120" ry="14" fill="#BFE3FA"/>
      <text x="400" y="290" font-size="90" text-anchor="middle">🦆</text>
      <path d="M280 300 q40 12 80 0 M440 300 q40 12 80 0" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>
      <text x="150" y="150" font-size="50">⬆️</text><text x="600" y="150" font-size="40">✨</text>`),
    "rocksink": svg(`<rect width="800" height="450" fill="#EAF6FF"/>
      <rect x="120" y="230" width="560" height="190" rx="44" fill="#fff" stroke="#D8E8F2" stroke-width="6"/>
      <path d="M150 280 h500 v110 a30 30 0 0 1 -30 30 h-440 a30 30 0 0 1 -30 -30 Z" fill="#8ECAE6"/>
      <text x="400" y="400" font-size="80" text-anchor="middle">🪨</text>
      <circle cx="360" cy="330" r="9" fill="rgba(255,255,255,.7)"/><circle cx="430" cy="310" r="7" fill="rgba(255,255,255,.6)"/><circle cx="395" cy="300" r="10" fill="rgba(255,255,255,.75)"/>
      <text x="170" y="170" font-size="50">⬇️</text><text x="580" y="160" font-size="44">💧</text>`),
    "predict": svg(`<rect width="800" height="450" fill="#F3FAFF"/>
      <circle cx="400" cy="170" r="60" fill="#57B0F7"/><circle cx="382" cy="158" r="8" fill="#08345C"/><circle cx="420" cy="158" r="8" fill="#08345C"/>
      <path d="M382 184 Q400 200 418 184" stroke="#08345C" stroke-width="5" fill="none" stroke-linecap="round"/>
      <text x="400" y="90" font-size="70" text-anchor="middle">❓</text>
      <text x="230" y="360" font-size="110">🧽</text><text x="520" y="360" font-size="110">🥄</text>
      <text x="360" y="300" font-size="60">🤔</text>`),
    "spongefloat": svg(`<rect width="800" height="450" fill="#EAF6FF"/>
      <rect x="120" y="230" width="560" height="190" rx="44" fill="#fff" stroke="#D8E8F2" stroke-width="6"/>
      <path d="M150 280 h500 v110 a30 30 0 0 1 -30 30 h-440 a30 30 0 0 1 -30 -30 Z" fill="#8ECAE6"/>
      <text x="330" y="300" font-size="90">🧽</text><text x="500" y="400" font-size="70">🥄</text>
      <path d="M250 305 q40 12 80 0 M400 305 q40 12 80 0" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>
      <text x="170" y="160" font-size="50">⬆️</text><text x="600" y="170" font-size="40">🎉</text>`),
    "spoonsink": svg(`<rect width="800" height="450" fill="#EAF6FF"/>
      <rect x="120" y="230" width="560" height="190" rx="44" fill="#fff" stroke="#D8E8F2" stroke-width="6"/>
      <path d="M150 280 h500 v110 a30 30 0 0 1 -30 30 h-440 a30 30 0 0 1 -30 -30 Z" fill="#8ECAE6"/>
      <text x="500" y="400" font-size="80">🥄</text><text x="300" y="300" font-size="90">🧽</text>
      <circle cx="520" cy="320" r="8" fill="rgba(255,255,255,.7)"/><circle cx="480" cy="305" r="6" fill="rgba(255,255,255,.6)"/>
      <text x="170" y="160" font-size="46">🤓</text><text x="590" y="160" font-size="44">💡</text>`),
    "bubbles": svg(`<defs><linearGradient id="g8" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EAF6FF"/><stop offset="1" stop-color="#DFF3FF"/></linearGradient></defs>
      <rect width="800" height="450" fill="url(#g8)"/>
      <rect x="120" y="230" width="560" height="190" rx="44" fill="#fff" stroke="#D8E8F2" stroke-width="6"/>
      <path d="M150 280 h500 v110 a30 30 0 0 1 -30 30 h-440 a30 30 0 0 1 -30 -30 Z" fill="#8ECAE6"/>
      <text x="250" y="290" font-size="70">🦆</text><text x="420" y="300" font-size="64">🧽</text><text x="540" y="400" font-size="56">🪨</text>
      <circle cx="200" cy="150" r="34" fill="rgba(191,227,250,.9)" stroke="#fff" stroke-width="3"/>
      <circle cx="330" cy="110" r="46" fill="rgba(191,227,250,.8)" stroke="#fff" stroke-width="3"/>
      <circle cx="500" cy="140" r="38" fill="rgba(191,227,250,.85)" stroke="#fff" stroke-width="3"/>
      <circle cx="640" cy="100" r="30" fill="rgba(191,227,250,.9)" stroke="#fff" stroke-width="3"/>
      <circle cx="590" cy="185" r="22" fill="rgba(191,227,250,.8)" stroke="#fff" stroke-width="2"/>
      <text x="100" y="120" font-size="44">🎉</text><text x="680" y="240" font-size="40">✨</text>`),
    "rain-window": svg(`<rect width="800" height="450" fill="#DCE7F0"/>
      <rect y="330" width="800" height="120" fill="#C9B79C"/>
      <rect x="150" y="60" width="500" height="300" rx="16" fill="#AFC8DC" stroke="#8A6B4F" stroke-width="14"/>
      <path d="M400 60 L400 360 M150 210 L650 210" stroke="#8A6B4F" stroke-width="10"/>
      <g stroke="#7FB2D9" stroke-width="5" stroke-linecap="round">
        <path d="M220 100 l-14 46"/><path d="M300 150 l-14 46"/><path d="M520 110 l-14 46"/><path d="M600 170 l-14 46"/>
        <path d="M260 250 l-14 46"/><path d="M460 260 l-14 46"/><path d="M580 280 l-14 46"/>
      </g>
      <text x="400" y="420" font-size="80" text-anchor="middle">🧒</text>
      <text x="120" y="420" font-size="56">🥾</text><text x="650" y="420" font-size="50">☂️</text>`),
    "meadow": svg(`<defs><linearGradient id="gm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#BFE8FF"/><stop offset="1" stop-color="#E8F7E4"/></linearGradient></defs>
      <rect width="800" height="450" fill="url(#gm)"/>
      <circle cx="680" cy="80" r="44" fill="#FFC545"/>
      <path d="M0 320 Q200 270 400 315 T800 305 L800 450 L0 450 Z" fill="#8CCB7C"/>
      <path d="M0 360 Q250 330 500 358 T800 350 L800 450 L0 450 Z" fill="#6FB862"/>
      <text x="120" y="330" font-size="60">🌷</text><text x="620" y="350" font-size="60">🌼</text><text x="700" y="300" font-size="70">🌳</text>
      <ellipse cx="330" cy="405" rx="110" ry="24" fill="#8ECAE6"/><ellipse cx="330" cy="405" rx="90" ry="15" fill="#BFE3FA"/>
      <text x="100" y="120" font-size="60">☁️</text>`),
    "bedroom": svg(`<rect width="800" height="450" fill="#EAD9F0"/>
      <rect y="340" width="800" height="110" fill="#C9A5D6"/>
      <rect x="480" y="70" width="220" height="180" rx="12" fill="#2E3A55" stroke="#8A6B4F" stroke-width="12"/>
      <circle cx="640" cy="120" r="26" fill="#FFE9A8"/><circle cx="540" cy="105" r="4" fill="#fff"/><circle cx="580" cy="150" r="3" fill="#fff"/><circle cx="515" cy="180" r="3.5" fill="#fff"/><circle cx="660" cy="200" r="3" fill="#fff"/>
      <rect x="90" y="250" width="330" height="120" rx="24" fill="#fff"/>
      <rect x="90" y="230" width="330" height="60" rx="26" fill="#9B8CF0"/>
      <rect x="120" y="245" width="90" height="40" rx="14" fill="#fff"/>
      <path d="M460 250 q70 -60 130 -10 l10 130 q-80 30 -140 -10 Z" fill="#FF9EB5"/>
      <text x="300" y="180" font-size="70">🧸</text><text x="700" y="420" font-size="46">🌙</text>`),
    "rainbow": svg(`<rect width="800" height="450" fill="#CDEBFF"/>
      <circle cx="660" cy="90" r="46" fill="#FFC545"/>
      <g fill="none" stroke-width="26" stroke-linecap="round">
        <path d="M120 380 A280 280 0 0 1 680 380" stroke="#F04E3E"/>
        <path d="M150 380 A250 250 0 0 1 650 380" stroke="#FF8A3D"/>
        <path d="M180 380 A220 220 0 0 1 620 380" stroke="#FFC545"/>
        <path d="M210 380 A190 190 0 0 1 590 380" stroke="#3DBE5F"/>
        <path d="M240 380 A160 160 0 0 1 560 380" stroke="#3E7BF0"/>
        <path d="M270 380 A130 130 0 0 1 530 380" stroke="#9B59E8"/>
      </g>
      <rect y="368" width="800" height="82" fill="#8CCB7C"/>
      <ellipse cx="250" cy="420" rx="80" ry="16" fill="#8ECAE6"/>
      <text x="250" y="415" font-size="66" text-anchor="middle">🧒</text><text x="560" y="420" font-size="50">🐌</text>
      <text x="80" y="110" font-size="56">☁️</text><text x="620" y="180" font-size="44">💧</text>`),
    "night-sky": svg(`<defs><linearGradient id="gn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#141E33"/><stop offset="1" stop-color="#3D4E6B"/></linearGradient></defs>
      <rect width="800" height="450" fill="url(#gn)"/>
      <circle cx="400" cy="190" r="86" fill="#F4F1E8"/><circle cx="368" cy="168" r="14" fill="#DDD8C8"/><circle cx="432" cy="215" r="10" fill="#DDD8C8"/><circle cx="415" cy="150" r="8" fill="#DDD8C8"/>
      <circle cx="372" cy="180" r="6" fill="#2C3A4B"/><circle cx="428" cy="180" r="6" fill="#2C3A4B"/>
      <path d="M382 215 Q400 232 418 215" stroke="#2C3A4B" stroke-width="5" fill="none" stroke-linecap="round"/>
      <g fill="#FFF3C4"><text x="120" y="100" font-size="40">⭐</text><text x="640" y="90" font-size="34">⭐</text><text x="200" y="220" font-size="28">✨</text><text x="600" y="240" font-size="30">✨</text><text x="80" y="300" font-size="24">⭐</text><text x="700" y="320" font-size="26">⭐</text></g>
      <path d="M0 380 Q200 340 400 378 T800 370 L800 450 L0 450 Z" fill="#22304C"/>
      <text x="120" y="420" font-size="56">🌲</text><text x="640" y="425" font-size="56">🌲</text>
      <ellipse cx="560" cy="300" rx="90" ry="26" fill="rgba(255,255,255,.85)"/><ellipse cx="520" cy="312" rx="60" ry="20" fill="rgba(255,255,255,.7)"/>`),
    "forest": svg(`<rect width="800" height="450" fill="#DCEBD2"/>
      <rect y="330" width="800" height="120" fill="#7A5C3E"/>
      <path d="M340 450 L370 330 L430 330 L460 450 Z" fill="#B08E62"/>
      <g><path d="M140 330 L140 180 M140 240 L80 180 M140 270 L210 200" stroke="#6B4A2E" stroke-width="16" fill="none" stroke-linecap="round"/>
        <circle cx="140" cy="150" r="70" fill="#4E9E52"/><circle cx="75" cy="175" r="50" fill="#5DAE60"/><circle cx="205" cy="185" r="55" fill="#47914B"/></g>
      <g><path d="M650 330 L650 200 M650 260 L590 210 M650 280 L710 220" stroke="#6B4A2E" stroke-width="14" fill="none" stroke-linecap="round"/>
        <circle cx="650" cy="175" r="62" fill="#5DAE60"/><circle cx="590" cy="205" r="44" fill="#4E9E52"/><circle cx="712" cy="212" r="46" fill="#47914B"/></g>
      <text x="400" y="410" font-size="66" text-anchor="middle">🦊</text>
      <text x="260" y="420" font-size="44">🍄</text><text x="540" y="425" font-size="44">🫐</text><text x="620" y="390" font-size="40">🐿️</text>`),
    "underwater": svg(`<defs><linearGradient id="gu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FC8E8"/><stop offset="1" stop-color="#1E6E9E"/></linearGradient></defs>
      <rect width="800" height="450" fill="url(#gu)"/>
      <path d="M0 400 Q200 370 400 400 T800 395 L800 450 L0 450 Z" fill="#E8D8A8"/>
      <g stroke="#3E9E62" stroke-width="10" fill="none" stroke-linecap="round">
        <path d="M120 450 Q100 380 130 330 Q150 290 120 250"/><path d="M680 450 Q710 390 680 340 Q660 300 690 265"/>
      </g>
      <circle cx="300" cy="120" r="12" fill="rgba(255,255,255,.5)"/><circle cx="330" cy="80" r="8" fill="rgba(255,255,255,.45)"/><circle cx="280" cy="60" r="6" fill="rgba(255,255,255,.4)"/>
      <text x="400" y="260" font-size="110" text-anchor="middle">🐟</text>
      <text x="620" y="390" font-size="70">🐙</text><text x="150" y="390" font-size="56">🪸</text><text x="540" y="180" font-size="44">🫧</text>
      <circle cx="400" cy="410" r="26" fill="#F4F1E8"/><circle cx="400" cy="410" r="26" fill="none" stroke="#C9BFA0" stroke-width="4"/>`),
    "playground": svg(`<defs><linearGradient id="gp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#BFE8FF"/><stop offset="1" stop-color="#EAF7E9"/></linearGradient></defs>
      <rect width="800" height="450" fill="url(#gp)"/>
      <rect y="330" width="800" height="120" fill="#E8D8A8"/>
      <path d="M120 120 L120 340 M300 340 L220 120" stroke="#8A6B4F" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M120 120 L300 340" stroke="#F04E3E" stroke-width="22" stroke-linecap="round"/>
      <path d="M100 110 L250 110" stroke="#8A6B4F" stroke-width="10" stroke-linecap="round"/>
      <g><path d="M560 110 L560 330 M640 110 L640 330" stroke="#8A6B4F" stroke-width="10" stroke-linecap="round"/>
        <path d="M540 110 L660 110" stroke="#8A6B4F" stroke-width="10" stroke-linecap="round"/>
        <path d="M600 110 L590 250" stroke="#555" stroke-width="5"/><rect x="565" y="248" width="52" height="16" rx="8" fill="#FFC545"/></g>
      <ellipse cx="420" cy="400" rx="90" ry="20" fill="#D9C6A5"/>
      <path d="M360 395 q60 -26 120 0 q-60 24 -120 0" fill="#57B0F7"/>
      <text x="420" y="360" font-size="60" text-anchor="middle">🤖</text>
      <text x="80" y="420" font-size="44">🪣</text><text x="700" y="420" font-size="44">🌳</text><text x="400" y="80" font-size="34">🎈</text>`),
  };

  /* ---------- Shelf ---------- */
  function shelf(view) {
    view.appendChild(el("span", { class: "eyebrow", text: (typeof WSI18n !== "undefined" ? WSI18n.k("stories.eyebrow", "WonderSprout Stories") : "WonderSprout Stories") }));
    view.appendChild(el("h1", { class: "section-title", text: (typeof WSI18n !== "undefined" ? WSI18n.k("stories.title", "Choose your adventure 📖") : "Choose your adventure 📖") }));
    view.appendChild(el("p", { class: "section-sub", text: (typeof WSI18n !== "undefined" ? WSI18n.k("stories.sub", "Every story branches with your child's choices — and every story connects to a learning world and a real-world activity.") : "Every story branches with your child's choices — and every story connects to a learning world and a real-world activity.") }));
    const grid = el("div", { class: "story-shelf mt16" });
    function hasAcc() { try { return !!(window.WSBackend && WSBackend.hasAccount && WSBackend.hasAccount()); } catch (e) { return false; } }
    WSData.STORIES.forEach(function (rawSt, si) {
      const st = { id: rawSt.id, emoji: rawSt.emoji, age: rawSt.age, art: rawSt.art,
        title: ST(rawSt.id, "title", rawSt.title), desc: ST(rawSt.id, "desc", rawSt.desc), theme: ST(rawSt.id, "theme", rawSt.theme) };
      const locked = !hasAcc() && si >= 2;
      const cover = el("button", { class: "story-cover" + (locked ? " locked" : "") });
      cover.innerHTML = `
        <div class="cover-art">${ARTS[st.art] || ""}</div>
        <div class="cover-meta">
          <h3>${st.emoji} ${st.title}</h3>
          <p>${st.desc}</p>
          <div class="flex-center" style="justify-content:flex-start; margin-top:10px">
            <span class="chip sun">${(typeof WSI18n !== "undefined" ? String(st.age).replace(/m\b/g, WSI18n.k("unit.m", "m")) : st.age)}</span><span class="chip mint">${st.theme}</span>
          </div>
        </div>`;
      cover.addEventListener("click", function () {
        if (locked) { WSAudio.play("wrong"); toast(WSI18n.k("x.lockedStory", "🔒 More stories unlock with a free parent account!")); try { if (window.WSAuthPrompt) WSAuthPrompt.show(); } catch (e) {} return; }
        WSAudio.play("pop"); WSRouter.navigate("#/stories/" + st.id);
      });
      grid.appendChild(cover);
    });
    view.appendChild(grid);
    view.appendChild(el("div", { class: "card mt24", html: (typeof WSI18n !== "undefined" ? WSI18n.k("stories.whyBranching", "<b>👪 Why branching stories?</b> Choices build agency, language and prediction — “What should happen next?” is the same thinking skill as “What will happen if…?” in the science labs.") : "<b>👪 Why branching stories?</b> Choices build agency, language and prediction — “What should happen next?” is the same thinking skill as “What will happen if…?” in the science labs.") }));
  }

  /* ---------- Story copy lookup: st.<story>.<field> / st.<story>.<scene>.<field> ---------- */
  /* plain keyed copy, for use inside template literals */
  function TT(key, fb) { return (typeof WSI18n !== "undefined") ? WSI18n.k(key, fb) : fb; }
  function ST(storyId, field, fb) {
    return (typeof WSI18n !== "undefined") ? WSI18n.k("st." + storyId + "." + field, fb) : fb;
  }
  /* scene-level: text (.t), choice i (.c<i>), moral (.m), real-world (.r) */
  function SC(storyId, sceneId, field, fb) {
    return (typeof WSI18n !== "undefined") ? WSI18n.k("st." + storyId + "." + sceneId + "." + field, fb) : fb;
  }
  function sceneText(story, sc) { return SC(story.id, sc.id, "t", sc.text); }
  function choiceLabel(story, sc, i, ch) { return SC(story.id, sc.id, "c" + i, ch.label); }

  /* ---------- Reader ---------- */
  function reader(view, storyId) {
    const story = WSData.STORIES.filter(function (s) { return s.id === storyId; })[0];
    if (!story) { WSRouter.navigate("#/stories"); return; }
    let current = story.scenes[0];
    const path = [];
    let cancelMelody = null;
    const bye = function () { if (cancelMelody) cancelMelody(); WSAudio.stopSpeak(); };
    document.addEventListener("ws:navigate", bye, { once: true });

    const wrap = el("div", { class: "scene-wrap" });
    const artBox = el("div", { class: "scene-art" });
    const textBox = el("div", { class: "scene-text" });
    const readBtn = el("button", { class: "read-btn", text: (typeof WSI18n !== "undefined" ? WSI18n.k("x.readToMe", "🔊 Read to me") : "🔊 Read to me") });
    const choices = el("div", { class: "choices" });
    const dots = el("div", { class: "progress-dots" });
    wrap.appendChild(artBox);
    wrap.appendChild(el("div", { class: "center" }, [readBtn]));
    wrap.appendChild(textBox);
    wrap.appendChild(choices);
    wrap.appendChild(dots);
    view.appendChild(wrap);

    readBtn.addEventListener("click", function () {
      const ok = WSAudio.speak(sceneText(story, current));
      if (!ok) toast(WSI18n.k("x.noSpeech", "Read-aloud needs a browser with speech support 🔇"));
    });

    function render() {
      WSAudio.stopSpeak();
      artBox.innerHTML = ARTS[current.art] || "";
      textBox.textContent = sceneText(story, current);
      choices.innerHTML = "";
      dots.innerHTML = "";
      for (let i = 0; i <= path.length; i++) {
        dots.appendChild(el("div", { class: "pdot" + (i <= path.length - 1 || current.end ? " on" : "") }));
      }
      if (current.end) {
        WSAudio.play("cheer");
        WSFX.celebrate();
        S.counters.stories++;
        const endWrap = el("div", { class: "card mt16", style: { textAlign: "center" } });
        endWrap.innerHTML = `
          <div style="font-size:2.4rem">🎉</div>
          <b style="font-size:1.1rem">${TT("x.theEnd", "The End!")}</b>
          <p style="color:var(--ink-soft); margin-top:8px; line-height:1.55; max-width:520px; margin-inline:auto">${SC(story.id, current.id, "m", current.moral || "")}</p>
          <div class="realworld-card" style="margin:16px 0 0; text-align:left">
            <div class="rw-emoji">🌳</div>
            <div><b>${TT("x.tryReal", "Try it in real life")}</b><p>${SC(story.id, current.id, "r", current.realworld || "")}</p></div>
          </div>
          <div class="flex-center" style="margin-top:16px">
            <button class="btn btn-primary" id="again-btn">${TT("x.readAgain", "📖 Read again")}</button>
            <button class="btn btn-soft" id="shelf-btn">${TT("x.moreStories", "📚 More stories")}</button>
          </div>`;
        choices.appendChild(endWrap);
        setTimeout(function () {
          const a = document.getElementById("again-btn");
          const s2 = document.getElementById("shelf-btn");
          if (a) a.addEventListener("click", function () { path.length = 0; current = story.scenes[0]; render(); });
          if (s2) s2.addEventListener("click", function () { WSRouter.navigate("#/stories"); });
        }, 0);
        return;
      }
      current.choices.forEach(function (ch, ci) {
        const btn = el("button", { class: "choice-btn", style: { background: "#FFF4DC", color: "#6B4E00" }, text: choiceLabel(story, current, ci, ch) });
        btn.addEventListener("click", function (ev) {
          WSAudio.play(ch.sfx || "pop");
          WSFX.sparkle(ev.clientX, ev.clientY);
          path.push(current.id);
          const next = story.scenes.filter(function (sc) { return sc.id === ch.next; })[0];
          if (next) { current = next; render(); window.scrollTo({ top: 0, behavior: "smooth" }); }
        });
        choices.appendChild(btn);
      });
    }
    render();
  }

  WSRouter.register("#/stories", function (view, param) {
    if (param) reader(view, param); else shelf(view);
  });
})();
