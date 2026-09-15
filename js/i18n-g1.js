/* ============================================================
   WonderSprout — Music page UI + song titles/descriptions
   (es/fr/de/ar/zh)
   keys: music.freeTitle/freeDesc/clapTitle/clapDesc/tip1..4/sing/stop/tempo0..2
         song0..15.t (title), song0..15.d (desc)
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    es: {
      "music.freeTitle": "Piano libre",
      "music.freeDesc": "Toca las teclas de colores — todas las notas suenan bien juntas. ¡En WonderSprout no hay notas equivocadas!",
      "music.clapTitle": "Palmas al ritmo",
      "music.clapDesc": "Un pulso como el latido — ¡aplaude cuando crezca! Primero el ritmo, después las notas.",
      "music.tip1": "<b>👪 Consejo:</b> ¡canta en voz alta, aunque cantes mal! Tu voz es el instrumento favorito de tu hijo — y cantar en vivo supera a cualquier grabación para aprender el idioma.",
      "music.tip2": "<b>👪 Para adultos:</b> canta la letra con tu hijo y añade gestos — dedos que titilan, brazos que reman, manos que duermen. Gestos + melodía + palabras = triple anclaje de memoria.",
      "music.tip3": "<b>👪 Para adultos:</b> las teclas usan una escala pentatónica — toda combinación suena agradable, así que explorar siempre tiene recompensa. ¡Prueba a repetirle su propia melodía!",
      "music.tip4": "<b>👪 Para adultos:</b> sientan el pulso juntos — palmas, rodillas, rebotes suaves. El sentido del ritmo a esta edad predice la fluidez lectora. Sin presión de puntaje: cada palma cuenta como juego.",
      "music.sing": "▶ ¡Cantar!",
      "music.stop": "⏹ Detener",
      "music.tempo0": "🐢 Lento",
      "music.tempo1": "🚶 Normal",
      "music.tempo2": "🐇 Saltarín",

      "song0.t": "Estrellita, ¿dónde estás?", "song0.d": "La canción de cuna clásica — suave y lenta.",
      "song1.t": "María tenía un corderito", "song1.d": "Una favorita con ritmo para aplaudir.",
      "song2.t": "Rema, rema tu bote", "song2.d": "¡Balancéate de lado a lado mientras cantas!",
      "song3.t": "¿Estás dormido? (Hermano Juan)", "song3.d": "Un canon para cantar juntos — perfecto para relajarse.",
      "song4.t": "Baa, baa, oveja negra", "song4.d": "Tres bolsas de lana — ¡una canción para contar!",
      "song5.t": "Bollos calientes", "song5.d": "Corta, dulce y perfecta para los primeros coros.",
      "song6.t": "El puente de Londres se cae", "song6.d": "¡Levántalo con los brazos — y luego derrúmbalo!",
      "song7.t": "Campanas navideñas", "song7.d": "¡Ring-ring! Aplade en cada tintineo.",
      "song8.t": "Cumpleaños feliz", "song8.d": "Para cada cumpleaños, cada pastel, cada vela que contar.",
      "song9.t": "Rema, rema tu bote", "song9.d": "Ritmo de balanceo suave — perfecto para las rodillas.",
      "song10.t": "María tenía un corderito", "song10.d": "Una melodía descendente y soñolienta para noches tranquilas.",
      "song11.t": "La arañita Incy Wincy", "song11.d": "Diversión de dedos que trepan con una melodía ascendente.",
      "song12.t": "El viejo MacDonald tenía una granja", "song12.d": "¡Coro de sonidos de animales — combínala con el laboratorio de Animales!",
      "song13.t": "Humpty Dumpty", "song13.d": "Un muro tambaleante, una gran caída — y un aterrizaje suave.",
      "song14.t": "Hey Diddle Diddle", "song14.d": "Una rima disparatada — ¡la vaca salta alto!",
      "song15.t": "Este viejecito", "song15.d": "Canción para contar — ¡knick-knack paddy-whack!"
    },

    fr: {
      "music.freeTitle": "Clavier libre",
      "music.freeDesc": "Tape sur les touches colorées — toutes les notes sonnent bien ensemble. Pas de fausse note chez WonderSprout !",
      "music.clapTitle": "Tape le rythme",
      "music.clapDesc": "Un pouls comme un battement de cœur — tape des mains quand il grossit ! Le rythme d'abord, les notes ensuite.",
      "music.tip1": "<b>👪 Conseil :</b> chante à voix haute, même faux ! Ta voix est l'instrument préféré de ton enfant — et chanter en direct vaut mieux que n'importe quel enregistrement pour apprendre la langue.",
      "music.tip2": "<b>👪 Parent :</b> chante les paroles avec ton enfant et ajoute des gestes — doigts qui scintillent, bras qui rament, mains qui dorment. Gestes + mélodie + mots = triple ancrage mémoriel.",
      "music.tip3": "<b>👪 Parent :</b> les touches utilisent une gamme pentatonique — chaque combinaison est agréable, donc explorer est toujours récompensé. Essaie de lui rejouer sa petite mélodie !",
      "music.tip4": "<b>👪 Parent :</b> sentez le rythme ensemble — tapez des mains, sur les genoux, rebondissez doucement. Le sens du rythme à cet âge prédit la fluidité en lecture. Pas de score : chaque claquement est un jeu.",
      "music.sing": "▶ Chanter !",
      "music.stop": "⏹ Arrêter",
      "music.tempo0": "🐢 Lent",
      "music.tempo1": "🚶 Normal",
      "music.tempo2": "🐇 Bondissant",

      "song0.t": "Ah ! vous dirai-je, maman", "song0.d": "La berceuse classique — douce et lente.",
      "song1.t": "Marie avait un petit agneau", "song1.d": "Un air entraînant parfait pour taper des mains.",
      "song2.t": "Rame, rame, rame ton bateau", "song2.d": "Balance-toi d'un côté à l'autre en chantant !",
      "song3.t": "Frère Jacques", "song3.d": "Un canon à chanter ensemble — parfait pour se calmer.",
      "song4.t": "Bê, bê, mouton noir", "song4.d": "Trois sacs de laine — une chanson à compter !",
      "song5.t": "Petits pains chauds", "song5.d": "Courte, douce et parfaite pour les premiers refrains.",
      "song6.t": "Le pont de Londres s'effondre", "song6.d": "Construis-le avec tes bras — puis écroule-toi !",
      "song7.t": "Vive le vent", "song7.d": "Ding ding ! Tape des mains à chaque tintement.",
      "song8.t": "Joyeux anniversaire", "song8.d": "Pour chaque anniversaire, chaque gâteau, chaque bougie à compter.",
      "song9.t": "Rame, rame, rame ton bateau", "song9.d": "Un doux rythme berçant — parfait pour les genoux.",
      "song10.t": "Marie avait un petit agneau", "song10.d": "Une mélodie descendante et endormie pour les soirs calmes.",
      "song11.t": "L'araignée Gypsie", "song11.d": "Grimpe avec les doigts sur un air qui monte.",
      "song12.t": "Le vieux MacDonald avait une ferme", "song12.d": "Refrain de cris d'animaux — à pairer avec le labo des Animaux !",
      "song13.t": "Humpty Dumpty", "song13.d": "Un mur branlant, une grande chute — et un atterrissage doux.",
      "song14.t": "Hey Diddle Diddle", "song14.d": "Une comptine absurde — la vache saute haut !",
      "song15.t": "Ce vieux monsieur", "song15.d": "Chanson à compter — knick-knack paddy-whack !"
    },

    de: {
      "music.freeTitle": "Freies Keyboard",
      "music.freeDesc": "Tippe auf die bunten Tasten — jeder Ton klingt zusammen gut. Bei WonderSprout gibt es keine falschen Töne!",
      "music.clapTitle": "Klatsch den Takt",
      "music.clapDesc": "Ein Puls wie ein Herzschlag — klatsche mit, wenn er wächst! Erst der Rhythmus, dann die Noten.",
      "music.tip1": "<b>👪 Tipp:</b> Sing laut mit, auch schief! Deine Stimme ist das Lieblingsinstrument deines Kindes — und live singen schlägt jede Aufnahme beim Sprachenlernen.",
      "music.tip2": "<b>👪 Für Eltern:</b> Singt den Text zusammen und macht Bewegungen — funkelnde Finger, rudernde Arme, schlafende Hände. Bewegung + Melodie + Worte = dreifacher Gedächtnishaken.",
      "music.tip3": "<b>👪 Für Eltern:</b> Die Tasten nutzen eine pentatonische Tonleiter — jede Kombination klingt angenehm, also wird Entdecken immer belohnt. Spiel deinem Kind seine kleine Melodie nach!",
      "music.tip4": "<b>👪 Für Eltern:</b> Fühlt den Takt gemeinsam — Hände klatschen, Knie klopfen, sanft wippen. Rhythmusgefühl in diesem Alter sagt spätere Leseflüssigkeit voraus. Kein Punktedruck: jedes Klatschen zählt als Spiel.",
      "music.sing": "▶ Singen!",
      "music.stop": "⏹ Stopp",
      "music.tempo0": "🐢 Langsam",
      "music.tempo1": "🚶 Normal",
      "music.tempo2": "🐇 Hüpfend",

      "song0.t": "Weißt du, wie viel Sternlein stehen", "song0.d": "Das klassische Schlaflied — sanft und langsam.",
      "song1.t": "Maria hatte ein kleines Lamm", "song1.d": "Ein schwungvoller Favorit zum Mitklatschen.",
      "song2.t": "Ruder, ruder, ruder dein Boot", "song2.d": "Schaukle beim Singen von Seite zu Seite!",
      "song3.t": "Bruder Jakob", "song3.d": "Ein Kanon zum Zusammen­ singen — perfekt zum Runterkommen.",
      "song4.t": "Mäh, mäh, schwarzes Schaf", "song4.d": "Drei Säcke Wolle — ein Zähllied!",
      "song5.t": "Heiße Brötchen", "song5.d": "Kurz, süß und perfekt für die ersten Mitsinglieder.",
      "song6.t": "Die Londoner Brücke bricht zusammen", "song6.d": "Bau sie mit den Armen auf — und dann stürzt sie ein!",
      "song7.t": "Kling, Glöckchen, kling", "song7.d": "Bimm-bimm! Klatsche bei jedem Bimmeln.",
      "song8.t": "Alles Gute zum Geburtstag", "song8.d": "Für jeden Geburtstag, jeden Kuchen, jede Kerze zum Zählen.",
      "song9.t": "Ruder, ruder, ruder dein Boot", "song9.d": "Sanft schaukelnder Rhythmus — perfekt für den Schoß.",
      "song10.t": "Maria hatte ein kleines Lamm", "song10.d": "Eine schläfrige absteigende Melodie für ruhige Abende.",
      "song11.t": "Die kleine Spinne", "song11.d": "Fingerkraxelspaß mit einer aufsteigenden Melodie.",
      "song12.t": "Old MacDonald hatte eine Farm", "song12.d": "Tierlaut-Refrain — passt zum Tierfreunde-Labor!",
      "song13.t": "Humpty Dumpty", "song13.d": "Eine wacklige Mauer, ein großer Fall — und eine sanfte Landung.",
      "song14.t": "Hey Diddle Diddle", "song14.d": "Verrückter Unsinn-Reim — die Kuh springt hoch!",
      "song15.t": "Dieser alte Mann", "song15.d": "Zähllied — knick-knack paddy-whack!"
    },

    ar: {
      "music.freeTitle": "لوحة العزف الحرّة",
      "music.freeDesc": "اضغط على اللوحات الملوّنة — كل النغمات تبدو جميلة معًا. لا توجد نغمة خاطئة في WonderSprout!",
      "music.clapTitle": "صفّق على الإيقاع",
      "music.clapDesc": "نبض كنبضة القلب — صفّق حين يكبر! الإيقاع أولًا، ثم النغمات.",
      "music.tip1": "<b>👪 نصيحة:</b> غنِّ بصوت عالٍ، حتى لو كان أداؤك سيئًا! صوتك هو الآلة المفضّلة لطفلك — والغناء الحيّ يتفوّق على أي تسجيل في تعلّم اللغة.",
      "music.tip2": "<b>👪 للأهل:</b> غنِّ الكلمات مع طفلك وأضف حركات — أصابع تلمع، أذرع تجدّف، أيدٍ نائمة. حركة + لحن + كلمات = ثلاثة روابط للذاكرة.",
      "music.tip3": "<b>👪 للأهل:</b> اللوحات تستخدم سلّمًا خماسيًا — كل مزيج يبدو جميلًا، لذا الاستكشاف مُجازى دائمًا. جرّب أن تعيد لطفلك لحنه الصغير!",
      "music.tip4": "<b>👪 للأهل:</b> اشعروا بالإيقاع معًا — تصفيق، تربيت على الركبتين، اهتزاز لطيف. حسّ الإيقاع في هذا العمر يتنبّأ بطلاقة القراءة لاحقًا. بلا ضغط نقاط: كل تصفيقة تُعدّ لعبًا.",
      "music.sing": "▶ غنِّ!",
      "music.stop": "⏹ إيقاف",
      "music.tempo0": "🐢 بطيء",
      "music.tempo1": "🚶 عادي",
      "music.tempo2": "🐇 وثّاب",

      "song0.t": "نجمة، نجمة، صغيرة", "song0.d": "تهويدة كلاسيكية — لطيفة وبطيئة.",
      "song1.t": "مريم لديها حمل صغير", "song1.d": "أغنية مرحة مفضّلة للتصفيق معها.",
      "song2.t": "جدّف، جدّف، جدّف قاربك", "song2.d": "تمايل يمينًا ويسارًا وأنت تغنّي!",
      "song3.t": "هل أنت نائم؟ (الأخ جون)", "song3.d": "أغنية دائرية نغنّيها معًا — مثالية للهدوء.",
      "song4.t": "بع بع يا خروف أسود", "song4.d": "ثلاثة أكياس من الصوف — أغنية للعدّ!",
      "song5.t": "خبز الصليب الساخن", "song5.d": "قصيرة ولطيفة ومثالية لأوّل أغنيات مشتركة.",
      "song6.t": "جسر لندن يسقط", "song6.d": "ابنِه بذراعيك — ثم اسقط!",
      "song7.t": "أجراس العيد", "song7.d": "رنّ رنّ! صفّق مع كل رنّة.",
      "song8.t": "عيد ميلاد سعيد", "song8.d": "لكل عيد ميلاد، وكل كعكة، وكل شمعة تُعدّ.",
      "song9.t": "جدّف، جدّف، جدّف قاربك", "song9.d": "إيقاع هادئ متمايل — مثالي للجلوس على الحضن.",
      "song10.t": "مريم لديها حمل صغير", "song10.d": "لحن نازل وناعس للأمسيات الهادئة.",
      "song11.t": "العنكبوت الصغير", "song11.d": "متعة تسلّق بالأصابع مع لحن صاعد.",
      "song12.t": "ماكدونالد العجوز لديه مزرعة", "song12.d": "لازمة بأصوات الحيوانات — اربطها بمختبر أصدقاء الحيوانات!",
      "song13.t": "همبتي دمبتي", "song13.d": "جدار متمايل، وسقوط كبير — وهبوط لطيف.",
      "song14.t": "هي ديدل ديدل", "song14.d": "قصيدة عبثية مرحة — البقرة تقفز عاليًا!",
      "song15.t": "هذا الرجل العجوز", "song15.d": "أغنية للعدّ — نيك-ناك بادي-واك!"
    },

    zh: {
      "music.freeTitle": "自由弹奏琴键",
      "music.freeDesc": "点一点彩色琴键 —— 每一个音一起听都很好听。在 WonderSprout 里没有弹错的音！",
      "music.clapTitle": "拍手打节拍",
      "music.clapDesc": "像心跳一样的节拍 —— 它变大时就拍手！先学节奏，再学音符。",
      "music.tip1": "<b>👪 小提示：</b>大声跟着唱，唱得不好也没关系！你的声音是孩子最爱的乐器 —— 真人演唱比任何录音都更有助于语言学习。",
      "music.tip2": "<b>👪 给家长：</b>和孩子一起唱歌词并加上动作 —— 手指闪一闪、手臂划一划、双手睡一睡。动作 + 旋律 + 歌词 = 三重记忆钩子。",
      "music.tip3": "<b>👪 给家长：</b>琴键用的是五声音阶 —— 随便怎么组合都好听，所以探索总会有回报。试着把孩子的小旋律弹回给他听！",
      "music.tip4": "<b>👪 给家长：</b>一起感受节拍 —— 拍拍手、拍拍膝盖、轻轻颠一颠。这个年龄的节奏感能预测日后的阅读流畅度。不用打分：每一下拍手都算玩耍。",
      "music.sing": "▶ 唱吧！",
      "music.stop": "⏹ 停止",
      "music.tempo0": "🐢 慢速",
      "music.tempo1": "🚶 正常",
      "music.tempo2": "🐇 欢快",

      "song0.t": "一闪一闪亮晶晶", "song0.d": "经典摇篮曲 —— 温柔又缓慢。",
      "song1.t": "玛丽有只小羊羔", "song1.d": "一首活泼的最爱，可以跟着拍手。",
      "song2.t": "划呀划呀划小船", "song2.d": "一边唱一边左右摇一摇！",
      "song3.t": "你睡着了吗？（约翰兄弟）", "song3.d": "可以一起轮唱的曲子 —— 很适合安静下来。",
      "song4.t": "咩咩小黑羊", "song4.d": "三袋羊毛 —— 一首数数歌！",
      "song5.t": "热腾腾的小面包", "song5.d": "短小又好听，很适合第一次合唱。",
      "song6.t": "伦敦桥要塌了", "song6.d": "用手臂把它搭起来 —— 然后倒下来！",
      "song7.t": "铃儿响叮当", "song7.d": "叮叮当！每响一下就拍拍手。",
      "song8.t": "祝你生日快乐", "song8.d": "每个生日、每块蛋糕、每根要数的蜡烛都适用。",
      "song9.t": "划呀划呀划小船", "song9.d": "温柔的摇摆节奏 —— 很适合坐在腿上颠。",
      "song10.t": "玛丽有只小羊羔", "song10.d": "一段下行又催眠的旋律，适合安静的夜晚。",
      "song11.t": "小蜘蛛爬呀爬", "song11.d": "手指往上爬的乐趣，配上上行的曲调。",
      "song12.t": "老王麦克唐纳有个农场", "song12.d": "动物叫声合唱 —— 可以和动物朋友实验室搭配！",
      "song13.t": "矮胖子 Humpty Dumpty", "song13.d": "摇摇欲坠的墙，重重一摔 —— 然后轻轻落地。",
      "song14.t": "嘿，滴答滴答", "song14.d": "好玩的无厘头童谣 —— 奶牛跳得高高的！",
      "song15.t": "这个老爷爷", "song15.d": "一首数数歌 —— 咚锵咚锵拍拍手！"
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
