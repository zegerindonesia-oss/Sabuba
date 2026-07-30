import React, { useState } from 'react';
import { Sparkles, TrendingUp, ShieldCheck, DollarSign, Send, Award, PieChart, Users, Laptop } from 'lucide-react';
import { SABUBA_DATA } from '../data/sabubaData';

export default function FranchiseSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    concept: 'Konsep Tenda Outdoor (Autopilot)',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo Admin Kemitraan Sabuba, saya tertarik bergabung menjadi Mitra Pasif (Autopilot) Sabuba!%0A%0A*Nama:* ${encodeURIComponent(formData.name)}%0A*No WA:* ${encodeURIComponent(formData.phone)}%0A*Kota Rencana:* ${encodeURIComponent(formData.city)}%0A*Pilihan Konsep:* ${encodeURIComponent(formData.concept)}%0A*Catatan:* ${encodeURIComponent(formData.notes || '-')}`;
    
    window.open(`https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="franchise" className="py-20 bg-sabuba-dark text-white relative overflow-hidden">
      
      {/* Flame Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sabuba-red/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Business Benefits */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 bg-sabuba-gold/20 border border-sabuba-gold/40 px-4 py-1.5 rounded-full text-xs font-bold text-sabuba-gold uppercase tracking-wider mb-4">
                <PieChart className="w-4 h-4" />
                <span>Kemitraan Pasif Autopilot</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
                Peluang Kemitraan <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sabuba-gold via-sabuba-amber to-sabuba-red">
                  100% Pasif & Autopilot
                </span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed">
                Tanpa perlu repot mengurus operasional harian! Seluruh manajemen outlet dari rekrutmen staf, rasa hidangan, hingga kebersihan dikelola secara **profesional oleh tim berpengalaman F&B lebih dari 5 tahun**.
              </p>
            </div>

            {/* Passive Model Highlights */}
            <div className="space-y-4">
              
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 items-start">
                <div className="p-3 bg-sabuba-red/30 rounded-xl border border-sabuba-red/50 text-sabuba-gold">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">Operasional Full Di-Handle Pusat</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    Seluruh teknis outlet dikelola oleh profesional berpengalaman F&B &gt;5 tahun. Standar mutu, rasa, dan servis selalu terjaga tinggi secara konsisten.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 items-start">
                <div className="p-3 bg-sabuba-amber/30 rounded-xl border border-sabuba-amber/50 text-sabuba-amber">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">Pantau Penjualan via Sistem Online</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    Mitra tidak perlu standby di lokasi. Cukup pantau laporan omset penjualan harian & bulanan yang transparan langsung melalui aplikasi sistem yang disediakan.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 items-start">
                <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/40 text-emerald-400">
                  <PieChart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">Bagi Hasil Rutin & Menguntungkan</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    Nikmati pasif income rutin dari omset sarapan pagi yang tinggi dan perputaran modal yang cepat.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-b from-sabuba-carddark to-sabuba-dark p-8 rounded-3xl border-2 border-sabuba-red/30 shadow-2xl relative text-left">
              
              <div className="mb-6">
                <div className="inline-block bg-sabuba-red/20 text-sabuba-amber text-[11px] font-bold px-3 py-1 rounded-md mb-2">
                  MITRA TERBATAS PER KOTA
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  Formulir Konsultasi Kemitraan Pasif
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  Isi data Anda di bawah untuk menerima proposal kemitraan pasif (autopilot) & proyeksi bagi hasil via WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama Anda..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sabuba-amber"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                      No. WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0813xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sabuba-amber"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                      Kota Rencana Outlet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Kota Anda..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sabuba-amber"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Minat Konsep Kemitraan Autopilot *
                  </label>
                  <select
                    value={formData.concept}
                    onChange={(e) => setFormData({ ...formData, concept: e.target.value })}
                    className="w-full bg-sabuba-dark border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sabuba-amber"
                  >
                    <option value="Konsep Tenda Outdoor (Autopilot)">Konsep Tenda Outdoor (Autopilot)</option>
                    <option value="Konsep Compact Booth (Autopilot)">Konsep Compact Booth (Autopilot)</option>
                    <option value="Konsep Modern Restaurant (Autopilot)">Konsep Modern Restaurant (Autopilot)</option>
                    <option value="Kolaborasi Zeger! x Sabuba (Autopilot)">Kolaborasi Zeger! Coffee x Sabuba (Autopilot)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Pesan / Pertanyaan Tambahan
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Contoh: Berminat investasi pasif di area Sidoarjo..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sabuba-amber resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sabuba-red via-sabuba-darkred to-sabuba-red hover:from-sabuba-amber hover:to-sabuba-red text-white py-4 rounded-xl font-heading font-extrabold text-base shadow-flame hover:shadow-glow transition-all duration-300 active:scale-95"
                >
                  <Send className="w-5 h-5" />
                  <span>Kirim via WhatsApp Admin (+6281359180156)</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
