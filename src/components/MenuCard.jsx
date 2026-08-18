import React from 'react';
import { Star, Plus, Check, Flame } from 'lucide-react';
import { formatRupiah } from '../data/sabubaData';

export default function MenuCard({ item, onAddToCart, onQuickView }) {
  return (
    <div
      onClick={() => onQuickView && onQuickView(item)}
      className="group bg-white rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-xl border border-slate-100 hover:border-red-200 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Food Image */}
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden mb-3.5 bg-slate-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Badges Overlay */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-slate-800 text-xs font-bold flex items-center gap-1 shadow-sm backdrop-blur-md">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>4.9</span>
          </div>

          {item.isBestSeller && (
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-800 text-white text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
              <Flame className="w-3 h-3" />
              <span>Best Seller</span>
            </div>
          )}

          {item.spicyLevel > 0 && (
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 text-white text-[10px] font-bold backdrop-blur-sm">
              <span>{'🌶️'.repeat(item.spicyLevel)}</span>
            </div>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-red-800 transition-colors leading-snug line-clamp-1">
          {item.name}
        </h3>
        <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed font-normal">
          {item.description}
        </p>

        {/* Included Toppings Preview */}
        {item.toppingsIncluded && item.toppingsIncluded.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {item.toppingsIncluded.slice(0, 3).map((top, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded-full bg-red-50 text-red-900 text-[10px] font-bold border border-red-100">
                {top}
              </span>
            ))}
            {item.toppingsIncluded.length > 3 && (
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-medium">
                +{item.toppingsIncluded.length - 3} lagi
              </span>
            )}
          </div>
        )}
      </div>

      {/* Pricing & Add Action */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 font-semibold uppercase">Harga</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base sm:text-lg font-black text-red-800">
              {formatRupiah(item.promoPrice || item.price)}
            </span>
            {item.promoPrice && (
              <span className="text-xs text-slate-400 line-through font-medium">
                {formatRupiah(item.price)}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(item);
          }}
          className="px-3.5 py-2 rounded-full bg-red-800 hover:bg-red-900 text-white text-xs font-bold shadow-sm flex items-center gap-1 transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Pesan</span>
        </button>
      </div>
    </div>
  );
}
