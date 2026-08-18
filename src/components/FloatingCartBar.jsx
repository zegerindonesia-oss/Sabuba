import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { formatRupiah } from '../data/sabubaData';

export default function FloatingCartBar({ totalItems, totalPrice, onClick }) {
  if (totalItems <= 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 left-4 right-4 z-30 md:hidden"
      >
        <button
          onClick={onClick}
          className="w-full py-3.5 px-5 rounded-full bg-red-800 hover:bg-red-900 text-white font-extrabold text-xs sm:text-sm shadow-xl flex items-center justify-between transition-all active:scale-95 border border-red-700/50"
        >
          <div className="flex items-center gap-2.5">
            <div className="relative p-1 bg-white/20 rounded-full">
              <ShoppingBag className="w-4 h-4 text-white" />
              <span className="absolute -top-1 -right-1 bg-white text-red-900 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] text-red-100 uppercase font-semibold">Keranjang Pesanan</span>
              <span className="text-xs sm:text-sm font-black">{formatRupiah(totalPrice)}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-white/20 px-3 py-1.5 rounded-full text-xs font-bold">
            <span>Buka Keranjang</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
