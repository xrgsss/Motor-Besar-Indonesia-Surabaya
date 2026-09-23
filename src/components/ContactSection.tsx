import React, { useState } from 'react';
import { CLUB_INFO } from '../data/communityData';
import { MapPin, Mail, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    motorcycleModel: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="kontak" className="relative py-24 bg-[#0B0B0B] text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D60000]" />
              <span className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-[#D60000]">
                COMMUNICATION & PARTNERSHIP
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight">
              GET IN <span className="red-gradient-text">TOUCH</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Hubungi sekretariat resmi Motor Besar Indonesia Surabaya untuk keperluan pendaftaran keanggotaan, kemitraan event, media, atau informasi seputar klub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Contact Information Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#050505] border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-950/20 rounded-bl-full pointer-events-none" />

            <div>
              {/* Logo Header */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="/logo.png"
                  alt="MBI Crest"
                  className="w-16 h-16 object-contain filter drop-shadow-[0_0_10px_rgba(214,0,0,0.5)]"
                />
                <div>
                  <h3 className="font-heading font-bold text-xl text-white uppercase">{CLUB_INFO.shortName}</h3>
                  <p className="text-xs text-[#8A8A8A] font-mono uppercase">{CLUB_INFO.name}</p>
                </div>
              </div>

              <div className="h-0.5 w-full bg-white/10 mb-8" />

              {/* Contact Details List */}
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[#121212] border border-white/10 flex items-center justify-center text-[#D60000] shrink-0 group-hover:border-red-600/50 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-heading font-bold text-gray-400 uppercase tracking-wider mb-1">
                      SEKRETARIAT UTAMA
                    </div>
                    <p className="text-sm font-semibold text-gray-200 leading-snug">
                      {CLUB_INFO.address}
                    </p>
                    <span className="text-xs text-[#8A8A8A]">{CLUB_INFO.city}, {CLUB_INFO.country}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[#121212] border border-white/10 flex items-center justify-center text-[#C9A227] shrink-0 group-hover:border-[#C9A227]/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-heading font-bold text-gray-400 uppercase tracking-wider mb-1">
                      EMAIL KORESPONDENSI
                    </div>
                    <a href={`mailto:${CLUB_INFO.email}`} className="text-sm font-semibold text-gray-200 hover:text-[#C9A227] transition-colors">
                      {CLUB_INFO.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[#121212] border border-white/10 flex items-center justify-center text-[#25D366] shrink-0 group-hover:border-emerald-600/50 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-heading font-bold text-gray-400 uppercase tracking-wider mb-1">
                      WHATSAPP HOTLINE
                    </div>
                    <a href={CLUB_INFO.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-200 hover:text-emerald-400 transition-colors">
                      {CLUB_INFO.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links Box */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="text-xs font-heading font-bold text-gray-400 uppercase tracking-widest mb-4">
                OFFICIAL SOCIAL MEDIA
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={CLUB_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-[#121212] border border-white/10 hover:border-pink-500/60 hover:bg-pink-950/30 flex items-center justify-center text-gray-300 hover:text-pink-500 transition-all"
                  aria-label="Instagram MBI Surabaya"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href={CLUB_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-[#121212] border border-white/10 hover:border-blue-500/60 hover:bg-blue-950/30 flex items-center justify-center text-gray-300 hover:text-blue-500 transition-all"
                  aria-label="Facebook MBI Surabaya"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href={CLUB_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-[#121212] border border-white/10 hover:border-red-500/60 hover:bg-red-950/30 flex items-center justify-center text-gray-300 hover:text-red-500 transition-all"
                  aria-label="YouTube MBI Surabaya"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#050505] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl">
            <h3 className="text-2xl font-heading font-bold uppercase text-white mb-2">
              KIRIM PESAN ATAU INQUIRY
            </h3>
            <p className="text-xs text-gray-400 mb-8">
              Isi formulir di bawah ini. Tim pengurus MBI Surabaya akan merespons pesan Anda paling lambat 1x24 jam.
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-emerald-950/30 border border-emerald-500/40 rounded-xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-heading font-bold text-white uppercase">Pesan Anda Berhasil Terkirim!</h4>
                <p className="text-xs text-gray-300">
                  Terima kasih telah menghubungi MBI Surabaya. Sekretariat kami akan segera menghubungi Anda melalui surel atau nomor telepon yang tertera.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', motorcycleModel: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-6 py-2 bg-emerald-600 text-white font-heading font-bold text-xs uppercase rounded"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-2">
                      NAMA LENGKAP *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama lengkap Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D60000] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-2">
                      ALAMAT EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D60000] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-2">
                      NOMOR TELEPON / WA
                    </label>
                    <input
                      type="tel"
                      placeholder="0812-xxxx-xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D60000] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-2">
                      TIPE / MERK MOTOR (OPSIONAL)
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Harley Davidson, BMW GS, Ducati, dll"
                      value={formData.motorcycleModel}
                      onChange={(e) => setFormData({ ...formData, motorcycleModel: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D60000] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-2">
                    SUBJEK PESAN
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#D60000] transition-colors"
                  >
                    <option value="General Inquiry">General Inquiry / Pertanyaan Umum</option>
                    <option value="Membership">Informasi Pendaftaran Keanggotaan MBI</option>
                    <option value="Partnership">Partnership & Media Sponsor Event</option>
                    <option value="Social Event">Undangan Event / Bakti Sosial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-2">
                    ISI PESAN *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan detail pertanyaan atau maksud pesan Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D60000] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#D60000] hover:bg-[#FF1717] text-white font-heading font-bold text-sm tracking-[0.2em] uppercase rounded border border-red-500/50 shadow-xl shadow-red-950/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span>KIRIM PESAN KE MBI SURABAYA</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
