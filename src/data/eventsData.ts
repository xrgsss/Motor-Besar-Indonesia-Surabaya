export interface ScheduleItem {
  time: string;
  activity: string;
  duration?: string;
  details?: string;
  pic?: string;
  dayHeader?: string;
}

export interface EventItem {
  id: string;
  day: string;
  month: string;
  year: string;
  targetDateISO: string; // Used for dynamic countdown timer calculations
  title: string;
  subtitle: string;
  location: string;
  time: string;
  image: string;
  description: string;
  organizer: string;
  expectedParticipants: string;
  status?: string;
  schedule: ScheduleItem[];
}

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "anniversary-8th-mbi-surabaya",
    day: "26",
    month: "SEP",
    year: "2026",
    targetDateISO: "2026-09-26T07:00:00+07:00",
    title: "MBI SURABAYA 4TH ANNIVERSARY",
    subtitle: "FOUR EVER",
    location: "SURABAYA — MOJOKERTO — JOMBANG — BATU",
    time: "06:00 WIB - Selesai",
    image: "/flyer mbi four ever.jpg",
    description: "Puncak peringatan 4 tahun Motor Besar Indonesia Surabaya. Merayakan 4 tahun dedikasi persaudaraan dengan convoy touring akbar, gala dinner, bakti sosial peduli anak yatim, dan penampilan musik kebersamaan.",
    organizer: "Pengurus Daerah MBI Surabaya",
    expectedParticipants: "55+ Big Motorcycle Riders",
    status: "Registration Open",
    schedule: [
      // HARI 1
      {
        dayHeader: "HARI 1: SABTU, 26 SEPTEMBER 2026 (TOURING & GALA DINNER ANNIVERSARY)",
        time: "06:00 – 06:45",
        duration: "45 Menit",
        activity: "Gathering & Re-Registration",
        details: "Kumpul peserta di Tikum Utama Surabaya. Registrasi ulang dan checking perlengkapan rider.",
        pic: "Sekretaris & Logistik"
      },
      {
        time: "06:45 – 07:00",
        duration: "15 Menit",
        activity: "Briefing Safety Riding & Doa",
        details: "Safety briefing dari Road Captain (RC), penyelarasan frekuensi radio komando, serta doa bersama.",
        pic: "Kabid Touring & Officer"
      },
      {
        time: "07:00 – 07:10",
        duration: "10 Menit",
        activity: "FLAG-OFF START",
        details: "Seremoni pelepasan rombongan konvoi resmi dari Surabaya menuju Mojokerto.",
        pic: "Ketua Panitia & Pengurus"
      },
      {
        time: "07:10 – 08:30",
        duration: "1 Jam 20 Menit (45 km)",
        activity: "Riding Leg 1: Surabaya -> Mojokerto",
        details: "Konvoi berjalan tertib dan teratur (rolling thunder kecepatan rata-rata 45-50 km/jam) dipimpin RC & Sweeper.",
        pic: "RC, Sweeper & Guard"
      },
      {
        time: "08:30 – 09:15",
        duration: "45 Menit (30 km)",
        activity: "Riding Leg 2: Mojokerto -> Jombang",
        details: "Perjalanan melintasi jalur antar kota Mojokerto menuju Jombang.",
        pic: "RC & Sweeper"
      },
      {
        time: "09:15 – 11:00",
        duration: "105 Menit",
        activity: "CHECKPOINT 1 & BREAKFAST: Jombang",
        details: "Lokasi: Warung Barokah Hj. Ida Jombang. Penyambutan & temu kangen member MBI Jombang. Sarapan pagi bersama & refueling BBM kendaraan.",
        pic: "Kabid Konsumsi & Logistik"
      },
      {
        time: "11:00 – 12:45",
        duration: "105 Menit (65 km)",
        activity: "Riding Leg 3: Jombang -> Batu",
        details: "Perjalanan rute pegunungan (Kandangan – Pujon – Batu). Formasi diperrapat & storing car siaga penuh di ekor.",
        pic: "RC & Storing"
      },
      {
        time: "12:45 – 14:35",
        duration: "150 Menit",
        activity: "CHECKPOINT 2 & LUNCH: Batu",
        details: "Lokasi: Wisata Warung Wareg Batu. Makan siang hidangan khas Batu & istirahat sejenak mendinginkan mesin motor.",
        pic: "Kabid Konsumsi"
      },
      {
        time: "14:35 – 15:10",
        duration: "35 Menit (10 km)",
        activity: "Riding Leg 4: Warung Wareg -> Hotel",
        details: "Moving konvoi singkat menuju akomodasi Hotel Aston Inn Batu.",
        pic: "RC & Patroli"
      },
      {
        time: "15:10 – 18:30",
        duration: "200 Menit",
        activity: "Check-in Hotel & Personal Time",
        details: "Lokasi: Aston Inn Batu. Pembagian kunci kamar (Rooming list), bongkar muat bagasi dari mobil logistik oleh private guard dan langsung di antar ke kamar peserta. Istirahat, mandi, dan persiapan busana Gala Dinner.",
        pic: "Sekretaris & Logistik"
      },
      {
        time: "18:30 – 19:00",
        duration: "30 Menit",
        activity: "Guest Registration",
        details: "Registrasi tamu undangan, sesi foto di Wall of Fame MBI Four Ever, dan ramah tamah cocktail/snack pembuka.",
        pic: "Protokoler & Acara"
      },
      {
        time: "19:00 – 19:30",
        duration: "30 Menit",
        activity: "Opening",
        details: "Pembukaan, Sambutan, serta Hymne/Mars MBI.",
        pic: "Kabid Acara & MC"
      },
      {
        time: "19:30 – 20:00",
        duration: "30 Menit",
        activity: "Sambutan-Sambutan Official",
        details: "Sambutan Ketua MBI Wilayah Surabaya (Bro Edward), dan perwakilan Pengurus Pusat / Chapter.",
        pic: "Kabid Acara & Protokoler"
      },
      {
        time: "20:00 – 20:30",
        duration: "30 Menit",
        activity: "CEREMONIAL ANNIVERSARY 4TH",
        details: "Prosesi tiup lilin, pemotongan tumpeng anniversary \"MBI FOUR EVER\", dan sesi foto bersama seluruh pengurus & member.",
        pic: "Kabid Acara"
      },
      {
        time: "20:30 – 21:30",
        duration: "60 Menit",
        activity: "Awarding Session & Door Prize",
        details: "Pembagian penghargaan kategori member.",
        pic: "Kabid Konsumsi & Acara"
      },
      {
        time: "21:30 – 22:30",
        duration: "60 Menit",
        activity: "Gala Dinner",
        details: "Santap malam bersama (buffet dinner), diiringi pertunjukan live music/band.",
        pic: "Kabid Acara & Bendahara"
      },
      {
        time: "22:30 – 23:00",
        duration: "30 Menit",
        activity: "Ramah Tamah",
        details: "Sesi foto bebas, ramah tamah persaudaraan, penutupan.",
        pic: "Panitia All Bidang"
      },

      // HARI 2
      {
        dayHeader: "HARI 2: MINGGU, 27 SEPTEMBER 2026 (PHOTO SESSION & RETURN RIDE)",
        time: "07:00 – 08:00",
        duration: "60 Menit",
        activity: "Morning Breakfast & Socialize",
        details: "Lokasi: Restoran Hotel Aston Inn Batu.",
        pic: "Kabid Konsumsi"
      },
      {
        time: "08:00 – 09:15",
        duration: "75 Menit",
        activity: "Official Photo & Video Session",
        details: "Lokasi: Outdoor Area Hotel / Icon Kota Batu.",
        pic: "Kabid Acara & Dokumentasi"
      },
      {
        time: "09:15 – 09:45",
        duration: "30 Menit",
        activity: "Packing & Official Check-Out",
        details: "Persiapan barang pribadi, pengembalian kunci kamar hotel, dan muat koper ke support truck/car.",
        pic: "Sekretaris & Logistik"
      },
      {
        time: "09:45 – 10:00",
        duration: "15 Menit",
        activity: "Briefing Return Ride & Doa",
        details: "Briefing rute kepulangan menuju Surabaya dan penataan barisan konvoi.",
        pic: "Kabid Touring & Officer"
      },
      {
        time: "10:00 – 14:30",
        duration: "270 Menit (100 km)",
        activity: "RETURN RIDE: Batu -> Surabaya",
        details: "Perjalanan kepulangan bersama rombongan secara tertib (Zero Accident) langsung menuju titik akhir Surabaya / domisili masing-masing.",
        pic: "RC, Sweeper & All Crew"
      },
      {
        time: "14:30",
        duration: "-",
        activity: "FINISH",
        details: "Tiba di Surabaya dengan selamat. Pembubaran rombongan konvoi secara resmi.",
        pic: "Ketua Panitia"
      }
    ]
  },
  {
    id: "charity-ride-pahlawan-2026",
    title: "HEROES DAY CHARITY RIDE 2026",
    day: "10",
    month: "NOV",
    year: "2026",
    targetDateISO: "2026-11-10T08:00:00+07:00",
    subtitle: "Mengenang Jasa Pahlawan Melalui Aksi Kepedulian Sosial",
    location: "MONUMEN TUGU PAHLAWAN SURABAYA",
    time: "07:30 WIB - 14:00 WIB",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1600&auto=format&fit=crop",
    description: "Riding penghormatan Hari Pahlawan mengelilingi landmark bersejarah kota Surabaya disusul penyerahan bantuan tali asih kepada keluarga veteran perang Indonesia.",
    organizer: "MBI Surabaya Social Division",
    expectedParticipants: "120+ MBI Members",
    status: "Registration Open",
    schedule: [
      { time: "07:30", activity: "Upacara Penghormatan & Upacara Tabur Bunga di Tugu Pahlawan" },
      { time: "09:00", activity: "City Convoy Menyisir Jalur Bersejarah Surabaya" },
      { time: "11:00", activity: "Penyerahan Tali Asih & Bantuan Sembako Veteran" }
    ]
  },
  {
    id: "end-year-circuit-coaching-2026",
    title: "MBI HIGH PERFORMANCE & CIRCUIT RIDING DAY",
    day: "19",
    month: "DES",
    year: "2026",
    targetDateISO: "2026-12-19T08:00:00+07:00",
    subtitle: "Mastering Cornering & Emergency Handling Techniques",
    location: "SIRKUIT GELORA BUNG TOMO (GBT) SURABAYA",
    time: "08:00 WIB - 16:30 WIB",
    image: "https://images.unsplash.com/photo-1515777315837-271194636c83?q=80&w=1600&auto=format&fit=crop",
    description: "Sesi privat coaching clinic teknik mengendalikan moge berkapasitas besar di sirkuit balap profesional yang dibimbing langsung oleh instruktur balap lisensi nasional.",
    organizer: "MBI Division of Safety & Riding Skills",
    expectedParticipants: "50 Exclusive MBI Members",
    status: "Exclusive Member Event",
    schedule: [
      { time: "08:00 - 09:30", activity: "Classroom Theory: Center of Gravity & Throttle Control" },
      { time: "10:00 - 12:30", activity: "On-Track Cornering & Braking Drills" },
      { time: "14:00 - 16:30", activity: "Open Track Session & Lapping Telemetry Analysis" }
    ]
  }
];
