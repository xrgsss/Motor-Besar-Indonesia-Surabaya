import React from 'react';
import { Shield, ChevronDown, Compass, Award } from 'lucide-react';
import { CLUB_INFO } from '../data/communityData';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2000&auto=format&fit=crop"
          alt="Big Motorcycle Group Riding Highway"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Dark Vignette & Layered Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.85)_100%)]" />
      </div>

      {/* Decorative Grid Mesh & Red Lighting Accent */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/15 blur-[140px] rounded-full pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 flex flex-col items-center">
        {/* Official Label Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-red-500/40 backdrop-blur-md mb-8 shadow-xl shadow-red-950/40">
          <div className="w-2 h-2 rounded-full bg-[#D60000] animate-ping" />
          <span className="text-[11px] font-heading font-semibold tracking-[0.25em] text-gray-300 uppercase">
            OFFICIAL COMMUNITY WEBSITE
          </span>
          <span className="text-[#C9A227] text-xs font-bold ml-1">★</span>
        </div>

        {/* Logo Branding Icon Centered in Hero */}
        <div className="mb-6 group">
          <img
            src="/logo.png"
            alt="MBI Surabaya Official Crest"
            className="w-28 sm:w-36 md:w-44 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(214,0,0,0.4)] transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase text-white tracking-tight leading-none mb-4">
          MOTOR BESAR <br className="hidden sm:block" />
          <span className="red-gradient-text tracking-wider">INDONESIA</span>
        </h1>

        <div className="inline-block relative mb-6">
          <span className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-[0.3em] text-[#F5F5F5] uppercase">
            SURABAYA
          </span>
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D60000] to-transparent mt-2" />
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 tracking-[0.2em] uppercase max-w-2xl mb-10">
          <span className="text-white font-semibold">{CLUB_INFO.tagline}</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          <a
            href="#tentang"
            className="w-full sm:w-auto min-w-[200px] px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/50 text-white font-heading font-bold text-sm tracking-widest uppercase rounded transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Compass className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            EXPLORE OUR COMMUNITY
          </a>

          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto min-w-[200px] px-8 py-4 bg-[#D60000] hover:bg-[#FF1717] text-white font-heading font-bold text-sm tracking-widest uppercase rounded border border-red-500/50 shadow-xl shadow-red-950/60 transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
          >
            <Shield className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
            JOIN COMMUNITY
          </button>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl text-left">
          <div className="flex items-center gap-3 bg-black/40 p-3 rounded border border-white/5">
            <div className="w-8 h-8 rounded bg-red-950/60 border border-red-800/40 flex items-center justify-center text-[#D60000]">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-heading text-gray-400 uppercase tracking-wider">CHAPTER</div>
              <div className="text-sm font-bold text-white">SURABAYA, JAWA TIMUR</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-black/40 p-3 rounded border border-white/5">
            <div className="w-8 h-8 rounded bg-amber-950/60 border border-amber-800/40 flex items-center justify-center text-[#C9A227]">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-heading text-gray-400 uppercase tracking-wider">SPIRIT</div>
              <div className="text-sm font-bold text-white">SAFETY & BROTHERHOOD</div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-center gap-3 bg-black/40 p-3 rounded border border-white/5">
            <div className="w-8 h-8 rounded bg-red-950/60 border border-red-800/40 flex items-center justify-center text-[#FF1717]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-heading text-gray-400 uppercase tracking-wider">LEADERSHIP</div>
              <div className="text-sm font-bold text-white">RESPECT & INTEGRITY</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#tentang"
          className="mt-12 text-gray-500 hover:text-white transition-colors flex flex-col items-center gap-2 group cursor-pointer"
        >
          <span className="text-[10px] font-heading tracking-[0.3em] uppercase group-hover:text-[#D60000] transition-colors">
            SCROLL DOWN
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#D60000]" />
        </a>
      </div>
    </section>
  );
};
