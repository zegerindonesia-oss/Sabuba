import React from 'react';
import { MapPin, Clock, ExternalLink, MessageCircle, Store } from 'lucide-react';
import { SABUBA_DATA } from '../data/sabubaData';

export default function Outlets() {
  return (
    <section id="outlets" className="py-20 bg-sabuba-creambg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-sabuba-red/10 border border-sabuba-red/30 px-4 py-1.5 rounded-full text-xs font-extrabold text-sabuba-red uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Kunjungi Outlet Terdekat</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-sabuba-dark">
            Lokasi & Cabang <span className="text-sabuba-red">Sabuba</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Temukan kehangatan mangkuk bubur bakar claypot Sabuba langsung di lokasi terdekat Anda setiap pagi!
          </p>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SABUBA_DATA.outlets.map((out) => (
            <div
              key={out.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              
              {/* Outlet Real Image */}
              <div className="relative h-56 overflow-hidden bg-sabuba-dark">
                <img
                  src={out.image}
                  alt={out.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sabuba-dark/90 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>{out.status}</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-left">
                  <span className="text-xs text-sabuba-gold font-bold uppercase tracking-wider">
                    {out.city}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white">
                    {out.name}
                  </h3>
                </div>
              </div>

              {/* Details Body */}
              <div className="p-6 space-y-4 text-left flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-gray-700 text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-sabuba-red flex-shrink-0 mt-0.5" />
                    <span>{out.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-gray-700 text-xs sm:text-sm">
                    <Clock className="w-4 h-4 text-sabuba-amber flex-shrink-0" />
                    <span>Jam Buka: <strong>{out.hours}</strong></span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
                  <a
                    href={out.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-sabuba-creambg hover:bg-sabuba-red hover:text-white text-sabuba-dark py-2.5 px-3 rounded-xl font-heading font-bold text-xs border border-sabuba-red/20 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Petunjuk Maps</span>
                  </a>

                  <a
                    href={`https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=Halo%20Admin%20Sabuba,%20mau%20tanya%20menu%20dan%20stok%20di%20${encodeURIComponent(out.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-3 rounded-xl font-heading font-bold text-xs shadow transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WA Outlet</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
