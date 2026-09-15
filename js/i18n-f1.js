/* ============================================================
   WonderSprout — Ball-drop age bands + simulation templates
   (es/fr/de/ar/zh)
   keys: ball0..5.m (mode), ball0..5.d (desc), sim0..17.n (name)
   Age labels ("6m") stay numeric and are not translated.
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    es: {
      "ball0.m": "OBSERVAR", "ball1.m": "TOCAR", "ball2.m": "ELEGIR",
      "ball3.m": "VARIAR", "ball4.m": "PREDECIR", "ball5.m": "EXPLICAR",
      "ball0.d": "El bebé mira una pelota caer una y otra vez — suave, repetible, hipnótico.",
      "ball1.d": "El bebé toca y la pelota cae. ACCIÓN → RESULTADO enciende el cerebro.",
      "ball2.d": "El pequeño elige qué pelota soltar — ¿roja o azul? ¿Grande o pequeña?",
      "ball3.d": "El pequeño la suelta desde distintas alturas y ve cómo cambia el rebote.",
      "ball4.d": "«¿Qué pelota rebotará más alto?» Predecir primero, y luego probar.",
      "ball5.d": "«¿Por qué rebotó menos la pelota grande?» Experimentar, explicar, conectar con el mundo real.",
      "sim0.n": "Objeto que cae", "sim1.n": "Objeto que rueda", "sim2.n": "Clasificación",
      "sim3.n": "Emparejar", "sim4.n": "Mezcla de colores", "sim5.n": "Contar",
      "sim6.n": "Planta que crece", "sim7.n": "Día/Noche", "sim8.n": "El clima",
      "sim9.n": "Flota/Hunde", "sim10.n": "Luz/Sombra", "sim11.n": "Sonido",
      "sim12.n": "Patrones", "sim13.n": "Rotación de formas", "sim14.n": "Construcción",
      "sim15.n": "Decisión de cuento", "sim16.n": "Emoción del personaje", "sim17.n": "Hábitat animal",
      "sim.live": "En vivo", "sim.soon": "Pronto"
    },

    fr: {
      "ball0.m": "REGARDER", "ball1.m": "TOUCHER", "ball2.m": "CHOISIR",
      "ball3.m": "VARIER", "ball4.m": "PRÉDIRE", "ball5.m": "EXPLIQUER",
      "ball0.d": "Le bébé regarde une balle tomber encore et encore — doux, répétable, hypnotique.",
      "ball1.d": "Le bébé touche et la balle tombe. ACTION → RÉSULTAT allume le cerveau.",
      "ball2.d": "Le tout-petit choisit quelle balle lâcher — rouge ou bleue ? Grande ou petite ?",
      "ball3.d": "Le tout-petit la lâche de différentes hauteurs et regarde le rebond changer.",
      "ball4.d": "« Quelle balle rebondira le plus haut ? » Prédire d'abord, puis tester.",
      "ball5.d": "« Pourquoi la grosse balle a-t-elle moins rebondi ? » Expérimenter, expliquer, relier au monde réel.",
      "sim0.n": "Objet qui tombe", "sim1.n": "Objet qui roule", "sim2.n": "Tri",
      "sim3.n": "Association", "sim4.n": "Mélange de couleurs", "sim5.n": "Comptage",
      "sim6.n": "Plante qui pousse", "sim7.n": "Jour/Nuit", "sim8.n": "Météo",
      "sim9.n": "Flotte/Coule", "sim10.n": "Lumière/Ombre", "sim11.n": "Son",
      "sim12.n": "Motifs", "sim13.n": "Rotation de formes", "sim14.n": "Construction",
      "sim15.n": "Choix d'histoire", "sim16.n": "Émotion du personnage", "sim17.n": "Habitat animal",
      "sim.live": "En direct", "sim.soon": "Bientôt"
    },

    de: {
      "ball0.m": "SCHAUEN", "ball1.m": "TIPPEN", "ball2.m": "WÄHLEN",
      "ball3.m": "VARIIEREN", "ball4.m": "VORHERSAGEN", "ball5.m": "ERKLÄREN",
      "ball0.d": "Das Baby schaut zu, wie ein Ball immer wieder fällt — sanft, wiederholbar, hypnotisch.",
      "ball1.d": "Das Baby tippt und der Ball fällt. AKTION → ERGEBNIS lässt das Gehirn aufleuchten.",
      "ball2.d": "Das Kleinkind wählt, welchen Ball es fallen lässt — rot oder blau? Groß oder klein?",
      "ball3.d": "Das Kleinkind lässt ihn aus verschiedenen Höhen fallen und schaut, wie sich der Sprung ändert.",
      "ball4.d": "„Welcher Ball springt höher?“ Erst vorhersagen, dann testen.",
      "ball5.d": "„Warum ist der große Ball niedriger gesprungen?“ Experimentieren, erklären, mit der echten Welt verbinden.",
      "sim0.n": "Fallender Gegenstand", "sim1.n": "Rollender Gegenstand", "sim2.n": "Sortieren",
      "sim3.n": "Zuordnen", "sim4.n": "Farben mischen", "sim5.n": "Zählen",
      "sim6.n": "Wachsende Pflanze", "sim7.n": "Tag/Nacht", "sim8.n": "Wetter",
      "sim9.n": "Schwimmt/Sinkt", "sim10.n": "Licht/Schatten", "sim11.n": "Klang",
      "sim12.n": "Muster", "sim13.n": "Formdrehung", "sim14.n": "Bauen",
      "sim15.n": "Geschichtenentscheidung", "sim16.n": "Gefühl der Figur", "sim17.n": "Tierlebensraum",
      "sim.live": "Live", "sim.soon": "Bald"
    },

    ar: {
      "ball0.m": "مُشَاهَدَة", "ball1.m": "لَمْس", "ball2.m": "اخْتِيَار",
      "ball3.m": "تَغْيِير", "ball4.m": "تَوَقُّع", "ball5.m": "تَفْسِير",
      "ball0.d": "الرضيع يشاهد كرة تسقط مرارًا وتكرارًا — لطيف، قابل للتكرار، ساحر.",
      "ball1.d": "الرضيع يلمس فتسقط الكرة. فعل ← نتيجة يُشعل الدماغ.",
      "ball2.d": "الطفل يختار أي كرة يُفلت — حمراء أم زرقاء؟ كبيرة أم صغيرة؟",
      "ball3.d": "الطفل يُفلتها من ارتفاعات مختلفة ويشاهد تغيّر القفزة.",
      "ball4.d": "«أي كرة ستقفز أعلى؟» توقّع أولًا، ثم اختبر.",
      "ball5.d": "«لماذا قفزت الكرة الكبيرة أقل؟» جرّب، اشرح، واربط ذلك بالعالم الحقيقي.",
      "sim0.n": "غرض ساقط", "sim1.n": "غرض متدحرج", "sim2.n": "فرز",
      "sim3.n": "مطابقة", "sim4.n": "مزج الألوان", "sim5.n": "عدّ",
      "sim6.n": "نبات ينمو", "sim7.n": "ليل/نهار", "sim8.n": "الطقس",
      "sim9.n": "طفو/غرق", "sim10.n": "ضوء/ظل", "sim11.n": "صوت",
      "sim12.n": "أنماط", "sim13.n": "دوران الأشكال", "sim14.n": "بناء",
      "sim15.n": "اختيار في القصة", "sim16.n": "مشاعر الشخصية", "sim17.n": "موطن الحيوان",
      "sim.live": "مباشر", "sim.soon": "قريبًا"
    },

    zh: {
      "ball0.m": "观看", "ball1.m": "点一下", "ball2.m": "选择",
      "ball3.m": "变化", "ball4.m": "预测", "ball5.m": "解释",
      "ball0.d": "宝宝看着球一次次落下 —— 温柔、可以重复、让人着迷。",
      "ball1.d": "宝宝一点，球就落下。「动作 → 结果」点亮了大脑。",
      "ball2.d": "幼儿来选要放哪一颗球 —— 红色还是蓝色？大的还是小的？",
      "ball3.d": "幼儿从不同高度放下球，看弹跳怎么变化。",
      "ball4.d": "「哪一颗球会弹得更高？」先猜一猜，再试一试。",
      "ball5.d": "「为什么大球弹得更低？」做实验、说一说，再和真实世界连起来。",
      "sim0.n": "下落的物体", "sim1.n": "滚动的物体", "sim2.n": "分类",
      "sim3.n": "配对", "sim4.n": "混色", "sim5.n": "数数",
      "sim6.n": "生长的植物", "sim7.n": "白天/黑夜", "sim8.n": "天气",
      "sim9.n": "浮/沉", "sim10.n": "光/影", "sim11.n": "声音",
      "sim12.n": "图案", "sim13.n": "形状旋转", "sim14.n": "搭建",
      "sim15.n": "故事选择", "sim16.n": "角色情绪", "sim17.n": "动物栖息地",
      "sim.live": "已上线", "sim.soon": "即将推出"
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
