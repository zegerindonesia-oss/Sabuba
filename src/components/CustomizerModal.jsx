import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Star, ShoppingBag, Check } from 'lucide-react';
import { SABUBA_DATA, formatRupiah } from '../data/sabubaData';

export default function CustomizerModal({ item, isOpen, onClose, onAddToCart }) {
  if (!item || !isOpen) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [notes, setNotes] = useState('');

  const basePrice = item.promoPrice || item.price || 0;
  
  const toppingsTotal = selectedToppings.reduce((sum, topId) => {
    const topObj = SABUBA_DATA.extraToppings.find(t => t.id === topId);
    return sum + (topObj ? topObj.price : 0);
  }, 0);

  const totalPrice = (basePrice + toppingsTotal) * quantity;

  const toggleTopping = (topId) => {
    setSelectedToppings(prev =>
      prev.includes(topId) ? prev.filter(id => id !== topId) : [...prev, topId]
    );
  };

  const handleAdd = () => {
    const selectedToppingObjects = selectedToppings.map(id =>
      SABUBA_DATA.extraToppings.find(t => t.id === id)
    ).filter(Boolean);

    onAddToCart(item, quantity, selectedToppingObjects, notes);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 z-10 my-8"
        >
          {/* Header Image */}
          <div className="relative h-56 w-full bg-slate-100">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {item.promoPrice && (
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-800 text-white text-xs font-black uppercase shadow-md">
                Promo Hemat
              </div>
            )}
          </div>

          {/* Modal Content */}
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-black text-red-800">
                    {formatRupiah(basePrice)}
                  </span>
                  {item.promoPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      {formatRupiah(item.price)}
                    </span>
                  )}
                </div>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold flex items-center gap-1 border border-amber-200">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>4.9</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {item.description}
            </p>

            {/* Extra Toppings Selector */}
            {SABUBA_DATA.extraToppings && (
              <div className="mt-6 pt-4 border-t border-slate-100">
                <h4 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider mb-3">
                  Pilih Ekstra Topping (Opsional)
                </h4>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {SABUBA_DATA.extraToppings.map((topping) => {
                    const isChecked = selectedToppings.includes(topping.id);
                    return (
                      <label
                        key={topping.id}
                        onClick={() => toggleTopping(topping.id)}
                        className={`flex items-center justify-between p-3 rounded-2xl border text-xs cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-red-50 border-red-300 text-red-950 font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded-md flex items-center justify-center border ${
                            isChecked ? 'bg-red-800 border-red-800 text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{topping.name}</span>
                        </div>
                        <span className="font-bold text-red-800">+{formatRupiah(topping.price)}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Catatan Khusus */}
            <div className="mt-4">
              <label className="block text-xs font-bold text-slate-700 mb-1">Catatan Khusus</label>
              <input
                type="text"
                placeholder="misal: Kurangi kecap, pedas sedang, pisah pangsit..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-800 text-slate-800"
              />
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              {/* Quantity Counter */}
              <div className="flex items-center gap-3 bg-slate-100 rounded-full p-1.5 border border-slate-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 rounded-full bg-white text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-extrabold text-sm min-w-[20px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 rounded-full bg-white text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAdd}
                className="flex-1 py-3 px-5 rounded-full bg-red-800 hover:bg-red-900 text-white font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-between transition-all active:scale-95"
              >
                <span className="flex items-center gap-1.5">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Tambah Pesanan</span>
                </span>
                <span>{formatRupiah(totalPrice)}</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
