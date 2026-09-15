/* ============================================================
   WonderSprout — Music page UI + song titles/descriptions
   (pt/ru/hi/ur/tr)
   keys: music.freeTitle/freeDesc/clapTitle/clapDesc/tip1..4/sing/stop/tempo0..2
         song0..15.t (title), song0..15.d (desc)
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    pt: {
      "music.freeTitle": "Teclado livre",
      "music.freeDesc": "Toca nas teclas coloridas — todas as notas soam bem juntas. No WonderSprout não há notas erradas!",
      "music.clapTitle": "Bate palmas no ritmo",
      "music.clapDesc": "Um pulso como um batimento — bate palmas quando ele crescer! Primeiro o ritmo, depois as notas.",
      "music.tip1": "<b>👪 Dica:</b> canta em voz alta, mesmo mal! A tua voz é o instrumento favorito do teu filho — e cantar ao vivo supera qualquer gravação na aprendizagem da língua.",
      "music.tip2": "<b>👪 Para adultos:</b> canta a letra com o teu filho e junta gestos — dedos a brilhar, braços a remar, mãos a dormir. Gestos + melodia + palavras = tripla âncora de memória.",
      "music.tip3": "<b>👪 Para adultos:</b> as teclas usam uma escala pentatónica — todas as combinações soam bem, por isso explorar é sempre recompensado. Tenta repetir-lhe a sua própria melodia!",
      "music.tip4": "<b>👪 Para adultos:</b> sintam o ritmo juntos — palmas, joelhos, balanços suaves. O sentido do ritmo nesta idade prevê a fluência de leitura. Sem pressão de pontos: cada palma conta como brincadeira.",
      "music.sing": "▶ Cantar!",
      "music.stop": "⏹ Parar",
      "music.tempo0": "🐢 Lento",
      "music.tempo1": "🚶 Normal",
      "music.tempo2": "🐇 Saltitante",

      "song0.t": "Brilha, brilha, estrelinha", "song0.d": "A canção de embalar clássica — suave e lenta.",
      "song1.t": "A Maria tinha um cordeirinho", "song1.d": "Uma favorita animada para bater palmas.",
      "song2.t": "Rema, rema o teu barco", "song2.d": "Balança de um lado para o outro enquanto cantas!",
      "song3.t": "Estás a dormir? (Irmão João)", "song3.d": "Um cânone para cantarmos juntos — perfeito para acalmar.",
      "song4.t": "Béé, béé, ovelha negra", "song4.d": "Três sacos de lã — uma canção de contar!",
      "song5.t": "Pãezinhos quentes", "song5.d": "Curta, doce e perfeita para os primeiros coros.",
      "song6.t": "A ponte de Londres está a cair", "song6.d": "Levanta-a com os braços — e depois cai!",
      "song7.t": "Sinos a tocar", "song7.d": "Tlim-tlim! Bate palmas em cada tilintar.",
      "song8.t": "Parabéns a você", "song8.d": "Para cada aniversário, cada bolo, cada vela a contar.",
      "song9.t": "Rema, rema o teu barco", "song9.d": "Ritmo de embalar suave — perfeito para o colo.",
      "song10.t": "A Maria tinha um cordeirinho", "song10.d": "Uma melodia descendente e sonolenta para noites calmas.",
      "song11.t": "A aranhinha Incy Wincy", "song11.d": "Diversão de dedos a trepar com uma melodia ascendente.",
      "song12.t": "O velho MacDonald tinha uma quinta", "song12.d": "Refrão de sons de animais — junta ao laboratório dos Animais!",
      "song13.t": "Humpty Dumpty", "song13.d": "Um muro a oscilar, uma grande queda — e uma aterragem suave.",
      "song14.t": "Hey Diddle Diddle", "song14.d": "Uma rima disparatada — a vaca salta alto!",
      "song15.t": "Este velhote", "song15.d": "Canção de contar — knick-knack paddy-whack!"
    },

    ru: {
      "music.freeTitle": "Свободные клавиши",
      "music.freeDesc": "Нажимай на цветные клавиши — все ноты звучат хорошо вместе. В WonderSprout нет неправильных нот!",
      "music.clapTitle": "Хлопай в ритм",
      "music.clapDesc": "Пульс, как биение сердца — хлопай, когда он растёт! Сначала ритм, потом ноты.",
      "music.tip1": "<b>👪 Совет:</b> пой вслух, даже плохо! Твой голос — любимый инструмент ребёнка, а живое пение полезнее любой записи для освоения языка.",
      "music.tip2": "<b>👪 Родителям:</b> пой слова вместе с ребёнком и добавляй движения — пальчики-звёздочки, руки-вёсла, спящие ладошки. Движение + мелодия + слова = тройная опора памяти.",
      "music.tip3": "<b>👪 Родителям:</b> клавиши используют пентатонику — любое сочетание звучит приятно, поэтому исследование всегда вознаграждается. Попробуй повторить ребёнку его собственную мелодию!",
      "music.tip4": "<b>👪 Родителям:</b> почувствуйте ритм вместе — хлопки в ладоши, по коленям, мягкое покачивание. Чувство ритма в этом возрасте предсказывает беглость чтения. Без подсчёта очков: каждый хлопок — это игра.",
      "music.sing": "▶ Петь!",
      "music.stop": "⏹ Стоп",
      "music.tempo0": "🐢 Медленно",
      "music.tempo1": "🚶 Обычно",
      "music.tempo2": "🐇 Прыгуче",

      "song0.t": "Светит месяц, светит ясный", "song0.d": "Классическая колыбельная — нежная и медленная.",
      "song1.t": "У Мэри был барашек", "song1.d": "Задорная любимая песенка, чтобы хлопать в ладоши.",
      "song2.t": "Греби, греби, греби лодку", "song2.d": "Качайся из стороны в сторону, пока поёшь!",
      "song3.t": "Ты спишь? (Братец Джон)", "song3.d": "Канон, который можно петь вместе — идеально для успокоения.",
      "song4.t": "Бе-бе, чёрный барашек", "song4.d": "Три мешка шерсти — песенка для счёта!",
      "song5.t": "Горячие булочки", "song5.d": "Короткая, милая и идеальная для первых подпеваний.",
      "song6.t": "Лондонский мост падает", "song6.d": "Построй его руками — а потом обрушь!",
      "song7.t": "Бубенцы", "song7.d": "Динь-динь! Хлопай на каждый звон.",
      "song8.t": "С днём рождения", "song8.d": "Для каждого дня рождения, каждого торта, каждой свечи для счёта.",
      "song9.t": "Греби, греби, греби лодку", "song9.d": "Мягкий укачивающий ритм — идеально для покачивания на коленях.",
      "song10.t": "У Мэри был барашек", "song10.d": "Сонная нисходящая мелодия для тихих вечеров.",
      "song11.t": "Паучок Инси-Винси", "song11.d": "Веселье с ползущими пальчиками и восходящей мелодией.",
      "song12.t": "У старого Макдональда была ферма", "song12.d": "Припев со звуками животных — совмести с лабораторией «Друзья-животные»!",
      "song13.t": "Шалтай-Болтай", "song13.d": "Шаткая стена, большое падение — и мягкое приземление.",
      "song14.t": "Хей Дидл Дидл", "song14.d": "Забавная бессмыслица — корова прыгает высоко!",
      "song15.t": "Этот старичок", "song15.d": "Песенка для счёта — ник-нак пэдди-вак!"
    },

    hi: {
      "music.freeTitle": "मुक्त प्याड",
      "music.freeDesc": "रंगीन प्याड दबाओ — हर सुर एक साथ अच्छा लगता है। WonderSprout में कोई गलत सुर नहीं!",
      "music.clapTitle": "ताल पर ताली",
      "music.clapDesc": "धड़कन जैसी लय — जब यह बड़े तब ताली बजाओ! पहले लय, फिर सुर।",
      "music.tip1": "<b>👪 सुझाव:</b> ज़ोर से गाओ, भले ही बेसुरा! तुम्हारी आवाज़ बच्चे का पसंदीदा वाद्य है — और असली गायन भाषा सीखने में किसी रिकॉर्डिंग से बेहतर है।",
      "music.tip2": "<b>👪 अभिभावक:</b> बच्चे के साथ बोल गाओ और हाव-भाव जोड़ो — चमकती उँगलियाँ, नाव चलाती बाँहें, सोते हाथ। हाव-भाव + धुन + शब्द = स्मृति के तीन हुक।",
      "music.tip3": "<b>👪 अभिभावक:</b> प्याड पंचम स्वरग्राम पर हैं — हर मेल मधुर लगता है, इसलिए खोज का हमेशा फल मिलता है। बच्चे की अपनी धुन उसे वापस सुनाने की कोशिश करो!",
      "music.tip4": "<b>👪 अभिभावक:</b> मिलकर ताल महसूस करो — ताली, घुटने थपथपाना, हल्का उछलना। इस उम्र की ताल-समझ आगे की पठन-प्रवाह की भविष्यवाणी करती है। अंकों का दबाव नहीं: हर ताली खेल है।",
      "music.sing": "▶ गाओ!",
      "music.stop": "⏹ रोकें",
      "music.tempo0": "🐢 धीमा",
      "music.tempo1": "🚶 सामान्य",
      "music.tempo2": "🐇 उछलता",

      "song0.t": "टिमटिम तारा", "song0.d": "क्लासिक लोरी — कोमल और धीमी।",
      "song1.t": "मेरी के पास एक मेमना था", "song1.d": "ताली बजाने के लिए उछलभरपूर्ण पसंदीदा।",
      "song2.t": "चलो, चलो, नाव चलाओ", "song2.d": "गाते हुए इधर-उधर झूलो!",
      "song3.t": "क्या तुम सो रहे हो? (भाई जॉन)", "song3.d": "एक साथ गाने वाला राउंड — शांत होने के लिए बिल्कुल सही।",
      "song4.t": "मैं मैं काली भेड़", "song4.d": "ऊन के तीन थैले — गिनती का गीत!",
      "song5.t": "गरम बन्स", "song5.d": "छोटा, मीठा और पहले मिलकर गाने के लिए उत्तम।",
      "song6.t": "लंदन का पुल गिर रहा है", "song6.d": "बाँहों से बनाओ — फिर गिर जाओ!",
      "song7.t": "घंटियाँ बजीं", "song7.d": "टिंग-टिंग! हर टनक पर ताली बजाओ।",
      "song8.t": "जन्मदिन मुबारक", "song8.d": "हर जन्मदिन, हर केक, हर मोमबत्ती गिनने के लिए।",
      "song9.t": "चलो, चलो, नाव चलाओ", "song9.d": "कोमल झूलती लय — गोदी में उछालने के लिए उत्तम।",
      "song10.t": "मेरी के पास एक मेमना था", "song10.d": "शांत शामों के लिए नींद लाने वाली उतरती धुन।",
      "song11.t": "इंसी विंसी मकड़ी", "song11.d": "चढ़ती धुन के साथ उँगलियों की चढ़ाई का मज़ा।",
      "song12.t": "बूढ़े मैकडोनाल्ड का खेत था", "song12.d": "पशु-ध्वनियों का मुखड़ा — पशु मित्र लैब के साथ जोड़ो!",
      "song13.t": "हम्प्टी डम्प्टी", "song13.d": "डगमगाती दीवार, बड़ी गिरन — और कोमल उतराव।",
      "song14.t": "हे डिडल डिडल", "song14.d": "अटपटी बेमतलब कविता — गाय ऊँची छलाँग लगाती है!",
      "song15.t": "यह बूढ़ा आदमी", "song15.d": "गिनती का गीत — निक-नैक पैडी-व्हैक!"
    },

    ur: {
      "music.freeTitle": "آزاد پیڈ",
      "music.freeDesc": "رنگین پیڈ دبائیں — ہر سر ایک ساتھ اچھا لگتا ہے۔ WonderSprout میں کوئی غلط سر نہیں!",
      "music.clapTitle": "تال پر تالی",
      "music.clapDesc": "دل کی دھڑکن جیسی لے — جب یہ بڑھے تو تالی بجائیں! پہلے لے، پھر سر۔",
      "music.tip1": "<b>👪 مشورہ:</b> بلند آواز میں گائیں، چاہے بے سُرا! آپ کی آواز بچے کا پسندیدہ ساز ہے — اور اصل گائیکی زبان سیکھنے میں کسی ریکارڈنگ سے بہتر ہے۔",
      "music.tip2": "<b>👪 والدین:</b> بچے کے ساتھ بول گائیں اور حرکات شامل کریں — چمکتی انگلیاں، ناؤ چلاتی بازو، سوتے ہاتھ۔ حرکات + دھن + الفاظ = یادداشت کے تین ہُک۔",
      "music.tip3": "<b>👪 والدین:</b> پیڈ پانچ سُر کے پیمانے پر ہیں — ہر ملاپ خوشگوار لگتا ہے، اس لیے دریافت کا ہمیشہ صلہ ملتا ہے۔ بچے کی اپنی دھن اُسے واپس سنانے کی کوشش کریں!",
      "music.tip4": "<b>👪 والدین:</b> مل کر لے محسوس کریں — تالی، گھٹنے تھپتھپانا، ہلکا اچھلنا۔ اِس عمر کی لے کی سمجھ بعد میں روانی سے پڑھنے کی پیش گوئی کرتی ہے۔ نمبروں کا دباؤ نہیں: ہر تالی کھیل ہے۔",
      "music.sing": "▶ گائیں!",
      "music.stop": "⏹ روکیں",
      "music.tempo0": "🐢 سست",
      "music.tempo1": "🚶 عام",
      "music.tempo2": "🐇 اچھلتا",

      "song0.t": "چمک چمک تارا", "song0.d": "کلاسیک لوری — نرم اور دھیمی۔",
      "song1.t": "میری کے پاس ایک میمنہ تھا", "song1.d": "تالی بجانے کے لیے اچھلتا پسندیدہ گیت۔",
      "song2.t": "چلو، چلو، کشتی چلاؤ", "song2.d": "گاتے ہوئے اِدھر اُدھر ہلّیں!",
      "song3.t": "کیا تم سو رہے ہو؟ (بھائی جان)", "song3.d": "ایک ساتھ گانے والا راؤنڈ — پرسکون ہونے کے لیے بالکل موزوں۔",
      "song4.t": "میں میں کالی بھیڑ", "song4.d": "اُون کے تین تھیلے — گنتی کا گیت!",
      "song5.t": "گرم بن", "song5.d": "مختصر، میٹھا اور پہلی مشترکہ گائیکی کے لیے بہترین۔",
      "song6.t": "لندن کا پُل گر رہا ہے", "song6.d": "بازوؤں سے بنائیں — پھر گر جائیں!",
      "song7.t": "گھنٹیاں بجیں", "song7.d": "ٹنگ ٹنگ! ہر ٹنک پر تالی بجائیں۔",
      "song8.t": "سالگرہ مبارک", "song8.d": "ہر سالگرہ، ہر کیک، ہر موم بتی گننے کے لیے۔",
      "song9.t": "چلو، چلو، کشتی چلاؤ", "song9.d": "نرم ہلتی لے — گود میں اچھالنے کے لیے بہترین۔",
      "song10.t": "میری کے پاس ایک میمنہ تھا", "song10.d": "پرسکون شاموں کے لیے نیند لاتا اُترتی دھن۔",
      "song11.t": "انسی ونسی مکڑی", "song11.d": "چڑھتی دھن کے ساتھ انگلیوں کی چڑھائی کا مزہ۔",
      "song12.t": "بوڑھے میک ڈونلڈ کا فارم تھا", "song12.d": "جانوروں کی آوازوں کا مکھڑا — جانور دوست لیب کے ساتھ ملائیں!",
      "song13.t": "ہمپٹی دمپٹی", "song13.d": "ڈگمگاتی دیوار، بڑی گِرن — اور نرم اُترائی۔",
      "song14.t": "ہے ڈِڈل ڈِڈل", "song14.d": "بے مطلب مزاحیہ نظم — گائے اونچی چھلانگ لگاتی ہے!",
      "song15.t": "یہ بوڑھا آدمی", "song15.d": "گنتی کا گیت — نک نک پیڈی ویک!"
    },

    tr: {
      "music.freeTitle": "Serbest Tuşlar",
      "music.freeDesc": "Renkli tuşlara dokun — her nota birlikte güzel duyulur. WonderSprout'ta yanlış nota yoktur!",
      "music.clapTitle": "Ritme Alkışla",
      "music.clapDesc": "Kalp atışı gibi bir ritim — büyüdüğünde alkışla! Önce ritim, sonra notalar.",
      "music.tip1": "<b>👪 İpucu:</b> yüksek sesle şarkı söyle, kötü de olsa! Sesin çocuğunun en sevdiği enstrümandır — ve canlı söylemek dil öğreniminde her kaydı yener.",
      "music.tip2": "<b>👪 Ebeveyn:</b> çocuğunla sözleri söyle ve hareket ekle — parıldayan parmaklar, kürek çeken kollar, uyuyan eller. Hareket + melodi + söz = üçlü hafıza çapası.",
      "music.tip3": "<b>👪 Ebeveyn:</b> tuşlar beşli diziyi kullanır — her birleşim hoş duyulur, bu yüzden keşfetmek her zaman ödüllendirilir. Çocuğunun küçük melodisini ona geri çalmayı dene!",
      "music.tip4": "<b>👪 Ebeveyn:</b> ritmi birlikte hissedin — el çırpın, dizlere vurun, hafifçe zıplayın. Bu yaşta ritim duygusu ileriki okuma akıcılığını öngörür. Puan baskısı yok: her alkış oyun sayılır.",
      "music.sing": "▶ Söyle!",
      "music.stop": "⏹ Durdur",
      "music.tempo0": "🐢 Yavaş",
      "music.tempo1": "🚶 Normal",
      "music.tempo2": "🐇 Zıplayan",

      "song0.t": "Küçük Yıldız", "song0.d": "Klasik ninni — yumuşak ve yavaş.",
      "song1.t": "Mary'nin Küçük Kuzusu", "song1.d": "Alkışla eşlik etmek için hareketli bir favori.",
      "song2.t": "Kürek Çek, Çek, Çek", "song2.d": "Söylerken bir o yana bir bu yana sallan!",
      "song3.t": "Uyuyor musun? (Kardeş John)", "song3.d": "Birlikte söyleyebileceğimiz bir kanon — sakinleşmek için mükemmel.",
      "song4.t": "Me, Me, Kara Koyun", "song4.d": "Üç torba yün — bir sayma şarkısı!",
      "song5.t": "Sıcak Çörekler", "song5.d": "Kısa, tatlı ve ilk eşlikli şarkılar için ideal.",
      "song6.t": "Londra Köprüsü Yıkılıyor", "song6.d": "Kollarınla yükselt — sonra yıkıl!",
      "song7.t": "Çanlar Çalıyor", "song7.d": "Çın çın! Her çınlamada alkışla.",
      "song8.t": "İyi ki Doğdun", "song8.d": "Her doğum günü, her pasta, her sayılacak mum için.",
      "song9.t": "Kürek Çek, Çek, Çek", "song9.d": "Yumuşak sallanma ritmi — dizde zıplatmak için mükemmel.",
      "song10.t": "Mary'nin Küçük Kuzusu", "song10.d": "Sakin akşamlar için uykulu, alçalan bir melodi.",
      "song11.t": "Minik Örümcek", "song11.d": "Yükselen bir ezgiyle parmak tırmanma keyfi.",
      "song12.t": "İhtiyar MacDonald'ın Çiftliği", "song12.d": "Hayvan sesi nakaratı — Hayvan Dostları laboratuvarıyla eşleştir!",
      "song13.t": "Humpty Dumpty", "song13.d": "Sallanan bir duvar, büyük bir düşüş — ve yumuşak bir iniş.",
      "song14.t": "Hey Diddle Diddle", "song14.d": "Eğlenceli saçma tekerleme — inek yükseğe zıplıyor!",
      "song15.t": "Bu Yaşlı Adam", "song15.d": "Sayma şarkısı — nik-nak padi-vak!"
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
