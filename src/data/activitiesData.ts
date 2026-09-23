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
    title: "Grand Trans-Nusantara Expedition: Bali - Lombok",
    category: "Touring",
    date: "12 - 18 Agustus 2026",
    location: "Surabaya — Banyuwangi — Bali — Lombok",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop",
    shortDesc: "Perjalanan touring jarak jauh menjelajahi keindahan pesisir pantai dan pegunungan pulau Bali hingga Lombok bersama 45 jajaran motor besar MBI Surabaya.",
    fullDesc: "Grand Trans-Nusantara Expedition merupakan agenda tahunan terbesar MBI Surabaya. Mengambil rute perjalanan dari kota Surabaya menyisir pantura Banyuwangi, menyeberangi Selat Bali, melalui jalur pesisir Kintamani, hingga melintasi keindahan sirkuit Mandalika di Lombok.",
    highlights: [
      "Jarak tempuh total > 1.200 KM",
      "Escort & Safety Officer berstandar nasional",
      "Bakti sosial peduli masyarakat pesisir Lombok",
      "Gala Dinner & Night Gathering di Seminyak"
    ],
    route: "Surabaya - Probolinggo - Banyuwangi - Gilimanuk - Kintamani - Padangbai - Lembar - Mandalika",
    participantCount: "48 Rider & 12 Support Vehicle"
  },
  {
    id: "charity-ramadhan-peduli-2026",
    title: "MBI Surabaya Peduli: Santunan & Buka Bersama 1000 Panti",
    category: "Charity",
    date: "28 Maret 2026",
    location: "Grand City Convention Hall, Surabaya",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1600&auto=format&fit=crop",
    shortDesc: "Aksi kemanusiaan tahunan membagikan bantuan sembako, perlengkapan sekolah, dan santunan anak yatim di wilayah Surabaya Raya.",
    fullDesc: "MBI Surabaya percaya bahwa esensi persaudaraan sejati adalah berbagi kebaikan dengan sesama. Kegiatan ini melibatkan seluruh anggota MBI Surabaya dalam penggalangan dana internal dan penyaluran langsung ke 12 panti asuhan setempat.",
    highlights: [
      "Penyaluran santunan untuk 1.000 anak yatim & dhuafa",
      "Pembagian 500 paket sembako di kawasan pesisir Kenjeran",
      "Buka Puasa Bersama & Tausiyah Kebersamaan",
      "Rolling City tertib santun menyapa warga Surabaya"
    ],
    participantCount: "85 Anggota MBI Surabaya"
  },
  {
    id: "kopdar-wajib-bulan-september",
    title: "Monthly Brotherhood Gathering & Technical Checkup",
    category: "Kopdar",
    date: "15 September 2026",
    location: "Townsquare Surabaya (Sutos), Surabaya",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600&auto=format&fit=crop",
    shortDesc: "Ajang silaturahmi rutin bulanan, pembahasan agenda keanggotaan, coaching clinic perwatan moge, dan malam keakraban.",
    fullDesc: "Kopi Darat (Kopdar) Wajib digelar setiap pertengahan bulan untuk mempererat ikatan kekeluargaan antar anggota lama dan menyambut para member baru MBI Surabaya dalam suasana santai bernuansa brotherhood.",
    highlights: [
      "Sharing session perawatan mesin Big Twin & Multi-cylinder",
      "Pengenalan Calon Anggota Baru (Prospective Member)",
      "Pembahasan persiapan Anniversary MBI Surabaya ke-8",
      "Live Acoustic Performance & Brotherhood Dinner"
    ],
    participantCount: "90+ Rider MBI Surabaya"
  },
  {
    id: "anniversary-mbi-surabaya-8th",
    title: "8th Anniversary MBI Surabaya: 'Roar of Brotherhood'",
    category: "Anniversary",
    date: "24 - 25 Oktober 2026",
    location: "Kota Batu & Bromo Highlands, Jawa Timur",
    image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?q=80&w=1600&auto=format&fit=crop",
    shortDesc: "Puncak perayaan ulang tahun MBI Surabaya ke-8 menghadirkan gathering nasional seluruh chapter Motor Besar Indonesia.",
    fullDesc: "Memperingati 8 tahun perjalanan MBI Surabaya menjaga ikrar persaudaraan. Acara dipusatkan di dataran tinggi Bromo dengan puncak acara Gala Night, penghargaan rider teladan, serta rolling thunder charity ride.",
    highlights: [
      "Rally Riding Bromo Sunrise Expedition",
      "Kehadiran 25 Chapter MBI se-Indonesia",
      "Custom Bike Showcase & Vintage Exhibition",
      "Awarding Night & Brotherhood Concert"
    ],
    participantCount: "350+ Rider Se-Indonesia"
  },
  {
    id: "surabaya-automotive-expo-2026",
    title: "Surabaya Big Bike Fest & Custom Expo",
    category: "Motorcycle Events",
    date: "05 November 2026",
    location: "Jatim Expo Center, Surabaya",
    image: "https://images.unsplash.com/photo-1515777315837-271194636c83?q=80&w=1600&auto=format&fit=crop",
    shortDesc: "Pameran eksklusif jajaran motor besar premium, pameran kustomisasi lokal, serta talkshow safety riding nasional.",
    fullDesc: "MBI Surabaya menjadi tuan rumah dalam penyelenggaraan pameran otomotif roda dua terbesar di Jawa Timur, menghadirkan brand moge ternama dunia serta builder kustom kawakan Indonesia.",
    highlights: [
      "Exhibition 100+ Moge Classic & Modern Performance",
      "Safety Riding Workshop bersama Dirlantas Polda Jatim",
      "Dyno Challenge & Exhaust Sound Competition",
      "Charity Auction Helm & Apparel Riding Limited Edition"
    ],
    participantCount: "Terbuka Untuk Komunitas & Publik"
  },
  {
    id: "batu-weekend-run-2026",
    title: "Weekend Escapade: Mount Bromo & Batu Scenic Ride",
    category: "Community Gathering",
    date: "14 - 15 Desember 2026",
    location: "Surabaya — Malang — Kota Batu",
    image: "https://images.unsplash.com/photo-1547038577-da80abbc4f19?q=80&w=1600&auto=format&fit=crop",
    shortDesc: "Riding akhir pekan menyegarkan pikiran melintasi jalur perbukitan sejuk Batu dan Pujon bersama keluarga MBI Surabaya.",
    fullDesc: "Kegiatan touring singkat (short ride) Sabtu-Minggu yang dirancang khusus untuk memanjakan para member dengan keindahan pemandangan alam perbukitan dan iklim udara sejuk Jawa Timur.",
    highlights: [
      "Scenic hill-climb ride rute Cangar - Pacet",
      "Family Barbecue Night di Resort Kota Batu",
      "Coffee Session & Morning Ride Penanjakan Bromo",
      "Fotografi Cinematic Riding oleh Tim Media MBI"
    ],
    route: "Surabaya - Pandaan - Purwosari - Batu - Cangar - Pacet - Surabaya",
    participantCount: "35 Rider & Family"
  }
];
