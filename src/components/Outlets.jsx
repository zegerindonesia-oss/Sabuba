import React from 'react';
import { SABUBA_DATA } from '../data/sabubaData';
import { MapPin, Clock, ExternalLink, Phone, Check } from 'lucide-react';

export default function Outlets() {
  return (
    <section id="outlet" className="py-20 bg-white text-slate-800 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest text-red-600 uppercase">Lokasi Cabang</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Kunjungi Outlet Sabuba Sidoarjo
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Temukan lokasi terdekat Anda untuk menikmati sarapan bubur bakar claypot hangat.
          </p>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SABUBA_DATA.outlets.map((outlet) => (
            <div
              key={outlet.id}
              className="group bg-slate-50 rounded-3xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 bg-white">
                  <img
                    src={outlet.image}
                    alt={outlet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold shadow-sm flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>{outlet.status}</span>
                  </div>
                </div>

                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                  {outlet.name}
                </h3>
                
                <div className="mt-3 space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{outlet.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-600 shrink-0" />
                    <span className="font-bold text-slate-800">{outlet.hours}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2">
                <a
                  href={outlet.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={`https://wa.me/${outlet.whatsapp}?text=Halo%20Sabuba,%20saya%20mau%20tanya%20info%20cabang%20${encodeURIComponent(outlet.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors"
                  title="Hubungi WhatsApp Outlet"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
