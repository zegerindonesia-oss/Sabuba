import React from 'react';
import { Flame, Star, ShoppingBag, ArrowRight } from 'lucide-react';
import { SABUBA_DATA, formatRupiah } from '../data/sabubaData';

export default function SignatureSection({ onAddToCart, onQuickView }) {
  const promoItems = SABUBA_DATA.menuItems.filter(i => i.promoPrice);

  return (
    <section className="py-16 bg-red-50/50 text-slate-800 border-y border-red-100/60 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600 text-white font-extrabold text-xs uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>Promo Sarapan Hemat</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Sajian Spesial Sabuba Rp 10.000-an
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
              Nikmati kehangatan bubur bakar claypot, wonton soup, & wonton chili oil dengan harga promo sarapan hemat setiap hari!
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 font-extrabold text-sm text-red-600 hover:text-red-700 transition-colors group"
          >
            <span>Lihat Semua Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Promo Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {promoItems.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => onQuickView && onQuickView(item)}
              className="group bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl border border-red-100 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-black uppercase shadow-sm">
                    Hemat {formatRupiah(item.price - item.promoPrice)}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-slate-800 text-xs font-bold flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>4.9</span>
                  </div>
                </div>

                <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">Harga Promo</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-red-600">
                      {formatRupiah(item.promoPrice)}
                    </span>
                    <span className="text-xs text-slate-400 line-through font-medium">
                      {formatRupiah(item.price)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(item);
                  }}
                  className="px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Tambah</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
