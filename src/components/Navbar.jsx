import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Clock, MapPin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SabubaLogo from './SabubaLogo';
import { SABUBA_DATA } from '../data/sabubaData';

export default function Navbar({ totalItems, setIsCartOpen, onSearchClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlight
      const sections = ['hero', 'menu', 'konsep', 'outlet', 'franchise'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero', id: 'hero' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Konsep', href: '#konsep', id: 'konsep' },
    { name: 'Outlet', href: '#outlet', id: 'outlet' },
    { name: 'Kemitraan', href: '#franchise', id: 'franchise' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-red-100/80 text-slate-800'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100 text-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group focus:outline-none">
            <SabubaLogo className="h-9 sm:h-10" variant="dark" />
          </a>

          {/* Operating Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-900">
            <Clock className="w-3.5 h-3.5 text-red-800 animate-pulse" />
            <span>{SABUBA_DATA.brand.operatingHours}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 ml-1"></span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all relative ${
                    isActive
                      ? 'text-red-900 bg-red-50'
                      : 'text-slate-700 hover:text-red-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-red-800 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Search & Cart Button */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Search Trigger */}
            <button
              onClick={onSearchClick}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-800 border border-slate-200 transition-colors flex items-center justify-center"
              aria-label="Cari menu"
              title="Cari Menu"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-red-800 hover:bg-red-900 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              aria-label={`Keranjang pesanan (${totalItems})`}
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">Keranjang</span>
              <motion.span
                key={totalItems}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white text-red-900 text-[11px] font-extrabold min-w-[20px] h-[20px] px-1.5 rounded-full flex items-center justify-center shadow-sm"
              >
                {totalItems}
              </motion.span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
              aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/50 z-40 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white text-slate-800 z-50 p-6 flex flex-col justify-between shadow-2xl border-l border-red-100 md:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <SabubaLogo className="h-8" variant="dark" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Operating hours info badge mobile */}
                <div className="mt-4 p-3 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-900 font-bold flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-800 shrink-0" />
                  <span>{SABUBA_DATA.brand.operatingHours}</span>
                </div>

                <div className="py-6 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-2xl text-base font-bold text-slate-700 hover:bg-red-50 hover:text-red-900 transition-colors flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      <span className="text-xs text-red-800 font-bold">→</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
                <p className="font-semibold text-slate-700">{SABUBA_DATA.brand.name}</p>
                <p className="mt-0.5">{SABUBA_DATA.brand.halalCert}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
