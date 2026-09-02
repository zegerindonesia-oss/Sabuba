import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MapPin, Store, Utensils, ShoppingBag, User, Phone, FileText, Calendar, Clock, AlertCircle, Lock, CheckCircle2, QrCode, Upload, ArrowRight, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { SABUBA_DATA, formatRupiah } from '../data/sabubaData';

export default function CheckoutModal({ isOpen, onClose, cartItems, onSuccessOrder }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1); // 1: Order Data, 2: QRIS & Upload Bukti Bayar

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

  // Payment Proof Upload state
  const [proofFile, setProofFile] = useState(null);
  const [proofPreview, setProofPreview] = useState('');
  const [proofFileName, setProofFileName] = useState('');

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProofFile(file);
      setProofFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProofPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGoToStep2 = (e) => {
    e.preventDefault();
    if (!customerName) {
      alert('Mohon isi nama Anda terlebih dahulu.');
      return;
    }
    if (!customerPhone) {
      alert('Mohon isi nomor WhatsApp Anda terlebih dahulu.');
      return;
    }
    if (orderType === 'scheduled' && !validateScheduledTime(scheduledDate, scheduledTime)) {
      alert('Mohon sesuaikan waktu pesanan terjadwal. Pemesanan minimal 2 jam dari waktu saat ini.');
      return;
    }
    setStep(2);
  };

  const getNextDailyQueueNumber = () => {
    const todayStr = new Date().toISOString().slice(0, 10);
    try {
      const stored = localStorage.getItem('sabuba_daily_queue');
      let data = stored ? JSON.parse(stored) : null;
      if (!data || data.date !== todayStr) {
        data = { date: todayStr, number: 1 };
      } else {
        data.number = data.number >= 999 ? 1 : data.number + 1;
      }
      localStorage.setItem('sabuba_daily_queue', JSON.stringify(data));
      return String(data.number).padStart(3, '0');
    } catch (err) {
      return '001';
    }
  };

  const handleSendWhatsApp = async (e) => {
    e.preventDefault();
    if (!proofFile && !proofPreview) {
      if (!confirm('Anda belum mengunggah foto bukti bayar QRIS. Yakin ingin melanjutkan?')) {
        return;
      }
    }

    setIsSubmitting(true);

    const queueNo = getNextDailyQueueNumber();
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

    const fullNotesText = `[No. Antrian: #${queueNo}] [Waktu Terjadwal: ${scheduledFullText}] ${notes ? '| Catatan: ' + notes : ''} ${proofFileName ? '| Bukti Bayar: ' + proofFileName : ''}`;

    // Send payload to Google Apps Script (Auto-save customer & transaction data to Google Sheet)
    let driveProofUrl = '';
    if (SABUBA_DATA.appScriptUrl) {
      try {
        const payload = {
          orderId,
          queueNo,
          timestamp,
          customerName,
          customerPhone: customerPhone || '-',
          orderType: orderTypeLabel,
          outlet: outletObj ? outletObj.name : 'Utama',
          itemsDetail: itemsDetailText,
          notes: fullNotesText,
          totalAmount: subtotal,
          status: proofFile ? 'Sudah Bayar QRIS (Bukti Terlampir)' : 'Pesanan Terjadwal (Belum Bayar)',
          buktiBayarName: proofFileName || '-',
          buktiBayarData: proofPreview || '-' // base64 preview
        };

        const res = await fetch(SABUBA_DATA.appScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          const resData = await res.json();
          if (resData && resData.buktiBayarUrl && resData.buktiBayarUrl.indexOf('http') === 0) {
            driveProofUrl = resData.buktiBayarUrl;
          }
        }
      } catch (err) {
        console.warn('Google Sheet auto-save status:', err);
      }
    }

    // Build Thermal Receipt WA Message
    let message = `==================================\n`;
    message += `       *BUBUR BAKAR SABUBA*\n`;
    message += `  _Sarapan Claypot • Wonton • Laksa_\n`;
    message += `==================================\n`;
    message += `🔢 *NO. ANTRIAN: #${queueNo}*\n`;
    message += `📋 *ID TRANSAKSI:* #${orderId}\n`;
    message += `🗓️ *WAKTU ORDER:* ${timestamp}\n`;
    message += `⏰ *JADWAL AMBIL:* ${scheduledFullText}\n`;
    message += `🍽️ *TIPE KONSUMSI:* ${scheduledTag === 'dine-in' ? 'DINE IN (Makan Tempat)' : 'TAKE AWAY (Bungkus)'}\n`;
    message += `📍 *OUTLET:* ${outletObj ? outletObj.name : 'Cabang Utama'}\n`;
    message += `----------------------------------\n`;
    message += `👤 *PEMESAN:* ${customerName}\n`;
    if (customerPhone) message += `📞 *NO. WA:* ${customerPhone}\n`;
    message += `----------------------------------\n`;
    message += `*RINCIAN PESANAN:*\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (x${item.quantity})\n`;
      if (item.selectedToppings && item.selectedToppings.length > 0) {
        message += `   + Topping: ${item.selectedToppings.map(t => t.name).join(', ')}\n`;
      }
      if (item.notes) {
        message += `   + Note: ${item.notes}\n`;
      }
      message += `   = ${formatRupiah(item.totalPrice)}\n\n`;
    });

    if (notes) {
      message += `📝 *Catatan Khusus:* ${notes}\n`;
      message += `----------------------------------\n`;
    }

    message += `💰 *TOTAL PEMBAYARAN:* *${formatRupiah(subtotal)}*\n`;
    message += `💳 *METODE BAYAR:* QRIS ZEGER COFFEE\n`;
    
    if (driveProofUrl) {
      message += `📸 *BUKTI BAYAR:* SUDAH DIUNGGAH\n👉 ${driveProofUrl}\n`;
    } else if (proofFileName) {
      message += `📸 *BUKTI BAYAR:* SUDAH DIUNGGAH (${proofFileName})\n`;
    } else {
      message += `📸 *BUKTI BAYAR:* BELUM DIUNGGAH\n`;
    }

    message += `==================================\n`;
    message += `STATUS: *PESANAN TERJADWAL (LUNAS)*\n`;
    message += `==================================\n`;
    message += `_Mohon konfirmasi pesanan terjadwal ini. Terima kasih Sabuba! 🙏_`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=${encodedMessage}`;
    
    setIsSubmitting(false);

    const orderDataObj = {
      orderId,
      queueNo,
      timestamp,
      customerName,
      customerPhone,
      scheduledFullText,
      scheduledTag,
      outletObj,
      cartItems: [...cartItems],
      notes,
      subtotal,
      proofFileName,
      proofPreview,
      driveProofUrl,
      waUrl
    };

    window.open(waUrl, '_blank');
    if (onSuccessOrder) {
      onSuccessOrder(orderDataObj);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Dialog (Glassmorphism 3D Theme) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_25px_60px_-15px_rgba(153,27,27,0.35)] max-w-lg w-full overflow-hidden border border-red-200/80 z-10 my-4 flex flex-col max-h-[92vh]"
        >
          {/* Header Theme Red Crimson */}
          <div className="p-5 bg-gradient-to-r from-red-950 via-red-900 to-rose-950 text-white flex items-center justify-between shrink-0 shadow-md">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-extrabold text-[10px] uppercase tracking-wider backdrop-blur-md">
                  Langkah {step} dari 2
                </span>
                <span className="text-xs text-red-200 font-medium">
                  {step === 1 ? 'Data Jadwal' : 'QRIS & Bukti Bayar'}
                </span>
              </div>
              <h3 className="font-black text-lg text-white leading-none tracking-tight">
                {step === 1 ? 'Pesanan Terjadwal Sabuba' : 'Pembayaran QRIS & Bukti Bayar'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">

            {/* STEP 1: JADWAL & DATA PEMESAN */}
            {step === 1 && (
              <form onSubmit={handleGoToStep2} className="space-y-5">
                
                {/* 1. Mode Pesanan Options (Red Glassmorphism 3D Theme) */}
                <div>
                  <label className="block text-xs font-black uppercase text-slate-800 tracking-wider mb-2">
                    Pilih Mode Layanan
                  </label>

                  <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                    {/* Active Option: Pesanan Terjadwal */}
                    <button
                      type="button"
                      onClick={() => setOrderType('scheduled')}
                      className="p-3.5 rounded-2xl border bg-gradient-to-br from-red-900/10 via-rose-950/5 to-white border-red-700 text-red-950 font-black ring-2 ring-red-800/30 shadow-[0_8px_20px_-5px_rgba(153,27,27,0.2)] text-left relative overflow-hidden transition-all"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <Calendar className="w-4 h-4 text-red-800" />
                        <span className="text-[10px] bg-red-800 text-white font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                          AKTIF
                        </span>
                      </div>
                      <span className="block text-xs font-black">Pesanan Terjadwal</span>
                      <span className="text-[10px] text-red-800 font-semibold">Pre-Order Min. H+2 Jam</span>
                    </button>

                    {/* Frozen Option: Dine-In Langsung */}
                    <div className="p-3.5 rounded-2xl border bg-slate-50/80 border-slate-200/80 text-slate-400 opacity-60 relative select-none">
                      <div className="flex items-center justify-between mb-1.5">
                        <Utensils className="w-4 h-4 text-slate-400" />
                        <span className="text-[10px] bg-slate-200 text-slate-600 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5">
                          <Lock className="w-2.5 h-2.5" /> SOON
                        </span>
                      </div>
                      <span className="block text-xs font-bold text-slate-500">Dine-In Langsung</span>
                      <span className="text-[10px] text-slate-400">Segera Hadir</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Frozen Option: Takeaway Langsung */}
                    <div className="p-3.5 rounded-2xl border bg-slate-50/80 border-slate-200/80 text-slate-400 opacity-60 relative select-none">
                      <div className="flex items-center justify-between mb-1.5">
                        <Store className="w-4 h-4 text-slate-400" />
                        <span className="text-[10px] bg-slate-200 text-slate-600 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5">
                          <Lock className="w-2.5 h-2.5" /> SOON
                        </span>
                      </div>
                      <span className="block text-xs font-bold text-slate-500">Takeaway Langsung</span>
                      <span className="text-[10px] text-slate-400">Segera Hadir</span>
                    </div>

                    {/* Frozen Option: Delivery */}
                    <div className="p-3.5 rounded-2xl border bg-slate-50/80 border-slate-200/80 text-slate-400 opacity-60 relative select-none">
                      <div className="flex items-center justify-between mb-1.5">
                        <Send className="w-4 h-4 text-slate-400" />
                        <span className="text-[10px] bg-slate-200 text-slate-600 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5">
                          <Lock className="w-2.5 h-2.5" /> SOON
                        </span>
                      </div>
                      <span className="block text-xs font-bold text-slate-500">Delivery Langsung</span>
                      <span className="text-[10px] text-slate-400">Segera Hadir</span>
                    </div>
                  </div>
                </div>

                {/* 2. Form Pesanan Terjadwal Detail (Crimson Red Glassmorphic Card) */}
                <div className="p-4 rounded-3xl bg-gradient-to-br from-red-950/10 via-rose-900/5 to-red-50 border border-red-200 shadow-[0_10px_30px_-8px_rgba(153,27,27,0.12)] space-y-4 backdrop-blur-md">
                  
                  {/* Tagging Info: Dine In / Take Away */}
                  <div>
                    <label className="block text-xs font-black uppercase text-red-950 tracking-wider mb-2">
                      Tagging Tipe Konsumsi
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setScheduledTag('dine-in')}
                        className={`p-3 rounded-2xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                          scheduledTag === 'dine-in'
                            ? 'bg-gradient-to-r from-red-900 to-rose-950 text-white border-red-950 shadow-md ring-2 ring-red-800/30'
                            : 'bg-white text-slate-700 border-red-200 hover:bg-red-50'
                        }`}
                      >
                        <Utensils className="w-3.5 h-3.5" />
                        <span>Dine In (Makan Tempat)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setScheduledTag('takeaway')}
                        className={`p-3 rounded-2xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                          scheduledTag === 'takeaway'
                            ? 'bg-gradient-to-r from-red-900 to-rose-950 text-white border-red-950 shadow-md ring-2 ring-red-800/30'
                            : 'bg-white text-slate-700 border-red-200 hover:bg-red-50'
                        }`}
                      >
                        <Store className="w-3.5 h-3.5" />
                        <span>Take Away (Bungkus)</span>
                      </button>
                    </div>
                  </div>

                  {/* Date & Time Selectors */}
                  <div>
                    <label className="block text-xs font-black uppercase text-red-950 tracking-wider mb-1">
                      Tentukan Tanggal & Jam Pengambilan / Konsumsi
                    </label>
                    <p className="text-[11px] text-red-900 mb-2 font-medium">
                      ⚠️ Pengisian waktu minimal <span className="font-black underline">2 jam dari sekarang</span> untuk persiapan koki & claypot.
                    </p>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[10px] font-extrabold text-red-900 uppercase tracking-wider mb-1">Tanggal Pesanan</label>
                        <input
                          type="date"
                          required
                          min={new Date().toISOString().slice(0, 10)}
                          value={scheduledDate}
                          onChange={handleDateChange}
                          className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-red-200 text-xs font-black text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-800 shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-extrabold text-red-900 uppercase tracking-wider mb-1">Jam Pengambilan (WIB)</label>
                        <input
                          type="time"
                          required
                          value={scheduledTime}
                          onChange={handleTimeChange}
                          className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-red-200 text-xs font-black text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-800 shadow-sm"
                        />
                      </div>
                    </div>

                    {timeError && (
                      <div className="mt-2.5 p-3 rounded-2xl bg-red-100 border border-red-300 text-red-950 text-xs font-bold flex items-start gap-2 shadow-sm">
                        <AlertCircle className="w-4 h-4 text-red-800 shrink-0 mt-0.5" />
                        <span>{timeError}</span>
                      </div>
                    )}
                  </div>

                </div>

                {/* 3. Pilih Cabang Outlet */}
                <div>
                  <label className="block text-xs font-black uppercase text-slate-800 tracking-wider mb-2">
                    Pilih Cabang Outlet Sidoarjo
                  </label>
                  <select
                    value={selectedOutlet}
                    onChange={(e) => setSelectedOutlet(e.target.value)}
                    className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-red-800 text-slate-800 shadow-sm"
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
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-800 text-slate-800"
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
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-800 text-slate-800"
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
                        className="w-full pl-10 pr-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-800 text-slate-800"
                      />
                    </div>
                  </div>
                </div>

                {/* 5. Summary & Action */}
                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100 flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Total ({cartItems.length} menu)</span>
                  <span className="text-red-900 text-base font-black">{formatRupiah(subtotal)}</span>
                </div>

                <button
                  type="submit"
                  disabled={!!timeError}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-red-900 to-rose-950 hover:from-red-950 hover:to-slate-900 disabled:bg-slate-400 text-white font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Lanjut ke Pembayaran QRIS & Bukti Bayar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* STEP 2: QRIS & UPLOAD BUKTI BAYAR */}
            {step === 2 && (
              <form onSubmit={handleSendWhatsApp} className="space-y-5">
                
                {/* Header Info Total Payment */}
                <div className="p-4 rounded-3xl bg-gradient-to-br from-red-950 via-red-900 to-rose-950 text-white shadow-[0_12px_30px_-8px_rgba(153,27,27,0.4)] text-center space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-200">TOTAL PEMBAYARAN QRIS</span>
                  <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    {formatRupiah(subtotal)}
                  </div>
                  <p className="text-[11px] text-red-100/90 font-medium">
                    Silakan scan QRIS di bawah ini melalui aplikasi M-Banking / E-Wallet Anda.
                  </p>
                </div>

                {/* QRIS Code Image Box (3D Card Frame) */}
                <div className="p-4 rounded-3xl bg-white border border-red-200 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] flex flex-col items-center text-center">
                  <div className="relative w-full max-w-[260px] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white p-2">
                    <img
                      src="/assets/qris-sabuba.jpg"
                      alt="QRIS Zeger Coffee Sabuba"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                  <div className="mt-3 text-[11px] font-bold text-slate-700">
                    <span className="text-red-900 font-extrabold">ZEGER! COFFEE (KOPI), SIDOARJO</span>
                    <span className="block text-[10px] text-slate-400 font-normal">NMID: ID1020043975504</span>
                  </div>
                </div>

                {/* Upload Bukti Pembayaran Section */}
                <div className="p-4 rounded-3xl bg-gradient-to-br from-slate-50 to-red-50/40 border border-slate-200/90 shadow-sm space-y-3">
                  <label className="block text-xs font-black uppercase text-slate-800 tracking-wider">
                    Upload Bukti Pembayaran (Transfer / Scan QRIS) *
                  </label>

                  {proofPreview ? (
                    <div className="relative rounded-2xl overflow-hidden border border-emerald-300 bg-emerald-50/60 p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-200 border border-slate-300 shrink-0">
                          <img src={proofPreview} alt="Bukti Transfer" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <span className="text-xs font-extrabold text-emerald-950 block line-clamp-1">
                            {proofFileName}
                          </span>
                          <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            Bukti bayar berhasil di-upload
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setProofFile(null);
                          setProofPreview('');
                          setProofFileName('');
                        }}
                        className="p-1.5 rounded-full bg-red-100 text-red-800 hover:bg-red-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="border-2 border-dashed border-red-300 hover:border-red-600 rounded-2xl p-5 text-center cursor-pointer transition-colors bg-white block">
                      <Upload className="w-6 h-6 text-red-800 mx-auto mb-1.5 animate-bounce" />
                      <span className="text-xs font-extrabold text-slate-800 block">
                        Klik untuk Pilih / Unggah Foto Bukti Transfer
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        Format: JPG, PNG, screenshot M-Banking / E-Wallet
                      </span>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs flex items-center justify-center gap-1 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Kembali</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 px-5 rounded-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-slate-400 text-white font-extrabold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Menyimpan & Membuka WA...' : 'Kirim Pesanan & Bukti Bayar via WA'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
