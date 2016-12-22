var markers = [
{"nama_buku":"Pembangunan Ekonomi Maritim","penerbit":"Manise Media","kota":"Ambon","lat":-3.655,"lng":128.191},
{"nama_buku":"Pengantar Hukum Adat Indonesia","penerbit":"Kapuas Media","kota":"Balikpapan","lat":-1.238,"lng":116.854},
{"nama_buku":"Pengantar Ilmu Komunikasi","penerbit":"Kapuas Media","kota":"Balikpapan","lat":-1.238,"lng":116.854},
{"nama_buku":"Ayam Kampung Bikin Untung","penerbit":"Anugerah Hikmah","kota":"Bandar Lampung","lat":-5.397,"lng":105.267},
{"nama_buku":"Menyingkap Sejarah Kolonialisme di Indonesia","penerbit":"Anugerah Hikmah","kota":"Bandar Lampung","lat":-5.397,"lng":105.267},
{"nama_buku":"Pengantar Hukum Pidana","penerbit":"Mizan Pustaka","kota":"Bandung","lat":-6.918,"lng":107.619},
{"nama_buku":"Panduan Persiapan TOEFL","penerbit":"Acarya","kota":"Bandung","lat":-6.918,"lng":107.619},
{"nama_buku":"Belajar Bahasa Mandarin","penerbit":"Acarya","kota":"Bandung","lat":-6.918,"lng":107.619},
{"nama_buku":"Manajemen SDM Perusahaan","penerbit":"Gaung Persada","kota":"Bandung","lat":-6.918,"lng":107.619},
{"nama_buku":"Membedah Undang-Undang ITE","penerbit":"Gaung Persada","kota":"Bandung","lat":-6.918,"lng":107.619},
{"nama_buku":"Merakit Komputer Sendiri","penerbit":"Acarya","kota":"Bandung","lat":-6.918,"lng":107.619},
{"nama_buku":"Analisis Mengenai Dampak Lingkungan Dalam Pembangunan","penerbit":"Agia Media","kota":"Bandung","lat":-6.918,"lng":107.619},
{"nama_buku":"Sejarah Perkembangan Fashion Dunia","penerbit":"Acarya","kota":"Bandung","lat":-6.918,"lng":107.619},
{"nama_buku":"Membangun Web GIS Open Source","penerbit":"Informatika","kota":"Bandung","lat":-6.918,"lng":107.619},
{"nama_buku":"Panduan Administrator Sistem Operasi Linux","penerbit":"Ganeca","kota":"Bandung","lat":-6.918,"lng":107.619},
{"nama_buku":"Ayat-ayat Cinta","penerbit":"Acarya","kota":"Bandung","lat":-6.918,"lng":107.619},
{"nama_buku":"Sabtu Bersama Bapak","penerbit":"Al Bayan","kota":"Bandung","lat":-6.918,"lng":107.619},
{"nama_buku":"Video Editing Menggunakan Adobe Premiere","penerbit":"Agia Media","kota":"Bandung","lat":-6.918,"lng":107.619},
{"nama_buku":"Membangun Apotek Hidup","penerbit":"Ardilla","kota":"Bogor","lat":-6.597,"lng":106.806},
{"nama_buku":"Budi Daya Tanaman Anggrek","penerbit":"Ardilla","kota":"Bogor","lat":-6.597,"lng":106.806},
{"nama_buku":"Pengantar Psikologi","penerbit":"Ardilla","kota":"Bogor","lat":-6.597,"lng":106.806},
{"nama_buku":"Budi Daya Kambing Etawa","penerbit":"Ardilla","kota":"Bogor","lat":-6.597,"lng":106.806},
{"nama_buku":"Kiat-Kiat Bisnis Kuliner","penerbit":"Akita Jaya","kota":"Denpasar","lat":-8.67,"lng":115.212},
{"nama_buku":"Koala Kumal","penerbit":"Bhuwana Utama","kota":"Denpasar","lat":-8.67,"lng":115.212},
{"nama_buku":"Sang Penari","penerbit":"Akita Jaya","kota":"Denpasar","lat":-8.67,"lng":115.212},
{"nama_buku":"Etika dan Filsafat Moral","penerbit":"Bhuwana Utama","kota":"Denpasar","lat":-8.67,"lng":115.212},
{"nama_buku":"Riwayat Rasul","penerbit":"Baadillah Press","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Hadits Bukhori dan Muslim","penerbit":"Baadillah Press","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Inovasi dan Kewirausahaan","penerbit":"Dyatama Milenia","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Menjadi Public Relation","penerbit":"Dyatama Milenia","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Prinsip-prinsip Ekologi Ekosistem dan Lingkungan","penerbit":"Adfale Prima","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Sistem Ekonomi Indonesia","penerbit":"Erlangga","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Prinsip Ekonomi Mikro","penerbit":"Gramedia","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Panduan Perawatan Kritis","penerbit":"Gramedia","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Jomblo: Sebuah Komedi Cinta","penerbit":"Gagas Media","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Dasar-Dasar Statistik","penerbit":"Cahaya Pustaka","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Statistik Untuk Penelitian Sosial","penerbit":"Salemba Empat","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Analisis Statistik Dengan SPSS","penerbit":"Gramedia","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Atlas Anatomi Manusia","penerbit":"Adfale Prima","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Dasar-dasar Ortopedi","penerbit":"Gagas Media","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Tips dan Trik Adobe Photoshop","penerbit":"Gramedia","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Panduan Cepat Menguasai Microsoft Office 2010","penerbit":"Adfale Prima","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Panduan Pemeriksaan Psikologi ","penerbit":"Cahaya Pustaka","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Strategi Komunikasi Politik","penerbit":"Diva Pustaka","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Catatan Hati Seorang Istri","penerbit":"Gagas Media","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Catatan Akhir Sekolah","penerbit":"Dyatama Milenia","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Kebijakan Politik Luar Negeri Indonesia","penerbit":"Gramedia","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Masakan Praktis dan Bergizi","penerbit":"Salemba Empat","kota":"Jakarta","lat":-6.175,"lng":106.822},
{"nama_buku":"Pengantar Hukum Dagang","penerbit":"Jaya Wijaya Media","kota":"Jayapura","lat":-2.592,"lng":140.669},
{"nama_buku":"Masalah-masalah Sosial di Indonesia","penerbit":"Cendrawasih Press","kota":"Jayapura","lat":-2.592,"lng":140.669},
{"nama_buku":"Aneka Resep Ikan Laut","penerbit":"Cendrawasih Press","kota":"Jayapura","lat":-2.592,"lng":140.669},
{"nama_buku":"Pintar Berhitung Cepat","penerbit":"Jaya Wijaya Media","kota":"Jayapura","lat":-2.592,"lng":140.669},
{"nama_buku":"Pengantar Akuntansi Dasar untuk SMK","penerbit":"Intan Pariwara","kota":"Klaten","lat":-7.658,"lng":110.664},
{"nama_buku":"Babad Tanah Jawi","penerbit":"Intan Pariwara","kota":"Klaten","lat":-7.658,"lng":110.664},
{"nama_buku":"Sistem Politik Indonesia","penerbit":"Citra Adi Bangsa","kota":"Makassar","lat":-5.148,"lng":119.432},
{"nama_buku":"Kiat Ternak Burung Kenari","penerbit":"Citra Adi Bangsa","kota":"Makassar","lat":-5.148,"lng":119.432},
{"nama_buku":"Bank Soal Matematika SMA","penerbit":"Citra Adi Bangsa","kota":"Makassar","lat":-5.148,"lng":119.432},
{"nama_buku":"Kimia dan Ekotoksikologi","penerbit":"Hijau Pustaka","kota":"Malang","lat":-7.967,"lng":112.632},
{"nama_buku":"Aneka Olahan Singkong","penerbit":"Hijau Pustaka","kota":"Malang","lat":-7.967,"lng":112.632},
{"nama_buku":"Sistem Sosial Budaya Indonesia","penerbit":"Hijau Pustaka","kota":"Malang","lat":-7.967,"lng":112.632},
{"nama_buku":"Hukum Bisnis Pasar Modal","penerbit":"Bina Media ","kota":"Medan","lat":3.595,"lng":98.672},
{"nama_buku":"Statistik Ekonomi","penerbit":"Karya Ilmu","kota":"Medan","lat":3.595,"lng":98.672},
{"nama_buku":"Pedoman Obat Pediatrik","penerbit":"Karya Ilmu","kota":"Medan","lat":3.595,"lng":98.672},
{"nama_buku":"Fisika Untuk Teknik Bangunan","penerbit":"Bina Media ","kota":"Medan","lat":3.595,"lng":98.672},
{"nama_buku":"Kimia Dasar","penerbit":"Wira Usaha","kota":"Medan","lat":3.595,"lng":98.672},
{"nama_buku":"Cari Uang Dari Internet","penerbit":"Raya Pustaka","kota":"Padang","lat":-0.947,"lng":100.417},
{"nama_buku":"Pengantar Kalkulus","penerbit":"Raya Pustaka","kota":"Padang","lat":-0.947,"lng":100.417},
{"nama_buku":"Sukses UAN SD","penerbit":"Barito Pustaka","kota":"Palangkaraya","lat":-2.216,"lng":113.913},
{"nama_buku":"Panduan Servis Printer","penerbit":"Barito Pustaka","kota":"Palangkaraya","lat":-2.216,"lng":113.913},
{"nama_buku":"Variasi Makanan Cina Halal","penerbit":"Barito Pustaka","kota":"Palangkaraya","lat":-2.216,"lng":113.913},
{"nama_buku":"Akulturasi Budaya Melayu-Cina","penerbit":"Barito Pustaka","kota":"Palangkaraya","lat":-2.216,"lng":113.913},
{"nama_buku":"Teknologi Pengawetan Pangan","penerbit":"Garoeda","kota":"Pasuruan","lat":-7.647,"lng":112.8},
{"nama_buku":"Kesastraan Melayu","penerbit":"Pusaka Riau","kota":"Pekanbaru","lat":0.507,"lng":101.448},
{"nama_buku":"Bank Soal UAN 5 Tahun SMP","penerbit":"Aneka Ilmu","kota":"Semarang","lat":-7.005,"lng":110.438},
{"nama_buku":"Paket Lengkap Siap UN SMA","penerbit":"Karya Satria","kota":"Semarang","lat":-7.005,"lng":110.438},
{"nama_buku":"Intisari Biologi SMA","penerbit":"Aneka Ilmu","kota":"Semarang","lat":-7.005,"lng":110.438},
{"nama_buku":"Statistik Industri","penerbit":"Karya Satria","kota":"Semarang","lat":-7.005,"lng":110.438},
{"nama_buku":"Budi Daya Jamur Kompos","penerbit":"Perkasa","kota":"Sidoarjo","lat":-7.449,"lng":112.701},
{"nama_buku":"Kiat Praktis Badan Atletis","penerbit":"Perkasa","kota":"Sidoarjo","lat":-7.449,"lng":112.701},
{"nama_buku":"Dasar-Dasar Teknik Bangunan untuk SMK","penerbit":"Perkasa","kota":"Sidoarjo","lat":-7.449,"lng":112.701},
{"nama_buku":"Manajemen Produksi dan Operasi Industri","penerbit":"Perkasa","kota":"Sidoarjo","lat":-7.449,"lng":112.701},
{"nama_buku":"Latihan Soal Fisika Kelas VI-VII-VIII SMP","penerbit":"Tiga Serangkai","kota":"Solo","lat":-7.575,"lng":110.824},
{"nama_buku":"Smart - Pintar Berbahasa Inggris tingkat SMP","penerbit":"Tiga Serangkai","kota":"Solo","lat":-7.575,"lng":110.824},
{"nama_buku":"Olahraga Bagi Ibu Hamil","penerbit":"Adhigama Sentosa","kota":"Solo","lat":-7.575,"lng":110.824},
{"nama_buku":"Pengantar Kimia Organik dan Hayati","penerbit":"Adhy Pustaka","kota":"Surabaya","lat":-7.257,"lng":112.752},
{"nama_buku":"Pokok-Pokok Hukum Kesehatan","penerbit":"Edumedia","kota":"Surabaya","lat":-7.257,"lng":112.752},
{"nama_buku":"Hukum Laut Indonesia","penerbit":"Adhy Pustaka","kota":"Surabaya","lat":-7.257,"lng":112.752},
{"nama_buku":"Resep Lezat Masakan Jawa","penerbit":"Adhy Pustaka","kota":"Surabaya","lat":-7.257,"lng":112.752},
{"nama_buku":"Membangun Jaringan Komputer LAN","penerbit":"Edumedia","kota":"Surabaya","lat":-7.257,"lng":112.752},
{"nama_buku":"PR Sains Asyik Untuk SD","penerbit":"Anak Teladan","kota":"Tangerang","lat":-6.202,"lng":106.653},
{"nama_buku":"Psikologi Tumbuh Kembang Anak","penerbit":"Anak Teladan","kota":"Tangerang","lat":-6.202,"lng":106.653},
{"nama_buku":"Sejarah Kerajaan Islam Nusantara","penerbit":"Ar Raniry Press","kota":"Ternate","lat":0.79,"lng":127.375},
{"nama_buku":"Administrasi Pembangunan","penerbit":"Absolut Media","kota":"Yogyakarta","lat":-7.774,"lng":110.371},
{"nama_buku":"Administrasi Perusahaan","penerbit":"Absolut Media","kota":"Yogyakarta","lat":-7.774,"lng":110.371},
{"nama_buku":"Pemrograman Web PHP dan MySQL","penerbit":"Andi Offset","kota":"Yogyakarta","lat":-7.774,"lng":110.371},
{"nama_buku":"Keagungan Budaya jawa","penerbit":"Sasmita Utama","kota":"Yogyakarta","lat":-7.774,"lng":110.371},
{"nama_buku":"Pengelolaan Basis Data Oracle","penerbit":"Absolut Media","kota":"Yogyakarta","lat":-7.774,"lng":110.371},
{"nama_buku":"Pengolahan Data Spasial Menggunakan ArcGIS","penerbit":"Anindya","kota":"Yogyakarta","lat":-7.774,"lng":110.371},
{"nama_buku":"Aljabar Linier","penerbit":"Sasmita Utama","kota":"Yogyakarta","lat":-7.774,"lng":110.371},
{"nama_buku":"Kupas Tuntas Bisnis Internet","penerbit":"Andi Offset","kota":"Yogyakarta","lat":-7.774,"lng":110.371}
];