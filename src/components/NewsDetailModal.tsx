import React from 'react';
import type { NewsArticle } from '../data/newsData';
import { X, Calendar, User } from 'lucide-react';

interface NewsDetailModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0B0B0B] border border-white/20 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-72 shrink-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full backdrop-blur-md border border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#D60000] text-white text-xs font-heading font-bold uppercase rounded tracking-widest shadow-lg">
              {article.category}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3 text-xs text-gray-300 font-semibold mb-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#D60000]" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#C9A227]">
                <User className="w-3.5 h-3.5" />
                {article.author}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-white leading-tight">
              {article.title}
            </h3>
          </div>
        </div>

        {/* Scroll Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="p-4 bg-[#050505] border-l-4 border-[#D60000] rounded-r-lg italic text-gray-200 text-sm">
            "{article.excerpt}"
          </div>

          <div className="text-gray-300 text-sm leading-relaxed space-y-4">
            {article.content ? (
              article.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{article.excerpt}</p>
            )}
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
            <span className="font-heading font-bold uppercase tracking-wider text-gray-500">
              OFFICIAL PUBLICATION • MBI SURABAYA
            </span>

            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#121212] hover:bg-[#D60000] text-white font-heading font-bold text-xs uppercase rounded transition-colors"
            >
              TUTUP ARTIKEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
