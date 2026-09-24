import React, { useState, useEffect } from 'react';
import { UPCOMING_EVENTS } from '../data/eventsData';
import type { EventItem } from '../data/eventsData';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

interface EventSectionProps {
  onSelectEvent: (event: EventItem) => void;
}

export const EventSection: React.FC<EventSectionProps> = ({ onSelectEvent }) => {
  const featuredEvent = UPCOMING_EVENTS[0]; // Main 8th Anniversary Event

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(featuredEvent.targetDateISO).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [featuredEvent]);

  return (
    <section id="event" className="relative py-24 bg-[#050505] text-white overflow-hidden">
      {/* Background Lighting Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-950/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D60000]" />
              <span className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-[#D60000]">
                SCHEDULED GATHERINGS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight">
              UPCOMING <span className="red-gradient-text">EVENTS</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Agenda kegiatan mendatang Motor Besar Indonesia Surabaya. Bersiaplah untuk pengalaman berkendara dan persaudaraan berikutnya.
          </p>
        </div>

        {/* Featured Big Event Banner with Live Countdown */}
        <div className="bg-[#0B0B0B] border border-[#D60000]/40 rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-red-950/30 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Image & Overlay */}
            <div className="lg:col-span-5 relative bg-[#050505] flex items-center justify-center p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
              <div className="relative w-full flex items-center justify-center">
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="max-h-[360px] sm:max-h-[390px] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                />
                
              </div>
            </div>

            {/* Right Event Details & Countdown */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                {/* Date & Location Header */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-semibold mb-4">
                  <div className="flex items-center gap-2 text-[#D60000]">
                    <Calendar className="w-4 h-4" />
                    <span className="font-heading tracking-wider uppercase">{featuredEvent.day} {featuredEvent.month} {featuredEvent.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4 text-[#C9A227]" />
                    <span className="font-heading tracking-wider uppercase">{featuredEvent.location}</span>
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="text-2xl sm:text-4xl font-heading font-extrabold uppercase text-white mb-2 leading-tight">
                  {featuredEvent.title}
                </h3>
                <p className="text-xs font-heading tracking-widest text-[#C9A227] uppercase mb-4">
                  {featuredEvent.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {featuredEvent.description}
                </p>

                {/* Countdown Timer Block */}
                <div className="bg-[#050505] border border-white/10 p-4 rounded-xl mb-6">
                  <div className="text-[10px] font-heading font-bold tracking-widest text-gray-400 uppercase mb-3 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#D60000]" />
                    EVENT COUNTDOWN TIMER
                  </div>

                  <div className="grid grid-cols-4 gap-3 text-center">
                    <div className="bg-[#121212] p-2 rounded border border-white/5">
                      <span className="text-xl sm:text-2xl font-heading font-bold red-gradient-text block">
                        {String(timeLeft.days).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] text-gray-400 font-mono uppercase">HARI</span>
                    </div>
                    <div className="bg-[#121212] p-2 rounded border border-white/5">
                      <span className="text-xl sm:text-2xl font-heading font-bold text-white block">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] text-gray-400 font-mono uppercase">JAM</span>
                    </div>
                    <div className="bg-[#121212] p-2 rounded border border-white/5">
                      <span className="text-xl sm:text-2xl font-heading font-bold text-white block">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] text-gray-400 font-mono uppercase">MENIT</span>
                    </div>
                    <div className="bg-[#121212] p-2 rounded border border-white/5">
                      <span className="text-xl sm:text-2xl font-heading font-bold text-[#D60000] block">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] text-gray-400 font-mono uppercase">DETIK</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  onClick={() => onSelectEvent(featuredEvent)}
                  className="px-6 py-3 bg-[#D60000] hover:bg-[#FF1717] text-white font-heading font-bold text-xs tracking-widest uppercase rounded border border-red-500/40 shadow-lg shadow-red-950/50 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>VIEW EVENT DETAILS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {UPCOMING_EVENTS.slice(1).map((ev) => (
            <div
              key={ev.id}
              className="bg-[#0B0B0B] border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-red-600/40 transition-all duration-300 group shadow-lg"
            >
              {/* Date Box */}
              <div className="w-20 h-24 bg-[#050505] border border-red-600/40 rounded-lg flex flex-col items-center justify-center text-center shrink-0 group-hover:bg-red-950/40 transition-colors">
                <span className="text-3xl font-heading font-black text-[#D60000]">{ev.day}</span>
                <span className="text-xs font-heading font-bold text-white uppercase">{ev.month}</span>
                <span className="text-[10px] text-gray-500 font-mono">{ev.year}</span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="text-[10px] font-heading font-bold text-[#C9A227] uppercase tracking-wider mb-1">
                    {ev.location}
                  </div>
                  <h4 className="text-xl font-heading font-bold uppercase text-white mb-2 group-hover:text-[#D60000] transition-colors leading-tight">
                    {ev.title}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                    {ev.description}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => onSelectEvent(ev)}
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#D60000] hover:text-white uppercase tracking-wider transition-colors"
                  >
                    <span>VIEW EVENT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
