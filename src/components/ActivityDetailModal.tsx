import React from 'react';
import type { Activity } from '../data/activitiesData';
import { X, Calendar, MapPin, Users, Navigation, CheckCircle2 } from 'lucide-react';

interface ActivityDetailModalProps {
  activity: Activity | null;
  onClose: () => void;
}

export const ActivityDetailModal: React.FC<ActivityDetailModalProps> = ({ activity, onClose }) => {
  if (!activity) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0B0B0B] border border-white/20 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top Header Image */}
        <div className="relative h-64 sm:h-80 shrink-0">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full backdrop-blur-md border border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#D60000] text-white text-xs font-heading font-bold uppercase rounded tracking-widest shadow-lg">
              {activity.category}
            </span>
          </div>

          {/* Title on Image */}
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-white leading-tight">
              {activity.title}
            </h3>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#050505] border border-white/10 rounded-xl text-xs">
            <div className="flex items-center gap-2.5 text-gray-300">
              <Calendar className="w-4 h-4 text-[#D60000]" />
              <div>
                <div className="font-heading font-bold uppercase text-gray-500 text-[10px]">TANGGAL PELAKSANAAN</div>
                <div className="font-semibold text-white">{activity.date}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-gray-300">
              <MapPin className="w-4 h-4 text-[#C9A227]" />
              <div>
                <div className="font-heading font-bold uppercase text-gray-500 text-[10px]">LOKASI / RUTE</div>
                <div className="font-semibold text-white">{activity.location}</div>
              </div>
            </div>

            {activity.participantCount && (
              <div className="flex items-center gap-2.5 text-gray-300">
                <Users className="w-4 h-4 text-[#D60000]" />
                <div>
                  <div className="font-heading font-bold uppercase text-gray-500 text-[10px]">PESERTA & EMBLEM</div>
                  <div className="font-semibold text-white">{activity.participantCount}</div>
                </div>
              </div>
            )}

            {activity.route && (
              <div className="flex items-center gap-2.5 text-gray-300">
                <Navigation className="w-4 h-4 text-[#C9A227]" />
                <div>
                  <div className="font-heading font-bold uppercase text-gray-500 text-[10px]">RUTE UTAMA</div>
                  <div className="font-semibold text-white">{activity.route}</div>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-heading font-bold text-[#C9A227] uppercase tracking-widest mb-2">
              DESKRIPSI LENGKAP KEGIATAN
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
              {activity.fullDesc}
            </p>
          </div>

          {/* Highlights */}
          {activity.highlights && activity.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-heading font-bold text-[#D60000] uppercase tracking-widest mb-3">
                HIGHLIGHT & AGENDA UTAMA
              </h4>
              <ul className="space-y-2">
                {activity.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#D60000] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer Action */}
          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#121212] hover:bg-[#D60000] text-white font-heading font-bold text-xs uppercase rounded transition-colors"
            >
              TUTUP DETIL KEGIATAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
