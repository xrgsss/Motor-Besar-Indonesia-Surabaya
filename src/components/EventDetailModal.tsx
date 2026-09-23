import React from 'react';
import type { EventItem } from '../data/eventsData';
import { X, Calendar, MapPin, Clock, ShieldCheck } from 'lucide-react';

interface EventDetailModalProps {
  event: EventItem | null;
  onClose: () => void;
  onOpenJoinModal: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, onClose, onOpenJoinModal }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0B0B0B] border border-red-600/40 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Banner Image */}
        <div className="relative h-64 sm:h-72 shrink-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full backdrop-blur-md border border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 bg-[#D60000] text-white text-xs font-heading font-bold uppercase rounded tracking-widest shadow-lg">
              {event.status}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-xs font-heading font-bold text-[#C9A227] uppercase tracking-wider mb-1">
              {event.subtitle}
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-white leading-tight">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Scroll Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#050505] border border-white/10 rounded-xl text-xs">
            <div className="flex items-center gap-2.5 text-gray-300">
              <Calendar className="w-4 h-4 text-[#D60000]" />
              <div>
                <div className="font-heading font-bold uppercase text-gray-500 text-[10px]">TANGGAL & HARI</div>
                <div className="font-semibold text-white">{event.day} {event.month} {event.year}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-gray-300">
              <Clock className="w-4 h-4 text-[#C9A227]" />
              <div>
                <div className="font-heading font-bold uppercase text-gray-500 text-[10px]">WAKTU PELAKSANAAN</div>
                <div className="font-semibold text-white">{event.time}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-gray-300">
              <MapPin className="w-4 h-4 text-[#D60000]" />
              <div>
                <div className="font-heading font-bold uppercase text-gray-500 text-[10px]">LOKASI VENUE</div>
                <div className="font-semibold text-white">{event.location}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-heading font-bold text-[#C9A227] uppercase tracking-widest mb-2">
              DESKRIPSI EVENT
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Rundown Schedule */}
          {event.schedule && event.schedule.length > 0 && (
            <div>
              <h4 className="text-xs font-heading font-bold text-[#D60000] uppercase tracking-widest mb-3">
                RUNDOWN / SUSUNAN ACARA
              </h4>
              <div className="space-y-2">
                {event.schedule.map((item, idx) => (
                  <div key={idx} className="p-3 bg-[#050505] border border-white/5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
                    <span className="font-heading font-bold text-[#C9A227] w-36 shrink-0">{item.time}</span>
                    <span className="text-gray-300 flex-1">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Call to Action */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-400">
              Penyelenggara: <span className="text-white font-bold">{event.organizer}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-2.5 bg-[#121212] hover:bg-white/10 text-gray-300 font-heading font-bold text-xs uppercase rounded"
              >
                TUTUP
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenJoinModal();
                }}
                className="px-6 py-2.5 bg-[#D60000] hover:bg-[#FF1717] text-white font-heading font-bold text-xs uppercase tracking-widest rounded shadow-lg flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>REGISTRASI IKUT EVENT</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
