import React from 'react';
import { SABUBA_DATA } from '../data/sabubaData';
import { ArrowRight, TrendingUp, Users, DollarSign, ShieldCheck, Bike, Sparkles, MapPin, FileText, Download, PieChart, Cpu, CheckCircle2 } from 'lucide-react';

export default function FranchiseSection({ onOpenPitchDeck }) {
  const benefits = [
    { title: 'Mitra Pasif 100%', desc: 'Tanpa perlu pusing operasional, rekrutmen karyawan & belanja bahan. Semua dikelola 100% oleh HQ Sabuba.', icon: Users },
    { title: 'Bagi Hasil 50% : 50%', desc: 'Pembagian 50% Net Profit untuk Mitra dari hasil penjualan harian outlet.', icon: DollarSign },
    { title: 'POS Cloud & AI Analytics', desc: 'Penjualan terpantau real-time 24/7 dari smartphone investor lengkap dengan laporan AI.', icon: Cpu },
    { title: 'Efisiensi Tanpa Sewa Ruko', desc: 'Motor tiga roda custom hemat overhead, BEP super cepat dalam ~5 Bulan!', icon: TrendingUp },
  ];

  const streetFoodFeatures = [
    'Investasi Terjangkau Rp 100.000.000 (Sabuba Classic)',
    '100% Bebas Repot Operasional (Mitra Pasif)',
    'Transparansi Penjualan Online Real-Time 24/7',
    'Est. Balik Modal Cepat (~5.3 - 7.2 Bulan)',
  ];

  return (
    <section id="franchise" className="py-20 bg-gradient-to-br from-[#7F1D1D] via-[#991B1B] to-[#450A0A] text-white relative overflow-hidden">
      {/* Decorative SVG Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-red-950 font-black text-xs uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Peluang Investasi & Kemitraan Strategis 2026</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4 leading-tight">
            Kemitraan Mitra Pasif & Bagi Hasil 50% - 50%
          </h2>

          <p className="text-red-100/90 text-xs sm:text-sm mt-3 leading-relaxed">
            Bergabunglah menjadi mitra owner <strong className="text-amber-300 font-extrabold">Sabuba Classic</strong>. Investasi Rp 100 Juta, nikmati passive income pembagian hasil 50% bersih tanpa repot operasional, dan pantau penjualan harian Anda via online real-time.
          </p>

          {/* Model Status Bar */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-2.5">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-md">
              <CheckCircle2 className="w-3.5 h-3.5" /> Sabuba Classic (Rp 100 Jt) - DI BUKA SEKARANG
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/10 text-red-200 font-bold text-xs border border-white/20">
              Sabuba Container - COMING SOON
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/10 text-red-200 font-bold text-xs border border-white/20">
              Sabuba Resto - COMING SOON
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl font-black text-white mb-2">
              Mengapa Investasi Di Sabuba Classic Sangat Menguntungkan?
            </h3>
            <p className="text-red-100/90 text-xs sm:text-sm leading-relaxed mb-6">
              Menggunakan unit motor tiga roda custom yang sangat fleksibel, bebas sewa ruko mahal, serta didukung ekosistem digital AI POS untuk transparansi omset & keuntungan 100%.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors">
                    <Icon className="w-5 h-5 text-amber-300 mb-2" />
                    <h4 className="font-extrabold text-sm text-white">{b.title}</h4>
                    <p className="text-xs text-red-100/90 mt-0.5 leading-snug">{b.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Specs */}
            <div className="mt-6 p-4 rounded-2xl bg-black/30 border border-white/15">
              <div className="text-xs font-black uppercase text-amber-300 tracking-wider mb-2 flex items-center justify-between">
                <span>Key Investment Highlights:</span>
                <span className="text-[11px] text-emerald-400 font-bold">Verified Real Performance</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {streetFoodFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-red-50 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pitch Deck Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenPitchDeck}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-red-950 font-black text-sm shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <PieChart className="w-4 h-4 text-red-950" />
                <span>Lihat Pitch Deck Interaktif</span>
              </button>

              <button
                onClick={onOpenPitchDeck}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/25 backdrop-blur-md transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>Download Proposal PDF</span>
              </button>
            </div>
          </div>

          {/* Right Column Image & Pitch Deck Callout Card */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group">
              <img
                src="/assets/Konsep/5. Konsep Street Food.jpg"
                alt="Konsep Street Food Sabuba Classic Motor Custom"
                className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-1 rounded-full bg-red-800 text-amber-300 font-extrabold text-[11px] uppercase">
                    Sabuba Classic
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-400 text-red-950 font-extrabold text-[11px] uppercase flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Rp 100.000.000
                  </span>
                </div>
                <h3 className="font-black text-xl text-white">Konsep Street Food Motor Custom</h3>
                <p className="text-xs text-red-100/90 mt-1">
                  Praktis, Fleksibel, Bebas Repot Operasional & Diolah Penuh oleh Pusat!
                </p>
              </div>
            </div>

            {/* Banner Callout for McKinsey Pitch Deck */}
            <div
              onClick={onOpenPitchDeck}
              className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 border border-amber-400/40 cursor-pointer hover:border-amber-400 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-400 text-red-950 font-black">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white group-hover:text-amber-300 transition-colors">
                    Lihat Analisis Pasar & Proyeksi Finansial McKinsey Deck
                  </h4>
                  <p className="text-xs text-slate-300">
                    Analisis TAM/SAM/SOM, laporan keuangan real Jan-Jun 2026, & kalkulator ROI.
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


