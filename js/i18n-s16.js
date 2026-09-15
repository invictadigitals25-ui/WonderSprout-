/* WonderSprout story content — part 16: "Benny Bear's Picnic" + "Finn the Little Fish" in ko/bn/yo/ha/ig.
   Completes 6 of 11 stories in all 20 translated languages. */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {
ko: {
"st.picnic.title":"곰 베니의 소풍","st.picnic.desc":"베니가 사과 세 개를 챙겨요. 누구와 나눠 먹을까요?","st.picnic.theme":"수학과 친절 · 세기, 나누기",
"st.picnic.p1.t":"곰 베니가 바구니를 챙겨요: 사과 하나, 사과 둘, 사과 셋! «소풍에는 친구가 필요해,» 그가 말해요. 누구를 초대할까요?","st.picnic.p1.c0":"🐰 토끼 로지를 초대해요","st.picnic.p1.c1":"🦊 여우 펠릭스를 초대해요",
"st.picnic.p2a.t":"토끼 로지가 깡충깡충 오며 말해요. 사과 셋, 친구 둘… «하나는 너, 하나는 나,» 베니가 말해요, «그리고 하나는 반으로 나눠 먹자!»","st.picnic.p2a.c0":"🍎 하나씩 — 공평해!","st.picnic.p2a.c1":"🍯 하나는 디저트로 남겨요",
"st.picnic.p2b.t":"여우 펠릭스는 아주 배가 고파요 — 사과 두 개를 원해요! 베니가 열심히 생각해요. 그러다 펠릭스가 웃어요. «아니면… 우리가 함께 열매를 따서 모두에게 더 많이 줄 수 있어!»","st.picnic.p2b.c0":"🫐 함께 열매를 따요","st.picnic.p2b.c1":"🍎 그래도 사과를 나눠요",
"st.picnic.p3.t":"소풍 보자기에 가득 찼어요: 사과, 열매, 꿀 샌드위치, 그리고 아주 행복한 친구 둘. 함께 세니까 모든 것이 더 맛있어졌어요!","st.picnic.p3.m":"세고 나누면 좋은 친구가 생겨요 — 그리고 멋진 소풍도요.","st.picnic.p3.r":"다음 간식 시간에 접시와 컵을 함께 세어요: 한 사람에 하나씩!",
"st.finn.title":"작은 물고기 핀","st.finn.desc":"핀이 바다 밑의 반짝이는 진주를 찾고 있어요.","st.finn.theme":"물속 세상 · 세기, 친절",
"st.finn.f1.t":"뽀글 뽀글! 작은 물고기 핀이 깊은 파란 곳에 숨겨진 반짝이는 진주 이야기를 들었어요. «내가 찾을 거야!» 그런데 바다는 넓어요. 누가 도와줄까요?","st.finn.f1.c0":"🐙 문어 올리에게 물어봐요","st.finn.f1.c1":"🫧 은빛 방울을 따라가요",
"st.finn.f2a.t":"문어 올리가 여덟 팔을 모두 흔들어요. «나랑 같이 세자 — 1, 2, 3, 4, 5, 6, 7, 8! 진주는 여덟 번째 산호 너머에 살아,» 가장 긴 팔로 가리켜요.","st.finn.f2a.c0":"🪸 산호 여덟 개를 지나 헤엄쳐요",
"st.finn.f2b.t":"은빛 방울이 핀을 아래로, 아래로, 아래로 데려가요… 잠자는 커다란 조개까지요. 핀이 그냥 열어도 될까요?","st.finn.f2b.c0":"🚪 먼저 정중하게 두드려요","st.finn.f2b.c1":"🎵 노래로 조개를 깨워요",
"st.finn.f3.t":"조개가 열리고 — 와! 진주가 작은 달처럼 빛나요. 핀은 그 빛을 바다에서 가장 어두운 구석과 나눠요, 그래서 아무도 더는 무서워하지 않아요.","st.finn.f3.m":"예의와 나누기는 모든 보물을 더 밝게 만들어요.","st.finn.f3.r":"다음 목욕 때 방울을 세어요 — 정확히 다섯 개를 터뜨릴 수 있나요?",
},
bn: {
"st.picnic.title":"ভালুক বেনির পিকনিক","st.picnic.desc":"বেনি তিনটি আপেল প্যাক করে। সে কার সাথে ভাগ করবে?","st.picnic.theme":"গণিত ও দয়া · গোনা, ভাগ করা",
"st.picnic.p1.t":"ভালুক বেনি তার ঝুড়ি সাজায়: একটি আপেল, দুটি আপেল, তিনটি আপেল! «পিকনিকে বন্ধু দরকার,» সে বলে। কাকে ডাকা উচিত?","st.picnic.p1.c0":"🐰 খরগোশ রোজিকে ডাকো","st.picnic.p1.c1":"🦊 শিয়াল ফেলিক্সকে ডাকো",
"st.picnic.p2a.t":"খরগোশ রোজি লাফিয়ে আসে। তিনটি আপেল, দুই বন্ধু… «একটি তোমার, একটি আমার,» বেনি বলে, «আর একটি আমরা অর্ধেক করে ভাগ করব!»","st.picnic.p2a.c0":"🍎 একজন একটি — ন্যায্য!","st.picnic.p2a.c1":"🍯 একটি পুডিংয়ের জন্য রাখো",
"st.picnic.p2b.t":"শিয়াল ফেলিক্সের খুব খিদে — সে দুটি আপেল চায়! বেনি খুব ভাবে। তারপর ফেলিক্স হাসে: «অথবা… আমরা একসাথে বেরি তুলতে পারি আর সবার জন্য বেশি হবে!»","st.picnic.p2b.c0":"🫐 একসাথে বেরি তোলো","st.picnic.p2b.c1":"🍎 তবুও আপেল ভাগ করো",
"st.picnic.p3.t":"পিকনিকের কাপড় ভরে যায়: আপেল, বেরি, মধুর স্যান্ডউইচ আর দুই খুব সুখী বন্ধু। একসাথে গুনলে সবকিছু আরও সুস্বাদু লাগল!","st.picnic.p3.m":"গোনা আর ভাগ করা ভালো বন্ধু বানায় — আর দারুণ পিকনিকও।","st.picnic.p3.r":"পরের নাস্তায় একসাথে থালা আর কাপ গোনো: প্রতিটি মানুষের জন্য একটি!",
"st.finn.title":"ছোট মাছ ফিন","st.finn.desc":"ফিন সমুদ্রের তলায় ঝকঝকে মুক্তো খুঁজছে।","st.finn.theme":"পানির জগৎ · গোনা, দয়া",
"st.finn.f1.t":"বুদবুদ বুদবুদ! ছোট মাছ ফিন গভীর নীলে লুকানো একটি ঝকঝকে মুক্তোর কথা শোনে। «আমি ওটা খুঁজে পাব!» কিন্তু সমুদ্র অনেক বড়। কে সাহায্য করতে পারে?","st.finn.f1.c0":"🐙 অক্টোপাস অলিকে জিজ্ঞেস করো","st.finn.f1.c1":"🫧 রুপালি বুদবুদ অনুসরণ করো",
"st.finn.f2a.t":"অক্টোপাস অলি আটটি বাহুই নাড়ায়। «আমার সাথে গোনো — ১, ২, ৩, ৪, ৫, ৬, ৭, ৮! মুক্তো অষ্টম প্রবালের ওপারে থাকে,» সে তার সবচেয়ে লম্বা বাহু দিয়ে দেখায়।","st.finn.f2a.c0":"🪸 আটটি প্রবাল পার হয়ে সাঁতার কাটো",
"st.finn.f2b.t":"রুপালি বুদবুদ ফিনকে নিচে, নিচে, নিচে নিয়ে যায়… একটি বিশাল ঘুমন্ত ঝিনুক পর্যন্ত। ফিনের কি ওটা সরাসরি খোলা উচিত?","st.finn.f2b.c0":"🚪 আগে ভদ্রভাবে টোকা দাও","st.finn.f2b.c1":"🎵 ঝিনুক জাগাতে গান গাও",
"st.finn.f3.t":"ঝিনুক খোলে আর — বাহ! মুক্তো একটি ছোট চাঁদের মতো জ্বলে। ফিন তার আলো সমুদ্রের সবচেয়ে অন্ধকার কোণার সাথে ভাগ করে, যাতে আর কেউ ভয় না পায়।","st.finn.f3.m":"ভদ্রতা আর ভাগ করা প্রতিটি গুপ্তধনকে আরও উজ্জ্বল করে।","st.finn.f3.r":"পরের স্নানে বুদবুদ গোনো — ঠিক পাঁচটি ফাটাতে পারবে?",
},
yo: {
"st.picnic.title":"Ìpíkíníkì Bẹ́ẹ̀lì Benny","st.picnic.desc":"Benny ń pakọ ìpòónkí mẹ́ta. Ọ̀dọ̀ ta ni yóò pín wọ̀n?","st.picnic.theme":"Ìṣírò àti inú dídún · ìkà, pípín",
"st.picnic.p1.t":"Bẹ́ẹ̀lì Benny ń pakọ àgàǹ rẹ̀: ìpòónkí kan, ìpòónkí méjì, ìpòónkí MẸ́TA! «Ìpíkíníkì nílò àwọn ọ̀rẹ́,» ó wí. Ta ni ó yẹ kí ó pè?","st.picnic.p1.c0":"🐰 Pe Ehoro Rosie","st.picnic.p1.c1":"🦊 Pe Kọ̀lọ̀kọ̀lọ̀ Felix",
"st.picnic.p2a.t":"Ehoro Rosie ń fò wá. Ìpòónkí mẹ́ta, ọ̀rẹ́ méjì… «Ọ̀kan fún ọ, ọ̀kan fún mi,» Benny wí, «àti ọ̀kan tí a lè pín sí ìdajì!»","st.picnic.p2a.c0":"🍎 Ọ̀kọ̀ọ̀kan kan — ó tọ́!","st.picnic.p2a.c1":"🍯 Fi ọ̀kan pamọ́ fún dísẹ́ẹ̀tì",
"st.picnic.p2b.t":"Kọ̀lọ̀kọ̀lọ̀ Felix ń fẹ oúnjẹ gan-an — ó fẹ́ ìpòónkí MÉJÌ! Benny ń rò dáadáa. Lẹ́yìn náà Felix ń rẹ́rìn-ín: «Tàbí… a lè kó àwọn èso pọ̀ kí a sì ní SÍ I fún gbogbo ènìyàn!»","st.picnic.p2b.c0":"🫐 Kó èso pọ̀","st.picnic.p2b.c1":"🍎 Pín àwọn ìpòónkí síbẹ̀síbẹ̀",
"st.picnic.p3.t":"Aṣọ ìpíkíníkì ń kún: ìpòónkí, èso, sándíìsì oyin àti ọ̀rẹ́ méjì ayọ̀ púpọ̀. Kíka pọ̀ mú kí gbogbo nǹkan dun sí i!","st.picnic.p3.m":"Kíka àti pípín ń ṣe àwọn ọ̀rẹ́ dídá — àti àwọn ìpíkíníkì ńlá.","st.picnic.p3.r":"Ní àkókò ìjẹun tó ń bọ̀, kà àwọn àwo àti ife pọ̀: ọ̀kan fún ẹnì kọ̀ọ̀kan!",
"st.finn.title":"Finn Ẹja Kékeré","st.finn.desc":"Finn ń wá ìyọ̀ òkun tó ń tàn ní ìsàlẹ̀ òkun.","st.finn.theme":"Ayé omi · ìkà, inú dídún",
"st.finn.f1.t":"Blub blub! Finn ẹja kékeré ń gbọ́ nípa ìyọ̀ òkun tó ń tàn tí ó wà ní ìjìnlẹ̀ búlùù. «Èmi yóò wá a!» Ṣùgbọ́n òkun ńlá. Ta ni ó lè ràn án lọ́wọ́?","st.finn.f1.c0":"🐙 Béèrè lọ́wọ́ Ẹ̀ja oníka mẹ́jọ Ollie","st.finn.f1.c1":"🫧 Tẹ̀lé àwọn fọ̀ọ̀mù fàdákà",
"st.finn.f2a.t":"Ẹ̀ja oníka mẹ́jọ Ollie ń mì àwọn apá RẸ̀ MẸ́JỌ. «Kà pẹ̀lú mi — 1, 2, 3, 4, 5, 6, 7, 8! Ìyọ̀ ń gbé kọjá kórálù kẹjọ,» ó ń tọ́ka pẹ̀lú apá rẹ̀ tó gùn jùlọ.","st.finn.f2a.c0":"🪸 Lúwẹ̀ẹ́ kọjá kórálù mẹ́jọ",
"st.finn.f2b.t":"Àwọn fọ̀ọ̀mù fàdákà ń mú Finn lọ sí ìsàlẹ̀, ìsàlẹ̀, ìsàlẹ̀… sí ìkarahun ńlá tó ń sùn. Ṣé Finn yẹ kí ó kàn ṣí i?","st.finn.f2b.c0":"🚪 Kọ́kọ́ tẹ̀ ẹ́lẹ́gàn","st.finn.f2b.c1":"🎵 Kọrin láti jí ìkarahun",
"st.finn.f3.t":"Ìkarahun ń ṣí ó sì — WOW! Ìyọ̀ náà ń tàn bí oṣùpá kékeré. Finn ń pín ìmọ́lẹ̀ rẹ̀ pẹ̀lú igun tó ṣókùnkùn jùlọ ní òkun, kí ẹnikẹ́ni má bàjẹ́ bẹ̀rù mọ́.","st.finn.f3.m":"Ìwà ọmọlúàbí àti pípín ń mú kí gbogbo ìṣúra tàn sí i.","st.finn.f3.r":"Kà àwọn fọ̀ọ̀mù ní ìwẹ̀ tó ń bọ̀ — ṣé o lè fọ́ márùn-ún péré?",
},
ha: {
"st.picnic.title":"Pikinik na Beyar Benny","st.picnic.desc":"Benny ya shirya apple uku. Da wa zai raba su?","st.picnic.theme":"Lissafi da kirki · ƙidayawa, rabawa",
"st.picnic.p1.t":"Beyar Benny ya shirya kwandon sa: apple ɗaya, apple biyu, apple UKU! «Pikinik yana buƙatar abokai,» ya ce. Wa ya kamata ya gayyata?","st.picnic.p1.c0":"🐰 Gayyata Zomo Rosie","st.picnic.p1.c1":"🦊 Gayyata Kanya Felix",
"st.picnic.p2a.t":"Zomo Rosie ya zo yana tsalle. Apple uku, abokai biyu… «Ɗaya naka, ɗaya nawa,» Benny ya ce, «sannan ɗaya za mu raba rabi!»","st.picnic.p2a.c0":"🍎 Kowa ɗaya — adalci!","st.picnic.p2a.c1":"🍯 Ajiye ɗaya don kayan zaki",
"st.picnic.p2b.t":"Kanya Felix yana jin yunwa sosai — yana son apple BIYU! Benny ya yi tunani sosai. Sai Felix ya yi murmushi: «Ko… za mu iya ɗiban 'ya'yan itace tare mu sami MAI YAWA ga kowa!»","st.picnic.p2b.c0":"🫐 Ɗibi 'ya'yan itace tare","st.picnic.p2b.c1":"🍎 Raba apple ko da yake",
"st.picnic.p3.t":"Shimfiɗar pikinik ta cika: apple, 'ya'yan itace, sanwic na zuma da abokai biyu masu farin ciki sosai. Ƙidayawa tare ya sa komai ya fi daɗi!","st.picnic.p3.m":"Ƙidayawa da rabawa suna yin abokai nagari — da pikinik nagari.","st.picnic.p3.r":"A cinyar ka ta gaba, ƙidaya faranti da kofuna tare: ɗaya ga kowane mutum!",
"st.finn.title":"Finn Ƙaramin Kifi","st.finn.desc":"Finn yana neman lu'u-lu'u mai haske a ƙasan teku.","st.finn.theme":"Duniyar ruwa · ƙidayawa, kirki",
"st.finn.f1.t":"Blub blub! Ƙaramin kifi Finn ya ji labarin lu'u-lu'u mai haske da aka ɓoye a cikin shuɗi mai zurfi. «Zan same shi!» Amma teku babba ne. Wa zai iya taimakawa?","st.finn.f1.c0":"🐙 Tambayi Doki mai hannu takwas Ollie","st.finn.f1.c1":"🫧 Bi kumfa na azurfa",
"st.finn.f2a.t":"Doki mai hannu takwas Ollie ya miƙa hannayensa DUKA TAKWAS. «Ƙidaya tare da ni — 1, 2, 3, 4, 5, 6, 7, 8! Lu'u-lu'u yana zaune bayan murjani na takwas,» ya nuna da hannunsa mafi tsayi.","st.finn.f2a.c0":"🪸 Yi iyo bayan murjani takwas",
"st.finn.f2b.t":"Kumfa na azurfa suna kaiwa Finn ƙasa, ƙasa, ƙasa… zuwa babban kwaton da ke barci. Shin ya kamata Finn ya buɗe shi kai tsaye?","st.finn.f2b.c0":"🚪 Danna da girmamawa da farko","st.finn.f2b.c1":"🎵 Waƙa don tayar da kwaton",
"st.finn.f3.t":"Kwaton ya buɗe kuma — WOW! Lu'u-lu'u yana haskawa kamar ƙaramin wata. Finn ya raba haskensa da kusurwar teku mafi duhu, don haka babu wanda zai yi tsoro.","st.finn.f3.m":"Girmamawa da rabawa suna sa kowane dhahabu ya fi haske.","st.finn.f3.r":"Ƙidaya kumfa a bafinka na gaba — za ka iya fashe biyar daidai?",
},
ig: {
"st.picnic.title":"Nnọkọ nke Ábẹ́ Benny","st.picnic.desc":"Benny na-akwado apụl atọ. Onye ka ya na ọ ga-ekekọrịta ha?","st.picnic.theme":"Mgbakọ na obiọma · ịgụta, ịkekọrịta",
"st.picnic.p1.t":"Ábẹ́ Benny na-akwado nkata ya: otu apụl, apụl abụọ, apụl ATỌ! «Nnọkọ chọrọ ndị enyi,» ọ sịrị. Ònye ka o kwesịrị ịkpọ?","st.picnic.p1.c0":"🐰 Kpọọ Oke bekee Rosie","st.picnic.p1.c1":"🦊 Kpọọ Agụ ọhịa Felix",
"st.picnic.p2a.t":"Oke bekee Rosie na-awụli wụli. Apụl atọ, ndị enyi abụọ… «Otu nke gị, otu nke m,» Benny sịrị, «otu anyị nwere ike ịkekọrịta ọkara!»","st.picnic.p2a.c0":"🍎 Otu onye otu — ezi omume!","st.picnic.p2a.c1":"🍯 Chekwaa otu maka nri ụtọ",
"st.picnic.p2b.t":"Agụ ọhịa Felix nwere agụụ nke ukwuu — ọ chọrọ apụl ABỤỌ! Benny na-eche echiche nke ukwuu. Mgbe ahụ Felix na-amụmụ ọnụ ọchị: «Ka ọ bụ… anyị nwere ike ịkpụ mkpụrụ osisi ọnụ ma nwee ỌTỤTỤ maka onye ọ bụla!»","st.picnic.p2b.c0":"🫐 Kpụọ mkpụrụ osisi ọnụ","st.picnic.p2b.c1":"🍎 Kekọrịta apụl ahụ n'agbanyeghị",
"st.picnic.p3.t":"Akwà nnọkọ jupụtara: apụl, mkpụrụ osisi, sanwichi mmanụ aṅụ na ndị enyi abụọ nwere obi ụtọ nke ukwuu. Ịgụta ọnụ mere ka ihe niile dị ụtọ karịa!","st.picnic.p3.m":"Ịgụta na ịkekọrịta na-eme ndị enyi dị mma — na nnọkọ dị ukwuu.","st.picnic.p3.r":"N'oge nri na-esote, gụta efere na iko ọnụ: otu maka onye ọ bụla!",
"st.finn.title":"Finn Azụ̀ Obere","st.finn.desc":"Finn na-achọ pearl na-egbuke egbuke n'okpuru osimiri.","st.finn.theme":"Ụwa mmiri · ịgụta, obiọma",
"st.finn.f1.t":"Blub blub! Azụ̀ obere Finn nụrụ banyere pearl na-egbuke egbuke ezoro ezo n'ime anụnụ miri emi. «Aga m achọta ya!» Ma osimiri buru ibu. Ònye nwere ike inye aka?","st.finn.f1.c0":"🐙 Jụọ Octopus Ollie","st.finn.f1.c1":"🫧 Soro epu ọlaọcha",
"st.finn.f2a.t":"Octopus Ollie na-efegharị aka ya ASATỌ niile. «Gụọ mụ na m — 1, 2, 3, 4, 5, 6, 7, 8! Pearl bi n'ofe coral nke asatọ,» ọ na-egosi na aka ya kachasị ogologo.","st.finn.f2a.c0":"🪸 Gwuo n'ofe coral asatọ",
"st.finn.f2b.t":"Epu ọlaọcha na-eduga Finn ala, ala, ala… ruo n'ọnụ ọnụ buru ibu na-ehi ụra. Ò kwesịrị ka Finn meghee ya ozugbo?","st.finn.f2b.c0":"🚪 Kụọ aka nke ọma mbụ","st.finn.f2b.c1":"🎵 Bụọ abụ iji teta ọnụ ọnụ",
"st.finn.f3.t":"Ọnụ ọnụ meghere — WOW! Pearl na-egbuke egbuke dị ka obere ọnwa. Finn na-ekekọrịta ìhè ya na akụkụ kachasị gbaa ọchịchịrị nke osimiri, ka ọ dịghị onye na-atụ egwu ọzọ.","st.finn.f3.m":"Nkwanye ùgwù na ịkekọrịta na-eme ka akụ ọ bụla na-egbuke egbuke karịa.","st.finn.f3.r":"Gụọ epu n'oge ịsa ahụ gị na-esote — ị nwere ike ịgbawa ise kpọmkwem?",
},
  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
