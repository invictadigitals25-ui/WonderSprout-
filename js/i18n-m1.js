/* ============================================================
   WonderSprout — app chrome + remaining hardcoded UI strings
   (es/fr/de/ar/zh/pt/ru/hi/ur/tr)
   keys: brand.by, foot.product, foot.see, foot.tryReal,
         labs.simTitle, labs.openPhysics, labs.playable, labs.coming,
         labs.tmplCount {n}, labs.monthlyThemes,
         world.grownups, pa.signInBtn, pa.outsideTitle, pa.outsideBody,
         cam.tapHint, ai.greeting {name} {m} {stage}
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    es: {
      "brand.by": "de DINVICTA EDU",
      "foot.product": "· un producto de DINVICTA EDU",
      "foot.see": "Ver · Oír · Tocar · Explorar · Asombrarse — un ecosistema de aprendizaje guiado por los padres para edades de 0 a 36 meses.",
      "foot.tryReal": "Cada momento de pantalla termina con un paso «Pruébalo en la vida real». Sin anuncios, sin clasificaciones, sin diagnósticos — nunca.",
      "labs.simTitle": "⚽ Simulación primero: una pelota, cada edad",
      "labs.openPhysics": "⚽ Abrir el Patio de Física",
      "labs.playable": "Jugable",
      "labs.coming": "Próximamente",
      "labs.tmplCount": "{n} plantillas de simulación",
      "labs.monthlyThemes": "🗓️ Temas mensuales",
      "world.grownups": "👪 Adultos: ¡el <a href='#/parent' style='text-decoration:underline'>Panel de padres</a> tiene el asombro de hoy!",
      "pa.signInBtn": "Iniciar sesión",
      "pa.outsideTitle": "La mejor actividad ahora mismo puede ser al aire libre",
      "pa.outsideBody": "20 minutos de parque — señalar, nombrar, correr — ganan a cualquier app hoy. El trabajo de WonderSprout está hecho cuando el aprendizaje sale de la pantalla. Vuelve mañana para el próximo Asombro del Día.",
      "cam.tapHint": "👆 Toca un objeto para escanearlo",
      "ai.greeting": "¡Hola! Soy el copiloto de WonderSprout. Sé que {name} tiene <b>{m} meses</b> (etapa: <b>{stage}</b>). Pregúntame a qué jugar hoy, cómo encajan las pantallas, qué aprendimos esta semana — o lo que tengas en mente."
    },

    fr: {
      "brand.by": "par DINVICTA EDU",
      "foot.product": "· un produit DINVICTA EDU",
      "foot.see": "Voir · Entendre · Toucher · Explorer · S'émerveiller — un écosystème d'apprentissage guidé par les parents pour les 0–36 mois.",
      "foot.tryReal": "Chaque moment d'écran se termine par une étape « Essaie-le en vrai ». Pas de publicité, pas de classement, pas de diagnostic — jamais.",
      "labs.simTitle": "⚽ Simulation d'abord : un ballon, chaque âge",
      "labs.openPhysics": "⚽ Ouvrir le Terrain de physique",
      "labs.playable": "Jouable",
      "labs.coming": "Bientôt",
      "labs.tmplCount": "{n} modèles de simulation",
      "labs.monthlyThemes": "🗓️ Thèmes mensuels",
      "world.grownups": "👪 Adultes : le <a href='#/parent' style='text-decoration:underline'>Tableau de bord parent</a> a l'émerveillement du jour !",
      "pa.signInBtn": "Se connecter",
      "pa.outsideTitle": "La meilleure activité en ce moment est peut-être dehors",
      "pa.outsideBody": "20 minutes au parc — montrer, nommer, courir — battent n'importe quelle appli aujourd'hui. Le travail de WonderSprout est accompli quand l'apprentissage quitte l'écran. Revenez demain pour le prochain Émerveillement du jour.",
      "cam.tapHint": "👆 Touche un objet pour le scanner",
      "ai.greeting": "Bonjour ! Je suis le copilote WonderSprout. Je sais que {name} a <b>{m} mois</b> (étape : <b>{stage}</b>). Demande-moi à quoi jouer aujourd'hui, comment intégrer les écrans, ce qu'on a appris cette semaine — ou tout ce qui te passe par la tête."
    },

    de: {
      "brand.by": "von DINVICTA EDU",
      "foot.product": "· ein Produkt von DINVICTA EDU",
      "foot.see": "Sehen · Hören · Fühlen · Entdecken · Staunen — ein elterngeführtes Lern-Ökosystem für 0–36 Monate.",
      "foot.tryReal": "Jeder Bildschirmmoment endet mit einem „Probier es im echten Leben“-Schritt. Keine Werbung, keine Ranglisten, keine Diagnosen — niemals.",
      "labs.simTitle": "⚽ Simulation zuerst: ein Ball, jedes Alter",
      "labs.openPhysics": "⚽ Physik-Spielplatz öffnen",
      "labs.playable": "Spielbar",
      "labs.coming": "Demnächst",
      "labs.tmplCount": "{n} Simulationsvorlagen",
      "labs.monthlyThemes": "🗓️ Monatsthemen",
      "world.grownups": "👪 Erwachsene: Das <a href='#/parent' style='text-decoration:underline'>Eltern-Dashboard</a> hat das Wunder des Tages!",
      "pa.signInBtn": "Anmelden",
      "pa.outsideTitle": "Die beste Aktivität gerade ist vielleicht draußen",
      "pa.outsideBody": "20 Minuten im Park — zeigen, benennen, rennen — schlagen heute jede App. WonderSprouts Job ist erledigt, wenn das Lernen den Bildschirm verlässt. Komm morgen für das nächste Wunder des Tages wieder.",
      "cam.tapHint": "👆 Tippe ein Objekt an, um es zu scannen",
      "ai.greeting": "Hallo! Ich bin der WonderSprout-Copilot. Ich weiß, dass {name} <b>{m} Monate</b> alt ist (Stufe: <b>{stage}</b>). Frag mich, was wir heute spielen, wie Bildschirme hineinpassen, was wir diese Woche gelernt haben — oder was dir einfällt."
    },

    ar: {
      "brand.by": "من DINVICTA EDU",
      "foot.product": "· منتج من DINVICTA EDU",
      "foot.see": "رؤية · سماع · لمس · استكشاف · تعجّب — منظومة تعلّم بإشراف الوالدين للأعمار من 0 إلى 36 شهرًا.",
      "foot.tryReal": "كل لحظة على الشاشة تنتهي بخطوة «جرّبه في الحياة الواقعية». بلا إعلانات، بلا ترتيبات، بلا تشخيص — أبدًا.",
      "labs.simTitle": "⚽ المحاكاة أولًا: كرة واحدة، كل عمر",
      "labs.openPhysics": "⚽ افتح ملعب الفيزياء",
      "labs.playable": "قابل للعب",
      "labs.coming": "قريبًا",
      "labs.tmplCount": "{n} قالب محاكاة",
      "labs.monthlyThemes": "🗓️ مواضيع شهرية",
      "world.grownups": "👪 أيها الكبار: <a href='#/parent' style='text-decoration:underline'>لوحة الوالدين</a> فيها عجيبة اليوم!",
      "pa.signInBtn": "تسجيل الدخول",
      "pa.outsideTitle": "أفضل نشاط الآن قد يكون في الخارج",
      "pa.outsideBody": "٢٠ دقيقة في الحديقة — الإشارة والتسمية والجري — تتفوّق على أي تطبيق اليوم. مهمة WonderSprout تنتهي حين تخرج التعلّمة من الشاشة. عُد غدًا لعجيبة اليوم القادمة.",
      "cam.tapHint": "👆 المس غرضًا لمسحه",
      "ai.greeting": "مرحبًا! أنا مساعد WonderSprout. أعلم أن {name} عمره <b>{m} شهرًا</b> (المرحلة: <b>{stage}</b>). اسألني ماذا نلعب اليوم، وكيف تناسب الشاشات، وماذا تعلّمنا هذا الأسبوع — أو أي شيء في بالك."
    },

    zh: {
      "brand.by": "由 DINVICTA EDU 出品",
      "foot.product": "· DINVICTA EDU 出品",
      "foot.see": "看 · 听 · 触摸 · 探索 · 好奇 —— 一个由家长引导的学习生态系统，适合 0–36 个月。",
      "foot.tryReal": "每一次屏幕时刻都以「在真实生活里试一试」结束。没有广告，没有排名，没有诊断 —— 永远没有。",
      "labs.simTitle": "⚽ 先模拟：一个球，每个年龄",
      "labs.openPhysics": "⚽ 打开物理游乐场",
      "labs.playable": "可玩",
      "labs.coming": "即将推出",
      "labs.tmplCount": "{n} 个模拟模板",
      "labs.monthlyThemes": "🗓️ 每月主题",
      "world.grownups": "👪 大人们：<a href='#/parent' style='text-decoration:underline'>家长仪表盘</a>里有今日好奇！",
      "pa.signInBtn": "登录",
      "pa.outsideTitle": "现在最好的活动可能在户外",
      "pa.outsideBody": "20 分钟的公园时间 —— 指一指、说一说、跑一跑 —— 今天胜过任何应用。当学习离开屏幕时，WonderSprout 的任务就完成了。明天再来迎接下一个今日好奇。",
      "cam.tapHint": "👆 点一个物品来扫一扫",
      "ai.greeting": "你好！我是 WonderSprout 助手。我知道 {name} 现在 <b>{m} 个月大</b>（阶段：<b>{stage}</b>）。可以问我今天玩什么、屏幕怎么安排、这周学了什么 —— 或者任何你想问的。"
    },

    pt: {
      "brand.by": "da DINVICTA EDU",
      "foot.product": "· um produto DINVICTA EDU",
      "foot.see": "Ver · Ouvir · Tocar · Explorar · Maravilhar — um ecossistema de aprendizagem guiado pelos pais para idades de 0 a 36 meses.",
      "foot.tryReal": "Cada momento de ecrã termina com um passo «Experimenta na vida real». Sem anúncios, sem classificações, sem diagnósticos — nunca.",
      "labs.simTitle": "⚽ Simulação primeiro: uma bola, cada idade",
      "labs.openPhysics": "⚽ Abrir o Parque da Física",
      "labs.playable": "Jogável",
      "labs.coming": "Em breve",
      "labs.tmplCount": "{n} modelos de simulação",
      "labs.monthlyThemes": "🗓️ Temas mensais",
      "world.grownups": "👪 Adultos: o <a href='#/parent' style='text-decoration:underline'>Painel dos pais</a> tem o deslumbramento de hoje!",
      "pa.signInBtn": "Iniciar sessão",
      "pa.outsideTitle": "A melhor atividade agora pode ser lá fora",
      "pa.outsideBody": "20 minutos de parque — apontar, nomear, correr — ganham a qualquer app hoje. O trabalho do WonderSprout está feito quando a aprendizagem sai do ecrã. Volta amanhã para o próximo Deslumbramento do Dia.",
      "cam.tapHint": "👆 Toca num objeto para o analisar",
      "ai.greeting": "Olá! Sou o copiloto WonderSprout. Sei que {name} tem <b>{m} meses</b> (fase: <b>{stage}</b>). Pergunta-me o que jogar hoje, como encaixar os ecrãs, o que aprendemos esta semana — ou o que te apetecer."
    },

    ru: {
      "brand.by": "от DINVICTA EDU",
      "foot.product": "· продукт DINVICTA EDU",
      "foot.see": "Видеть · Слышать · Трогать · Исследовать · Удивляться — обучающая экосистема под руководством родителей для возраста 0–36 месяцев.",
      "foot.tryReal": "Каждый момент у экрана заканчивается шагом «Попробуй в реальной жизни». Без рекламы, без рейтингов, без диагнозов — никогда.",
      "labs.simTitle": "⚽ Сначала симуляция: один мяч, каждый возраст",
      "labs.openPhysics": "⚽ Открыть Физическую площадку",
      "labs.playable": "Доступно",
      "labs.coming": "Скоро",
      "labs.tmplCount": "{n} шаблонов симуляций",
      "labs.monthlyThemes": "🗓️ Ежемесячные темы",
      "world.grownups": "👪 Взрослые: на <a href='#/parent' style='text-decoration:underline'>Панели родителя</a> есть чудо дня!",
      "pa.signInBtn": "Войти",
      "pa.outsideTitle": "Лучшее занятие сейчас, возможно, на улице",
      "pa.outsideBody": "20 минут в парке — показывать, называть, бегать — сегодня побеждают любое приложение. Работа WonderSprout сделана, когда обучение покидает экран. Возвращайтесь завтра за следующим Чудом дня.",
      "cam.tapHint": "👆 Нажмите на предмет, чтобы распознать его",
      "ai.greeting": "Привет! Я помощник WonderSprout. Я знаю, что {name} — <b>{m} месяцев</b> (этап: <b>{stage}</b>). Спроси меня, во что играть сегодня, как вписать экраны, что мы узнали на этой неделе — или что угодно ещё."
    },

    hi: {
      "brand.by": "DINVICTA EDU द्वारा",
      "foot.product": "· DINVICTA EDU का उत्पाद",
      "foot.see": "देखो · सुनो · छुओ · खोजो · आश्चर्य करो — 0–36 महीने की उम्र के लिए अभिभावक-निर्देशित शिक्षण पारिस्थितिकी।",
      "foot.tryReal": "हर स्क्रीन पल «असली ज़िंदगी में आज़माओ» कदम पर ख़त्म होता है। कोई विज्ञापन नहीं, कोई रैंकिंग नहीं, कोई निदान नहीं — कभी नहीं।",
      "labs.simTitle": "⚽ पहले सिमुलेशन: एक गेंद, हर उम्र",
      "labs.openPhysics": "⚽ भौतिकी का मैदान खोलें",
      "labs.playable": "खेलने योग्य",
      "labs.coming": "जल्द आ रहा है",
      "labs.tmplCount": "{n} सिमुलेशन टेम्पलेट",
      "labs.monthlyThemes": "🗓️ मासिक विषय",
      "world.grownups": "👪 बड़ों: <a href='#/parent' style='text-decoration:underline'>पैरेंट डैशबोर्ड</a> पर आज का आश्चर्य है!",
      "pa.signInBtn": "साइन इन करें",
      "pa.outsideTitle": "अभी सबसे अच्छी गतिविधि शायद बाहर की है",
      "pa.outsideBody": "पार्क के २० मिनट — इशारा करना, नाम बताना, दौड़ना — आज किसी भी ऐप से बेहतर हैं। WonderSprout का काम तब पूरा होता है जब सीख स्क्रीन से बाहर निकलती है। कल अगले आज के आश्चर्य के लिए वापस आएं।",
      "cam.tapHint": "👆 स्कैन करने के लिए किसी वस्तु को टैप करें",
      "ai.greeting": "नमस्ते! मैं WonderSprout सहयोगी हूँ। मैं जानता हूँ कि {name} <b>{m} महीने</b> का है (चरण: <b>{stage}</b>)। मुझसे पूछो आज क्या खेलें, स्क्रीन कैसे फ़िट होती है, इस हफ़्ते क्या सीखा — या जो मन में हो।"
    },

    ur: {
      "brand.by": "DINVICTA EDU کی جانب سے",
      "foot.product": "· DINVICTA EDU کی مصنوعات",
      "foot.see": "دیکھیں · سنیں · چھوئیں · دریافت کریں · حیران ہوں — 0–36 ماہ کی عمر کے لیے والدین کی رہنمائی والا تعلیمی ماحول۔",
      "foot.tryReal": "اسکرین کا ہر لمحہ «حقیقی زندگی میں آزمائیں» کے قدم پر ختم ہوتا ہے۔ کوئی اشتہار نہیں، کوئی درجہ بندی نہیں، کوئی تشخیص نہیں — کبھی نہیں۔",
      "labs.simTitle": "⚽ پہلے نقل: ایک گیند، ہر عمر",
      "labs.openPhysics": "⚽ طبیعیات کا میدان کھولیں",
      "labs.playable": "کھیلنے کے قابل",
      "labs.coming": "جلد آ رہا ہے",
      "labs.tmplCount": "{n} نقل ٹیمپلیٹس",
      "labs.monthlyThemes": "🗓️ ماہانہ موضوعات",
      "world.grownups": "👪 بڑو: <a href='#/parent' style='text-decoration:underline'>والدین ڈیش بورڈ</a> پر آج کا عجوبہ ہے!",
      "pa.signInBtn": "سائن اِن کریں",
      "pa.outsideTitle": "ابھی بہترین سرگرمی شاید باہر کی ہے",
      "pa.outsideBody": "پارک کے ۲۰ منٹ — اشارہ کرنا، نام بتانا، دوڑنا — آج کسی بھی ایپ سے بہتر ہیں۔ WonderSprout کا کام تب مکمل ہوتا ہے جب سیکھنا اسکرین سے باہر نکلے۔ کل اگلے آج کے عجوبے کے لیے واپس آئیں۔",
      "cam.tapHint": "👆 اسکین کرنے کے لیے کسی چیز کو ٹیپ کریں",
      "ai.greeting": "السلام علیکم! میں WonderSprout ساتھی ہوں۔ میں جانتا ہوں کہ {name} <b>{m} ماہ</b> کا ہے (مرحلہ: <b>{stage}</b>)۔ مجھ سے پوچھیں آج کیا کھیلیں، اسکرین کیسے فٹ ہوتی ہے، اس ہفتے کیا سیکھا — یا جو دل میں ہو۔"
    },

    tr: {
      "brand.by": "DINVICTA EDU tarafından",
      "foot.product": "· bir DINVICTA EDU ürünü",
      "foot.see": "Gör · Duy · Dokun · Keşfet · Hayret et — 0–36 ay için ebeveyn rehberliğinde bir öğrenme ekosistemi.",
      "foot.tryReal": "Her ekran anı «Gerçek hayatta dene» adımıyla biter. Reklam yok, sıralama yok, teşhis yok — asla.",
      "labs.simTitle": "⚽ Önce simülasyon: bir top, her yaş",
      "labs.openPhysics": "⚽ Fizik Oyun Alanı'nı aç",
      "labs.playable": "Oynanabilir",
      "labs.coming": "Yakında",
      "labs.tmplCount": "{n} simülasyon şablonu",
      "labs.monthlyThemes": "🗓️ Aylık temalar",
      "world.grownups": "👪 Büyükler: <a href='#/parent' style='text-decoration:underline'>Ebeveyn Paneli</a>'nde günün harikası var!",
      "pa.signInBtn": "Giriş yap",
      "pa.outsideTitle": "Şu an en iyi aktivite dışarıda olabilir",
      "pa.outsideBody": "20 dakikalık park zamanı — göstermek, adlandırmak, koşmak — bugün her uygulamayı yener. WonderSprout'un işi öğrenme ekrandan çıkınca biter. Yarın bir sonraki Günün Harikası için geri gelin.",
      "cam.tapHint": "👆 Taramak için bir nesneye dokunun",
      "ai.greeting": "Merhaba! Ben WonderSprout yardımcı pilotuyum. {name}'in <b>{m} aylık</b> olduğunu biliyorum (aşama: <b>{stage}</b>). Bana bugün ne oynayacağımızı, ekranların nasıl uyduğunu, bu hafta ne öğrendiğimizi sor — ya da aklına gelen her şeyi."
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
