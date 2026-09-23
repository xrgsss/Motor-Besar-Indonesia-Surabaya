import React from 'react';
import { CLUB_INFO, COMMUNITY_STATS } from '../data/communityData';
import { Shield, ChevronRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="relative py-24 bg-[#0B0B0B] text-white border-t border-b border-white/5 overflow-hidden">
      {/* Background Subtle Accent Graphic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-950/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-950/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-[#D60000]" />
          <span className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-[#D60000]">
            ABOUT US
          </span>
        </div>

        {/* Main Grid Layout: Left Large Heading, Right Description & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Heading & Crest */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight leading-tight">
              TENTANG <br />
              <span className="text-white">MOTOR BESAR INDONESIA</span> <br />
              <span className="red-gradient-text">SURABAYA</span>
            </h2>

            <div className="h-1 w-24 bg-[#D60000]" />

            <div className="p-6 bg-[#121212] border border-white/10 rounded-xl relative overflow-hidden group hover:border-red-900/50 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-600/10 to-transparent pointer-events-none" />
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="/logo.png"
                  alt="MBI Emblem"
                  className="w-14 h-14 object-contain filter drop-shadow-[0_0_10px_rgba(214,0,0,0.4)]"
                />
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">CHAPTER SURABAYA</h3>
                  <p className="text-xs text-[#8A8A8A] font-mono uppercase">Official Regional Chapter</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 italic">
                "{CLUB_INFO.secondaryTagline}"
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): Text Paragraphs & Statistics Grid */}
          <div className="lg:col-span-7 space-y-10">
            {/* Paragraph Text */}
            <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p className="border-l-2 border-[#D60000] pl-4 py-1 text-white font-medium">
                {CLUB_INFO.aboutParagraph1}
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                {CLUB_INFO.aboutParagraph2}
              </p>
            </div>

            {/* Statistics Numbers Display */}
            <div className="pt-6 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {COMMUNITY_STATS.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-[#050505] border border-white/10 rounded-lg relative hover:border-red-600/40 transition-all duration-300 group"
                  >
                    <div className="text-4xl sm:text-5xl font-heading font-extrabold red-gradient-text mb-2 group-hover:scale-105 transition-transform origin-left">
                      {stat.value}
                    </div>
                    <div className="font-heading font-bold text-xs tracking-widest text-white uppercase mb-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-[#8A8A8A] leading-tight">
                      {stat.sublabel}
                    </div>
                    {/* Bottom Red Line on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D60000] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-feature badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-heading tracking-widest text-gray-400 uppercase pt-2">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#121212] rounded border border-white/10 text-gray-300">
                <Shield className="w-3.5 h-3.5 text-[#D60000]" />
                TERLISENSI & RESMI
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#121212] rounded border border-white/10 text-gray-300">
                <ChevronRight className="w-3.5 h-3.5 text-[#C9A227]" />
                KEGIATAN SOSIAL RUTIN
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#121212] rounded border border-white/10 text-gray-300">
                <ChevronRight className="w-3.5 h-3.5 text-[#D60000]" />
                SAFETY RIDING ADVOCATE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
