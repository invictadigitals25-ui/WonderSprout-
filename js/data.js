/* ============================================================
   WonderSprout — Content & Curriculum Data
   Everything here maps to the Project Wonder blueprint V1.0
   ============================================================ */

const WSData = (function () {
  "use strict";

  /* ---------- Brand ---------- */
  const BRAND = {
    name: "WonderSprout",
    company: "DINVICTA EDU",
    tagline: "Little minds. Big wonders.",
    philosophy: "See. Hear. Touch. Explore. Wonder.",
    blueprintLine: "See · Hear · Touch · Explore · Simulate · Create · Wonder",
  };

  /* ---------- Ecosystem (10 sub-brands) ---------- */
  const ECOSYSTEM = [
    { id: "world",   name: "WonderSprout World",   emoji: "🌍", color: "#35B878", tint: "#E7F6EE", route: "#/world",  desc: "The child experience — huge visuals, giant touch targets, gentle sound. Thirteen playful labs for tiny explorers — see, hear, touch, explore!" },
    { id: "parent",  name: "WonderSprout Parent",  emoji: "🏠", color: "#2C3A4B", tint: "#EAEDF1", route: "#/parent", desc: "The control centre. Today's Wonder, observations, weekly reports, journal and screen-time philosophy — all in one calm dashboard." },
    { id: "labs",    name: "WonderSprout Labs",    emoji: "🧪", color: "#57B0F7", tint: "#E8F3FE", route: "#/labs",   desc: "Science, math, colour and simulation worlds built on one reusable simulation engine — the same concept deepens as your child grows." },
    { id: "stories", name: "WonderSprout Stories", emoji: "📖", color: "#FF7D68", tint: "#FFEDE9", route: "#/stories", desc: "Interactive branching stories with choices, recurring characters and read-aloud narration. Every story links to a learning world." },
    { id: "music",   name: "WonderSprout Music",   emoji: "🎵", color: "#9B8CF0", tint: "#EFEBFE", route: "#/music",  desc: "Sing-along nursery rhymes with karaoke words, rhythm play and a free-play instrument pad." },
    { id: "studio",  name: "WonderSprout Studio",  emoji: "🎨", color: "#FFC545", tint: "#FFF4DC", route: "#/studio", desc: "The CREATE level comes alive: draw, paint, stamp stickers and make little masterpieces to share with family." },
    { id: "camera",  name: "WonderSprout Camera",  emoji: "📷", color: "#4CC9C0", tint: "#E4F8F7", route: "#/camera", desc: "Point at any safe real-world object — WonderSprout recognises it and turns it into a multi-domain learning adventure." },
    { id: "ai",      name: "WonderSprout AI",      emoji: "✨", color: "#9B8CF0", tint: "#EFEBFE", route: "#/ai",     desc: "Your parent copilot. Ask “what can I do today?”, get safe, personalised ideas with the learning value explained." },
    { id: "kits",    name: "WonderSprout Kits",    emoji: "📦", color: "#FF7D68", tint: "#FFEDE9", route: "#/kits",   desc: "Coming soon: physical Wonder Cards, Blocks, Books and Discovery Boxes that open their digital Wonder World." },
  ];

  /* ---------- Developmental architecture ---------- */
  const STAGES = [
    { band: "0–3m", months: [0, 3] }, { band: "3–6m", months: [3, 6] },
    { band: "6–9m", months: [6, 9] }, { band: "9–12m", months: [9, 12] },
    { band: "12–15m", months: [12, 15] }, { band: "15–18m", months: [15, 18] },
    { band: "18–21m", months: [18, 21] }, { band: "21–24m", months: [21, 24] },
    { band: "24–27m", months: [24, 27] }, { band: "27–30m", months: [27, 30] },
    { band: "30–33m", months: [30, 33] }, { band: "33–36m", months: [33, 36] },
  ];

  const PROGRESSION = [
    { at: 3, label: "Look" }, { at: 6, label: "Notice" }, { at: 9, label: "Touch" },
    { at: 12, label: "Explore" }, { at: 18, label: "Connect" }, { at: 24, label: "Predict" },
    { at: 30, label: "Experiment" }, { at: 36, label: "Wonder + Create" },
  ];

  const LEVELS = [
    { name: "WATCH", emoji: "👀", desc: "The child observes gentle animation." },
    { name: "INTERACT", emoji: "👆", desc: "The child taps, swipes or touches." },
    { name: "SIMULATE", emoji: "⚙️", desc: "The child changes something and sees a result." },
    { name: "CREATE", emoji: "🎨", desc: "The child builds, draws, sequences or creates." },
  ];

  const LEARNING_LOOP = ["EXPERIENCE", "EXPLORE", "DISCOVER", "CONNECT", "EXPRESS", "CREATE"];
  const ULTIMATE_LOOP = [
    "REAL WORLD", "WONDER", "DIGITAL WORLD", "STORY / SIMULATION", "INTERACTION",
    "PREDICTION", "DISCOVERY", "PARENT TALK", "REAL-WORLD PLAY", "OBSERVATION",
    "PERSONALIZATION", "NEXT WONDER",
  ];

  /* ---------- The 14 Learning Worlds (blueprint §3) ---------- */
  const WORLDS = [
    { name: "Colour Lab", emoji: "🎨", color: "#FF7D68", focus: "Contrast, colour recognition, matching, sorting, patterns, mixing and creative colour play.", live: true, route: "#/world/color" },
    { name: "Math Wonder Lab", emoji: "🔢", color: "#57B0F7", focus: "Quantity awareness, counting objects, more/less, shapes, patterns and addition with objects.", live: true, route: "#/world/math" },
    { name: "Physics Playground", emoji: "⚽", color: "#35B878", focus: "Gravity, push/pull, rolling, bounce, slopes, balance and simple cause-and-effect simulations.", live: true, route: "#/world/physics" },
    { name: "Light & Sound Lab", emoji: "🎼", color: "#9B8CF0", focus: "Loud/quiet, pitch, rhythm and virtual instruments. Shadows and light movement.", live: true, route: "#/world/sound" },
    { name: "Life Lab", emoji: "🌱", color: "#35B878", focus: "Plants, animals, sounds, growth, habitats, water and sunlight.", live: true, route: "#/world/life" },
    { name: "Earth & Weather", emoji: "🌦️", color: "#4CC9C0", focus: "Day/night, weather, seasons, rain, clouds, wind and simple Earth concepts.", live: true, route: "#/world/weather" },
    { name: "Space", emoji: "🪐", color: "#2C3A4B", focus: "Age-appropriate Earth, Moon, Sun and orbits using simple 3D when useful.", live: true, route: "#/world/space" },
    { name: "Float & Sink Lab", emoji: "🛁", color: "#57B0F7", focus: "Predict and test what floats and what sinks — prediction mode for older toddlers.", live: true, route: "#/world/water" },
    { name: "Language & English Lab", emoji: "🗣️", color: "#FFC545", focus: "Vocabulary, listening, imitation, animal sounds, rhymes and early phonological awareness.", live: true, route: "#/world/animals" },
    { name: "Interactive Story World", emoji: "📖", color: "#FF7D68", focus: "Animated stories, choices, recurring characters and personalization.", live: true, route: "#/stories" },
    { name: "Music World", emoji: "🎵", color: "#9B8CF0", focus: "Nursery rhymes, rhythm, beat, clapping, instruments and music creation.", live: true, route: "#/music" },
    { name: "Creative Studio", emoji: "✏️", color: "#FFC545", focus: "Drawing, painting, shapes, stickers and simple creation.", live: true, route: "#/studio" },
    { name: "Logic Lab", emoji: "🧩", color: "#4CC9C0", focus: "Matching, sorting, sequencing, patterns, memory and odd-one-out.", live: true, route: "#/world/sorting" },
    { name: "Emotions & Life", emoji: "💛", color: "#FF7D68", focus: "Emotions, kindness, sharing, waiting, greetings and social scenarios.", live: false },
  ];

  /* ---------- Simulation templates (blueprint §5) ---------- */
  const SIM_TEMPLATES = [
    { name: "Falling Object", emoji: "🍎", live: true, route: "#/world/physics" },
    { name: "Rolling Object", emoji: "⚽", live: true, route: "#/world/physics" },
    { name: "Sorting", emoji: "🧺", live: true, route: "#/world/sorting" },
    { name: "Matching", emoji: "🃏", live: true, route: "#/world/shadows" },
    { name: "Colour Mixing", emoji: "🎨", live: true, route: "#/world/color" },
    { name: "Counting", emoji: "🔢", live: true, route: "#/world/math" },
    { name: "Growing Plant", emoji: "🌱", live: true, route: "#/world/life" },
    { name: "Day/Night", emoji: "🌗", live: true, route: "#/world/weather" },
    { name: "Weather", emoji: "🌧️", live: true, route: "#/world/weather" },
    { name: "Float/Sink", emoji: "⚓", live: true, route: "#/world/water" },
    { name: "Light/Shadow", emoji: "🔦", live: true, route: "#/world/shadows" },
    { name: "Sound", emoji: "🔔", live: true, route: "#/world/sound" },
    { name: "Pattern", emoji: "🔁", live: true, route: "#/world/pattern" },
    { name: "Shape Rotation", emoji: "🔷", live: true, route: "#/world/space" },
    { name: "Building", emoji: "🧱", live: false },
    { name: "Story Choice", emoji: "📖", live: true, route: "#/stories" },
    { name: "Character Emotion", emoji: "😊", live: false },
    { name: "Animal Habitat", emoji: "🦁", live: false },
  ];

  /* ---------- Simulation-first: one ball, every age (blueprint §5) ---------- */
  const BALL_AGES = [
    { age: "6m", mode: "WATCH", desc: "Baby watches a ball fall again and again — gentle, repeatable, hypnotic." },
    { age: "12m", mode: "TAP", desc: "Baby taps and the ball falls. ACTION → RESULT lights up the brain." },
    { age: "18m", mode: "CHOOSE", desc: "Toddler picks which ball to drop — red or blue? Big or small?" },
    { age: "24m", mode: "VARY", desc: "Toddler drops from different heights and watches the bounce change." },
    { age: "30m", mode: "PREDICT", desc: "“Which ball will bounce higher?” Predict first, then test." },
    { age: "36m", mode: "EXPLAIN", desc: "“Why did the big ball bounce lower?” Experiment, explain, connect to the real world." },
  ];

  /* ---------- Monthly themes (blueprint §7) ---------- */
  const MONTHLY_THEMES = [
    "My Senses", "Colours", "Animals", "My Body", "Water", "Plants",
    "Movement", "Numbers", "Shapes", "Weather", "Space", "My World",
  ];

  /* ---------- Wonder of the Day pool ---------- */
  const WONDER_DAYS = [
    {
      q: "Why do bubbles always pop?",
      sub: "A tiny skin of soapy water holds air inside — until it gets too thin. Wonder together!",
      micros: [
        { label: "Look", emoji: "👀", text: "Watch the bubble animation in Wonder World together." },
        { label: "Explore", emoji: "🔍", text: "Blow one big bubble and watch it wobble before it pops." },
        { label: "Talk", emoji: "💬", text: "“Pop! Where did the bubble go? Into the air!”" },
        { label: "Move", emoji: "🏃", text: "Chase and pop imaginary bubbles around the room." },
        { label: "Real world", emoji: "🌳", text: "Make safe soapy water with a grown-up and blow real bubbles outside." },
        { label: "Story", emoji: "📖", text: "Read 'Bloop's Big Bath' — Bloop makes bubble friends!" },
      ],
    },
    {
      q: "Where does the sun go at night?",
      sub: "The sun never leaves — our side of Earth just turns away. Spin and see!",
      micros: [
        { label: "Look", emoji: "👀", text: "Slide day into night in Earth & Weather world." },
        { label: "Explore", emoji: "🔍", text: "Spin the Earth in Space world and find the night side." },
        { label: "Talk", emoji: "💬", text: "“The sun is shining on the other side of the world right now!”" },
        { label: "Move", emoji: "🏃", text: "Be the Earth: spin slowly while a lamp is the sun." },
        { label: "Real world", emoji: "🌳", text: "Watch the real sunset tonight and wave goodbye to the sun." },
        { label: "Story", emoji: "📖", text: "Read 'Pip and the Little Seed' — Pip needs the sun!" },
      ],
    },
    {
      q: "Why does the duck float but the stone sink?",
      sub: "Some things push water away better than others. Predict and test!",
      micros: [
        { label: "Look", emoji: "👀", text: "Watch objects dive and bob in the Float & Sink lab." },
        { label: "Explore", emoji: "🔍", text: "Predict first: “Will the spoon swim or dive?” Then tap to test." },
        { label: "Talk", emoji: "💬", text: "Name every object as it goes in: “Splash! The rock went down!”" },
        { label: "Move", emoji: "🏃", text: "Pretend to be a floating leaf, then a sinking stone." },
        { label: "Real world", emoji: "🌳", text: "At bath time, test 3 safe toys: float or sink?" },
        { label: "Story", emoji: "📖", text: "Bloop tests bath toys in 'Bloop's Big Bath'." },
      ],
    },
    {
      q: "Can you hear the difference between loud and quiet?",
      sub: "Our ears catch big waves and tiny waves. Let's make both!",
      micros: [
        { label: "Look", emoji: "👀", text: "Watch ripples grow in the Light & Sound lab." },
        { label: "Explore", emoji: "🔍", text: "Play one note LOUD, then whisper-quiet. Feel the difference." },
        { label: "Talk", emoji: "💬", text: "“Loud like a lion! Quiet like a mouse!”" },
        { label: "Move", emoji: "🏃", text: "Stomp loudly, then tiptoe silently." },
        { label: "Real world", emoji: "🌳", text: "Listen outside: what is the loudest sound? The quietest?" },
        { label: "Story", emoji: "📖", text: "Sing 'Row, Row, Row Your Boat' loudly, then softly." },
      ],
    },
    {
      q: "How does a tiny seed become a big plant?",
      sub: "Water + sunlight + time = a green surprise!",
      micros: [
        { label: "Look", emoji: "👀", text: "Grow a seed to a flower in the Life Lab." },
        { label: "Explore", emoji: "🔍", text: "Give the plant water, then sunshine. Watch it stretch!" },
        { label: "Talk", emoji: "💬", text: "“The plant drinks water with its roots — like a straw!”" },
        { label: "Move", emoji: "🏃", text: "Curl up small like a seed, then grow tall like a flower." },
        { label: "Real world", emoji: "🌳", text: "Plant one bean in a cup with cotton wool by a window." },
        { label: "Story", emoji: "📖", text: "Read 'Pip and the Little Seed' together." },
      ],
    },
    {
      q: "What colour do you get when red hugs yellow?",
      sub: "Colours are friends — when they hug, they make new colours!",
      micros: [
        { label: "Look", emoji: "👀", text: "Watch paint blobs mix in the Colour Lab." },
        { label: "Explore", emoji: "🔍", text: "Try every colour hug. How many new colours can you find?" },
        { label: "Talk", emoji: "💬", text: "“Red and yellow make… orange! Like a mango!”" },
        { label: "Move", emoji: "🏃", text: "Find something orange, something green, something purple at home." },
        { label: "Real world", emoji: "🌳", text: "Mix real paints or colour with crayons over each other." },
        { label: "Story", emoji: "📖", text: "Draw your favourite colour story in WonderSprout Studio." },
      ],
    },
    {
      q: "How high can a ball bounce?",
      sub: "Drop from high, bounce high! Drop from low… what happens?",
      micros: [
        { label: "Look", emoji: "👀", text: "Watch balls bounce in the Physics Playground." },
        { label: "Explore", emoji: "🔍", text: "Change the height and the size. What bounces highest?" },
        { label: "Talk", emoji: "💬", text: "“Down, down, down… BOING! Up it goes!”" },
        { label: "Move", emoji: "🏃", text: "Bounce like a ball — big bounces, then tiny bounces." },
        { label: "Real world", emoji: "🌳", text: "Bounce a real ball from your knee, then from up high. Compare!" },
        { label: "Story", emoji: "📖", text: "Sing 'If You're Happy and You Know It' with big bouncy jumps." },
      ],
    },
    {
      q: "Why is the Moon sometimes a banana shape?",
      sub: "The Moon is really a ball — we only see the part the Sun lights up!",
      micros: [
        { label: "Look", emoji: "👀", text: "Visit the Moon in Space world and tap it for a fact." },
        { label: "Explore", emoji: "🔍", text: "In a dark room, shine a torch on a ball — see the light side and dark side." },
        { label: "Talk", emoji: "💬", text: "“The Moon doesn't change shape — we just see different slices of sunshine!”" },
        { label: "Move", emoji: "🏃", text: "Be the Moon: walk slowly around a lamp (the Sun)." },
        { label: "Real world", emoji: "🌳", text: "Find the Moon tonight. What shape is it — banana, half-cookie or full pancake?" },
        { label: "Story", emoji: "📖", text: "Read 'The Sleepy Moon' and help the Moon fall asleep." },
      ],
    },
    {
      q: "How do birds fly without engines?",
      sub: "Feathers + flapping + light bones = flight!",
      micros: [
        { label: "Look", emoji: "👀", text: "Watch birds out the window — are they flapping or gliding?" },
        { label: "Explore", emoji: "🔍", text: "Fold a paper plane with a grown-up and fly it across the room." },
        { label: "Talk", emoji: "💬", text: "“Birds push the air DOWN, and the air pushes them UP!”" },
        { label: "Move", emoji: "🏃", text: "Flap fast like a sparrow, then glide slow like an eagle." },
        { label: "Real world", emoji: "🌳", text: "Go bird-watching: count how many birds you can find and hear." },
        { label: "Story", emoji: "📖", text: "Sing 'Twinkle Twinkle' and twinkle your feather-wings." },
      ],
    },
    {
      q: "Why do we have shadows?",
      sub: "Your body blocks the light — the dark shape left behind is you!",
      micros: [
        { label: "Look", emoji: "👀", text: "Play Shadow Match in the Shadow Puppets lab." },
        { label: "Explore", emoji: "🔍", text: "Move the light slider — which way does the shadow jump?" },
        { label: "Talk", emoji: "💬", text: "“No light gets through you, so the floor stays dark — that's your shadow!”" },
        { label: "Move", emoji: "🏃", text: "Play shadow tag: try to step on each other's shadows!" },
        { label: "Real world", emoji: "🌳", text: "Go outside and find your shadow. Can it hide? When?" },
        { label: "Story", emoji: "📖", text: "Make shadow puppets like Milo's blanket fort." },
      ],
    },
    {
      q: "Can you count to five on your fingers?",
      sub: "One, two, three, four, five — you're carrying a counting machine!",
      micros: [
        { label: "Look", emoji: "👀", text: "Count the apples in Math Lab — tap each one." },
        { label: "Explore", emoji: "🔍", text: "Count your fingers. Now count your toes! (Giggles allowed.)" },
        { label: "Talk", emoji: "💬", text: "Count everything at dinner: spoons, cups, noses!" },
        { label: "Move", emoji: "🏃", text: "Do 5 big jumps while counting out loud: 1-2-3-4-5!" },
        { label: "Real world", emoji: "🌳", text: "Count 5 snacks onto a plate before eating them together." },
        { label: "Story", emoji: "📖", text: "Benny Bear counts three apples in 'Benny Bear's Picnic'." },
      ],
    },
    {
      q: "Why does ice turn into water?",
      sub: "Warmth makes the ice's tiny pieces wiggle free — it melts!",
      micros: [
        { label: "Look", emoji: "👀", text: "Watch an ice cube sit on a plate. What's happening?" },
        { label: "Explore", emoji: "🔍", text: "Hold an ice cube (briefly!) — feel it change from hard to wet." },
        { label: "Talk", emoji: "💬", text: "“Warm hands give the ice heat — heat makes solid ice into liquid water!”" },
        { label: "Move", emoji: "🏃", text: "Freeze like ice… then melt slowly into a puddle on the floor." },
        { label: "Real world", emoji: "🌳", text: "Ice cube race: two cubes, two saucers — which melts first? Sunny spot or shady spot?" },
        { label: "Story", emoji: "📖", text: "Bloop loves water in every form — re-read 'Bloop's Big Bath'." },
      ],
    },
  ];

  /* ---------- Parent observations (blueprint §8) ---------- */
  const OBSERVATION_SKILLS = [
    { id: "track", skill: "Follows moving objects with eyes", domain: "Vision & attention", band: "3–9m" },
    { id: "reach", skill: "Reaches for and grasps objects", domain: "Motor", band: "4–10m" },
    { id: "babble", skill: "Babbles and copies sounds", domain: "Language", band: "6–12m" },
    { id: "point", skill: "Points to show interest", domain: "Communication", band: "9–15m" },
    { id: "stack", skill: "Stacks 2–3 blocks", domain: "Motor & problem solving", band: "12–18m" },
    { id: "words", skill: "Uses first meaningful words", domain: "Language", band: "12–18m" },
    { id: "sort", skill: "Sorts objects by colour or shape", domain: "Logic", band: "18–30m" },
    { id: "clap", skill: "Claps along to a rhythm", domain: "Music & motor", band: "12–24m" },
    { id: "pretend", skill: "Pretend play (feeding a doll, driving a car)", domain: "Imagination", band: "18–30m" },
    { id: "predict", skill: "Predicts what happens next in a story", domain: "Thinking", band: "24–36m" },
    { id: "waves", skill: "Waves bye-bye", domain: "Social & communication", band: "9–15m" },
    { id: "steps", skill: "Takes first independent steps", domain: "Gross motor", band: "9–18m" },
    { id: "scribble", skill: "Scribbles with a crayon", domain: "Creative & motor", band: "12–20m" },
    { id: "two_words", skill: "Puts two words together (“more milk”)", domain: "Language", band: "18–28m" },
    { id: "hop", skill: "Hops or jumps on the spot", domain: "Gross motor", band: "24–36m" },
  ];

  /* ---------- Curriculum sample map (blueprint §14) ---------- */
  const CURRICULUM_MAP = [
    { age: "3–4m", focus: "Visual tracking, contrast", anim: "Moving shapes & light", sim: "Follow-the-light", phys: "Tummy time; face-to-face tracking" },
    { age: "4–5m", focus: "Colour exposure", anim: "Colour reveal", sim: "Colour change/match", phys: "Find a safe red object" },
    { age: "5–6m", focus: "Cause & effect", anim: "Responsive button", sim: "Tap → response", phys: "Reach, grasp and name" },
    { age: "6–9m", focus: "Notice, touch, object exploration", anim: "Bouncing & rolling objects", sim: "Push, roll, drop", phys: "Explore safe household objects" },
    { age: "9–12m", focus: "Matching, sorting, movement", anim: "Animated categories", sim: "Sort / match", phys: "Sort toys with parent" },
    { age: "12–18m", focus: "Vocabulary, quantity, patterns", anim: "Talking characters", sim: "Count / move objects", phys: "Count steps, toys, foods" },
    { age: "18–24m", focus: "Connection and prediction", anim: "Simple scenarios", sim: "More/less, float/sink", phys: "Predict and test safely" },
    { age: "24–30m", focus: "Experimentation", anim: "Physics demonstrations", sim: "Variables and prediction", phys: "Safe household experiments" },
    { age: "30–36m", focus: "Explain, create, connect", anim: "Story & character animation", sim: "Open-ended experiments", phys: "Build, draw, observe and explain" },
  ];

  /* ---------- Roadmap (blueprint §13) ---------- */
  const ROADMAP = [
    { phase: "Phase 0–1", title: "Product & Curriculum", desc: "Philosophy, safety, screen principles. Master curriculum 0–36 months: domain → skill → concept → activity." },
    { phase: "Phase 2–4", title: "Simulation & Content Engines", desc: "Reusable simulation templates, animation design system, and a CMS for stories, songs and simulations." },
    { phase: "Phase 5–7", title: "Platform & Apps", desc: "Database with privacy-first design, the parent control centre, and the child experience." },
    { phase: "Phase 8–9", title: "MVP & Private Testing", desc: "3–6 months band first, 50–100 experiences. Observe attention, overstimulation and real-world transitions." },
    { phase: "Phase 10–12", title: "Grow to 36 Months", desc: "6–12m cause/effect, 12–24m vocabulary & prediction, 24–36m experimentation & creation." },
    { phase: "Phase 13–14", title: "AI & Wonder Camera", desc: "Personalization from observations, then object recognition → curriculum connection → real-world challenge." },
    { phase: "Phase 15–17", title: "Languages, Family, Launch", desc: "English first, then Arabic, Yoruba, Hausa, French. Family accounts. Public launch." },
  ];

  /* ---------- Stories ---------- */
  const STORIES = [
    {
      id: "pip",
      title: "Pip and the Little Seed",
      emoji: "🌱",
      age: "18–36m",
      desc: "Pip the sprout wakes up underground. Help Pip choose how to grow!",
      theme: "Life Lab · growth, water, sunlight",
      art: "pip-cover",
      scenes: [
        {
          id: "s1", art: "underground",
          text: "Deep under the soil, a tiny seed named Pip wakes up. “It's dark in here,” whispers Pip. “I want to see the world!”",
          choices: [
            { label: "💧 Push up towards the water", next: "s2w", sfx: "water" },
            { label: "☀️ Push up towards the warmth", next: "s2s", sfx: "sparkle" },
          ],
        },
        {
          id: "s2w", art: "sprout",
          text: "Pip follows the cool water and — POP! — a tiny green sprout breaks through the soil. “Hello, world!” says Pip. A rain cloud floats by.",
          choices: [
            { label: "🌧️ Ask the cloud for a drink", next: "s3", sfx: "water" },
            { label: "🐝 Say hello to the bee first", next: "s3bee", sfx: "note" },
          ],
        },
        {
          id: "s2s", art: "sprout",
          text: "Pip follows the warm sunshine and — POP! — a tiny green sprout breaks through the soil. “Hello, world!” says Pip. The sun smiles down.",
          choices: [
            { label: "☀️ Thank the sun for the warmth", next: "s3", sfx: "sparkle" },
            { label: "🐝 Say hello to the bee first", next: "s3bee", sfx: "note" },
          ],
        },
        {
          id: "s3bee", art: "bee",
          text: "A fuzzy bee buzzes over. “Bzzz! Hello, little sprout! Bees help flowers grow. Would you like to be flower friends?”",
          choices: [
            { label: "🌸 Yes! Be flower friends", next: "s3", sfx: "sparkle" },
          ],
        },
        {
          id: "s3", art: "growing",
          text: "Pip grows taller every day. One leaf… two leaves… three! But Pip is thirsty AND wants sunshine. What should Pip do?",
          choices: [
            { label: "💧 Drink water first", next: "s4", sfx: "water" },
            { label: "☀️ Stretch to the sun first", next: "s4", sfx: "sparkle" },
            { label: "🎵 Sing a growing song", next: "s4song", sfx: "note" },
          ],
        },
        {
          id: "s4song", art: "growing",
          text: "Pip sings “Grow, grow, grow!” The bee dances. The cloud rains a little. The sun peeks out. Everyone helps Pip grow!",
          choices: [{ label: "🌱 Keep growing!", next: "s4", sfx: "sparkle" }],
        },
        {
          id: "s4", art: "bud",
          text: "Water on the roots, sun on the leaves — Pip feels a little bump at the top. A bud! “Something wonderful is coming,” hums the bee.",
          choices: [{ label: "🌼 Open the bud!", next: "s5", sfx: "pop" }],
        },
        {
          id: "s5", art: "flower", end: true,
          text: "POP! Pip becomes a beautiful golden flower! The bee dances, the cloud claps with rain, and a little girl whispers, “Hello, Pip.” Water + sunshine + time + friends = a wonder!",
          moral: "Everything grows with a little water, a little sunshine, and a lot of patience.",
          realworld: "Plant a bean in a cup with wet cotton wool. Water it daily and watch YOUR own Pip grow!",
        },
      ],
    },
    {
      id: "bloop",
      title: "Bloop's Big Bath",
      emoji: "🛁",
      age: "12–30m",
      desc: "Bloop the water blob is filling the bathtub. Which toys will float?",
      theme: "Float & Sink · prediction, water play",
      art: "bloop-cover",
      scenes: [
        {
          id: "b1", art: "bath",
          text: "Splish splash! Bloop the water blob is filling the big bathtub. “Bath time!” sings Bloop. The toys are waiting on the edge. Who goes in first?",
          choices: [
            { label: "🦆 Ruby the rubber duck", next: "b2duck", sfx: "splash" },
            { label: "🪨 Rocky the little stone", next: "b2rock", sfx: "splash" },
          ],
        },
        {
          id: "b2duck", art: "duckfloat",
          text: "Plop! Ruby the duck lands on the water and… she bobs! Up and down, up and down. “I float!” quacks Ruby happily. “Floating things ride on top of the water.”",
          choices: [{ label: "🪨 Now try Rocky the stone", next: "b3", sfx: "note" }],
        },
        {
          id: "b2rock", art: "rocksink",
          text: "Plop! Rocky the stone dives straight down… glug glug glug… all the way to the bottom. “I sink!” bubbles Rocky. “Heavy, hug-the-water things sink down.”",
          choices: [{ label: "🦆 Now try Ruby the duck", next: "b3", sfx: "note" }],
        },
        {
          id: "b3", art: "predict",
          text: "Bloop holds up a yellow sponge and a metal spoon. “Predict, predict!” sings Bloop. “Guess before we test — which one will FLOAT?”",
          choices: [
            { label: "🧽 The sponge floats!", next: "b4sponge", sfx: "sparkle" },
            { label: "🥄 The spoon floats!", next: "b4spoon", sfx: "note" },
          ],
        },
        {
          id: "b4sponge", art: "spongefloat",
          text: "You guessed it! The sponge floats like a little yellow boat. It even soaks up water and gets heavy! The spoon dives down to join Rocky. Ding ding!",
          choices: [{ label: "🫧 Time for bubbles!", next: "b5", sfx: "pop" }],
        },
        {
          id: "b4spoon", art: "spoonsink",
          text: "Oh! The spoon dives down — glug glug — to sit with Rocky. And look! The sponge floats like a little yellow boat. Predicting and testing is how scientists learn!",
          choices: [{ label: "🫧 Time for bubbles!", next: "b5", sfx: "pop" }],
        },
        {
          id: "b5", art: "bubbles", end: true,
          text: "Bloop blows a mountain of bubbles! The duck floats, the sponge sails, and Rocky watches from the bottom. “Floaters on top, sinkers below!” cheers Bloop. “See you next bath time!”",
          moral: "Some things float, some things sink — predicting and testing is how we learn!",
          realworld: "At your next bath, test 3 safe toys. Predict first: float or sink? Then check!",
        },
      ],
    },
    {
      id: "milo",
      title: "Milo's Rainy Day",
      emoji: "🌧️",
      age: "12–30m",
      desc: "Milo wakes up to rain. Puddle-jumping or blanket fort?",
      theme: "Earth & Weather · rain, choices, cosy play",
      art: "rain-window",
      scenes: [
        { id: "m1", art: "rain-window",
          text: "Drip… drop… drip. Milo wakes up to rain on the window. “No sunshine today,” he sighs. “But rainy days can still be wonderful!”",
          choices: [
            { label: "🥾 Put on boots and go out", next: "m2a", sfx: "water" },
            { label: "🛋️ Build a blanket fort", next: "m2b", sfx: "sparkle" },
          ] },
        { id: "m2a", art: "meadow",
          text: "Splish! Splash! Milo jumps in the biggest puddle ever. Raindrops tickle his nose and a little worm pops out to say hello.",
          choices: [
            { label: "💦 Jump in ONE more puddle", next: "m3a", sfx: "splash" },
            { label: "👂 Listen to the rain sing", next: "m3a", sfx: "water" },
          ] },
        { id: "m2b", art: "bedroom",
          text: "Milo builds a cosy fort from blankets and chairs. Inside it is warm, soft and secret — the perfect rainy-day cave.",
          choices: [
            { label: "🔦 Make shadow puppets", next: "m3b", sfx: "sparkle" },
            { label: "🎵 Sing a rainy-day song", next: "m3b", sfx: "note" },
          ] },
        { id: "m3a", art: "rainbow", end: true,
          text: "The rain stops and… look! A giant rainbow stretches across the sky. “After rain comes sunshine,” smiles Milo, puddle-splashed and happy.",
          moral: "Rain helps the flowers drink — and after rain, sometimes a rainbow!",
          realworld: "Next rainy day, listen to the rain together — then go find puddles (or a rainbow!)." },
        { id: "m3b", art: "bedroom", end: true,
          text: "The blanket fort glows with puppet shadows and sleepy songs. Outside, the rain sings goodnight. “Rainy days are cosy days,” whispers Milo.",
          moral: "Every kind of day can be a wonderful day.",
          realworld: "Build a blanket fort together and read one story inside it by torchlight." },
      ],
    },
    {
      id: "moon",
      title: "The Sleepy Moon",
      emoji: "🌙",
      age: "18–36m",
      desc: "The Moon can't fall asleep. Can you help?",
      theme: "Space · bedtime, counting, routines",
      art: "night-sky",
      scenes: [
        { id: "n1", art: "night-sky",
          text: "High above the clouds, the Moon yawns a big silver yawn. But the stars are twinkling so brightly — the Moon just cannot sleep!",
          choices: [
            { label: "⭐ Count the stars together", next: "n2a", sfx: "sparkle" },
            { label: "🎵 Sing the Moon a lullaby", next: "n2b", sfx: "note" },
          ] },
        { id: "n2a", art: "night-sky",
          text: "“One… two… three… four… five,” you count. The stars glow softer with every number, proud to be counted. The Moon's eyes grow heavy.",
          choices: [{ label: "🌙 Say goodnight to each star", next: "n3", sfx: "sparkle" }] },
        { id: "n2b", art: "night-sky",
          text: "You sing a soft, slow lullaby. The stars slow their twinkling to match the melody, swaying like tiny night-lights. The Moon smiles sleepily.",
          choices: [{ label: "☁️ Tuck the Moon in with clouds", next: "n3", sfx: "whoosh" }] },
        { id: "n3", art: "bedroom", end: true,
          text: "A fluffy cloud pulls up like a blanket. “Goodnight, Moon. Goodnight, stars. Goodnight, you.” Everything is quiet, cosy and dark — the whole world is asleep.",
          moral: "A gentle routine helps everyone — even the Moon — fall asleep.",
          realworld: "Tonight, say goodnight to three things: the Moon, a favourite toy, and each other." },
      ],
    },
    {
      id: "picnic",
      title: "Benny Bear's Picnic",
      emoji: "🧺",
      age: "18–36m",
      desc: "Benny packs three apples. Who will he share them with?",
      theme: "Math & kindness · counting, sharing",
      art: "meadow",
      scenes: [
        { id: "p1", art: "meadow",
          text: "Benny Bear packs his basket: one apple, two apples, THREE apples! “A picnic needs friends,” he says. Who should he invite?",
          choices: [
            { label: "🐰 Invite Rosie Rabbit", next: "p2a", sfx: "pop" },
            { label: "🦊 Invite Felix Fox", next: "p2b", sfx: "pop" },
          ] },
        { id: "p2a", art: "meadow",
          text: "Rosie Rabbit hops over. Three apples, two friends… “One for you, one for me,” says Benny, “and one we can share in halves!”",
          choices: [
            { label: "🍎 One each — fair!", next: "p3", sfx: "sparkle" },
            { label: "🍯 Save one for pudding", next: "p3", sfx: "note" },
          ] },
        { id: "p2b", art: "forest",
          text: "Felix Fox is very hungry — he would like TWO apples! Benny thinks hard. Then Felix smiles: “Or… we could pick berries together and have MORE for everyone!”",
          choices: [
            { label: "🫐 Pick berries together", next: "p3", sfx: "sparkle" },
            { label: "🍎 Share the apples anyway", next: "p3", sfx: "pop" },
          ] },
        { id: "p3", art: "meadow", end: true,
          text: "The picnic blanket fills up: apples, berries, honey sandwiches and two very happy friends. Counting together made everything taste better!",
          moral: "Counting and sharing make good friends — and great picnics.",
          realworld: "At your next snack, count the plates and cups together: one for each person!" },
      ],
    },
    {
      id: "finn",
      title: "Finn the Little Fish",
      emoji: "🐟",
      age: "12–30m",
      desc: "Finn is looking for the shiny pearl at the bottom of the sea.",
      theme: "Water world · counting, kindness",
      art: "underwater",
      scenes: [
        { id: "f1", art: "underwater",
          text: "Blub blub! Finn the little fish hears about a shiny pearl hidden in the deep blue. “I will find it!” But the sea is big. Who can help?",
          choices: [
            { label: "🐙 Ask Ollie the Octopus", next: "f2a", sfx: "water" },
            { label: "🫧 Follow the silver bubbles", next: "f2b", sfx: "pop" },
          ] },
        { id: "f2a", art: "underwater",
          text: "Ollie the Octopus waves all EIGHT arms. “Count with me — 1, 2, 3, 4, 5, 6, 7, 8! The pearl lives past the eighth coral,” he points with his longest arm.",
          choices: [{ label: "🪸 Swim past eight corals", next: "f3", sfx: "water" }] },
        { id: "f2b", art: "underwater",
          text: "The silver bubbles lead Finn down, down, down… to a giant sleeping shell. Should Finn just open it?",
          choices: [
            { label: "🚪 Knock politely first", next: "f3", sfx: "pop" },
            { label: "🎵 Sing to wake the shell", next: "f3", sfx: "note" },
          ] },
        { id: "f3", art: "underwater", end: true,
          text: "The shell opens and — WOW! The pearl glows like a tiny moon. Finn shares its light with the darkest corner of the sea, so nobody is afraid any more.",
          moral: "Politeness and sharing make every treasure brighter.",
          realworld: "Count the bubbles in your next bath — can you pop exactly five?" },
      ],
    },
    {
      id: "beep",
      title: "Where Is Beep?",
      emoji: "🤖",
      age: "9–24m",
      desc: "Beep the robot is hiding. Can you find him by his beep?",
      theme: "Object permanence · listening, peekaboo",
      art: "playground",
      scenes: [
        { id: "h1", art: "playground",
          text: "“Beep beep!” giggles Beep the robot, and hides somewhere in the playground. You can HEAR him but you cannot SEE him. Where is that beep coming from?",
          choices: [
            { label: "🛝 Look under the slide", next: "h2a", sfx: "tap" },
            { label: "🎠 Look behind the swing", next: "h2b", sfx: "tap" },
          ] },
        { id: "h2a", art: "playground",
          text: "You lift up… no Beep under the slide! “Beep beep!” comes the sound again — closer this time. Beep is still hiding, and he still exists!",
          choices: [{ label: "🏖️ Look in the sandbox", next: "h3", sfx: "sparkle" }] },
        { id: "h2b", art: "playground",
          text: "Peek… no Beep behind the swing! “Beep beep!” He is giggling somewhere else. Even when you cannot see Beep, he is still there!",
          choices: [{ label: "🪑 Look under the bench", next: "h3", sfx: "sparkle" }] },
        { id: "h3", art: "playground", end: true,
          text: "You lift the little blue towel and… “BEEP BEEP!” There he is! Beep jumps up and gives you a robot hug. Peekaboo champion!",
          moral: "Things still exist even when you cannot see them — that's a big brain discovery!",
          realworld: "Play peekaboo, or hide a toy under a cup and let your child find it." },
      ],
    },
    {
      id: "duck", title: "Duckling's Bath Day", emoji: "🐥", age: "12–36m",
      desc: "Duckling isn't sure about bath time. Splash gently and find out what floats!",
      theme: "Float & Sink · water confidence", art: "duckfloat",
      scenes: [
        { id: "s1", art: "bath", text: "Splish! Duckling waddles to the warm bath. “Is the water too big for a small duck?” he whispers.", choices: [ { label: "💧 Touch the water slowly", next: "s2", sfx: "water" }, { label: "🛁 Bring the yellow boat first", next: "s2b", sfx: "pop" } ] },
        { id: "s2", art: "duckfloat", text: "Duckling dips one webbed foot… then POP — he's floating! “I float! I FLOAT!” he quacks with joy.", choices: [ { label: "🫧 Blow bubble waves", next: "s3", sfx: "water" }, { label: "🦆 Spin in happy circles", next: "s3", sfx: "note" } ] },
        { id: "s2b", art: "duckfloat", text: "The little yellow boat bobs on top. “It floats — and so will I!” says brave Duckling, hopping in.", choices: [ { label: "🫧 Blow bubble waves", next: "s3", sfx: "water" }, { label: "🦆 Race the yellow boat", next: "s3", sfx: "note" } ] },
        { id: "s3", art: "bubbles", text: "Bubbles everywhere! Duckling pops one with his beak — POP! Bath time is the best time.", choices: [ { label: " Quack a happy ending", next: "end", sfx: "cheer" } ] },
        { id: "end", art: "duckfloat", text: "“See you tomorrow, water!” says Duckling, floating like a pro. THE END — now try bath-time floating with your toys!", choices: [] },
      ],
    },
    {
      id: "rainbow", title: "Who Painted the Rainbow?", emoji: "🌈", age: "18–36m",
      desc: "After the rain, a rainbow appears! Follow the colours across the sky.",
      theme: "Colour Lab · colour naming", art: "rainbow",
      scenes: [
        { id: "s1", art: "rain-window", text: "Pitter-patter goes the rain on the window. Then — wow! — a rainbow stretches over the meadow.", choices: [ { label: "🔴 Follow the red stripe", next: "s2", sfx: "sparkle" }, { label: "🔵 Follow the blue stripe", next: "s2", sfx: "sparkle" } ] },
        { id: "s2", art: "rainbow", text: "The rainbow hums softly. “Red, orange, yellow, green, blue, purple — we are the sky's paint!” it sings.", choices: [ { label: "🟡 Count the colours together", next: "s3", sfx: "note" }, { label: "🟣 Dance under the arch", next: "s3", sfx: "note" } ] },
        { id: "s3", art: "meadow", text: "At the rainbow's end, the meadow sparkles with wet flowers. Every petal wears a tiny rain-drop mirror.", choices: [ { label: "🌸 Pick a colour flower", next: "end", sfx: "pop" } ] },
        { id: "end", art: "flower", text: "You found the rainbow's garden! THE END — after your next rainy day, look for a rainbow together!", choices: [] },
      ],
    },
    {
      id: "honey", title: "Honey for the Bee", emoji: "🐝", age: "18–36m",
      desc: "Buzz the bee needs flowers to make honey. Help her choose the best blooms!",
      theme: "Life Lab · pollinators", art: "bee",
      scenes: [
        { id: "s1", art: "meadow", text: "Buzz the bee stretches her wings. “The hive is hungry! Which flowers have the sweetest nectar?”", choices: [ { label: "🌼 Visit the white daisies", next: "s2", sfx: "note" }, { label: "🌻 Visit the tall sunflowers", next: "s2", sfx: "note" } ] },
        { id: "s2", art: "bee", text: "Buzz lands softly and tickles the flower. Pollen sticks to her fuzzy tummy like golden glitter.", choices: [ { label: "💛 Carry pollen to the next flower", next: "s3", sfx: "sparkle" }, { label: " Hum the bee song first", next: "s3", sfx: "note" } ] },
        { id: "s3", art: "forest", text: "Flower to flower, Buzz paints the meadow with invisible paths. The hive smells sweet already!", choices: [ { label: "🍯 Follow the honey smell home", next: "end", sfx: "cheer" } ] },
        { id: "end", art: "flower", text: "Thank you, little helper! The hive is full of honey. THE END — next walk, wave to every bee you see!", choices: [] },
      ],
    },
    {
      id: "star", title: "Goodnight, Little Star", emoji: "⭐", age: "6–24m",
      desc: "A tiny star is afraid of the dark. Help her find her twinkle before bedtime.",
      theme: "Space World · wind-down", art: "night-sky",
      scenes: [
        { id: "s1", art: "night-sky", text: "High above the sleeping world, one little star feels dim. “Everyone is dark,” she sighs. “Why should I shine?”", choices: [ { label: "🌙 Ask the Moon for advice", next: "s2", sfx: "note" }, { label: "👀 Look at the sleeping town", next: "s2b", sfx: "tap" } ] },
        { id: "s2", art: "night-sky", text: "The Moon smiles. “The dark is not empty, little star. It is a soft blanket — and YOU are its night-light.”", choices: [ { label: "✨ Try a tiny twinkle", next: "s3", sfx: "sparkle" } ] },
        { id: "s2b", art: "bedroom", text: "Down below, a baby looks up at the sky and points — right at the little star! “There you are,” whispers the Moon. “Someone was waiting for your light.”", choices: [ { label: "✨ Try a tiny twinkle", next: "s3", sfx: "sparkle" } ] },
        { id: "s3", art: "night-sky", text: "The little star twinkles — soft, then brighter. The baby yawns, smiles, and falls asleep under her gentle glow.", choices: [ { label: "😴 Whisper goodnight", next: "end", sfx: "note" } ] },
        { id: "end", art: "bedroom", text: "Goodnight, star. Goodnight, you. THE END — tonight, find one star together before sleep!", choices: [] },
      ],
    },
  ];

  /* ---------- Songs (public-domain melodies) ---------- */
  const SONGS = [
    {
      id: "twinkle", title: "Twinkle, Twinkle, Little Star", emoji: "⭐",
      desc: "The classic lullaby — gentle and slow.", bpm: 92,
      notes: [
        { w: "Twin", n: "C4", d: 1 }, { w: "kle", n: "C4", d: 1 }, { w: "twin", n: "G4", d: 1 }, { w: "kle", n: "G4", d: 1 },
        { w: "lit", n: "A4", d: 1 }, { w: "tle", n: "A4", d: 1 }, { w: "star", n: "G4", d: 2 },
        { w: "How", n: "F4", d: 1 }, { w: "I", n: "F4", d: 1 }, { w: "won", n: "E4", d: 1 }, { w: "der", n: "E4", d: 1 },
        { w: "what", n: "D4", d: 1 }, { w: "you", n: "D4", d: 1 }, { w: "are", n: "C4", d: 2 },
        { w: "Up", n: "G4", d: 1 }, { w: "a", n: "F4", d: 1 }, { w: "bove", n: "F4", d: 1 }, { w: "the", n: "E4", d: 1 },
        { w: "world", n: "E4", d: 1 }, { w: "so", n: "D4", d: 1 }, { w: "high", n: "D4", d: 2 },
        { w: "Like", n: "G4", d: 1 }, { w: "a", n: "F4", d: 1 }, { w: "dia", n: "F4", d: 1 }, { w: "mond", n: "E4", d: 1 },
        { w: "in", n: "E4", d: 1 }, { w: "the", n: "D4", d: 1 }, { w: "sky", n: "D4", d: 2 },
      ],
    },
    {
      id: "mary", title: "Mary Had a Little Lamb", emoji: "🐑",
      desc: "A bouncy favourite for clapping along.", bpm: 104,
      notes: [
        { w: "Ma", n: "E4", d: 1 }, { w: "ry", n: "D4", d: 1 }, { w: "had", n: "C4", d: 1 }, { w: "a", n: "D4", d: 1 },
        { w: "lit", n: "E4", d: 1 }, { w: "tle", n: "E4", d: 1 }, { w: "lamb", n: "E4", d: 2 },
        { w: "lit", n: "D4", d: 1 }, { w: "tle", n: "D4", d: 1 }, { w: "lamb", n: "D4", d: 2 },
        { w: "lit", n: "E4", d: 1 }, { w: "tle", n: "G4", d: 1 }, { w: "lamb", n: "G4", d: 2 },
        { w: "Ma", n: "E4", d: 1 }, { w: "ry", n: "D4", d: 1 }, { w: "had", n: "C4", d: 1 }, { w: "a", n: "D4", d: 1 },
        { w: "lit", n: "E4", d: 1 }, { w: "tle", n: "E4", d: 1 }, { w: "lamb", n: "E4", d: 1 }, { w: "its", n: "E4", d: 1 },
        { w: "fleece", n: "D4", d: 1 }, { w: "was", n: "D4", d: 1 }, { w: "white", n: "E4", d: 1 }, { w: "as", n: "D4", d: 1 }, { w: "snow", n: "C4", d: 2 },
      ],
    },
    {
      id: "row", title: "Row, Row, Row Your Boat", emoji: "🚣",
      desc: "Rock side to side while you sing!", bpm: 100,
      notes: [
        { w: "Row", n: "C4", d: 1.5 }, { w: "row", n: "C4", d: .5 }, { w: "row", n: "C4", d: 1 }, { w: "your", n: "D4", d: 1 }, { w: "boat", n: "E4", d: 2 },
        { w: "Gent", n: "E4", d: 1 }, { w: "ly", n: "D4", d: 1 }, { w: "down", n: "E4", d: 1 }, { w: "the", n: "F4", d: 1 }, { w: "stream", n: "G4", d: 2 },
        { w: "Mer", n: "C5", d: .75 }, { w: "ri", n: "C5", d: .75 }, { w: "ly", n: "G4", d: .75 }, { w: "mer", n: "G4", d: .75 },
        { w: "ri", n: "E4", d: .75 }, { w: "ly", n: "E4", d: .75 }, { w: "mer", n: "C4", d: .75 }, { w: "ri", n: "C4", d: .75 },
        { w: "ly", n: "G4", d: 1 }, { w: "mer", n: "F4", d: 1 }, { w: "ri", n: "E4", d: 1 }, { w: "ly", n: "D4", d: 1 }, { w: "life", n: "C4", d: 1 }, { w: "is", n: "C4", d: .5 }, { w: "but", n: "C4", d: .5 }, { w: "a", n: "D4", d: 1 }, { w: "dream", n: "C4", d: 2 },
      ],
    },
    {
      id: "brother", title: "Are You Sleeping? (Brother John)", emoji: "🌙",
      desc: "A round we can sing together — perfect for wind-down.", bpm: 96,
      notes: [
        { w: "Are", n: "C4", d: 1 }, { w: "you", n: "D4", d: 1 }, { w: "sleep", n: "E4", d: 1 }, { w: "ing", n: "C4", d: 1 },
        { w: "Are", n: "C4", d: 1 }, { w: "you", n: "D4", d: 1 }, { w: "sleep", n: "E4", d: 1 }, { w: "ing", n: "C4", d: 1 },
        { w: "Bro", n: "E4", d: 1 }, { w: "ther", n: "F4", d: 1 }, { w: "John", n: "G4", d: 2 },
        { w: "Bro", n: "E4", d: 1 }, { w: "ther", n: "F4", d: 1 }, { w: "John", n: "G4", d: 2 },
        { w: "Morn", n: "G4", d: .75 }, { w: "ing", n: "A4", d: .75 }, { w: "bells", n: "G4", d: .75 }, { w: "are", n: "F4", d: .75 },
        { w: "ring", n: "E4", d: 1 }, { w: "ing", n: "C4", d: 1 },
        { w: "Morn", n: "G4", d: .75 }, { w: "ing", n: "A4", d: .75 }, { w: "bells", n: "G4", d: .75 }, { w: "are", n: "F4", d: .75 },
        { w: "ring", n: "E4", d: 1 }, { w: "ing", n: "C4", d: 1 },
        { w: "Ding", n: "C4", d: 1 }, { w: "ding", n: "G3", d: 1 }, { w: "dong", n: "C4", d: 2 },
        { w: "Ding", n: "C4", d: 1 }, { w: "ding", n: "G3", d: 1 }, { w: "dong", n: "C4", d: 2 },
      ],
    },
    {
      id: "baa", title: "Baa, Baa, Black Sheep", emoji: "🐑",
      desc: "Three bags of wool — a counting song!", bpm: 96,
      notes: [
        { w: "Baa", n: "C4", d: 1 }, { w: "baa", n: "C4", d: 1 }, { w: "black", n: "G4", d: 1 }, { w: "sheep", n: "G4", d: 1 },
        { w: "have", n: "A4", d: 1 }, { w: "you", n: "A4", d: 1 }, { w: "any", n: "G4", d: 1 }, { w: "wool?", n: "G4", d: 2 },
        { w: "Yes", n: "F4", d: 1 }, { w: "sir,", n: "F4", d: 1 }, { w: "yes", n: "E4", d: 1 }, { w: "sir,", n: "E4", d: 1 },
        { w: "three", n: "D4", d: 1 }, { w: "bags", n: "D4", d: 1 }, { w: "full!", n: "C4", d: 2 },
        { w: "One", n: "G4", d: 1 }, { w: "for", n: "G4", d: 1 }, { w: "the", n: "F4", d: 1 }, { w: "mas", n: "F4", d: 1 },
        { w: "ter,", n: "E4", d: 1 }, { w: "and", n: "E4", d: 1 }, { w: "one", n: "D4", d: 2 },
        { w: "for", n: "G4", d: 1 }, { w: "the", n: "G4", d: 1 }, { w: "dame,", n: "F4", d: 1 }, { w: "and", n: "F4", d: 1 },
        { w: "one", n: "E4", d: 1 }, { w: "for", n: "E4", d: 1 }, { w: "the", n: "D4", d: 2 },
        { w: "lit", n: "G4", d: 1 }, { w: "tle", n: "G4", d: 1 }, { w: "boy", n: "F4", d: 1 }, { w: "who", n: "F4", d: 1 },
        { w: "lives", n: "E4", d: 1 }, { w: "down", n: "E4", d: 1 }, { w: "the", n: "D4", d: 2 },
        { w: "lane!", n: "G4", d: 1 }, { w: "Baa", n: "G4", d: 1 }, { w: "baa", n: "F4", d: 1 }, { w: "black", n: "F4", d: 1 },
        { w: "sheep", n: "E4", d: 1 }, { w: "have", n: "E4", d: 1 }, { w: "you", n: "D4", d: 2 },
        { w: "a", n: "F4", d: 1 }, { w: "ny", n: "F4", d: 1 }, { w: "wool?", n: "E4", d: 1 }, { w: "Yes", n: "E4", d: 1 },
        { w: "sir,", n: "D4", d: 1 }, { w: "three", n: "D4", d: 1 }, { w: "bags", n: "C4", d: 1 }, { w: "full!", n: "C4", d: 2 },
      ],
    },
    {
      id: "hotcross", title: "Hot Cross Buns", emoji: "🥮",
      desc: "Short, sweet and perfect for first sing-alongs.", bpm: 104,
      notes: [
        { w: "Hot", n: "E4", d: 1 }, { w: "cross", n: "D4", d: 1 }, { w: "buns!", n: "C4", d: 2 },
        { w: "Hot", n: "E4", d: 1 }, { w: "cross", n: "D4", d: 1 }, { w: "buns!", n: "C4", d: 2 },
        { w: "One", n: "C4", d: .5 }, { w: "a", n: "C4", d: .5 }, { w: "pen", n: "C4", d: .5 }, { w: "ny", n: "C4", d: .5 },
        { w: "Two", n: "D4", d: .5 }, { w: "a", n: "D4", d: .5 }, { w: "pen", n: "D4", d: .5 }, { w: "ny", n: "D4", d: .5 },
        { w: "Hot", n: "E4", d: 1 }, { w: "cross", n: "D4", d: 1 }, { w: "buns!", n: "C4", d: 2 },
      ],
    },
    {
      id: "london", title: "London Bridge Is Falling Down", emoji: "🌉",
      desc: "Build it up with your arms — then fall down!", bpm: 100,
      notes: [
        { w: "Lon", n: "G4", d: 1 }, { w: "don", n: "A4", d: 1 }, { w: "Bridge", n: "G4", d: 1 }, { w: "is", n: "F4", d: 1 },
        { w: "fall", n: "E4", d: 1 }, { w: "ing", n: "F4", d: 1 }, { w: "down", n: "G4", d: 2 },
        { w: "fall", n: "D4", d: 1 }, { w: "ing", n: "E4", d: 1 }, { w: "down", n: "F4", d: 2 },
        { w: "fall", n: "E4", d: 1 }, { w: "ing", n: "F4", d: 1 }, { w: "down", n: "G4", d: 2 },
        { w: "my", n: "C5", d: 1 }, { w: "fair", n: "B4", d: 1 }, { w: "la", n: "A4", d: 1 }, { w: "dy", n: "G4", d: 2 },
      ],
    },
    {
      id: "jingle", title: "Jingle Bells", emoji: "🔔",
      desc: "Ring-a-ding! Clap on every ‘jingle’.", bpm: 112,
      notes: [
        { w: "Jin", n: "E4", d: 1 }, { w: "gle", n: "E4", d: 1 }, { w: "bells,", n: "E4", d: 2 },
        { w: "Jin", n: "E4", d: 1 }, { w: "gle", n: "E4", d: 1 }, { w: "bells,", n: "E4", d: 2 },
        { w: "jin", n: "E4", d: 1 }, { w: "gle", n: "G4", d: 1 }, { w: "all", n: "C4", d: 1 }, { w: "the", n: "D4", d: 1 }, { w: "way!", n: "E4", d: 4 },
        { w: "Oh", n: "F4", d: 1 }, { w: "what", n: "F4", d: 1 }, { w: "fun", n: "F4", d: 1 }, { w: "it", n: "F4", d: 1 },
        { w: "is", n: "F4", d: 1 }, { w: "to", n: "E4", d: 1 }, { w: "ride", n: "E4", d: 2 },
        { w: "in", n: "E4", d: 1 }, { w: "a", n: "E4", d: 1 }, { w: "one", n: "D4", d: 1 }, { w: "horse", n: "D4", d: 1 },
        { w: "o", n: "E4", d: 1 }, { w: "pen", n: "D4", d: 2 }, { w: "sleigh!", n: "G4", d: 4 },
      ],
    },
    {
      id: "birthday", title: "Happy Birthday to You", emoji: "🎂",
      desc: "For every birthday, every cake, every candle count.", bpm: 100,
      notes: [
        { w: "Hap", n: "G4", d: .75 }, { w: "py", n: "G4", d: .25 }, { w: "birth", n: "A4", d: 1 }, { w: "day", n: "G4", d: 1 },
        { w: "to", n: "C5", d: 1 }, { w: "you!", n: "B4", d: 2 },
        { w: "Hap", n: "G4", d: .75 }, { w: "py", n: "G4", d: .25 }, { w: "birth", n: "A4", d: 1 }, { w: "day", n: "G4", d: 1 },
        { w: "to", n: "D5", d: 1 }, { w: "you!", n: "C5", d: 2 },
        { w: "Hap", n: "G4", d: .75 }, { w: "py", n: "G4", d: .25 }, { w: "birth", n: "G5", d: 1 }, { w: "day", n: "E5", d: 1 },
        { w: "dear", n: "C5", d: 1 }, { w: "friends,", n: "B4", d: 1 }, { w: "to", n: "A4", d: .5 },
        { w: "hap", n: "F5", d: .75 }, { w: "py", n: "F5", d: .25 }, { w: "birth", n: "E5", d: 1 }, { w: "day", n: "C5", d: 1 },
        { w: "to", n: "D5", d: 1 }, { w: "you!", n: "C5", d: 3 },
      ],
    },
    {
      id: "row", title: "Row, Row, Row Your Boat", emoji: "",
      desc: "Gentle rocking rhythm — perfect for lap-bouncing.", bpm: 100,
      notes: [{ w: "Row", n: "C4", d: 1 }, { w: "row", n: "C4", d: 1 }, { w: "row", n: "C4", d: 1 }, { w: "boat", n: "D4", d: 1 }, { w: "gent", n: "E4", d: 2 }, { w: "ly", n: "E4", d: 1 }, { w: "down", n: "D4", d: 1 }, { w: "the", n: "E4", d: 1 }, { w: "stream", n: "G4", d: 2 }, { w: "mer", n: "E4", d: 1 }, { w: "ri", n: "F4", d: 1 }, { w: "ly", n: "G4", d: 2 }, { w: "life", n: "C4", d: 1 }, { w: "is", n: "D4", d: 1 }, { w: "but", n: "E4", d: 1 }, { w: "a", n: "F4", d: 1 }, { w: "dream", n: "C4", d: 2 }],
    },
    {
      id: "mary", title: "Mary Had a Little Lamb", emoji: "🐑",
      desc: "A sleepy descending melody for calm evenings.", bpm: 96,
      notes: [{ w: "Ma", n: "E4", d: 1 }, { w: "ry", n: "D4", d: 1 }, { w: "had", n: "C4", d: 1 }, { w: "a", n: "D4", d: 1 }, { w: "lit", n: "E4", d: 1 }, { w: "tle", n: "E4", d: 1 }, { w: "lamb", n: "E4", d: 2 }, { w: "lit", n: "D4", d: 1 }, { w: "tle", n: "D4", d: 1 }, { w: "lamb", n: "D4", d: 2 }, { w: "Ma", n: "E4", d: 1 }, { w: "ry", n: "G4", d: 1 }, { w: "had", n: "G4", d: 2 }, { w: "a", n: "E4", d: 1 }, { w: "lit", n: "D4", d: 1 }, { w: "tle", n: "C4", d: 1 }, { w: "lamb", n: "D4", d: 1 }, { w: "lamb", n: "E4", d: 1 }, { w: "lamb", n: "D4", d: 1 }, { w: "lamb", n: "C4", d: 2 }],
    },
    {
      id: "incy", title: "Incy Wincy Spider", emoji: "🕷️",
      desc: "Finger-climbing fun with a rising tune.", bpm: 104,
      notes: [{ w: "In", n: "C4", d: 1 }, { w: "cy", n: "C4", d: 1 }, { w: "win", n: "G4", d: 1 }, { w: "cy", n: "G4", d: 1 }, { w: "spi", n: "A4", d: 1 }, { w: "der", n: "A4", d: 1 }, { w: "climbed", n: "G4", d: 2 }, { w: "up", n: "F4", d: 1 }, { w: "the", n: "F4", d: 1 }, { w: "wa", n: "E4", d: 1 }, { w: "ter", n: "E4", d: 1 }, { w: "spout", n: "D4", d: 2 }],
    },
    {
      id: "macd", title: "Old MacDonald Had a Farm", emoji: "🚜",
      desc: "Animal-sound chorus — pair with the Animal Friends lab!", bpm: 108,
      notes: [{ w: "Old", n: "C4", d: 1 }, { w: "Mac", n: "C4", d: 1 }, { w: "Don", n: "C4", d: 1 }, { w: "ald", n: "G4", d: 1 }, { w: "had", n: "A4", d: 1 }, { w: "a", n: "A4", d: 1 }, { w: "farm", n: "G4", d: 2 }, { w: "E", n: "E4", d: 1 }, { w: "I", n: "E4", d: 1 }, { w: "E", n: "D4", d: 1 }, { w: "I", n: "D4", d: 1 }, { w: "O", n: "C4", d: 2 }],
    },
    {
      id: "humpty", title: "Humpty Dumpty", emoji: "🥚",
      desc: "A wobbly wall, a big fall — and a gentle landing.", bpm: 92,
      notes: [{ w: "Hump", n: "C4", d: 1 }, { w: "ty", n: "C4", d: 1 }, { w: "Dump", n: "C4", d: 1 }, { w: "ty", n: "G4", d: 1 }, { w: "sat", n: "E4", d: 1 }, { w: "on", n: "E4", d: 1 }, { w: "a", n: "E4", d: 1 }, { w: "wall", n: "G4", d: 2 }, { w: "Hump", n: "C4", d: 1 }, { w: "ty", n: "C4", d: 1 }, { w: "Dump", n: "C4", d: 1 }, { w: "ty", n: "G4", d: 1 }, { w: "had", n: "E4", d: 1 }, { w: "a", n: "D4", d: 1 }, { w: "great", n: "D4", d: 1 }, { w: "fall", n: "C4", d: 2 }],
    },
    {
      id: "diddle", title: "Hey Diddle Diddle", emoji: "🐄",
      desc: "Silly nonsense rhyme — the cow jumps high!", bpm: 100,
      notes: [{ w: "Hey", n: "G4", d: 1 }, { w: "did", n: "G4", d: 1 }, { w: "dle", n: "G4", d: 1 }, { w: "did", n: "D4", d: 1 }, { w: "dle", n: "D4", d: 1 }, { w: "the", n: "D4", d: 1 }, { w: "cat", n: "F4", d: 1 }, { w: "and", n: "E4", d: 1 }, { w: "the", n: "D4", d: 1 }, { w: "fid", n: "G4", d: 1 }, { w: "dle", n: "C4", d: 2 }],
    },
    {
      id: "oldman", title: "This Old Man", emoji: "🎶",
      desc: "Counting song — knick-knack paddy-whack!", bpm: 104,
      notes: [{ w: "This", n: "C4", d: 1 }, { w: "old", n: "C4", d: 1 }, { w: "man", n: "G4", d: 1 }, { w: "he", n: "G4", d: 1 }, { w: "played", n: "A4", d: 1 }, { w: "one", n: "G4", d: 2 }, { w: "knick", n: "A4", d: 1 }, { w: "knack", n: "G4", d: 1 }, { w: "pad", n: "F4", d: 1 }, { w: "dy", n: "D4", d: 1 }, { w: "whack", n: "C4", d: 2 }],
    },
  ];

  /* ---------- Wonder Camera object database ---------- */
  const CAMERA_OBJECTS = [
    {
      id: "apple", emoji: "🍎", name: "Apple", x: 12, y: 58,
      sees: "a shiny red apple",
      worlds: ["Colour Lab", "Math Wonder Lab", "Life Lab"],
      activities: [
        { emoji: "🔴", text: "Colour: “Can you find something else that is RED?”" },
        { emoji: "🔢", text: "Math: count the apples on the table — 1, 2, 3!" },
        { emoji: "🌱", text: "Life: “Apples grow on trees, from tiny flowers.”" },
      ],
      realworld: "Cut the apple in half together — there's a star hidden inside!",
      labRoute: "#/world/color",
    },
    {
      id: "ball", emoji: "⚽", name: "Ball", x: 30, y: 66,
      sees: "a round, bouncy ball",
      worlds: ["Physics Playground", "Math Wonder Lab"],
      activities: [
        { emoji: "⬇️", text: "Physics: drop it from your knee, then from up high. Which bounce is bigger?" },
        { emoji: "🔵", text: "Shape: roll it in a circle. Balls are round — they roll!" },
        { emoji: "🎯", text: "Game: roll it to each other and say “roll… catch!”" },
      ],
      realworld: "Try the ball in the Physics Playground, then bounce the REAL ball and compare!",
      labRoute: "#/world/physics",
    },
    {
      id: "leaf", emoji: "🍃", name: "Leaf", x: 50, y: 48,
      sees: "a green leaf",
      worlds: ["Life Lab", "Earth & Weather", "Colour Lab"],
      activities: [
        { emoji: "🌱", text: "Life: “Leaves drink sunshine and help the tree breathe.”" },
        { emoji: "🍂", text: "Colour: find a green leaf, a yellow leaf, a crunchy brown leaf." },
        { emoji: "🌬️", text: "Weather: blow on the leaf — wind makes leaves dance!" },
      ],
      realworld: "Collect 3 different leaves and press them in a heavy book.",
      labRoute: "#/world/life",
    },
    {
      id: "cup", emoji: "🥤", name: "Cup", x: 68, y: 62,
      sees: "a drinking cup",
      worlds: ["Float & Sink Lab", "Math Wonder Lab"],
      activities: [
        { emoji: "🛁", text: "Water: will this cup float or sink? Predict, then test safely!" },
        { emoji: "🔢", text: "Math: pour water in and out — “full” and “empty”." },
        { emoji: "👂", text: "Sound: tap it gently with a spoon. Ding!" },
      ],
      realworld: "At bath time, fill and pour the cup 5 times while counting.",
      labRoute: "#/world/water",
    },
    {
      id: "teddy", emoji: "🧸", name: "Teddy Bear", x: 84, y: 56,
      sees: "a cuddly teddy bear",
      worlds: ["Emotions & Life", "Interactive Story World"],
      activities: [
        { emoji: "💛", text: "Feelings: “How does Teddy feel today? Happy? Sleepy?”" },
        { emoji: "🍽️", text: "Pretend: have a tea party and share with Teddy." },
        { emoji: "📖", text: "Story: let Teddy choose which WonderSprout story to read!" },
      ],
      realworld: "Give Teddy a goodnight hug and say three kind words.",
      labRoute: "#/stories",
    },
    {
      id: "spoon", emoji: "🥄", name: "Spoon", x: 42, y: 70,
      sees: "a shiny metal spoon",
      worlds: ["Light & Sound Lab", "Float & Sink Lab"],
      activities: [
        { emoji: "🎵", text: "Sound: tap spoons gently — high pot, low pot. Different sounds!" },
        { emoji: "⚓", text: "Float/sink: metal spoons usually sink. Predict first!" },
        { emoji: "🪞", text: "Light: look at your silly reflection in the shiny back!" },
      ],
      realworld: "Make a gentle spoon drum on 3 different pots or bowls.",
      labRoute: "#/world/sound",
    },
    {
      id: "banana", emoji: "🍌", name: "Banana", x: 24, y: 78,
      sees: "a yellow banana",
      worlds: ["Colour Lab", "Math Wonder Lab"],
      activities: [
        { emoji: "🟡", text: "Colour: find 3 more yellow things — sun, duck, lemon!" },
        { emoji: "🔢", text: "Math: peel it into pieces — how many pieces? Count them!" },
        { emoji: "👃", text: "Senses: smell it, feel it, taste it. Sweet and soft!" },
      ],
      realworld: "Peel a real banana together — who gets which half? Sharing is math too!",
      labRoute: "#/world/color",
    },
    {
      id: "car", emoji: "🚗", name: "Toy Car", x: 60, y: 82,
      sees: "a little toy car",
      worlds: ["Physics Playground", "Math Wonder Lab"],
      activities: [
        { emoji: "📐", text: "Physics: build a ramp from a book — steeper ramp, faster car!" },
        { emoji: "🛞", text: "Math: count the wheels. How many wheels do 2 cars have?" },
        { emoji: "🚦", text: "Game: red light, green light! Push and STOP on command." },
      ],
      realworld: "Race two cars down a cushion ramp. Which is faster? Predict first!",
      labRoute: "#/world/physics",
    },
    {
      id: "book", emoji: "📖", name: "Storybook", x: 14, y: 68,
      sees: "a storybook",
      worlds: ["Interactive Story World", "Language & English Lab"],
      activities: [
        { emoji: "🔍", text: "Language: name 3 things on the cover before opening." },
        { emoji: "📖", text: "Story: let your child turn the pages — they're the boss!" },
        { emoji: "🎭", text: "Act it out: be the characters with big, silly voices." },
      ],
      realworld: "Read one book today — then let your child 'read' it back to you.",
      labRoute: "#/stories",
    },
    {
      id: "socks", emoji: "🧦", name: "Socks", x: 78, y: 76,
      sees: "a pair of socks",
      worlds: ["Logic Lab", "Math Wonder Lab"],
      activities: [
        { emoji: "🧺", text: "Logic: laundry matching! Find pairs by colour and pattern." },
        { emoji: "🔢", text: "Math: count the pairs. 2 socks = 1 pair!" },
        { emoji: "🖐️", text: "Senses: soft, stretchy, warm — sock puppets next?" },
      ],
      realworld: "At the next laundry, your child becomes the Official Sock Matcher.",
      labRoute: "#/world/sorting",
    },
    {
      id: "drum", emoji: "🥁", name: "Drum", x: 92, y: 64,
      sees: "a drum",
      worlds: ["Light & Sound Lab", "Music World"],
      activities: [
        { emoji: "🔊", text: "Sound: loud beats and whisper beats. Feel the difference!" },
        { emoji: "🎵", text: "Rhythm: copy my beat — boom boom clap!" },
        { emoji: "🥁", text: "Music: march around the room to your own drumbeat." },
      ],
      realworld: "Make a drum from a pot and a wooden spoon — march and play!",
      labRoute: "#/world/sound",
    },
  ];

  /* ---------- AI copilot knowledge base ---------- */
  const AI_KNOWLEDGE = [
    {
      id: "today", keywords: ["today", "what can i do", "bored", "activity", "play", "now", "ideas"],
      weight: 1,
      reply: () => `<span class="ai-tag">✨ WonderSprout AI</span>
        Here are three ideas for today, in order of wonder:
        <ul>
          <li><b>2-minute screen:</b> Open <b>Wonder of the Day</b> on the parent dashboard and do the “Explore” micro-experience together.</li>
          <li><b>5-minute hands-on:</b> The “Real World” step — it needs only things you already have at home.</li>
          <li><b>0-minute screen, most learning:</b> Go outside. Point at one thing and ask “I wonder why…?” Curiosity beats any app.</li>
        </ul>
        <b>Learning value:</b> short screen + real-world follow-up builds the DISCOVER → CONNECT loop from the WonderSprout method.`
    },
    {
      id: "screen", keywords: ["screen", "screen time", "how long", "too much", "tablet", "phone", "device"],
      weight: 2,
      reply: () => `<span class="ai-tag">🛡️ Screen philosophy</span>
        WonderSprout's rule: <b>screen time is a doorway, not a destination.</b>
        <ul>
          <li>Keep sessions to the platform's micro-experiences: <b>30 seconds to 3 minutes</b>.</li>
          <li>Always pair screen with the <b>“Try it in real life”</b> step that follows every activity.</li>
          <li>Watch for tired eyes or fussiness — that's the cue to stop and move.</li>
        </ul>
        If the best activity right now is outside, WonderSprout will tell you to close the app. That's a feature, not a bug. For personalised medical guidance on screen limits, your paediatrician is the right source.`
    },
    {
      id: "milestone", keywords: ["milestone", "normal", "delay", "not talking", "not walking", "walking late", "won't", "worried", "concern", "behind", "speech"],
      weight: 3,
      reply: () => `<span class="ai-tag">💛 Caring answer</span>
        Every child grows on their own schedule, and a wide range is normal — WonderSprout never ranks or diagnoses children.
        <ul>
          <li>Use the <b>Observations</b> tab to track “not yet / sometimes / consistently” over weeks — patterns matter more than single moments.</li>
          <li>If something worries you, that feeling deserves a real conversation: <b>please talk to your paediatrician or a child-development professional.</b></li>
          <li>Meanwhile, the best “intervention” is always the same: talk, sing, play and read together daily.</li>
        </ul>
        WonderSprout AI gives playful ideas, never medical advice.`
    },
    {
      id: "week", keywords: ["week", "report", "progress", "learned", "summary", "statistics"],
      weight: 2,
      reply: () => `<span class="ai-tag">📊 This week</span>
        Based on the dashboard data:
        <ul>
          <li><b>Most explored domain:</b> Science & Nature — the Float/Sink and Growing Plant simulations were favourites.</li>
          <li><b>Rising skill:</b> prediction! “Will it sink?” before testing is a big thinking step.</li>
          <li><b>Suggested focus next:</b> <b>patterns</b> — try sorting socks by colour at laundry time (zero screens, full learning).</li>
        </ul>
        Full details live in your <b>Weekly Report</b> card on the parent dashboard.`
    },
    {
      id: "rain", keywords: ["rain", "rainy", "indoor", "inside", "weather", "stuck"],
      weight: 2,
      reply: () => `<span class="ai-tag">🌧️ Rainy-day wonder</span>
        Rain is a laboratory!
        <ul>
          <li><b>Watch:</b> sit by the window — “Where do the drops go? Fast or slow?”</li>
          <li><b>Listen:</b> rain on the window vs. rain on a pot. Loud or quiet?</li>
          <li><b>Catch:</b> hold a cup out the window (with a grown-up) — how long to fill?</li>
          <li><b>Then screen:</b> 2 minutes of the <b>Earth & Weather</b> world to connect what you saw to day/night and clouds.</li>
        </ul>
        <b>Learning value:</b> real observation first, digital connection second — the WonderSprout loop.`
    },
    {
      id: "camera", keywords: ["camera", "object", "photo", "recognise", "recognize", "point"],
      weight: 2,
      reply: () => `<span class="ai-tag">📷 Wonder Camera</span>
        Any safe object can become a lesson:
        <ul>
          <li>Point the Wonder Camera at an object — it identifies it and opens a <b>Wonder Card</b>.</li>
          <li>Each card connects the object to learning worlds (colour, math, science…) with 3 quick activities.</li>
          <li>Every card ends with a <b>real-world challenge</b>, so the learning leaves the screen.</li>
        </ul>
        Try the demo: <b>WonderSprout Camera → tap an object</b>. Privacy note: recognition runs for the moment — no photos of your child are stored.`
    },
    {
      id: "story", keywords: ["story", "stories", "read", "book", "bedtime"],
      weight: 1,
      reply: () => `<span class="ai-tag">📖 Story time</span>
        Stories are connection machines:
        <ul>
          <li><b>“Pip and the Little Seed”</b> — growth, patience and nature. Pairs with planting a real bean.</li>
          <li><b>“Bloop's Big Bath”</b> — float vs. sink with built-in prediction moments. Pairs with bath-time testing.</li>
          <li>Let your child <b>choose the story path</b> — decisions build agency and language.</li>
        </ul>
        Tip: after reading, ask “What should we do next?” and let the child direct. That's the CREATE level.`
    },
    {
      id: "food", keywords: ["food", "eat", "meal", "kitchen", "cooking", "snack"],
      weight: 1,
      reply: () => `<span class="ai-tag">🍎 Kitchen wonder</span>
        The kitchen is a full curriculum:
        <ul>
          <li><b>Math:</b> count grapes onto a plate — “one more” and “all gone”.</li>
          <li><b>Science:</b> which foods float in a bowl of water? (Grape? Banana? Peel vs. unpeeled!)</li>
          <li><b>Senses:</b> crunchy vs. soft, warm vs. cold — name each one.</li>
        </ul>
        Afterwards, the Wonder Camera can turn any fruit into a Wonder Card.`
    },
    {
      id: "sleep", keywords: ["sleep", "bedtime", "nap", "night", "routine", "tired", "wake", "lullaby"],
      weight: 2,
      reply: () => `<span class="ai-tag">🌙 Bedtime wonder</span>
        A predictable wind-down beats a perfect one. Try this WonderSprout routine:
        <ul>
          <li><b>Warm + dim:</b> bath, then low lights — bright screens off at least 30 minutes before bed.</li>
          <li><b>One story, same spot:</b> read "The Sleepy Moon" — it ends with a goodnight ritual you can copy.</li>
          <li><b>One song:</b> "Are You Sleeping?" in WonderSprout Music is built as a slow lullaby.</li>
          <li><b>Goodnight to three things:</b> the Moon, a toy, and each other — a tiny gratitude habit.</li>
        </ul>
        <b>Learning value:</b> routines build security and sequence thinking ("first bath, then story, then song"). For persistent sleep worries, your paediatrician is the right guide.`
    },
    {
      id: "feelings", keywords: ["tantrum", "crying", "angry", "frustrated", "feelings", "meltdown", "biting", "hitting", "upset"],
      weight: 3,
      reply: () => `<span class="ai-tag">💛 Big feelings</span>
        Big feelings are normal at this age — the feeling brain grows faster than the words to describe it.
        <ul>
          <li><b>Name it to tame it:</b> “You're frustrated because the tower fell.” Naming feelings builds the language to manage them.</li>
          <li><b>Stay the calm anchor:</b> sit near, breathe slowly, wait. Co-regulation comes before self-regulation.</li>
          <li><b>After the storm:</b> a hug, then replay it gently — “the tower fell, you felt mad, we rebuilt it.”</li>
        </ul>
        WonderSprout never diagnoses. If big feelings feel frequent, intense or worrying, <b>please talk to your paediatrician or a child-development professional.</b>`
    },
    {
      id: "outdoors", keywords: ["outside", "park", "nature", "walk", "garden", "outdoor", "trees"],
      weight: 1,
      reply: () => `<span class="ai-tag">🌳 Nature wonder</span>
        The outdoors is the original classroom — and it's free:
        <ul>
          <li><b>Colour hunt:</b> find something green, brown, yellow and red.</li>
          <li><b>Sound count:</b> stop and listen — how many different sounds? Birds, wind, cars…</li>
          <li><b>Treasure pocket:</b> collect 3 safe treasures (leaf, stone, stick) and name each one.</li>
          <li><b>Back home:</b> 2 minutes of the Life Lab connects what you saw to how plants grow.</li>
        </ul>
        <b>Learning value:</b> real sensory input (uneven ground, changing light, live sounds) builds brains in ways no screen can.`
    },
    {
      id: "travel", keywords: ["car", "travel", "plane", "train", "trip", "journey", "flight", "driving"],
      weight: 1,
      reply: () => `<span class="ai-tag">🚗 Travel wonder</span>
        Long trips are wondering time:
        <ul>
          <li><b>I-spy colours:</b> “I spy something RED!” — toddlers can play with help.</li>
          <li><b>Count along:</b> trucks, tunnels, bridges — counting kills boredom.</li>
          <li><b>Sing-along:</b> WonderSprout Music needs no signal; queue 3 favourites.</li>
          <li><b>Window wonders:</b> narrate what passes: “A cow! A river! A windmill spinning!”</li>
        </ul>
        Screen-free stretches are ideal here; save one short story for the hardest 10 minutes.`
    },
    {
      id: "celebrate", keywords: ["birthday", "celebrate", "party", "cake", "candles", "special day"],
      weight: 1,
      reply: () => `<span class="ai-tag">🎂 Celebration wonder</span>
        Birthdays are secret math lessons:
        <ul>
          <li><b>Count the candles</b> together — one per year, one-to-one counting in real life.</li>
          <li><b>Sing "Happy Birthday"</b> — it's in WonderSprout Music with karaoke words.</li>
          <li><b>Blow practice:</b> blowing out candles is real breath control for speech.</li>
          <li><b>Save the moment:</b> add a Wonder Journal entry with a photo afterwards.</li>
        </ul>
        Keep parties short at this age — one hour of joy beats three hours of overwhelm.`
    },
    { id: "potty", keywords: ["potty", "toilet", "nappy", "diaper"], weight: 1, reply: () => `<span class="ai-tag">🚽 Potty patience</span> Most children show readiness between 18–36 months — watch for interest, not age. Pair with the <b>Sorting Station</b> (wet/dry sorting!) and celebrate every try. Never punish accidents; the brain learns bladders through calm repetition.` },
    { id: "sharing", keywords: ["share", "sharing", "mine", "grab"], weight: 1, reply: () => `<span class="ai-tag">🤝 On sharing</span> Before ~30 months, "sharing" is developmentally impossible — "mine!" is healthy selfhood. Narrate turns instead: "Your turn, then Ava's turn." The <b>Pattern Party</b> turn-taking rhythm builds the same neural skill.` },
    { id: "eating", keywords: ["eat", "picky", "food", "meal", "vegetables"], weight: 1, reply: () => `<span class="ai-tag">🥦 Picky eating</span> A toddler may need 10–15 exposures to accept a new food. Keep meals pressure-free: parent decides what/when, child decides how much. Counting grapes in the <b>Math Lab</b> makes food playful without pressure.` },
    { id: "teeth", keywords: ["teeth", "tooth", "brush", "dentist"], weight: 1, reply: () => `<span class="ai-tag">🦷 Brushing battles</span> Brush twice daily from the first tooth; let your child "brush" a teddy first (mirroring the <b>Animal Friends</b> care play). A song helps time it — try <b>This Old Man</b> in the Music world.` },
    { id: "bilingual", keywords: ["bilingual", "two languages", "language", "arabic", "spanish"], weight: 2, reply: () => `<span class="ai-tag">🗣️ Two languages</span> Bilingual babies may mix words — that's normal, not confusion. One-parent-one-language or one-place-one-language both work. WonderSprout's language selector lets the whole app model switching gently.` },
    { id: "sleep", keywords: ["sleep", "nap", "night", "wake", "bedtime"], weight: 1, reply: () => `<span class="ai-tag">😴 Sleep dips</span> Sleep regressions commonly hit at ~4, 8–10, 12–18 and 24 months — usually a brain leap. Keep the routine boring and consistent; wind down with the <b>Goodnight, Little Star</b> story at low brightness.` },
    { id: "tantrum2", keywords: ["throwing", "throws", "hitting", "bites"], weight: 1, reply: () => `<span class="ai-tag">🌋 Throwing & hitting</span> Big feelings, small words. Name the feeling, hold the limit: "I won't let you throw. You're so mad." Offer an OK outlet — a ball to throw outside (Physics Playground energy!). Consistency is kindness.` },
    { id: "scribble", keywords: ["draw", "scribble", "crayon", "art"], weight: 1, reply: () => `<span class="ai-tag">🖍️ Scribbling</span> Scribbling from ~12–15 months is shoulder-to-wrist motor science, not "pictures" yet. The <b>Studio</b> draw mode mirrors this: process over product. Offer fat crayons and big paper; narrate the colours.` },
    { id: "daycare", keywords: ["daycare", "nursery", "creche", "separation"], weight: 1, reply: () => `<span class="ai-tag">🏫 Settling in</span> Short goodbyes, consistent pick-ups, and a comfort object beat sneaking away. A photo ritual of reunion (like the <b>Wonder Journal</b>) helps the child predict your return — predictability is security.` },
    { id: "carsick", keywords: ["car", "stroller", "pram", "ride"], weight: 1, reply: () => `<span class="ai-tag">🚗 On the move</span> Car rides are narration gold: "Red car! Big truck!" — the <b>Flags & Countries</b> and <b>Sorting</b> vocab transfers directly to window-watching. Sing the <b>Wheels-style</b> rhythms from Music world at stops.` },
  ];

  const AI_FALLBACK = () => `<span class="ai-tag">✨ WonderSprout AI</span>
    That's a lovely question! Here's the WonderSprout way to answer almost anything with a toddler:
    <ul>
      <li><b>Start with wonder:</b> “I wonder… what do YOU think?”</li>
      <li><b>Make it physical:</b> can you touch it, move it, or act it out?</li>
      <li><b>Keep it tiny:</b> 30 seconds to 3 minutes beats a 30-minute lesson at this age.</li>
    </ul>
    Try one of the question chips below — or ask me about <b>screen time</b>, <b>milestones</b>, <b>rainy days</b>, the <b>Wonder Camera</b>, <b>stories</b> or <b>what to do today</b>.`;

  /* ---------- Kits ---------- */
  const KITS = [
    { name: "Wonder Cards", emoji: "🃏", age: "6–24m", color: "#E8F3FE", desc: "High-contrast and object cards. Scan a card and its Wonder World opens instantly — physical to digital in one tap.", link: "Physical → Digital Bridge" },
    { name: "Wonder Books", emoji: "📚", age: "0–36m", color: "#FFEDE9", desc: "Touch-and-feel board books tied to monthly themes. Each page has a “Wonder Question” for parents.", link: "Monthly Themes" },
    { name: "Wonder Blocks", emoji: "🧱", age: "12–36m", color: "#FFF4DC", desc: "Soft building blocks with shapes, colours and numbers. The Building simulation template comes alive in your living room.", link: "Simulation: Building" },
    { name: "Wonder Kits", emoji: "🧰", age: "18–36m", color: "#E7F6EE", desc: "Themed activity kits — Water Play, Light & Shadow, Sound Makers — with safe materials and a parent guide.", link: "Life & Physics Labs" },
    { name: "Wonder Lab Kits", emoji: "🧪", age: "24–36m", color: "#EFEBFE", desc: "First experiments: float/sink tub, colour mixing lab, ramp & roll track. Predict → test → explain, offline.", link: "Simulation-first learning" },
    { name: "Wonder Audio", emoji: "🎧", age: "0–36m", color: "#E4F8F7", desc: "Screen-free audio player with WonderSprout songs, soundscapes and story audio. Perfect for car rides and wind-down.", link: "Music World" },
    { name: "Monthly Discovery Box", emoji: "📦", age: "0–36m", color: "#EAEDF1", desc: "A new theme every month at your door: cards, a book, a mini-kit and a parent playbook synced to the app's theme.", link: "Whole ecosystem" },
    { name: "Wonder Puzzles", emoji: "🧩", age: "18–36m", color: "#E8F3FE", desc: "Chunky first puzzles — shapes, animals and pairs. Every completed puzzle pairs with a matching mini-game in the Logic Lab.", link: "Logic Lab" },
    { name: "Wonder Puppets", emoji: "🎭", age: "12–36m", color: "#FFEDE9", desc: "Pip, Bloop and friends as hand puppets — act out WonderSprout stories offline and invent brand-new endings.", link: "Story World" },
    { name: "Wonder Music Set", emoji: "🥁", age: "12–36m", color: "#EFEBFE", desc: "First instruments sized for tiny hands: drum, shaker and xylophone — tuned to the notes in WonderSprout Music.", link: "Music World" },
    { name: "Wonder Nature Explorer", emoji: "🐛", age: "24–36m", color: "#E7F6EE", desc: "Magnifier, bug pot and leaf press for garden safaris. Log every discovery in the Wonder Journal.", link: "Life Lab" },
    { name: "Wonder Bath Lab", emoji: "🛁", age: "12–36m", color: "#E4F8F7", desc: "Float-and-sink toys, pouring cups and bubble wands — the Float & Sink lab, fully waterproof.", link: "Float & Sink Lab" },
    { name: "Wonder Torch", emoji: "🔦", age: "18–36m", color: "#EAEDF1", desc: "A child-safe torch for shadow games, bedtime walls and the Shadow Puppets lab — light & shadow physics in your pocket.", link: "Shadow Puppets" },
    { name: "Wonder Mirror", emoji: "🪞", age: "6–24m", color: "#FFF4DC", desc: "Unbreakable acrylic mirror for tummy time and self-recognition games — the first 'who is that?' science.", link: "Life Lab" },
    { name: "Wonder Garden", emoji: "🪴", age: "12–36m", color: "#E7F6EE", desc: "Real seed-starting set synced to the Life Lab: plant in soil, watch the digital plant grow in parallel.", link: "Life Lab" },
    { name: "Wonder Drum", emoji: "🥁", age: "6–24m", color: "#FFEDE9", desc: "Soft first drum with loud/quiet games printed on the rim — pairs with the Sound Lab's volume slider.", link: "Sound Lab" },
    { name: "Wonder Magnifier", emoji: "🔍", age: "18–36m", color: "#E8F3FE", desc: "Chunky magnifying glass for garden detective walks — texture hunts that feed the Camera discovery habit.", link: "Wonder Camera" },
    { name: "Wonder Tent", emoji: "⛺", age: "12–36m", color: "#EFEBFE", desc: "Pop-up den for light-and-shadow play, story nooks and cosy read-aloud sessions.", link: "Stories" },
    { name: "Wonder Balance", emoji: "⚖️", age: "24–36m", color: "#FFF4DC", desc: "Toddler balance scale for float/sink and heavy/light predictions — the Physics Playground, offline.", link: "Float & Sink" },
    { name: "Wonder Postbox", emoji: "📮", age: "18–36m", color: "#E4F8F7", desc: "Sorting postbox with shape slots — post the right card through the right hole. Sorting Station made real.", link: "Sorting Station" },
    { name: "Wonder Apron", emoji: "👩‍🍳", age: "12–36m", color: "#FFEDE9", desc: "Tiny chef apron for real kitchen sorting, mixing and counting — flour, bowls and one-to-one spoons.", link: "Math Wonder Lab" },
  ];

  /* ---------- Journal seeds ---------- */
  const JOURNAL_SEEDS = [
    { emoji: "🎉", title: "First word for “ball”!", text: "Pointed at the physics playground and said “ba!” — we all cheered.", when: "2 days ago" },
    { emoji: "🛁", title: "Sink or float champion", text: "Predicted the duck would float — and it did! Screamed with joy.", when: "4 days ago" },
    { emoji: "🌱", title: "Watered Pip every morning", text: "Insisted on watering the digital seed before breakfast all week.", when: "1 week ago" },
  ];

  /* ---------- Helpers ---------- */
  function stageForAge(months) {
    const m = Math.max(0, Math.min(36, months));
    for (const s of STAGES) if (m >= s.months[0] && m < s.months[1]) return s.band;
    return "33–36m";
  }
  function progressionIndex(months) {
    let idx = 0;
    for (let i = 0; i < PROGRESSION.length; i++) if (months >= PROGRESSION[i].at) idx = i;
    return idx;
  }
  function wonderForToday() {
    const day = Math.floor(Date.now() / 86400000);
    return WONDER_DAYS[day % WONDER_DAYS.length];
  }

  return {
    BRAND, ECOSYSTEM, STAGES, PROGRESSION, LEVELS, LEARNING_LOOP, ULTIMATE_LOOP,
    WORLDS, SIM_TEMPLATES, BALL_AGES, MONTHLY_THEMES, WONDER_DAYS, OBSERVATION_SKILLS,
    CURRICULUM_MAP, ROADMAP, STORIES, SONGS, CAMERA_OBJECTS, AI_KNOWLEDGE, AI_FALLBACK,
    KITS, JOURNAL_SEEDS, stageForAge, progressionIndex, wonderForToday,
  };
})();

if (typeof module !== "undefined" && module.exports) module.exports = WSData;
