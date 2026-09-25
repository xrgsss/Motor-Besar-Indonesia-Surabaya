export interface GalleryImage {
  id: string;
  title: string;
  category: 'TOURING' | 'EVENT' | 'KOPDAR' | 'CHARITY' | 'ANNIVERSARY' | 'Motorcycle Events';
  date: string;
  location: string;
  src: string;
  aspectRatio?: 'square' | 'wide' | 'tall';
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "gal-1",
    title: "Early morning looking for ducks",
    category: "KOPDAR",
    date: "Agustus 2026",
    location: "Madura",
    src: "/g1.png",
    aspectRatio: "wide"
  },
  {
    id: "gal-2",
    title: "1 st East Java Safety First",
    category: "Motorcycle Events",
    date: "Juli 2026",
    location: "Bumi Marinir Karang Pilang Surabaya",
    src: "/g2.png",
    aspectRatio: "square"
  },
  {
    id: "gal-3",
    title: "Sunmori Taman Dayu",
    category: "KOPDAR",
    date: "Juli 2026",
    location: "Taman Dayu",
    src: "/g3.png",
    aspectRatio: "square"
  },
  {
    id: "gal-5",
    title: "MBI Surabaya peduli Sumatra",
    category: "CHARITY",
    date: "November 2025",
    location: "Sumatra",
    src: "/g5.jpg",
    aspectRatio: "tall"
  },
  {
    id: "gal-6",
    title: "Goes to bogor bike fest 2026",
    category: "TOURING",
    date: "November 2025",
    location: "Bogor",
    src: "/g6.jpg",
    aspectRatio: "wide"
  },
  {
    id: "gal-7",
    title: "Event marine day",
    category: "EVENT",
    date: "November 2025",
    location: "Surabaya",
    src: "/g7.jpg",
    aspectRatio: "square"
  },
  {
    id: "gal-4",
    title: "3rd Anniversary",
    category: "ANNIVERSARY",
    date: "Oktober 2025",
    location: "Surabaya",
    src: "/g4.jpg",
    aspectRatio: "wide"
  },
  {
    id: "gal-8",
    title: "Idul adha penyembelihan hewan qurban",
    category: "CHARITY",
    date: "Juni 2025",
    location: "Lamongan",
    src: "/g8.jpg",
    aspectRatio: "wide"
  },
  {
    id: "gal-9",
    title: "GOES TO BOROBUDUR INTERNATIONAL BIKE WEEK",
    category: "TOURING",
    date: "Mei 2025",
    location: "Borobudur",
    src: "/g9.jpg",
    aspectRatio: "square"
  }
];
