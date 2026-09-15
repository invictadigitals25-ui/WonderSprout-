/* WonderSprout story content — part 5: "Bloop's Big Bath" in es/fr/de/ar/zh. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
es: {
"st.bloop.title":"El Gran Baño de Bloop","st.bloop.desc":"Bloop la gota de agua está llenando la bañera. ¿Qué juguetes flotarán?","st.bloop.theme":"Flotar y Hundirse · predicción, juego con agua",
"st.bloop.b1.t":"¡Splash, splash! Bloop la gota de agua está llenando la bañera grande. «¡Hora del baño!» canta Bloop. Los juguetes esperan en el borde. ¿Quién entra primero?","st.bloop.b1.c0":"🦆 Ruby la patita de goma","st.bloop.b1.c1":"🪨 Rocky la piedrecita",
"st.bloop.b2duck.t":"¡Plop! Ruby la pata cae en el agua y… ¡flota! Sube y baja, sube y baja. «¡Yo floto!» grazna Ruby feliz. «Las cosas que flotan viajan sobre el agua.»","st.bloop.b2duck.c0":"🪨 Ahora prueba a Rocky la piedra",
"st.bloop.b2rock.t":"¡Plop! Rocky la piedra se hunde directo… glug glug glug… hasta el fondo. «¡Yo me hundo!» burbujea Rocky. «Las cosas pesadas que abrazan el agua se hunden.»","st.bloop.b2rock.c0":"🦆 Ahora prueba a Ruby la pata",
"st.bloop.b3.t":"Bloop levanta una esponja amarilla y una cuchara de metal. «¡Predice, predice!» canta Bloop. «Adivina antes de probar: ¿cuál FLOTARÁ?»","st.bloop.b3.c0":"🧽 ¡La esponja flota!","st.bloop.b3.c1":"🥄 ¡La cuchara flota!",
"st.bloop.b4sponge.t":"¡Adivinaste! La esponja flota como un barquito amarillo. ¡Hasta absorbe agua y se pone pesada! La cuchara se hunde para acompañar a Rocky. ¡Ding ding!","st.bloop.b4sponge.c0":"🫧 ¡Hora de burbujas!",
"st.bloop.b4spoon.t":"¡Oh! La cuchara se hunde — glug glug — para sentarse con Rocky. ¡Y mira! La esponja flota como un barquito amarillo. ¡Predecir y probar es cómo aprenden los científicos!","st.bloop.b4spoon.c0":"🫧 ¡Hora de burbujas!",
"st.bloop.b5.t":"¡Bloop sopla una montaña de burbujas! La pata flota, la esponja navega, y Rocky mira desde el fondo. «¡Los que flotan arriba, los que se hunden abajo!» celebra Bloop. «¡Nos vemos en el próximo baño!»","st.bloop.b5.m":"Algunas cosas flotan, otras se hunden — ¡predecir y probar es cómo aprendemos!","st.bloop.b5.r":"En tu próximo baño, prueba 3 juguetes seguros. Predice primero: ¿flota o se hunde? ¡Luego compruébalo!",
},
fr: {
"st.bloop.title":"Le Grand Bain de Bloop","st.bloop.desc":"Bloop la goutte d'eau remplit la baignoire. Quels jouets vont flotter ?","st.bloop.theme":"Flotter et Couler · prédiction, jeu d'eau",
"st.bloop.b1.t":"Plouf, plouf ! Bloop la goutte d'eau remplit la grande baignoire. « C'est l'heure du bain ! » chante Bloop. Les jouets attendent sur le bord. Qui entre le premier ?","st.bloop.b1.c0":"🦆 Ruby le canard en caoutchouc","st.bloop.b1.c1":"🪨 Rocky le petit caillou",
"st.bloop.b2duck.t":"Plouf ! Ruby le canard tombe dans l'eau et… elle flotte ! Monte et descend, monte et descend. « Je flotte ! » cancane Ruby joyeusement. « Les choses qui flottent voyagent sur l'eau. »","st.bloop.b2duck.c0":"🪨 Essaie maintenant Rocky le caillou",
"st.bloop.b2rock.t":"Plouf ! Rocky le caillou plonge tout droit… glou glou glou… jusqu'au fond. « Je coule ! » bulle Rocky. « Les choses lourdes qui embrassent l'eau coulent. »","st.bloop.b2rock.c0":"🦆 Essaie maintenant Ruby le canard",
"st.bloop.b3.t":"Bloop brandit une éponge jaune et une cuillère en métal. « Prédisez, prédisez ! » chante Bloop. « Devinez avant de tester — lequel va FLOTTER ? »","st.bloop.b3.c0":"🧽 L'éponge flotte !","st.bloop.b3.c1":"🥄 La cuillère flotte !",
"st.bloop.b4sponge.t":"Tu as deviné ! L'éponge flotte comme un petit bateau jaune. Elle absorbe même l'eau et devient lourde ! La cuillère plonge rejoindre Rocky. Ding ding !","st.bloop.b4sponge.c0":"🫧 C'est l'heure des bulles !",
"st.bloop.b4spoon.t":"Oh ! La cuillère plonge — glou glou — pour s'asseoir avec Rocky. Et regarde ! L'éponge flotte comme un petit bateau jaune. Prédire et tester, c'est ainsi que les scientifiques apprennent !","st.bloop.b4spoon.c0":"🫧 C'est l'heure des bulles !",
"st.bloop.b5.t":"Bloop souffle une montagne de bulles ! Le canard flotte, l'éponge navigue, et Rocky regarde depuis le fond. « Les flotteurs en haut, les coulés en bas ! » s'écrie Bloop. « À la prochaine heure du bain ! »","st.bloop.b5.m":"Certaines choses flottent, d'autres coulent — prédire et tester, c'est ainsi qu'on apprend !","st.bloop.b5.r":"À ton prochain bain, teste 3 jouets sans danger. Prédisez d'abord : flotter ou couler ? Puis vérifiez !",
},
de: {
"st.bloop.title":"Bloops großes Bad","st.bloop.desc":"Bloop der Wassertropfen füllt die Badewanne. Welche Spielsachen werden schwimmen?","st.bloop.theme":"Schwimmen & Sinken · Vorhersage, Wasserspiel",
"st.bloop.b1.t":"Plitsch, platsch! Bloop der Wassertropfen füllt die große Badewanne. „Badezeit!“ singt Bloop. Die Spielsachen warten am Rand. Wer geht zuerst hinein?","st.bloop.b1.c0":"🦆 Ruby die Gummiente","st.bloop.b1.c1":"🪨 Rocky der kleine Stein",
"st.bloop.b2duck.t":"Platsch! Ruby die Ente landet auf dem Wasser und… sie schwimmt! Auf und ab, auf und ab. „Ich schwimme!“ schnattert Ruby fröhlich. „Dinge, die schwimmen, reiten oben auf dem Wasser.“","st.bloop.b2duck.c0":"🪨 Versuch jetzt Rocky den Stein",
"st.bloop.b2rock.t":"Platsch! Rocky der Stein taucht direkt hinab… gluck gluck gluck… bis ganz auf den Grund. „Ich sinke!“ blubbert Rocky. „Schwere Dinge, die das Wasser umarmen, sinken nach unten.“","st.bloop.b2rock.c0":"🦆 Versuch jetzt Ruby die Ente",
"st.bloop.b3.t":"Bloop hält einen gelben Schwamm und einen Metalllöffel hoch. „Rate, rate!“ singt Bloop. „Rate, bevor wir testen — was wird SCHWIMMEN?“","st.bloop.b3.c0":"🧽 Der Schwamm schwimmt!","st.bloop.b3.c1":"🥄 Der Löffel schwimmt!",
"st.bloop.b4sponge.t":"Du hast es erraten! Der Schwamm schwimmt wie ein kleines gelbes Boot. Er saugt sogar Wasser auf und wird schwer! Der Löffel taucht hinab zu Rocky. Ding ding!","st.bloop.b4sponge.c0":"🫧 Zeit für Blasen!",
"st.bloop.b4spoon.t":"Oh! Der Löffel taucht hinab — gluck gluck — um bei Rocky zu sitzen. Und schau! Der Schwamm schwimmt wie ein kleines gelbes Boot. Vorhersagen und Testen — so lernen Wissenschaftler!","st.bloop.b4spoon.c0":"🫧 Zeit für Blasen!",
"st.bloop.b5.t":"Bloop bläst einen Berg voller Blasen! Die Ente schwimmt, der Schwamm segelt, und Rocky schaut vom Grund zu. „Schwimmer oben, Sinker unten!“ jubelt Bloop. „Bis zur nächsten Badezeit!“","st.bloop.b5.m":"Manches schwimmt, manches sinkt — Vorhersagen und Testen ist, wie wir lernen!","st.bloop.b5.r":"Teste beim nächsten Bad 3 sichere Spielsachen. Sage zuerst voraus: schwimmen oder sinken? Dann prüfe es!",
},
ar: {
"st.bloop.title":"حمّام بلوب الكبير","st.bloop.desc":"بلوب قطرة الماء يملأ حوض الاستحمام. أي الألعاب ستطفو؟","st.bloop.theme":"الطفو والغرق · التنبؤ، اللعب بالماء",
"st.bloop.b1.t":"طرطش طرطش! بلوب قطرة الماء يملأ حوض الاستحمام الكبير. «وقت الحمّام!» يغني بلوب. الألعاب تنتظر عند الحافة. من يدخل أولًا؟","st.bloop.b1.c0":"🦆 روبي البطة المطاطية","st.bloop.b1.c1":"🪨 روكي الحجر الصغير",
"st.bloop.b2duck.t":"طقْ! تهبط روبي البطة على الماء و… تطفو! صعودًا وهبوطًا، صعودًا وهبوطًا. «أنا أطفو!» تصرخ روبي بسعادة. «الأشياء التي تطفو تركب فوق الماء.»","st.bloop.b2duck.c0":"🪨 جرّب الآن روكي الحجر",
"st.bloop.b2rock.t":"طقْ! يغوص روكي الحجر مباشرة… غرق غرق غرق… حتى القاع. «أنا أغرق!» يفور روكي. «الأشياء الثقيلة التي تعانق الماء تغرق.»","st.bloop.b2rock.c0":"🦆 جرّب الآن روبي البطة",
"st.bloop.b3.t":"يرفع بلوب إسفنجة صفراء وملعقة معدنية. «تنبأ، تنبأ!» يغني بلوب. «خمّن قبل أن نختبر — أيهما سيطفو؟»","st.bloop.b3.c0":"🧽 الإسفنجة تطفو!","st.bloop.b3.c1":"🥄 الملعقة تطفو!",
"st.bloop.b4sponge.t":"خمّنت صح! تطفو الإسفنجة مثل قارب أصفر صغير. إنها حتى تمتص الماء وتصبح ثقيلة! تغوص الملعقة لتنضم إلى روكي. طنين طنين!","st.bloop.b4sponge.c0":"🫧 وقت الفقاعات!",
"st.bloop.b4spoon.t":"أوه! تغوص الملعقة — غرق غرق — لتجلس مع روكي. وانظر! تطفو الإسفنجة مثل قارب أصفر صغير. التنبؤ والاختبار هو كيف يتعلم العلماء!","st.bloop.b4spoon.c0":"🫧 وقت الفقاعات!",
"st.bloop.b5.t":"ينفخ بلوب جبلًا من الفقاعات! تطفو البطة، تبحر الإسفنجة، ويراقب روكي من القاع. «الطافي فوق، الغارق تحت!» يهتف بلوب. «أراك في وقت الحمّام القادم!»","st.bloop.b5.m":"بعض الأشياء تطفو، وبعضها يغرق — التنبؤ والاختبار هو كيف نتعلم!","st.bloop.b5.r":"في حمّامك القادم، جرّب 3 ألعاب آمنة. تنبأ أولًا: تطفو أم تغرق؟ ثم تحقق!",
},
zh: {
"st.bloop.title":"布洛普的大澡盆","st.bloop.desc":"水珠布洛普正在给浴缸放水。哪些玩具会浮起来？","st.bloop.theme":"浮与沉 · 预测、玩水",
"st.bloop.b1.t":"哗啦哗啦！水珠布洛普正在给大浴缸放水。「洗澡时间到！」布洛普唱着。玩具们在边上等着。谁先进去呢？","st.bloop.b1.c0":"🦆 橡皮鸭露比","st.bloop.b1.c1":"🪨 小石头洛基",
"st.bloop.b2duck.t":"扑通！露比小鸭落在水面上……她浮起来了！一上一下，一上一下。「我浮起来啦！」露比开心地嘎嘎叫。「会浮的东西骑在水面上。」","st.bloop.b2duck.c0":"🪨 现在试试石头洛基",
"st.bloop.b2rock.t":"扑通！洛基石头直接沉下去……咕噜咕噜咕噜……一直沉到底。「我沉下去啦！」洛基冒着泡泡说。「又重又贴着水的东西会沉下去。」","st.bloop.b2rock.c0":"🦆 现在试试小鸭露比",
"st.bloop.b3.t":"布洛普举起一块黄海绵和一把金属勺子。「猜一猜，猜一猜！」布洛普唱着。「先猜猜再试试——哪一个会浮起来？」","st.bloop.b3.c0":"🧽 海绵会浮！","st.bloop.b3.c1":"🥄 勺子会浮！",
"st.bloop.b4sponge.t":"你猜对啦！海绵像一艘黄色小船一样浮着。它还会吸水变得重重的！勺子沉下去找洛基了。叮叮！","st.bloop.b4sponge.c0":"🫧 该吹泡泡啦！",
"st.bloop.b4spoon.t":"哎呀！勺子沉下去了——咕噜咕噜——去陪洛基了。你看！海绵像一艘黄色小船一样浮着。先猜一猜再试一试，科学家就是这样学习的！","st.bloop.b4spoon.c0":"🫧 该吹泡泡啦！",
"st.bloop.b5.t":"布洛普吹出一大堆泡泡！小鸭浮着，海绵航行，洛基在下面看着。「浮的在上面，沉的在下面！」布洛普欢呼。「下次洗澡再见！」","st.bloop.b5.m":"有的东西会浮，有的会沉——猜一猜再试一试，我们就是这样学习的！","st.bloop.b5.r":"下次洗澡时，试试3个安全的玩具。先猜猜：浮还是沉？然后验证一下！",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
