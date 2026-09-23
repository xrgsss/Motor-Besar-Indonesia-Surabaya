import React from 'react';
import { EXTERNAL_AUTOMOTIVE_NEWS } from '../data/newsData';
import type { NewsArticle } from '../data/newsData';
import { ExternalLink, Globe, Calendar } from 'lucide-react';

export const ExternalNewsSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#0B0B0B] text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-[#C9A227]" />
              <span className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                RECOMMENDED READS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold uppercase tracking-tight">
              AUTOMOTIVE <span className="gold-gradient-text">NEWS</span>
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-lg">
            Kumpulan wawasan & informasi pilihan dari media otomotif terkemuka Indonesia (Detik, Kompas, GridOto, CNN Indonesia, Tempo).
          </p>
        </div>

        {/* External News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXTERNAL_AUTOMOTIVE_NEWS.map((article: NewsArticle) => (
            <div
              key={article.id}
              className="bg-[#050505] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-[#C9A227]/40 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Source Badge & Date */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="px-2.5 py-1 bg-[#121212] border border-[#C9A227]/30 rounded text-[10px] font-heading font-bold tracking-wider text-[#C9A227] uppercase">
                    SOURCE: {article.source}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-gray-500">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>

                {/* Article Image Thumbnail */}
                <div className="h-36 rounded-lg overflow-hidden mb-4 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-base font-heading font-bold uppercase text-white mb-2 group-hover:text-[#C9A227] transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Action Link Outbound */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-heading font-bold tracking-widest text-[#C9A227] hover:text-white uppercase transition-colors"
                >
                  <span>READ ARTICLE AT {article.source?.toUpperCase()}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
