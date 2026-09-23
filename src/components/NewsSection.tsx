import React from 'react';
import { INTERNAL_NEWS } from '../data/newsData';
import type { NewsArticle } from '../data/newsData';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface NewsSectionProps {
  onSelectArticle: (article: NewsArticle) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="berita" className="relative py-24 bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D60000]" />
              <span className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-[#D60000]">
                CLUB JOURNAL & UPDATES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight">
              LATEST <span className="red-gradient-text">NEWS</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Berita resmi terbaru mengenai agenda touring, wawasan riding, dan perkembangan internal Motor Besar Indonesia Surabaya.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERNAL_NEWS.map((article) => (
            <article
              key={article.id}
              className="bg-[#0B0B0B] border border-white/10 rounded-xl overflow-hidden group hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-black/80 border border-red-500/40 rounded text-[9px] font-heading font-bold tracking-widest text-white uppercase backdrop-blur-md">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#D60000]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <User className="w-3 h-3 text-[#C9A227]" />
                      {article.author}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold uppercase text-white mb-3 group-hover:text-[#D60000] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onSelectArticle(article)}
                  className="w-full py-2.5 px-4 bg-[#121212] hover:bg-[#D60000] text-gray-300 hover:text-white border border-white/10 hover:border-red-600 rounded text-xs font-heading font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
