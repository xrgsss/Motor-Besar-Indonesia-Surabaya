import React from 'react';
import { COMMUNITY_VALUES } from '../data/communityData';
import type { ValueItem } from '../data/communityData';
import { Users, ShieldCheck, Compass, Award } from 'lucide-react';

export const ValuesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-8 h-8 text-[#D60000]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#C9A227]" />;
      case 'Compass':
        return <Compass className="w-8 h-8 text-[#D60000]" />;
      case 'Award':
        return <Award className="w-8 h-8 text-[#FF1717]" />;
      default:
        return <Users className="w-8 h-8 text-[#D60000]" />;
    }
  };

  return (
    <section id="nilai" className="relative py-24 bg-[#050505] text-white overflow-hidden">
      {/* Background Subtle Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D60000]" />
            <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#D60000]">
              CORE PRINCIPLES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight mb-4">
            OUR <span className="red-gradient-text">VALUES</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Nilai-nilai utama yang menjadi pilar dan kehormatan keluarga Motor Besar Indonesia Surabaya.
          </p>
          <div className="h-1 w-16 bg-[#D60000] mx-auto mt-6" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMUNITY_VALUES.map((val: ValueItem, index: number) => (
            <div
              key={val.id}
              className="bg-[#0B0B0B] border border-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl shadow-black/60"
            >
              {/* Corner Watermark Number */}
              <div className="absolute top-4 right-4 text-4xl font-heading font-black text-white/5 group-hover:text-red-600/10 transition-colors">
                0{index + 1}
              </div>

              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-lg bg-[#121212] border border-white/10 flex items-center justify-center mb-6 group-hover:border-red-600/40 group-hover:bg-red-950/30 transition-all">
                  {getIcon(val.iconName)}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-heading font-bold tracking-wider uppercase text-white mb-2 group-hover:text-[#D60000] transition-colors">
                  {val.title}
                </h3>
                <div className="text-xs font-heading font-semibold text-[#C9A227] uppercase tracking-wider mb-4">
                  {val.subtitle}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {val.description}
                </p>
              </div>

              {/* Bottom Red Line Accent */}
              <div className="mt-8 h-0.5 w-full bg-white/10 group-hover:bg-[#D60000] transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
