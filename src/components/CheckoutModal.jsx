import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MapPin, Store, Utensils, ShoppingBag, User, Phone, FileText, Calendar, Clock, AlertCircle, Lock, CheckCircle2 } from 'lucide-react';
import { SABUBA_DATA, formatRupiah } from '../data/sabubaData';

export default function CheckoutModal({ isOpen, onClose, cartItems }) {
  if (!isOpen) return null;

  // Active mode is 'scheduled' (Pesanan Terjadwal). Other modes are frozen / SOON.
  const [orderType, setOrderType] = useState('scheduled'); 
  const [scheduledTag, setScheduledTag] = useState('dine-in'); // 'dine-in' | 'takeaway'

  // Calculate min scheduled time (current time + 2 hours)
  const getMinAllowedDateTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 2);
    return now;
  };

  const getInitialDateStr = () => {
    const minTime = getMinAllowedDateTime();
    return minTime.toISOString().slice(0, 10);
  };

  const getInitialTimeStr = () => {
    const minTime = getMinAllowedDateTime();
    const hours = String(minTime.getHours()).padStart(2, '0');
    const minutes = String(minTime.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const [scheduledDate, setScheduledDate] = useState(getInitialDateStr());
  const [scheduledTime, setScheduledTime] = useState(getInitialTimeStr());
  const [timeError, setTimeError] = useState('');

  const [selectedOutlet, setSelectedOutlet] = useState(SABUBA_DATA.outlets[0].id);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  // Validate scheduled datetime min 2 hours from now
  const validateScheduledTime = (dStr, tStr) => {
    if (!dStr || !tStr) return true;
    const selected = new Date(`${dStr}T${tStr}`);
    const minAllowed = getMinAllowedDateTime();
    
    if (selected < minAllowed) {
      const minTimeString = minAllowed.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
      const minDateString = minAllowed.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
      setTimeError(`Pesanan terjadwal minimal 2 jam dari sekarang (Paling awal: ${minDateString} jam ${minTimeString} WIB).`);
      return false;
    }
    setTimeError('');
    return true;
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setScheduledDate(newDate);
    validateScheduledTime(newDate, scheduledTime);
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setScheduledTime(newTime);
    validateScheduledTime(scheduledDate, newTime);
  };

  const handleSendWhatsApp = async (e) => {
    e.preventDefault();
    if (!customerName) {
      alert('Mohon isi nama Anda terlebih dahulu.');
      return;
    }

    if (orderType === 'scheduled' && !validateScheduledTime(scheduledDate, scheduledTime)) {
      alert('Mohon sesuaikan waktu pesanan terjadwal. Pemesanan minimal 2 jam dari waktu saat ini.');
      return;
    }

    setIsSubmitting(true);

    const outletObj = SABUBA_DATA.outlets.find(o => o.id === selectedOutlet);
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randId = Math.floor(1000 + Math.random() * 9000);
    const orderId = `SB-${dateStr}-${randId}`;
    const timestamp = new Date().toLocaleString('id-ID');

    // Format scheduled date text
    const dateObj = new Date(`${scheduledDate}T${scheduledTime}`);
    const formattedScheduledDate = dateObj.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const scheduledFullText = `${formattedScheduledDate} jam ${scheduledTime} WIB`;
    const orderTypeLabel = `Pesanan Terjadwal (${scheduledTag === 'dine-in' ? 'Dine In' : 'Take Away'})`;

    // Detail string for Google Sheet
    const itemsDetailText = cartItems.map((item, idx) => {
      let text = `${idx + 1}. ${item.name} (x${item.quantity}) - ${formatRupiah(item.totalPrice)}`;
      if (item.selectedToppings && item.selectedToppings.length > 0) {
        text += ` [Topping: ${item.selectedToppings.map(t => t.name).join(', ')}]`;
      }
      if (item.notes) {
        text += ` [Note: ${item.notes}]`;
      }
      return text;
    }).join('\n');

    const fullNotesText = `[Waktu Terjadwal: ${scheduledFullText}] ${notes ? '| Catatan: ' + notes : ''}`;

    // Send payload to Google Apps Script (Auto-save customer & transaction data to Google Sheet)
    if (SABUBA_DATA.appScriptUrl) {
      try {
        const payload = {
          orderId,
          timestamp,
          customerName,
          customerPhone: customerPhone || '-',
          orderType: orderTypeLabel,
          outlet: outletObj ? outletObj.name : 'Utama',
          itemsDetail: itemsDetailText,
          notes: fullNotesText,
          totalAmount: subtotal,
          status: 'Pesanan Terjadwal (Pending WA)'
        };

        await fetch(SABUBA_DATA.appScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.warn('Google Sheet auto-save status:', err);
      }
    }

    // Build WhatsApp Message
    let message = `*HALO SABUBA! SAYA INGIN PESAN TERJADWAL BUBUR BAKAR*\n\n`;
    message += `📋 *ID Transaksi:* #${orderId}\n`;
    message += `👤 *Nama Pemesan:* ${customerName}\n`;
    if (customerPhone) message += `📞 *No. WA:* ${customerPhone}\n`;
    message += `📍 *Cabang Outlet:* ${outletObj ? outletObj.name : 'Utama'}\n`;
    message += `🗓️ *Jadwal Tanggal & Jam:* ${scheduledFullText}\n`;
    message += `🍽️ *Tipe Konsumsi:* ${scheduledTag === 'dine-in' ? 'Dine In (Makan di Tempat)' : 'Take Away (Bungkus)'}\n`;
    if (notes) message += `📝 *Catatan Khusus:* ${notes}\n`;
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
    message += `Terima kasih Sabuba! Mohon konfirmasi pesanan terjadwal ini. 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=${encodedMessage}`;
    
    setIsSubmitting(false);
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
              <p className="text-xs text-slate-500 mt-1">Sistem Pesanan Terjadwal (Pre-Order) Sabuba</p>
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
            
            {/* 1. Mode Pesanan Options (Terjadwal Active, Direct Order Frozen/SOON) */}
            <div>
              <label className="block text-xs font-extrabold uppercase text-slate-700 tracking-wider mb-2">
                Pilih Mode Layanan
              </label>

              <div className="grid grid-cols-2 gap-2 mb-2">
                {/* Active Option: Pesanan Terjadwal */}
                <button
                  type="button"
                  onClick={() => setOrderType('scheduled')}
                  className="p-3.5 rounded-2xl border bg-red-50 border-red-800 text-red-950 font-extrabold ring-2 ring-red-800/20 text-left relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-1">
                    <Calendar className="w-4 h-4 text-red-800" />
                    <span className="text-[10px] bg-red-800 text-white font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                      AKTIF
                    </span>
                  </div>
                  <span className="block text-xs font-black">Pesanan Terjadwal</span>
                  <span className="text-[10px] text-red-800 font-medium">Pre-Order Min. H+2 Jam</span>
                </button>

                {/* Frozen Option: Dine-In Langsung */}
                <div className="p-3.5 rounded-2xl border bg-slate-50 border-slate-200 text-slate-400 opacity-70 relative select-none">
                  <div className="flex items-center justify-between mb-1">
                    <Utensils className="w-4 h-4 text-slate-400" />
                    <span className="text-[10px] bg-slate-300 text-slate-600 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5">
                      <Lock className="w-2.5 h-2.5" /> SOON
                    </span>
                  </div>
                  <span className="block text-xs font-bold text-slate-500">Dine-In Langsung</span>
                  <span className="text-[10px] text-slate-400">Segera Hadir</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {/* Frozen Option: Takeaway Langsung */}
                <div className="p-3.5 rounded-2xl border bg-slate-50 border-slate-200 text-slate-400 opacity-70 relative select-none">
                  <div className="flex items-center justify-between mb-1">
                    <Store className="w-4 h-4 text-slate-400" />
                    <span className="text-[10px] bg-slate-300 text-slate-600 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5">
                      <Lock className="w-2.5 h-2.5" /> SOON
                    </span>
                  </div>
                  <span className="block text-xs font-bold text-slate-500">Takeaway Langsung</span>
                  <span className="text-[10px] text-slate-400">Segera Hadir</span>
                </div>

                {/* Frozen Option: Delivery */}
                <div className="p-3.5 rounded-2xl border bg-slate-50 border-slate-200 text-slate-400 opacity-70 relative select-none">
                  <div className="flex items-center justify-between mb-1">
                    <Send className="w-4 h-4 text-slate-400" />
                    <span className="text-[10px] bg-slate-300 text-slate-600 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5">
                      <Lock className="w-2.5 h-2.5" /> SOON
                    </span>
                  </div>
                  <span className="block text-xs font-bold text-slate-500">Delivery Langsung</span>
                  <span className="text-[10px] text-slate-400">Segera Hadir</span>
                </div>
              </div>
            </div>

            {/* 2. Form Pesanan Terjadwal Detail */}
            {orderType === 'scheduled' && (
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-4">
                
                {/* Tagging Info: Dine In / Take Away */}
                <div>
                  <label className="block text-xs font-extrabold uppercase text-amber-900 tracking-wider mb-2">
                    Tagging Tipe Konsumsi
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setScheduledTag('dine-in')}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        scheduledTag === 'dine-in'
                          ? 'bg-amber-700 text-white border-amber-800 shadow-sm'
                          : 'bg-white text-slate-700 border-amber-200 hover:bg-amber-100/50'
                      }`}
                    >
                      <Utensils className="w-3.5 h-3.5" />
                      <span>Dine In (Makan Tempat)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setScheduledTag('takeaway')}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        scheduledTag === 'takeaway'
                          ? 'bg-amber-700 text-white border-amber-800 shadow-sm'
                          : 'bg-white text-slate-700 border-amber-200 hover:bg-amber-100/50'
                      }`}
                    >
                      <Store className="w-3.5 h-3.5" />
                      <span>Take Away (Bungkus)</span>
                    </button>
                  </div>
                </div>

                {/* Date & Time Selectors */}
                <div>
                  <label className="block text-xs font-extrabold uppercase text-amber-900 tracking-wider mb-1.5">
                    Tentukan Tanggal & Jam Pengambilan / Konsumsi
                  </label>
                  <p className="text-[11px] text-amber-800 mb-2 font-medium">
                    ⚠️ Pengisian waktu minimal <span className="font-extrabold underline">2 jam dari sekarang</span> untuk persiapan koki & claypot.
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-bold text-amber-900 mb-1">Tanggal Pesanan</label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().slice(0, 10)}
                        value={scheduledDate}
                        onChange={handleDateChange}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-amber-300 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-amber-900 mb-1">Jam Pengambilan (WIB)</label>
                      <input
                        type="time"
                        required
                        value={scheduledTime}
                        onChange={handleTimeChange}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-amber-300 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      />
                    </div>
                  </div>

                  {timeError && (
                    <div className="mt-2 p-2.5 rounded-xl bg-red-100 border border-red-300 text-red-900 text-xs font-bold flex items-start gap-1.5">
                      <AlertCircle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                      <span>{timeError}</span>
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* 3. Pilih Cabang Outlet */}
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

            {/* 4. Data Pemesan */}
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
                <label className="block text-xs font-bold text-slate-700 mb-1">Nomor WhatsApp Pemesan *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
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
                    placeholder="Catatan porsi / request kuah dipisah / pedas..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-800 text-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* 5. Rincian Ringkas Pesanan */}
            <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                <span>Total Pesanan ({cartItems.length} menu)</span>
                <span className="text-red-900 text-sm font-black">{formatRupiah(subtotal)}</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Pesanan terjadwal akan otomatis tersimpan di database dan dikirim ke WhatsApp Sabuba.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !!timeError}
              className="w-full py-3.5 px-6 rounded-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-slate-400 text-white font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Menyimpan & Membuka WA...' : 'Kirim Pesanan Terjadwal via WA'}</span>
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

