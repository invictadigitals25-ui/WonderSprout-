/* WonderSprout story content — part 17: "Where Is Beep?" + "Duckling's Bath Day" in es/fr/de/ar/zh. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
es: {
"st.beep.title":"¿Dónde Está Beep?","st.beep.desc":"El robot Beep se esconde. ¿Puedes encontrarlo por su bip?","st.beep.theme":"Permanencia del objeto · escuchar, cucú-tras",
"st.beep.h1.t":"«¡Bip bip!» se ríe el robot Beep, y se esconde en algún lugar del patio. Puedes OÍRLO pero no puedes VERLO. ¿De dónde viene ese bip?","st.beep.h1.c0":"🛝 Mira debajo del tobogán","st.beep.h1.c1":"🎠 Mira detrás del columpio",
"st.beep.h2a.t":"Levantas… ¡no hay Beep debajo del tobogán! «¡Bip bip!» viene el sonido otra vez — más cerca esta vez. ¡Beep todavía se esconde, y todavía existe!","st.beep.h2a.c0":"🏖️ Mira en el arenero",
"st.beep.h2b.t":"Vistazo… ¡no hay Beep detrás del columpio! «¡Bip bip!» Se está riendo en otro lugar. ¡Incluso cuando no puedes ver a Beep, todavía está ahí!","st.beep.h2b.c0":"🪑 Mira debajo del banco",
"st.beep.h3.t":"Levantas la toallita azul y… «¡BIP BIP!» ¡Ahí está! Beep salta y te da un abrazo de robot. ¡Campeón del cucú-tras!","st.beep.h3.m":"Las cosas siguen existiendo aunque no puedas verlas — ¡ese es un gran descubrimiento cerebral!","st.beep.h3.r":"Jueguen al cucú-tras, o escondan un juguete debajo de un vaso y deja que tu niño lo encuentre.",
"st.duck.title":"El Día de Baño del Patito","st.duck.desc":"El Patito no está seguro de la hora del baño. ¡Salpica suave y descubre qué flota!","st.duck.theme":"Flotar y Hundirse · confianza en el agua",
"st.duck.s1.t":"¡Splash! El Patito camina hacia el baño tibio. «¿El agua es demasiado grande para un pato pequeño?» susurra.","st.duck.s1.c0":"💧 Toca el agua despacio","st.duck.s1.c1":"🛁 Trae primero el barquito amarillo",
"st.duck.s2.t":"El Patito mete un pie palmeado… y luego ¡POP — está flotando! «¡Floto! ¡FLOTO!» grazna de alegría.","st.duck.s2.c0":"🫧 Sopla olas de burbujas","st.duck.s2.c1":"🦆 Gira en círculos felices",
"st.duck.s2b.t":"El barquito amarillo se balancea encima. «Flota — ¡y yo también lo haré!» dice el valiente Patito, saltando adentro.","st.duck.s2b.c0":"🫧 Sopla olas de burbujas","st.duck.s2b.c1":"🦆 Compite con el barquito amarillo",
"st.duck.s3.t":"¡Burbujas por todas partes! El Patito revienta una con su pico — ¡POP! La hora del baño es el mejor momento.","st.duck.s3.c0":"Grazna un final feliz",
"st.duck.end.t":"«¡Nos vemos mañana, agua!» dice el Patito, flotando como un profesional. FIN — ¡ahora prueba flotar en el baño con tus juguetes!",
},
fr: {
"st.beep.title":"Où Est Beep ?","st.beep.desc":"Le robot Beep se cache. Peux-tu le trouver grâce à son bip ?","st.beep.theme":"Permanence de l'objet · écouter, coucou",
"st.beep.h1.t":"« Bip bip ! » rigole le robot Beep, et il se cache quelque part dans l'aire de jeux. Tu peux L'ENTENDRE mais tu ne peux pas le VOIR. D'où vient ce bip ?","st.beep.h1.c0":"🛝 Regarde sous le toboggan","st.beep.h1.c1":"🎠 Regarde derrière la balançoire",
"st.beep.h2a.t":"Tu soulèves… pas de Beep sous le toboggan ! « Bip bip ! » le son revient — plus proche cette fois. Beep se cache encore, et il existe toujours !","st.beep.h2a.c0":"🏖️ Regarde dans le bac à sable",
"st.beep.h2b.t":"Coup d'œil… pas de Beep derrière la balançoire ! « Bip bip ! » Il rigole ailleurs. Même quand tu ne vois pas Beep, il est toujours là !","st.beep.h2b.c0":"🪑 Regarde sous le banc",
"st.beep.h3.t":"Tu soulèves la petite serviette bleue et… « BIP BIP ! » Le voilà ! Beep saute et te fait un câlin de robot. Champion du coucou !","st.beep.h3.m":"Les choses existent toujours même quand tu ne les vois pas — c'est une grande découverte du cerveau !","st.beep.h3.r":"Jouez à coucou, ou cachez un jouet sous un gobelet et laisse ton enfant le trouver.",
"st.duck.title":"Le Jour du Bain du Caneton","st.duck.desc":"Le Caneton n'est pas sûr pour l'heure du bain. Éclabousse doucement et découvre ce qui flotte !","st.duck.theme":"Flotter et Couler · confiance dans l'eau",
"st.duck.s1.t":"Plouf ! Le Caneton se dandine vers le bain chaud. « L'eau est-elle trop grande pour un petit canard ? » chuchote-t-il.","st.duck.s1.c0":"💧 Touche l'eau lentement","st.duck.s1.c1":"🛁 Apporte d'abord le petit bateau jaune",
"st.duck.s2.t":"Le Caneton trempe un pied palmé… puis POP — il flotte ! « Je flotte ! Je FLOTTE ! » cancane-t-il de joie.","st.duck.s2.c0":"🫧 Souffle des vagues de bulles","st.duck.s2.c1":"🦆 Tourne en cercles joyeux",
"st.duck.s2b.t":"Le petit bateau jaune se balance sur l'eau. « Il flotte — et moi aussi ! » dit le courageux Caneton en sautant dedans.","st.duck.s2b.c0":"🫧 Souffle des vagues de bulles","st.duck.s2b.c1":"🦆 Fais la course avec le bateau jaune",
"st.duck.s3.t":"Des bulles partout ! Le Caneton en éclate une avec son bec — POP ! L'heure du bain est le meilleur moment.","st.duck.s3.c0":"Cancane une fin heureuse",
"st.duck.end.t":"« À demain, l'eau ! » dit le Caneton, flottant comme un pro. FIN — essaie maintenant de flotter dans le bain avec tes jouets !",
},
de: {
"st.beep.title":"Wo Ist Beep?","st.beep.desc":"Roboter Beep versteckt sich. Kannst du ihn an seinem Piepen finden?","st.beep.theme":"Objektpermanenz · zuhören, Kuckuck",
"st.beep.h1.t":"„Piep piep!“ kichert Roboter Beep und versteckt sich irgendwo auf dem Spielplatz. Du kannst ihn HÖREN, aber nicht SEHEN. Woher kommt dieses Piepen?","st.beep.h1.c0":"🛝 Schau unter die Rutsche","st.beep.h1.c1":"🎠 Schau hinter die Schaukel",
"st.beep.h2a.t":"Du hebst hoch… kein Beep unter der Rutsche! „Piep piep!“ kommt das Geräusch wieder — diesmal näher. Beep versteckt sich noch, und er existiert noch!","st.beep.h2a.c0":"🏖️ Schau im Sandkasten",
"st.beep.h2b.t":"Spähen… kein Beep hinter der Schaukel! „Piep piep!“ Er kichert woanders. Selbst wenn du Beep nicht sehen kannst, ist er noch da!","st.beep.h2b.c0":"🪑 Schau unter die Bank",
"st.beep.h3.t":"Du hebst das kleine blaue Handtuch und… „PIEP PIEP!“ Da ist er! Beep springt auf und gibt dir eine Roboter-Umarmung. Kuckuck-Champion!","st.beep.h3.m":"Dinge existieren weiter, auch wenn du sie nicht sehen kannst — das ist eine große Gehirn-Entdeckung!","st.beep.h3.r":"Spielt Kuckuck, oder versteckt ein Spielzeug unter einem Becher und lass dein Kind es finden.",
"st.duck.title":"Entleins Badetag","st.duck.desc":"Entlein ist sich beim Baden nicht sicher. Plantsche sanft und finde heraus, was schwimmt!","st.duck.theme":"Schwimmen & Sinken · Wasservertrauen",
"st.duck.s1.t":"Plitsch! Entlein watschelt zum warmen Bad. „Ist das Wasser zu groß für eine kleine Ente?“ flüstert er.","st.duck.s1.c0":"💧 Berühre das Wasser langsam","st.duck.s1.c1":"🛁 Bring zuerst das gelbe Boot",
"st.duck.s2.t":"Entlein taucht einen Schwimmfuß ein… dann PLATSCH — er schwimmt! „Ich schwimme! Ich SCHWIMME!“ schnattert er vor Freude.","st.duck.s2.c0":"🫧 Blase Blasenwellen","st.duck.s2.c1":"🦆 Drehe fröhliche Kreise",
"st.duck.s2b.t":"Das kleine gelbe Boot schaukelt oben. „Es schwimmt — und ich auch!“ sagt das mutige Entlein und hüpft hinein.","st.duck.s2b.c0":"🫧 Blase Blasenwellen","st.duck.s2b.c1":"🦆 Wettrennen mit dem gelben Boot",
"st.duck.s3.t":"Überall Blasen! Entlein lässt eine mit dem Schnabel platzen — PLATSCH! Badezeit ist die beste Zeit.","st.duck.s3.c0":"Schnattere ein fröhliches Ende",
"st.duck.end.t":"„Bis morgen, Wasser!“ sagt Entlein und schwimmt wie ein Profi. ENDE — probiere jetzt das Schwimmen in der Badewanne mit deinen Spielsachen!",
},
ar: {
"st.beep.title":"أين بيب؟","st.beep.desc":"الروبوت بيب يختبئ. هل تستطيع إيجاده من خلال صوته؟","st.beep.theme":"دوام الشيء · الاستماع، لعبة الاختباء",
"st.beep.h1.t":"«بيب بيب!» يضحك الروبوت بيب، ويختبئ في مكان ما في الملعب. يمكنك سماعه لكن لا يمكنك رؤيته. من أين يأتي هذا الصوت؟","st.beep.h1.c0":"🛝 انظر تحت الزلاقة","st.beep.h1.c1":"🎠 انظر خلف الأرجوحة",
"st.beep.h2a.t":"ترفع… لا يوجد بيب تحت الزلاقة! «بيب بيب!» يأتي الصوت مرة أخرى — أقرب هذه المرة. بيب لا يزال يختبئ، ولا يزال موجودًا!","st.beep.h2a.c0":"🏖️ انظر في صندوق الرمل",
"st.beep.h2b.t":"نظرة… لا يوجد بيب خلف الأرجوحة! «بيب بيب!» إنه يضحك في مكان آخر. حتى عندما لا تستطيع رؤية بيب، فهو لا يزال هناك!","st.beep.h2b.c0":"🪑 انظر تحت المقعد",
"st.beep.h3.t":"ترفع المنشفة الزرقاء الصغيرة و… «بيب بيب!» ها هو! يقفز بيب ويمنحك عناق روبوت. بطل لعبة الاختباء!","st.beep.h3.m":"الأشياء تظل موجودة حتى عندما لا تستطيع رؤيتها — هذا اكتشاف عقلي كبير!","st.beep.h3.r":"العبوا لعبة الاختباء، أو أخفِ لعبة تحت كوب ودع طفلك يجدها.",
"st.duck.title":"يوم استحمام البطريق الصغير","st.duck.desc":"البطريق الصغير غير متأكد من وقت الاستحمام. رشّ الماء بلطف واكتشف ما يطفو!","st.duck.theme":"الطفو والغرق · الثقة في الماء",
"st.duck.s1.t":"طرطش! يمشي البطريق الصغير متمايلًا نحو الحمام الدافئ. «هل الماء كبير جدًا على بطة صغيرة؟» يهمس.","st.duck.s1.c0":"💧 المس الماء ببطء","st.duck.s1.c1":"🛁 أحضر القارب الأصفر أولًا",
"st.duck.s2.t":"يغمس البطريق قدمًا مكففة واحدة… ثم بوب — إنه يطفو! «أنا أطفو! أنا أطفو!» يصرخ بفرح.","st.duck.s2.c0":"🫧 انفخ موجات من الفقاعات","st.duck.s2.c1":"🦆 دور في دوائر سعيدة",
"st.duck.s2b.t":"يتمايل القارب الأصفر الصغير في الأعلى. «إنه يطفو — وأنا سأطفو أيضًا!» يقول البطريق الشجاع، قافزًا إلى الداخل.","st.duck.s2b.c0":"🫧 انفخ موجات من الفقاعات","st.duck.s2b.c1":"🦆 تسابق مع القارب الأصفر",
"st.duck.s3.t":"فقاعات في كل مكان! يفرقع البطريق واحدة بمنقاره — بوب! وقت الاستحمام هو أفضل وقت.","st.duck.s3.c0":"صرخة نهاية سعيدة",
"st.duck.end.t":"«أراك غدًا يا ماء!» يقول البطريق، يطفو كالمحترف. النهاية — الآن جرب الطفو في الحمام مع ألعابك!",
},
zh: {
"st.beep.title":"哔哔在哪里？","st.beep.desc":"机器人哔哔藏起来了。你能凭它的哔哔声找到它吗？","st.beep.theme":"物体恒存 · 倾听、躲猫猫",
"st.beep.h1.t":"「哔哔！」机器人哔哔咯咯笑着，藏到了游乐场的某个地方。你能听见它，却看不见它。哔哔声是从哪儿传来的？","st.beep.h1.c0":"🛝 看看滑梯下面","st.beep.h1.c1":"🎠 看看秋千后面",
"st.beep.h2a.t":"你掀开……滑梯下面没有哔哔！「哔哔！」声音又来了——这次更近了。哔哔还藏着，它还在！","st.beep.h2a.c0":"🏖️ 看看沙坑里",
"st.beep.h2b.t":"瞧一眼……秋千后面没有哔哔！「哔哔！」它在别的地方咯咯笑呢。即使你看不见哔哔，它也还在那儿！","st.beep.h2b.c0":"🪑 看看长椅下面",
"st.beep.h3.t":"你掀起蓝色的小毛巾，然后……「哔哔！」它在这儿！哔哔跳起来给你一个机器人拥抱。躲猫猫冠军！","st.beep.h3.m":"即使看不见，东西也还在——这是一个了不起的大脑发现！","st.beep.h3.r":"玩躲猫猫，或者把玩具藏在杯子下面，让孩子来找。",
"st.duck.title":"小鸭子的洗澡日","st.duck.desc":"小鸭子对洗澡有点没把握。轻轻拍拍水，看看什么会浮起来！","st.duck.theme":"浮与沉 · 水中自信",
"st.duck.s1.t":"哗啦！小鸭子摇摇摆摆地走向温暖的澡盆。「水对一只小鸭子来说会不会太大了？」它小声说。","st.duck.s1.c0":"💧 慢慢地碰一碰水","st.duck.s1.c1":"🛁 先把黄色小船拿来",
"st.duck.s2.t":"小鸭子把一只蹼脚伸进水里……然后砰——它浮起来了！「我浮起来了！我浮起来啦！」它开心地嘎嘎叫。","st.duck.s2.c0":"🫧 吹出泡泡波浪","st.duck.s2.c1":"🦆 开心地转圈圈",
"st.duck.s2b.t":"黄色的小船在上面一摇一摇。「它会浮——我也会！」勇敢的小鸭子说着跳了进去。","st.duck.s2b.c0":"🫧 吹出泡泡波浪","st.duck.s2b.c1":"🦆 和黄色小船比赛",
"st.duck.s3.t":"到处都是泡泡！小鸭子用嘴巴戳破一个——砰！洗澡时间最棒了。","st.duck.s3.c0":"嘎嘎叫出一个快乐的结局",
"st.duck.end.t":"「明天见，水！」小鸭子说，浮得像个高手。完——现在用你的玩具试试洗澡时浮起来吧！",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
