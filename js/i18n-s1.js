/* WonderSprout story content — part 1: "Pip and the Little Seed" in es/fr/de/ar/zh.
   Key scheme (consumed by stories.js):
     st.<story>.title | .desc | .theme
     st.<story>.<scene>.t            scene text
     st.<story>.<scene>.c<i>         choice label i
     st.<story>.<scene>.m | .r       ending moral / real-world activity */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
es: {
"st.pip.title":"Pip y la Semillita","st.pip.desc":"Pip el brote despierta bajo la tierra. ¡Ayuda a Pip a elegir cómo crecer!","st.pip.theme":"Laboratorio de Vida · crecimiento, agua, luz solar",
"st.pip.s1.t":"Muy bajo la tierra, una semillita llamada Pip despierta. «Está oscuro aquí», susurra Pip. «¡Quiero ver el mundo!»","st.pip.s1.c0":"💧 Empuja hacia el agua","st.pip.s1.c1":"☀️ Empuja hacia el calor",
"st.pip.s2w.t":"Pip sigue el agua fresca y — ¡POP! — un brotecito verde rompe la tierra. «¡Hola, mundo!» dice Pip. Pasa flotando una nube de lluvia.","st.pip.s2w.c0":"🌧️ Pídele un trago a la nube","st.pip.s2w.c1":"🐝 Saluda primero a la abeja",
"st.pip.s2s.t":"Pip sigue el sol cálido y — ¡POP! — un brotecito verde rompe la tierra. «¡Hola, mundo!» dice Pip. El sol sonríe desde arriba.","st.pip.s2s.c0":"☀️ Agradece al sol por el calor","st.pip.s2s.c1":"🐝 Saluda primero a la abeja",
"st.pip.s3bee.t":"Una abeja peluda llega zumbando. «¡Bzzz! ¡Hola, brotecito! Las abejas ayudan a crecer a las flores. ¿Quieres ser amiga de las flores?»","st.pip.s3bee.c0":"🌸 ¡Sí! Ser amiga de las flores",
"st.pip.s3.t":"Pip crece más alto cada día. Una hoja… dos hojas… ¡tres! Pero Pip tiene sed Y quiere sol. ¿Qué debería hacer Pip?","st.pip.s3.c0":"💧 Bebe agua primero","st.pip.s3.c1":"☀️ Estírate al sol primero","st.pip.s3.c2":"🎵 Canta una canción de crecimiento",
"st.pip.s4song.t":"Pip canta «¡Crece, crece, crece!» La abeja baila. La nube llueve un poquito. El sol se asoma. ¡Todos ayudan a Pip a crecer!","st.pip.s4song.c0":"🌱 ¡Sigue creciendo!",
"st.pip.s4.t":"Agua en las raíces, sol en las hojas — Pip siente un bultito arriba. ¡Un capullo! «Algo maravilloso viene», tararea la abeja.","st.pip.s4.c0":"🌼 ¡Abre el capullo!",
"st.pip.s5.t":"¡POP! ¡Pip se convierte en una hermosa flor dorada! La abeja baila, la nube aplaude con lluvia, y una niña susurra: «Hola, Pip». ¡Agua + sol + tiempo + amigos = una maravilla!","st.pip.s5.m":"Todo crece con un poco de agua, un poco de sol y mucha paciencia.","st.pip.s5.r":"Planta un frijol en un vaso con algodón húmedo. Riégalo a diario y ¡mira crecer a TU propio Pip!",
},
fr: {
"st.pip.title":"Pip et la Petite Graine","st.pip.desc":"Pip le germe se réveille sous la terre. Aide Pip à choisir comment grandir !","st.pip.theme":"Labo de la Vie · croissance, eau, soleil",
"st.pip.s1.t":"Tout au fond de la terre, une petite graine nommée Pip se réveille. « Il fait noir ici », chuchote Pip. « Je veux voir le monde ! »","st.pip.s1.c0":"💧 Pousse vers l'eau","st.pip.s1.c1":"☀️ Pousse vers la chaleur",
"st.pip.s2w.t":"Pip suit l'eau fraîche et — POP ! — une petite pousse verte perce la terre. « Bonjour, le monde ! » dit Pip. Un nuage de pluie passe en flottant.","st.pip.s2w.c0":"🌧️ Demande à boire au nuage","st.pip.s2w.c1":"🐝 Dis d'abord bonjour à l'abeille",
"st.pip.s2s.t":"Pip suit le chaud soleil et — POP ! — une petite pousse verte perce la terre. « Bonjour, le monde ! » dit Pip. Le soleil sourit d'en haut.","st.pip.s2s.c0":"☀️ Remercie le soleil pour la chaleur","st.pip.s2s.c1":"🐝 Dis d'abord bonjour à l'abeille",
"st.pip.s3bee.t":"Une abeille toute douce arrive en bourdonnant. « Bzzz ! Bonjour, petite pousse ! Les abeilles aident les fleurs à pousser. Veux-tu devenir amie des fleurs ? »","st.pip.s3bee.c0":"🌸 Oui ! Devenir amie des fleurs",
"st.pip.s3.t":"Pip grandit un peu chaque jour. Une feuille… deux feuilles… trois ! Mais Pip a soif ET veut du soleil. Que devrait faire Pip ?","st.pip.s3.c0":"💧 Bois de l'eau d'abord","st.pip.s3.c1":"☀️ Étire-toi vers le soleil d'abord","st.pip.s3.c2":"🎵 Chante une chanson de croissance",
"st.pip.s4song.t":"Pip chante « Pousse, pousse, pousse ! » L'abeille danse. Le nuage pleut un peu. Le soleil pointe son nez. Tout le monde aide Pip à grandir !","st.pip.s4song.c0":"🌱 Continue de grandir !",
"st.pip.s4.t":"De l'eau sur les racines, du soleil sur les feuilles — Pip sent une petite bosse en haut. Un bouton ! « Quelque chose de merveilleux arrive », fredonne l'abeille.","st.pip.s4.c0":"🌼 Ouvre le bouton !",
"st.pip.s5.t":"POP ! Pip devient une magnifique fleur dorée ! L'abeille danse, le nuage applaudit avec la pluie, et une petite fille chuchote : « Bonjour, Pip ». Eau + soleil + temps + amis = une merveille !","st.pip.s5.m":"Tout pousse avec un peu d'eau, un peu de soleil et beaucoup de patience.","st.pip.s5.r":"Plante un haricot dans un verre avec du coton humide. Arrose-le chaque jour et regarde TON propre Pip grandir !",
},
de: {
"st.pip.title":"Pip und das kleine Samenkorn","st.pip.desc":"Pip der Spross wacht unter der Erde auf. Hilf Pip zu entscheiden, wie er wachsen soll!","st.pip.theme":"Lebens-Labor · Wachstum, Wasser, Sonnenlicht",
"st.pip.s1.t":"Tief unter der Erde wacht ein winziges Samenkorn namens Pip auf. „Hier ist es dunkel“, flüstert Pip. „Ich will die Welt sehen!“","st.pip.s1.c0":"💧 Drücke nach oben zum Wasser","st.pip.s1.c1":"☀️ Drücke nach oben zur Wärme",
"st.pip.s2w.t":"Pip folgt dem kühlen Wasser und — PLOPP! — ein kleiner grüner Spross bricht durch die Erde. „Hallo, Welt!“ sagt Pip. Eine Regenwolke zieht vorbei.","st.pip.s2w.c0":"🌧️ Bitte die Wolke um einen Schluck","st.pip.s2w.c1":"🐝 Sag zuerst der Biene hallo",
"st.pip.s2s.t":"Pip folgt dem warmen Sonnenschein und — PLOPP! — ein kleiner grüner Spross bricht durch die Erde. „Hallo, Welt!“ sagt Pip. Die Sonne lächelt herab.","st.pip.s2s.c0":"☀️ Danke der Sonne für die Wärme","st.pip.s2s.c1":"🐝 Sag zuerst der Biene hallo",
"st.pip.s3bee.t":"Eine flauschige Biene summt herbei. „Bzzz! Hallo, kleiner Spross! Bienen helfen Blumen zu wachsen. Möchtest du eine Blumenfreundin sein?“","st.pip.s3bee.c0":"🌸 Ja! Eine Blumenfreundin sein",
"st.pip.s3.t":"Pip wird jeden Tag größer. Ein Blatt… zwei Blätter… drei! Aber Pip hat Durst UND will Sonne. Was soll Pip tun?","st.pip.s3.c0":"💧 Trink zuerst Wasser","st.pip.s3.c1":"☀️ Strecke dich zuerst zur Sonne","st.pip.s3.c2":"🎵 Sing ein Wachstumslied",
"st.pip.s4song.t":"Pip singt „Wachse, wachse, wachse!“ Die Biene tanzt. Die Wolke regnet ein wenig. Die Sonne lugt hervor. Alle helfen Pip beim Wachsen!","st.pip.s4song.c0":"🌱 Wachs weiter!",
"st.pip.s4.t":"Wasser an den Wurzeln, Sonne an den Blättern — Pip spürt oben eine kleine Beule. Eine Knospe! „Etwas Wunderbares kommt“, summt die Biene.","st.pip.s4.c0":"🌼 Öffne die Knospe!",
"st.pip.s5.t":"PLOPP! Pip wird zu einer wunderschönen goldenen Blume! Die Biene tanzt, die Wolke klatscht mit Regen, und ein kleines Mädchen flüstert: „Hallo, Pip.“ Wasser + Sonne + Zeit + Freunde = ein Wunder!","st.pip.s5.m":"Alles wächst mit ein bisschen Wasser, ein bisschen Sonne und viel Geduld.","st.pip.s5.r":"Pflanze eine Bohne in ein Glas mit feuchter Watte. Gieße sie täglich und sieh zu, wie DEIN eigener Pip wächst!",
},
ar: {
"st.pip.title":"بيب والبذرة الصغيرة","st.pip.desc":"بيب النبتة يستيقظ تحت الأرض. ساعد بيب في اختيار كيف ينمو!","st.pip.theme":"مختبر الحياة · النمو والماء وضوء الشمس",
"st.pip.s1.t":"عميقًا تحت التربة، تستيقظ بذرة صغيرة اسمها بيب. «الجو مظلم هنا»، تهمس بيب. «أريد أن أرى العالم!»","st.pip.s1.c0":"💧 ادفع نحو الماء","st.pip.s1.c1":"☀️ ادفع نحو الدفء",
"st.pip.s2w.t":"تتبع بيب الماء البارد و— بوب! — نبتة خضراء صغيرة تخترق التربة. «مرحبًا أيها العالم!» تقول بيب. تمرّ سحابة مطر.","st.pip.s2w.c0":"🌧️ اطلب من السحابة شربة","st.pip.s2w.c1":"🐝 حيِّ النحلة أولًا",
"st.pip.s2s.t":"تتبع بيب ضوء الشمس الدافئ و— بوب! — نبتة خضراء صغيرة تخترق التربة. «مرحبًا أيها العالم!» تقول بيب. تبتسم الشمس من فوق.","st.pip.s2s.c0":"☀️ اشكر الشمس على الدفء","st.pip.s2s.c1":"🐝 حيِّ النحلة أولًا",
"st.pip.s3bee.t":"نحلة وبرية تطنّ قادمة. «ززز! مرحبًا أيتها النبتة الصغيرة! النحل يساعد الأزهار على النمو. هل تريدين أن نصبح صديقتي زهور؟»","st.pip.s3bee.c0":"🌸 نعم! نصبح صديقتي زهور",
"st.pip.s3.t":"تكبر بيب كل يوم. ورقة… ورقتان… ثلاث! لكن بيب عطشانة وتريد الشمس أيضًا. ماذا يجب أن تفعل بيب؟","st.pip.s3.c0":"💧 اشرب الماء أولًا","st.pip.s3.c1":"☀️ امدد نحو الشمس أولًا","st.pip.s3.c2":"🎵 غنِّ أغنية النمو",
"st.pip.s4song.t":"تغني بيب «انمُ، انمُ، انمُ!» ترقص النحلة. تمطر السحابة قليلًا. تطلّ الشمس. الجميع يساعد بيب على النمو!","st.pip.s4song.c0":"🌱 استمر في النمو!",
"st.pip.s4.t":"ماء على الجذور، شمس على الأوراق — تشعر بيب بانتفاخ صغير في الأعلى. برعم! «شيء رائع قادم»، تطنّ النحلة.","st.pip.s4.c0":"🌼 افتح البرعم!",
"st.pip.s5.t":"بوب! تصبح بيب زهرة ذهبية جميلة! ترقص النحلة، وتصفق السحابة بالمطر، وتهمس طفلة صغيرة: «مرحبًا بيب». ماء + شمس + وقت + أصدقاء = عجائب!","st.pip.s5.m":"كل شيء ينمو بقليل من الماء، وقليل من الشمس، وكثير من الصبر.","st.pip.s5.r":"ازرع حبة فاصوليا في كوب بقطن مبلل. اسقها يوميًا وشاهد بيب الخاص بك ينمو!",
},
zh: {
"st.pip.title":"小皮和小种子","st.pip.desc":"小芽皮在地下醒来了。帮皮选择怎么长大！","st.pip.theme":"生命实验室 · 生长、水、阳光",
"st.pip.s1.t":"在深深的泥土下面，一颗叫皮的小种子醒了。「这里好黑，」皮小声说。「我想看看外面的世界！」","st.pip.s1.c0":"💧 朝着水的方向往上钻","st.pip.s1.c1":"☀️ 朝着温暖的方向往上钻",
"st.pip.s2w.t":"皮跟着凉爽的水——砰！——一棵绿色的小芽顶破了泥土。「你好，世界！」皮说。一朵雨云飘了过来。","st.pip.s2w.c0":"🌧️ 请云朵给一口水喝","st.pip.s2w.c1":"🐝 先跟蜜蜂打招呼",
"st.pip.s2s.t":"皮跟着温暖的阳光——砰！——一棵绿色的小芽顶破了泥土。「你好，世界！」皮说。太阳在上面微笑。","st.pip.s2s.c0":"☀️ 谢谢太阳给的温暖","st.pip.s2s.c1":"🐝 先跟蜜蜂打招呼",
"st.pip.s3bee.t":"一只毛茸茸的蜜蜂嗡嗡飞来。「嗡嗡！你好，小芽！蜜蜂帮花儿长大。你愿意和花儿做朋友吗？」","st.pip.s3bee.c0":"🌸 好！和花儿做朋友",
"st.pip.s3.t":"皮每天都长高一点。一片叶子……两片叶子……三片！可是皮又渴又想要阳光。皮该怎么办？","st.pip.s3.c0":"💧 先喝水","st.pip.s3.c1":"☀️ 先向着太阳伸展","st.pip.s3.c2":"🎵 唱一首生长歌",
"st.pip.s4song.t":"皮唱起「长呀长呀长！」蜜蜂跳舞。云朵下了一点雨。太阳探出头来。大家都帮皮长大！","st.pip.s4song.c0":"🌱 继续长大！",
"st.pip.s4.t":"根上有水，叶上有阳光——皮觉得顶上鼓起一个小包。是花苞！「有美妙的事情要来啦，」蜜蜂嗡嗡地说。","st.pip.s4.c0":"🌼 打开花苞！",
"st.pip.s5.t":"砰！皮变成了一朵美丽的金色小花！蜜蜂跳舞，云朵用雨点鼓掌，一个小女孩轻声说：「你好，皮。」水＋阳光＋时间＋朋友＝一个奇迹！","st.pip.s5.m":"只要有了一点水、一点阳光和很多耐心，什么都会长大。","st.pip.s5.r":"在杯子里放上湿棉花，种一颗豆子。每天浇水，看着你自己的小皮长大！",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
