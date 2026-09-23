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
  status: 'Registration Open' | 'Upcoming' | 'Exclusive Member Event';
  schedule: { time: string; activity: string }[];
}

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "anniversary-8th-mbi-surabaya",
    day: "26",
    month: "SEP",
    year: "2026",
    targetDateISO: "2026-09-26T07:00:00+07:00",
    title: "MBI SURABAYA 8TH ANNIVERSARY GRAND RALLY",
    subtitle: "Roar of Brotherhood • Celebration of Unity",
    location: "SURABAYA — KOTA BATU — BROMO",
    time: "06:00 WIB - Selesai",
    image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?q=80&w=1600&auto=format&fit=crop",
    description: "Puncak peringatan 8 tahun Motor Besar Indonesia Surabaya. Merayakan 8 tahun dedikasi persaudaraan dengan convoy touring akbar, gala dinner, bakti sosial peduli anak yatim, dan penampilan musik kebersamaan.",
    organizer: "Pengurus Daerah MBI Surabaya",
    expectedParticipants: "350+ Big Motorcycle Riders",
    status: "Registration Open",
    schedule: [
      { time: "06:00 - 07:00", activity: "Gathering & Briefing Safety Line di Parkir Timur Plaza Surabaya" },
      { time: "07:30", activity: "Flag-Off Rolling Thunder Surabaya — Purwosari — Batu" },
      { time: "11:30 - 13:00", activity: "Rest & Community Charity Lunch di Kota Batu" },
      { time: "19:00 - 22:30", activity: "Gala Night Anniversary & Brotherhood Awarding 2026" }
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
