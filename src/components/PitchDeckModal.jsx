import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ChevronLeft, ChevronRight, Download, Share2, Sparkles, TrendingUp,
  DollarSign, ShieldCheck, Cpu, Smartphone, BarChart3, PieChart, Layers,
  Award, Play, CheckCircle2, ArrowRight, RefreshCw, Bot, Check, Maximize2,
  Minimize2, ExternalLink, Calendar, Building2, Zap, Flame, Star, Utensils
} from 'lucide-react';
import { SABUBA_DATA, formatRupiah } from '../data/sabubaData';

export default function PitchDeckModal({ isOpen, onClose, defaultSlide = 0 }) {
  const [currentSlide, setCurrentSlide] = useState(defaultSlide);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [customVideoUrl, setCustomVideoUrl] = useState('');
  const [activeMenuTab, setActiveMenuTab] = useState('all');

  // Interactive ROI Calculator State
  const [dailySalesTarget, setDailySalesTarget] = useState(2000000); // Rp 2.000.000 / day default
  const investmentAmount = 100000000; // Rp 100.000.000 (Sabuba Classic)
  const netMarginPercent = 0.54; // 54% based on real data
  const partnerSharePercent = 0.50; // 50% Bagi hasil mitra

  // Historical Screenshots Real Financial Data
  const financialData = [
    { period: 'Jan 2026', omset: 32176000, profit: 16382000, margin: 50.9, height: 45 },
    { period: 'Feb-Mar 2026', omset: 37027000, profit: 19181000, margin: 51.8, height: 55 },
    { period: 'Apr 2026', omset: 51879000, profit: 28039500, margin: 54.0, height: 75 },
    { period: 'Mei 2026', omset: 71680000, profit: 38623500, margin: 53.8, height: 100 },
    { period: 'Jun 2026', omset: 66792000, profit: 36617000, margin: 54.8, height: 92 },
  ];

  // Featured Menu Items for Animated Showcase
  const featuredMenu = [
    {
      name: 'Bubur (Ori) Mix (Ayam + Sapi)',
      price: 19000,
      category: 'bubur',
      tag: 'BEST SELLER #1',
      image: 'https://drive.google.com/thumbnail?id=15khQoPH2F0ia_gDjRNtEWjN3yjAc1LTm&sz=w800',
      cogs: '32%',
      margin: '68% Gross Margin',
    },
    {
      name: 'Bubur (Kuah Kuning) Sapi',
      price: 19000,
      category: 'bubur',
      tag: 'FAVORITE',
      image: 'https://drive.google.com/thumbnail?id=16KK3fHQZ8cZlWU2MMhId3wGKYFfp0572&sz=w800',
      cogs: '30%',
      margin: '70% Gross Margin',
    },
    {
      name: 'Bubur (Kuah Laksa) Mix',
      price: 19000,
      category: 'bubur',
      tag: 'SPICY SIGNATURE',
      image: 'https://drive.google.com/thumbnail?id=1N9PYBAox07AKVBxRgWjtaHXc3fS7Kvsb&sz=w800',
      cogs: '31%',
      margin: '69% Gross Margin',
    },
    {
      name: 'Wonton Kuah Dumpling Ayam',
      price: 13000,
      category: 'wonton',
      tag: 'HIGH REPEAT ORDER',
      image: 'https://drive.google.com/thumbnail?id=1LLms9wP-r2XxSGJS5fhbq-OWf9s30na7&sz=w800',
      cogs: '28%',
      margin: '72% Gross Margin',
    },
    {
      name: 'Dim Sum Siomay Ayam (4 Pcs)',
      price: 13000,
      category: 'wonton',
      tag: 'ADD-ON POPULER',
      image: 'https://drive.google.com/thumbnail?id=1nEAhDwYbP2d6O4I7TD8557BkjboXn8-f&sz=w800',
      cogs: '27%',
      margin: '73% Gross Margin',
    },
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
    // ----------------------------------------------------
    // Slide 1: FRONT COVER - Big Menu Photo + Glassmorphic Cards
    // ----------------------------------------------------
    {
      id: 'cover',
      title: 'Kemitraan Proposal 2026',
      subtitle: 'Sabuba Fast Casual Food Tech Startup',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-900 font-extrabold text-xs uppercase tracking-wider shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />
              <span>Investment Deck & Partnership 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight"
            >
              SABUBA <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Fast Casual Food Tech</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              Peluang investasi kemitraan strategis <strong className="text-slate-900 font-bold">Sabuba Classic</strong>. Konsep <strong className="text-blue-600 font-bold">Mitra Pasif 100%</strong> dengan <strong className="text-emerald-600 font-bold">Bagi Hasil 50% - 50%</strong>. Bebas dari kerumitan operasional harian, terpantau real-time 24/7 via sistem AI POS.
            </motion.p>

            {/* Key Value Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-3 pt-2"
            >
              <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-md">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Investasi</div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">Rp 100 Jt</div>
                <div className="text-[10px] text-blue-600 font-bold mt-0.5">Sabuba Classic</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-md">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Bagi Hasil</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600 mt-0.5">50% : 50%</div>
                <div className="text-[10px] text-slate-500 font-medium mt-0.5">Mitra Pasif</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-md">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Est. BEP</div>
                <div className="text-xl sm:text-2xl font-black text-violet-600 mt-0.5">~5.3 Bln</div>
                <div className="text-[10px] text-slate-500 font-medium mt-0.5">Track Record Real</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Big High-Res Menu Image Showcase */}
          <div className="lg:col-span-6 relative flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border-4 border-white group"
            >
              <img
                src="https://drive.google.com/thumbnail?id=15khQoPH2F0ia_gDjRNtEWjN3yjAc1LTm&sz=w800"
                alt="Sabuba Bubur Bakar Claypot Signature"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay & Floating Glass Badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                
                {/* Floating Top Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 right-4 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg text-slate-900 text-xs font-black flex items-center gap-2"
                >
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                  <span>Khas Aromatis Claypot</span>
                </motion.div>

                {/* Bottom Content overlay */}
                <div className="space-y-1 text-white">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] uppercase">
                      BEST SELLER #1
                    </span>
                    <span className="text-xs text-amber-200 font-bold">100% Halal & Fresh</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white">Bubur Bakar Claypot Sabuba</h3>
                  <p className="text-xs text-slate-200 max-w-md">
                    Inovasi kuliner sarapan dengan kelezatan autentik, topping berlimpah, & gross margin tinggi hingga 70%.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 2: 3D Funnel Infographic (TAM / SAM / SOM Market Analysis)
    // ----------------------------------------------------
    {
      id: 'market-funnel',
      title: 'Top-Down McKinsey Market Analysis',
      subtitle: 'Potensi Pasar Kuliner Sarapan & Fast Casual Food di Indonesia',
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 text-xs sm:text-sm">
            Pasar makanan sarapan & street food di Indonesia merupakan kebutuhan harian (daily essential) dengan tingkat repeat order sangat tinggi. Sabuba mengambil ceruk pasar fast casual street food modern yang efisien & higienis.
          </p>

          {/* 3D Funnel Infographic (Matches Attached Reference Image 4) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: 3D Funnel Visual Stack */}
            <div className="md:col-span-6 space-y-3">
              {/* Funnel Level 1: TAM */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="p-5 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl relative overflow-hidden group"
              >
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <span className="px-2.5 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-wider">
                      TAM (Total Addressable Market)
                    </span>
                    <h3 className="text-3xl font-black mt-1">Rp 120 Triliun</h3>
                    <p className="text-xs text-blue-100 mt-1">Total konsumsi sarapan & street food harian di seluruh Indonesia</p>
                  </div>
                  <div className="text-4xl font-black opacity-20">01</div>
                </div>
              </motion.div>

              {/* Funnel Level 2: SAM */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-4 rounded-3xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg relative overflow-hidden ml-4 group"
              >
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <span className="px-2.5 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-wider">
                      SAM (Serviceable Addressable Market)
                    </span>
                    <h3 className="text-2xl font-black mt-1">Rp 15 Triliun</h3>
                    <p className="text-xs text-indigo-100 mt-0.5">Komuter & pekerja di area perkotaan Tier 1 & Tier 2 Jawa & Sumatra</p>
                  </div>
                  <div className="text-3xl font-black opacity-20">02</div>
                </div>
              </motion.div>

              {/* Funnel Level 3: SOM */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-4 rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md relative overflow-hidden ml-8 group"
              >
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <span className="px-2.5 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-wider">
                      SOM (Serviceable Obtainable Market)
                    </span>
                    <h3 className="text-xl font-black mt-1">Rp 500 Miliar</h3>
                    <p className="text-xs text-violet-100 mt-0.5">Target ekspansi 1,000 unit outlet Sabuba Classic dalam 3-5 tahun</p>
                  </div>
                  <div className="text-2xl font-black opacity-20">03</div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Key Market Drivers */}
            <div className="md:col-span-6 space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">Frekuensi Repeat Order Tinggi</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Konsumsi rutin 4-6 kali per minggu oleh pekerja & keluarga karena menu sarapan yang praktis & mengenyangkan.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">Efisiensi Tanpa Sewa Tempat</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Unit motor custom menekan biaya sewa tempat hingga 0%, menjaga net profit margin tetap di atas 50%.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">Speed of Service &lt; 2 Menit</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    SOP terstandarisasi dengan central kitchen menyajikan porsi cepat saji tanpa membuat antrean menumpuk.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 3: Animated Historical Performance (Bar Chart Visuals)
    // ----------------------------------------------------
    {
      id: 'financial-chart',
      title: 'Historical Financial Performance',
      subtitle: 'Bukti Kinerja Keuangan Outlet Sabuba Januari - Juni 2026',
      content: (
        <div className="space-y-6">
          {/* Top Verified Data Banner */}
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Data terverifikasi langsung dari sistem POS Kasir Real-time Sabuba.
            </span>
            <span className="px-3 py-1 bg-emerald-600 text-white rounded-full font-extrabold text-[10px] uppercase tracking-wider">
              REAL EMPIRICAL DATA
            </span>
          </div>

          {/* 3D Animated Bar Chart Component (Matches Reference Image 1 & 4) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            
            {/* Animated Vertical Bar Chart */}
            <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">Pertumbuhan Omset & Net Profit (Rp)</h4>
                  <p className="text-xs text-slate-500">Januari - Juni 2026</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-extrabold text-xs">
                  Net Margin Rata-Rata ~53.8%
                </div>
              </div>

              {/* Bars Graphic */}
              <div className="h-56 flex items-end justify-between gap-3 pt-6 px-2 border-b border-slate-100">
                {financialData.map((d, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <div className="text-[10px] font-black text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      Rp {(d.profit / 1000000).toFixed(1)}M
                    </div>

                    <div className="w-full flex items-end justify-center gap-1.5 h-full">
                      {/* Omset Bar */}
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${d.height}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="w-1/2 bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-xl relative group shadow-md"
                        title={`Omset: Rp ${d.omset.toLocaleString('id-ID')}`}
                      />

                      {/* Profit Bar */}
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${d.height * 0.54}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 + 0.1 }}
                        className="w-1/2 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t-xl relative group shadow-sm"
                        title={`Profit: Rp ${d.profit.toLocaleString('id-ID')}`}
                      />
                    </div>

                    <span className="text-[11px] font-bold text-slate-600 text-center">{d.period}</span>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-6 pt-2 text-xs font-bold">
                <span className="flex items-center gap-2 text-slate-700">
                  <span className="w-3 h-3 rounded-md bg-gradient-to-r from-blue-600 to-indigo-500"></span>
                  Omset Penjualan
                </span>
                <span className="flex items-center gap-2 text-slate-700">
                  <span className="w-3 h-3 rounded-md bg-gradient-to-r from-emerald-500 to-teal-400"></span>
                  Keuntungan Bersih (Net Profit)
                </span>
              </div>
            </div>

            {/* Performance Summary Highlights */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">Peak Monthly Revenue (Mei 2026)</span>
                <div className="text-3xl font-black">Rp 71.680.000</div>
                <div className="text-xs font-extrabold text-emerald-300">Net Profit Store: Rp 38.623.500 (53.8%)</div>
              </div>

              <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-xl space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">Hak Bagi Hasil Mitra 50% (Peak Month)</span>
                <div className="text-3xl font-black">Rp 19.311.750 / Bln</div>
                <div className="text-xs text-emerald-100 font-medium">
                  Pengembalian modal investasi 100% hanya <strong className="text-amber-300">~5.1 Bulan!</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 4: 3D Donut Chart & 50:50 Profit Split Scheme
    // ----------------------------------------------------
    {
      id: 'profit-split',
      title: 'Skema Kemitraan Pasif & Bagi Hasil 50%',
      subtitle: 'Struktur Pembagian Keuntungan & Peran Pengelolaan HQ',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: 3D Radial Donut Visual (Matches Reference Image 1 & 4) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center space-y-4">
            <div className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Visualisasi Pembagian Net Profit</div>
            
            {/* Donut Circle */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Ring */}
                <circle cx="50" cy="50" r="38" stroke="#F1F5F9" strokeWidth="16" fill="transparent" />
                
                {/* 50% Mitra Arc (Blue) */}
                <motion.circle
                  cx="50" cy="50" r="38"
                  stroke="url(#gradientBlue)"
                  strokeWidth="16"
                  fill="transparent"
                  strokeDasharray="238.7"
                  initial={{ strokeDashoffset: 238.7 }}
                  animate={{ strokeDashoffset: 119.3 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />

                {/* 50% HQ Arc (Violet) */}
                <motion.circle
                  cx="50" cy="50" r="38"
                  stroke="url(#gradientViolet)"
                  strokeWidth="16"
                  fill="transparent"
                  strokeDasharray="238.7"
                  initial={{ strokeDashoffset: 238.7 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                  strokeDashoffset="-119.3"
                />

                <defs>
                  <linearGradient id="gradientBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#4F46E5" />
                  </linearGradient>
                  <linearGradient id="gradientViolet" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#C084FC" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center % Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-slate-900">50 : 50</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Net Profit Split</span>
              </div>
            </div>

            {/* Legend */}
            <div className="w-full space-y-2 pt-2 text-xs font-bold">
              <div className="flex justify-between items-center p-2 rounded-xl bg-blue-50 text-blue-900">
                <span>Mitra Pasif (Investor):</span>
                <strong className="text-blue-700">50% Net Profit</strong>
              </div>
              <div className="flex justify-between items-center p-2 rounded-xl bg-violet-50 text-violet-900">
                <span>Sabuba HQ (Pengelola):</span>
                <strong className="text-violet-700">50% Net Profit</strong>
              </div>
            </div>
          </div>

          {/* Right Column: Roles Breakdown */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">Peran Mitra (Investor Pasif)</h4>
                  <p className="text-xs text-slate-500">Bebas 100% repot operasional harian</p>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-600 pl-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Investasi Rp 100.000.000:</strong> Modal awal lengkap unit motor custom Sabuba Classic & perlengkapan jualan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Hak Kepemilikan Aset:</strong> Menjadi owner unit kemitraan dengan pembagian hasil bersih 50% setiap bulan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Pantau Real-Time:</strong> Menerima akses laporan transaksi kasir online via smartphone 24/7.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">Tanggung Jawab Sabuba HQ</h4>
                  <p className="text-xs text-slate-500">Tim profesional kelola operasional terpusat</p>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-600 pl-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Manajemen SDM:</strong> Rekrutmen, pelatihan SOP kasir/koki, & penggajian tim operasional.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Supply Chain & Bahan Baku:</strong> Pengiriman bumbu rahasia & topping rutin dari Central Kitchen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Pemasaran & Iklan:</strong> Kampanye branding digital, promo aplikasi GoFood/GrabFood/ShopeeFood.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 5: ANIMATED MENU GALLERY & PRODUCT RANGE (User Specific Request!)
    // ----------------------------------------------------
    {
      id: 'menu-showcase',
      title: 'Katalog Menu & Potensi Margin Produk',
      subtitle: 'Menu Favorit Berkualitas Tinggi dengan Gross Margin Hingga 73%',
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-xs sm:text-sm">
            Sabuba menyajikan menu sarapan bubur bakar claypot, wonton kuah, & dim sum bernilai jual tinggi. Seluruh bahan diproduksi terpusat oleh Central Kitchen untuk menjaga konsistensi rasa & kebersihan.
          </p>

          {/* Animated Interactive Menu Cards Carousel/Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-2">
            {featuredMenu.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-3.5 rounded-3xl bg-white border border-slate-200/80 shadow-md flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Photo Image Container */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-2.5 bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-400 text-[9px] font-black uppercase">
                      {item.tag}
                    </div>
                  </div>

                  <h4 className="font-extrabold text-xs text-slate-900 line-clamp-2 leading-tight">
                    {item.name}
                  </h4>
                  <div className="text-sm font-black text-blue-600 mt-1">
                    Rp {item.price.toLocaleString('id-ID')}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                  <span className="text-slate-500 font-medium">HPP COGS: {item.cogs}</span>
                  <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {item.margin}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-900 text-xs font-bold flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-blue-600 shrink-0" />
              Setiap menu telah diformulasikan untuk daya saing harga pasar sarapan pagi (Rp 10.000 - 19.000).
            </span>
            <span className="text-[11px] text-blue-700 font-extrabold">Volume Penjualan Harian Tinggi</span>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 6: Clean White Mockups (iPad Pro, MacBook, iPhone POS Tech Stack)
    // ----------------------------------------------------
    {
      id: 'tech-mockup',
      title: 'Ekosistem Teknologi AI POS & Transparansi 24/7',
      subtitle: 'Pantau Omset Real-Time & Laporan Otomatis dari Smartphone/Laptop',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Hand-holding iPad Pro Mockup Visual (Matches Reference Image 5) */}
          <div className="lg:col-span-7 bg-slate-100 p-6 rounded-3xl border border-slate-200 relative flex flex-col justify-between overflow-hidden shadow-inner">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">Sabuba Cloud POS Dashboard (iPad Pro View)</span>
              </div>
              <span className="text-[10px] bg-white border border-slate-300 px-2.5 py-0.5 rounded-full font-bold text-slate-600">Sync Live</span>
            </div>

            {/* iPad Mockup Frame */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xl space-y-4">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
                  <div className="text-[10px] text-blue-600 font-bold uppercase">Omset Penjualan Hari Ini</div>
                  <div className="text-lg font-black text-slate-900 mt-0.5">Rp 2.450.000</div>
                </div>
                <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100">
                  <div className="text-[10px] text-indigo-600 font-bold uppercase">Total Transaksi</div>
                  <div className="text-lg font-black text-slate-900 mt-0.5">142 Trx</div>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                  <div className="text-[10px] text-emerald-600 font-bold uppercase">Est. Profit Mitra (50%)</div>
                  <div className="text-lg font-black text-emerald-700 mt-0.5">Rp 661.500</div>
                </div>
              </div>

              {/* Transaction Stream Log */}
              <div className="space-y-2 text-xs">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Live Orders Feed</div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="font-bold text-slate-800">10:42 - 2x Bubur Ori Mix + 2x Teh Tarik</span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-black text-[10px]">QRIS Paid</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="font-bold text-slate-800">10:38 - 1x Bubur Kuah Kuning Sapi + Wonton</span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-black text-[10px]">Cash Paid</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Feature Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-slate-900">AI Assistant Report Bot</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Asisten AI secara otomatis mengirimkan rangkuman penjualan harian via WhatsApp & rekomendasi lokasi jualan teramai berdasarkan analisis data historis.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-slate-900">Auto PDF Audit Report</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Laporan keuangan bulanan dapat di-export instan ke format PDF / Excel untuk transparansi audit pembagian hasil mitra 100%.
              </p>
            </div>
          </div>

        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 7: Interactive ROI & Payback Calculator
    // ----------------------------------------------------
    {
      id: 'calculator',
      title: 'Kalkulator Proyeksi Keuangan & ROI Mitra',
      subtitle: 'Simulasikan Pembagian Hasil Bulanan & Kecepatan Balik Modal Anda',
      content: (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Interactive Slider Input */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                  <span>Target Penjualan Harian per Outlet:</span>
                  <span className="text-blue-600 text-lg font-black">
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
                  className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                  <span>Rp 1M (Konservatif)</span>
                  <span>Rp 2.2M (Rata-rata)</span>
                  <span>Rp 4M (Optimis)</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex justify-between">
                  <span>Omset Kotor Bulanan (30 Hari):</span>
                  <strong className="text-slate-900">Rp {monthlyOmset.toLocaleString('id-ID')}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Est. Net Profit Store (54%):</span>
                  <strong className="text-emerald-600">Rp {monthlyNetProfit.toLocaleString('id-ID')}</strong>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-blue-900">
                  <span>Hak Bagi Hasil Mitra Pasif (50%):</span>
                  <strong className="text-blue-600 text-sm">Rp {partnerMonthlyShare.toLocaleString('id-ID')} / Bln</strong>
                </div>
              </div>
            </div>

            {/* Calculated Output Highlight Card */}
            <div className="md:col-span-6 space-y-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6 rounded-3xl text-white shadow-xl">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-200">Proyeksi Balik Modal (Payback Period)</div>
                <div className="text-4xl sm:text-5xl font-black mt-1">
                  {paybackMonths} <span className="text-lg font-bold text-blue-200">Bulan</span>
                </div>
                <p className="text-xs text-blue-100 mt-1">
                  Pengembalian investasi 100% modal awal Rp 100 Juta sangat cepat berkat efisiensi motor custom tanpa biaya sewa ruko.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/20">
                <div>
                  <div className="text-[10px] text-blue-200 font-bold uppercase">Proyeksi Profit Mitra / Tahun</div>
                  <div className="text-xl font-black text-amber-300 mt-0.5">
                    Rp {partnerAnnualShare.toLocaleString('id-ID')}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] text-blue-200 font-bold uppercase">Annualized ROI</div>
                  <div className="text-xl font-black text-emerald-300 mt-0.5">
                    {annualRoiPercent}% / Tahun
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 8: Clean White Device Video Player Showcase
    // ----------------------------------------------------
    {
      id: 'video-showcase',
      title: 'Media & Operational Video Showcase',
      subtitle: 'Lihat Dokumentasi Operasional Outlet & Motor Custom Sabuba',
      content: (
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">Video Player Display Frame</h4>
                <p className="text-xs text-slate-500">Video operasional & perakitan motor custom Sabuba</p>
              </div>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 font-extrabold text-xs rounded-full">
                HD Video Ready
              </span>
            </div>

            <div className="relative aspect-video rounded-2xl bg-slate-950 overflow-hidden border border-slate-300 flex items-center justify-center group shadow-lg">
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
                    src="https://drive.google.com/thumbnail?id=15khQoPH2F0ia_gDjRNtEWjN3yjAc1LTm&sz=w800"
                    alt="Sabuba Video Preview"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col items-center justify-center p-6 text-center text-white">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer mb-3">
                      <Play className="w-8 h-8 fill-white ml-1" />
                    </div>
                    <h4 className="text-lg font-black">Video Operasional Outlet & Motor Custom Sabuba</h4>
                    <p className="text-xs text-slate-300 max-w-md mt-1">
                      Klip video liputan media & persiapan jualan pagi hari.
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Paste URL Embed Video YouTube di sini (opsional)..."
                value={customVideoUrl}
                onChange={(e) => setCustomVideoUrl(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
              />
              {customVideoUrl && (
                <button
                  onClick={() => setCustomVideoUrl('')}
                  className="px-3 py-2 bg-slate-200 hover:bg-slate-300 text-xs font-bold text-slate-700 rounded-xl"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 9: Clean White Investment Call to Action
    // ----------------------------------------------------
    {
      id: 'cta',
      title: 'Bergabung Menjadi Mitra Owner Sabuba',
      subtitle: 'Slot Kemitraan Terbatas untuk Pengembangan Outlet Sabuba Classic 2026',
      content: (
        <div className="flex flex-col h-full justify-between space-y-6">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white shadow-xl text-center space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md font-black text-xs uppercase tracking-wider text-blue-100">
              Peluang Emas Investasi 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Mulai Kemitraan Pasif Sabuba Classic Hari Ini
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Miliki unit bisnis kuliner sarapan berkonsep modern street food dengan net margin di atas 50% & pengelolaan operasional 100% oleh tim profesional kantor pusat.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-3 text-xs font-bold text-white">
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-xl backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Modal Investasi Rp 100 Juta
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-xl backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Bagi Hasil 50% Mitra Pasif
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-xl backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Est. BEP ~5.3 Bulan
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=Halo%20Tim%20Sabuba,%20saya%20sudah%20membaca%20Proposal%20Pitch%20Deck%20Clean%20White%20Kemitraan%20Rp%20100Jt%20(Mitra%20Pasif%2050:50).%20Saya%20tertarik%20untuk%20diskusi%20lebih%20lanjut.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Konsultasi Kemitraan via WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Download className="w-4 h-4 text-blue-600" />
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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xl p-2 sm:p-4 md:p-6 overflow-y-auto">
        
        {/* Fullscreen Clean White Presentation Deck Container */}
        <motion.div
          id="proposal-pitch-deck"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className={`w-full max-w-6xl bg-gradient-to-br from-slate-50 via-white to-blue-50/40 text-slate-900 rounded-3xl border border-white/80 shadow-[0_25px_70px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col justify-between ${
            isFullscreen ? 'fixed inset-2 z-50 max-w-none rounded-none' : 'max-h-[92vh]'
          }`}
        >

          {/* Top Bar Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200/80 flex items-center justify-between bg-white/80 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xs shadow-md">
                SBB
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-slate-900 tracking-wide">
                  Sabuba Pitch Deck Proposal 2026
                </h3>
                <p className="text-[11px] text-slate-500 font-semibold">
                  Slide {currentSlide + 1} dari {slides.length}: <span className="text-blue-600 font-bold">{currentSlideObj.title}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors hidden sm:flex"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => window.print()}
                className="px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs font-bold border border-blue-200 flex items-center gap-1.5 transition-colors"
                title="Download / Print PDF"
              >
                <Download className="w-3.5 h-3.5 text-blue-600" />
                <span className="hidden sm:inline">Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-700 transition-colors ml-1"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Slide Content Area */}
          <div className="p-4 sm:p-8 flex-1 overflow-y-auto min-h-[440px] flex flex-col justify-between">
            <div className="mb-4">
              <div className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">
                {currentSlideObj.subtitle}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {currentSlideObj.title}
              </h2>
            </div>

            <div className="flex-1 my-2">
              {currentSlideObj.content}
            </div>
          </div>

          {/* Bottom Controls Bar */}
          <div className="p-4 border-t border-slate-200/80 bg-white/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            
            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentSlide
                      ? 'w-8 bg-blue-600'
                      : 'w-2.5 bg-slate-200 hover:bg-slate-400'
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
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:pointer-events-none text-slate-800 text-xs font-bold flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <span className="text-xs font-extrabold text-slate-500">
                {currentSlide + 1} / {slides.length}
              </span>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:pointer-events-none text-white text-xs font-extrabold flex items-center gap-1 transition-colors shadow-md"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
