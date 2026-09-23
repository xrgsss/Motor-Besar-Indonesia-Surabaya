import React from 'react';
import type { GalleryImage } from '../data/galleryData';
import { X, Calendar, MapPin, Tag } from 'lucide-react';

interface LightboxModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-[#D60000] text-white rounded-full transition-colors z-50"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="max-w-5xl w-full flex flex-col items-center justify-center">
        {/* Main Lightbox Image */}
        <div className="relative rounded-xl overflow-hidden max-h-[75vh] border border-white/20 shadow-2xl bg-black">
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>

        {/* Image Metadata Bar */}
        <div className="mt-6 bg-[#0B0B0B] border border-white/10 p-6 rounded-xl w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 text-xs text-[#C9A227] font-semibold mb-1">
              <span className="flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-[#D60000]" />
                {image.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-gray-400">
                <Calendar className="w-3.5 h-3.5" />
                {image.date}
              </span>
            </div>
            <h3 className="text-xl font-heading font-extrabold uppercase text-white">
              {image.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400 font-mono bg-[#050505] px-4 py-2 rounded border border-white/5">
            <MapPin className="w-3.5 h-3.5 text-[#D60000]" />
            <span>{image.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
