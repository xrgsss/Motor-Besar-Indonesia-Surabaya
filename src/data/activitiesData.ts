export interface Activity {
  id: string;
  title: string;
  category: 'Touring' | 'Kopdar' | 'Charity' | 'Social Activities' | 'Motorcycle Events' | 'Anniversary' | 'Community Gathering';
  date: string;
  location: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  route?: string;
  participantCount?: string;
}

export const ACTIVITIES_DATA: Activity[] = [
  {
    id: "touring-bali-lombok-2026",
    title: "1 st East Java Safety Riding Collaboration 2026",
    category: "Motorcycle Events",
    date: "25 Juli 2026",
    location: "Bumi Marinir Karang Pilang Surabaya",
    image: "/DSC00753.webp",
    shortDesc: "Bukan sekadar latihan berkendara, tetapi sebuah gerakan untuk membangun budaya berkendara yang aman, bertanggung jawab, dan peduli terhadap sesama.",
    fullDesc: "Motor Besar Indonesia (MBI) Surabaya mengundang seluruh pecinta motor besar untuk menjadi bagian dari kolaborasi Safety Riding pertama di Jawa Timur.",
    highlights: [
      "Pelatihan Safety Riding bersama Instruktur JOEL",
      "Sertifikat (bagi peserta teori & praktik)",
      "Breakfast, Lunch & Coffee Break",
      "Jersey Official Event",
      "Dokumentasi Foto, Video & FPV Drone",
      "Doorprize senilai Rp25.000.000"
    ],
    route: "Surabaya - Bumi Marinir Karang Pilang, Surabaya",
    participantCount: "48 Rider & 12 Support Vehicle"
  },
  {
    id: "charity-ramadhan-peduli-2026",
    title: "MBI Surabaya Peduli Bagikan 1000 Paket Takjil",
    category: "Charity",
    date: "28 Maret 2026",
    location: "Plaza Harley Davidson of Surabaya, Jalan Mayjen HR Muhammad, Surabaya",
    image: "/saveinta_649234591.webp",
    shortDesc: "Komunitas Motor Besar Indonesia (MBI) Surabaya membagikan 1000 paket takjil, melalui program “MBI Surabaya Peduli”, MBI juga memberikan santunan kepada 30 anak yatim",
    fullDesc: "Komunitas Motor Besar Indonesia (MBI) Surabaya membagikan 1000 paket takjil, melalui program “MBI Surabaya Peduli”, MBI juga memberikan santunan kepada 30 anak yatim. Kegiatan tersebut berlangsung  di Plaza Harley Davidson of Surabaya, Jalan Mayjen HR Muhammad. ",
    highlights: [
      "Membagikan 1000 paket takjil",
      "Santunan kepada 30 anak yatim",
      "Buka Puasa Bersama",
      "Rolling City tertib santun menyapa warga Surabaya"
    ],
    participantCount: "85 Anggota MBI Surabaya"
  },
  {
    id: "ultimate-east-java-tour-experience",
    title: "Ultimate East Java Tour Experience",
    category: "Touring",
    date: "18 Februari 2026",
    location: "Banyuwangi",
    image: "/saveinta_635497452.webp",
    shortDesc: "Motor Besar Indonesia (MBI) Surabaya adalah komunitas motor besar terkemuka yang menyatukan para penggemar motor premium di seluruh Jawa Timur. Sementara Ultimate East Java Tour Experience umumnya merujuk pada rencana perjalanan petualangan kelas atas selama beberapa hari melintasi medan ikonik Jawa Timur.",
    fullDesc: "Motor Besar Indonesia (MBI) Surabaya is a prominent big bike community that brings together premium motorcycle enthusiasts across East Java. While Ultimate East Java Tour Experience generally refers to high-end, multi-day adventure itineraries across East Java's iconic terrains, MBI Surabaya actively fosters the regional big bike culture through organized long-distance rides, regular charity runs, and official safety riding collaborations.",
    highlights: [
      "Safety First",
      "Community Requirements",
      "Live Acoustic Performance & Brotherhood Dinner"
    ],
    participantCount: "90+ Rider MBI Surabaya"
  },
  {
    id: "anniversary-mbi-surabaya-4th",
    title: "4th Anniversary MBI Surabaya: 'MBI FOUR EVER'",
    category: "Anniversary",
    date: "26 - 27 September 2026",
    location: "Kota Batu, Jawa Timur",
    image: "/flyer_mbi_four_ever.webp",
    shortDesc: "Puncak perayaan ulang tahun MBI Surabaya ke-4 menghadirkan gathering nasional seluruh chapter Motor Besar Indonesia.",
    fullDesc: "Memperingati 4 tahun perjalanan MBI Surabaya menjaga ikrar persaudaraan. Acara dipusatkan di Batu dengan puncak acara Gala Night, penghargaan rider teladan, serta rolling thunder charity ride.",
    highlights: [
      "Rally Riding Surabaya - Mojokerto - Jombang - Batu Expedition",
      "Kehadiran Chapter MBI se-Indonesia",
      "Custom Bike Showcase & Vintage Exhibition",
      "Awarding Night & Brotherhood Concert"
    ],
    participantCount: "50+ Rider Se-Indonesia"
  },
  {
    id: "dari-surabaya-untuk-ntt",
    title: "DARI SURABAYA, UNTUK NTT",
    category: "Charity",
    date: "21 Agustus 2026",
    location: "Surabaya",
    image: "/saveinta_779048656.webp",
    shortDesc: "MBI Surabaya kembali hadir dalam aksi nyata kepedulian untuk saudara-saudara kita yang terdampak bencana di NTT.",
    fullDesc: "MBI Surabaya kembali hadir dalam aksi nyata kepedulian untuk saudara-saudara kita yang terdampak bencana di NTT. Bantuan dari keluarga besar MBI Surabaya telah tiba di Pos Penampungan Sementara Denma Pasmar 2 dan selanjutnya akan diberangkatkan menuju NTT dalam gelombang ke-3 melalui Armada 2.",
    highlights: [
      "Paket Pangan",
      "Pakaian bersih yang layak",
      "Sinergi dengan Aparat Keamanan"
    ],
    participantCount: "Terbuka Untuk Komunitas & Publik"
  }
];
