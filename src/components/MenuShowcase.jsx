import React, { useState } from 'react';
import { Flame, Plus, Check, Star, Sparkles, Filter, Info, Award } from 'lucide-react';
import { SABUBA_DATA } from '../data/sabubaData';

export default function MenuShowcase({ onSelectCustomizer, onAddToCartDirect }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? SABUBA_DATA.menuItems
    : SABUBA_DATA.menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-sabuba-creambg relative overflow-hidden">
      
      {/* Decorative Warm Background Bubbles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sabuba-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sabuba-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-sabuba-red/10 border border-sabuba-red/30 px-4 py-1.5 rounded-full text-xs font-extrabold text-sabuba-red uppercase tracking-wider">
            <Flame className="w-4 h-4 fill-sabuba-red" />
            <span>Pilihan Sarapan Favorit</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-sabuba-dark">
            Menu Spesial <span className="text-sabuba-red">Sabuba</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Semua hidangan disajikan hangat, berkualitas tinggi, dan menggunakan bahan-bahan halal segar yang menggugah selera pagi Anda.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {SABUBA_DATA.menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-heading font-bold text-sm sm:text-base transition-all duration-300 transform active:scale-95 ${
                  isActive
                    ? 'bg-sabuba-red text-white shadow-flame scale-105'
                    : 'bg-white text-gray-700 hover:bg-sabuba-red/10 border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
            >
              
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Best Seller Badge */}
                {item.isBestSeller && (
                  <div className="absolute top-3 left-3 bg-sabuba-red text-white text-xs font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-sabuba-gold text-sabuba-gold" />
                    <span>FAVORIT</span>
                  </div>
                )}

                {/* Spicy Level Indicator */}
                {item.spicyLevel > 0 && (
                  <div className="absolute top-3 right-3 bg-sabuba-dark/90 text-sabuba-amber text-xs font-extrabold px-2.5 py-1 rounded-md backdrop-blur-sm border border-sabuba-amber/40 flex items-center gap-1">
                    {'🌶️'.repeat(item.spicyLevel)}
                  </div>
                )}

                {/* Promo Price Tag Overlay */}
                <div className="absolute bottom-3 right-3 bg-sabuba-dark/90 backdrop-blur-md px-3 py-1 rounded-lg border border-sabuba-gold/40 text-right">
                  <span className="text-[10px] text-gray-400 line-through block">
                    Rp {item.price.toLocaleString('id-ID')}
                  </span>
                  <span className="text-sabuba-gold font-extrabold text-base">
                    Rp {item.promoPrice.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-sabuba-dark group-hover:text-sabuba-red transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Toppings Included Pills */}
                {item.toppingsIncluded && (
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Kelengkapan Topping:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.toppingsIncluded.map((top, idx) => (
                        <span
                          key={idx}
                          className="bg-sabuba-creambg text-sabuba-dark text-[11px] font-medium px-2 py-0.5 rounded border border-sabuba-red/10"
                        >
                          {top}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Card Action */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-gray-500 font-medium">Harga Promo</span>
                    <p className="text-sabuba-red font-black text-xl font-heading">
                      Rp {item.promoPrice.toLocaleString('id-ID')}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectCustomizer(item)}
                    className="flex-1 flex items-center justify-center gap-2 bg-sabuba-dark hover:bg-sabuba-red text-white py-2.5 px-4 rounded-xl font-heading font-bold text-sm shadow transition-all duration-300 active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Pesan / Kustom</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Extra Toppings Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-sabuba-red/20 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6 border-b border-gray-100 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-sabuba-red text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Tambah Topping Favorit Anda</span>
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-sabuba-dark mt-1">
                Ekstra Topping Melimpah
              </h3>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              Sesuaikan mangkuk bubur bakar Sabuba Anda dengan telur ekstra leleh, pangsit goreng ganda, atau siraman chili oil lebih pedas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SABUBA_DATA.extraToppings.map((top) => (
              <div
                key={top.id}
                className="bg-sabuba-creambg p-4 rounded-xl border border-sabuba-red/10 text-center hover:border-sabuba-red/40 transition-colors flex flex-col justify-between"
              >
                <p className="font-heading font-bold text-sm text-sabuba-dark">{top.name}</p>
                <p className="text-sabuba-red font-extrabold text-sm mt-2">
                  +Rp {top.price.toLocaleString('id-ID')}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
