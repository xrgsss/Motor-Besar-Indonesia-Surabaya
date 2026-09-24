export interface NewsArticle {
  id: string;
  title: string;
  category: 'Internal Club' | 'Touring Report' | 'Community' | 'Safety Riding' | 'Automotive Industry';
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content?: string;
  isExternal?: boolean;
  source?: string;
  url?: string;
}

export const INTERNAL_NEWS: NewsArticle[] = [
  {
    id: "mbi-surabaya-peduli-jatim-today",
    title: "MBI Surabaya Luncurkan Program 'MBI Surabaya Peduli', Santuni Anak Yatim dan Bagikan 1.000 Takjil di Bulan Ramadan",
    category: "Community",
    date: "Ramadan",
    author: "Jatim Today",
    source: "Jatim Today",
    image: "https://jatimtoday.co.id/file/2026/03/IMG_20260308_122743.jpg",
    excerpt: "MBI Surabaya meluncurkan program kemanusiaan 'MBI Surabaya Peduli' dengan menyantuni puluhan anak yatim serta membagikan 1.000 paket takjil gratis di bulan Ramadan.",
    content: "Surabaya — Komunitas Motor Besar Indonesia (MBI) Surabaya resmi meluncurkan kegiatan aksi sosial bertajuk 'MBI Surabaya Peduli'. Dalam kegiatan ini, para anggota menyerahkan santunan bagi anak-anak yatim serta membagikan 1.000 paket takjil berbuka puasa di jalanan Kota Surabaya.",
    isExternal: true,
    url: "https://jatimtoday.co.id/6052/mbi-surabaya-luncurkan-program-mbi-surabaya-peduli-santuni-anak-yatim-dan-bagikan-1-000-takjil-di-bulan-ramadan/"
  },
  {
    id: "mbi-surabaya-bantuan-bubutan",
    title: "Peduli Kondisi Masyarakat, MBI Surabaya Bagi Bantuan ke Warga Bubutan di Bulan Ramadan",
    category: "Community",
    date: "Ramadan",
    author: "MBI Surabaya",
    source: "MBI Surabaya",
    image: "https://asset.tribunnews.com/SHFK0-9o8dmK8iGklh-WSLWvpWI=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/jatim/foto/bank/originals/mbi-surabaya-gelar-baksos-untuk-masyarakat-di-mapolsek.jpg",
    excerpt: "Bentuk kepedulian sosial, MBI Surabaya menyerahkan paket bantuan logistik sembako dan donasi bagi masyarakat kawasan Bubutan pada bulan suci Ramadan.",
    content: "Sebagai wujud nyata kepedulian sosial terhadap sesama, MBI Surabaya menyalurkan paket bantuan sembako dan logistik kepada warga di kawasan Bubutan, Surabaya selama momen bulan suci Ramadan.",
    isExternal: true,
    url: "https://share.google/8o0oRaENu11CKNdox"
  },
  {
    id: "mbi-surabaya-donasi-aceh-sumut-kempalan",
    title: "Setelah Galang Donasi untuk Aceh-Sumut, MBI Surabaya Peduli Berbagi dengan 30 Anak Yatim Piatu",
    category: "Community",
    date: "MBI Peduli",
    author: "Kempalan.com",
    source: "Kempalan.com",
    image: "https://kempalan.com/wp-content/uploads/2026/03/img-20260308-wa0010-2048x1152.webp",
    excerpt: "Usai merampungkan penggalangan donasi bencana Aceh-Sumut, MBI Surabaya Peduli melanjutkan rangkaian aksi sosial berbagi santunan kepada 30 anak yatim piatu.",
    content: "Komunitas MBI Surabaya Peduli kembali menunjukkan komitmen kepeduliannya. Setelah berhasil menggalang donasi untuk korban bencana di Aceh dan Sumatra Utara, tim melanjutkan kegiatan sosial dengan berbagi santunan dan keceriaan bersama 30 anak yatim piatu.",
    isExternal: true,
    url: "https://share.google/DgQCZrYgvfnZKLqyp"
  },
  {
    id: "mbi-surabaya-peduli-1000-takjil",
    title: "MBI Surabaya Peduli Bagikan 1000 Paket Takjil",
    category: "Community",
    date: "Ramadan",
    author: "Tim Peduli Sesama MBI",
    source: "MBI Surabaya",
    image: "https://jatimkini.com/po-content/uploads/202603/komunitas-motor-besar-indonesia.jpeg",
    excerpt: "Komunitas Motor Besar Indonesia (MBI) Surabaya turun ke jalan membagikan 1.000 paket takjil berbuka puasa untuk pengendara dan masyarakat umum.",
    content: "Semangat berbagi MBI Surabaya diwujudkan dengan membagikan 1.000 paket takjil secara gratis kepada para pengguna jalan dan pengendara di titik-titik strategis Kota Surabaya.",
    isExternal: true,
    url: "https://share.google/0XedChl7iIJ6RYjU4"
  }
];

export const EXTERNAL_AUTOMOTIVE_NEWS: NewsArticle[] = [
  {
    id: "ext-gridoto-regulasi-moge-indonesia",
    title: "Mau Masuk Tol, Pengendara Moge Harus Disiplin Dahulu",
    category: "Automotive Industry",
    date: "3 Februari 2025",
    author: "otorider.com",
    source: "otorider",
    image: "https://otorider.com/image/load/1200/675/gallery/ilustrasi_moge_melintas_di_jalan_tol_2025_erwp.jpg",
    excerpt: "Wacana mengizinkan sepeda motor masuk jalan tol kembali mencuat di Indonesia dimana mengusulkan agar motor gede (moge) diizinkan melintas di jalan tol. Usulan ini menarik perhatian berbagai pihak, termasuk pengamat transportasi dan pelaku industri otomotif.",
    isExternal: true,
    url: "https://otorider.com/berita/2025/mau-masuk-tol-pengendara-moge-harus-disiplin-dahulu-maudagefulu"
  },
  {
    id: "ext-detik-tren-cruiser-electric-2027",
    title: "Deretan Motor Baru Jakarta Fair 2025, dari Cruiser hingga Motor Listrik",
    category: "Automotive Industry",
    date: "30 Juni 2025",
    author: "otorider",
    source: "otorider.com",
    image: "https://otorider.com/image/load/1200/675/gallery/area_motor_di_jakarta_fair_2025_2025_bfkx.jpeg",
    excerpt: "Pameran Jakarta Fair 2025 atau Pekan Raya Jakarta kembali menjadi magnet bagi industri otomotif roda dua. Sejumlah pabrikan motor ternama memanfaatkan ajang ini untuk memperkenalkan produk terbaru mereka kepada publik Indonesia, mulai dari motor listrik, petualang, hingga cruiser bergaya retro.",
    isExternal: true,
    url: "https://otorider.com/berita/2025/deretan-motor-baru-jakarta-fair-2025-dari-cruiser-hingga-motor-listrik-derdbjcdrik"
  },
  {
    id: "ext-kompas-tips-merawat-mesin-big-twin",
    title: "Panduan Merawat Engine Big Twin Moge Di Iklim Tropis Indonesia Agar Bebas Overheat",
    category: "Safety Riding",
    date: "17 September 2026",
    author: "Kompas Otomotif",
    source: "Kompas.com",
    image: "https://images.unsplash.com/photo-1515777315837-271194636c83?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Pentingnya pemilihan tingkat viskositas oli, perawatan sirkulasi air cooling, serta kalibrasi sistem injeksi berkala untuk moge di suhu panas perkotaan.",
    isExternal: true,
    url: "https://otomotif.kompas.com/"
  },
  {
    id: "ext-cnn-pameran-moge-mandalika",
    title: "Pameran Moge & Custom Festival International Resmi Dibuka Di Mandalika",
    category: "Automotive Industry",
    date: "14 September 2026",
    author: "CNN Indonesia Otomotif",
    source: "CNN Indonesia",
    image: "https://images.unsplash.com/photo-1547038577-da80abbc4f19?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Ribuan builder dan pecinta motor besar dari Asia Pasifik berkumpul di Lombok memamerkan hasil karya modifikasi terbaik bernilai miliaran rupiah.",
    isExternal: true,
    url: "https://www.cnnindonesia.com/otomotif"
  },
  {
    id: "ext-tempo-tren-touring-lintas-nusantara",
    title: "Minat Riding Lintas Nusantara Meningkat 35% Di Antara Komunitas Motor Besar",
    category: "Community",
    date: "08 September 2026",
    author: "Tempo Otomotif",
    source: "Tempo",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Perkembangan tol trans Jawa dan infrastruktur jalan nasional di daerah Indonesia Timur memicu geliat wisata touring komunitas roda dua skala besar.",
    isExternal: true,
    url: "https://otomotif.tempo.co/"
  }
];
