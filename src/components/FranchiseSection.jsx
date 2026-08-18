import React from 'react';
import { SABUBA_DATA } from '../data/sabubaData';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, ShieldCheck } from 'lucide-react';

export default function FranchiseSection() {
  const benefits = [
    { title: 'Investasi Terjangkau', desc: 'Modal usaha kompetitif dengan BEP cepat dalam hitungan bulan.', icon: DollarSign },
    { title: 'Target Pasar Luas', desc: 'Menu favorit sarapan pagi yang dicari komunitas & keluarga setiap hari.', icon: Users },
    { title: 'Sistem Operasional Mudah', desc: 'SOP terstandarisasi, bahan baku terpusat, & pelatihan tim.', icon: TrendingUp },
    { title: 'Dukungan Pemasaran', desc: 'Promosi media sosial, materi branding, & listing ojek online.', icon: ShieldCheck },
  ];

  return (
    <section id="franchise" className="py-20 bg-red-600 text-white relative overflow-hidden">
      {/* Decorative SVG Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-950 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6">
            <span className="px-3.5 py-1 rounded-full bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider">
              Kemitraan Franchise
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3 leading-tight">
              Buka Usaha Sarapan Bubur Bakar di Kota Anda!
            </h2>
            <p className="text-red-100 text-xs sm:text-sm mt-4 leading-relaxed">
              Bergabunglah menjadi mitra resmi **Bubur Bakar Sabuba**. Dapatkan sistem usaha siap jalan dengan potensi profit konsisten setiap pagi.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                    <Icon className="w-5 h-5 text-red-200 mb-2" />
                    <h4 className="font-extrabold text-sm text-white">{b.title}</h4>
                    <p className="text-xs text-red-100/90 mt-0.5 leading-snug">{b.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <a
                href={`https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=Halo%20Sabuba,%20saya%20tertarik%20dengan%20info%20Kemitraan%20Franchise%20Sabuba`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-red-700 hover:bg-red-50 font-black text-sm shadow-xl transition-all active:scale-95"
              >
                <span>Hubungi Tim Kemitraan WA</span>
                <ArrowRight className="w-4 h-4 text-red-700" />
              </a>
            </div>
          </div>

          {/* Right Column Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="/assets/Konsep/2. Konsep Restaurant.png"
                alt="Franchise Sabuba"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs font-bold text-red-300 uppercase">Outlet Resmi</span>
                  <h3 className="font-extrabold text-lg text-white">Bubur Bakar Sabuba Sidoarjo</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
