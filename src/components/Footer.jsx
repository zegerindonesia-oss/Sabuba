import React from 'react';
import { Flame, MapPin, Clock, Phone, Instagram, Facebook, Award } from 'lucide-react';
import { SABUBA_DATA } from '../data/sabubaData';

export default function Footer() {
  return (
    <footer className="bg-sabuba-dark text-white border-t border-sabuba-red/30 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/Konsep/Logo (1).png"
                alt="Logo Sabuba"
                className="w-12 h-12 rounded-full border-2 border-sabuba-gold/60 object-cover"
              />
              <div>
                <span className="font-heading font-black text-2xl tracking-wider text-white">
                  SABUBA
                </span>
                <p className="text-xs text-sabuba-amber font-semibold">
                  SARAPAN BUBUR BAKAR • WONTON • LAKSA
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Sensasi kuliner sarapan pagi khas claypot tanah liat beraroma wangi smoky dengan topping melimpah ganda & siraman chili oil harum khas Sabuba.
            </p>

            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-400">
              <Award className="w-4 h-4" />
              <span>100% Produk Halal & Higienis</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="font-heading font-bold text-white text-base mb-4 border-b border-sabuba-red/40 pb-2 inline-block">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#hero" className="hover:text-sabuba-gold transition-colors">Beranda Utama</a></li>
              <li><a href="#menu" className="hover:text-sabuba-gold transition-colors">Daftar Menu Spesial</a></li>
              <li><a href="#why-us" className="hover:text-sabuba-gold transition-colors">Keunggulan Claypot</a></li>
              <li><a href="#concepts" className="hover:text-sabuba-gold transition-colors">Galeri Konsep Outlet</a></li>
              <li><a href="#franchise" className="hover:text-sabuba-gold transition-colors">Peluang Kemitraan Usaha</a></li>
              <li><a href="#outlets" className="hover:text-sabuba-gold transition-colors">Lokasi Outlets</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-4 text-xs sm:text-sm">
            <h4 className="font-heading font-bold text-white text-base mb-4 border-b border-sabuba-red/40 pb-2 inline-block">
              Operasional & Layanan
            </h4>

            <div className="flex items-start gap-3 text-gray-300">
              <Clock className="w-5 h-5 text-sabuba-amber flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Jam Operasional Sarapan:</p>
                <p className="text-gray-400">Setiap Hari: 06.00 - 11.00 WIB (Sampai Habis)</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-sabuba-amber flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Layanan Admin & Kemitraan:</p>
                <p className="text-gray-400">+62 812-3456-7890 (WhatsApp Direct)</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-sabuba-red flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-sabuba-red flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Bubur Bakar Sabuba. Hak Cipta Dilindungi Undang-Undang.</p>
          <p>Dibuat dengan UI Motion & Desain Profesional untuk Bubur Bakar Sabuba.</p>
        </div>

      </div>
    </footer>
  );
}
