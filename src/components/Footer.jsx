import React from 'react';
import SabubaLogo from './SabubaLogo';
import { SABUBA_DATA } from '../data/sabubaData';
import { Clock, MapPin, Phone, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 border-t border-red-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <SabubaLogo className="h-10" variant="dark" />
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              {SABUBA_DATA.brand.tagline}. Diolah dari bahan berkualitas segar, 100% Halal, dan disajikan hangat dalam claypot khas.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-100">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>{SABUBA_DATA.brand.halalCert}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-4">Navigasi Utama</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <a href="#hero" className="hover:text-red-600 transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-red-600 transition-colors">Daftar Menu</a>
              </li>
              <li>
                <a href="#konsep" className="hover:text-red-600 transition-colors">Konsep Outlet</a>
              </li>
              <li>
                <a href="#outlet" className="hover:text-red-600 transition-colors">Lokasi Cabang Sidoarjo</a>
              </li>
              <li>
                <a href="#franchise" className="hover:text-red-600 transition-colors">Kemitraan Franchise</a>
              </li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-4">Jam Operasional & Kontak</h4>
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <Clock className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-800">Jam Buka Sarapan Pagi:</span>
                <p>{SABUBA_DATA.brand.operatingHours}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <Phone className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-800">WhatsApp Resmi Sabuba:</span>
                <p>+{SABUBA_DATA.brand.whatsapp}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-800">Area Layanan Utama:</span>
                <p>Sidoarjo & Sekitarnya (Cabang A.Yani, RSUD, & Perum Kemiri Indah)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {SABUBA_DATA.brand.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600 inline" />
            <span>untuk Komunitas Sarapan Pagi</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
