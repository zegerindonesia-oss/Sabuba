import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function FloatingWhatsApp({ hasCartItems = false }) {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = 'https://wa.me/+628133033544';

  return (
    <div
      className={`fixed right-4 sm:right-6 z-40 flex flex-col items-end transition-all duration-300 pointer-events-auto ${
        hasCartItems ? 'bottom-24 md:bottom-6' : 'bottom-6'
      }`}
    >
      {/* Friendly Chat Bubble / Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-2.5 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-emerald-100 text-slate-800 text-xs font-semibold relative group max-w-[220px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <div className="flex-1 leading-tight">
              <p className="font-bold text-slate-900">Butuh info / reservasi?</p>
              <p className="text-[11px] text-slate-500 font-medium">Chat WhatsApp Sabuba</p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-100 transition-colors"
              title="Tutup pesan"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {/* Small triangle arrow pointing down to the button */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-emerald-100 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Sabuba"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-emerald-400/40 rounded-2xl"
      >
        {/* Soft pulse animation radar ring */}
        <span className="absolute -inset-1.5 rounded-3xl bg-emerald-500/30 blur-sm animate-pulse group-hover:bg-emerald-500/50 transition-all duration-300"></span>

        {/* WhatsApp Icon Wrapper with Image and Gradient Border */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-1 bg-gradient-to-b from-emerald-400 to-green-600 shadow-2xl shadow-emerald-600/40 flex items-center justify-center overflow-hidden transition-transform duration-300">
          <img
            src="/assets/whatsapp.png"
            alt="WhatsApp Sabuba"
            className="w-full h-full object-contain rounded-xl drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
            onError={(e) => {
              // Fallback to SVG if image fails to load
              e.currentTarget.style.display = 'none';
              const svgEl = e.currentTarget.parentElement.querySelector('svg');
              if (svgEl) svgEl.style.display = 'block';
            }}
          />

          {/* SVG Fallback */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-white hidden"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </div>

        {/* Small "Online" Badge Dot */}
        <span className="absolute top-0 right-0 -mt-0.5 -mr-0.5 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
      </motion.a>
    </div>
  );
}
