import React from 'react';
import { SABUBA_DATA } from '../data/sabubaData';
import { Flame, Utensils, Coffee, PlusCircle } from 'lucide-react';

export default function CategoryGrid({ activeCategory, onSelectCategory }) {
  const categories = [
    {
      id: 'bubur',
      name: 'Bubur Bakar Claypot',
      desc: 'Gurih smoky tanah liat',
      icon: Flame,
      count: SABUBA_DATA.menuItems.filter(i => i.category === 'bubur').length,
      image: '/assets/Foto Menu (1).png',
      color: 'from-red-600 to-rose-700'
    },
    {
      id: 'wonton',
      name: 'Wonton & Laksa',
      desc: 'Pedes gurih & santan rempah',
      icon: Utensils,
      count: SABUBA_DATA.menuItems.filter(i => i.category === 'wonton').length,
      image: '/assets/Foto Menu (6).png',
      color: 'from-rose-600 to-red-800'
    },
    {
      id: 'zeger',
      name: 'Paket Combo Zeger!',
      desc: 'Bubur Bakar + Kopi Susu Aren',
      icon: Coffee,
      count: SABUBA_DATA.menuItems.filter(i => i.category === 'zeger').length,
      image: '/assets/Konsep/4. Trial Zeger X Sabuba.png',
      color: 'from-amber-600 to-red-700'
    },
    {
      id: 'topping',
      name: 'Ekstra Topping',
      desc: 'Telur, Daging, Pangsit, Chili Oil',
      icon: PlusCircle,
      count: SABUBA_DATA.extraToppings.length,
      image: '/assets/Foto Menu (4).png',
      color: 'from-red-500 to-rose-600'
    }
  ];

  const handleCategoryClick = (id) => {
    onSelectCategory(id);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-white text-slate-800 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-black tracking-widest text-red-600 uppercase">Kategori Spesial</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Pilihan Sarapan Favorit Anda
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Pilih kategori untuk menjelajahi kehangatan sajian Bubur Bakar Sabuba.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-end p-5 h-56 sm:h-64 border ${
                  isSelected ? 'ring-4 ring-red-600 border-transparent' : 'border-slate-100'
                }`}
              >
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent group-hover:from-red-950/90 transition-colors duration-300" />

                {/* Content */}
                <div className="relative z-10 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-black uppercase tracking-wider backdrop-blur-sm">
                      {cat.count} Menu
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base sm:text-lg text-white group-hover:text-red-200 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-0.5 font-normal">
                    {cat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
