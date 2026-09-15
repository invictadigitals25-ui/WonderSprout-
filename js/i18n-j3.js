/* ============================================================
   WonderSprout — AI parent-copilot replies
   (id/sw/it/nl/ja)
   keys: ai.r0 .. ai.r22 (indexed to WSData.AI_KNOWLEDGE order),
         ai.fallback
   NOTE: keyed by INDEX, not entry id — AI_KNOWLEDGE has a
   duplicate id ("sleep" at indexes 8 and 18).
   ============================================================ */
(function () {
  "use strict";
  if (typeof WSI18n === "undefined") return;

  const K = {

    id: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        Berikut tiga ide untuk hari ini, dalam urutan rasa ingin tahu:
        <ul>
          <li><b>2 menit layar:</b> buka <b>Keajaiban Hari Ini</b> di dasbor orang tua dan lakukan mikro-pengalaman “Jelajahi” bersama.</li>
          <li><b>5 menit praktik:</b> langkah “Dunia Nyata” — hanya butuh hal yang sudah ada di rumah.</li>
          <li><b>0 menit layar, belajar paling banyak:</b> keluarlah. Tunjuk satu hal dan tanyakan “aku penasaran kenapa…?” Rasa ingin tahu mengalahkan aplikasi apa pun.</li>
        </ul>
        <b>Nilai belajar:</b> layar singkat + tindak lanjut dunia nyata membangun siklus TEMUKAN → HUBUNGKAN dari metode WonderSprout.`,

      "ai.r1": `<span class="ai-tag">🛡️ Filosofi layar</span>
        Aturan WonderSprout: <b>waktu layar adalah pintu, bukan tujuan.</b>
        <ul>
          <li>Batasi sesi pada mikro-pengalaman platform: <b>30 detik sampai 3 menit</b>.</li>
          <li>Selalu pasangkan layar dengan langkah <b>“Coba di kehidupan nyata”</b> yang mengikuti setiap aktivitas.</li>
          <li>Perhatikan mata lelah atau rewel — itu tanda untuk berhenti dan bergerak.</li>
        </ul>
        Jika aktivitas terbaik saat ini ada di luar, WonderSprout akan menyuruhmu menutup aplikasi. Itu fitur, bukan bug. Untuk panduan medis pribadi tentang batas layar, dokter anakmu adalah sumber yang tepat.`,

      "ai.r2": `<span class="ai-tag">💛 Jawaban penuh kasih</span>
        Setiap anak tumbuh dengan jadwalnya sendiri, dan rentang yang luas adalah normal — WonderSprout tidak pernah memberi peringkat atau mendiagnosis anak.
        <ul>
          <li>Gunakan tab <b>Observasi</b> untuk melacak “belum / kadang / konsisten” selama berminggu-minggu — pola lebih penting daripada momen tunggal.</li>
          <li>Jika ada yang mengkhawatirkanmu, perasaan itu layak mendapat percakapan nyata: <b>mohon bicara dengan dokter anak atau profesional perkembangan anak.</b></li>
          <li>Sementara itu, “intervensi” terbaik selalu sama: bicara, bernyanyi, bermain, dan membaca bersama setiap hari.</li>
        </ul>
        WonderSprout AI memberi ide bermain, tidak pernah nasihat medis.`,

      "ai.r3": `<span class="ai-tag">📊 Minggu ini</span>
        Berdasarkan data dasbor:
        <ul>
          <li><b>Bidang paling dijelajahi:</b> Sains & Alam — simulasi Mengapung/Tenggelam dan Tanaman Tumbuh menjadi favorit.</li>
          <li><b>Keterampilan yang naik:</b> prediksi! Bertanya “Akan tenggelam?” sebelum menguji adalah langkah berpikir besar.</li>
          <li><b>Fokus disarankan berikutnya:</b> <b>pola</b> — coba sortir kaus kaki berdasarkan warna saat mencuci (nol layar, belajar penuh).</li>
        </ul>
        Detail lengkap ada di kartu <b>Laporan Mingguan</b> pada dasbor orang tua.`,

      "ai.r4": `<span class="ai-tag">🌧️ Keajaiban hari hujan</span>
        Hujan adalah laboratorium!
        <ul>
          <li><b>Amati:</b> duduklah di dekat jendela — “Ke mana perginya tetesan? Cepat atau lambat?”</li>
          <li><b>Dengar:</b> hujan di jendela versus hujan di panci. Keras atau pelan?</li>
          <li><b>Tampung:</b> ulurkan gelas ke luar jendela (bersama orang dewasa) — berapa lama sampai penuh?</li>
          <li><b>Lalu layar:</b> 2 menit dunia <b>Bumi & Cuaca</b> untuk menghubungkan yang dilihat dengan siang/malam dan awan.</li>
        </ul>
        <b>Nilai belajar:</b> observasi nyata dulu, koneksi digital kemudian — siklus WonderSprout.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        Benda aman apa pun bisa menjadi pelajaran:
        <ul>
          <li>Arahkan Wonder Camera ke sebuah benda — ia mengidentifikasinya dan membuka <b>Kartu Wonder</b>.</li>
          <li>Setiap kartu menghubungkan benda ke dunia belajar (warna, matematika, sains…) dengan 3 aktivitas cepat.</li>
          <li>Setiap kartu diakhiri dengan <b>tantangan dunia nyata</b>, agar belajar keluar dari layar.</li>
        </ul>
        Coba demonya: <b>WonderSprout Camera → ketuk sebuah benda</b>. Catatan privasi: pengenalan berjalan sesaat — tidak ada foto anakmu yang disimpan.`,

      "ai.r6": `<span class="ai-tag">📖 Waktu cerita</span>
        Cerita adalah mesin penghubung:
        <ul>
          <li><b>“Pip dan Biji Kecil”</b> — pertumbuhan, kesabaran, dan alam. Dipasangkan dengan menanam kacang sungguhan.</li>
          <li><b>“Mandi Besar Bloop”</b> — mengapung versus tenggelam dengan momen prediksi bawaan. Dipasangkan dengan uji coba saat mandi.</li>
          <li>Biarkan anakmu <b>memilih alur cerita</b> — keputusan membangun kemandirian dan bahasa.</li>
        </ul>
        Tips: setelah membaca, tanyakan “Kita mau apa berikutnya?” dan biarkan anak mengarahkan. Itu tingkat CIPTAKAN.`,

      "ai.r7": `<span class="ai-tag">🍎 Keajaiban dapur</span>
        Dapur adalah kurikulum lengkap:
        <ul>
          <li><b>Matematika:</b> hitung anggur ke piring — “satu lagi” dan “habis semua”.</li>
          <li><b>Sains:</b> makanan apa yang mengapung di semangkuk air? (Anggur? Pisang? Dengan dan tanpa kulit!)</li>
          <li><b>Indra:</b> renyah versus lembut, hangat versus dingin — sebutkan masing-masing.</li>
        </ul>
        Setelahnya, Wonder Camera bisa mengubah buah apa pun menjadi Kartu Wonder.`,

      "ai.r8": `<span class="ai-tag">🌙 Keajaiban menjelang tidur</span>
        Rutinitas yang bisa diprediksi mengalahkan yang sempurna. Coba rutinitas WonderSprout ini:
        <ul>
          <li><b>Hangat + redup:</b> mandi, lalu lampu redup — layar terang dimatikan minimal 30 menit sebelum tidur.</li>
          <li><b>Satu cerita, tempat yang sama:</b> baca “Bulan yang Mengantuk” — berakhir dengan ritual selamat malam yang bisa ditiru.</li>
          <li><b>Satu lagu:</b> “Apakah Kamu Tidur?” di WonderSprout Music dibuat sebagai lagu pengantar tidur yang lambat.</li>
          <li><b>Selamat malam pada tiga hal:</b> Bulan, sebuah mainan, dan satu sama lain — kebiasaan syukur kecil.</li>
        </ul>
        <b>Nilai belajar:</b> rutinitas membangun rasa aman dan pemikiran berurutan (“mandi dulu, lalu cerita, lalu lagu”). Untuk kekhawatiran tidur yang menetap, dokter anakmu adalah pemandu yang tepat.`,

      "ai.r9": `<span class="ai-tag">💛 Perasaan besar</span>
        Perasaan besar normal di usia ini — otak perasaan tumbuh lebih cepat daripada kata untuk menggambarkannya.
        <ul>
          <li><b>Sebut untuk menjinakkan:</b> “Kamu kesal karena menaranya jatuh.” Menyebut perasaan membangun bahasa untuk mengelolanya.</li>
          <li><b>Jadilah jangkar yang tenang:</b> duduk dekat, bernapas pelan, tunggu. Ko-regulasi datang sebelum regulasi diri.</li>
          <li><b>Setelah badai:</b> pelukan, lalu ulangi dengan lembut — “menaranya jatuh, kamu marah, kita bangun lagi.”</li>
        </ul>
        WonderSprout tidak pernah mendiagnosis. Jika perasaan besar terasa sering, intens, atau mengkhawatirkan, <b>mohon bicara dengan dokter anak atau profesional perkembangan anak.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 Keajaiban alam</span>
        Luar ruangan adalah ruang kelas asli — dan gratis:
        <ul>
          <li><b>Berburu warna:</b> temukan sesuatu yang hijau, cokelat, kuning, dan merah.</li>
          <li><b>Hitung suara:</b> berhenti dan dengar — berapa suara berbeda? Burung, angin, mobil…</li>
          <li><b>Kantong harta:</b> kumpulkan 3 harta aman (daun, batu, ranting) dan sebutkan masing-masing.</li>
          <li><b>Pulang ke rumah:</b> 2 menit Laboratorium Kehidupan menghubungkan yang dilihat dengan cara tanaman tumbuh.</li>
        </ul>
        <b>Nilai belajar:</b> masukan indrawi nyata (tanah tidak rata, cahaya berubah, suara hidup) membangun otak dengan cara yang tak bisa dilakukan layar mana pun.`,

      "ai.r11": `<span class="ai-tag">🚗 Keajaiban perjalanan</span>
        Perjalanan panjang adalah waktu bertanya-tanya:
        <ul>
          <li><b>Tebo warna:</b> “Aku lihat sesuatu MERAH!” — balita bisa bermain dengan bantuan.</li>
          <li><b>Hitung sepanjang jalan:</b> truk, terowongan, jembatan — menghitung membunuh kebosanan.</li>
          <li><b>Bernyanyi bersama:</b> WonderSprout Music tak butuh sinyal; antrekan 3 favorit.</li>
          <li><b>Keajaiban jendela:</b> ceritakan yang lewat: “Seekor sapi! Sebuah sungai! Kincir angin berputar!”</li>
        </ul>
        Rentang tanpa layar ideal di sini; simpan satu cerita pendek untuk 10 menit tersulit.`,

      "ai.r12": `<span class="ai-tag">🎂 Keajaiban perayaan</span>
        Ulang tahun adalah pelajaran matematika rahasia:
        <ul>
          <li><b>Hitung lilinnya</b> bersama — satu per tahun, menghitung satu-satu dalam kehidupan nyata.</li>
          <li><b>Nyanyikan “Selamat Ulang Tahun”</b> — ada di WonderSprout Music dengan lirik karaoke.</li>
          <li><b>Latihan meniup:</b> meniup lilin adalah kendali napas nyata untuk bicara.</li>
          <li><b>Simpan momennya:</b> tambahkan entri Jurnal Wonder dengan foto setelahnya.</li>
        </ul>
        Buat pesta singkat di usia ini — satu jam kegembiraan mengalahkan tiga jam kewalahan.`,

      "ai.r13": `<span class="ai-tag">🚽 Kesabaran pispot</span> Kebanyakan anak menunjukkan kesiapan antara 18–36 bulan — perhatikan minat, bukan usia. Pasangkan dengan <b>Stasiun Pemilahan</b> (memilah basah/kering!) dan rayakan setiap usaha. Jangan pernah menghukum kecelakaan; otak belajar kandung kemih melalui pengulangan yang tenang.`,

      "ai.r14": `<span class="ai-tag">🤝 Tentang berbagi</span> Sebelum ~30 bulan, “berbagi” secara perkembangan mustahil — “punyaku!” adalah kedirian yang sehat. Ceritakan giliran sebagai gantinya: “Giliranmu, lalu giliran Ava.” Irama bergiliran di <b>Pesta Pola</b> membangun keterampilan saraf yang sama.`,

      "ai.r15": `<span class="ai-tag">🥦 Pilih-pilih makanan</span> Balita mungkin butuh 10–15 kali paparan untuk menerima makanan baru. Jaga makan bebas tekanan: orang tua memutuskan apa/kapan, anak memutuskan berapa banyak. Menghitung anggur di <b>Laboratorium Matematika</b> membuat makanan menyenangkan tanpa tekanan.`,

      "ai.r16": `<span class="ai-tag">🦷 Perang menyikat gigi</span> Sikat dua kali sehari sejak gigi pertama; biarkan anakmu “menyikat” boneka lebih dulu (meniru permainan perawatan <b>Sahabat Hewan</b>). Sebuah lagu membantu menghitung waktu — coba <b>Kakek Ini</b> di dunia Musik.`,

      "ai.r17": `<span class="ai-tag">🗣️ Dua bahasa</span> Bayi dwibahasa mungkin mencampur kata — itu normal, bukan kebingungan. Satu-orang-tua-satu-bahasa atau satu-tempat-satu-bahasa keduanya berhasil. Pemilih bahasa WonderSprout membiarkan seluruh aplikasi mencontohkan perpindahan dengan lembut.`,

      "ai.r18": `<span class="ai-tag">😴 Kemunduran tidur</span> Kemunduran tidur umumnya terjadi sekitar ~4, 8–10, 12–18, dan 24 bulan — biasanya lompatan otak. Jaga rutinitas membosankan dan konsisten; tenangkan dengan cerita <b>Selamat Malam, Bintang Kecil</b> pada kecerahan rendah.`,

      "ai.r19": `<span class="ai-tag">🌋 Melempar & memukul</span> Perasaan besar, kata kecil. Sebut perasaannya, pertahankan batasnya: “Aku tidak akan membiarkanmu melempar. Kamu sangat marah.” Tawarkan saluran yang oke — bola untuk dilempar di luar (energi Taman Fisika!). Konsistensi adalah kebaikan hati.`,

      "ai.r20": `<span class="ai-tag">🖍️ Coretan</span> Mencoret sejak ~12–15 bulan adalah sains motorik dari bahu ke pergelangan tangan, belum “gambar”. Mode menggambar <b>Studio</b> mencerminkan ini: proses di atas hasil. Sediakan krayon gemuk dan kertas besar; ceritakan warnanya.`,

      "ai.r21": `<span class="ai-tag">🏫 Beradaptasi</span> Perpisahan singkat, penjemputan yang konsisten, dan benda penghibur lebih baik daripada menyelinap pergi. Ritual foto reuni (seperti <b>Jurnal Wonder</b>) membantu anak memprediksi kembalinya kamu — keterprediksian adalah keamanan.`,

      "ai.r22": `<span class="ai-tag">🚗 Dalam perjalanan</span> Perjalanan mobil adalah tambang emas bercerita: “Mobil merah! Truk besar!” — kosakata <b>Bendera & Negara</b> dan <b>Pemilahan</b> langsung berpindah ke melihat jendela. Nyanyikan ritme bergaya <b>Roda Bus</b> dari dunia Musik saat berhenti.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    Pertanyaan yang manis! Begini cara WonderSprout menjawab hampir apa pun dengan balita:
    <ul>
      <li><b>Mulai dari rasa ingin tahu:</b> “Aku penasaran… apa menurutmu?”</li>
      <li><b>Jadikan fisik:</b> bisakah kamu menyentuhnya, menggerakkannya, atau memeragakannya?</li>
      <li><b>Jaga tetap kecil:</b> 30 detik sampai 3 menit mengalahkan pelajaran 30 menit di usia ini.</li>
    </ul>
    Coba salah satu pertanyaan di bawah — atau tanyakan tentang <b>waktu layar</b>, <b>tonggak perkembangan</b>, <b>hari hujan</b>, <b>Wonder Camera</b>, <b>cerita</b> atau <b>apa yang dilakukan hari ini</b>.`
    },

    sw: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        Hapa kuna mawazo matatu ya leo, kwa mpangilio wa mshangao:
        <ul>
          <li><b>Dakika 2 za skrini:</b> fungua <b>Ajabu ya Leo</b> kwenye dashibodi ya mzazi na mfanye pamoja uzoefu mdogo wa “Chunguza”.</li>
          <li><b>Dakika 5 za vitendo:</b> hatua ya “Ulimwengu Halisi” — inahitaji tu vitu ulivyo navyo nyumbani.</li>
          <li><b>Dakika 0 za skrini, kujifunza zaidi:</b> tokenje nje. Onyesha kitu kimoja na uulize “Najiuliza kwa nini…?” Hamu ya kujua inashinda programu yoyote.</li>
        </ul>
        <b>Thamani ya kujifunza:</b> skrini fupi + ufuatiliaji wa ulimwengu halisi hujenga mzunguko wa GUNDUA → UNGANISHA kutoka mbinu ya WonderSprout.`,

      "ai.r1": `<span class="ai-tag">🛡️ Falsafa ya skrini</span>
        Kanuni ya WonderSprout: <b>muda wa skrini ni mlango, sio marudio.</b>
        <ul>
          <li>Weka vipindi kwa uzoefu mdogo wa jukwaa: <b>sekunde 30 hadi dakika 3</b>.</li>
          <li>Unganisha skrini daima na hatua ya <b>“Jaribu katika maisha halisi”</b> inayofuata kila shughuli.</li>
          <li>Angalia macho yaliyochoka au kuchanganyikiwa — hiyo ni ishara ya kusimama na kusonga.</li>
        </ul>
        Ikiwa shughuli bora sasa iko nje, WonderSprout itakuambia ufunge programu. Hiyo ni kipengele, sio hitilafu. Kwa mwongozo wa kibinafsi wa matibabu juu ya mipaka ya skrini, daktari wa watoto wako ndiye chanzo sahihi.`,

      "ai.r2": `<span class="ai-tag">💛 Jibu la huruma</span>
        Kila mtoto hukua kwa ratiba yake mwenyewe, na masafa mapana ni ya kawaida — WonderSprout hawapangi au kuwagundua watoto kamwe.
        <ul>
          <li>Tumia kichupo cha <b>Uchunguzi</b> kufuatilia “bado / wakati mwingine / kwa uthabiti” kwa wiki — mifumo ni muhimu kuliko matukio mamoja.</li>
          <li>Ikiwa kitu kinakuhangaisha, hisia hiyo inastahili mazungumzo halisi: <b>tafadhali ongea na daktari wa watoto wako au mtaalamu wa maendeleo ya mtoto.</b></li>
          <li>Wakati huo huo, “uingiliaji” bora daima ni ule ule: ongea, imba, cheza na soma pamoja kila siku.</li>
        </ul>
        WonderSprout AI hutoa mawazo ya kucheza, kamwe sio ushauri wa matibabu.`,

      "ai.r3": `<span class="ai-tag">📊 Wiki hii</span>
        Kulingana na data ya dashibodi:
        <ul>
          <li><b>Eneo lililochunguzwa zaidi:</b> Sayansi & Asili — simulisheni za Kuelea/Kuzama na Mmea Unaokua zilikuwa vipendwa.</li>
          <li><b>Ujuzi unaopanda:</b> utabiri! Kuuliza “Itazama?” kabla ya kujaribu ni hatua kubwa ya kufikiri.</li>
          <li><b>Lengo lililopendekezwa lijalo:</b> <b>miundo</b> — jaribu kupanga soksi kwa rangi wakati wa kuosha (skrini sifuri, kujifunza kamili).</li>
        </ul>
        Maelezo kamili yako katika kadi yako ya <b>Ripoti ya Wiki</b> kwenye dashibodi ya mzazi.`,

      "ai.r4": `<span class="ai-tag">🌧️ Ajabu ya siku ya mvua</span>
        Mvua ni maabara!
        <ul>
          <li><b>Tazama:</b> keti karibu na dirisha — “Matone yanaenda wapi? Haraka au polepole?”</li>
          <li><b>Sikiliza:</b> mvua kwenye dirisha dhidi ya mvua kwenye chungu. Kubwa au kimya?</li>
          <li><b>Kamata:</b> nyoosha kikombe nje ya dirisha (na mtu mzima) — inachukua muda gani kujaa?</li>
          <li><b>Kisha skrini:</b> dakika 2 za ulimwengu wa <b>Dunia & Hali ya Hewa</b> kuunganisha ulichokiona na mchana/usiku na mawingu.</li>
        </ul>
        <b>Thamani ya kujifunza:</b> uchunguzi halisi kwanza, uunganisho wa kidijitali pili — mzunguko wa WonderSprout.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        Kitu chochote salama kinaweza kuwa somo:
        <ul>
          <li>Elekeza Wonder Camera kwenye kitu — inakitambua na kufungua <b>Kadi ya Wonder</b>.</li>
          <li>Kila kadi huunganisha kitu na maimbo ya ulimwengu wa kujifunza (rangi, hisabati, sayansi…) na shughuli 3 za haraka.</li>
          <li>Kila kadi huishia na <b>changamoto ya ulimwengu halisi</b>, ili kujifunza kutoka kwenye skrini.</li>
        </ul>
        Jaribu onyesho: <b>WonderSprout Camera → gonga kitu</b>. Kumbuka faragha: utambuzi unaendesha kwa muda huo — hakuna picha za mtoto wako zinazohifadhiwa.`,

      "ai.r6": `<span class="ai-tag">📖 Wakati wa hadithi</span>
        Hadithi ni mashine za muunganiko:
        <ul>
          <li><b>“Pip na Mbegu Ndogo”</b> — ukuaji, subira na asili. Inaoana na kupanda maharagwe halisi.</li>
          <li><b>“Bafu Kubwa la Bloop”</b> — kueleza dhidi ya kuzama na nyakati za utabiri zilizojengwa ndani. Inaoana na majaribio ya wakati wa kuoga.</li>
          <li>Mwache mtoto wako <b>achague njia ya hadithi</b> — maamuzi hujenga uwakala na lugha.</li>
        </ul>
        Kidokezo: baada ya kusoma, uliza “Tufanye nini kinachofuata?” na mwache mtoto aeleekeze. Hiyo ni kiwango cha KUMBA.`,

      "ai.r7": `<span class="ai-tag">🍎 Ajabu ya jikoni</span>
        Jiko ni mtaala kamili:
        <ul>
          <li><b>Hisabati:</b> hesabu zabibu kwenye sahani — “moja zaidi” na “zote zimeisha”.</li>
          <li><b>Sayansi:</b> chakula gani huelea kwenye bakuli la maji? (Zabibu? Ndizi? Zilizomenywa na zisizomenywa!)</li>
          <li><b>Hisi:</b> crunchy dhidi ya laini, joto dhidi ya baridi — taja kila moja.</li>
        </ul>
        Baadaye, Wonder Camera inaweza kubadilisha tunda lolote kuwa Kadi ya Wonder.`,

      "ai.r8": `<span class="ai-tag">🌙 Ajabu ya wakati wa kulala</span>
        Utaratibu unaotabirika unashinda ukamilifu. Jaribu utaratibu huu wa WonderSprout:
        <ul>
          <li><b>Joto + hafifu:</b> kuoga, kisha taa za chini — skrini angavu zimezimwa angalau dakika 30 kabla ya kulala.</li>
          <li><b>Hadithi moja, mahali pale pale:</b> soma “Mwezi Mwenye Usingizi” — inaisha na ibada ya usiku mwema unayoweza kunakili.</li>
          <li><b>Wimbo mmoja:</b> “Unalala?” katika WonderSprout Music umejengwa kama wimbo wa usingizi wa polepole.</li>
          <li><b>Usiku mwema kwa vitu vitatu:</b> Mwezi, kichezeo, na kila mmoja — tabia ndogo ya shukrani.</li>
        </ul>
        <b>Thamani ya kujifunza:</b> taratibu hujenga usalama na mawazo ya mpangilio (“kwanza kuoga, kisha hadithi, kisha wimbo”). Kwa wasiwasi wa kudumu wa usingizi, daktari wa watoto wako ndiye mwongozo sahihi.`,

      "ai.r9": `<span class="ai-tag">💛 Hisia kubwa</span>
        Hisia kubwa ni za kawaida katika umri huu — ubongo wa hisia hukua haraka kuliko maneno ya kuielezea.
        <ul>
          <li><b>Itaje ili kuitawala:</b> “Umechoka kwa sababu mnara umeanguka.” Kutaja hisia hujenga lugha ya kuzisimamia.</li>
          <li><b>Kaa nanga tulivu:</b> kaa karibu, pumua polepole, subiri. Udhibiti wa pamoja unakuja kabla ya udhibiti wa kibinafsi.</li>
          <li><b>Baada ya dhoruba:</b> kumbatia, kisha irudia kwa upole — “mnara umeanguka, ulikasirika, tuliujenga upya.”</li>
        </ul>
        WonderSprout hawagundui kamwe. Ikiwa hisia kubwa zinaonekana mara kwa mara, kali au za wasiwasi, <b>tafadhali ongea na daktari wa watoto wako au mtaalamu wa maendeleo ya mtoto.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 Ajabu ya asili</span>
        Nje ni darasa la asili — na ni bure:
        <ul>
          <li><b>Hunt ya rangi:</b> pata kitu cha kijani, kahawia, njano na nyekundu.</li>
          <li><b>Hesabu sauti:</b> simama na usikilize — sauti ngapi tofauti? Ndege, upepo, magari…</li>
          <li><b>Mfuko wa hazina:</b> kusanya hazina 3 salama (jani, jiwe, fimbo) na utaje kila moja.</li>
          <li><b>Ukirudi nyumbani:</b> dakika 2 za Maabara ya Maisha huunganisha ulichokiona na jinsi mimea inavyokua.</li>
        </ul>
        <b>Thamani ya kujifunza:</b> pembejeo halisi ya hisi (ardhi isiyo sawa, mwanga unaobadilika, sauti hai) hujenga ubongo kwa njia ambazo hakuna skrini inayoweza.`,

      "ai.r11": `<span class="ai-tag">🚗 Ajabu ya safari</span>
        Safari ndefu ni wakati wa kushangaa:
        <ul>
          <li><b>Ninaona rangi:</b> “Ninaona kitu NYEKUNDU!” — watoto wadogo wanaweza kucheza kwa msaada.</li>
          <li><b>Hesabu njiani:</b> malori, handaki, madaraja — kuhesabu huua ukataa.</li>
          <li><b>Imba pamoja:</b> WonderSprout Music haihitaji mawimbi; panga vipendwa 3.</li>
          <li><b>Ajabu za dirisha:</b> eleza kinachopita: “Ng'ombe! Mto! Kinu kinachozunguka!”</li>
        </ul>
        Vipindi visivyo na skrini ni bora hapa; weka akiba hadithi fupi moja kwa dakika 10 ngumu zaidi.`,

      "ai.r12": `<span class="ai-tag">🎂 Ajabu ya sherehe</span>
        Siku za kuzaliwa ni masomo ya siri ya hisabati:
        <ul>
          <li><b>Hesabu mishumaa</b> pamoja — moja kwa kila mwaka, kuhesabu moja kwa moja katika maisha halisi.</li>
          <li><b>Imba “Heri ya Kuzaliwa”</b> — iko katika WonderSprout Music na maneno ya karaoke.</li>
          <li><b>Mazoezi ya kupuliza:</b> kupuliza mishumaa ni udhibiti halisi wa pumzi kwa hotuba.</li>
          <li><b>Hifadhi wakati:</b> ongeza ingizo la Jarida la Wonder na picha baadaye.</li>
        </ul>
        Weka sherehe fupi katika umri huu — saa moja ya furaha inashinda masaa matatu ya kuzidiwa.`,

      "ai.r13": `<span class="ai-tag">🚽 Subira ya choo</span> Watoto wengi huonyesha utayari kati ya miezi 18–36 — angalia hamu, sio umri. Unganisha na <b>Kituo cha Kupanga</b> (kupanga mvume/kavu!) na usherehekee kila jaribio. Kamwe usiadhibu ajali; ubongo hujifunza kibofu kupitia kurudia kwa utulivu.`,

      "ai.r14": `<span class="ai-tag">🤝 Kuhusu kushiriki</span> Kabla ya miezi ~30, “kushiriki” haiwezekani kimaendeleo — “yangu!” ni utu wenye afya. Eleza zamu badala yake: “Zamu yako, kisha zamu ya Ava.” Mdundo wa kubadilishana wa <b>Chama cha Miundo</b> hujenga ujuzi ule ule wa neva.`,

      "ai.r15": `<span class="ai-tag">🥦 Kula kwa kuchagua</span> Mtoto mdogo anaweza kuhitaji mihuri 10–15 kukubali chakula kipya. Weka milo isiyo na shinikizo: mzazi anaamua nini/lwakati, mtoto anaamua kiasi. Kuhesabu zabibu katika <b>Maabara ya Hisabati</b> hufanya chakula kuwa cha kucheza bila shinikizo.`,

      "ai.r16": `<span class="ai-tag">🦷 Vita vya kusafisha meno</span> Safisha mara mbili kwa siku tangu jino la kwanza; mwache mtoto wako “asafishe” dubu kwanza (kucheza kama mchezo wa malezi wa <b>Marafiki Wanyama</b>). Wimbo husaidia kupima muda — jaribu <b>Mzee Huyu</b> katika ulimwengu wa Muziki.`,

      "ai.r17": `<span class="ai-tag">🗣️ Lugha mbili</span> Watoto wanaozungumza lugha mbili wanaweza kuchanganya maneno — hiyo ni ya kawaida, sio mkanganyiko. Mzazi-mmoja-lugha-moja au mahali-moja-lugha-moja zote zinafanya kazi. Kichagua lugha cha WonderSprout huruhusu programu nzima kuiga kubadilika kwa upole.`,

      "ai.r18": `<span class="ai-tag">😴 Kushuka kwa usingizi</span> Kushuka kwa usingizi kawaida hutokea karibu na miezi ~4, 8–10, 12–18 na 24 — kawaida ni hatua ya ubongo. Weka utaratibu wa kuchosha na thabiti; tuliza na hadithi ya <b>Usiku Mwema, Nyota Ndogo</b> kwa mwangaza wa chini.`,

      "ai.r19": `<span class="ai-tag">🌋 Kurusha & kupiga</span> Hisia kubwa, maneno madogo. Taja hisia, shikilia kikomo: “Sitakuruhusu kurusha. Umechoka sana.” Toa njia inayokubalika — mpira wa kurusha nje (nishati ya Uwanja wa Fizikia!). Uthabiti ni wema.`,

      "ai.r20": `<span class="ai-tag">🖍️ Kuchora</span> Kuchora kuanzia miezi ~12–15 ni sayansi ya magari kutoka bega hadi kifundo cha mkono, bado sio “picha”. Hali ya kuchora ya <b>Studio</b> inaakisi hili: mchakato juu ya bidhaa. Toa crayon nene na karatasi kubwa; eleza rangi.`,

      "ai.r21": `<span class="ai-tag">🏫 Kujipanga</span> Kuaga mfupi, kuchukua kwa uthabiti, na kitu cha faraja vinashinda kutoroka kimyakimya. Ibada ya picha ya kukutana tena (kama <b>Jarida la Wonder</b>) humsaidia mtoto kutabiri kurudi kwako — utabirika ni usalama.`,

      "ai.r22": `<span class="ai-tag">🚗 Katika harakati</span> Safari za magari ni dhahabu ya kusimulia: “Gari jekundu! Lori kubwa!” — msamiati wa <b>Bendera & Nchi</b> na <b>Kupanga</b> unahamishwa moja kwa moja kwa kutazama dirisha. Imba midundo ya mtindo wa <b>Magurudumu ya Basi</b> kutoka ulimwengu wa Muziki wakati wa kusimama.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    Swali zuri sana! Hii ndiyo njia ya WonderSprout ya kujibu karibu kitu chochote na mtoto mdogo:
    <ul>
      <li><b>Anza kwa mshangao:</b> “Najiuliza… WEGI unafikiri nini?”</li>
      <li><b>Ifanye ya kimwili:</b> unaweza kuigusa, kuihamisha, au kuigiza?</li>
      <li><b>Iweke ndogo:</b> sekunde 30 hadi dakika 3 inashinda somo la dakika 30 katika umri huu.</li>
    </ul>
    Jaribu moja ya maswali hapa chini — au niulize kuhusu <b>muda wa skrini</b>, <b>hatua za maendeleo</b>, <b>siku za mvua</b>, <b>Wonder Camera</b>, <b>hadithi</b> au <b>nini cha kufanya leo</b>.`
    },

    it: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        Ecco tre idee per oggi, in ordine di meraviglia:
        <ul>
          <li><b>2 minuti di schermo:</b> apri la <b>Meraviglia del Giorno</b> sulla dashboard genitori e fate insieme la micro-esperienza “Esplora”.</li>
          <li><b>5 minuti pratici:</b> il passo “Mondo reale” — servono solo cose che avete già in casa.</li>
          <li><b>0 minuti di schermo, massimo apprendimento:</b> uscite. Indicate una cosa e chiedete “mi chiedo perché…?” La curiosità batte qualsiasi app.</li>
        </ul>
        <b>Valore di apprendimento:</b> schermo breve + seguito nel mondo reale costruisce il ciclo SCOPRI → COLLEGA del metodo WonderSprout.`,

      "ai.r1": `<span class="ai-tag">🛡️ Filosofia dello schermo</span>
        La regola di WonderSprout: <b>il tempo davanti allo schermo è una porta, non una destinazione.</b>
        <ul>
          <li>Limita le sessioni alle micro-esperienze della piattaforma: <b>da 30 secondi a 3 minuti</b>.</li>
          <li>Abbina sempre lo schermo al passo <b>“Provalo nella vita reale”</b> che segue ogni attività.</li>
          <li>Fai attenzione agli occhi stanchi o all'irrequietezza — è il segnale per fermarsi e muoversi.</li>
        </ul>
        Se la migliore attività ora è fuori, WonderSprout ti dirà di chiudere l'app. È una funzione, non un bug. Per una consulenza medica personalizzata sui limiti dello schermo, il tuo pediatra è la fonte giusta.`,

      "ai.r2": `<span class="ai-tag">💛 Risposta premurosa</span>
        Ogni bambino cresce secondo il proprio ritmo e un'ampia gamma è normale — WonderSprout non classifica né diagnostica mai i bambini.
        <ul>
          <li>Usa la scheda <b>Osservazioni</b> per tracciare “non ancora / a volte / con costanza” nel corso delle settimane — gli schemi contano più dei singoli momenti.</li>
          <li>Se qualcosa ti preoccupa, quel sentimento merita una conversazione vera: <b>per favore parla con il tuo pediatra o un professionista dello sviluppo infantile.</b></li>
          <li>Nel frattempo, il miglior “intervento” è sempre lo stesso: parlare, cantare, giocare e leggere insieme ogni giorno.</li>
        </ul>
        WonderSprout AI dà idee di gioco, mai consigli medici.`,

      "ai.r3": `<span class="ai-tag">📊 Questa settimana</span>
        In base ai dati della dashboard:
        <ul>
          <li><b>Area più esplorata:</b> Scienza e Natura — le simulazioni Galleggia/Affonda e Pianta che cresce erano le preferite.</li>
          <li><b>Competenza in crescita:</b> la previsione! Chiedere “Affonderà?” prima di provare è un grande passo di pensiero.</li>
          <li><b>Focus suggerito dopo:</b> <b>schemi</b> — provate a ordinare i calzini per colore al momento del bucato (zero schermi, apprendimento completo).</li>
        </ul>
        Tutti i dettagli sono nella tua scheda <b>Report settimanale</b> sulla dashboard genitori.`,

      "ai.r4": `<span class="ai-tag">🌧️ Meraviglia di giorno piovoso</span>
        La pioggia è un laboratorio!
        <ul>
          <li><b>Osservare:</b> sedetevi vicino alla finestra — “Dove vanno le gocce? Veloci o lente?”</li>
          <li><b>Ascoltare:</b> pioggia sul vetro contro pioggia su una pentola. Forte o piano?</li>
          <li><b>Catturare:</b> tenete un bicchiere fuori dalla finestra (con un adulto) — quanto ci mette a riempirsi?</li>
          <li><b>Poi lo schermo:</b> 2 minuti del mondo <b>Terra e Meteo</b> per collegare ciò che avete visto al giorno/notte e alle nuvole.</li>
        </ul>
        <b>Valore di apprendimento:</b> prima l'osservazione reale, poi la connessione digitale — il ciclo WonderSprout.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        Qualsiasi oggetto sicuro può diventare una lezione:
        <ul>
          <li>Punta la Wonder Camera su un oggetto — lo identifica e apre una <b>Carta Wonder</b>.</li>
          <li>Ogni carta collega l'oggetto ai mondi di apprendimento (colore, matematica, scienza…) con 3 attività rapide.</li>
          <li>Ogni carta termina con una <b>sfida del mondo reale</b>, così l'apprendimento esce dallo schermo.</li>
        </ul>
        Prova la demo: <b>WonderSprout Camera → tocca un oggetto</b>. Nota sulla privacy: il riconoscimento avviene sul momento — nessuna foto di tuo figlio viene salvata.`,

      "ai.r6": `<span class="ai-tag">📖 Ora del racconto</span>
        Le storie sono macchine di connessione:
        <ul>
          <li><b>“Pip e il piccolo seme”</b> — crescita, pazienza e natura. Si abbina a piantare un vero fagiolo.</li>
          <li><b>“Il grande bagno di Bloop”</b> — galleggiare contro affondare con momenti di previsione integrati. Si abbina ai test durante il bagnetto.</li>
          <li>Lascia che tuo figlio <b>sceglia il percorso della storia</b> — le decisioni costruiscono iniziativa e linguaggio.</li>
        </ul>
        Consiglio: dopo la lettura, chiedi “Cosa facciamo dopo?” e lascia che il bambino diriga. Quello è il livello CREARE.`,

      "ai.r7": `<span class="ai-tag">🍎 Meraviglia in cucina</span>
        La cucina è un curriculum completo:
        <ul>
          <li><b>Matematica:</b> contate gli acini su un piatto — “uno in più” e “tutti finiti”.</li>
          <li><b>Scienza:</b> quali cibi galleggiano in una ciotola d'acqua? (Uva? Banana? Con e senza buccia!)</li>
          <li><b>Sensi:</b> croccante contro morbido, caldo contro freddo — nominate ciascuno.</li>
        </ul>
        Dopo, la Wonder Camera può trasformare qualsiasi frutto in una Carta Wonder.`,

      "ai.r8": `<span class="ai-tag">🌙 Meraviglia della buonanotte</span>
        Una routine prevedibile batte una perfetta. Prova questa routine WonderSprout:
        <ul>
          <li><b>Caldo + tenue:</b> bagnetto, poi luci basse — schermi luminosi spenti almeno 30 minuti prima di dormire.</li>
          <li><b>Una storia, stesso posto:</b> leggete “La Luna assonnata” — finisce con un rituale della buonanotte che potete copiare.</li>
          <li><b>Una canzone:</b> “Dormi?” in WonderSprout Music è costruita come ninna nanna lenta.</li>
          <li><b>Buonanotte a tre cose:</b> la Luna, un giocattolo e l'un l'altro — una piccola abitudine di gratitudine.</li>
        </ul>
        <b>Valore di apprendimento:</b> le routine costruiscono sicurezza e pensiero sequenziale (“prima il bagno, poi la storia, poi la canzone”). Per preoccupazioni persistenti sul sonno, il tuo pediatra è la guida giusta.`,

      "ai.r9": `<span class="ai-tag">💛 Emozioni grandi</span>
        Le emozioni intense sono normali a questa età — il cervello emotivo cresce più velocemente delle parole per descriverlo.
        <ul>
          <li><b>Nominare per domare:</b> “Sei frustrato perché la torre è caduta.” Nominare le emozioni costruisce il linguaggio per gestirle.</li>
          <li><b>Sii l'ancora calma:</b> siediti vicino, respira lentamente, aspetta. La co-regolazione viene prima dell'autoregolazione.</li>
          <li><b>Dopo la tempesta:</b> un abbraccio, poi rigiocatelo con dolcezza — “la torre è caduta, ti sei arrabbiato, l'abbiamo ricostruita.”</li>
        </ul>
        WonderSprout non diagnostica mai. Se le emozioni intense sembrano frequenti, intense o preoccupanti, <b>per favore parla con il tuo pediatra o un professionista dello sviluppo infantile.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 Meraviglia della natura</span>
        L'aria aperta è l'aula originale — ed è gratis:
        <ul>
          <li><b>Caccia ai colori:</b> trovate qualcosa di verde, marrone, giallo e rosso.</li>
          <li><b>Contare i suoni:</b> fermatevi e ascoltate — quanti suoni diversi? Uccelli, vento, auto…</li>
          <li><b>Tasca dei tesori:</b> raccogliete 3 tesori sicuri (foglia, sasso, bastoncino) e nominate ciascuno.</li>
          <li><b>Tornati a casa:</b> 2 minuti del Laboratorio di Vita collegano ciò che avete visto a come crescono le piante.</li>
        </ul>
        <b>Valore di apprendimento:</b> l'input sensoriale reale (terreno irregolare, luce che cambia, suoni vivi) costruisce cervelli in modi che nessuno schermo può.`,

      "ai.r11": `<span class="ai-tag">🚗 Meraviglia in viaggio</span>
        I viaggi lunghi sono tempo di meraviglia:
        <ul>
          <li><b>Vedo vedo colori:</b> “Vedo qualcosa di ROSSO!” — i piccoli possono giocare con aiuto.</li>
          <li><b>Contare lungo la strada:</b> camion, tunnel, ponti — contare uccide la noia.</li>
          <li><b>Cantare insieme:</b> WonderSprout Music non ha bisogno di segnale; metti in coda 3 preferite.</li>
          <li><b>Meraviglie dal finestrino:</b> raccontate ciò che passa: “Una mucca! Un fiume! Un mulino che gira!”</li>
        </ul>
        I tratti senza schermo sono ideali qui; conserva una storia breve per i 10 minuti più duri.`,

      "ai.r12": `<span class="ai-tag">🎂 Meraviglia di festa</span>
        I compleanni sono lezioni di matematica segrete:
        <ul>
          <li><b>Contate le candeline</b> insieme — una per anno, conteggio uno a uno nella vita reale.</li>
          <li><b>Cantate “Buon compleanno”</b> — è in WonderSprout Music con le parole del karaoke.</li>
          <li><b>Esercizio di soffio:</b> soffiare le candeline è vero controllo del respiro per il linguaggio.</li>
          <li><b>Salva il momento:</b> aggiungi poi una voce al Diario Wonder con una foto.</li>
        </ul>
        A questa età tenete le feste brevi — un'ora di gioia batte tre ore di sovraccarico.`,

      "ai.r13": `<span class="ai-tag">🚽 Pazienza con il vasino</span> La maggior parte dei bambini mostra segnali tra i 18 e i 36 mesi — osserva l'interesse, non l'età. Abbinalo alla <b>Stazione di classificazione</b> (ordinare bagnato/asciutto!) e celebra ogni tentativo. Non punire mai gli incidenti; il cervello impara la vescica attraverso la ripetizione calma.`,

      "ai.r14": `<span class="ai-tag">🤝 Sulla condivisione</span> Prima dei ~30 mesi, “condividere” è evolutivamente impossibile — “mio!” è un sé sano. Narra invece i turni: “Il tuo turno, poi il turno di Ava.” Il ritmo a turni della <b>Festa dei pattern</b> costruisce la stessa abilità neurale.`,

      "ai.r15": `<span class="ai-tag">🥦 Mangiare schizzinoso</span> Un bambino piccolo può aver bisogno di 10–15 esposizioni per accettare un cibo nuovo. Mantieni i pasti senza pressione: l'adulto decide cosa/quando, il bambino decide quanto. Contare gli acini nel <b>Laboratorio di Matematica</b> rende il cibo giocoso senza pressione.`,

      "ai.r16": `<span class="ai-tag">🦷 Battaglie dello spazzolino</span> Lava due volte al giorno dal primo dentino; lascia che tuo figlio “lavi” prima un peluche (come il gioco di cura degli <b>Amici animali</b>). Una canzone aiuta con il tempo — prova <b>Questo vecchietto</b> nel mondo Musica.`,

      "ai.r17": `<span class="ai-tag">🗣️ Due lingue</span> I bambini bilingui possono mescolare le parole — è normale, non confusione. Un-genitore-una-lingua o un-luogo-una-lingua funzionano entrambi. Il selettore di lingua di WonderSprout permette all'intera app di modellare dolcemente il passaggio.`,

      "ai.r18": `<span class="ai-tag">😴 Regressioni del sonno</span> Le regressioni del sonno colpiscono comunemente intorno ai ~4, 8–10, 12–18 e 24 mesi — di solito un salto cerebrale. Mantieni la routine noiosa e costante; rilassatevi con la storia <b>Buonanotte, stellina</b> a bassa luminosità.`,

      "ai.r19": `<span class="ai-tag">🌋 Lanciare e colpire</span> Emozioni grandi, parole piccole. Nomina l'emozione, tieni il limite: “Non ti lascerò lanciare. Sei molto arrabbiato.” Offri uno sfogo accettabile — una palla da lanciare fuori (energia del Parco della fisica!). La costanza è gentilezza.`,

      "ai.r20": `<span class="ai-tag">🖍️ Scarabocchiare</span> Scarabocchiare dai ~12–15 mesi è scienza motoria dalla spalla al polso, non ancora “disegni”. La modalità disegno dello <b>Studio</b> lo rispecchia: processo sopra prodotto. Offri pastelli grossi e carta grande; narra i colori.`,

      "ai.r21": `<span class="ai-tag">🏫 Ambientarsi</span> Saluti brevi, ritiri costanti e un oggetto di conforto battono lo sgattaiolare via. Un rituale fotografico del ricongiungimento (come il <b>Diario Wonder</b>) aiuta il bambino a prevedere il tuo ritorno — la prevedibilità è sicurezza.`,

      "ai.r22": `<span class="ai-tag">🚗 In movimento</span> I viaggi in auto sono oro per la narrazione: “Auto rossa! Camion grande!” — il vocabolario di <b>Bandiere e Paesi</b> e <b>Classificazione</b> si trasferisce direttamente al guardare dal finestrino. Cantate i ritmi in stile <b>Le ruote del bus</b> del mondo Musica alle soste.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    Che bella domanda! Ecco il modo WonderSprout di rispondere a quasi tutto con un bambino piccolo:
    <ul>
      <li><b>Inizia con la meraviglia:</b> “Mi chiedo… cosa ne pensi TU?”</li>
      <li><b>Rendilo fisico:</b> puoi toccarlo, muoverlo o recitarlo?</li>
      <li><b>Tienilo minuscolo:</b> da 30 secondi a 3 minuti batte una lezione di 30 minuti a questa età.</li>
    </ul>
    Prova una delle domande qui sotto — o chiedimi di <b>tempo davanti allo schermo</b>, <b>tappe di sviluppo</b>, <b>giorni di pioggia</b>, la <b>Wonder Camera</b>, le <b>storie</b> o <b>cosa fare oggi</b>.`
    },

    nl: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        Hier zijn drie ideeën voor vandaag, in volgorde van verwondering:
        <ul>
          <li><b>2 minuten scherm:</b> open de <b>Wonder van de Dag</b> op het ouderdashboard en doe samen de micro-ervaring „Verkennen”.</li>
          <li><b>5 minuten handenarbeid:</b> de stap „Echte wereld” — die heeft alleen dingen nodig die je al thuis hebt.</li>
          <li><b>0 minuten scherm, meeste leren:</b> ga naar buiten. Wijs naar iets en vraag „Ik vraag me af waarom…?” Nieuwsgierigheid verslaat elke app.</li>
        </ul>
        <b>Leerwaarde:</b> kort scherm + vervolg in de echte wereld bouwt de ONTDEKKEN → VERBINDEN-lus van de WonderSprout-methode.`,

      "ai.r1": `<span class="ai-tag">🛡️ Schermfilosofie</span>
        De regel van WonderSprout: <b>schermtijd is een deur, geen bestemming.</b>
        <ul>
          <li>Beperk sessies tot de micro-ervaringen van het platform: <b>30 seconden tot 3 minuten</b>.</li>
          <li>Koppel het scherm altijd aan de stap <b>„Probeer het in het echte leven”</b> die elke activiteit volgt.</li>
          <li>Let op vermoeide ogen of gefriemel — dat is het signaal om te stoppen en te bewegen.</li>
        </ul>
        Als de beste activiteit nu buiten is, zal WonderSprout je vertellen de app te sluiten. Dat is een functie, geen bug. Voor persoonlijk medisch advies over schermlimieten is je kinderarts de juiste bron.`,

      "ai.r2": `<span class="ai-tag">💛 Zorgzaam antwoord</span>
        Elk kind groeit in eigen tempo, en een brede bandbreedte is normaal — WonderSprout rangschikt of diagnosticeert kinderen nooit.
        <ul>
          <li>Gebruik het tabblad <b>Observaties</b> om „nog niet / soms / consequent” wekenlang bij te houden — patronen tellen meer dan losse momenten.</li>
          <li>Als iets je zorgen baart, verdient dat gevoel een echt gesprek: <b>praat alsjeblieft met je kinderarts of een professional op het gebied van kinderontwikkeling.</b></li>
          <li>Intussen is de beste „interventie” altijd dezelfde: dagelijks samen praten, zingen, spelen en lezen.</li>
        </ul>
        WonderSprout AI geeft speelse ideeën, nooit medisch advies.`,

      "ai.r3": `<span class="ai-tag">📊 Deze week</span>
        Op basis van de dashboardgegevens:
        <ul>
          <li><b>Meest verkende domein:</b> Wetenschap & Natuur — de simulaties Drijven/Zinken en Groeiende plant waren favorieten.</li>
          <li><b>Stijgende vaardigheid:</b> voorspellen! „Zal het zinken?” vragen vóór het testen is een grote denkpas.</li>
          <li><b>Vervolgens voorgestelde focus:</b> <b>patronen</b> — probeer sokken op kleur te sorteren tijdens de was (nul schermen, volledig leren).</li>
        </ul>
        Alle details staan in je <b>Weekrapport</b>-kaart op het ouderdashboard.`,

      "ai.r4": `<span class="ai-tag">🌧️ Regenachtig wonder</span>
        Regen is een laboratorium!
        <ul>
          <li><b>Kijken:</b> ga bij het raam zitten — „Waar gaan de druppels heen? Snel of langzaam?”</li>
          <li><b>Luisteren:</b> regen op het raam versus regen op een pan. Hard of zacht?</li>
          <li><b>Vangen:</b> houd een beker naar buiten (met een volwassene) — hoe lang duurt het vullen?</li>
          <li><b>Daarna scherm:</b> 2 minuten van de wereld <b>Aarde & Weer</b> om wat je zag te verbinden met dag/nacht en wolken.</li>
        </ul>
        <b>Leerwaarde:</b> eerst echte observatie, daarna digitale verbinding — de WonderSprout-lus.`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        Elk veilig voorwerp kan een les worden:
        <ul>
          <li>Richt de Wonder Camera op een voorwerp — ze identificeert het en opent een <b>Wonderkaart</b>.</li>
          <li>Elke kaart verbindt het voorwerp met leerwerelden (kleur, rekenen, wetenschap…) met 3 snelle activiteiten.</li>
          <li>Elke kaart eindigt met een <b>uitdaging in de echte wereld</b>, zodat het leren het scherm verlaat.</li>
        </ul>
        Probeer de demo: <b>WonderSprout Camera → tik een voorwerp aan</b>. Privacy-opmerking: herkenning draait op dat moment — er worden geen foto's van je kind opgeslagen.`,

      "ai.r6": `<span class="ai-tag">📖 Verhaaltjestijd</span>
        Verhalen zijn verbindingsmachines:
        <ul>
          <li><b>„Pip en het kleine zaadje”</b> — groei, geduld en natuur. Combineert met het planten van een echte boon.</li>
          <li><b>„Bloops grote bad”</b> — drijven versus zinken met ingebouwde voorspelmomenten. Combineert met testen tijdens het bad.</li>
          <li>Laat je kind <b>het pad van het verhaal kiezen</b> — beslissingen bouwen eigen initiatief en taal.</li>
        </ul>
        Tip: vraag na het lezen „Wat zullen we nu doen?” en laat het kind leiden. Dat is het niveau CREËREN.`,

      "ai.r7": `<span class="ai-tag">🍎 Keukenwonder</span>
        De keuken is een volledig curriculum:
        <ul>
          <li><b>Rekenen:</b> tel druiven op een bord — „nog één” en „allemaal op”.</li>
          <li><b>Wetenschap:</b> welk eten drijft in een kom water? (Druif? Banaan? Met en zonder schil!)</li>
          <li><b>Zintuigen:</b> knapperig versus zacht, warm versus koud — benoem elk.</li>
        </ul>
        Daarna kan de Wonder Camera elke vrucht in een Wonderkaart veranderen.`,

      "ai.r8": `<span class="ai-tag">🌙 Bedtijdwonder</span>
        Een voorspelbaar afbouwen verslaat een perfect. Probeer deze WonderSprout-routine:
        <ul>
          <li><b>Warm + gedimd:</b> bad, dan zacht licht — felle schermen minstens 30 minuten voor het slapen uit.</li>
          <li><b>Eén verhaal, dezelfde plek:</b> lees „De slaperige maan” — het eindigt met een welterustenritueel dat je kunt overnemen.</li>
          <li><b>Eén liedje:</b> „Slaap je?” in WonderSprout Music is gebouwd als langzaam slaapliedje.</li>
          <li><b>Welterusten tegen drie dingen:</b> de maan, een stuk speelgoed en elkaar — een kleine dankbaarheidsgewoonte.</li>
        </ul>
        <b>Leerwaarde:</b> routines bouwen veiligheid en sequentieel denken („eerst bad, dan verhaal, dan liedje”). Voor aanhoudende slaapproblemen is je kinderarts de juiste gids.`,

      "ai.r9": `<span class="ai-tag">💛 Grote gevoelens</span>
        Grote gevoelens zijn normaal op deze leeftijd — het gevoelensbrein groeit sneller dan de woorden om het te beschrijven.
        <ul>
          <li><b>Benoemen om te temmen:</b> „Je bent gefrustreerd omdat de toren viel.” Gevoelens benoemen bouwt de taal om ze te beheersen.</li>
          <li><b>Blijf het kalme anker:</b> ga erbij zitten, adem langzaam, wacht. Co-regulatie komt vóór zelfregulatie.</li>
          <li><b>Na de storm:</b> een knuffel, speel het dan zachtjes na — „de toren viel, je was boos, we hebben hem herbouwd.”</li>
        </ul>
        WonderSprout diagnosticeert nooit. Als grote gevoelens frequent, heftig of verontrustend lijken, <b>praat dan alsjeblieft met je kinderarts of een professional op het gebied van kinderontwikkeling.</b>`,

      "ai.r10": `<span class="ai-tag">🌳 Natuurwonder</span>
        Buiten is het originele klaslokaal — en het is gratis:
        <ul>
          <li><b>Kleurenjacht:</b> vind iets groens, bruins, geels en roods.</li>
          <li><b>Geluiden tellen:</b> sta stil en luister — hoeveel verschillende geluiden? Vogels, wind, auto's…</li>
          <li><b>Schattenzak:</b> verzamel 3 veilige schatten (blad, steen, stokje) en benoem elk.</li>
          <li><b>Terug thuis:</b> 2 minuten van het Levenslab verbinden wat je zag met hoe planten groeien.</li>
        </ul>
        <b>Leerwaarde:</b> echte zintuiglijke input (oneffen grond, wisselend licht, levende geluiden) bouwt breinen op manieren die geen scherm kan.`,

      "ai.r11": `<span class="ai-tag">🚗 Reiswonder</span>
        Lange ritten zijn verwondertijd:
        <ul>
          <li><b>Ik zie kleuren:</b> „Ik zie iets ROODS!” — peuters kunnen met hulp meespelen.</li>
          <li><b>Tel mee:</b> vrachtwagens, tunnels, bruggen — tellen doodt verveling.</li>
          <li><b>Samen zingen:</b> WonderSprout Music heeft geen signaal nodig; zet 3 favorieten in de wachtrij.</li>
          <li><b>Raamwonders:</b> vertel wat voorbijkomt: „Een koe! Een rivier! Een draaiende molen!”</li>
        </ul>
        Schermvrije stukken zijn hier ideaal; bewaar één kort verhaaltje voor de moeilijkste 10 minuten.`,

      "ai.r12": `<span class="ai-tag">🎂 Feestwonder</span>
        Verjaardagen zijn geheime rekenlessen:
        <ul>
          <li><b>Tel de kaarsjes</b> samen — één per jaar, één-op-één tellen in het echte leven.</li>
          <li><b>Zing „Lang zal ze leven”</b> — het zit in WonderSprout Music met karaoketekst.</li>
          <li><b>Blaasoefening:</b> kaarsjes uitblazen is echte ademcontrole voor spraak.</li>
          <li><b>Bewaar het moment:</b> voeg daarna een Wonderdagboek-item toe met een foto.</li>
        </ul>
        Houd feestjes kort op deze leeftijd — een uur vreugde verslaat drie uur overweldiging.`,

      "ai.r13": `<span class="ai-tag">🚽 Zindelijkheidsgeduld</span> De meeste kinderen tonen bereidheid tussen 18 en 36 maanden — let op interesse, niet op leeftijd. Koppel het aan het <b>Sorteerstation</b> (nat/droog sorteren!) en vier elke poging. Straf ongelukjes nooit; het brein leert blazen via rustige herhaling.`,

      "ai.r14": `<span class="ai-tag">🤝 Over delen</span> Vóór ~30 maanden is „delen” ontwikkelingsmatig onmogelijk — „van mij!” is een gezond zelf. Vertel in plaats daarvan de beurten: „Jouw beurt, dan Ava's beurt.” Het beurt-ritme van het <b>Patroonfeest</b> bouwt dezelfde neurale vaardigheid.`,

      "ai.r15": `<span class="ai-tag">🥦 Kieskeurig eten</span> Een peuter heeft misschien 10–15 blootstellingen nodig om nieuw eten te accepteren. Houd maaltijden drukvrij: de ouder beslist wat/wanneer, het kind beslist hoeveel. Druiven tellen in het <b>Rekenlab</b> maakt eten speels zonder druk.`,

      "ai.r16": `<span class="ai-tag">🦷 Poetsgevechten</span> Poets twee keer per dag vanaf de eerste tand; laat je kind eerst een knuffel „poetsen” (zoals het verzorgingsspel van <b>Dierenvrienden</b>). Een liedje helpt met de tijd — probeer <b>Deze oude man</b> in de Muziekwereld.`,

      "ai.r17": `<span class="ai-tag">🗣️ Twee talen</span> Tweetalige baby's kunnen woorden mengen — dat is normaal, geen verwarring. Eén-ouder-één-taal of één-plek-één-taal werken beide. De taalkiezer van WonderSprout laat de hele app het wisselen zachtjes voordoen.`,

      "ai.r18": `<span class="ai-tag">😴 Slaapteruggang</span> Slaapteruggangen komen vaak rond ~4, 8–10, 12–18 en 24 maanden — meestal een breinsprong. Houd de routine saai en consistent; bouw af met het verhaal <b>Welterusten, sterretje</b> op lage helderheid.`,

      "ai.r19": `<span class="ai-tag">🌋 Gooien & slaan</span> Grote gevoelens, kleine woorden. Benoem het gevoel, houd de grens: „Ik laat je niet gooien. Je bent zo boos.” Bied een oké uitlaatklep — een bal om buiten te gooien (Natuurkunde-speeltuin-energie!). Consistentie is vriendelijkheid.`,

      "ai.r20": `<span class="ai-tag">🖍️ Krabbelen</span> Krabbelen vanaf ~12–15 maanden is motorsport van schouder tot pols, nog geen „plaatjes”. De tekenmodus van de <b>Studio</b> weerspiegelt dit: proces boven product. Bied dikke kleurpotloden en groot papier; vertel over de kleuren.`,

      "ai.r21": `<span class="ai-tag">🏫 Wennen</span> Korte afscheiden, consequent ophalen en een troostobject verslaan wegsluipen. Een fototitueel van het weerzien (zoals het <b>Wonderdagboek</b>) helpt het kind jouw terugkeer te voorspellen — voorspelbaarheid is veiligheid.`,

      "ai.r22": `<span class="ai-tag">🚗 Onderweg</span> Autoritjes zijn vertelgoud: „Rode auto! Grote vrachtwagen!” — de woordenschat van <b>Vlaggen & Landen</b> en <b>Sorteren</b> draagt direct over naar uit het raam kijken. Zing de <b>Wielen-van-de-bus</b>-achtige ritmes uit de Muziekwereld bij stops.`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    Wat een mooie vraag! Zo antwoordt WonderSprout op bijna alles met een peuter:
    <ul>
      <li><b>Begin met verwondering:</b> „Ik vraag me af… wat denk JIJ?”</li>
      <li><b>Maak het fysiek:</b> kun je het aanraken, bewegen of naspelen?</li>
      <li><b>Houd het piepklein:</b> 30 seconden tot 3 minuten verslaat een les van 30 minuten op deze leeftijd.</li>
    </ul>
    Probeer een van de vragen hieronder — of vraag me naar <b>schermtijd</b>, <b>ontwikkelingsmijlpalen</b>, <b>regenachtige dagen</b>, de <b>Wonder Camera</b>, <b>verhalen</b> of <b>wat we vandaag doen</b>.`
    },

    ja: {
      "ai.r0": `<span class="ai-tag">✨ WonderSprout AI</span>
        きょうの アイデアを みっつ、ふしぎな じゅんばんに：
        <ul>
          <li><b>2ふんの がめん：</b>おうちのひと ダッシュボードで <b>きょうの ふしぎ</b>を ひらいて、いっしょに「たんけん」の ちいさな たいけんを しよう。</li>
          <li><b>5ふんの てあそび：</b>「ほんものの せかい」の ステップ — いえに ある ものだけで できるよ。</li>
          <li><b>がめん 0ふんで いちばん まなべる：</b>そとに でよう。ひとつ ゆびさして「なんで だろう…？」と きいてみて。こうきしんは どんな アプリにも かてるよ。</li>
        </ul>
        <b>まなびの かち：</b>みじかい がめん + ほんものの せかいでの つづきが、WonderSprout の「みつける → つなげる」の わをつくります。`,

      "ai.r1": `<span class="ai-tag">🛡️ がめんの かんがえかた</span>
        WonderSprout の ルール：<b>がめん じかんは とびらで、もくてきちでは ない。</b>
        <ul>
          <li>つかう じかんは プラットフォームの ちいさな たいけんに：<b>30びょうから 3ふん</b>。</li>
          <li>がめんは つねに、どの かつどうの あとにも ある <b>「じっさいに やってみよう」</b>と くらべよう。</li>
          <li>めの つかれや ぐずりに ちゅうい — それが とまって うごく サイン。</li>
        </ul>
        いま いちばんの かつどうが そとなら、WonderSprout は アプリを とじるように つたえます。これは きのうで、こしょうでは ありません。がめん じかんの げんかいについて こべつの いりょうてきな アドバイスが ほしければ、かかりつけの しょうにかいが ただしい そうごうです。`,

      "ai.r2": `<span class="ai-tag">💛 やさしい へんじ</span>
        どの こどもも じぶんの ペースで そだちます。ひろい はんいは ふつうです — WonderSprout は こどもを ぜんたいの なかに ならべたり しんだんしたり しません。
        <ul>
          <li><b>かんさつ</b>の タブで「まだ / ときどき / いつも」を しゅうに わたって きろくしよう — ひとつの しゅんかんより パターンが たいせつ。</li>
          <li>しんぱいな ことが あったら、その きもちは ほんとうの はなしあいに あたいします：<b>かかりつけの しょうにかいか、こどもの はったつの せんもんかに そうだんして ください。</b></li>
          <li>その あいだ、いちばんの「たいさく」は いつも おなじ：まいにち いっしょに はなして、うたって、あそんで、よむ こと。</li>
        </ul>
        WonderSprout AI は あそびの アイデアを だします。いりょうの アドバイスは しません。`,

      "ai.r3": `<span class="ai-tag">📊 こんしゅう</span>
        ダッシュボードの データに もとづいて：
        <ul>
          <li><b>いちばん たんけんした りょういき：</b>かがくと しぜん — 「うく/しずむ」と「そだつ しょくぶつ」の シミュレーションが にんきでした。</li>
          <li><b>のびて いる のうりょく：</b>よそう！ためす まえに「しずむ かな？」と きくのは、おおきな かんがえの ステップ。</li>
          <li><b>つぎの おすすめ：</b><b>もよう</b> — せんたくの ときに くつしたを いろで わけてみよう（がめん ゼロで、まなびは たっぷり）。</li>
        </ul>
        くわしくは おうちのひと ダッシュボードの <b>しゅうかん レポート</b>カードに あります。`,

      "ai.r4": `<span class="ai-tag">🌧️ あめのひの ふしぎ</span>
        あめは じっけんしつ！
        <ul>
          <li><b>みる：</b>まどの そばに すわって —「しずくは どこに いくの？はやい？おそい？」</li>
          <li><b>きく：</b>まどに あたる あめと、なべに あたる あめ。おおきい おと？ちいさい おと？</li>
          <li><b>うける：</b>コップを まどの そとに（おとなと いっしょに）— どれくらいで いっぱいに なる？</li>
          <li><b>それから がめん：</b><b>ちきゅうと てんき</b>の せかいを 2ふん。みた ものを ひる/よるや くもと つなげよう。</li>
        </ul>
        <b>まなびの かち：</b>まず ほんとうの かんさつ、それから デジタルの つながり — WonderSprout の わ。`,

      "ai.r5": `<span class="ai-tag">📷 Wonder Camera</span>
        あんぜんな ものなら なんでも レッスンに なるよ：
        <ul>
          <li>Wonder Cameraを ものに むけると — みわけて <b>ふしぎカード</b>を ひらく。</li>
          <li>まいかいの カードは ものを まなびの せかい（いろ、すうがく、かがく…）に、3つの ちいさな かつどうと ともに つなげる。</li>
          <li>どの カードも <b>ほんものの せかいの チャレンジ</b>で おわるから、まなびは がめんを でていく。</li>
        </ul>
        デモを ためして：<b>WonderSprout Camera → ものを タップ</b>。プライバシーの おしらせ：にんしきは その ときにだけ うごきます — おこさんの しゃしんは ほぞん されません。`,

      "ai.r6": `<span class="ai-tag">📖 おはなしの じかん</span>
        おはなしは つながりの きかい：
        <ul>
          <li><b>「ピップと ちいさな たね」</b>— そだつ こと、がまん、しぜん。ほんものの まめを うえるのと ぴったり。</li>
          <li><b>「ブループの おおきな おふろ」</b>— うくと しずむに、よそうの じかんが はいって いる。おふろの じかんの じっけんと ぴったり。</li>
          <li>こどもに <b>おはなしの みちを えらばせて</b>— えらぶ ことが じしんと ことばを そだてる。</li>
        </ul>
        コツ：よんだ あとに「つぎは なに しよう？」と きいて、こどもに しきって もらおう。それが「つくる」の レベル。`,

      "ai.r7": `<span class="ai-tag">🍎 だいどころの ふしぎ</span>
        だいどころは まるごと カリキュラム：
        <ul>
          <li><b>すうがく：</b>ぶどうを おさらに かぞえて のせる —「あと ひとつ」と「みんな なくなっちゃった」。</li>
          <li><b>かがく：</b>みずの はいった ボウルで、どの たべものが うく？（ぶどう？バナナ？かわ ありと なしで！）</li>
          <li><b>かんかく：</b>カリカリと やわらかい、あたたかいと つめたい — それぞれの なまえを いおう。</li>
        </ul>
        その あと、Wonder Cameraで くだものを なんでも ふしぎカードに できるよ。`,

      "ai.r8": `<span class="ai-tag">🌙 ねる まえの ふしぎ</span>
        よそう できる じゅんばんが、かんぺきな ものに かちます。この WonderSprout の じゅんばんを ためして：
        <ul>
          <li><b>あたたかく + うすあかり：</b>おふろ、それから あかりを おとして — ねる 30ふん まえには あかるい がめんを けそう。</li>
          <li><b>おはなしは ひとつ、おなじ ばしょで：</b>「ねむたい おつきさま」を よもう — おわりに おやすみの ぎしきが あって、まね できるよ。</li>
          <li><b>うたは ひとつ：</b>WonderSprout Musicの「ねてるの？」は ゆっくりの こもりうたに なって いる。</li>
          <li><b>みっつに おやすみ：</b>おつきさまと、おもちゃと、たがいに — ちいさな ありがとうの しゅうかん。</li>
        </ul>
        <b>まなびの かち：</b>じゅんばんは あんしんと じゅんばんの かんがえを つくる（「まず おふろ、つぎに おはなし、それから うた」）。ねむりに ついて ずっと しんぱいなら、かかりつけの しょうにかいが ただしい みちびきて。`,

      "ai.r9": `<span class="ai-tag">💛 おおきな きもち</span>
        この ねんれいで つよい きもちは ふつうです — きもちの のうは、ことばよりも はやく そだつから。
        <ul>
          <li><b>なまえを いうと おさまる：</b>「とうが たおれて くやしかったね。」きもちに なまえを つけると、それを あつかう ことばが できる。</li>
          <li><b>おちついた いかりに なろう：</b>そばに すわって、ゆっくり いきして、まとう。いっしょの せいぎょが、じぶんでの せいぎょより さきに くる。</li>
          <li><b>あらしの あと：</b>ぎゅっと して、それから やさしく ふりかえろう —「とうが たおれて、おこって、また つくったね。」</li>
        </ul>
        WonderSproutは しんだん しません。つよい きもちが なんども、はげしく、しんぱいに おもえる なら、<b>かかりつけの しょうにかいか、こどもの はったつの せんもんかに そうだんして ください。</b>`,

      "ai.r10": `<span class="ai-tag">🌳 しぜんの ふしぎ</span>
        そとは もともとの きょうしつ — しかも むりょう：
        <ul>
          <li><b>いろさがし：</b>みどり、ちゃいろ、きいろ、あかのを みつけよう。</li>
          <li><b>おとを かぞえる：</b>とまって きいて — なんしゅるいの おとが する？とり、かぜ、くるま…</li>
          <li><b>たからもの ぶくろ：</b>あんぜんな たからものを 3つ あつめて（はっぱ、いし、えだ）、それぞれの なまえを いおう。</li>
          <li><b>いえに かえって：</b>せいかつ ラボの 2ふんで、みた ものと しょくぶつの そだちかたを つなげよう。</li>
        </ul>
        <b>まなびの かち：</b>ほんとうの かんかくの じょうほう（でこぼこの じめん、かわる ひかり、いきものの おと）は、どんな がめんにも できない やりかたで のうを つくる。`,

      "ai.r11": `<span class="ai-tag">🚗 りょこうの ふしぎ</span>
        ながい りょこうは ふしぎの じかん：
        <ul>
          <li><b>いろさがし ゲーム：</b>「あかい ものが みえる！」— おてつだいが あれば ちいさな こでも あそべる。</li>
          <li><b>みちすがら かぞえる：</b>トラック、トンネル、はし — かぞえると たいくつが きえる。</li>
          <li><b>いっしょに うたう：</b>WonderSprout Musicは でんぱが いらない。おきにいりを 3つ じゅんび して。</li>
          <li><b>まどの ふしぎ：</b>とおって いく ものを はなそう：「うし！かわ！まわって いる かざぐるま！」</li>
        </ul>
        ここでは がめんを みない じかんが いちばん。むずかしい 10ふんの ために、みじかい おはなしを ひとつ のこして おこう。`,

      "ai.r12": `<span class="ai-tag">🎂 おいわいの ふしぎ</span>
        たんじょうびは ひみつの すうがくの レッスン：
        <ul>
          <li><b>ろうそくを かぞえよう</b>いっしょに — 1ねんに 1ぽん、じっさいの せいかつでの ひとつずつ かぞえる。</li>
          <li><b>「たんじょうび おめでとう」を うたおう</b>— WonderSprout Musicに カラオケの うたことばが ある。</li>
          <li><b>ふく れんしゅう：</b>ろうそくを けすのは、はなすための ほんとうの いきの コントロール。</li>
          <li><b>しゅんかんを のこそう：</b>あとで しゃしんと ともに ふしぎ にっきに いちもく くわえよう。</li>
        </ul>
        この ねんれいでは パーティーは みじかく — 1じかんの たのしさは、3じかんの つかれに かちます。`,

      "ai.r13": `<span class="ai-tag">🚽 トイレの がまんづよい</span> たいていの こどもは 18〜36かげつの あいだに じゅんびの サインを だします — ねんれいでは なく、きょうみに ちゅうもく。これを <b>わける ステーション</b>（ぬれた/かわいたの しわけ！）と くみあわせて、まいかいの ちょうせんを いわおう。しっぱいを おこっては いけない。のうは おだやかな くりかえしで ぼうこうを おぼえる。`,

      "ai.r14": `<span class="ai-tag">🤝 わけっこに ついて</span> だいたい 30かげつ までは、「わけっこ」は はったつ じょう むずかしい —「ぼくの！」は すこやかな じぶん。かわりに じゅんばんを いって あげよう：「あなたの ばん、つぎは エイバの ばん。」<b>もよう パーティー</b>の じゅんばん こうたいの リズムが、おなじ のうの のうりょくを つくる。`,

      "ai.r15": `<span class="ai-tag">🥦 きらいぎらい</span> ちいさな こどもが あたらしい たべものを うけいれるには、10〜15かいの しょっかくが ひつような ことも。しょくじは プレッシャー なしで：なにを/いつ は おとなが、どれだけ は こどもが きめる。<b>すうがく ラボ</b>で ぶどうを かぞえると、プレッシャー なく たべものが あそびに なる。`,

      "ai.r16": `<span class="ai-tag">🦷 はみがき たいけつ</span> はじめての はから まいにち 2かい みがこう。まず こどもに テディを「みがいて」もらおう（<b>どうぶつ ともだち</b>の おせわ あそびと おなじ）。じかんを はかるには うたが やくに たつ — おんがくの せかいで <b>この おじいさん</b>を ためして。`,

      "ai.r17": `<span class="ai-tag">🗣️ ふたつの ことば</span> ふたことばの あかちゃんは ことばを まぜる ことも — それは ふつうで、こんらんでは ない。「ひとり おや ひとつ ことば」でも「ひとつ ばしょ ひとつ ことば」でも うまく いく。WonderSproutの ことば えらびで、アプリ ぜんたいが やさしく ことばの きりかえを みせられる。`,

      "ai.r18": `<span class="ai-tag">😴 ねむりの もどり</span> ねむりの もどりは ふつう 4、8〜10、12〜18、24かげつの ころに — たいてい のうの とびはね。じゅんばんは つまらなく、いつも おなじに。<b>おやすみ、ちいさな ほし</b>の おはなしを ひかえめな あかるさで。`,

      "ai.r19": `<span class="ai-tag">🌋 なげる・たたく</span> おおきな きもち、ちいさな ことば。きもちに なまえを つけ、せんは まもる：「なげるのは ダメ。すごく おこって いるね。」いい ほうほうを ひとつ — そとで なげる ボール（ぶつり あそびばの エネルギー！）。いつも おなじが やさしさ。`,

      "ai.r20": `<span class="ai-tag">🖍️ なぐりがき</span> 12〜15かげつ ごろからの なぐりがきは、かたから てくびまでの うごきの かがくで、まだ「え」では ない。<b>スタジオ</b>の おえかき モードは それを うつす：けっかより かてい。ふとめの クレヨンと おおきな かみを。いろを はなして あげよう。`,

      "ai.r21": `<span class="ai-tag">🏫 なれる</span> みじかい わかれ、いつも おなじ おむかえ、あんしん できる ものが、こっそり いなくなるより まし。さいかいの しゃしんの ぎしき（<b>ふしぎ にっき</b>の ような）が、かえって くることを よそう するのを たすける — よそう できることが あんしん。`,

      "ai.r22": `<span class="ai-tag">🚗 うごいて いる とき</span> くるまでの いどうは おはなしの きんざん：「あかい くるま！おおきな トラック！」— <b>はたと くに</b>と <b>わける</b>の ことばが、そのまま まどを みることに つながる。とまった ときに おんがくの せかいの <b>バスの わ</b>のような リズムを うたおう。`,

      "ai.fallback": `<span class="ai-tag">✨ WonderSprout AI</span>
    いい しつもん だね！ちいさな こどもに たいして、たいていの ことに WonderSproutは こう こたえるよ：
    <ul>
      <li><b>ふしぎから はじめよう：</b>「ふしぎだねぇ…きみは どう おもう？」</li>
      <li><b>からだで やろう：</b>さわったり、うごかしたり、えんじたり できる？</li>
      <li><b>とても ちいさく：</b>この ねんれいでは、30びょうから 3ふんが 30ふんの おけいこに かちます。</li>
    </ul>
    したの しつもんの ひとつを ためして — あるいは <b>がめん じかん</b>、<b>はったつの ステップ</b>、<b>あめのひ</b>、<b>Wonder Camera</b>、<b>おはなし</b>、<b>きょう なにを する</b>に ついて きいてね。`
    }

  };

  for (const code in K) WSI18n.kextend(code, K[code]);
})();
