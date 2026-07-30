import React, { useState } from 'react';
import { Sparkles, TrendingUp, ShieldCheck, DollarSign, Send, PhoneCall, Award } from 'lucide-react';
import { SABUBA_DATA } from '../data/sabubaData';

export default function FranchiseSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    concept: 'Konsep Tenda Outdoor',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo Admin Kemitraan Sabuba, saya tertarik bergabung menjadi Mitra Franchise Sabuba!%0A%0A*Nama:* ${encodeURIComponent(formData.name)}%0A*No WA:* ${encodeURIComponent(formData.phone)}%0A*Kota/Lokasi Rencana:* ${encodeURIComponent(formData.city)}%0A*Pilihan Konsep:* ${encodeURIComponent(formData.concept)}%0A*Catatan:* ${encodeURIComponent(formData.notes || '-')}`;
    
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
                <TrendingUp className="w-4 h-4" />
                <span>Peluang Usaha Kuliner Sarapan</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
                Bergabung Jadi Mitra <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sabuba-gold via-sabuba-amber to-sabuba-red">
                  Bubur Bakar Sabuba
                </span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed">
                Pasar sarapan pagi adalah ceruk bisnis kuliner yang selalu ramai dengan perputaran modal cepat (BEP relatif singkat) dan margin keuntungan menarik.
              </p>
            </div>

            {/* Franchise Key Highlights */}
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 items-start">
                <div className="p-3 bg-sabuba-red/30 rounded-xl border border-sabuba-red/50 text-sabuba-gold">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">Investasi Terjangkau & Tanpa Royalty Fee</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">100% Keuntungan penjualan harian milik Anda penuh tanpa potongan biaya royalti bulanan.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 items-start">
                <div className="p-3 bg-sabuba-amber/30 rounded-xl border border-sabuba-amber/50 text-sabuba-amber">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">SOP Simpel & Pelatihan Lengkap</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">Tim Sabuba memberikan pendampingan resep, pasokan bumbu standar claypot, hingga strategi pemasaran outlet.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 items-start">
                <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/40 text-emerald-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">Proyeksi BEP Cepat (3-6 Bulan)</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">Siklus jam kerja efisien (pagi jam 06.00 - 11.00 WIB) memungkinkan biaya operasional sangat hemat.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-b from-sabuba-carddark to-sabuba-dark p-8 rounded-3xl border-2 border-sabuba-red/30 shadow-2xl relative text-left">
              
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  Formulir Konsultasi Kemitraan
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  Isi data singkat Anda di bawah untuk menerima proposal kemitraan resmi & analisa BEP via WhatsApp.
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
                      placeholder="0812xxxxxxx"
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
                    Minat Konsep Kemitraan *
                  </label>
                  <select
                    value={formData.concept}
                    onChange={(e) => setFormData({ ...formData, concept: e.target.value })}
                    className="w-full bg-sabuba-dark border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sabuba-amber"
                  >
                    <option value="Konsep Tenda Outdoor">Konsep Tenda Outdoor (Street Food)</option>
                    <option value="Konsep Compact Booth">Konsep Compact Booth (Ruko/Mall)</option>
                    <option value="Konsep Modern Restaurant">Konsep Modern Restaurant (Dine-In)</option>
                    <option value="Kolaborasi Zeger! x Sabuba">Kolaborasi Zeger! Coffee x Sabuba</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Pesan / PertanyaanTambahan
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Contoh: Lokasi usaha di depan perkantoran..."
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
                  <span>Kirim via WhatsApp Admin</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
