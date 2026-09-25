import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Shield } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll spy for active section highlight
      const sections = ['home', 'tentang', 'nilai', 'kegiatan', 'berita', 'event', 'galeri', 'kontak'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'TENTANG', href: '#tentang' },
    { name: 'KEGIATAN', href: '#kegiatan' },
    { name: 'BERITA', href: '#berita' },
    { name: 'EVENT', href: '#event' },
    { name: 'GALERI', href: '#galeri' },
    { name: 'KONTAK', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 border-b border-white/10 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg bg-black/40 border border-red-600/30 p-1 group-hover:border-red-600 transition-colors">
              <img
                src="/logo.png"
                alt="Motor Besar Indonesia Surabaya Logo"
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_8px_rgba(214,0,0,0.5)]"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-white leading-tight flex items-center gap-1.5">
                MBI <span className="text-[#D60000]">SURABAYA</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#8A8A8A] font-semibold uppercase">
                Motor Besar Indonesia
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-xs xl:text-sm font-semibold tracking-widest transition-all duration-200 relative group ${
                    isActive ? 'text-[#D60000]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#D60000] transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenJoinModal}
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-heading font-bold uppercase tracking-widest text-white bg-[#D60000] hover:bg-[#FF1717] border border-red-500/50 rounded transition-all duration-300 group overflow-hidden shadow-lg shadow-red-900/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Shield className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                JOIN COMMUNITY
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenJoinModal}
              className="px-3 py-1.5 text-[11px] font-heading font-bold text-white bg-[#D60000] rounded uppercase tracking-wider"
            >
              JOIN
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white bg-black/50 border border-white/10 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D60000]" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] bg-[#0B0B0B]/95 backdrop-blur-2xl border-b border-red-900/30 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 text-sm font-heading font-semibold text-gray-200 hover:text-white hover:bg-white/5 rounded border-l-2 border-transparent hover:border-[#D60000] transition-all"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-[#8A8A8A]" />
            </a>
          ))}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3 px-4 text-center font-heading font-bold tracking-widest text-sm text-white bg-[#D60000] hover:bg-[#FF1717] rounded shadow-lg shadow-red-950/50 uppercase flex items-center justify-center gap-2"
            >
              <Shield className="w-4 h-4" />
              JOIN MBI SURABAYA
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
