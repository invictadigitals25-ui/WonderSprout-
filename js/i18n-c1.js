/* WonderSprout learning content — EN / AR / ES / FR / DE */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  WSI18n.extend("en", {
    t: { color: ["Colour Lab", "Find it & mix it!"], math: ["Math Wonder Lab", "Count & compare!"], physics: ["Physics Play", "Drop & bounce!"], sound: ["Sound Lab", "Play & listen!"], life: ["Life Lab", "Grow a plant!"], weather: ["Weather World", "Sun, rain & wind!"], space: ["Space World", "Earth, Moon & Sun!"], water: ["Float & Sink", "Predict & splash!"], shapes: ["Shape Safari", "Find the shapes!"], pattern: ["Pattern Party", "What comes next?"], sorting: ["Sorting Station", "Sort it out!"], animals: ["Animal Friends", "Hear them talk!"], shadows: ["Shadow Puppets", "Light & shadow play!"], flags: ["Flags & Countries", "All 195 flags of the world!"], english: ["First English", "Words & little sentences!"] },
    i: {
      color: [["RED", "This is red! Like an apple!"], ["BLUE", "This is blue! Like the sky!"], ["YELLOW", "This is yellow! Like the sun!"], ["GREEN", "This is green! Like grass!"], ["PINK", "This is pink! Like a flamingo!"], ["BROWN", "This is brown! Like a teddy bear!"], ["TEAL", "This is teal! Like a duck egg!"], ["LAVENDER", "This is lavender! Like the flower!"]],
      math: [["ONE", "One apple! One!"], ["TWO", "Two apples! One, two!"], ["THREE", "Three apples! One, two, three!"], ["…TO 20!", "One, two, three — all the way to twenty!"]],
      physics: [["DROP!", "Let it go, and it falls down!"], ["BOUNCE!", "It hits the floor and boings back up!"]],
      sound: [["LOUD!", "Loud! Like a lion! Roar!"], ["quiet…", "Quiet… like a little mouse. Shhh."], ["HIGH & LOW", "Birds sing high! Drums go low!"]],
      life: [["SEED", "A tiny seed sleeps in the soil."], ["SPROUT", "Water and sun say: hello, sprout!"], ["IT GREW!", "It grew! Big and bright!"]],
      weather: [["SUNNY", "Sunny! Warm and bright!"], ["RAINY", "Rainy! Splash, splash, splash!"], ["WINDY", "Windy! Whoosh! The leaves dance!"]],
      space: [["EARTH", "Earth! Our home. The blue one!"], ["MOON", "The Moon! She visits again and again!"], ["SUN", "The Sun! Our daytime star!"]],
      water: [["FLOAT", "Float! It stays on top, like a boat!"], ["SINK", "Sink! It goes down, like a stone!"]],
      shapes: [["CIRCLE", "Circle! Round and round, like a plate!"], ["SQUARE", "Square! Four straight sides, like a box!"], ["TRIANGLE", "Triangle! Three corners, like a pizza slice!"]],
      pattern: [["A PATTERN!", "Red, blue, red, blue! It repeats!"], ["WHAT'S NEXT?", "What comes next? You can guess!"]],
      sorting: [["SORT!", "Sort! Socks go with socks!"], ["GROUPS!", "Shirts go with shirts! We make groups!"]],
      animals: [["COW", "Cow! The cow says moo!"], ["SHEEP", "Sheep! The sheep says baa!"], ["DOG", "Dog! The dog says woof woof!"]],
      shadows: [["LIGHT", "Light travels straight, like an arrow!"], ["SHADOW", "The teddy blocks the light and makes a shadow!"]],
    },
    p: { tapColour: "Tap the {c} balloon!", wrongColour: "That's {c}. Find {t}!", countApples: "Tap every apple! 🍎", byTens: "Count by TENS! Tap the baskets! 🧺", bigger: "Tap the <span class='hl'>BIGGER</span> number!", smaller: "Tap the <span class='hl'>SMALLER</span> number!", moreLess: "Tap the plate with {m} cookies! 🍪", tapShape: "Tap the {s}!", wrongShape: "That's a {c}. Find the {t}!", whatNext: "What comes next? 🔮", whereGo: "Where does the {x} go?", splashIn: "Tap an object to splash it in! 💦", predict: "Predict! Will the {x} sink or float?", findAnimal: "Tap the {a}! 🔎", whoSays: "Who says {s}? 🔊", whoShadow: "Who makes this shadow? 🔦", makeX: "Make {x}! Tap the ingredients!", whichFlag: "Which flag is {c}?", whichCountry: "Which country has this flag?", tapWord: "Tap the {w}! 🔊", hearWord: "Tap a picture — hear the word! 🔊", buildWords: "Tap the words in order! 🧩", allFound: "You found them all! 🎉" },
  });

  WSI18n.extend("ar", {
    t: { color: ["مختبر الألوان", "اعثر عليها واملزجها!"], math: ["مختبر الرياضيات", "عُدّ وقارن!"], physics: ["لعب الفيزياء", "أفلِط وارْتداد!"], sound: ["مختبر الصوت", "العب واستمع!"], life: ["مختبر الحياة", "ازرع نبتة!"], weather: ["عالم الطقس", "شمس ومطر وريح!"], space: ["عالم الفضاء", "الأرض والقمر والشمس!"], water: ["يطفو أم يغوص", "خمّن ورشّ!"], shapes: ["سفاري الأشكال", "اعثر على الأشكال!"], pattern: ["حفلة الأنماط", "ماذا يأتي بعدها؟"], sorting: ["محطة الفرز", "رتّبها!"], animals: ["أصدقاؤنا الحيوانات", "اسمع أصواتها!"], shadows: ["خيال الظل", "لعب الضوء والظل!"], flags: ["الأعلام والبلاد", "أعلام العالم الـ195!"], english: ["إنجليزيتي الأولى", "كلمات وجمل صغيرة!"] },
    i: {
      color: [["أحمر", "هذا أحمر! مثل التفاحة!"], ["أزرق", "هذا أزرق! مثل السماء!"], ["أصفر", "هذا أصفر! مثل الشمس!"], ["أخضر", "هذا أخضر! مثل العشب!"], ["وردي", "هذا وردي! مثل الفلامنجو!"], ["بني", "هذا بني! مثل الدب!"], ["أزرق مخضرّ", "هذا تركوازي! مثل بيضة البط!"], ["ليلي", "هذا ليلكي! مثل الزهرة!"]],
      math: [["واحد", "تفاحة واحدة! واحد!"], ["اثنان", "تفاحتان! واحد، اثنان!"], ["ثلاثة", "ثلاث تفاحات! واحد، اثنان، ثلاثة!"], ["…إلى ٢٠!", "واحد اثنان ثلاثة — حتى العشرين!"]],
      physics: [["اسقط!", "أفلِتها فتسقط!"], ["ارتداد!", "تلمس الأرض وترتد!"]],
      sound: [["عالٍ!", "عالٍ! مثل الأسد! زئير!"], ["هادئ…", "هادئ… مثل الفأر الصغير. ششش."], ["عالٍ ومنخفض", "العصافير تغني عاليًا والطبول منخفضة!"]],
      life: [["بذرة", "بذرة صغيرة نائمة في التربة."], ["برعم", "الماء والشمس يقولان: مرحبًا أيها البرعم!"], ["كبرت!", "كبرت! كبيرة ومشرقة!"]],
      weather: [["مشمس", "مشمس! دافئ ومضيء!"], ["ممطر", "ممطر! طقطقة طقطقة طقطقة!"], ["عاصف", "رياح! هوووش! ترقص الأوراق!"]],
      space: [["الأرض", "الأرض! بيتنا. الكوكب الأزرق!"], ["القمر", "القمر! يزورنا مرة بعد مرة!"], ["الشمس", "الشمس! نجم نهاري!"]],
      water: [["يطفو", "يطفو! يبقى فوق مثل القارب!"], ["يغوص", "يغوص! ينزل مثل الحجر!"]],
      shapes: [["دائرة", "دائرة! مستديرة مثل الصحن!"], ["مربع", "مربع! أربعة أضلاع مستقيمة مثل الصندوق!"], ["مثلث", "مثلث! ثلاث زوايا مثل قطعة البيتزا!"]],
      pattern: [["نمط!", "أحمر أزرق أحمر أزرق! يتكرر!"], ["ماذا بعد؟", "ماذا يأتي بعد؟ يمكنك التخمين!"]],
      sorting: [["افرز!", "افرز! الجوارب مع الجوارب!"], ["مجموعات!", "القمصان مع القمصان! نكوّن مجموعات!"]],
      animals: [["بقرة", "بقرة! البقرة تقول مو!"], ["خروف", "خروف! الخروف يقول ماع!"], ["كلب", "كلب! الكلب يقول هو هو!"]],
      shadows: [["ضوء", "يسير الضوء مستقيمًا مثل السهم!"], ["ظل", "الدبدوب يحجب الضوء فيصنع ظلًا!"]],
    },
    p: { tapColour: "المس البالون ال{c}!", wrongColour: "هذا {c}. اعثر على ال{t}!", countApples: "المس كل التفاح! 🍎", byTens: "عُدّ بالعشرات! المس السلال! 🧺", bigger: "المس الرقم الأكبر!", smaller: "المس الرقم الأصغر!", moreLess: "المس الصحن فيه {m} كعكات! 🍪", tapShape: "المس ال{s}!", wrongShape: "هذا {c}. اعثر على ال{t}!", whatNext: "ماذا يأتي بعد؟ 🔮", whereGo: "أين يذهب ال{x}؟", splashIn: "المس شيئًا ليرش في الماء! 💦", predict: "خمّن! هل {x} يغوص أم يطفو؟", findAnimal: "المس ال{a}! 🔎", whoSays: "من يقول {s}؟ 🔊", whoShadow: "من يصنع هذا الظل؟ 🔦", makeX: "اصنع {x}! المس المكوّنات!", whichFlag: "أي علم هو علم {c}؟", whichCountry: "أي بلد له هذا العلم؟", tapWord: "المس ال{w}! 🔊", hearWord: "المس صورة واسمع الكلمة! 🔊", buildWords: "المس الكلمات بالترتيب! 🧩", allFound: "وجدتها كلها! 🎉" },
  });

  WSI18n.extend("es", {
    t: { color: ["Laboratorio de Colores", "¡Encuéntralo y mézclalo!"], math: ["Laboratorio de Mates", "¡Cuenta y compara!"], physics: ["Juego de Física", "¡Suelta y rebota!"], sound: ["Laboratorio de Sonido", "¡Toca y escucha!"], life: ["Laboratorio de Vida", "¡Cultiva una planta!"], weather: ["Mundo del Clima", "¡Sol, lluvia y viento!"], space: ["Mundo Espacial", "¡Tierra, Luna y Sol!"], water: ["Flota o se hunde", "¡Predice y salpica!"], shapes: ["Safari de Formas", "¡Encuentra las formas!"], pattern: ["Fiesta de Patrones", "¿Qué viene después?"], sorting: ["Estación de Clasificar", "¡Ordénalo!"], animals: ["Amigos Animales", "¡Escúchalos hablar!"], shadows: ["Sombras Chinas", "¡Luz y sombra!"], flags: ["Banderas y Países", "¡Las 195 banderas!"], english: ["Primer Inglés", "¡Palabras y frases!"] },
    i: {
      color: [["ROJO", "¡Esto es rojo! ¡Como una manzana!"], ["AZUL", "¡Esto es azul! ¡Como el cielo!"], ["AMARILLO", "¡Esto es amarillo! ¡Como el sol!"], ["VERDE", "¡Esto es verde! ¡Como el césped!"], ["ROSA", "¡Esto es rosa! ¡Como un flamenco!"], ["MARRÓN", "¡Esto es marrón! ¡Como un osito!"], ["VERDE AZULADO", "¡Esto es turquesa! ¡Como un huevo de pato!"], ["LILA", "¡Esto es lila! ¡Como la flor!"]],
      math: [["UNO", "¡Una manzana! ¡Uno!"], ["DOS", "¡Dos manzanas! ¡Uno, dos!"], ["TRES", "¡Tres manzanas! ¡Uno, dos, tres!"], ["…¡HASTA 20!", "¡Uno, dos, tres… hasta veinte!"]],
      physics: [["¡CAE!", "¡Suéltala y cae!"], ["¡BOTA!", "¡Toca el suelo y boing!"]],
      sound: [["¡FUERTE!", "¡Fuerte! ¡Como un león! ¡Grrr!"], ["suave…", "Suave… como un ratoncito. Shhh."], ["AGUDO Y GRAVE", "¡Los pájaros cantan agudo! ¡Los tambores grave!"]],
      life: [["SEMILLA", "Una semillita duerme en la tierra."], ["BROTE", "Agua y sol dicen: ¡hola, brote!"], ["¡CRECIÓ!", "¡Creció! ¡Grande y brillante!"]],
      weather: [["SOLEADO", "¡Soleado! ¡Cálido y brillante!"], ["LLUVIOSO", "¡Lluvioso! ¡Pli, pli, pli!"], ["VENTOSO", "¡Ventoso! ¡Fiuuu! ¡Bailan las hojas!"]],
      space: [["TIERRA", "¡La Tierra! ¡Nuestro hogar azul!"], ["LUNA", "¡La Luna! ¡Nos visita una y otra vez!"], ["SOL", "¡El Sol! ¡Nuestra estrella de día!"]],
      water: [["FLOTA", "¡Flota! ¡Se queda arriba como un barco!"], ["SE HUNDE", "¡Se hunde! ¡Baja como una piedra!"]],
      shapes: [["CÍRCULO", "¡Círculo! Redondo como un plato!"], ["CUADRADO", "¡Cuadrado! Cuatro lados rectos como una caja!"], ["TRIÁNGULO", "¡Triángulo! Tres puntas como una pizza!"]],
      pattern: [["¡UN PATRÓN!", "¡Rojo, azul, rojo, azul! ¡Se repite!"], ["¿Y AHORA?", "¿Qué viene después? ¡Tú puedes!"]],
      sorting: [["¡ORDENA!", "¡Calcetines con calcetines!"], ["¡GRUPOS!", "¡Camisas con camisas! ¡Hacemos grupos!"]],
      animals: [["VACA", "¡La vaca! ¡Dice muuu!"], ["OVEJA", "¡La oveja! ¡Dice beee!"], ["PERRO", "¡El perro! ¡Dice guau guau!"]],
      shadows: [["LUZ", "¡La luz viaja recta como una flecha!"], ["SOMBRA", "¡El osito tapa la luz y hace sombra!"]],
    },
    p: { tapColour: "¡Toca el globo {c}!", wrongColour: "Es {c}. ¡Busca el {t}!", countApples: "¡Toca todas las manzanas! 🍎", byTens: "¡Cuenta de DIEZ en DIEZ! 🧺", bigger: "¡Toca el número MAYOR!", smaller: "¡Toca el número MENOR!", moreLess: "¡Toca el plato con {m} galletas! 🍪", tapShape: "¡Toca el {s}!", wrongShape: "Es un {c}. ¡Busca el {t}!", whatNext: "¿Qué viene después? 🔮", whereGo: "¿Adónde va el {x}?", splashIn: "¡Toca un objeto para salpicar! 💦", predict: "¡Predice! ¿El {x} se hunde o flota?", findAnimal: "¡Toca el {a}! 🔎", whoSays: "¿Quién dice {s}? 🔊", whoShadow: "¿De quién es esta sombra? 🔦", makeX: "¡Haz {x}! ¡Toca los ingredientes!", whichFlag: "¿Qué bandera es de {c}?", whichCountry: "¿De qué país es esta bandera?", tapWord: "¡Toca la {w}! 🔊", hearWord: "Toca un dibujo y oye la palabra! 🔊", buildWords: "¡Toca las palabras en orden! 🧩", allFound: "¡Los encontraste todos! 🎉" },
  });

  WSI18n.extend("fr", {
    t: { color: ["Labo des Couleurs", "Trouve et mélange !"], math: ["Labo des Maths", "Compte et compare !"], physics: ["Jeux de Physique", "Lâche et rebondis !"], sound: ["Labo des Sons", "Joue et écoute !"], life: ["Labo de la Vie", "Fais pousser une plante !"], weather: ["Monde du Temps", "Soleil, pluie et vent !"], space: ["Monde de l'Espace", "Terre, Lune et Soleil !"], water: ["Flotte ou coule", "Prédis et splash !"], shapes: ["Safari des Formes", "Trouve les formes !"], pattern: ["Fête des Motifs", "Que vient-il ensuite ?"], sorting: ["Station de Tri", "Trie tout !"], animals: ["Amis Animaux", "Écoute-les parler !"], shadows: ["Ombres Chinoises", "Lumière et ombre !"], flags: ["Drapeaux & Pays", "Les 195 drapeaux !"], english: ["Premier Anglais", "Mots et petites phrases !"] },
    i: {
      color: [["ROUGE", "C'est rouge ! Comme une pomme !"], ["BLEU", "C'est bleu ! Comme le ciel !"], ["JAUNE", "C'est jaune ! Comme le soleil !"], ["VERT", "C'est vert ! Comme l'herbe !"], ["ROSE", "C'est rose ! Comme un flamant !"], ["MARRON", "C'est marron ! Comme un doudou !"], ["TURQUOISE", "C'est turquoise ! Comme un œuf de canard !"], ["LILAS", "C'est lilas ! Comme la fleur !"]],
      math: [["UN", "Une pomme ! Un !"], ["DEUX", "Deux pommes ! Un, deux !"], ["TROIS", "Trois pommes ! Un, deux, trois !"], ["…JUSQU'À 20 !", "Un, deux, trois… jusqu'à vingt !"]],
      physics: [["TOMBE !", "Lâche-la, et ça tombe !"], ["REBOND !", "Ça touche le sol et boing !"]],
      sound: [["FORT !", "Fort ! Comme un lion ! Roar !"], ["doucement…", "Doucement… comme une petite souris. Chut."], ["AIGU ET GRAVE", "Les oiseaux chantent aigu ! Les tambours grave !"]],
      life: [["GRAINE", "Une petite graine dort dans la terre."], ["POUSSE", "L'eau et le soleil disent : bonjour pousse !"], ["ÇA A POUSSÉ !", "Ça a poussé ! Grand et lumineux !"]],
      weather: [["ENSOLEILLÉ", "Ensoleillé ! Chaud et lumineux !"], ["PLUVIEUX", "Pluvieux ! Floc, floc, floc !"], ["VENTEUX", "Venteux ! Fiuuu ! Les feuilles dansent !"]],
      space: [["TERRE", "La Terre ! Notre maison bleue !"], ["LUNE", "La Lune ! Elle revient encore et encore !"], ["SOLEIL", "Le Soleil ! Notre étoile du jour !"]],
      water: [["FLOTTE", "Ça flotte ! Ça reste dessus comme un bateau !"], ["COULE", "Ça coule ! Ça descend comme un caillou !"]],
      shapes: [["ROND", "Un cercle ! Rond comme une assiette !"], ["CARRÉ", "Un carré ! Quatre côtés droits comme une boîte !"], ["TRIANGLE", "Un triangle ! Trois coins comme une part de pizza !"]],
      pattern: [["UN MOTIF !", "Rouge, bleu, rouge, bleu ! Ça se répète !"], ["ET APRÈS ?", "Que vient-il ensuite ? Tu peux deviner !"]],
      sorting: [["TRIE !", "Les chaussettes avec les chaussettes !"], ["GROUPES !", "Les chemises avec les chemises !"]],
      animals: [["VACHE", "La vache ! Elle fait meuh !"], ["MOUTON", "Le mouton ! Il fait bêê !"], ["CHIEN", "Le chien ! Il fait ouah ouah !"]],
      shadows: [["LUMIÈRE", "La lumière voyage tout droit comme une flèche !"], ["OMBRE", "Le doudou bloque la lumière et fait une ombre !"]],
    },
    p: { tapColour: "Touche le ballon {c} !", wrongColour: "C'est {c}. Trouve le {t} !", countApples: "Touche toutes les pommes ! 🍎", byTens: "Compte de DIX en DIX ! 🧺", bigger: "Touche le PLUS GRAND nombre !", smaller: "Touche le PLUS PETIT nombre !", moreLess: "Touche l'assiette avec {m} cookies ! 🍪", tapShape: "Touche le {s} !", wrongShape: "C'est un {c}. Trouve le {t} !", whatNext: "Que vient-il ensuite ? 🔮", whereGo: "Où va le {x} ?", splashIn: "Touche un objet pour splasher ! 💦", predict: "Prédic ! Le {x} flotte ou coule ?", findAnimal: "Touche le {a} ! 🔎", whoSays: "Qui fait {s} ? 🔊", whoShadow: "Qui fait cette ombre ? 🔦", makeX: "Fais {x} ! Touche les ingrédients !", whichFlag: "Quel drapeau est celui de {c} ?", whichCountry: "À quel pays est ce drapeau ?", tapWord: "Touche la {w} ! 🔊", hearWord: "Touche une image — écoute le mot ! 🔊", buildWords: "Touche les mots dans l'ordre ! 🧩", allFound: "Tu as tout trouvé ! 🎉" },
  });

  WSI18n.extend("de", {
    t: { color: ["Farben-Labor", "Finde & mische!"], math: ["Mathe-Labor", "Zähle & vergleiche!"], physics: ["Physik-Spiel", "Fallen & hüpfen!"], sound: ["Klang-Labor", "Spiel & hör zu!"], life: ["Lebens-Labor", "Zieh eine Pflanze!"], weather: ["Wetter-Welt", "Sonne, Regen & Wind!"], space: ["Weltall", "Erde, Mond & Sonne!"], water: ["Schwimmt oder sinkt", "Rate & platsch!"], shapes: ["Formen-Safari", "Finde die Formen!"], pattern: ["Muster-Party", "Was kommt als Nächstes?"], sorting: ["Sortier-Station", "Sortiere es!"], animals: ["Tierfreunde", "Hör sie sprechen!"], shadows: ["Schattenspiel", "Licht & Schatten!"], flags: ["Flaggen & Länder", "Alle 195 Flaggen!"], english: ["Erstes Englisch", "Wörter & kleine Sätze!"] },
    i: {
      color: [["ROT", "Das ist rot! Wie ein Apfel!"], ["BLAU", "Das ist blau! Wie der Himmel!"], ["GELB", "Das ist gelb! Wie die Sonne!"], ["GRÜN", "Das ist grün! Wie Gras!"], ["ROSA", "Das ist rosa! Wie ein Flamingo!"], ["BRAUN", "Das ist braun! Wie ein Teddy!"], ["TÜRKIS", "Das ist türkis! Wie ein Entenei!"], ["Flieder", "Das ist lila! Wie die Blume!"]],
      math: [["EINS", "Ein Apfel! Eins!"], ["ZWEI", "Zwei Äpfel! Eins, zwei!"], ["DREI", "Drei Äpfel! Eins, zwei, drei!"], ["…BIS 20!", "Eins, zwei, drei — bis zwanzig!"]],
      physics: [["FÄLLT!", "Lass los — und es fällt!"], ["HÜPFT!", "Es trifft den Boden und boing!"]],
      sound: [["LAUT!", "Laut! Wie ein Löwe! Roar!"], ["leise…", "Leise… wie eine kleine Maus. Pssst."], ["HOCH & TIEF", "Vögel singen hoch! Trommeln klingen tief!"]],
      life: [["SAMEN", "Ein kleiner Samen schläft in der Erde."], ["SPROSS", "Wasser und Sonne sagen: Hallo, Spross!"], ["GEWACHSEN!", "Es ist gewachsen! Groß und strahlend!"]],
      weather: [["SONNIG", "Sonnig! Warm und hell!"], ["REGNERISCH", "Regnerisch! Plitsch, platsch, plitsch!"], ["WINDIG", "Windig! Wusch! Die Blätter tanzen!"]],
      space: [["ERDE", "Die Erde! Unser Zuhause. Die blaue!"], ["MOND", "Der Mond! Er kommt immer wieder!"], ["SONNE", "Die Sonne! Unser Tagesstern!"]],
      water: [["SCHWIMMT", "Es schwimmt! Oben wie ein Boot!"], ["SINKT", "Es sinkt! Hinunter wie ein Stein!"]],
      shapes: [["KREIS", "Kreis! Rund wie ein Teller!"], ["QUADRAT", "Quadrat! Vier gerade Seiten wie eine Kiste!"], ["DREIECK", "Dreieck! Drei Ecken wie ein Pizzastück!"]],
      pattern: [["EIN MUSTER!", "Rot, blau, rot, blau! Es wiederholt sich!"], ["WAS DANN?", "Was kommt als Nächstes? Du kannst es raten!"]],
      sorting: [["SORTIERE!", "Socken zu Socken!"], ["GRUPPEN!", "Shirts zu Shirts! Wir bilden Gruppen!"]],
      animals: [["KUH", "Die Kuh! Sie macht muh!"], ["SCHAF", "Das Schaf! Es macht mäh!"], ["HUND", "Der Hund! Er macht wau wau!"]],
      shadows: [["LICHT", "Licht reist geradeaus wie ein Pfeil!"], ["SCHATTEN", "Der Teddy blockt das Licht und macht einen Schatten!"]],
    },
    p: { tapColour: "Tippe auf den {c} Ballon!", wrongColour: "Das ist {c}. Finde {t}!", countApples: "Tippe alle Äpfel! 🍎", byTens: "Zähle in ZEHNERN! Tippe die Körbe! 🧺", bigger: "Tippe die GRÖSSERE Zahl!", smaller: "Tippe die KLEINERE Zahl!", moreLess: "Tippe den Teller mit {m} Keksen! 🍪", tapShape: "Tippe das {s}!", wrongShape: "Das ist ein {c}. Finde das {t}!", whatNext: "Was kommt als Nächstes? 🔮", whereGo: "Wohin gehört das {x}?", splashIn: "Tippe einen Gegenstand zum Plantschen! 💦", predict: "Rate! Sinkt oder schwimmt das {x}?", findAnimal: "Tippe den {a}! 🔎", whoSays: "Wer macht {s}? 🔊", whoShadow: "Wer macht diesen Schatten? 🔦", makeX: "Mache {x}! Tippe die Zutaten!", whichFlag: "Welche Flagge gehört zu {c}?", whichCountry: "Zu welchem Land gehört diese Flagge?", tapWord: "Tippe die {w}! 🔊", hearWord: "Tippe ein Bild — hör das Wort! 🔊", buildWords: "Tippe die Wörter in Reihenfolge! 🧩", allFound: "Du hast alle gefunden! 🎉" },
  });
})();
