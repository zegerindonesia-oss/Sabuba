import React, { useState, useMemo } from 'react';
import { Search, Flame, Filter, Plus } from 'lucide-react';
import { SABUBA_DATA, formatRupiah } from '../data/sabubaData';
import MenuCard from './MenuCard';

export default function MenuShowcase({
  activeCategory,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  onAddToCart,
  onQuickView
}) {
  const [selectedSpicyFilter, setSelectedSpicyFilter] = useState('all');

  const filteredItems = useMemo(() => {
    return SABUBA_DATA.menuItems.filter((item) => {
      // Category match
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      // Search match
      const matchesSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Spicy match
      const matchesSpicy =
        selectedSpicyFilter === 'all' ||
        (selectedSpicyFilter === 'spicy' && item.spicyLevel > 0) ||
        (selectedSpicyFilter === 'non-spicy' && item.spicyLevel === 0);

      return matchesCategory && matchesSearch && matchesSpicy;
    });
  }, [activeCategory, searchQuery, selectedSpicyFilter]);

  return (
    <section id="menu" className="py-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black tracking-widest text-red-600 uppercase">Daftar Menu</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
            Menu Sarapan Bubur Bakar & Wonton
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Pilih sajian lezat dimasak hangat claypot dengan aneka ekstra topping pilihan.
          </p>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {SABUBA_DATA.menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Input & Spicy Filter */}
          <div className="flex items-center gap-2 w-full md:w-72">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari menu (ex: Wonton, Claypot)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-800 placeholder-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-200">
            <p className="text-base font-bold text-slate-700">Menu tidak ditemukan</p>
            <p className="text-xs text-slate-500 mt-1">Coba gunakan kata kunci lain atau pilih kategori Semua Menu.</p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-red-600 text-white text-xs font-bold shadow-sm"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Extra Toppings Section */}
        {activeCategory === 'topping' || activeCategory === 'all' ? (
          <div className="mt-16 pt-12 border-t border-slate-100">
            <div className="max-w-2xl mb-6">
              <span className="text-xs font-black tracking-widest text-red-600 uppercase">Ekstra Topping</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                Pilihan Tambahan Topping Lezat
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Tambahkan variasi topping favorit Anda untuk melengkapi kelezatan sarapan Sabuba.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SABUBA_DATA.extraToppings.map((topping) => (
                <div
                  key={topping.id}
                  className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 flex items-center justify-between hover:border-red-300 transition-colors"
                >
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">{topping.name}</h4>
                    <span className="text-xs font-bold text-red-600 mt-0.5 block">
                      +{formatRupiah(topping.price)}
                    </span>
                  </div>
                  <button
                    onClick={() => onAddToCart({ ...topping, category: 'topping', isToppingOnly: true })}
                    className="p-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-sm"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null}

      </div>
    </section>
  );
}
