import React, { useState } from 'react';
import { Flame, Clock, ShieldCheck, Sparkles, ArrowRight, Utensils, ChevronDown } from 'lucide-react';
import { SABUBA_DATA } from '../data/sabubaData';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-sabuba-dark"
    >
      {/* Background Glow & Flame Particle Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sabuba-red/30 via-sabuba-dark/80 to-sabuba-dark pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sabuba-red/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sabuba-amber/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Texture Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sabuba-red/30 to-sabuba-amber/20 border border-sabuba-amber/50 px-4 py-2 rounded-full shadow-glow backdrop-blur-md">
              <Flame className="w-5 h-5 text-sabuba-amber animate-flame-pulse" />
              <span className="text-xs sm:text-sm font-bold text-sabuba-cream tracking-wide">
                {SABUBA_DATA.brand.promoText}
              </span>
              <span className="bg-sabuba-gold text-sabuba-dark text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                HALAL
              </span>
            </div>

            {/* Main Headline with Clean Spacing & No Wavy Underline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              <span>Sensasi Sarapan</span>
              <span className="block my-3 text-transparent bg-clip-text bg-gradient-to-r from-sabuba-gold via-sabuba-amber to-sabuba-red">
                Bubur Bakar Claypot
              </span>
              <span>Khas Nusantara</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Dimasak mendidih langsung di atas api dalam claypot tanah liat beraroma wangi smoky khas. Dilengkapi topping ganda melimpah, telur leleh gurih, dan siraman chili oil racikan spesial Sabuba.
            </p>

            {/* Operating Info Pills */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-gray-300 font-medium">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-lg">
                <Clock className="w-4 h-4 text-sabuba-amber" />
                <span>Buka Setiap Hari: <strong>{SABUBA_DATA.brand.operatingHours}</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Bahan Segar 100% Halal</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#menu"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-sabuba-red via-sabuba-darkred to-sabuba-red hover:from-sabuba-amber hover:to-sabuba-red text-white font-heading font-bold text-base px-8 py-4 rounded-xl shadow-flame hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Utensils className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Pesan Sarapan Sekarang</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#franchise"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-heading font-semibold text-base px-6 py-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:border-sabuba-amber"
              >
                <Sparkles className="w-5 h-5 text-sabuba-amber" />
                <span>Peluang Kemitraan</span>
              </a>
            </div>

            {/* Social Proof Counter */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-heading font-black text-sabuba-gold">1.000+</p>
                <p className="text-xs text-gray-400">Porsi Terjual / Pagi</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-heading font-black text-sabuba-gold">4.9★</p>
                <p className="text-xs text-gray-400">Rating Kepuasan</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-heading font-black text-sabuba-gold">Rp 10k</p>
                <p className="text-xs text-gray-400">Harga Promo Sarapan</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Card Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-sabuba-red/30 rounded-full blur-3xl scale-95 animate-pulse" />

            {/* Hero Main Card */}
            <div 
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
              }}
              className="relative w-full max-w-md bg-gradient-to-b from-sabuba-carddark via-sabuba-dark to-sabuba-carddark p-4 rounded-3xl border-2 border-sabuba-amber/40 shadow-2xl transition-transform duration-200 ease-out"
            >
              
              {/* Floating Claypot Badge */}
              <div className="absolute -top-4 -right-4 bg-sabuba-amber text-sabuba-dark px-4 py-2 rounded-2xl font-heading font-extrabold text-xs shadow-lg flex items-center gap-1.5 z-20 animate-bounce-subtle">
                <Flame className="w-4 h-4 text-sabuba-dark fill-sabuba-dark" />
                <span>HOT CLAYPOT</span>
              </div>

              {/* Main Image */}
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-inner group">
                <img 
                  src="/assets/Foto Menu (2).png" 
                  alt="Bubur Bakar Claypot Daging Sapi Sabuba" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sabuba-dark via-transparent to-transparent opacity-80" />

                {/* Steam Overlay indicator */}
                <div className="absolute top-4 left-4 bg-sabuba-dark/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Fresh From Flame</span>
                </div>

                {/* Bottom Card Overlay details */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-xs text-sabuba-amber font-semibold uppercase tracking-wider">
                    Menu Terfavorit
                  </p>
                  <h3 className="text-xl font-heading font-bold text-white">
                    Bubur Bakar Daging Sapi Chili Oil
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through text-xs">Rp 16.000</span>
                      <span className="text-sabuba-gold font-extrabold text-lg">Rp 14.000</span>
                    </div>
                    <span className="bg-sabuba-red text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      Special Combo
                    </span>
                  </div>
                </div>

              </div>

              {/* Card Footer Features */}
              <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-center text-xs text-gray-300 font-medium">
                <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                  🔥 Aroma Smoky Claypot
                </div>
                <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                  🌶️ Custom Chili Oil 0-5
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 text-center flex justify-center">
          <a href="#menu" className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-sabuba-gold transition-colors text-xs font-medium">
            <span>Jelajahi Menu Spesial</span>
            <ChevronDown className="w-5 h-5 animate-bounce text-sabuba-amber" />
          </a>
        </div>

      </div>
    </section>
  );
}
