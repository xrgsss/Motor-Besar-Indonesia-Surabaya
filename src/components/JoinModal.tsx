import React, { useState } from 'react';
import { X, Shield, CheckCircle2, User, Bike } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    nickname: '',
    phone: '',
    email: '',
    city: 'Surabaya',
    bikeBrand: '',
    bikeModel: '',
    engineCc: '500cc - 1000cc',
    experienceYears: '1-3 Tahun',
    motivation: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0B0B0B] border border-red-600/40 rounded-2xl shadow-2xl shadow-red-950/50 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#050505] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="MBI Logo"
              className="w-10 h-10 object-contain filter drop-shadow-[0_0_8px_rgba(214,0,0,0.5)]"
            />
            <div>
              <h3 className="font-heading font-extrabold text-xl text-white uppercase tracking-wider">
                JOIN <span className="text-[#D60000]">MBI SURABAYA</span>
              </h3>
              <p className="text-[10px] text-gray-400 font-mono uppercase">Formulir Pendaftaran Prospective Member</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-heading font-bold text-white uppercase">
                PENDAFTARAN BERHASIL DITERIMA!
              </h4>
              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Terima kasih <span className="text-white font-bold">{form.fullName}</span>. Data pendaftaran keanggotaan Anda telah tercatat di sistem Motor Besar Indonesia Surabaya.
              </p>
              <div className="p-4 bg-[#121212] border border-white/10 rounded-lg max-w-md mx-auto text-left text-xs space-y-2 text-gray-400">
                <div className="font-heading font-bold text-white uppercase">LANGKAH SELANJUTNYA:</div>
                <p>1. Divisi Keanggotaan MBI Surabaya akan memverifikasi kelengkapan dokumen melalui WhatsApp ({form.phone}).</p>
                <p>2. Anda akan diundang dalam sesi Kopdar Wajib pengenalan calon member.</p>
              </div>
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#D60000] hover:bg-[#FF1717] text-white font-heading font-bold text-xs uppercase rounded tracking-widest shadow-lg"
              >
                TUTUP FORMULIR
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-4 bg-red-950/20 border border-red-900/40 rounded-lg flex items-center gap-3 text-xs text-gray-300">
                <Shield className="w-5 h-5 text-[#D60000] shrink-0" />
                <span>Pendaftaran terbuka bagi pemilik & pengendaran motor besar (kapasitas mesin &ge; 400cc / 500cc) yang berdomisili di Surabaya & sekitarnya.</span>
              </div>

              {/* Personal Info */}
              <div>
                <h5 className="text-xs font-heading font-bold text-[#C9A227] uppercase tracking-widest mb-3 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#C9A227]" />
                  DATA PRIBADI
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-gray-300 mb-1">
                      NAMA LENGKAP *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Sesuai KTP"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D60000]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-gray-300 mb-1">
                      NAMA PANGGILAN / ALIAS
                    </label>
                    <input
                      type="text"
                      placeholder="Panggilan akrab"
                      value={form.nickname}
                      onChange={(e) => setForm({ ...form, nickname: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D60000]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-gray-300 mb-1">
                      NOMOR WHATSAPP *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-xxxx-xxxx"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D60000]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-gray-300 mb-1">
                      EMAIL AKTIF *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D60000]"
                    />
                  </div>
                </div>
              </div>

              {/* Motorcycle Info */}
              <div>
                <h5 className="text-xs font-heading font-bold text-[#C9A227] uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Bike className="w-4 h-4 text-[#C9A227]" />
                  SPESIFIKASI KENDARAAN (MOTOR BESAR)
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-gray-300 mb-1">
                      MERK / BRAND *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Harley Davidson, BMW, Ducati, Triumph, dll"
                      value={form.bikeBrand}
                      onChange={(e) => setForm({ ...form, bikeBrand: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D60000]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-gray-300 mb-1">
                      TIPE / MODEL & TAHUN
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Street Glide 2022 / R1250GS 2023"
                      value={form.bikeModel}
                      onChange={(e) => setForm({ ...form, bikeModel: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D60000]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-gray-300 mb-1">
                      KAPASITAS MESIN (CC)
                    </label>
                    <select
                      value={form.engineCc}
                      onChange={(e) => setForm({ ...form, engineCc: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D60000]"
                    >
                      <option value="400cc - 600cc">400cc - 600cc</option>
                      <option value="600cc - 1000cc">600cc - 1000cc</option>
                      <option value="Above 1000cc">Di atas 1000cc</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-gray-300 mb-1">
                      PENGALAMAN RIDING
                    </label>
                    <select
                      value={form.experienceYears}
                      onChange={(e) => setForm({ ...form, experienceYears: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D60000]"
                    >
                      <option value="Kurang dari 1 Tahun">&lt; 1 Tahun</option>
                      <option value="1 - 3 Tahun">1 - 3 Tahun</option>
                      <option value="3 - 5 Tahun">3 - 5 Tahun</option>
                      <option value="Di atas 5 Tahun">&gt; 5 Tahun</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4 border-t border-white/10">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#D60000] hover:bg-[#FF1717] text-white font-heading font-bold text-sm tracking-[0.2em] uppercase rounded border border-red-500/50 shadow-xl shadow-red-950/60 transition-all flex items-center justify-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  <span>KIRIM PERMOHONAN BERGABUNG</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
