import React from 'react';
import { CLUB_INFO } from '../data/communityData';
import { Shield, ArrowUp, MessageSquare } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Red Accent Top Border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D60000] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Crest Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" className="flex items-center gap-4 group inline-block">
              <img
                src="/logo.png"
                alt="Motor Besar Indonesia Surabaya Logo"
                className="w-16 h-16 object-contain filter drop-shadow-[0_0_12px_rgba(214,0,0,0.5)] group-hover:scale-105 transition-transform"
              />
              <div>
                <h3 className="font-heading font-extrabold text-2xl tracking-wider text-white">
                  MBI <span className="text-[#D60000]">SURABAYA</span>
                </h3>
                <p className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest">
                  Motor Besar Indonesia
                </p>
              </div>
            </a>

            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Komunitas pecinta motor besar resmi Jawa Timur yang berlandaskan solidaritas, keselamatan berkendara, persaudaraan tanpa batas, serta dedikasi sosial bagi masyarakat.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#121212] border border-white/10 text-xs font-heading font-semibold text-gray-300">
              <Shield className="w-4 h-4 text-[#D60000]" />
              <span className="tracking-wider uppercase text-[11px]">OFFICIAL COMMUNITY WEBSITE</span>
            </div>
          </div>

          {/* Quick Navigation Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-[#C9A227]">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider">
              <li>
                <a href="#home" className="hover:text-[#D60000] transition-colors">HOME</a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-[#D60000] transition-colors">TENTANG MBI</a>
              </li>
              <li>
                <a href="#nilai" className="hover:text-[#D60000] transition-colors">OUR VALUES</a>
              </li>
              <li>
                <a href="#kegiatan" className="hover:text-[#D60000] transition-colors">KEGIATAN & RALLY</a>
              </li>
              <li>
                <a href="#berita" className="hover:text-[#D60000] transition-colors">LATEST NEWS</a>
              </li>
              <li>
                <a href="#event" className="hover:text-[#D60000] transition-colors">UPCOMING EVENTS</a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-[#D60000] transition-colors">MOMENTS GALLERY</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#D60000] transition-colors">KONTAK & SEKRETARIAT</a>
              </li>
            </ul>
          </div>

          {/* Social Media & Contact Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-[#C9A227]">
              CONNECT WITH BROTHERHOOD
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Ikuti dokumentasi perjalanan, video touring, serta pengumuman kegiatan MBI Surabaya di kanal resmi kami:
            </p>

            <div className="flex items-center gap-3">
              <a
                href={CLUB_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-[#121212] border border-white/10 hover:border-pink-500 hover:text-pink-500 flex items-center justify-center text-gray-400 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-[#121212] border border-white/10 hover:border-blue-500 hover:text-blue-500 flex items-center justify-center text-gray-400 transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-[#121212] border border-white/10 hover:border-red-500 hover:text-red-500 flex items-center justify-center text-gray-400 transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-[#121212] border border-white/10 hover:border-emerald-500 hover:text-emerald-500 flex items-center justify-center text-gray-400 transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <div className="text-xs text-[#8A8A8A]">
              <span className="text-white font-bold">{CLUB_INFO.tagline}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <div>
            © 2026 <span className="text-gray-300 font-bold">Motor Besar Indonesia Surabaya</span>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] tracking-widest uppercase text-gray-600">
              ONE BROTHERHOOD. ONE RIDE. ONE SPIRIT.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#121212] hover:bg-[#D60000] text-gray-400 hover:text-white rounded border border-white/10 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
