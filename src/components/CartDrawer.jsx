import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { formatRupiah } from '../data/sabubaData';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedCheckout
}) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50"
          />

          {/* Slide-over Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white text-slate-800 z-50 shadow-2xl flex flex-col justify-between border-l border-red-100"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-800 flex items-center justify-center font-bold">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 leading-none">Keranjang Pesanan</h3>
                  <span className="text-xs text-slate-500">{cartItems.length} Jenis Menu</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((cartItem) => (
                  <div
                    key={cartItem.cartId}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 relative group"
                  >
                    <img
                      src={cartItem.image || '/assets/Foto Menu (1).png'}
                      alt={cartItem.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 bg-white"
                    />

                    <div className="flex-1">
                      <h4 className="font-extrabold text-sm text-slate-900 leading-tight">
                        {cartItem.name}
                      </h4>
                      
                      {cartItem.selectedToppings && cartItem.selectedToppings.length > 0 && (
                        <div className="mt-1 flex flex-wrap gap-1">
                          {cartItem.selectedToppings.map((top, idx) => (
                            <span key={idx} className="text-[10px] bg-red-100 text-red-900 px-1.5 py-0.5 rounded font-bold">
                              +{top.name}
                            </span>
                          ))}
                        </div>
                      )}

                      {cartItem.notes && (
                        <p className="text-[10px] text-slate-500 italic mt-0.5">
                          "{cartItem.notes}"
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-3">
                        <span className="font-black text-sm text-red-800">
                          {formatRupiah(cartItem.totalPrice)}
                        </span>

                        <div className="flex items-center gap-2 bg-white rounded-full p-1 border border-slate-200 shadow-sm">
                          <button
                            onClick={() => onUpdateQuantity(cartItem.cartId, cartItem.quantity - 1)}
                            className="p-1 rounded-full text-slate-600 hover:bg-slate-100"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold min-w-[16px] text-center">{cartItem.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(cartItem.cartId, cartItem.quantity + 1)}
                            className="p-1 rounded-full text-slate-600 hover:bg-slate-100"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(cartItem.cartId)}
                      className="p-1.5 text-slate-400 hover:text-red-800 transition-colors"
                      title="Hapus menu"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              ) : (
                <div className="py-20 text-center text-slate-400">
                  <ShoppingBag className="w-12 h-12 mx-auto stroke-1 mb-2 opacity-50" />
                  <p className="font-bold text-slate-600">Keranjang Masih Kosong</p>
                  <p className="text-xs text-slate-400 mt-1">Silakan pilih menu favorit Anda terlebih dahulu.</p>
                </div>
              )}
            </div>

            {/* Footer Summary & Checkout Button */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-slate-100 bg-white space-y-3">
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span>Subtotal Pesanan</span>
                  <span className="font-bold text-slate-800 text-sm">{formatRupiah(subtotal)}</span>
                </div>
                
                <button
                  onClick={onProceedCheckout}
                  className="w-full py-3.5 px-5 rounded-full bg-red-800 hover:bg-red-900 text-white font-extrabold text-sm shadow-md flex items-center justify-between transition-all active:scale-95"
                >
                  <span>Lanjut Pembayaran</span>
                  <div className="flex items-center gap-1">
                    <span>{formatRupiah(subtotal)}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
