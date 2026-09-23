import React, { useState } from 'react';
import { ACTIVITIES_DATA } from '../data/activitiesData';
import type { Activity } from '../data/activitiesData';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

interface ActivitiesSectionProps {
  onSelectActivity: (activity: Activity) => void;
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ onSelectActivity }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'Touring',
    'Kopdar',
    'Charity',
    'Motorcycle Events',
    'Anniversary',
    'Community Gathering'
  ];

  const filteredActivities = selectedCategory === 'ALL'
    ? ACTIVITIES_DATA
    : ACTIVITIES_DATA.filter(a => a.category === selectedCategory);

  return (
    <section id="kegiatan" className="relative py-24 bg-[#0B0B0B] text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D60000]" />
              <span className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-[#D60000]">
                COMMUNITY ENGAGEMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight">
              OUR <span className="red-gradient-text">ACTIVITIES</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Dokumentasi agenda kegiatan resmi MBI Surabaya, dari touring lintas wilayah hingga bakti sosial bagi masyarakat.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-heading font-bold tracking-widest uppercase rounded whitespace-nowrap transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-[#D60000] text-white border-red-500 shadow-lg shadow-red-950/50'
                  : 'bg-[#121212] text-gray-400 border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity, idx) => (
            <div
              key={activity.id}
              className={`bg-[#050505] border border-white/10 rounded-xl overflow-hidden group hover:border-red-600/50 transition-all duration-500 flex flex-col justify-between shadow-xl ${
                idx === 0 ? 'lg:col-span-2 lg:flex-row' : ''
              }`}
            >
              {/* Image Box */}
              <div
                className={`relative overflow-hidden ${
                  idx === 0 ? 'lg:w-1/2 min-h-[300px]' : 'h-60'
                }`}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/75 border border-red-600/40 backdrop-blur-md rounded text-[10px] font-heading font-bold tracking-widest text-[#D60000] uppercase">
                    {activity.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className={`p-6 sm:p-8 flex flex-col justify-between ${idx === 0 ? 'lg:w-1/2' : ''}`}>
                <div>
                  {/* Date & Location */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#8A8A8A] font-semibold mb-3">
                    <div className="flex items-center gap-1.5 text-gray-300">
                      <Calendar className="w-3.5 h-3.5 text-[#D60000]" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                      <span className="truncate max-w-[180px]">{activity.location}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold uppercase text-white mb-3 group-hover:text-[#D60000] transition-colors leading-snug">
                    {activity.title}
                  </h3>

                  {/* Short Desc */}
                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 mb-6 leading-relaxed">
                    {activity.shortDesc}
                  </p>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onSelectActivity(activity)}
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold tracking-widest text-[#D60000] group-hover:text-white uppercase transition-colors"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-[10px] font-mono text-gray-500 uppercase">
                    MBI SURABAYA
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
