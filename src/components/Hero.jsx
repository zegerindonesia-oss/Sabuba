import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ShoppingBag, Plus, Check, Flame, ArrowRight, ShieldCheck } from 'lucide-react';
import { SABUBA_DATA, SIGNATURE_ITEMS, formatRupiah } from '../data/sabubaData';

export default function Hero({ onAddToCart, onQuickView }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [addedMap, setAddedMap] = useState({});

  const totalItems = SIGNATURE_ITEMS.length;

  // Continuous auto-slider (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % totalItems);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalItems]);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % totalItems);
  };

  const handleAdd = (e, item) => {
    e.stopPropagation();
    onAddToCart(item);
    setAddedMap((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center overflow-hidden bg-white text-slate-800 pt-24 pb-14 lg:py-20">
      
      {/* Prominent Organic Crimson Red Wave Backdrop SVG inside Hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute -top-10 -right-10 w-[700px] sm:w-[950px] lg:w-[1250px] opacity-25 text-red-600"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 150,0 C 400,250 650,150 850,400 C 950,550 1000,750 1000,1000 L 1000,0 Z"
            fill="url(#hero-red-wave-1)"
          />
          <path
            d="M 300,0 C 500,300 720,220 900,500 C 980,650 1000,850 1000,1000 L 1000,0 Z"
            fill="url(#hero-red-wave-2)"
            opacity="0.8"
          />
          <defs>
            <linearGradient id="hero-red-wave-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7F1D1D" />
              <stop offset="50%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#FCA5A5" />
            </linearGradient>
            <linearGradient id="hero-red-wave-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B91C1C" />
              <stop offset="100%" stopColor="#FEE2E2" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute -bottom-20 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-red-100/80 via-rose-50/50 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        
        {/* 1. Promo Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 font-extrabold text-xs sm:text-sm shadow-sm mb-4"
        >
          <Flame className="w-4 h-4 text-red-600 animate-bounce" />
          <span>{SABUBA_DATA.brand.promoText}</span>
          <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Spesial</span>
        </motion.div>

        {/* 2. Headline Copywriting */}
        <div className="max-w-3xl mx-auto mb-2">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15] mb-3">
            Sarapan Bubur Bakar <br />
            <span className="text-gradient-red italic font-serif font-normal">
              Hangat, Lezat & Beraroma Claypot
            </span>
          </h1>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
            Sensasi gurih bubur berbumbu khas yang dimasak langsung dalam mangkuk tanah liat di atas tungku api. Dilengkapi pilihan wonton chili oil & laksa rempah.
          </p>
        </div>

        {/* 3. Genuine Physical 3D Card Container Sliding Carousel */}
        <div className="relative w-full max-w-6xl my-2 py-4 flex items-center justify-center min-h-[480px] sm:min-h-[530px] perspective-1000 overflow-visible">
          {SIGNATURE_ITEMS.map((item, i) => {
            let diff = i - currentIdx;
            while (diff < -Math.floor(totalItems / 2)) diff += totalItems;
            while (diff > Math.floor(totalItems / 2)) diff -= totalItems;

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;
            const isFarLeft = diff === -2;
            const isFarRight = diff === 2;
            const isHidden = Math.abs(diff) > 2;

            if (isHidden) return null;

            let xPos = '0%';
            let scaleVal = 1;
            let rotateVal = 0;
            let opacityVal = 1;
            let zIndexVal = 30;

            if (isCenter) {
              xPos = '0%';
              scaleVal = 1;
              rotateVal = 0;
              opacityVal = 1;
              zIndexVal = 30;
            } else if (isLeft) {
              xPos = '-64%';
              scaleVal = 0.83;
              rotateVal = 16;
              opacityVal = 0.82;
              zIndexVal = 20;
            } else if (isRight) {
              xPos = '64%';
              scaleVal = 0.83;
              rotateVal = -16;
              opacityVal = 0.82;
              zIndexVal = 20;
            } else if (isFarLeft) {
              xPos = '-122%';
              scaleVal = 0.68;
              rotateVal = 26;
              opacityVal = 0.5;
              zIndexVal = 10;
            } else if (isFarRight) {
              xPos = '122%';
              scaleVal = 0.68;
              rotateVal = -26;
              opacityVal = 0.5;
              zIndexVal = 10;
            }

            return (
              <motion.div
                key={item.id}
                onClick={() => {
                  if (diff !== 0) setCurrentIdx(i);
                  if (isCenter && onQuickView) onQuickView(item);
                }}
                initial={false}
                animate={{
                  scale: scaleVal,
                  x: xPos,
                  rotateY: rotateVal,
                  opacity: opacityVal,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 22,
                }}
                style={{ zIndex: zIndexVal }}
                className={`absolute rounded-[2.5rem] p-4 sm:p-5 bg-gradient-to-br from-[#B91C1C] via-[#DC2626] to-[#991B1B] text-white border border-red-400/40 shadow-[0_30px_70px_-15px_rgba(220,38,38,0.4)] flex flex-col justify-between cursor-pointer select-none transition-all ${
                  isCenter
                    ? 'w-[310px] sm:w-[360px] lg:w-[380px] h-[480px] sm:h-[520px]'
                    : isLeft || isRight
                    ? 'w-[260px] sm:w-[310px] h-[410px] sm:h-[450px] hidden sm:flex hover:opacity-95'
                    : 'w-[220px] sm:w-[260px] h-[360px] sm:h-[390px] hidden lg:flex opacity-60'
                }`}
              >
                {/* Food Image Container */}
                <div className="relative w-full h-[250px] sm:h-[300px] rounded-[2rem] overflow-hidden shadow-md mb-2 bg-slate-100 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Rating Badge Top Right */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/95 text-slate-800 text-xs font-extrabold flex items-center gap-1 shadow-md backdrop-blur-md">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>4.9</span>
                  </div>

                  {/* Promo Badge Top Left */}
                  {item.promoPrice && (
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                      HEMAT
                    </div>
                  )}

                  {/* Spicy Badge */}
                  {item.spicyLevel > 0 && (
                    <div className="absolute bottom-3 left-3.5 px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[11px] font-bold backdrop-blur-sm flex items-center gap-1">
                      <span>{'🌶️'.repeat(item.spicyLevel)}</span>
                    </div>
                  )}
                </div>

                {/* Card Meta Content */}
                <div className="flex flex-col flex-1 justify-between pt-1">
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg leading-snug line-clamp-1 text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs text-red-100/90 line-clamp-1 mt-0.5 font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-red-400/30">
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-red-200 uppercase font-semibold">Harga Sarapan</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base sm:text-lg font-black text-white">
                          {formatRupiah(item.promoPrice || item.price)}
                        </span>
                        {item.promoPrice && (
                          <span className="text-xs text-red-200/70 line-through">
                            {formatRupiah(item.price)}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleAdd(e, item)}
                      className={`px-4 py-2 rounded-full font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md active:scale-95 ${
                        addedMap[item.id]
                          ? 'bg-emerald-500 text-white'
                          : 'bg-white text-red-700 hover:bg-red-50'
                      }`}
                    >
                      {addedMap[item.id] ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Ditambah</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Pesan</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4. Carousel Controls & Pagination Dots */}
        <div className="flex items-center justify-center gap-4 mt-1 z-20">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 transition-colors shadow-sm"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {SIGNATURE_ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentIdx
                    ? 'w-8 bg-red-600'
                    : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 transition-colors shadow-sm"
            aria-label="Next item"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* 5. Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8 pt-6 border-t border-slate-100 text-xs sm:text-sm font-bold text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-red-600" />
            <span>100% Halal & Bahan Segar</span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-red-600" />
            <span>Claypot Hot Claypot Fresh Cooked</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Sarapan Favorit Sidoarjo</span>
          </div>
        </div>

      </div>
    </section>
  );
}
