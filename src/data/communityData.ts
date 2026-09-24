export interface ValueItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'Users' | 'ShieldCheck' | 'Compass' | 'Award';
}

export interface StatisticItem {
  value: string;
  label: string;
  sublabel: string;
}

export const COMMUNITY_STATS: StatisticItem[] = [
  {
    value: "4 Years",
    label: "OF BROTHERHOOD",
    sublabel: "Dedikasi & Kebersamaan Sejak Awal Berdiri"
  },
  {
    value: "50+",
    label: "COMMUNITY MEMBERS",
    sublabel: "Rider Motor Besar Berjiwa Solidaritas"
  },
  {
    value: "30+",
    label: "COMMUNITY ACTIVITIES",
    sublabel: "Touring, Bakti Sosial & Kopdar Tahunan"
  }
];

export const COMMUNITY_VALUES: ValueItem[] = [
  {
    id: "brotherhood",
    title: "BROTHERHOOD",
    subtitle: "Persaudaraan Tanpa Batas",
    description: "Membangun persaudaraan yang erat dan erat antar sesama pengendaran motor besar tanpa membedakan latar belakang.",
    iconName: "Users"
  },
  {
    id: "respect",
    title: "RESPECT",
    subtitle: "Saling Menghargai & Menjaga",
    description: "Menjunjung tinggi sikap saling menghargai sesama anggota, pengendara jalan raya, dan masyarakat umum.",
    iconName: "ShieldCheck"
  },
  {
    id: "unity",
    title: "UNITY",
    subtitle: "Kekompakan Dalam Perjalanan",
    description: "Menjaga kekompakan dan kekeluargaan dalam setiap agenda touring, event resmi, maupun kegiatan sosial.",
    iconName: "Compass"
  },
  {
    id: "responsibility",
    title: "RESPONSIBILITY",
    subtitle: "Safety Riding & Tanggung Jawab",
    description: "Mengutamakan keselamatan berkendara (Safety Riding), mematuhi aturan lalu lintas, serta berdampak positif bagi masyarakat.",
    iconName: "Award"
  }
];

export const CLUB_INFO = {
  name: "Motor Besar Indonesia Surabaya",
  shortName: "MBI SURABAYA",
  tagline: "Brotherhood • Ride • Unity",
  secondaryTagline: "One Brotherhood. One Ride. One Spirit.",
  establishedYear: "2018",
  city: "Surabaya, Jawa Timur",
  country: "Indonesia",
  address: "Jl. Raya Darmo No. 120, Tegalsari, Surabaya, Jawa Timur 60241",
  email: "info@mbisurabaya.or.id",
  whatsapp: "+62 812-3456-7890",
  socials: {
    instagram: "https://instagram.com/mbi_surabaya",
    facebook: "https://facebook.com/mbisurabaya.official",
    youtube: "https://youtube.com/@mbisurabaya",
    whatsapp: "https://wa.me/6281234567890"
  },
  aboutParagraph1: "Motor Besar Indonesia Surabaya merupakan komunitas pecinta motor besar (big motorcycle) yang menjadi wadah eksklusif bagi para enthusiast roda dua di Jawa Timur untuk membangun persaudaraan yang solid, berbagi passion berkendara, berkegiatan sosial, serta menjaga semangat kebersamaan di setiap jengkal perjalanan.",
  aboutParagraph2: "Dengan komitmen pada ketaatan lalu lintas dan etika berkendara yang santun, MBI Surabaya terus aktif mengagendakan touring lintas Nusantara, Bakti Sosial peduli sesama, hingga event otomotif berskala nasional."
};
