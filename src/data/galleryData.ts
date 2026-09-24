export interface GalleryImage {
  id: string;
  title: string;
  category: 'TOURING' | 'EVENT' | 'KOPDAR' | 'CHARITY' | 'ANNIVERSARY';
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
    id: "gal-4",
    title: "Bromo Sunrise Expedition",
    category: "ANNIVERSARY",
    date: "Oktober 2025",
    location: "Kawasan Bromo Highlands",
    src: "https://images.unsplash.com/photo-1558980664-769d59546b3d?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "wide"
  },
  {
    id: "gal-5",
    title: "Surabaya Big Bike Expo",
    category: "EVENT",
    date: "November 2025",
    location: "Jatim Expo Surabaya",
    src: "https://images.unsplash.com/photo-1515777315837-271194636c83?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "tall"
  },
  {
    id: "gal-6",
    title: "Mountain Highway Escapade",
    category: "TOURING",
    date: "Juli 2026",
    location: "Jalur Perbukitan Cangar",
    src: "https://images.unsplash.com/photo-1547038577-da80abbc4f19?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "wide"
  },
  {
    id: "gal-7",
    title: "MBI Surabaya Gala Dinner",
    category: "ANNIVERSARY",
    date: "Oktober 2025",
    location: "Hotel Majapahit Surabaya",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "square"
  },
  {
    id: "gal-8",
    title: "Santunan Anak Yatim & Dhuafa",
    category: "CHARITY",
    date: "Desember 2025",
    location: "Kenjeran Surabaya",
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "wide"
  },
  {
    id: "gal-9",
    title: "Weekend Coffee & Engine Talk",
    category: "KOPDAR",
    date: "Juni 2026",
    location: "Dharmahusada Surabaya",
    src: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "square"
  }
];
