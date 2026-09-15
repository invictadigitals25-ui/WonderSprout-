/* WonderSprout story content — part 9: "Milo's Rainy Day" + "The Sleepy Moon" in es/fr/de/ar/zh. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
es: {
"st.milo.title":"El Día Lluvioso de Milo","st.milo.desc":"Milo despierta con lluvia. ¿Saltar charcos o fuerte de mantas?","st.milo.theme":"Tierra y Clima · lluvia, decisiones, juego acogedor",
"st.milo.m1.t":"Gota… gota… gota. Milo despierta con lluvia en la ventana. «Hoy no hay sol», suspira. «¡Pero los días de lluvia también pueden ser maravillosos!»","st.milo.m1.c0":"🥾 Ponte las botas y sal","st.milo.m1.c1":"🛋️ Construye un fuerte de mantas",
"st.milo.m2a.t":"¡Splash! ¡Splash! Milo salta en el charco más grande de todos. Las gotas le hacen cosquillas en la nariz y un gusanito sale a saludar.","st.milo.m2a.c0":"💦 Salta en UN charco más","st.milo.m2a.c1":"👂 Escucha cantar a la lluvia",
"st.milo.m2b.t":"Milo construye un fuerte acogedor con mantas y sillas. Adentro es cálido, suave y secreto — la cueva perfecta para un día de lluvia.","st.milo.m2b.c0":"🔦 Haz títeres de sombra","st.milo.m2b.c1":"🎵 Canta una canción de lluvia",
"st.milo.m3a.t":"La lluvia se detiene y… ¡mira! Un arcoíris gigante cruza el cielo. «Después de la lluvia viene el sol», sonríe Milo, salpicado de charcos y feliz.","st.milo.m3a.m":"La lluvia ayuda a beber a las flores — ¡y después de la lluvia, a veces un arcoíris!","st.milo.m3a.r":"El próximo día de lluvia, escuchen juntos la lluvia — ¡y luego vayan a buscar charcos (o un arcoíris)!",
"st.milo.m3b.t":"El fuerte de mantas brilla con sombras de títeres y canciones soñolientas. Afuera, la lluvia canta buenas noches. «Los días de lluvia son días acogedores», susurra Milo.","st.milo.m3b.m":"Todo tipo de día puede ser un día maravilloso.","st.milo.m3b.r":"Construyan juntos un fuerte de mantas y lean un cuento adentro con una linterna.",
"st.moon.title":"La Luna Soñolienta","st.moon.desc":"La Luna no puede dormirse. ¿Puedes ayudar?","st.moon.theme":"Espacio · hora de dormir, contar, rutinas",
"st.moon.n1.t":"Muy por encima de las nubes, la Luna bosteza un gran bostezo plateado. Pero las estrellas brillan tanto — ¡la Luna simplemente no puede dormir!","st.moon.n1.c0":"⭐ Cuenten las estrellas juntos","st.moon.n1.c1":"🎵 Cántenle una canción de cuna a la Luna",
"st.moon.n2a.t":"«Una… dos… tres… cuatro… cinco», cuentan. Las estrellas brillan más suave con cada número, orgullosas de ser contadas. Los ojos de la Luna se vuelven pesados.","st.moon.n2a.c0":"🌙 Digan buenas noches a cada estrella",
"st.moon.n2b.t":"Cantan una canción de cuna suave y lenta. Las estrellas ralentizan su brillo para acompañar la melodía, meciéndose como pequeñas luces nocturnas. La Luna sonríe adormilada.","st.moon.n2b.c0":"☁️ Arropen a la Luna con nubes",
"st.moon.n3.t":"Una nube esponjosa se acerca como una manta. «Buenas noches, Luna. Buenas noches, estrellas. Buenas noches, tú». Todo está tranquilo, acogedor y oscuro — el mundo entero está dormido.","st.moon.n3.m":"Una rutina suave ayuda a todos — incluso a la Luna — a quedarse dormidos.","st.moon.n3.r":"Esta noche, digan buenas noches a tres cosas: la Luna, un juguete favorito, y entre ustedes.",
},
fr: {
"st.milo.title":"La Journée Pluvieuse de Milo","st.milo.desc":"Milo se réveille sous la pluie. Sauter dans les flaques ou construire un fort de couvertures ?","st.milo.theme":"Terre et Météo · pluie, choix, jeu douillet",
"st.milo.m1.t":"Plic… ploc… plic. Milo se réveille avec la pluie sur la fenêtre. « Pas de soleil aujourd'hui », soupire-t-il. « Mais les jours de pluie peuvent quand même être merveilleux ! »","st.milo.m1.c0":"🥾 Mets tes bottes et sors","st.milo.m1.c1":"🛋️ Construis un fort de couvertures",
"st.milo.m2a.t":"Plouf ! Splash ! Milo saute dans la plus grande flaque jamais vue. Les gouttes lui chatouillent le nez et un petit ver sort dire bonjour.","st.milo.m2a.c0":"💦 Saute dans ENCORE une flaque","st.milo.m2a.c1":"👂 Écoute la pluie chanter",
"st.milo.m2b.t":"Milo construit un fort douillet avec des couvertures et des chaises. À l'intérieur c'est chaud, doux et secret — la grotte parfaite pour un jour de pluie.","st.milo.m2b.c0":"🔦 Fais des marionnettes d'ombres","st.milo.m2b.c1":"🎵 Chante une chanson de pluie",
"st.milo.m3a.t":"La pluie s'arrête et… regarde ! Un arc-en-ciel géant traverse le ciel. « Après la pluie vient le soleil », sourit Milo, éclaboussé de flaques et heureux.","st.milo.m3a.m":"La pluie aide les fleurs à boire — et après la pluie, parfois un arc-en-ciel !","st.milo.m3a.r":"Le prochain jour de pluie, écoutez la pluie ensemble — puis allez chercher des flaques (ou un arc-en-ciel !).",
"st.milo.m3b.t":"Le fort de couvertures brille d'ombres de marionnettes et de chansons endormies. Dehors, la pluie chante bonne nuit. « Les jours de pluie sont des jours douillets », chuchote Milo.","st.milo.m3b.m":"Chaque sorte de journée peut être une journée merveilleuse.","st.milo.m3b.r":"Construisez ensemble un fort de couvertures et lisez-y une histoire à la lampe de poche.",
"st.moon.title":"La Lune Somnolente","st.moon.desc":"La Lune n'arrive pas à s'endormir. Peux-tu l'aider ?","st.moon.theme":"Espace · coucher, compter, routines",
"st.moon.n1.t":"Tout en haut au-dessus des nuages, la Lune baille un grand bâillement argenté. Mais les étoiles scintillent si fort — la Lune n'arrive tout simplement pas à dormir !","st.moon.n1.c0":"⭐ Comptez les étoiles ensemble","st.moon.n1.c1":"🎵 Chantez une berceuse à la Lune",
"st.moon.n2a.t":"« Une… deux… trois… quatre… cinq », comptez-vous. Les étoiles brillent plus doucement à chaque nombre, fières d'être comptées. Les yeux de la Lune s'alourdissent.","st.moon.n2a.c0":"🌙 Dites bonne nuit à chaque étoile",
"st.moon.n2b.t":"Vous chantez une berceuse douce et lente. Les étoiles ralentissent leur scintillement pour suivre la mélodie, se balançant comme de petites veilleuses. La Lune sourit avec sommeil.","st.moon.n2b.c0":"☁️ Bordez la Lune avec des nuages",
"st.moon.n3.t":"Un nuage moelleux s'approche comme une couverture. « Bonne nuit, Lune. Bonne nuit, étoiles. Bonne nuit, toi. » Tout est calme, douillet et sombre — le monde entier dort.","st.moon.n3.m":"Une routine douce aide tout le monde — même la Lune — à s'endormir.","st.moon.n3.r":"Ce soir, dites bonne nuit à trois choses : la Lune, un jouet préféré, et chacun à l'autre.",
},
de: {
"st.milo.title":"Milos Regentag","st.milo.desc":"Milo wacht mit Regen auf. Pfützen springen oder Deckenburg bauen?","st.milo.theme":"Erde & Wetter · Regen, Entscheidungen, gemütliches Spiel",
"st.milo.m1.t":"Tropf… tropf… tropf. Milo wacht mit Regen am Fenster auf. „Heute keine Sonne“, seufzt er. „Aber Regentage können trotzdem wunderbar sein!“","st.milo.m1.c0":"🥾 Zieh Stiefel an und geh raus","st.milo.m1.c1":"🛋️ Baue eine Deckenburg",
"st.milo.m2a.t":"Plitsch! Platsch! Milo springt in die größte Pfütze aller Zeiten. Regentropfen kitzeln seine Nase und ein kleiner Wurm kommt heraus, um Hallo zu sagen.","st.milo.m2a.c0":"💦 Spring in NOCH eine Pfütze","st.milo.m2a.c1":"👂 Hör dem Regen beim Singen zu",
"st.milo.m2b.t":"Milo baut eine gemütliche Burg aus Decken und Stühlen. Drinnen ist es warm, weich und geheim — die perfekte Regentaghöhle.","st.milo.m2b.c0":"🔦 Mache Schattenspiele","st.milo.m2b.c1":"🎵 Sing ein Regenlied",
"st.milo.m3a.t":"Der Regen hört auf und… schau! Ein riesiger Regenbogen zieht sich über den Himmel. „Nach dem Regen kommt die Sonne“, lächelt Milo, pfützenbespritzt und glücklich.","st.milo.m3a.m":"Regen hilft den Blumen beim Trinken — und nach dem Regen, manchmal ein Regenbogen!","st.milo.m3a.r":"Hört am nächsten Regentag gemeinsam dem Regen zu — und sucht dann Pfützen (oder einen Regenbogen!).",
"st.milo.m3b.t":"Die Deckenburg leuchtet mit Schattenspielen und schläfrigen Liedern. Draußen singt der Regen gute Nacht. „Regentage sind gemütliche Tage“, flüstert Milo.","st.milo.m3b.m":"Jede Art von Tag kann ein wunderbarer Tag sein.","st.milo.m3b.r":"Baut zusammen eine Deckenburg und lest darin eine Geschichte mit der Taschenlampe.",
"st.moon.title":"Der Schlafende Mond","st.moon.desc":"Der Mond kann nicht einschlafen. Kannst du helfen?","st.moon.theme":"Weltraum · Schlafenszeit, Zählen, Routinen",
"st.moon.n1.t":"Hoch über den Wolken gähnt der Mond ein großes silbernes Gähnen. Aber die Sterne funkeln so hell — der Mond kann einfach nicht schlafen!","st.moon.n1.c0":"⭐ Zählt die Sterne zusammen","st.moon.n1.c1":"🎵 Singt dem Mond ein Schlaflied",
"st.moon.n2a.t":"„Eins… zwei… drei… vier… fünf“, zählt ihr. Die Sterne leuchten bei jeder Zahl sanfter, stolz, gezählt zu werden. Die Augen des Mondes werden schwer.","st.moon.n2a.c0":"🌙 Sagt jedem Stern gute Nacht",
"st.moon.n2b.t":"Ihr singt ein sanftes, langsames Schlaflied. Die Sterne verlangsamen ihr Funkeln passend zur Melodie und schaukeln wie kleine Nachtlichter. Der Mond lächelt schläfrig.","st.moon.n2b.c0":"☁️ Deckt den Mond mit Wolken zu",
"st.moon.n3.t":"Eine flauschige Wolke zieht heran wie eine Decke. „Gute Nacht, Mond. Gute Nacht, Sterne. Gute Nacht, du.“ Alles ist still, gemütlich und dunkel — die ganze Welt schläft.","st.moon.n3.m":"Eine sanfte Routine hilft jedem — sogar dem Mond — einzuschlafen.","st.moon.n3.r":"Sagt heute Abend drei Dingen gute Nacht: dem Mond, einem Lieblingsspielzeug und einander.",
},
ar: {
"st.milo.title":"يوم ميلو الممطر","st.milo.desc":"يستيقظ ميلو على المطر. القفز في البرك أم بناء حصن من البطانيات؟","st.milo.theme":"الأرض والطقس · المطر، الاختيارات، اللعب المريح",
"st.milo.m1.t":"قطرة… قطرة… قطرة. يستيقظ ميلو على المطر في النافذة. «لا شمس اليوم»، يتنهد. «لكن الأيام الممطرة يمكن أن تكون رائعة أيضًا!»","st.milo.m1.c0":"🥾 ارتدِ الجزمة واخرج","st.milo.m1.c1":"🛋️ ابنِ حصنًا من البطانيات",
"st.milo.m2a.t":"طرطش! طرطش! يقفز ميلو في أكبر بركة على الإطلاق. قطرات المطر تدغدغ أنفه وتخرج دودة صغيرة لتلقي التحية.","st.milo.m2a.c0":"💦 اقفز في بركة أخرى","st.milo.m2a.c1":"👂 استمع للمطر وهو يغني",
"st.milo.m2b.t":"يبني ميلو حصنًا مريحًا من البطانيات والكراسي. في الداخل دافئ وناعم وسري — الكهف المثالي ليوم ممطر.","st.milo.m2b.c0":"🔦 اصنع دمى الظل","st.milo.m2b.c1":"🎵 غنِّ أغنية المطر",
"st.milo.m3a.t":"يتوقف المطر و… انظر! قوس قزح عملاق يمتد عبر السماء. «بعد المطر تأتي الشمس»، يبتسم ميلو، مبلل بالبرك وسعيد.","st.milo.m3a.m":"المطر يساعد الأزهار على الشرب — وبعد المطر، أحيانًا قوس قزح!","st.milo.m3a.r":"في اليوم الممطر القادم، استمعوا للمطر معًا — ثم اذهبوا للبحث عن برك (أو قوس قزح!).",
"st.milo.m3b.t":"يتوهج حصن البطانيات بظلال الدمى وأغاني النعاس. في الخارج، يغني المطر تصبح على خير. «الأيام الممطرة أيام مريحة»، يهمس ميلو.","st.milo.m3b.m":"كل نوع من الأيام يمكن أن يكون يومًا رائعًا.","st.milo.m3b.r":"ابنوا معًا حصنًا من البطانيات واقرؤوا فيه قصة بضوء الكشاف.",
"st.moon.title":"القمر النعسان","st.moon.desc":"لا يستطيع القمر النوم. هل يمكنك المساعدة؟","st.moon.theme":"الفضاء · وقت النوم، العد، الروتين",
"st.moon.n1.t":"عالٍ فوق الغيوم، يتثاءب القمر تثاؤبًا فضيًا كبيرًا. لكن النجوم تتلألأ ببريق شديد — القمر ببساطة لا يستطيع النوم!","st.moon.n1.c0":"⭐ عدّوا النجوم معًا","st.moon.n1.c1":"🎵 غنّوا للقمر تهويدة",
"st.moon.n2a.t":"«واحدة… اثنتان… ثلاث… أربع… خمس»، تعدّون. تتوهج النجوم بنعومة أكبر مع كل رقم، فخورة بأنها تُعدّ. تصبح عينا القمر ثقيلتين.","st.moon.n2a.c0":"🌙 قولوا تصبح على خير لكل نجمة",
"st.moon.n2b.t":"تغنون تهويدة ناعمة وبطيئة. تبطئ النجوم تلألؤها لتواكب اللحن، تتمايل كمصابيح ليلية صغيرة. يبتسم القمر بنعاس.","st.moon.n2b.c0":"☁️ غطّوا القمر بالغيوم",
"st.moon.n3.t":"تقترب غيمة منفوشة مثل بطانية. «تصبح على خير أيها القمر. تصبحن على خير أيتها النجوم. تصبح على خير يا أنت». كل شيء هادئ ومريح ومظلم — العالم كله نائم.","st.moon.n3.m":"الروتين اللطيف يساعد الجميع — حتى القمر — على النوم.","st.moon.n3.r":"الليلة، قولوا تصبح على خير لثلاثة أشياء: القمر، ولعبة مفضلة، ولبعضكم البعض.",
},
zh: {
"st.milo.title":"米罗的雨天","st.milo.desc":"米罗醒来时下着雨。是去踩水坑，还是搭毯子堡垒？","st.milo.theme":"地球与天气 · 雨、选择、温暖的游戏",
"st.milo.m1.t":"滴答……滴答……滴答。米罗醒来，窗上下着雨。「今天没有太阳了，」他叹气。「可是雨天也可以很美妙！」","st.milo.m1.c0":"🥾 穿上雨靴出去玩","st.milo.m1.c1":"🛋️ 搭一座毯子堡垒",
"st.milo.m2a.t":"哗啦！哗啦！米罗跳进有史以来最大的水坑。雨点挠他的鼻子，一条小虫子钻出来打招呼。","st.milo.m2a.c0":"💦 再跳一个水坑","st.milo.m2a.c1":"👂 听雨唱歌",
"st.milo.m2b.t":"米罗用毯子和椅子搭了一座温暖的堡垒。里面暖暖的、软软的、还有秘密——这是雨天最完美的洞穴。","st.milo.m2b.c0":"🔦 做手影戏","st.milo.m2b.c1":"🎵 唱一首雨天歌",
"st.milo.m3a.t":"雨停了，然后……看！一道巨大的彩虹横跨天空。「雨过天晴，」米罗笑着说，浑身是水花，开开心心。","st.milo.m3a.m":"雨帮花儿喝水——雨后，有时还有彩虹！","st.milo.m3a.r":"下个雨天，一起听听雨声——然后去找水坑（或者彩虹）！",
"st.milo.m3b.t":"毯子堡垒里闪烁着影子和困困的歌。外面，雨唱着晚安。「雨天是温暖的日子，」米罗轻声说。","st.milo.m3b.m":"每一种日子都可以是美好的一天。","st.milo.m3b.r":"一起搭一座毯子堡垒，在里面用手电筒读一个故事。",
"st.moon.title":"想睡的月亮","st.moon.desc":"月亮睡不着。你能帮忙吗？","st.moon.theme":"太空 · 睡前、数数、规律",
"st.moon.n1.t":"在云朵上面高高的地方，月亮打了一个大大的银色哈欠。可是星星闪得太亮了——月亮就是睡不着！","st.moon.n1.c0":"⭐ 一起数星星","st.moon.n1.c1":"🎵 给月亮唱摇篮曲",
"st.moon.n2a.t":"「一……二……三……四……五，」你们数着。每数一个，星星就柔柔地亮一点，被数到很自豪。月亮的眼睛越来越沉。","st.moon.n2a.c0":"🌙 跟每颗星星说晚安",
"st.moon.n2b.t":"你们唱起轻轻慢慢的摇篮曲。星星放慢了闪烁，跟着旋律摇啊摇，像小小的夜灯。月亮困困地笑了。","st.moon.n2b.c0":"☁️ 用云朵给月亮盖被子",
"st.moon.n3.t":"一朵软软的云像被子一样盖过来。「晚安，月亮。晚安，星星。晚安，你。」一切都安静、温暖、黑黑的——整个世界都睡着了。","st.moon.n3.m":"温柔的规律能帮每个人——连月亮也一样——睡着。","st.moon.n3.r":"今晚，跟三样东西说晚安：月亮、一个最爱的玩具，还有彼此。",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
