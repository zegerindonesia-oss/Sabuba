import React, { useState } from 'react';
import { X, Flame, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SABUBA_DATA } from '../data/sabubaData';

export default function CustomizerModal({ item, onClose, onAddToCart }) {
  if (!item) return null;

  const [spicyLevel, setSpicyLevel] = useState(item.spicyLevel || 0);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  const toggleTopping = (topping) => {
    if (selectedToppings.some(t => t.id === topping.id)) {
      setSelectedToppings(selectedToppings.filter(t => t.id !== topping.id));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const toppingsPrice = selectedToppings.reduce((sum, t) => sum + t.price, 0);
  const unitPrice = item.promoPrice + toppingsPrice;
  const totalPrice = unitPrice * quantity;

  const handleConfirm = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });

    onAddToCart({
      cartId: `${item.id}-${Date.now()}`,
      id: item.id,
      name: item.name,
      image: item.image,
      unitPrice,
      quantity,
      totalPrice,
      spicyLevel,
      selectedToppings,
      notes
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sabuba-dark/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-sabuba-red/20 shadow-2xl relative">
        
        {/* Header Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-sabuba-red fill-sabuba-red" />
            <h3 className="font-heading font-extrabold text-xl text-sabuba-dark">
              Kustomisasi Pesanan
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-sabuba-dark p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Selected Item Preview */}
          <div className="flex gap-4 items-center bg-sabuba-creambg p-4 rounded-2xl border border-sabuba-red/10">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-xl object-cover border border-sabuba-red/20"
            />
            <div>
              <h4 className="font-heading font-bold text-lg text-sabuba-dark">{item.name}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-400 line-through text-xs">
                  Rp {item.price.toLocaleString('id-ID')}
                </span>
                <span className="text-sabuba-red font-black text-base">
                  Rp {item.promoPrice.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>

          {/* Spicy Level Picker */}
          <div>
            <label className="block text-sm font-heading font-bold text-sabuba-dark mb-2">
              Pilih Level Pedas (Chili Oil Sabuba):
            </label>
            <div className="grid grid-cols-5 gap-2">
              {[
                { lvl: 0, label: 'Ori (0)' },
                { lvl: 1, label: 'Sedang (1)' },
                { lvl: 2, label: 'Pedas (2)' },
                { lvl: 3, label: 'Mantap (3)' },
                { lvl: 5, label: 'Extreem (5)' },
              ].map((sp) => (
                <button
                  key={sp.lvl}
                  onClick={() => setSpicyLevel(sp.lvl)}
                  className={`py-2 px-1 rounded-xl text-xs font-bold transition-all ${
                    spicyLevel === sp.lvl
                      ? 'bg-sabuba-red text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-sabuba-red/10'
                  }`}
                >
                  {sp.label}
                </button>
              ))}
            </div>
          </div>

          {/* Extra Toppings Checklist */}
          <div>
            <label className="block text-sm font-heading font-bold text-sabuba-dark mb-2">
              Tambah Ekstra Topping:
            </label>
            <div className="space-y-2">
              {SABUBA_DATA.extraToppings.map((top) => {
                const isChecked = selectedToppings.some(t => t.id === top.id);
                return (
                  <div
                    key={top.id}
                    onClick={() => toggleTopping(top)}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      isChecked
                        ? 'border-sabuba-red bg-sabuba-red/5 font-semibold'
                        : 'border-gray-200 hover:border-sabuba-red/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                        isChecked ? 'bg-sabuba-red border-sabuba-red text-white' : 'border-gray-300'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-sm text-sabuba-dark">{top.name}</span>
                    </div>
                    <span className="text-xs text-sabuba-red font-bold">
                      +Rp {top.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Special Requests / Notes */}
          <div>
            <label className="block text-sm font-heading font-bold text-sabuba-dark mb-1">
              Catatan Khusus (Opsional):
            </label>
            <input
              type="text"
              placeholder="Contoh: Pisah pangsit, daun bawang dibanyakin..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-sabuba-red"
            />
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-heading font-bold text-sabuba-dark">Jumlah Porsi:</span>
            <div className="flex items-center gap-3 bg-gray-100 p-1.5 rounded-xl">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-white shadow flex items-center justify-center text-sabuba-dark font-bold hover:bg-sabuba-red hover:text-white transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-heading font-bold text-base">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-white shadow flex items-center justify-center text-sabuba-dark font-bold hover:bg-sabuba-red hover:text-white transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md p-6 border-t border-gray-100 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-gray-500 font-medium">Total Harga</span>
            <p className="text-2xl font-heading font-black text-sabuba-red">
              Rp {totalPrice.toLocaleString('id-ID')}
            </p>
          </div>

          <button
            onClick={handleConfirm}
            className="flex-1 flex items-center justify-center gap-2 bg-sabuba-red hover:bg-sabuba-darkred text-white py-3.5 px-6 rounded-xl font-heading font-bold text-base shadow-flame hover:shadow-glow transition-all active:scale-95"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Masukkan Keranjang</span>
          </button>
        </div>

      </div>
    </div>
  );
}
