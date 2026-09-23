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
    id: "mbi-surabaya-sukses-gelar-touring-banyuwangi",
    title: "MBI Surabaya Selesaikan Rally Trans-Java 1.000 KM Tanpa Insiden",
    category: "Touring Report",
    date: "18 September 2026",
    author: "Tim Humas MBI Surabaya",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Sebanyak 45 pengendaran motor besar MBI Surabaya berhasil menuntaskan etape touring panjang lintasan Jawa Timur - Bali dengan mengedepankan Zero Accident dan etika berlalu lintas.",
    content: "Surabaya — Rombongan touring Motor Besar Indonesia (MBI) Surabaya resmi kembali ke Kota Pahlawan setelah menyelesaikan perjalanan jarak jauh sejauh 1.000 kilometer. Touring bertajuk Trans-Java Brotherhood Run 2026 ini dilepas langsung oleh Ketua MBI Surabaya bersama jajaran Satlantas setempat.\n\nPerjalanan melintasi rute perbukitan, jalur pesisir pantai, hingga medan berkelok di jalur Ijen Banyuwangi dituntaskan dengan tertib tanpa ada insiden lalu lintas sedikit pun. Pembina MBI Surabaya menegaskan bahwa keselamatan serta ketertiban berkendara di jalan raya adalah marwah tertinggi komunitas ini."
  },
  {
    id: "mbi-surabaya-resmikan-posko-safety-riding",
    title: "Pelopor Keselamatan Jalan: MBI Surabaya Kampanyekan 'Courtesy & Respect' di Jalan Raya",
    category: "Safety Riding",
    date: "10 September 2026",
    author: "Divisi Safety & Rules MBI",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop",
    excerpt: "MBI Surabaya menggelar workshop edukasi etika berkendara moge bersama kepolisian daerah demi menciptakan jalan raya yang aman, nyaman, dan saling menghormati.",
    content: "Sebagai bagian dari tanggung jawab moral pengendara motor besar di mata masyarakat, MBI Surabaya menyelenggarakan Pelatihan Safety Riding & Courtesy Campaign di Sirkuit GBT Surabaya. Kegiatan ini diikuti oleh seluruh jajaran member dan prospective member MBI."
  },
  {
    id: "donasi-kemanusiaan-bencana-alam-mbi",
    title: "MBI Surabaya Salurkan Bantuan Tanggap Darurat Bencana Logistik senilai 150 Juta Rupiah",
    category: "Community",
    date: "02 September 2026",
    author: "Tim Peduli Sesama MBI",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Aksi cepat tanggap komunitas MBI Surabaya menyerahkan ribuan paket logistik dan obat-obatan secara langsung kepada korban terdampak bencana alam di wilayah Jawa Timur.",
    content: "Solidaritas MBI Surabaya kembali terbukti secara nyata. Melalui program Peduli Sesama, tim bergerak menyalurkan bantuan berupa perlengkapan bayi, bahan makanan pokok, obat-obatan, dan selimut langsung ke posko pengungsian utama."
  },
  {
    id: "persiapan-anniversary-ke-8-mbi-surabaya",
    title: "Menjelang 8th Anniversary, MBI Surabaya SIapkan Perayaan Terbesar di Bromo",
    category: "Internal Club",
    date: "25 Agustus 2026",
    author: "Panitia Pelaksana 8th Anniversary",
    image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Panitia perayaan ulang tahun MBI Surabaya mematangkan persiapan event nasional yang diprediksi dihadiri lebih dari 300 moge dari berbagai wilayah Indonesia.",
    content: "Persiapan peringatan ulang tahun ke-8 Motor Besar Indonesia Surabaya memasuki tahap akhir. Acara yang dijadwalkan berlangsung di dataran tinggi Bromo pada Oktober 2026 mendatang ini akan mempertemukan para pencinta moge Nusantara."
  }
];

export const EXTERNAL_AUTOMOTIVE_NEWS: NewsArticle[] = [
  {
    id: "ext-gridoto-regulasi-moge-indonesia",
    title: "Regulasi & Pengawasan Jalur Moge Di Jalan Tol Kembali Jadi Pembahasan Nasional",
    category: "Automotive Industry",
    date: "22 September 2026",
    author: "GridOto.com",
    source: "GridOto",
    image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Asosiasi Industri Sepeda Motor Indonesia bersama Ditlantas mengevaluasi usulan pembukaan akses infrastruktur khusus bagi kendaraan roda dua berkapasitas di atas 500cc.",
    isExternal: true,
    url: "https://www.gridoto.com/"
  },
  {
    id: "ext-detik-tren-cruiser-electric-2027",
    title: "Pabrikan Motor Besar Dunia Mulai Perkenalkan Prototip Big Cruiser Berbahan Baterai Elektrik",
    category: "Automotive Industry",
    date: "20 September 2026",
    author: "DetikOto",
    source: "Detik.com",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Produsen motor asal Amerika dan Eropa memamerkan konsep motor besar elektrik berdaya jangkau hingga 400 km untuk era touring masa depan yang ramah lingkungan.",
    isExternal: true,
    url: "https://www.detik.com/oto"
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
