/* WonderSprout story content — part 13: "Benny Bear's Picnic" + "Finn the Little Fish" in es/fr/de/ar/zh. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
es: {
"st.picnic.title":"El Picnic de Benny el Oso","st.picnic.desc":"Benny empaca tres manzanas. ¿Con quién las compartirá?","st.picnic.theme":"Matemáticas y bondad · contar, compartir",
"st.picnic.p1.t":"Benny el Oso empaca su cesta: una manzana, dos manzanas, ¡TRES manzanas! «Un picnic necesita amigos», dice. ¿A quién debería invitar?","st.picnic.p1.c0":"🐰 Invita a Rosie la Coneja","st.picnic.p1.c1":"🦊 Invita a Felix el Zorro",
"st.picnic.p2a.t":"Rosie la Coneja llega saltando. Tres manzanas, dos amigos… «Una para ti, una para mí», dice Benny, «¡y una que podemos partir por la mitad!»","st.picnic.p2a.c0":"🍎 Una para cada uno — ¡justo!","st.picnic.p2a.c1":"🍯 Guarda una para el postre",
"st.picnic.p2b.t":"Felix el Zorro tiene mucha hambre — ¡le gustaría tener DOS manzanas! Benny piensa mucho. Entonces Felix sonríe: «O… ¡podríamos recoger bayas juntos y tener MÁS para todos!»","st.picnic.p2b.c0":"🫐 Recojan bayas juntos","st.picnic.p2b.c1":"🍎 Compartan las manzanas de todos modos",
"st.picnic.p3.t":"El mantel de picnic se llena: manzanas, bayas, sándwiches de miel y dos amigos muy felices. ¡Contar juntos hizo que todo supiera mejor!","st.picnic.p3.m":"Contar y compartir hacen buenos amigos — y grandes picnics.","st.picnic.p3.r":"En tu próxima merienda, cuenten juntos los platos y las tazas: ¡uno para cada persona!",
"st.finn.title":"Finn el Pececito","st.finn.desc":"Finn busca la perla brillante en el fondo del mar.","st.finn.theme":"Mundo acuático · contar, bondad",
"st.finn.f1.t":"¡Blub blub! Finn el pececito escucha sobre una perla brillante escondida en el azul profundo. «¡La encontraré!» Pero el mar es grande. ¿Quién puede ayudar?","st.finn.f1.c0":"🐙 Pregunta a Ollie el Pulpo","st.finn.f1.c1":"🫧 Sigue las burbujas plateadas",
"st.finn.f2a.t":"Ollie el Pulpo saluda con los OCHO brazos. «Cuenta conmigo — ¡1, 2, 3, 4, 5, 6, 7, 8! La perla vive más allá del octavo coral», señala con su brazo más largo.","st.finn.f2a.c0":"🪸 Nada más allá de ocho corales",
"st.finn.f2b.t":"Las burbujas plateadas llevan a Finn hacia abajo, abajo, abajo… hasta una concha gigante dormida. ¿Debería Finn abrirla sin más?","st.finn.f2b.c0":"🚪 Toca educadamente primero","st.finn.f2b.c1":"🎵 Canta para despertar la concha",
"st.finn.f3.t":"La concha se abre y — ¡GUAU! La perla brilla como una luna diminuta. Finn comparte su luz con el rincón más oscuro del mar, para que nadie tenga miedo ya más.","st.finn.f3.m":"La cortesía y compartir hacen que cada tesoro brille más.","st.finn.f3.r":"Cuenta las burbujas en tu próximo baño — ¿puedes reventar exactamente cinco?",
},
fr: {
"st.picnic.title":"Le Pique-nique de Benny l'Ours","st.picnic.desc":"Benny empaquette trois pommes. Avec qui va-t-il les partager ?","st.picnic.theme":"Maths et gentillesse · compter, partager",
"st.picnic.p1.t":"Benny l'Ours remplit son panier : une pomme, deux pommes, TROIS pommes ! « Un pique-nique a besoin d'amis », dit-il. Qui devrait-il inviter ?","st.picnic.p1.c0":"🐰 Inviter Rosie la Lapine","st.picnic.p1.c1":"🦊 Inviter Felix le Renard",
"st.picnic.p2a.t":"Rosie la Lapine arrive en sautillant. Trois pommes, deux amis… « Une pour toi, une pour moi », dit Benny, « et une que nous pouvons partager en moitiés ! »","st.picnic.p2a.c0":"🍎 Une chacun — c'est juste !","st.picnic.p2a.c1":"🍯 Garde-en une pour le dessert",
"st.picnic.p2b.t":"Felix le Renard a très faim — il aimerait DEUX pommes ! Benny réfléchit beaucoup. Puis Felix sourit : « Ou… nous pourrions cueillir des baies ensemble et en avoir PLUS pour tout le monde ! »","st.picnic.p2b.c0":"🫐 Cueillez des baies ensemble","st.picnic.p2b.c1":"🍎 Partagez quand même les pommes",
"st.picnic.p3.t":"La nappe de pique-nique se remplit : pommes, baies, sandwichs au miel et deux amis très heureux. Compter ensemble a tout rendu meilleur !","st.picnic.p3.m":"Compter et partager font de bons amis — et de grands pique-niques.","st.picnic.p3.r":"À ton prochain goûter, comptez ensemble les assiettes et les tasses : une pour chaque personne !",
"st.finn.title":"Finn le Petit Poisson","st.finn.desc":"Finn cherche la perle brillante au fond de la mer.","st.finn.theme":"Monde aquatique · compter, gentillesse",
"st.finn.f1.t":"Bloup bloup ! Finn le petit poisson entend parler d'une perle brillante cachée dans le grand bleu. « Je vais la trouver ! » Mais la mer est grande. Qui peut aider ?","st.finn.f1.c0":"🐙 Demander à Ollie la Pieuvre","st.finn.f1.c1":"🫧 Suivre les bulles argentées",
"st.finn.f2a.t":"Ollie la Pieuvre salue de ses HUIT bras. « Compte avec moi — 1, 2, 3, 4, 5, 6, 7, 8 ! La perle vit au-delà du huitième corail », indique-t-il de son plus long bras.","st.finn.f2a.c0":"🪸 Nage au-delà de huit coraux",
"st.finn.f2b.t":"Les bulles argentées emmènent Finn vers le bas, le bas, le bas… jusqu'à un coquillage géant endormi. Finn devrait-il simplement l'ouvrir ?","st.finn.f2b.c0":"🚪 Toque poliment d'abord","st.finn.f2b.c1":"🎵 Chante pour réveiller le coquillage",
"st.finn.f3.t":"Le coquillage s'ouvre et — WAOUH ! La perle brille comme une petite lune. Finn partage sa lumière avec le coin le plus sombre de la mer, pour que plus personne n'ait peur.","st.finn.f3.m":"La politesse et le partage rendent chaque trésor plus brillant.","st.finn.f3.r":"Compte les bulles de ton prochain bain — peux-tu en éclater exactement cinq ?",
},
de: {
"st.picnic.title":"Benny Bärs Picknick","st.picnic.desc":"Benny packt drei Äpfel ein. Mit wem wird er sie teilen?","st.picnic.theme":"Mathe & Freundlichkeit · zählen, teilen",
"st.picnic.p1.t":"Benny Bär packt seinen Korb: ein Apfel, zwei Äpfel, DREI Äpfel! „Ein Picknick braucht Freunde“, sagt er. Wen sollte er einladen?","st.picnic.p1.c0":"🐰 Lade Rosie das Kaninchen ein","st.picnic.p1.c1":"🦊 Lade Felix den Fuchs ein",
"st.picnic.p2a.t":"Rosie das Kaninchen hoppelt herbei. Drei Äpfel, zwei Freunde… „Einer für dich, einer für mich“, sagt Benny, „und einen können wir halbieren!“","st.picnic.p2a.c0":"🍎 Jeder einen — das ist fair!","st.picnic.p2a.c1":"🍯 Heb einen für den Nachtisch auf",
"st.picnic.p2b.t":"Felix der Fuchs ist sehr hungrig — er hätte gern ZWEI Äpfel! Benny denkt lange nach. Dann lächelt Felix: „Oder… wir könnten zusammen Beeren pflücken und MEHR für alle haben!“","st.picnic.p2b.c0":"🫐 Pflückt zusammen Beeren","st.picnic.p2b.c1":"🍎 Teilt die Äpfel trotzdem",
"st.picnic.p3.t":"Die Picknickdecke füllt sich: Äpfel, Beeren, Honigbrote und zwei sehr glückliche Freunde. Zusammen zählen ließ alles besser schmecken!","st.picnic.p3.m":"Zählen und Teilen machen gute Freunde — und großartige Picknicks.","st.picnic.p3.r":"Zählt bei deinem nächsten Snack gemeinsam Teller und Tassen: einen für jede Person!",
"st.finn.title":"Finn der Kleine Fisch","st.finn.desc":"Finn sucht die glänzende Perle am Grund des Meeres.","st.finn.theme":"Wasserwelt · zählen, Freundlichkeit",
"st.finn.f1.t":"Blubb blubb! Finn der kleine Fisch hört von einer glänzenden Perle, versteckt im tiefen Blau. „Ich werde sie finden!“ Aber das Meer ist groß. Wer kann helfen?","st.finn.f1.c0":"🐙 Frage Ollie den Oktopus","st.finn.f1.c1":"🫧 Folge den silbernen Blasen",
"st.finn.f2a.t":"Ollie der Oktopus winkt mit ALLEN ACHT Armen. „Zähl mit mir — 1, 2, 3, 4, 5, 6, 7, 8! Die Perle wohnt hinter der achten Koralle“, zeigt er mit seinem längsten Arm.","st.finn.f2a.c0":"🪸 Schwimme an acht Korallen vorbei",
"st.finn.f2b.t":"Die silbernen Blasen führen Finn hinunter, hinunter, hinunter… zu einer riesigen schlafenden Muschel. Sollte Finn sie einfach öffnen?","st.finn.f2b.c0":"🚪 Klopfe zuerst höflich an","st.finn.f2b.c1":"🎵 Sing, um die Muschel zu wecken",
"st.finn.f3.t":"Die Muschel öffnet sich und — WOW! Die Perle leuchtet wie ein winziger Mond. Finn teilt ihr Licht mit der dunkelsten Ecke des Meeres, damit niemand mehr Angst hat.","st.finn.f3.m":"Höflichkeit und Teilen machen jeden Schatz heller.","st.finn.f3.r":"Zähl die Blasen bei deinem nächsten Bad — kannst du genau fünf platzen lassen?",
},
ar: {
"st.picnic.title":"نزهة الدب بيني","st.picnic.desc":"يضع بيني ثلاث تفاحات في سلته. مع من سيشاركها؟","st.picnic.theme":"الرياضيات واللطف · العد، المشاركة",
"st.picnic.p1.t":"يضع الدب بيني في سلته: تفاحة واحدة، تفاحتان، ثلاث تفاحات! «النزهة تحتاج أصدقاء»، يقول. من يجب أن يدعو؟","st.picnic.p1.c0":"🐰 ادعُ الأرنبة روزي","st.picnic.p1.c1":"🦊 ادعُ الثعلب فيليكس",
"st.picnic.p2a.t":"تقفز الأرنبة روزي قادمة. ثلاث تفاحات، صديقان… «واحدة لك، وواحدة لي»، يقول بيني، «وواحدة نقسمها نصفين!»","st.picnic.p2a.c0":"🍎 واحدة لكل منا — هذا عادل!","st.picnic.p2a.c1":"🍯 احفظ واحدة للحلوى",
"st.picnic.p2b.t":"الثعلب فيليكس جائع جدًا — يريد تفاحتين! يفكر بيني بعمق. ثم يبتسم فيليكس: «أو… يمكننا قطف التوت معًا ويصبح لدينا المزيد للجميع!»","st.picnic.p2b.c0":"🫐 اقطفوا التوت معًا","st.picnic.p2b.c1":"🍎 شاركوا التفاح على أي حال",
"st.picnic.p3.t":"تمتلئ مفرش النزهة: تفاح، توت، شطائر عسل، وصديقان سعيدان جدًا. العد معًا جعل كل شيء ألذ!","st.picnic.p3.m":"العد والمشاركة يصنعان أصدقاء طيبين — ونزهات رائعة.","st.picnic.p3.r":"في وجبتك الخفيفة القادمة، عدّوا الأطباق والأكواب معًا: واحد لكل شخص!",
"st.finn.title":"فين السمكة الصغيرة","st.finn.desc":"يبحث فين عن اللؤلؤة اللامعة في قاع البحر.","st.finn.theme":"عالم الماء · العد، اللطف",
"st.finn.f1.t":"بلوب بلوب! يسمع فين السمكة الصغيرة عن لؤلؤة لامعة مخبأة في الأزرق العميق. «سأجدها!» لكن البحر كبير. من يستطيع المساعدة؟","st.finn.f1.c0":"🐙 اسأل الأخطبوط أولي","st.finn.f1.c1":"🫧 اتبع الفقاعات الفضية",
"st.finn.f2a.t":"يلوح الأخطبوط أولي بأذرعه الثمانية كلها. «عدّ معي — ١، ٢، ٣، ٤، ٥، ٦، ٧، ٨! اللؤلؤة تسكن بعد المرجانة الثامنة»، يشير بأطول ذراع له.","st.finn.f2a.c0":"🪸 اسبح بعد ثماني مرجانات",
"st.finn.f2b.t":"تقود الفقاعات الفضية فين إلى أسفل، أسفل، أسفل… إلى صدفة عملاقة نائمة. هل يجب على فين فتحها مباشرة؟","st.finn.f2b.c0":"🚪 اطرق بأدب أولًا","st.finn.f2b.c1":"🎵 غنِّ لإيقاظ الصدفة",
"st.finn.f3.t":"تفتح الصدفة و— واو! تتوهج اللؤلؤة مثل قمر صغير. يشارك فين نورها مع أظلم زاوية في البحر، فلا يخاف أحد بعد الآن.","st.finn.f3.m":"الأدب والمشاركة يجعلان كل كنز أكثر إشراقًا.","st.finn.f3.r":"عدّ الفقاعات في حمامك القادم — هل يمكنك فرقعة خمس بالضبط؟",
},
zh: {
"st.picnic.title":"小熊本尼的野餐","st.picnic.desc":"本尼带了三个苹果。他会和谁分享呢？","st.picnic.theme":"数学与善意 · 数数、分享",
"st.picnic.p1.t":"小熊本尼把苹果装进篮子：一个苹果，两个苹果，三个苹果！「野餐需要朋友，」他说。该邀请谁呢？","st.picnic.p1.c0":"🐰 邀请小兔罗西","st.picnic.p1.c1":"🦊 邀请狐狸菲利克斯",
"st.picnic.p2a.t":"小兔罗西蹦蹦跳跳地来了。三个苹果，两个朋友……「一个给你，一个给我，」本尼说，「还有一个我们分两半！」","st.picnic.p2a.c0":"🍎 一人一个——真公平！","st.picnic.p2a.c1":"🍯 留一个当甜点",
"st.picnic.p2b.t":"狐狸菲利克斯好饿——他想要两个苹果！本尼认真想了想。然后菲利克斯笑了：「或者……我们可以一起去采浆果，大家就有更多了！」","st.picnic.p2b.c0":"🫐 一起去采浆果","st.picnic.p2b.c1":"🍎 还是把苹果分了吧",
"st.picnic.p3.t":"野餐布上摆满了：苹果、浆果、蜂蜜三明治，还有两个特别开心的朋友。一起数数让所有东西都更好吃了！","st.picnic.p3.m":"一起数数、一起分享，能交到好朋友——也能有好野餐。","st.picnic.p3.r":"下次吃点心时，一起数盘子和杯子：一人一个！",
"st.finn.title":"小鱼芬恩","st.finn.desc":"芬恩在海底找那颗闪亮的珍珠。","st.finn.theme":"水中世界 · 数数、善意",
"st.finn.f1.t":"咕噜咕噜！小鱼芬恩听说深蓝色的海底藏着一颗闪亮的珍珠。「我要找到它！」可是海好大。谁能帮忙呢？","st.finn.f1.c0":"🐙 问问章鱼奥利","st.finn.f1.c1":"🫧 跟着银色泡泡走",
"st.finn.f2a.t":"章鱼奥利挥动八条手臂。「跟我一起数——1、2、3、4、5、6、7、8！珍珠住在第八个珊瑚后面，」他用最长的那条手臂指路。","st.finn.f2a.c0":"🪸 游过八个珊瑚",
"st.finn.f2b.t":"银色泡泡带着芬恩往下，往下，往下……来到一个巨大的、正在睡觉的贝壳前。芬恩该直接打开它吗？","st.finn.f2b.c0":"🚪 先礼貌地敲敲门","st.finn.f2b.c1":"🎵 唱歌叫醒贝壳",
"st.finn.f3.t":"贝壳打开了，然后——哇！珍珠像小小的月亮一样发光。芬恩把它的光分享给海里最黑的角落，这样再也没有人害怕了。","st.finn.f3.m":"有礼貌、肯分享，会让每件宝物都更闪亮。","st.finn.f3.r":"下次洗澡时数数泡泡——你能正好戳破五个吗？",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
