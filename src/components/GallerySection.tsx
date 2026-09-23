import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/galleryData';
import type { GalleryImage } from '../data/galleryData';
import { Maximize2, Camera, Calendar, MapPin } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (image: GalleryImage) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'TOURING', 'EVENT', 'KOPDAR', 'CHARITY', 'ANNIVERSARY'];

  const filteredImages = activeCategory === 'ALL'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <section id="galeri" className="relative py-24 bg-[#0B0B0B] text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Camera className="w-4 h-4 text-[#D60000]" />
              <span className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-[#D60000]">
                VISUAL MEMORIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight">
              OUR <span className="red-gradient-text">MOMENTS</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Abadikan setiap detik perjalanan, kehangatan persaudaraan, dan semangat berkendara Motor Besar Indonesia Surabaya.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-heading font-bold tracking-widest uppercase rounded transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-[#D60000] text-white border-red-500 shadow-lg shadow-red-950/50'
                  : 'bg-[#121212] text-gray-400 border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-red-600/60 transition-all duration-500 shadow-xl bg-black"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Expand Icon Hover Indicator */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 backdrop-blur-md">
                <Maximize2 className="w-4 h-4 text-[#D60000]" />
              </div>

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-black/80 border border-red-500/30 rounded text-[9px] font-heading font-bold tracking-widest text-[#D60000] uppercase backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              {/* Bottom Information Details */}
              <div className="absolute bottom-0 inset-x-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-3 text-[11px] text-[#C9A227] font-semibold mb-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <MapPin className="w-3 h-3 text-[#D60000]" />
                    {item.location}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold uppercase text-white group-hover:text-[#D60000] transition-colors leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
