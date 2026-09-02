import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Send, CheckCircle2, Calendar, MapPin, Phone, User, Store, Utensils } from 'lucide-react';
import { SABUBA_DATA, formatRupiah } from '../data/sabubaData';

export default function ReceiptModal({ isOpen, onClose, orderData, onOpenWhatsApp }) {
  if (!isOpen || !orderData) return null;

  const {
    orderId,
    timestamp,
    customerName,
    customerPhone,
    scheduledFullText,
    scheduledTag,
    outletObj,
    cartItems,
    notes,
    subtotal,
  } = orderData;

  const handlePrintPDF = () => {
    const receiptEl = document.getElementById('thermal-receipt');
    if (!receiptEl) {
      window.print();
      return;
    }

    const printFrame = document.createElement('iframe');
    printFrame.style.position = 'fixed';
    printFrame.style.right = '0';
    printFrame.style.bottom = '0';
    printFrame.style.width = '0';
    printFrame.style.height = '0';
    printFrame.style.border = '0';
    document.body.appendChild(printFrame);

    const frameDoc = printFrame.contentWindow.document;
    frameDoc.open();
    frameDoc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Struk Pesanan - #${orderId || 'Sabuba'}</title>
          <style>
            @page {
              size: auto;
              margin: 5mm;
            }
            body {
              font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
              font-size: 11px;
              color: #000;
              background: #fff;
              margin: 0;
              padding: 10px;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            * { box-sizing: border-box; }
            .text-center { text-align: center; }
            .font-extrabold { font-weight: 800; }
            .font-bold { font-weight: 700; }
            .font-semibold { font-weight: 600; }
            .font-black { font-weight: 900; }
            .font-medium { font-weight: 500; }
            .uppercase { text-transform: uppercase; }
            .flex { display: flex; }
            .justify-between { justify-content: space-between; }
            .items-center { align-items: center; }
            .items-start { align-items: flex-start; }
            .justify-center { justify-content: center; }
            .flex-col { flex-direction: column; }
            .space-y-1 > * + * { margin-top: 4px; }
            .space-y-0\.5 > * + * { margin-top: 2px; }
            .space-y-2\.5 > * + * { margin-top: 10px; }
            .border-b { border-bottom: 1px solid #cbd5e1; }
            .border-t { border-top: 1px solid #cbd5e1; }
            .border-t-2 { border-top: 2px solid #0f172a; }
            .border-dashed { border-style: dashed; }
            .border-slate-300 { border-color: #cbd5e1; }
            .border-slate-200 { border-color: #e2e8f0; }
            .pb-4 { padding-bottom: 14px; }
            .mb-4 { margin-bottom: 14px; }
            .pb-3 { padding-bottom: 10px; }
            .mb-3 { margin-bottom: 10px; }
            .mt-3 { margin-top: 12px; }
            .mt-4 { margin-top: 16px; }
            .mt-6 { margin-top: 20px; }
            .pt-2 { padding-top: 8px; }
            .pt-2\.5 { padding-top: 10px; }
            .pt-3 { padding-top: 12px; }
            .pt-4 { padding-top: 14px; }
            .px-3 { padding-left: 12px; padding-right: 12px; }
            .py-1 { padding-top: 4px; padding-bottom: 4px; }
            .bg-red-900 { background-color: #7f1d1d; color: #fff; }
            .text-red-950 { color: #450a0a; }
            .text-red-900 { color: #7f1d1d; }
            .text-red-800 { color: #991b1b; }
            .text-slate-900 { color: #0f172a; }
            .text-slate-800 { color: #1e293b; }
            .text-slate-700 { color: #334155; }
            .text-slate-600 { color: #475569; }
            .text-slate-500 { color: #64748b; }
            .text-slate-400 { color: #94a3b8; }
            .text-amber-900 { color: #78350f; }
            .text-emerald-800 { color: #065f46; }
            .text-emerald-950 { color: #022c22; }
            .rounded-lg { border-radius: 8px; }
            .rounded-full { border-radius: 9999px; }
            .rounded-xl { border-radius: 12px; }
            .tracking-wider { letter-spacing: 0.05em; }
            .tracking-widest { letter-spacing: 0.1em; }
            .text-4xl { font-size: 32px; line-height: 1; }
            .text-3xl { font-size: 26px; line-height: 1.2; }
            .text-base { font-size: 15px; }
            .text-sm { font-size: 13px; }
            .text-xs { font-size: 11px; }
            .text-\[11px\] { font-size: 11px; }
            .text-\[10px\] { font-size: 10px; }
            .text-\[9px\] { font-size: 9px; }
            .text-\[8px\] { font-size: 8px; }
            .pl-3 { padding-left: 12px; }
            .italic { font-style: italic; }
            .inline-block { display: inline-block; }
            .bg-emerald-100 { background-color: #d1fae5; }
            .border-emerald-300 { border-color: #6ee7b7; }
            .bg-slate-50 { background-color: #f8fafc; }
            .flex-1 { flex: 1 1 0%; }
            .pr-2 { padding-right: 8px; }
            a { color: inherit; text-decoration: underline; }
          </style>
        </head>
        <body>
          <div style="max-width: 420px; margin: 0 auto;">
            ${receiptEl.innerHTML}
          </div>
        </body>
      </html>
    `);
    frameDoc.close();

    setTimeout(() => {
      printFrame.contentWindow.focus();
      printFrame.contentWindow.print();
      setTimeout(() => {
        if (document.body.contains(printFrame)) {
          document.body.removeChild(printFrame);
        }
      }, 1000);
    }, 250);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 print:p-0 print:static print:bg-white print:overflow-visible">
        {/* Backdrop (Hidden during print) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm print:hidden"
        />

        {/* Modal Window / Printable Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-100 z-10 my-6 flex flex-col print:shadow-none print:border-none print:max-w-full print:w-full print:my-0 print:rounded-none"
        >
          {/* Top Bar Action (Hidden on Print) */}
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-bold">Struk Pesanan Terjadwal</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Thermal Struk Card Content */}
          <div id="thermal-receipt" className="p-6 bg-white text-slate-800 font-mono text-xs leading-relaxed select-text print:p-4">
            
            {/* Header Brand */}
            <div className="text-center pb-4 mb-4 border-b border-dashed border-slate-300">
              <div className="inline-block bg-red-900 text-white font-extrabold px-3 py-1 rounded-lg text-sm tracking-wider uppercase mb-1">
                BUBUR BAKAR SABUBA
              </div>
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">
                Sarapan Claypot • Wonton • Laksa
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                {outletObj ? outletObj.name : 'Cabang Utama Sidoarjo'}
              </p>
              <p className="text-[9px] text-slate-400">
                {outletObj ? outletObj.address : 'Sidoarjo, Jawa Timur'}
              </p>

              {/* No Antrian Header Display */}
              <div className="mt-3 pt-2.5 border-t border-dashed border-slate-300 flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">NO. ANTRIAN</span>
                <span className="text-4xl font-black text-red-950 tracking-wider font-mono my-0.5">
                  #{orderData.queueNo || '001'}
                </span>
              </div>
            </div>

            {/* Order Info Barcode/ID */}
            <div className="space-y-1 pb-3 mb-3 border-b border-dashed border-slate-300 font-sans text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">NO. TRANSAKSI:</span>
                <span className="font-black text-slate-900">#{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">WAKTU ORDER:</span>
                <span className="font-bold text-slate-700">{timestamp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">JADWAL AMBIL:</span>
                <span className="font-extrabold text-red-900">{scheduledFullText}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">KONSUMSI:</span>
                <span className="font-black uppercase text-amber-900">
                  {scheduledTag === 'dine-in' ? 'Dine In (Makan Tempat)' : 'Take Away (Bungkus)'}
                </span>
              </div>
            </div>

            {/* Customer Info */}
            <div className="space-y-1 pb-3 mb-3 border-b border-dashed border-slate-300 font-sans text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">PEMESAN:</span>
                <span className="font-bold text-slate-800">{customerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">NO. WHATSAPP:</span>
                <span className="font-bold text-slate-800">{customerPhone || '-'}</span>
              </div>
            </div>

            {/* Items List Table */}
            <div className="py-2 space-y-2.5 font-sans">
              <div className="flex justify-between text-[10px] font-black uppercase text-slate-400 pb-1 border-b border-slate-200">
                <span>ITEM & MENU</span>
                <span>SUBTOTAL</span>
              </div>

              {cartItems.map((item, idx) => (
                <div key={idx} className="space-y-0.5 text-xs">
                  <div className="flex justify-between items-start font-bold text-slate-900">
                    <span className="flex-1 pr-2">
                      {idx + 1}. {item.name} <span className="text-red-800 font-extrabold">(x{item.quantity})</span>
                    </span>
                    <span className="font-black">{formatRupiah(item.totalPrice)}</span>
                  </div>

                  {/* Toppings list */}
                  {item.selectedToppings && item.selectedToppings.length > 0 && (
                    <div className="pl-3 text-[10px] text-slate-600 font-medium">
                      + Topping: {item.selectedToppings.map(t => t.name).join(', ')}
                    </div>
                  )}

                  {/* Item note */}
                  {item.notes && (
                    <div className="pl-3 text-[10px] text-amber-800 italic">
                      + Note: {item.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Notes */}
            {notes && (
              <div className="mt-3 p-2 rounded-xl bg-slate-50 border border-slate-200 text-[10px] font-sans text-slate-600">
                <span className="font-bold text-slate-800">Catatan Khusus:</span> {notes}
              </div>
            )}

            {/* Total Section */}
            <div className="mt-4 pt-3 border-t-2 border-slate-900 font-sans space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Subtotal ({cartItems.length} menu):</span>
                <span>{formatRupiah(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm font-black text-slate-900 pt-1 border-t border-slate-200">
                <span>TOTAL PEMBAYARAN:</span>
                <span className="text-red-900 font-black text-base">{formatRupiah(subtotal)}</span>
              </div>
            </div>

            {/* Footer Struk */}
            <div className="mt-6 text-center pt-4 border-t border-dashed border-slate-300 text-[10px] font-sans text-slate-500 space-y-1">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 font-black uppercase tracking-wider text-[9px] mb-1 border border-emerald-300">
                STATUS: LUNAS (QRIS TERJADWAL)
              </div>
              {orderData.driveProofUrl ? (
                <p className="text-[9px] text-emerald-800 font-bold flex items-center justify-center gap-1">
                  <span>✓ Bukti Bayar GDrive:</span>
                  <a
                    href={orderData.driveProofUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-emerald-950 font-extrabold hover:text-emerald-700"
                  >
                    Lihat Foto ({orderData.proofFileName || 'GDrive Link'})
                  </a>
                </p>
              ) : orderData.proofFileName ? (
                <p className="text-[9px] text-emerald-800 font-bold">
                  ✓ Bukti Bayar Terlampir: {orderData.proofFileName}
                </p>
              ) : null}
              <p className="font-bold text-slate-700 mt-1">Terima kasih telah memesan di Sabuba!</p>
              <p>Harap tunjukkan struk ini saat pengambilan/kedatangan di outlet.</p>
              <p className="text-[8px] text-slate-400 pt-2">Powered by Sabuba Digital Order System</p>
            </div>

          </div>

          {/* Bottom Actions (Hidden on Print) */}
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col gap-2 print:hidden">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handlePrintPDF}
                className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak / Download PDF</span>
              </button>

              <button
                onClick={onOpenWhatsApp}
                className="py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Kirim ke WA</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2 text-center text-xs font-bold text-slate-500 hover:text-slate-700"
            >
              Tutup Struk
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
