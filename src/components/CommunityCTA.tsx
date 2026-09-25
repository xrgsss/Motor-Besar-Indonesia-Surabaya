import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';

interface CommunityCTAProps {
  onOpenJoinModal: () => void;
}

export const CommunityCTA: React.FC<CommunityCTAProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="relative py-28 bg-[#050505] text-white overflow-hidden border-t border-b border-white/10">
      {/* Background Riding Photo with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/g7.webp"
          alt="MBI Community Riding"
          className="w-full h-full object-cover object-center opacity-30 filter grayscale hover:grayscale-0 transition-all duration-1000"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.9)_100%)]" />
      </div>

      {/* Decorative Red Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Crest Logo */}
        <div className="inline-block mb-6">
          <img
            src="/logo.png"
            alt="MBI Surabaya Crest"
            className="w-24 h-24 object-contain mx-auto filter drop-shadow-[0_0_15px_rgba(214,0,0,0.5)]"
          />
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl font-heading font-extrabold uppercase text-white tracking-tight leading-tight mb-4">
          READY TO RIDE <span className="red-gradient-text">WITH US?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl font-light text-gray-300 tracking-[0.2em] uppercase mb-10">
          BECOME PART OF THE <span className="text-white font-semibold">BROTHERHOOD.</span>
        </p>

        {/* Red Accent Line */}
        <div className="h-1 w-24 bg-[#D60000] mx-auto mb-10" />

        {/* Main Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenJoinModal}
            className="px-10 py-5 bg-[#D60000] hover:bg-[#FF1717] text-white font-heading font-bold text-base tracking-[0.2em] uppercase rounded border border-red-500/50 shadow-2xl shadow-red-950/70 transition-all duration-300 flex items-center gap-3 group transform hover:scale-105"
          >
            <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>JOIN MBI SURABAYA</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Tagline Footer Label */}
        <div className="mt-12 text-xs font-heading font-semibold text-[#8A8A8A] tracking-[0.3em] uppercase">
          MOTOR BESAR INDONESIA SURABAYA • OFFICIAL CHAPTER
        </div>
      </div>
    </section>
  );
};
