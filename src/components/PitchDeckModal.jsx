import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ChevronLeft, ChevronRight, Download, Share2, Sparkles, TrendingUp,
  DollarSign, ShieldCheck, Cpu, Smartphone, BarChart3, PieChart, Layers,
  Award, Play, CheckCircle2, ArrowRight, RefreshCw, Bot, Check, Maximize2,
  Minimize2, ExternalLink, Calendar, Building2, Zap, AlertCircle
} from 'lucide-react';
import { SABUBA_DATA } from '../data/sabubaData';

export default function PitchDeckModal({ isOpen, onClose, defaultSlide = 0 }) {
  const [currentSlide, setCurrentSlide] = useState(defaultSlide);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [customVideoUrl, setCustomVideoUrl] = useState('');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Interactive ROI Calculator State
  const [dailySalesTarget, setDailySalesTarget] = useState(2000000); // Rp 2.000.000 / day default
  const investmentAmount = 100000000; // Rp 100.000.000 (Sabuba Classic)
  const netMarginPercent = 0.54; // 54% based on real history
  const partnerSharePercent = 0.50; // 50% Bagi hasil mitra

  // Historical Screenshots Real Financial Data
  const financialData = [
    { period: 'Jan 2026', omset: 32176000, profit: 16382000, margin: 50.9 },
    { period: 'Feb-Mar 2026', omset: 37027000, profit: 19181000, margin: 51.8 },
    { period: 'Apr 2026', omset: 51879000, profit: 28039500, margin: 54.0 },
    { period: 'Mei 2026', omset: 71680000, profit: 38623500, margin: 53.8 },
    { period: 'Jun 2026', omset: 66792000, profit: 36617000, margin: 54.8 },
  ];

  // Calculated ROI Metrics
  const monthlyOmset = dailySalesTarget * 30;
  const monthlyNetProfit = monthlyOmset * netMarginPercent;
  const partnerMonthlyShare = monthlyNetProfit * partnerSharePercent;
  const partnerAnnualShare = partnerMonthlyShare * 12;
  const paybackMonths = Math.max(1, (investmentAmount / partnerMonthlyShare)).toFixed(1);
  const annualRoiPercent = ((partnerAnnualShare / investmentAmount) * 100).toFixed(0);

  useEffect(() => {
    setCurrentSlide(defaultSlide);
  }, [defaultSlide, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSlide]);

  if (!isOpen) return null;

  const slides = [
    // Slide 1: Cover & Vision
    {
      id: 'cover',
      title: 'Executive Summary',
      subtitle: 'Pitch Deck Kemitraan & Proposal Investasi Fast Casual Food Tech',
      content: (
        <div className="flex flex-col h-full justify-between py-2 sm:py-4">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Investment Deck & Opportunity 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              SABUBA <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">Fast Casual Food Tech</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
              Membuka Peluang Kemitraan Strategis dengan Skema <strong className="text-amber-300 font-extrabold">Mitra Pasif 100%</strong> dan <strong className="text-emerald-400 font-extrabold">Bagi Hasil 50% - 50%</strong>. Bebas repot operasional, terpantau real-time via AI POS online.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Nilai Investasi</div>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1">Rp 100 Juta</div>
                <div className="text-xs text-slate-400 mt-1">Sabuba Classic (Motor Custom)</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Skema Bagi Hasil</div>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1">50% : 50%</div>
                <div className="text-xs text-slate-400 mt-1">Mitra Pasif (Operasional 100% HQ)</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md">
                <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">Estimasi Payback</div>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1">~5.3 Bulan</div>
                <div className="text-xs text-slate-400 mt-1">Berdasarkan Track Record Real</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/60 via-red-900/40 to-slate-900 border border-red-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 font-bold">
                AI
              </div>
              <div>
                <div className="text-sm font-bold text-white">Full Transparency & AI POS Integrated</div>
                <div className="text-xs text-slate-300">Semua laporan omset & profit dapat dipantau dari smartphone Anda kapan saja.</div>
              </div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-xs uppercase shrink-0">
              Mitra Tinggal Terima Hasil
            </div>
          </div>
        </div>
      )
    },

    // Slide 2: McKinsey Market Analysis (TAM/SAM/SOM)
    {
      id: 'market-analysis',
      title: 'Analisis Pasar (Top-Down McKinsey Framework)',
      subtitle: 'Potensi Pasar Kuliner Sarapan & Fast Casual Food di Indonesia',
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 text-xs sm:text-sm">
            Pasar makanan sarapan & street food di Indonesia memiliki frekuensi pembelian sangat tinggi (daily essential). Sabuba mengambil ceruk pasar dengan membawa standar kualitas resto pada harga street food yang sangat terjangkau.
          </p>

          {/* TAM SAM SOM Funnel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-gradient-to-b from-red-950/80 to-slate-900 border border-red-800/60 relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3 py-1 bg-red-800 text-white font-extrabold text-[10px] uppercase rounded-bl-xl">
                TAM
              </div>
              <div className="text-xs font-bold text-red-300 uppercase tracking-wider mb-1">Total Addressable Market</div>
              <div className="text-3xl font-black text-white">Rp 120 Triliun</div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Total belanja makanan cepat saji, sarapan bubur/pagi, dan street food konsumsi harian masyarakat Indonesia.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-950/80 to-slate-900 border border-amber-800/60 relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3 py-1 bg-amber-600 text-white font-extrabold text-[10px] uppercase rounded-bl-xl">
                SAM
              </div>
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">Serviceable Addressable Market</div>
              <div className="text-3xl font-black text-white">Rp 15 Triliun</div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Pasar segmen komuter perkotaan, pekerja kantor, dan area pemukiman di kota Tier-1 & Tier-2 Jawa & Sumatra.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-950/80 to-slate-900 border border-emerald-800/60 relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-600 text-white font-extrabold text-[10px] uppercase rounded-bl-xl">
                SOM
              </div>
              <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1">Serviceable Obtainable Market</div>
              <div className="text-3xl font-black text-white">Rp 500 Miliar</div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Target proyeksi ekspansi Sabuba 1,000 unit outlet street food & hub dalam 3-5 tahun ke depan.
              </p>
            </div>
          </div>

          {/* Key Industry Catalysts */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">High Repeat Order</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Konsumsi rutin 4-6x per minggu oleh pelanggan setia.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-400/10 text-emerald-400 shrink-0">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Zero Overhead Rent</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Tanpa sewa ruko mahal, net margin terjaga di atas 50%.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-sky-400/10 text-sky-400 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Fast Kitchen Assembly</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Penyajian instan &lt; 2 menit per porsi dengan standar SOP tinggi.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Real Historical Performance Data (Backed by Screenshots)
    {
      id: 'financial-trackrecord',
      title: 'Historical Financial Performance (Empirical Real Data)',
      subtitle: 'Bukti Kinerja Keuangan Outlet Sabuba Januari - Juni 2026',
      content: (
        <div className="space-y-5">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center justify-between gap-2">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Data bersumber langsung dari laporan POS Sistem Real-time Sabuba.
            </span>
            <span className="text-[10px] bg-emerald-500/20 px-2.5 py-0.5 rounded-full font-bold">VERIFIED REAL DATA</span>
          </div>

          {/* Performance Bar Chart / Table Representation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Chart Bars */}
            <div className="lg:col-span-7 space-y-3 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Tren Omset & Net Profit Bulanan (Rp)</span>
                <span className="text-amber-400 font-extrabold text-[11px]">Rata-rata Margin Net ~53%</span>
              </div>

              {financialData.map((d, i) => {
                const maxOmset = 75000000;
                const widthOmset = (d.omset / maxOmset) * 100;
                const widthProfit = (d.profit / maxOmset) * 100;

                return (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-300">
                      <span>{d.period}</span>
                      <span className="text-slate-400">
                        Omset: <strong className="text-white">Rp {(d.omset / 1000000).toFixed(1)}M</strong> | Profit: <strong className="text-emerald-400">Rp {(d.profit / 1000000).toFixed(1)}M</strong> ({d.margin}%)
                      </span>
                    </div>

                    <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden relative flex">
                      {/* Omset Bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${widthOmset}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full relative group"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Metric Summary Cards */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-slate-900 border border-amber-500/30">
                <div className="text-xs text-amber-300 font-bold uppercase">Peak Monthly Sales (Mei 2026)</div>
                <div className="text-3xl font-black text-white mt-1">Rp 71.680.000</div>
                <div className="text-xs text-emerald-400 font-bold mt-1">Keuntungan Bersih: Rp 38.623.500 (53.8%)</div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-slate-900 border border-emerald-500/30">
                <div className="text-xs text-emerald-300 font-bold uppercase">Hak Bagi Hasil Mitra 50% (Peak Month)</div>
                <div className="text-3xl font-black text-emerald-400 mt-1">Rp 19.311.750 / Bln</div>
                <div className="text-xs text-slate-300 mt-1">Dengan hasil ini, balik modal tercapai hanya dalam <strong className="text-amber-300">5.1 bulan!</strong></div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Business & Partnership Scheme (Mitra Pasif 50:50)
    {
      id: 'partnership-scheme',
      title: 'Skema Kemitraan Pasif & Bagi Hasil 50%',
      subtitle: 'Mitra Fokus Investasi, Tim Sabuba Kelola 100% Operasional Harian',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mitra Rights */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-amber-500/40 relative">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white">Peran & Hak Mitra (Investor)</h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Mitra Pasif 100%:</strong> Bebas dari kerumitan rekrutmen karyawan, sewa tempat, & belanja bahan baku.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Hak Bagi Hasil 50%:</strong> Menerima bagian 50% dari Laba Bersih (Net Profit) outlet setiap bulan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Akses Dashboard POS Live:</strong> Memantau setiap transaksi yang masuk secara real-time via smartphone.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Kepemilikan Aset Outlet:</strong> Unit motor custom Sabuba Classic menjadi hak milik kemitraan.</span>
                </li>
              </ul>
            </div>

            {/* HQ Responsibilities */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-sky-500/40 relative">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white">Tanggung Jawab Pengelola (Sabuba HQ)</h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Manajemen SDM & Operational:</strong> Rekrutmen, pelatihan SOP, & penggajian tim operasional.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Supply Chain Terpusat:</strong> Pengiriman bahan baku bumbu rahasia & topping dari Central Kitchen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Pemasaran & Branding:</strong> Kampanye iklan digital, promosi GoFood/GrabFood/ShopeeFood, & promo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Perawatan Unit & Maintenance:</strong> Maintenance berkala motor custom tiga roda Sabuba.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-800/40 flex items-center justify-between">
            <div className="text-xs text-slate-300">
              <strong className="text-emerald-400 font-bold">Skema Tanpa Royalties Sembunyi-Sembunyi:</strong> Pembagian hasil dihitung murni dari Net Profit (Omset dikurangi HPP & Biaya Operasional). Transparan 100%!
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Integrated Technology (AI Chatbot & POS Online)
    {
      id: 'tech-stack',
      title: 'Teknologi & Ekosistem Digital Terintegrasi',
      subtitle: 'Sistem POS Cloud, AI Chatbot Report, & Transparansi 24/7',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-sky-500/30">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-3">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-white">POS Online Real-Time</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Setiap transaksi kasir di lapangan langsung tercatat di Cloud Database. Mitra dapat memantau omset harian, jumlah porsi terjual, hingga metode pembayaran (QRIS/Cash).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Bot className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-white">AI Assistant Report</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Integrasi AI Chatbot untuk analisis otomatis: laporan harian via WhatsApp/App, rekomendasi lokasi jualan terbaik, serta prediksi stok bahan baku agar tidak pernah kehabisan.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-white">Auto Export & Audit</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Laporan keuangan bulanan dapat di-export instan ke format PDF / Excel secara otomatis untuk keperluan transparansi audit pembagian hasil mitra.
              </p>
            </div>
          </div>

          {/* Interactive POS Simulation Preview */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Live Simulation POS Dashboard (Sabuba Cloud POS)</span>
              </div>
              <span className="text-[10px] text-slate-400">Sync status: Online</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Penjualan Hari Ini</div>
                <div className="text-lg font-black text-amber-400 mt-0.5">Rp 2.450.000</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Total Transaksi</div>
                <div className="text-lg font-black text-white mt-0.5">142 Trx</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Est. Net Profit (54%)</div>
                <div className="text-lg font-black text-emerald-400 mt-0.5">Rp 1.323.000</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Hak Bagi Hasil Mitra</div>
                <div className="text-lg font-black text-sky-400 mt-0.5">Rp 661.500</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Franchise Model Roadmap & Matrix
    {
      id: 'models-roadmap',
      title: 'Pilihan Model Kemitraan Sabuba',
      subtitle: 'Sabuba Classic Beroperasi & Tersedia Sekarang! Model Lain Segera Hadir.',
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Model 1: Sabuba Classic (AVAILABLE NOW) */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-950/90 to-slate-900 border-2 border-amber-400 relative flex flex-col justify-between shadow-xl">
              <div className="absolute -top-3 right-3 px-3 py-1 bg-amber-400 text-slate-950 font-black text-[10px] uppercase rounded-full shadow">
                OPEN NOW
              </div>
              <div>
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">Street Food Motor Custom</div>
                <h4 className="text-xl font-black text-white mt-1">Sabuba Classic</h4>
                <div className="text-2xl font-black text-amber-400 mt-2">Rp 100 Juta</div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Unit motor tiga roda custom fleksibel. Hemat sewa lokasi, mobilitas tinggi, siap jualan dalam hitungan menit.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-400/20 text-xs font-bold text-emerald-400">
                ✓ Bagi Hasil 50:50 Mitra Pasif
              </div>
            </div>

            {/* Model 2: Sabuba Container (SOON) */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 opacity-75 relative flex flex-col justify-between">
              <div className="absolute -top-3 right-3 px-3 py-1 bg-slate-800 text-slate-400 font-bold text-[10px] uppercase rounded-full">
                SOON
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Semi-Permanent Hub</div>
                <h4 className="text-xl font-black text-slate-300 mt-1">Sabuba Container</h4>
                <div className="text-xl font-bold text-slate-400 mt-2">Coming Soon</div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Konsep container booth modern untuk lokasi strategis seperti SPBU, minimarket, & pelataran gedung.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-semibold text-slate-500">
                ⏳ Dalam Tahap Persiapan
              </div>
            </div>

            {/* Model 3: Sabuba Resto (SOON) */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 opacity-75 relative flex flex-col justify-between">
              <div className="absolute -top-3 right-3 px-3 py-1 bg-slate-800 text-slate-400 font-bold text-[10px] uppercase rounded-full">
                SOON
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dine-in Fast Casual</div>
                <h4 className="text-xl font-black text-slate-300 mt-1">Sabuba Resto</h4>
                <div className="text-xl font-bold text-slate-400 mt-2">Coming Soon</div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Format outlet ruko dengan tempat duduk ber-AC & area outdoor modern untuk pengalaman dine-in keluarga.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-semibold text-slate-500">
                ⏳ Dalam Tahap Persiapan
              </div>
            </div>

            {/* Model 4: Sabuba Express Mall (SOON) */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 opacity-75 relative flex flex-col justify-between">
              <div className="absolute -top-3 right-3 px-3 py-1 bg-slate-800 text-slate-400 font-bold text-[10px] uppercase rounded-full">
                SOON
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Island Kiosk Mall</div>
                <h4 className="text-xl font-black text-slate-300 mt-1">Sabuba Express</h4>
                <div className="text-xl font-bold text-slate-400 mt-2">Coming Soon</div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Format booth island eksklusif untuk food court pusat perbelanjaan & tempat keramaian indoor.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-semibold text-slate-500">
                ⏳ Dalam Tahap Persiapan
              </div>
            </div>

          </div>
        </div>
      )
    },

    // Slide 7: Interactive Financial Projection & ROI Calculator
    {
      id: 'roi-calculator',
      title: 'Kalkulator Proyeksi Keuangan & ROI Mitra',
      subtitle: 'Simulasikan Pembagian Hasil Bulanan & Kecepatan Balik Modal Anda',
      content: (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Interactive Slider Input Controls */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                  <span>Target Penjualan Harian per Outlet:</span>
                  <span className="text-amber-400 text-base font-black">
                    Rp {dailySalesTarget.toLocaleString('id-ID')}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="4000000"
                  step="100000"
                  value={dailySalesTarget}
                  onChange={(e) => setDailySalesTarget(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>Rp 1.000.000 (Konservatif)</span>
                  <span>Rp 2.200.000 (Rata-rata)</span>
                  <span>Rp 4.000.000 (Optimis)</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="flex justify-between">
                  <span>Omset Kotor Bulanan (30 Hari):</span>
                  <strong className="text-white">Rp {monthlyOmset.toLocaleString('id-ID')}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Est. Net Profit Store (54%):</span>
                  <strong className="text-emerald-400">Rp {monthlyNetProfit.toLocaleString('id-ID')}</strong>
                </div>
                <div className="flex justify-between border-t border-slate-800 pt-2 font-bold">
                  <span className="text-amber-300">Hak Bagi Hasil Mitra Pasif (50%):</span>
                  <strong className="text-amber-400 text-sm">Rp {partnerMonthlyShare.toLocaleString('id-ID')} / Bln</strong>
                </div>
              </div>
            </div>

            {/* Calculated Output Highlight */}
            <div className="md:col-span-6 space-y-4 bg-gradient-to-br from-amber-950/80 via-slate-900 to-slate-900 p-6 rounded-2xl border border-amber-500/40">
              <div>
                <div className="text-xs font-bold uppercase text-amber-300">Proyeksi Balik Modal (BEP / Payback Period)</div>
                <div className="text-4xl sm:text-5xl font-black text-white mt-1">
                  {paybackMonths} <span className="text-lg font-bold text-amber-300">Bulan</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Pengembalian investasi 100% modal awal Rp 100 Juta hanya butuh waktu kurang dari setahun!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-amber-500/20">
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase">Proyeksi Profit Mitra / Tahun</div>
                  <div className="text-xl font-black text-emerald-400 mt-0.5">
                    Rp {partnerAnnualShare.toLocaleString('id-ID')}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase">Annualized ROI</div>
                  <div className="text-xl font-black text-sky-400 mt-0.5">
                    {annualRoiPercent}% / Tahun
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )
    },

    // Slide 8: Apple Media Mockup (iPhone & iPad Video Placeholders)
    {
      id: 'media-mockup',
      title: 'Media Preview & Operational Showcase',
      subtitle: 'Lihat Video Operasional Outlet, Motor Custom, & Antusiasme Pelanggan',
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* iPad Pro Video Frame Placeholder */}
            <div className="md:col-span-8 bg-slate-900 p-4 sm:p-6 rounded-3xl border border-slate-800 shadow-2xl relative">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>iPad Pro Video Showcase Frame</span>
                <span className="text-amber-400 text-[11px]">Ready for Video Embed</span>
              </div>

              {/* Mockup Frame */}
              <div className="relative aspect-video rounded-2xl bg-black overflow-hidden border-2 border-slate-700 flex flex-col items-center justify-center group">
                {customVideoUrl ? (
                  <iframe
                    src={customVideoUrl}
                    title="Sabuba Video Preview"
                    className="w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src="/assets/Konsep/5. Konsep Street Food.jpg"
                      alt="Sabuba Video Placeholder"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer mb-3">
                        <Play className="w-8 h-8 fill-slate-950 ml-1" />
                      </div>
                      <h4 className="text-lg font-black text-white">Video Operasional & Custom Bike Sabuba Classic</h4>
                      <p className="text-xs text-slate-300 max-w-md mt-1">
                        Siap dihubungkan dengan link video YouTube/MP4 demonstrasi outlet & liputan media.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Video URL Input Field for direct testing */}
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Paste URL Video YouTube Embed di sini (opsional)..."
                  value={customVideoUrl}
                  onChange={(e) => setCustomVideoUrl(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                {customVideoUrl && (
                  <button
                    onClick={() => setCustomVideoUrl('')}
                    className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 rounded-xl"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* iPhone 16 Pro Frame Mockup */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="w-56 h-[400px] bg-slate-900 rounded-[3rem] p-3 border-4 border-slate-700 shadow-2xl relative flex flex-col justify-between">
                {/* Dynamic Island */}
                <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2 z-10"></div>
                
                {/* Screen Content */}
                <div className="flex-1 bg-slate-950 rounded-[2.2rem] overflow-hidden p-3 relative flex flex-col justify-between border border-slate-800">
                  <div className="space-y-2">
                    <div className="text-[10px] font-black text-amber-400 uppercase tracking-widest text-center">
                      MOBILE POS SIMULATOR
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-[10px] text-white">
                      <div className="font-bold">Kasir Online Sabuba</div>
                      <div className="text-emerald-400 font-extrabold mt-0.5">Order #1042 - Paid (QRIS)</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-[10px] text-slate-300">
                      <div>• 2x Bubur Bakar Beef Smoke</div>
                      <div>• 2x Teh Tarik Rempah</div>
                      <div className="font-bold text-white mt-1">Total: Rp 64.000</div>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-amber-400 text-slate-950 text-[10px] font-black text-center">
                    Real-time Cloud Sync Active
                  </div>
                </div>

                {/* Bottom Home Indicator */}
                <div className="w-24 h-1 bg-slate-600 rounded-full mx-auto mt-2"></div>
              </div>
              <span className="text-[11px] text-slate-400 font-bold mt-2">iPhone POS Real-Time Preview</span>
            </div>

          </div>
        </div>
      )
    },

    // Slide 9: Investment Call to Action & Contact
    {
      id: 'cta-investment',
      title: 'Bergabung Menjadi Mitra Strategis Sabuba',
      subtitle: 'Slot Kemitraan Terbatas untuk Pengembangan Outlet Sabuba Classic 2026',
      content: (
        <div className="flex flex-col h-full justify-between space-y-6">
          <div className="space-y-4">
            <div className="p-6 rounded-3xl bg-gradient-to-r from-red-950 via-slate-900 to-amber-950 border border-amber-400/40 text-center space-y-3">
              <span className="px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider">
                Kesempatan Emas 2026
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Mulai Kemitraan Pasif Sabuba Classic Hari Ini
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                Dapatkan kepemilikan bisnis Fast Casual Food Tech dengan potensi pasar triliunan, net margin di atas 50%, dan pengelolaan operasional 100% dari kantor pusat.
              </p>

              <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-bold text-white">
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> Modal Investasi Rp 100 Juta
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Bagi Hasil 50% Mitra / 50% HQ
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" /> Est. BEP ~5.3 Bulan
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=Halo%20Tim%20Sabuba,%20saya%20sudah%20membaca%20Pitch%20Deck%20Proposal%20Kemitraan%20Rp%20100Jt%20(Mitra%20Pasif%2050:50).%20Saya%20tertarik%20untuk%20diskusi%20lebih%20lanjut.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm shadow-2xl transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Konsultasi Kemitraan via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Cetak / Download PDF Proposal</span>
            </button>
          </div>
        </div>
      )
    }
  ];

  const currentSlideObj = slides[currentSlide];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(s => s + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(s => s - 1);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-2 sm:p-4 md:p-6 overflow-y-auto">
        
        {/* Printable Proposal Container Wrapper */}
        <motion.div
          id="proposal-pitch-deck"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className={`w-full max-w-6xl bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between ${
            isFullscreen ? 'fixed inset-2 z-50 max-w-none rounded-none' : 'max-h-[92vh]'
          }`}
        >

          {/* Top Bar Header */}
          <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs">
                SBB
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-white tracking-wide">
                  Sabuba Pitch Deck & Proposal Kemitraan
                </h3>
                <p className="text-[11px] text-slate-400">
                  Slide {currentSlide + 1} dari {slides.length}: <span className="text-amber-400 font-bold">{currentSlideObj.title}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors hidden sm:flex"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => window.print()}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center gap-1.5 transition-colors"
                title="Download / Print PDF"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-red-900/60 text-slate-300 hover:text-white transition-colors ml-1"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slide Main Body */}
          <div className="p-4 sm:p-8 flex-1 overflow-y-auto min-h-[420px] flex flex-col justify-between">
            <div className="mb-4">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
                {currentSlideObj.subtitle}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {currentSlideObj.title}
              </h2>
            </div>

            <div className="flex-1 my-2">
              {currentSlideObj.content}
            </div>
          </div>

          {/* Slide Navigation Bottom Bar */}
          <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            
            {/* Slide Indicator Dots & Numbers */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentSlide
                      ? 'w-8 bg-amber-400'
                      : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                  title={`Slide ${idx + 1}: ${s.title}`}
                />
              ))}
            </div>

            {/* Prev / Next Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-white text-xs font-bold flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <span className="text-xs font-extrabold text-slate-400">
                {currentSlide + 1} / {slides.length}
              </span>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:pointer-events-none text-slate-950 text-xs font-black flex items-center gap-1 transition-colors shadow-lg"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
