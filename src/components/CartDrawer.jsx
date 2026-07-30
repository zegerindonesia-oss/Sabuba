import React from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, Flame, Sparkles } from 'lucide-react';
import { SABUBA_DATA } from '../data/sabubaData';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const grandTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) return;

    let text = `*PESANAN BUBUR BAKAR SABUBA ONLINE*%0A`;
    text += `=================================%0A%0A`;

    cartItems.forEach((item, idx) => {
      text += `*${idx + 1}. ${item.name}* (x${item.quantity})%0A`;
      text += `   • Level Pedas: Level ${item.spicyLevel}%0A`;
      if (item.selectedToppings && item.selectedToppings.length > 0) {
        text += `   • Extra Topping: ${item.selectedToppings.map(t => t.name).join(', ')}%0A`;
      }
      if (item.notes) {
        text += `   • Catatan: ${item.notes}%0A`;
      }
      text += `   • Subtotal: Rp ${item.totalPrice.toLocaleString('id-ID')}%0A%0A`;
    });

    text += `=================================%0A`;
    text += `*TOTAL PEMBAYARAN: Rp ${grandTotal.toLocaleString('id-ID')}*%0A%0A`;
    text += `Mohon info estimasi jam penyiapan / pengiriman. Terima kasih Sabuba!`;

    window.open(`https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-sabuba-dark/80 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-sabuba-red/20 shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 bg-sabuba-dark text-white flex items-center justify-between border-b border-sabuba-red/30">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-sabuba-amber" />
              <h3 className="font-heading font-extrabold text-xl">Keranjang Pesanan</h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-sabuba-creambg text-sabuba-red rounded-full flex items-center justify-center mx-auto border border-sabuba-red/20">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-lg text-sabuba-dark">Keranjang Masih Kosong</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Pilih menu Bubur Bakar, Wonton, atau Laksa favorit Anda untuk menambahkan ke keranjang.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.cartId}
                  className="bg-sabuba-creambg p-4 rounded-2xl border border-sabuba-red/10 flex gap-3 text-left relative group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover border border-sabuba-red/20 flex-shrink-0"
                  />

                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between">
                      <h4 className="font-heading font-bold text-sm text-sabuba-dark pr-6">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.cartId)}
                        className="text-gray-400 hover:text-sabuba-red p-1"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-sabuba-red font-semibold">
                      <span>🌶️ Level {item.spicyLevel}</span>
                      {item.selectedToppings?.length > 0 && (
                        <span>• +{item.selectedToppings.length} Topping</span>
                      )}
                    </div>

                    {item.notes && (
                      <p className="text-[11px] text-gray-500 italic">
                        "{item.notes}"
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <span className="font-heading font-black text-sabuba-dark text-sm">
                        Rp {item.totalPrice.toLocaleString('id-ID')}
                      </span>

                      {/* Quantity Modifier */}
                      <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-gray-200">
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)}
                          className="text-gray-500 hover:text-sabuba-red"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-sabuba-dark w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
                          className="text-gray-500 hover:text-sabuba-red"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-white border-t border-gray-100 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">Subtotal ({cartItems.length} Item)</span>
                <span className="font-heading font-black text-xl text-sabuba-red">
                  Rp {grandTotal.toLocaleString('id-ID')}
                </span>
              </div>

              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-heading font-extrabold text-base shadow-lg transition-all active:scale-95"
              >
                <Send className="w-5 h-5" />
                <span>Pesan Langsung via WhatsApp</span>
              </button>

              <button
                onClick={onClearCart}
                className="w-full text-center text-xs text-gray-400 hover:text-sabuba-red font-medium py-1"
              >
                Kosongkan Keranjang
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
