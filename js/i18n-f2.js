/* ============================================================
   WonderSprout — Ball-drop age bands + simulation templates
   (pt/ru/hi/ur/tr)
   keys: ball0..5.m (mode), ball0..5.d (desc), sim0..17.n (name)
   Age labels ("6m") stay numeric and are not translated.
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    pt: {
      "ball0.m": "OBSERVAR", "ball1.m": "TOCAR", "ball2.m": "ESCOLHER",
      "ball3.m": "VARIAR", "ball4.m": "PREVER", "ball5.m": "EXPLICAR",
      "ball0.d": "O bebé vê uma bola cair vezes sem conta — suave, repetível, hipnótico.",
      "ball1.d": "O bebé toca e a bola cai. AÇÃO → RESULTADO acende o cérebro.",
      "ball2.d": "O pequenino escolhe que bola largar — vermelha ou azul? Grande ou pequena?",
      "ball3.d": "O pequenino larga-a de alturas diferentes e vê o ressalto mudar.",
      "ball4.d": "«Que bola vai saltar mais alto?» Prever primeiro, depois testar.",
      "ball5.d": "«Porque é que a bola grande saltou menos?» Experimentar, explicar, ligar ao mundo real.",
      "sim0.n": "Objeto a cair", "sim1.n": "Objeto a rolar", "sim2.n": "Classificação",
      "sim3.n": "Emparelhar", "sim4.n": "Mistura de cores", "sim5.n": "Contar",
      "sim6.n": "Planta a crescer", "sim7.n": "Dia/Noite", "sim8.n": "Clima",
      "sim9.n": "Flutua/Afunda", "sim10.n": "Luz/Sombra", "sim11.n": "Som",
      "sim12.n": "Padrões", "sim13.n": "Rotação de formas", "sim14.n": "Construção",
      "sim15.n": "Escolha da história", "sim16.n": "Emoção da personagem", "sim17.n": "Habitat animal",
      "sim.live": "Em direto", "sim.soon": "Em breve"
    },

    ru: {
      "ball0.m": "СМОТРЕТЬ", "ball1.m": "НАЖИМАТЬ", "ball2.m": "ВЫБИРАТЬ",
      "ball3.m": "МЕНЯТЬ", "ball4.m": "ПРЕДСКАЗЫВАТЬ", "ball5.m": "ОБЪЯСНЯТЬ",
      "ball0.d": "Малыш смотрит, как мяч падает снова и снова — мягко, повторяемо, завораживающе.",
      "ball1.d": "Малыш нажимает — и мяч падает. ДЕЙСТВИЕ → РЕЗУЛЬТАТ зажигает мозг.",
      "ball2.d": "Малыш выбирает, какой мяч уронить — красный или синий? Большой или маленький?",
      "ball3.d": "Малыш роняет мяч с разной высоты и смотрит, как меняется отскок.",
      "ball4.d": "«Какой мяч подпрыгнет выше?» Сначала предскажите, потом проверьте.",
      "ball5.d": "«Почему большой мяч подпрыгнул ниже?» Экспериментируйте, объясняйте, связывайте с реальным миром.",
      "sim0.n": "Падающий предмет", "sim1.n": "Катящийся предмет", "sim2.n": "Сортировка",
      "sim3.n": "Сопоставление", "sim4.n": "Смешивание цветов", "sim5.n": "Счёт",
      "sim6.n": "Растущее растение", "sim7.n": "День/Ночь", "sim8.n": "Погода",
      "sim9.n": "Плавает/Тонет", "sim10.n": "Свет/Тень", "sim11.n": "Звук",
      "sim12.n": "Узоры", "sim13.n": "Поворот фигур", "sim14.n": "Строительство",
      "sim15.n": "Выбор в истории", "sim16.n": "Эмоция персонажа", "sim17.n": "Среда обитания",
      "sim.live": "Доступно", "sim.soon": "Скоро"
    },

    hi: {
      "ball0.m": "देखना", "ball1.m": "टैप", "ball2.m": "चुनना",
      "ball3.m": "बदलना", "ball4.m": "अनुमान", "ball5.m": "समझाना",
      "ball0.d": "शिशु बार-बार गिरती गेंद को देखता है — कोमल, दोहराव योग्य, सम्मोहक।",
      "ball1.d": "शिशु टैप करता है और गेंद गिरती है। क्रिया ← परिणाम दिमाग़ को जगाता है।",
      "ball2.d": "बच्चा चुनता है कि कौन सी गेंद गिराए — लाल या नीली? बड़ी या छोटी?",
      "ball3.d": "बच्चा अलग-अलग ऊँचाई से गिराता है और उछाल बदलते देखता है।",
      "ball4.d": "«कौन सी गेंद ज़्यादा ऊँची उछलेगी?» पहले अनुमान लगाओ, फिर जाँचो।",
      "ball5.d": "«बड़ी गेंद कम क्यों उछली?» प्रयोग करो, समझाओ, असली दुनिया से जोड़ो।",
      "sim0.n": "गिरती वस्तु", "sim1.n": "लुढ़कती वस्तु", "sim2.n": "छँटाई",
      "sim3.n": "मिलान", "sim4.n": "रंग मिलाना", "sim5.n": "गिनती",
      "sim6.n": "बढ़ता पौधा", "sim7.n": "दिन/रात", "sim8.n": "मौसम",
      "sim9.n": "तैरना/डूबना", "sim10.n": "प्रकाश/छाया", "sim11.n": "ध्वनि",
      "sim12.n": "पैटर्न", "sim13.n": "आकार घुमाना", "sim14.n": "निर्माण",
      "sim15.n": "कहानी का चुनाव", "sim16.n": "किरदार की भावना", "sim17.n": "पशु आवास",
      "sim.live": "लाइव", "sim.soon": "जल्द"
    },

    ur: {
      "ball0.m": "دیکھنا", "ball1.m": "ٹیپ", "ball2.m": "چننا",
      "ball3.m": "بدلنا", "ball4.m": "اندازہ", "ball5.m": "وضاحت",
      "ball0.d": "بچہ بار بار گرتی گیند کو دیکھتا ہے — نرم، دہرانے لائق، مسحور کن۔",
      "ball1.d": "بچہ ٹیپ کرتا ہے اور گیند گرتی ہے۔ عمل ← نتیجہ دماغ کو جگاتا ہے۔",
      "ball2.d": "بچہ چنتا ہے کہ کون سی گیند گرائے — سرخ یا نیلی؟ بڑی یا چھوٹی؟",
      "ball3.d": "بچہ مختلف اونچائیوں سے گراتا ہے اور اچھلتے دیکھتا ہے۔",
      "ball4.d": "«کون سی گیند زیادہ اونچی اچھلے گی؟» پہلے اندازہ لگاؤ، پھر آزمائیں۔",
      "ball5.d": "«بڑی گیند کم کیوں اچھلی؟» تجربہ کرو، وضاحت کرو، حقیقی دنیا سے جوڑو۔",
      "sim0.n": "گرتی چیز", "sim1.n": "لڑھکتی چیز", "sim2.n": "چھانٹ",
      "sim3.n": "ملاپ", "sim4.n": "رنگ ملانا", "sim5.n": "گنتی",
      "sim6.n": "بڑھتا پودا", "sim7.n": "دن/رات", "sim8.n": "موسم",
      "sim9.n": "تیرنا/ڈوبنا", "sim10.n": "روشنی/سایہ", "sim11.n": "آواز",
      "sim12.n": "نقش و نگار", "sim13.n": "شکل گھمانا", "sim14.n": "تعمیر",
      "sim15.n": "کہانی کا انتخاب", "sim16.n": "کردار کے جذبات", "sim17.n": "جانور کا مسکن",
      "sim.live": "لائیو", "sim.soon": "جلد"
    },

    tr: {
      "ball0.m": "İZLEME", "ball1.m": "DOKUNMA", "ball2.m": "SEÇME",
      "ball3.m": "DEĞİŞTİRME", "ball4.m": "TAHMİN", "ball5.m": "AÇIKLAMA",
      "ball0.d": "Bebek bir topun tekrar tekrar düşmesini izler — yumuşak, tekrarlanabilir, büyüleyici.",
      "ball1.d": "Bebek dokunur ve top düşer. EYLEM → SONUÇ beyni aydınlatır.",
      "ball2.d": "Küçük çocuk hangi topu bırakacağını seçer — kırmızı mı mavi mi? Büyük mü küçük mü?",
      "ball3.d": "Küçük çocuk farklı yüksekliklerden bırakır ve zıplamanın değişmesini izler.",
      "ball4.d": "«Hangi top daha yükseğe zıplayacak?» Önce tahmin et, sonra dene.",
      "ball5.d": "«Büyük top neden daha az zıpladı?» Dene, açıkla, gerçek dünyayla bağlantı kur.",
      "sim0.n": "Düşen nesne", "sim1.n": "Yuvarlanan nesne", "sim2.n": "Sıralama",
      "sim3.n": "Eşleştirme", "sim4.n": "Renk karıştırma", "sim5.n": "Sayma",
      "sim6.n": "Büyüyen bitki", "sim7.n": "Gece/Gündüz", "sim8.n": "Hava durumu",
      "sim9.n": "Yüzer/Batar", "sim10.n": "Işık/Gölge", "sim11.n": "Ses",
      "sim12.n": "Desen", "sim13.n": "Şekil döndürme", "sim14.n": "Yapı",
      "sim15.n": "Öykü seçimi", "sim16.n": "Karakter duygusu", "sim17.n": "Hayvan yaşam alanı",
      "sim.live": "Yayında", "sim.soon": "Yakında"
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
