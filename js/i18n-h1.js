/* ============================================================
   WonderSprout — Wonder Camera object cards
   (es/fr/de/ar/zh)
   keys: cam.aiLooking, cam.tapAnother,
         cam.sees.<id>, cam.rw.<id>, cam.act.<id>.0..2
   ids: apple ball leaf cup teddy spoon banana car book socks drum
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    es: {
      "cam.aiLooking": "🤖 La IA de WonderSprout está mirando…",
      "cam.tapAnother": "👆 Toca otro objeto para escanearlo",

      "cam.sees.apple": "una manzana roja y brillante",
      "cam.rw.apple": "¡Cortad la manzana por la mitad juntos — hay una estrella escondida dentro!",
      "cam.act.apple.0": "Color: «¿Puedes encontrar algo más que sea ROJO?»",
      "cam.act.apple.1": "Matemáticas: cuenta las manzanas de la mesa — ¡1, 2, 3!",
      "cam.act.apple.2": "Vida: «Las manzanas crecen en los árboles, a partir de flores diminutas.»",

      "cam.sees.ball": "una pelota redonda y saltarina",
      "cam.rw.ball": "¡Prueba la pelota en el Patio de Física, luego haz rebotar la pelota REAL y compara!",
      "cam.act.ball.0": "Física: déjala caer desde tu rodilla y luego desde arriba. ¿Qué rebote es más grande?",
      "cam.act.ball.1": "Formas: hazla rodar en círculo. Las pelotas son redondas — ¡ruedan!",
      "cam.act.ball.2": "Juego: rodáosla uno a otro y decid «rueda… ¡atrapa!»",

      "cam.sees.leaf": "una hoja verde",
      "cam.rw.leaf": "Recoge 3 hojas distintas y prénsalas en un libro pesado.",
      "cam.act.leaf.0": "Vida: «Las hojas beben luz del sol y ayudan al árbol a respirar.»",
      "cam.act.leaf.1": "Color: encuentra una hoja verde, una amarilla y una marrón crujiente.",
      "cam.act.leaf.2": "Clima: sopla sobre la hoja — ¡el viento hace bailar a las hojas!",

      "cam.sees.cup": "un vaso para beber",
      "cam.rw.cup": "En el baño, llena y vacía el vaso 5 veces mientras contáis.",
      "cam.act.cup.0": "Agua: ¿flotará o se hundirá este vaso? ¡Predecid y probad con cuidado!",
      "cam.act.cup.1": "Matemáticas: echa agua y sácala — «lleno» y «vacío».",
      "cam.act.cup.2": "Sonido: golpéalo suavemente con una cuchara. ¡Ding!",

      "cam.sees.teddy": "un osito de peluche abrazable",
      "cam.rw.teddy": "Dale a Teddy un abrazo de buenas noches y di tres palabras amables.",
      "cam.act.teddy.0": "Sentimientos: «¿Cómo se siente Teddy hoy? ¿Feliz? ¿Con sueño?»",
      "cam.act.teddy.1": "Imaginación: haced una fiesta del té y compartid con Teddy.",
      "cam.act.teddy.2": "Cuento: ¡deja que Teddy elija qué cuento de WonderSprout leer!",

      "cam.sees.spoon": "una cuchara de metal brillante",
      "cam.rw.spoon": "Haced un tambor suave de cuchara sobre 3 ollas o boles distintos.",
      "cam.act.spoon.0": "Sonido: golpea cucharas suavemente — olla alta, olla baja. ¡Sonidos distintos!",
      "cam.act.spoon.1": "Flota/hunde: las cucharas de metal suelen hundirse. ¡Predecid primero!",
      "cam.act.spoon.2": "Luz: ¡mira tu reflejo gracioso en la parte brillante!",

      "cam.sees.banana": "un plátano amarillo",
      "cam.rw.banana": "Pelad un plátano de verdad juntos — ¿quién se queda con qué mitad? ¡Compartir también es matemáticas!",
      "cam.act.banana.0": "Color: encuentra 3 cosas amarillas más — ¡sol, pato, limón!",
      "cam.act.banana.1": "Matemáticas: pélalo en trozos — ¿cuántos trozos? ¡Cuéntalos!",
      "cam.act.banana.2": "Sentidos: huélelo, tócalo, pruébalo. ¡Dulce y suave!",

      "cam.sees.car": "un cochecito de juguete",
      "cam.rw.car": "Haced una carrera con dos coches por una rampa de cojines. ¿Cuál es más rápido? ¡Predecid primero!",
      "cam.act.car.0": "Física: construid una rampa con un libro — ¡rampa más inclinada, coche más rápido!",
      "cam.act.car.1": "Matemáticas: cuenta las ruedas. ¿Cuántas ruedas tienen 2 coches?",
      "cam.act.car.2": "Juego: ¡luz roja, luz verde! Empujad y PARAD a la señal.",

      "cam.sees.book": "un libro de cuentos",
      "cam.rw.book": "Leed un libro hoy — y luego deja que tu hijo te lo «lea» a ti.",
      "cam.act.book.0": "Lenguaje: nombrad 3 cosas de la portada antes de abrirlo.",
      "cam.act.book.1": "Cuento: deja que tu hijo pase las páginas — ¡él manda!",
      "cam.act.book.2": "Representadlo: sed los personajes con voces grandes y tontas.",

      "cam.sees.socks": "un par de calcetines",
      "cam.rw.socks": "En la próxima colada, tu hijo se convierte en el Emparejador Oficial de Calcetines.",
      "cam.act.socks.0": "Lógica: ¡a emparejar la ropa! Encontrad parejas por color y estampado.",
      "cam.act.socks.1": "Matemáticas: cuenta los pares. ¡2 calcetines = 1 par!",
      "cam.act.socks.2": "Sentidos: suaves, elásticos, calentitos — ¿marionetas de calcetín después?",

      "cam.sees.drum": "un tambor",
      "cam.rw.drum": "Haced un tambor con una olla y una cuchara de madera — ¡a marchar y tocar!",
      "cam.act.drum.0": "Sonido: golpes fuertes y golpes susurrados. ¡Sentid la diferencia!",
      "cam.act.drum.1": "Ritmo: copia mi ritmo — ¡bum bum clap!",
      "cam.act.drum.2": "Música: marchad por la habitación al ritmo de vuestro propio tambor."
    },

    fr: {
      "cam.aiLooking": "🤖 L'IA de WonderSprout regarde…",
      "cam.tapAnother": "👆 Touche un autre objet pour le scanner",

      "cam.sees.apple": "une pomme rouge et brillante",
      "cam.rw.apple": "Coupez la pomme en deux ensemble — il y a une étoile cachée à l'intérieur !",
      "cam.act.apple.0": "Couleur : « Peux-tu trouver autre chose qui soit ROUGE ? »",
      "cam.act.apple.1": "Maths : compte les pommes sur la table — 1, 2, 3 !",
      "cam.act.apple.2": "Vie : « Les pommes poussent sur les arbres, à partir de minuscules fleurs. »",

      "cam.sees.ball": "un ballon rond et rebondissant",
      "cam.rw.ball": "Essaie le ballon dans le Terrain de physique, puis fais rebondir le VRAI ballon et compare !",
      "cam.act.ball.0": "Physique : lâche-le depuis ton genou, puis de très haut. Quel rebond est le plus grand ?",
      "cam.act.ball.1": "Formes : fais-le rouler en cercle. Les ballons sont ronds — ils roulent !",
      "cam.act.ball.2": "Jeu : faites-le rouler l'un vers l'autre en disant « roule… attrape ! »",

      "cam.sees.leaf": "une feuille verte",
      "cam.rw.leaf": "Ramasse 3 feuilles différentes et presse-les dans un gros livre.",
      "cam.act.leaf.0": "Vie : « Les feuilles boivent le soleil et aident l'arbre à respirer. »",
      "cam.act.leaf.1": "Couleur : trouve une feuille verte, une jaune, une brune craquante.",
      "cam.act.leaf.2": "Météo : souffle sur la feuille — le vent fait danser les feuilles !",

      "cam.sees.cup": "un verre à boire",
      "cam.rw.cup": "Au bain, remplis et verse le verre 5 fois en comptant.",
      "cam.act.cup.0": "Eau : ce verre va-t-il flotter ou couler ? Prédis, puis teste prudemment !",
      "cam.act.cup.1": "Maths : verse l'eau et vide-la — « plein » et « vide ».",
      "cam.act.cup.2": "Son : tape-le doucement avec une cuillère. Ding !",

      "cam.sees.teddy": "un ours en peluche tout doux",
      "cam.rw.teddy": "Fais un câlin de bonne nuit à Teddy et dis trois mots gentils.",
      "cam.act.teddy.0": "Sentiments : « Comment se sent Teddy aujourd'hui ? Content ? Endormi ? »",
      "cam.act.teddy.1": "Imaginaire : organisez un goûter et partagez avec Teddy.",
      "cam.act.teddy.2": "Histoire : laisse Teddy choisir quelle histoire WonderSprout lire !",

      "cam.sees.spoon": "une cuillère en métal brillante",
      "cam.rw.spoon": "Fais un doux tambour à cuillère sur 3 casseroles ou bols différents.",
      "cam.act.spoon.0": "Son : tape doucement les cuillères — casserole haute, casserole basse. Des sons différents !",
      "cam.act.spoon.1": "Flotte/coule : les cuillères en métal coulent souvent. Prédis d'abord !",
      "cam.act.spoon.2": "Lumière : regarde ton reflet rigolo dans le dos brillant !",

      "cam.sees.banana": "une banane jaune",
      "cam.rw.banana": "Épluchez une vraie banane ensemble — qui prend quelle moitié ? Partager, c'est aussi des maths !",
      "cam.act.banana.0": "Couleur : trouve 3 autres choses jaunes — soleil, canard, citron !",
      "cam.act.banana.1": "Maths : coupe-la en morceaux — combien de morceaux ? Compte-les !",
      "cam.act.banana.2": "Sens : sens-la, touche-la, goûte-la. Douce et moelleuse !",

      "cam.sees.car": "une petite voiture jouet",
      "cam.rw.car": "Fais la course avec deux voitures sur une rampe de coussins. Laquelle est la plus rapide ? Prédis d'abord !",
      "cam.act.car.0": "Physique : construis une rampe avec un livre — rampe plus pentue, voiture plus rapide !",
      "cam.act.car.1": "Maths : compte les roues. Combien de roues ont 2 voitures ?",
      "cam.act.car.2": "Jeu : feu rouge, feu vert ! Poussez et STOP au signal.",

      "cam.sees.book": "un livre d'histoires",
      "cam.rw.book": "Lis un livre aujourd'hui — puis laisse ton enfant te le « lire » à son tour.",
      "cam.act.book.0": "Langage : nommez 3 choses sur la couverture avant d'ouvrir.",
      "cam.act.book.1": "Histoire : laisse ton enfant tourner les pages — c'est lui le chef !",
      "cam.act.book.2": "Jouez-la : soyez les personnages avec de grosses voix rigolotes.",

      "cam.sees.socks": "une paire de chaussettes",
      "cam.rw.socks": "À la prochaine lessive, ton enfant devient l'Apparieur officiel de chaussettes.",
      "cam.act.socks.0": "Logique : l'association du linge ! Trouvez les paires par couleur et motif.",
      "cam.act.socks.1": "Maths : compte les paires. 2 chaussettes = 1 paire !",
      "cam.act.socks.2": "Sens : douces, élastiques, chaudes — des marionnettes-chaussettes ensuite ?",

      "cam.sees.drum": "un tambour",
      "cam.rw.drum": "Fabrique un tambour avec une casserole et une cuillère en bois — marche et joue !",
      "cam.act.drum.0": "Son : des battements forts et des battements chuchotés. Sens la différence !",
      "cam.act.drum.1": "Rythme : copie mon rythme — boum boum clap !",
      "cam.act.drum.2": "Musique : marchez dans la pièce au rythme de votre propre tambour."
    },

    de: {
      "cam.aiLooking": "🤖 Die WonderSprout-KI schaut…",
      "cam.tapAnother": "👆 Tippe ein anderes Objekt an, um es zu scannen",

      "cam.sees.apple": "einen glänzenden roten Apfel",
      "cam.rw.apple": "Schneidet den Apfel zusammen durch — innen versteckt sich ein Stern!",
      "cam.act.apple.0": "Farbe: „Kannst du noch etwas finden, das ROT ist?“",
      "cam.act.apple.1": "Mathe: Zählt die Äpfel auf dem Tisch — 1, 2, 3!",
      "cam.act.apple.2": "Leben: „Äpfel wachsen an Bäumen, aus winzigen Blüten.“",

      "cam.sees.ball": "einen runden, hüpfenden Ball",
      "cam.rw.ball": "Probiere den Ball im Physik-Spielplatz aus, dann lass den ECHTEN Ball hüpfen und vergleiche!",
      "cam.act.ball.0": "Physik: Lass ihn vom Knie fallen, dann von ganz oben. Welcher Sprung ist größer?",
      "cam.act.ball.1": "Formen: Roll ihn im Kreis. Bälle sind rund — sie rollen!",
      "cam.act.ball.2": "Spiel: Rollt ihn euch zu und sagt „rollen… fangen!“",

      "cam.sees.leaf": "ein grünes Blatt",
      "cam.rw.leaf": "Sammle 3 verschiedene Blätter und presse sie in ein schweres Buch.",
      "cam.act.leaf.0": "Leben: „Blätter trinken Sonnenlicht und helfen dem Baum beim Atmen.“",
      "cam.act.leaf.1": "Farbe: Finde ein grünes, ein gelbes und ein knusprig braunes Blatt.",
      "cam.act.leaf.2": "Wetter: Puste das Blatt an — Wind lässt Blätter tanzen!",

      "cam.sees.cup": "einen Trinkbecher",
      "cam.rw.cup": "Fülle und gieße den Becher beim Baden 5 Mal und zählt dabei.",
      "cam.act.cup.0": "Wasser: Schwimmt oder sinkt dieser Becher? Vorhersagen, dann vorsichtig testen!",
      "cam.act.cup.1": "Mathe: Wasser rein- und rausgießen — „voll“ und „leer“.",
      "cam.act.cup.2": "Klang: Tipp ihn sanft mit einem Löffel an. Ding!",

      "cam.sees.teddy": "einen kuscheligen Teddybären",
      "cam.rw.teddy": "Gib Teddy eine Gute-Nacht-Umarmung und sag drei nette Worte.",
      "cam.act.teddy.0": "Gefühle: „Wie fühlt sich Teddy heute? Glücklich? Müde?“",
      "cam.act.teddy.1": "So-tun-als-ob: Macht eine Teeparty und teilt mit Teddy.",
      "cam.act.teddy.2": "Geschichte: Lass Teddy aussuchen, welche WonderSprout-Geschichte ihr lest!",

      "cam.sees.spoon": "einen glänzenden Metalllöffel",
      "cam.rw.spoon": "Macht ein sanftes Löffeltrommeln auf 3 verschiedenen Töpfen oder Schüsseln.",
      "cam.act.spoon.0": "Klang: Tipp Löffel sanft an — hoher Topf, tiefer Topf. Verschiedene Klänge!",
      "cam.act.spoon.1": "Schwimmt/Sinkt: Metalllöffel sinken meist. Erst vorhersagen!",
      "cam.act.spoon.2": "Licht: Schau dir dein lustiges Spiegelbild in der glänzenden Rückseite an!",

      "cam.sees.banana": "eine gelbe Banane",
      "cam.rw.banana": "Schält zusammen eine echte Banane — wer bekommt welche Hälfte? Teilen ist auch Mathe!",
      "cam.act.banana.0": "Farbe: Finde 3 weitere gelbe Dinge — Sonne, Ente, Zitrone!",
      "cam.act.banana.1": "Mathe: Zerlegt sie in Stücke — wie viele Stücke? Zählt sie!",
      "cam.act.banana.2": "Sinne: Riech daran, fühl sie, probier sie. Süß und weich!",

      "cam.sees.car": "ein kleines Spielzeugauto",
      "cam.rw.car": "Lasst zwei Autos eine Kissenrampe herunterfahren. Welches ist schneller? Erst vorhersagen!",
      "cam.act.car.0": "Physik: Baut eine Rampe aus einem Buch — steilere Rampe, schnelleres Auto!",
      "cam.act.car.1": "Mathe: Zählt die Räder. Wie viele Räder haben 2 Autos?",
      "cam.act.car.2": "Spiel: Rotes Licht, grünes Licht! Schieben und STOP auf Kommando.",

      "cam.sees.book": "ein Bilderbuch",
      "cam.rw.book": "Lest heute ein Buch — und dann lass dein Kind es dir „vorlesen“.",
      "cam.act.book.0": "Sprache: Benennt 3 Dinge auf dem Cover, bevor ihr aufschlagt.",
      "cam.act.book.1": "Geschichte: Lass dein Kind die Seiten umblättern — es ist der Chef!",
      "cam.act.book.2": "Spielt es nach: Seid die Figuren mit großen, albernen Stimmen.",

      "cam.sees.socks": "ein Paar Socken",
      "cam.rw.socks": "Beim nächsten Wäschewaschen wird dein Kind der Offizielle Socken-Zuordner.",
      "cam.act.socks.0": "Logik: Wäsche zuordnen! Findet Paare nach Farbe und Muster.",
      "cam.act.socks.1": "Mathe: Zählt die Paare. 2 Socken = 1 Paar!",
      "cam.act.socks.2": "Sinne: weich, dehnbar, warm — als Nächstes Sockenpuppen?",

      "cam.sees.drum": "eine Trommel",
      "cam.rw.drum": "Baut eine Trommel aus einem Topf und einem Holzlöffel — marschiert und spielt!",
      "cam.act.drum.0": "Klang: laute Schläge und Flüstertrommeln. Spürt den Unterschied!",
      "cam.act.drum.1": "Rhythmus: Kopiere meinen Takt — bumm bumm klatsch!",
      "cam.act.drum.2": "Musik: Marschiert im Zimmer zu eurem eigenen Trommeltakt."
    },

    ar: {
      "cam.aiLooking": "🤖 ذكاء WonderSprout ينظر…",
      "cam.tapAnother": "👆 المس غرضًا آخر لمسحه",

      "cam.sees.apple": "تفاحة حمراء لامعة",
      "cam.rw.apple": "اقطعا التفاحة نصفين معًا — بالداخل نجمة مخبّأة!",
      "cam.act.apple.0": "اللون: «هل تجد شيئًا آخر لونه أحمر؟»",
      "cam.act.apple.1": "رياضيات: عدّ التفاحات على الطاولة — ١، ٢، ٣!",
      "cam.act.apple.2": "الحياة: «التفاح ينمو على الأشجار من زهور صغيرة جدًا.»",

      "cam.sees.ball": "كرة مستديرة قافزة",
      "cam.rw.ball": "جرّب الكرة في ملعب الفيزياء، ثم أوقفز بالكرة الحقيقية وقارن!",
      "cam.act.ball.0": "فيزياء: أفلتها من رُكبتك، ثم من الأعلى. أي قفزة أكبر؟",
      "cam.act.ball.1": "أشكال: دحرجها في دائرة. الكرات مستديرة — تتدحرج!",
      "cam.act.ball.2": "لعبة: دحرجاها لبعضكما وقولا «تدحرج… أمسك!»",

      "cam.sees.leaf": "ورقة خضراء",
      "cam.rw.leaf": "اجمع ٣ أوراق مختلفة واضغطها في كتاب ثقيل.",
      "cam.act.leaf.0": "الحياة: «الأوراق تشرب ضوء الشمس وتساعد الشجرة على التنفس.»",
      "cam.act.leaf.1": "اللون: ابحث عن ورقة خضراء، وأخرى صفراء، وأخرى بنية مقرمشة.",
      "cam.act.leaf.2": "الطقس: انفخ على الورقة — الريح تجعل الأوراق ترقص!",

      "cam.sees.cup": "كوب للشرب",
      "cam.rw.cup": "وقت الاستحمام، املأ الكوب واسكبه ٥ مرات مع العدّ.",
      "cam.act.cup.0": "ماء: هل يطفو هذا الكوب أم يغرق؟ توقّع، ثم اختبر بأمان!",
      "cam.act.cup.1": "رياضيات: اسكب الماء وأفرغه — «ممتلئ» و«فارغ».",
      "cam.act.cup.2": "صوت: اطرُق عليه بملعقة بلطف. طيـن!",

      "cam.sees.teddy": "دب لعبة ناعم للعناق",
      "cam.rw.teddy": "أعطِ تيدي عناق ليلة سعيدة وقل ثلاث كلمات لطيفة.",
      "cam.act.teddy.0": "مشاعر: «كيف يشعر تيدي اليوم؟ سعيد؟ ناعس؟»",
      "cam.act.teddy.1": "تخيّل: أقيما حفلة شاي وتشاركا مع تيدي.",
      "cam.act.teddy.2": "قصة: دع تيدي يختار أي قصة من WonderSprout تقرآن!",

      "cam.sees.spoon": "ملعقة معدنية لامعة",
      "cam.rw.spoon": "اصنعا طبلة ملعقة لطيفة على ٣ أوانٍ أو أوعية مختلفة.",
      "cam.act.spoon.0": "صوت: اطرُق الملاعق بلطف — وعاء مرتفع، وعاء منخفض. أصوات مختلفة!",
      "cam.act.spoon.1": "طفو/غرق: الملاعق المعدنية تغرق عادة. توقّع أولًا!",
      "cam.act.spoon.2": "ضوء: انظر إلى انعكاسك المضحك في الظهر اللامع!",

      "cam.sees.banana": "موزة صفراء",
      "cam.rw.banana": "قشّرا موزة حقيقية معًا — من يأخذ أي نصف؟ المشاركة رياضيات أيضًا!",
      "cam.act.banana.0": "اللون: ابحث عن ٣ أشياء صفراء أخرى — شمس، بطة، ليمون!",
      "cam.act.banana.1": "رياضيات: قشّرها إلى قطع — كم قطعة؟ عدّها!",
      "cam.act.banana.2": "حواس: شمّها، المسها، تذوّقها. حلوة وناعمة!",

      "cam.sees.car": "سيارة لعبة صغيرة",
      "cam.rw.car": "تسابقا بسيارتين على منحدر من الوسائد. أيهما أسرع؟ توقّعا أولًا!",
      "cam.act.car.0": "فيزياء: ابنيَا منحدرًا من كتاب — منحدر أشد ميلًا، سيارة أسرع!",
      "cam.act.car.1": "رياضيات: عدّا العجلات. كم عجلة لدى سيارتين؟",
      "cam.act.car.2": "لعبة: ضوء أحمر، ضوء أخضر! ادفعا وتوقّفا عند الأمر.",

      "cam.sees.book": "كتاب قصص",
      "cam.rw.book": "اقرآ كتابًا اليوم — ثم دع طفلك «يقرؤه» لك.",
      "cam.act.book.0": "لغة: سمّيا ٣ أشياء على الغلاف قبل الفتح.",
      "cam.act.book.1": "قصة: دع طفلك يقلّب الصفحات — هو الرئيس!",
      "cam.act.book.2": "مثّلاها: كونا الشخصيات بأصوات كبيرة ومضحكة.",

      "cam.sees.socks": "زوج جوارب",
      "cam.rw.socks": "عند الغسيل القادم، يصبح طفلك المطابق الرسمي للجوارب.",
      "cam.act.socks.0": "منطق: مطابقة الغسيل! ابحثا عن الأزواج باللون والنقش.",
      "cam.act.socks.1": "رياضيات: عدّا الأزواج. جوربان = زوج واحد!",
      "cam.act.socks.2": "حواس: ناعمة، مطاطية، دافئة — دمى جوارب بعدها؟",

      "cam.sees.drum": "طبلة",
      "cam.rw.drum": "اصنعا طبلة من وعاء وملعقة خشبية — امشيا والعبا!",
      "cam.act.drum.0": "صوت: ضربات عالية وضربات همس. اشعرا بالفرق!",
      "cam.act.drum.1": "إيقاع: انسخ إيقاعي — بوم بوم تصفيق!",
      "cam.act.drum.2": "موسيقى: امشيا في الغرفة على إيقاع طبلتكما."
    },

    zh: {
      "cam.aiLooking": "🤖 WonderSprout 智能助手正在看…",
      "cam.tapAnother": "👆 点另一个物品来扫一扫",

      "cam.sees.apple": "一个亮亮的红苹果",
      "cam.rw.apple": "一起把苹果切成两半 —— 里面藏着一颗星星！",
      "cam.act.apple.0": "颜色：「你还能找到什么是红色的吗？」",
      "cam.act.apple.1": "数学：数一数桌上的苹果 —— 1、2、3！",
      "cam.act.apple.2": "生活：「苹果长在树上，是从小小的花变来的。」",

      "cam.sees.ball": "一个圆圆会弹的球",
      "cam.rw.ball": "在物理游乐场玩一玩这个球，再拍拍真正的球，比一比！",
      "cam.act.ball.0": "物理：先从膝盖高度放下，再从高处放下。哪一次弹得更高？",
      "cam.act.ball.1": "形状：让它转个圈。球是圆的 —— 会滚！",
      "cam.act.ball.2": "游戏：互相滚给对方，一边说「滚……接住！」",

      "cam.sees.leaf": "一片绿叶",
      "cam.rw.leaf": "捡 3 片不同的叶子，夹在一本厚厚的书里压一压。",
      "cam.act.leaf.0": "生活：「叶子喝着阳光，还帮大树呼吸。」",
      "cam.act.leaf.1": "颜色：找一片绿叶、一片黄叶、一片脆脆的棕叶。",
      "cam.act.leaf.2": "天气：对着叶子吹一吹 —— 风会让叶子跳舞！",

      "cam.sees.cup": "一个喝水的杯子",
      "cam.rw.cup": "洗澡时，一边数数一边把杯子装满再倒掉，做 5 次。",
      "cam.act.cup.0": "水：这个杯子会浮还是会沉？先猜一猜，再安全地试一试！",
      "cam.act.cup.1": "数学：把水倒进去又倒出来 —— 「满」和「空」。",
      "cam.act.cup.2": "声音：用勺子轻轻敲一敲。叮！",

      "cam.sees.teddy": "一只软软抱抱的泰迪熊",
      "cam.rw.teddy": "给泰迪一个晚安抱抱，再说三句好听的话。",
      "cam.act.teddy.0": "感受：「泰迪今天感觉怎么样？开心？还是困了？」",
      "cam.act.teddy.1": "假装游戏：开一场茶会，和泰迪一起分享。",
      "cam.act.teddy.2": "故事：让泰迪来选今天读哪一个 WonderSprout 故事！",

      "cam.sees.spoon": "一把亮亮的金属勺子",
      "cam.rw.spoon": "用 3 个不同的锅或碗，做一个轻轻的勺子小鼓。",
      "cam.act.spoon.0": "声音：轻轻敲勺子 —— 高一点的锅、低一点的锅。声音不一样！",
      "cam.act.spoon.1": "浮/沉：金属勺子通常会沉。先猜一猜！",
      "cam.act.spoon.2": "光：在亮亮的背面看看你搞怪的倒影！",

      "cam.sees.banana": "一根黄香蕉",
      "cam.rw.banana": "一起剥一根真香蕉 —— 谁吃哪一半？分享也是数学哦！",
      "cam.act.banana.0": "颜色：再找 3 样黄色的东西 —— 太阳、鸭子、柠檬！",
      "cam.act.banana.1": "数学：把它剥成几块 —— 有几块？数一数！",
      "cam.act.banana.2": "感官：闻一闻、摸一摸、尝一尝。甜甜软软的！",

      "cam.sees.car": "一辆小玩具车",
      "cam.rw.car": "用垫子搭个斜坡，让两辆车比赛。哪辆更快？先猜一猜！",
      "cam.act.car.0": "物理：用一本书搭斜坡 —— 坡越陡，车越快！",
      "cam.act.car.1": "数学：数一数轮子。两辆车一共有几个轮子？",
      "cam.act.car.2": "游戏：红灯、绿灯！听口令推和停。",

      "cam.sees.book": "一本故事书",
      "cam.rw.book": "今天读一本书 —— 然后让孩子「读」给你听。",
      "cam.act.book.0": "语言：翻开之前，先说出封面上的 3 样东西。",
      "cam.act.book.1": "故事：让孩子来翻页 —— 他说了算！",
      "cam.act.book.2": "演一演：用夸张又搞笑的声音扮演书里的角色。",

      "cam.sees.socks": "一双袜子",
      "cam.rw.socks": "下次洗衣服时，让孩子当「袜子配对小官」。",
      "cam.act.socks.0": "逻辑：洗好衣服来配对！按颜色和花纹找一双双。",
      "cam.act.socks.1": "数学：数一数有几双。2 只袜子 = 1 双！",
      "cam.act.socks.2": "感官：软软的、有弹性、暖暖的 —— 接下来做袜子手偶？",

      "cam.sees.drum": "一面鼓",
      "cam.rw.drum": "用一口锅和一把木勺做一面鼓 —— 边走边敲！",
      "cam.act.drum.0": "声音：大声的鼓点和轻轻的鼓点。感觉一下有什么不同！",
      "cam.act.drum.1": "节奏：跟着我的节拍 —— 咚咚 啪！",
      "cam.act.drum.2": "音乐：踩着你自己敲的鼓点，在房间里走一走。"
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
