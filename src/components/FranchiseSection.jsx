import React from 'react';
import { SABUBA_DATA } from '../data/sabubaData';
import { ArrowRight, TrendingUp, Users, DollarSign, ShieldCheck, Bike, Sparkles, MapPin, Clock } from 'lucide-react';

export default function FranchiseSection() {
  const benefits = [
    { title: 'Bebas / Hemat Biaya Sewa', desc: 'Konsep Street Food motor custom tidak perlu sewa ruko mahal, BEP jauh lebih cepat.', icon: DollarSign },
    { title: 'Mobilitas & Fleksibilitas Tinggi', desc: 'Bisa jualan di mana saja: pinggir jalan, area kantor, event, hingga panggilan acara.', icon: Bike },
    { title: 'Sistem Operasional Mudah', desc: 'SOP terstandarisasi, bahan baku terpusat, & pelatihan tim lengkap dari pusat.', icon: TrendingUp },
    { title: 'Dukungan Pemasaran Full', desc: 'Materi branding, promosi media sosial, & listing ojek online terintegrasi.', icon: ShieldCheck },
  ];

  const streetFoodFeatures = [
    'Rangka kuat, ringan & material anti karat',
    'Siap jualan dalam hitungan menit',
    'Irit bahan bakar & lincah di jalan sempit',
    'Desain kompak, bersih & sangat fungsional',
  ];

  return (
    <section id="franchise" className="py-20 bg-gradient-to-br from-[#7F1D1D] via-[#991B1B] to-[#450A0A] text-white relative overflow-hidden">
      {/* Decorative SVG Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-red-950 font-black text-xs uppercase tracking-wider shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kemitraan Street Food Kompak</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3 leading-tight">
              Buka Usaha Sabuba Classic Di Mana Saja!
            </h2>
            <p className="text-red-100/90 text-xs sm:text-sm mt-4 leading-relaxed">
              Bergabunglah menjadi mitra **Sabuba Classic**. Menggunakan motor tiga roda custom yang praktis, fleksibel buka lokasi baru kapan pun, melayani panggilan acara/catering, dan menekan biaya sewa lokasi hingga maksimal!
            </p>

            {/* Benefits Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                    <Icon className="w-5 h-5 text-amber-300 mb-2" />
                    <h4 className="font-extrabold text-sm text-white">{b.title}</h4>
                    <p className="text-xs text-red-100/90 mt-0.5 leading-snug">{b.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Specs */}
            <div className="mt-6 p-4 rounded-2xl bg-black/20 border border-white/10">
              <div className="text-xs font-black uppercase text-amber-300 tracking-wider mb-2">
                Keunggulan Konsep Street Food Motor Custom:
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

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=Halo%20Sabuba,%20saya%20tertarik%20dengan%20info%20Kemitraan%20Street%20Food%20Sabuba%20Classic`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-red-950 font-black text-sm shadow-xl transition-all active:scale-95"
              >
                <span>Konsultasi Kemitraan Street Food</span>
                <ArrowRight className="w-4 h-4 text-red-950" />
              </a>
            </div>
          </div>

          {/* Right Column Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group">
              <img
                src="/assets/Konsep/5. Konsep Street Food.jpg"
                alt="Konsep Street Food Sabuba Classic Motor Custom"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-1 rounded-full bg-red-800 text-amber-300 font-extrabold text-[11px] uppercase">
                    Sabuba Classic
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-400 text-red-950 font-extrabold text-[11px] uppercase flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Pindah Lokasi Mudah
                  </span>
                </div>
                <h3 className="font-black text-xl text-white">Konsep Street Food Motor Custom</h3>
                <p className="text-xs text-red-100/90 mt-1">
                  Kompak, Praktis, Siap Jualan Di Mana Saja & Bebas Biaya Sewa Ruko!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

