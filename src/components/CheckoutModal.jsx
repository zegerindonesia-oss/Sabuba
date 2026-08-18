import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MapPin, Store, Utensils, ShoppingBag, User, Phone, FileText } from 'lucide-react';
import { SABUBA_DATA, formatRupiah } from '../data/sabubaData';

export default function CheckoutModal({ isOpen, onClose, cartItems }) {
  if (!isOpen) return null;

  const [orderType, setOrderType] = useState('dine-in'); // 'dine-in' | 'takeaway' | 'delivery'
  const [selectedOutlet, setSelectedOutlet] = useState(SABUBA_DATA.outlets[0].id);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!customerName) {
      alert('Mohon isi nama Anda terlebih dahulu.');
      return;
    }

    const outletObj = SABUBA_DATA.outlets.find(o => o.id === selectedOutlet);

    let message = `*HALO SABUBA! SAYA INGIN PESAN SARAPAN BUBUR BAKAR*\n\n`;
    message += `👤 *Nama:* ${customerName}\n`;
    if (customerPhone) message += `📞 *No. WA:* ${customerPhone}\n`;
    message += `📍 *Cabang Outlet:* ${outletObj ? outletObj.name : 'Utama'}\n`;
    message += `🍽️ *Tipe Pesanan:* ${orderType === 'dine-in' ? 'Dine-In (Makan di Tempat)' : orderType === 'takeaway' ? 'Takeaway (Bungkus)' : 'Delivery (Kirim)'}\n`;
    if (notes) message += `📝 *Catatan:* ${notes}\n`;
    message += `\n--- *RINCIAN PESANAN* ---\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (x${item.quantity}) - ${formatRupiah(item.totalPrice)}\n`;
      if (item.selectedToppings && item.selectedToppings.length > 0) {
        message += `   + Topping: ${item.selectedToppings.map(t => t.name).join(', ')}\n`;
      }
      if (item.notes) {
        message += `   + Note: ${item.notes}\n`;
      }
    });

    message += `\n💰 *TOTAL PEMBAYARAN: ${formatRupiah(subtotal)}*\n\n`;
    message += `Terima kasih Sabuba! Mohon konfirmasi pesanan ini. 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=${encodedMessage}`;
    
    window.open(waUrl, '_blank');
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

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
            <div>
              <h3 className="font-extrabold text-lg text-slate-900 leading-none">Konfirmasi Order WhatsApp</h3>
              <p className="text-xs text-slate-500 mt-1">Lengkapi data untuk pengiriman pesanan langsung ke WA Sabuba</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSendWhatsApp} className="p-6 overflow-y-auto space-y-5 flex-1">
            
            {/* 1. Tipe Pesanan */}
            <div>
              <label className="block text-xs font-extrabold uppercase text-slate-700 tracking-wider mb-2">
                Tipe Pesanan
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'dine-in', label: 'Dine-In', sub: 'Makan Tempat', icon: Utensils },
                  { id: 'takeaway', label: 'Takeaway', sub: 'Bungkus', icon: Store },
                  { id: 'delivery', label: 'Delivery', sub: 'Kirim', icon: Send },
                ].map((type) => {
                  const Icon = type.icon;
                  const isSelected = orderType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setOrderType(type.id)}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        isSelected
                          ? 'bg-red-50 border-red-800 text-red-900 font-extrabold ring-2 ring-red-800/20'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className="w-4 h-4 mx-auto mb-1 text-red-800" />
                      <span className="block text-xs font-bold">{type.label}</span>
                      <span className="text-[10px] text-slate-400 font-normal">{type.sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Pilih Cabang Outlet */}
            <div>
              <label className="block text-xs font-extrabold uppercase text-slate-700 tracking-wider mb-2">
                Pilih Cabang Outlet Sidoarjo
              </label>
              <select
                value={selectedOutlet}
                onChange={(e) => setSelectedOutlet(e.target.value)}
                className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-red-800 text-slate-800"
              >
                {SABUBA_DATA.outlets.map((outlet) => (
                  <option key={outlet.id} value={outlet.id}>
                    {outlet.name} - ({outlet.hours})
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Data Pemesan */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nama Pemesan *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama lengkap Anda..."
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-800 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nomor WhatsApp (Opsional)</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    placeholder="08123456789..."
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-800 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Catatan Tambahan (Opsional)</label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <textarea
                    rows={2}
                    placeholder="Catatan alamat / jam estimasi datang..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-800 text-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* 4. Rincian Ringkas Pesanan */}
            <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                <span>Total Pesanan ({cartItems.length} menu)</span>
                <span className="text-red-900 text-sm font-black">{formatRupiah(subtotal)}</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Pesanan akan langsung diformat dan dikirim ke WhatsApp Resmi Sabuba.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pesanan via WhatsApp</span>
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
