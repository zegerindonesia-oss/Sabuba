import React, { useState, useEffect } from 'react';
import { ShoppingBag, Flame, Menu, X, MapPin, Phone, Award } from 'lucide-react';
import { SABUBA_DATA } from '../data/sabubaData';

export default function Navbar({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-sabuba-dark/95 backdrop-blur-md shadow-2xl py-3 border-b border-sabuba-red/20' 
          : 'bg-gradient-to-b from-sabuba-dark/90 via-sabuba-dark/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-sabuba-gold/60 p-0.5 bg-sabuba-red shadow-flame transition-transform group-hover:scale-105">
              <img 
                src="/assets/Konsep/Logo (1).png" 
                alt="Logo Sabuba" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-2xl tracking-wider text-white group-hover:text-sabuba-gold transition-colors">
                  SABUBA
                </span>
                <span className="bg-sabuba-red text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-widest flex items-center gap-0.5">
                  <Flame className="w-3 h-3 text-sabuba-amber animate-pulse" /> HOT
                </span>
              </div>
              <p className="text-[11px] text-gray-300 font-medium tracking-wide">
                SARAPAN BUBUR BAKAR
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-200">
            <a href="#hero" className="hover:text-sabuba-gold transition-colors py-1 border-b-2 border-transparent hover:border-sabuba-gold">
              Beranda
            </a>
            <a href="#menu" className="hover:text-sabuba-gold transition-colors py-1 border-b-2 border-transparent hover:border-sabuba-gold">
              Menu Spesial
            </a>
            <a href="#why-us" className="hover:text-sabuba-gold transition-colors py-1 border-b-2 border-transparent hover:border-sabuba-gold">
              Keunggulan Claypot
            </a>
            <a href="#concepts" className="hover:text-sabuba-gold transition-colors py-1 border-b-2 border-transparent hover:border-sabuba-gold">
              Konsep Usaha
            </a>
            <a href="#franchise" className="hover:text-sabuba-gold transition-colors py-1 border-b-2 border-transparent hover:border-sabuba-gold">
              Kemitraan
            </a>
            <a href="#outlets" className="hover:text-sabuba-gold transition-colors py-1 border-b-2 border-transparent hover:border-sabuba-gold">
              Outlets
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            
            {/* Promo Badge Desktop */}
            <div className="hidden lg:flex items-center gap-2 bg-sabuba-red/20 border border-sabuba-red/40 px-3 py-1.5 rounded-full text-xs font-semibold text-sabuba-amber">
              <Award className="w-4 h-4 text-sabuba-amber" />
              <span>Mulai Rp 10.000 (Halal)</span>
            </div>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-gradient-to-r from-sabuba-red to-sabuba-darkred hover:from-sabuba-darkred hover:to-sabuba-red text-white px-4 py-2.5 rounded-full font-semibold text-sm shadow-flame hover:shadow-glow transition-all duration-300 transform active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Pesanan Saya</span>
              {cartCount > 0 && (
                <span className="bg-sabuba-amber text-sabuba-dark text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sabuba-dark/98 border-b border-sabuba-red/30 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-4 text-center font-medium text-gray-200 animate-fadeIn">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-sabuba-gold hover:bg-white/5 rounded-lg"
          >
            Beranda
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-sabuba-gold hover:bg-white/5 rounded-lg"
          >
            Menu Spesial
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-sabuba-gold hover:bg-white/5 rounded-lg"
          >
            Keunggulan Claypot
          </a>
          <a
            href="#concepts"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-sabuba-gold hover:bg-white/5 rounded-lg"
          >
            Konsep Usaha
          </a>
          <a
            href="#franchise"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-sabuba-gold hover:bg-white/5 rounded-lg"
          >
            Kemitraan Franchise
          </a>
          <a
            href="#outlets"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-sabuba-gold hover:bg-white/5 rounded-lg"
          >
            Cabang Outlets
          </a>
        </div>
      )}
    </header>
  );
}
