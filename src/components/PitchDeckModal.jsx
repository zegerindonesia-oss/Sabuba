import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ChevronLeft, ChevronRight, Download, Share2, Sparkles, TrendingUp,
  DollarSign, ShieldCheck, Cpu, Smartphone, BarChart3, PieChart, Layers,
  Award, Play, CheckCircle2, ArrowRight, RefreshCw, Bot, Check, Maximize2,
  Minimize2, ExternalLink, Calendar, Building2, Zap, Flame, Star, Utensils,
  AlertTriangle, HelpCircle, FileText, Bike, Heart, Megaphone, Users
} from 'lucide-react';
import SabubaLogo from './SabubaLogo';
import { SABUBA_DATA, formatRupiah } from '../data/sabubaData';

export default function PitchDeckModal({ isOpen, onClose, defaultSlide = 0 }) {
  const [currentSlide, setCurrentSlide] = useState(defaultSlide);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [customVideoUrl, setCustomVideoUrl] = useState('');

  // Historical POS Data (Jan to Aug 2026)
  const realPosData = [
    { period: 'Jan 2026', omset: 32176000, profit: 16382000 },
    { period: 'Feb-Mar 2026', omset: 37027000, profit: 19181000 },
    { period: 'Apr 2026', omset: 51879000, profit: 28039500 },
    { period: 'Mei 2026', omset: 71680000, profit: 38623500 },
    { period: 'Jun 2026', omset: 66792000, profit: 36617000 },
    { period: 'Agu 2026', omset: 80108009, profit: 40177509 },
  ];

  // Feasibility Study Data (Exact Zeger! On The Wheels Canva Format)
  const feasibilityData = {
    brand: 'Sabuba Indonesia (Sabuba Classic)',
    status: 'Partnership / Mitra Pasif (Bagi Hasil 50% : 50%)',
    lokasi: 'Sidoarjo & Jawa Timur',
    paketUsaha: 'Sabuba Classic (Motor Custom 3 Roda, Kitchen Setup, Branding, POS System)',
    capex: 100000000, // Rp 100.000.000
    scenarios: [
      {
        name: 'Rendah (50 Cup)',
        tcDay: 50,
        tcMonth: 1500,
        apc: 20000,
        salesDay: 1000000,
        salesMonth: 30000000,
        salesYear: 360000000,
        hppPercent: 40,
        hppAmount: 12000000,
        grossProfitAmount: 18000000,
        opsKaryawan: 3000000,
        opsRumahTangga: 750000,
        opsListrikAirFuel: 750000,
        totalOpsAmount: 4500000,
        ebitdaNetProfitStore: 13500000,
        mitraShare50: 6750000,
        paybackMonths: 14.8
      },
      {
        name: 'Sedang (100 Cup)',
        tcDay: 100,
        tcMonth: 3000,
        apc: 20000,
        salesDay: 2000000,
        salesMonth: 60000000,
        salesYear: 720000000,
        hppPercent: 40,
        hppAmount: 24000000,
        grossProfitAmount: 36000000,
        opsKaryawan: 6000000,
        opsRumahTangga: 1500000,
        opsListrikAirFuel: 1500000,
        totalOpsAmount: 9000000,
        ebitdaNetProfitStore: 27000000,
        mitraShare50: 13500000,
        paybackMonths: 7.4
      },
      {
        name: 'Ramai (150 Cup)',
        tcDay: 150,
        tcMonth: 4500,
        apc: 20000,
        salesDay: 3000000,
        salesMonth: 90000000,
        salesYear: 1080000000,
        hppPercent: 40,
        hppAmount: 36000000,
        grossProfitAmount: 54000000,
        opsKaryawan: 9000000,
        opsRumahTangga: 2250000,
        opsListrikAirFuel: 2250000,
        totalOpsAmount: 13500000,
        ebitdaNetProfitStore: 40500000,
        mitraShare50: 20250000,
        paybackMonths: 4.9
      },
      {
        name: 'Ramai Sekali (200 Cup)',
        tcDay: 200,
        tcMonth: 6000,
        apc: 20000,
        salesDay: 4000000,
        salesMonth: 120000000,
        salesYear: 1440000000,
        hppPercent: 40,
        hppAmount: 48000000,
        grossProfitAmount: 72000000,
        opsKaryawan: 12000000,
        opsRumahTangga: 3000000,
        opsListrikAirFuel: 3000000,
        totalOpsAmount: 18000000,
        ebitdaNetProfitStore: 54000000,
        mitraShare50: 27000000,
        paybackMonths: 3.7
      }
    ]
  };

  // Clean Menu Cards
  const featuredMenu = [
    {
      name: 'Bubur (Ori) Mix (Ayam + Sapi)',
      price: 19000,
      tag: 'BEST SELLER #1',
      image: 'https://drive.google.com/thumbnail?id=15khQoPH2F0ia_gDjRNtEWjN3yjAc1LTm&sz=w800',
    },
    {
      name: 'Bubur (Kuah Kuning) Sapi',
      price: 19000,
      tag: 'FAVORITE',
      image: 'https://drive.google.com/thumbnail?id=16KK3fHQZ8cZlWU2MMhId3wGKYFfp0572&sz=w800',
    },
    {
      name: 'Bubur (Kuah Laksa) Mix',
      price: 19000,
      tag: 'SPICY SIGNATURE',
      image: 'https://drive.google.com/thumbnail?id=1N9PYBAox07AKVBxRgWjtaHXc3fS7Kvsb&sz=w800',
    },
    {
      name: 'Wonton Kuah Dumpling Ayam',
      price: 13000,
      tag: 'HIGH REPEAT ORDER',
      image: 'https://drive.google.com/thumbnail?id=1LLms9wP-r2XxSGJS5fhbq-OWf9s30na7&sz=w800',
    },
    {
      name: 'Dim Sum Siomay Ayam (4 Pcs)',
      price: 13000,
      tag: 'ADD-ON POPULER',
      image: 'https://drive.google.com/thumbnail?id=1nEAhDwYbP2d6O4I7TD8557BkjboXn8-f&sz=w800',
    },
  ];

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
    // Slide 1: FRONT COVER
    // ----------------------------------------------------
    {
      id: 'cover',
      title: 'Proposal Kemitraan 2026',
      subtitle: 'Sajian Warm Claypot Khas Nusantara',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider shadow-sm backdrop-blur-md"
            >
              <Heart className="w-4 h-4 text-red-600 fill-red-600" />
              <span>Sajian Warm Claypot Khas Nusantara</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              SABUBA <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-amber-600">Sarapan Bubur Bakar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Hadir sebagai hidangan sarapan pagi yang hangat, lezat, & bernutrisi tinggi untuk keluarga Indonesia. Membuka peluang kerjasama kemitraan <strong className="text-slate-900 font-extrabold">Mitra Pasif 100%</strong> dengan <strong className="text-red-700 font-extrabold">Bagi Hasil 50% : 50%</strong> tanpa repot operasional harian.
            </motion.p>

            {/* Key Value Glass Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <div className="p-4 rounded-3xl bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Investasi CAPEX</div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Rp 100 Jt</div>
                <div className="text-xs text-red-600 font-bold mt-1">Sabuba Classic</div>
              </div>

              <div className="p-4 rounded-3xl bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bagi Hasil</div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">50% : 50%</div>
                <div className="text-xs text-amber-600 font-bold mt-1">Mitra Pasif</div>
              </div>

              <div className="p-4 rounded-3xl bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Operasional</div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">100% HQ</div>
                <div className="text-xs text-emerald-600 font-bold mt-1">Hands-Off</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Gradient-Blended Big Menu Photo */}
          <div className="lg:col-span-6 relative flex justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl border border-white group"
            >
              <img
                src="https://drive.google.com/thumbnail?id=15khQoPH2F0ia_gDjRNtEWjN3yjAc1LTm&sz=w800"
                alt="Sabuba Bubur Bakar Claypot Signature"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Soft Gradient Overlay Fading into Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                <div className="space-y-2 text-white">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-red-700 font-black text-[10px] uppercase shadow-sm">
                      Sabuba Classic (Motor Custom)
                    </span>
                    <span className="text-xs text-white/90 font-bold shadow-sm">100% Halal & Fresh</span>
                  </div>
                  <h3 className="text-3xl font-black tracking-tight text-white drop-shadow-md">Bubur Bakar Claypot Sabuba</h3>
                  <p className="text-sm text-slate-200 max-w-md drop-shadow-sm">
                    Sajian hangat claypot beraroma khas dengan aneka topping lezat & disukai seluruh kalangan keluarga.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 2: Problem & Solution
    // ----------------------------------------------------
    {
      id: 'problem-solution',
      title: 'Mengapa Harus Kemitraan Sabuba?',
      subtitle: 'Solusi Bisnis Kuliner Sarapan Pagi Efisien & Unit Motor Custom 3 Roda Bebas Sewa Ruko',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          
          {/* Left Column: Problem & Solution Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Problem Card */}
            <div className="p-6 rounded-[2rem] bg-white/90 border border-slate-200/60 space-y-4 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-3 text-slate-900 font-extrabold text-lg">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <span>Tantangan Usaha Kuliner Saat Ini</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></span>
                  <span><strong className="text-slate-900">Sewa Tempat Ruko Mahal:</strong> Biaya sewa ruko & tempat permanen memakan puluhan juta/tahun yang memperlambat pengembalian modal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></span>
                  <span><strong className="text-slate-900">Rumit Kelola SDM & Operasional:</strong> Mengurus karyawan, rekrutmen, belanja bahan harian, & konsistensi rasa sering menguras waktu mitra.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></span>
                  <span><strong className="text-slate-900">Kurang Higienis di Street Food:</strong> Tempat sarapan di pinggir jalan umum kurang bersih & penyajiannya sering lambat.</span>
                </li>
              </ul>
            </div>

            {/* Solution Card */}
            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-red-800 via-red-900 to-slate-900 border border-white/20 space-y-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 text-white font-extrabold text-lg">
                <div className="w-10 h-10 rounded-2xl bg-amber-400 text-red-900 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/30">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span>Solusi Inovatif Sabuba Classic</span>
              </div>
              <ul className="space-y-3 text-sm text-red-100">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Motor Custom 3 Roda (Bebas Sewa Ruko):</strong> Unit street food hemat overhead, fleksibel buka di lokasi strategis & terima panggilan acara.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Skema Mitra Pasif 100%:</strong> Tim pusat Sabuba mengelola rekrutmen SDM, kitchen supply chain terpusat, & promosi tanpa membuat mitra repot.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Speed of Service &lt; 2 Menit:</strong> SOP penyajian cepat dengan standar higiene tinggi & cita rasa claypot khas yang konsisten.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Sabuba Motor Poster Image Card Showcase (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="w-full rounded-[2.5rem] overflow-hidden border border-slate-200/60 shadow-2xl bg-white/90 p-3 group relative backdrop-blur-xl flex items-center justify-center">
              <img
                src="/assets/Konsep/sabuba-classic-poster.jpg"
                alt="Sabuba Classic Custom 3-Wheel Motor Unit Poster"
                className="w-full h-auto max-h-[480px] object-contain rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
          </div>

        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 3: Market Analysis
    // ----------------------------------------------------
    {
      id: 'market-funnel',
      title: 'Top-Down Market Analysis',
      subtitle: 'Potensi Pasar Kuliner Sarapan & Fast Casual Food di Indonesia',
      content: (
        <div className="space-y-8">
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
            Pasar makanan sarapan & street food di Indonesia merupakan kebutuhan harian (daily essential) dengan tingkat repeat order sangat tinggi. Sabuba mengambil ceruk pasar fast casual street food modern yang efisien & higienis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Stacked Cards */}
            <div className="md:col-span-6 space-y-4 relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 z-0 hidden md:block"></div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl relative z-10"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider border border-slate-200">
                      TAM (Total Addressable Market)
                    </span>
                    <h3 className="text-4xl font-black text-slate-900 mt-3">Rp 120 Triliun</h3>
                    <p className="text-sm text-slate-500 mt-1">Total konsumsi sarapan & street food harian di seluruh Indonesia</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-[2rem] bg-gradient-to-br from-red-50 to-transparent border border-red-200/60 shadow-xl backdrop-blur-xl relative z-10 md:ml-12"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider border border-red-200">
                      SAM (Serviceable Addressable Market)
                    </span>
                    <h3 className="text-3xl font-black text-red-900 mt-3">Rp 15 Triliun</h3>
                    <p className="text-sm text-red-700/80 mt-1">Komuter & pekerja di area perkotaan Tier 1 & Tier 2 Jawa & Sumatra</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-[2rem] bg-gradient-to-br from-amber-50 to-transparent border border-amber-200/60 shadow-xl backdrop-blur-xl relative z-10 md:ml-24"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-200">
                      SOM (Serviceable Obtainable Market)
                    </span>
                    <h3 className="text-2xl font-black text-amber-900 mt-3">Rp 500 Miliar</h3>
                    <p className="text-sm text-amber-700/80 mt-1">Target ekspansi 1,000 unit outlet Sabuba Classic dalam 3-5 tahun</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Key Market Drivers */}
            <div className="md:col-span-6 space-y-6">
              <div className="p-6 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                  <TrendingUp className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">Frekuensi Repeat Order Tinggi</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Konsumsi rutin 4-6 kali per minggu oleh pekerja & keluarga karena menu sarapan yang praktis & mengenyangkan.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100 shadow-sm">
                  <DollarSign className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">Efisiensi Tanpa Sewa Tempat</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Unit motor custom menekan biaya sewa tempat hingga 0%, menjaga net profit margin tetap tinggi.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100 shadow-sm">
                  <Zap className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">Speed of Service &lt; 2 Menit</h4>
                  <p className="text-sm text-slate-600 mt-1">
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
    // Slide 4: FEASIBILITY STUDY
    // ----------------------------------------------------
    {
      id: 'feasibility-study',
      title: 'Feasibility Study (Sabuba Classic)',
      subtitle: 'Analisa Keuangan & Proyeksi Laba/Rugi Kemitraan Sabuba Motor Custom',
      content: (
        <div className="space-y-6 overflow-y-auto max-h-[70vh] pr-2">
          
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-[2rem] bg-gradient-to-r from-red-900 to-red-800 text-white shadow-xl">
            <div>
              <div className="inline-block px-3 py-1 bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-full mb-2">
                FEASIBILITY STUDY (SABUBA CLASSIC)
              </div>
              <h3 className="text-2xl sm:text-3xl font-black">
                Analisa Keuangan Sabuba Classic (Motor Custom)
              </h3>
            </div>
            <div className="text-right bg-black/20 px-6 py-4 rounded-2xl border border-white/20 shrink-0">
              <div className="text-white/80 font-bold text-xs tracking-wider">TOTAL MODAL AWAL / CAPEX</div>
              <div className="text-2xl font-black text-amber-400 mt-1">Rp 100.000.000</div>
            </div>
          </div>

          {/* Upper Info Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-md backdrop-blur-xl text-sm">
            <div><span className="text-slate-500 font-semibold">Brand:</span> <strong className="text-slate-900 font-extrabold block mt-1">Sabuba Indonesia</strong></div>
            <div><span className="text-slate-500 font-semibold">Status Kepemilikan:</span> <strong className="text-slate-900 font-extrabold block mt-1">Partnership (Mitra Pasif)</strong></div>
            <div><span className="text-slate-500 font-semibold">Paket Usaha:</span> <strong className="text-slate-900 font-extrabold block mt-1">Sabuba Classic (Motor)</strong></div>
            <div><span className="text-slate-500 font-semibold">Biaya Kemitraan:</span> <strong className="text-red-700 font-extrabold block mt-1">Rp 100.000.000</strong></div>
          </div>

          {/* Feasibility Table */}
          <div className="overflow-x-auto rounded-[2rem] border border-slate-200/60 shadow-xl bg-white/90 backdrop-blur-xl text-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                  <th className="p-4 border-r border-slate-200">ANALISIS PENDAPATAN</th>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <th key={i} className="p-4 text-center border-r border-slate-200 last:border-0 text-slate-800 font-black">
                      {sc.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4">Jumlah Motor Custom / Outlet</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center font-bold">1 Unit</td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4">TC / Day (Transaksi per Hari)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-slate-900 font-black">{sc.tcDay} Porsi</td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4">TC / Month (30 Hari)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center font-bold">{sc.tcMonth.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4">APC (Average per Check)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center font-bold">Rp {sc.apc.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4">Sales / Hari</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-slate-900 font-black">Rp {sc.salesDay.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="bg-red-50 font-black text-red-900">
                  <td className="p-4">TOTAL REVENUE (NET SALES / BULAN)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-red-700 text-sm">Rp {sc.salesMonth.toLocaleString('id-ID')}</td>
                  ))}
                </tr>

                <tr className="bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider border-y border-slate-200">
                  <td className="p-4 border-r border-slate-200">PROYEKSI LABA / RUGI BULANAN</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center border-r border-slate-200 last:border-0 font-black">SIMULASI</td>
                  ))}
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="p-4">HPP / Total Biaya Bahan Baku (~40-42%)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-slate-500 font-bold">Rp {sc.hppAmount.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="bg-slate-50 font-black text-slate-900">
                  <td className="p-4">GROSS PROFIT (LABA KOTOR)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center">Rp {sc.grossProfitAmount.toLocaleString('id-ID')}</td>
                  ))}
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="p-4">Biaya Karyawan / Gaji Tim Ops Store</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-slate-500 font-bold">Rp {sc.opsKaryawan.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4">Biaya Rumah Tangga / Kebersihan</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-slate-500 font-bold">Rp {sc.opsRumahTangga.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4">Biaya Listrik, Air & Bahan Bakar Motor</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-slate-500 font-bold">Rp {sc.opsListrikAirFuel.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="bg-slate-50 font-extrabold text-slate-900">
                  <td className="p-4">TOTAL BIAYA OPERASIONAL STORE</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-red-900">Rp {sc.totalOpsAmount.toLocaleString('id-ID')}</td>
                  ))}
                </tr>

                <tr className="bg-amber-50 font-black text-amber-900">
                  <td className="p-4">STORE NET PROFIT (KEUNTUNGAN BERSIH OUTLET)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-amber-700 text-sm">Rp {sc.ebitdaNetProfitStore.toLocaleString('id-ID')}</td>
                  ))}
                </tr>

                <tr className="bg-gradient-to-r from-emerald-600 to-emerald-500 font-black text-white">
                  <td className="p-4">HAK BAGI HASIL MITRA PASIF (50% DARI NET PROFIT)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-base">Rp {sc.mitraShare50.toLocaleString('id-ID')} <span className="text-xs font-normal">/ Bln</span></td>
                  ))}
                </tr>

                <tr className="bg-slate-800 text-white font-bold">
                  <td className="p-4">Estimasi Payback Period (Berdasarkan Net Profit Mitra)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-amber-400 font-black">~{sc.paybackMonths} Bulan</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-white/90 border border-slate-200/60 shadow-sm text-xs text-slate-500 leading-relaxed font-semibold">
            <strong className="text-slate-900 font-bold">Catatan & Disclaimer Proyeksi:</strong> Perhitungan di atas hanya merupakan proyeksi/simulasi matematis berdasarkan standar operasional. Hasil dapat berbeda-beda tergantung kondisi lokasi, tingkat keramaian, & faktor pasar masing-masing outlet.
          </div>

        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 5: REAL FINANCIAL STATEMENT
    // ----------------------------------------------------
    {
      id: 'real-pos-data',
      title: 'Laporan Laba Rugi Outlet',
      subtitle: '(Sabuba Jl. A Yani Sidoarjo) — Sales 100% | COGS 40% | OPEX 15% | Net Profit 45%',
      content: (
        <div className="space-y-6 overflow-y-auto max-h-[72vh] pr-2">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Official Financial Report Table */}
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-[2rem] border border-slate-200/60 overflow-hidden shadow-xl bg-white/90 backdrop-blur-xl text-sm">
                <div className="bg-slate-100 text-slate-800 px-5 py-4 font-black text-xs uppercase tracking-wider flex justify-between items-center border-b border-slate-200">
                  <span>LAPORAN LABA RUGI OUTLET (SABUBA JL. A YANI SIDOARJO)</span>
                  <span className="text-slate-500">INCOME STATEMENT</span>
                </div>

                <table className="w-full text-left divide-y divide-slate-100 font-medium text-slate-700">
                  <tbody>
                    <tr className="font-extrabold text-slate-900">
                      <td className="p-4">1. PENJUALAN BERSIH (NET SALES REVENUE)</td>
                      <td className="p-4 text-center text-slate-500">100.0%</td>
                      <td className="p-4 text-right text-emerald-700 text-base">Rp 80.108.009</td>
                    </tr>

                    <tr className="hover:bg-slate-50">
                      <td className="p-4 pl-8">2. Beban Pokok Penjualan (COGS / HPP)</td>
                      <td className="p-4 text-center font-bold">40.0%</td>
                      <td className="p-4 text-right font-bold text-red-600">Rp 32.043.204</td>
                    </tr>

                    <tr className="bg-slate-50 font-extrabold text-slate-900 border-t border-slate-100">
                      <td className="p-4">3. LABA KOTOR (GROSS PROFIT)</td>
                      <td className="p-4 text-center text-slate-600">60.0%</td>
                      <td className="p-4 text-right text-base">Rp 48.064.805</td>
                    </tr>

                    <tr className="font-bold text-slate-800 bg-slate-100/50">
                      <td colSpan="3" className="px-4 py-3 text-xs uppercase tracking-wider text-slate-600">
                        4. BEBAN OPERASIONAL STORE (OPEX 15.0%)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 text-xs">
                      <td className="py-2 px-4 pl-10">• Gaji Tim Karyawan & Bonus Store</td>
                      <td className="py-2 px-4 text-center font-bold">9.4%</td>
                      <td className="py-2 px-4 text-right font-bold">Rp 7.500.000</td>
                    </tr>
                    <tr className="hover:bg-slate-50 text-xs">
                      <td className="py-2 px-4 pl-10">• Biaya Utility (Listrik, Air & Bahan Bakar)</td>
                      <td className="py-2 px-4 text-center font-bold">3.1%</td>
                      <td className="py-2 px-4 text-right font-bold">Rp 2.500.000</td>
                    </tr>
                    <tr className="hover:bg-slate-50 text-xs">
                      <td className="py-2 px-4 pl-10">• Biaya Pemeliharaan & Kebersihan Ops</td>
                      <td className="py-2 px-4 text-center font-bold">2.5%</td>
                      <td className="py-2 px-4 text-right font-bold">Rp 2.016.201</td>
                    </tr>
                    <tr className="bg-slate-50 font-extrabold text-slate-900 border-t border-slate-100">
                      <td className="p-4">TOTAL BEBAN OPERASIONAL (TOTAL OPEX)</td>
                      <td className="p-4 text-center text-amber-700">15.0%</td>
                      <td className="p-4 text-right text-amber-700">Rp 12.016.201</td>
                    </tr>

                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black border-t border-emerald-500">
                      <td className="p-5">5. STORE NET PROFIT (LABA BERSIH OUTLET)</td>
                      <td className="p-5 text-center text-emerald-100">45.0%</td>
                      <td className="p-5 text-right text-white text-xl">Rp 36.048.604</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column: Animated Chart */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl space-y-5">
                <div className="flex justify-between items-center text-xs font-black text-slate-800 uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-red-600" />
                    Visual Breakdown
                  </span>
                  <span className="text-slate-500">Proporsi Standard</span>
                </div>

                <div className="space-y-4 text-sm font-bold text-slate-700">
                  {/* Sales */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-900">Total Sales</span>
                      <span className="text-slate-900">100% (Rp 80,1 Jt)</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-slate-800 rounded-full"
                      />
                    </div>
                  </div>

                  {/* COGS */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Beban Bahan Baku (COGS)</span>
                      <span className="text-red-600">40% (Rp 32,0 Jt)</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '40%' }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full bg-red-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* OPEX */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Beban Operasional (OPEX)</span>
                      <span className="text-amber-600">15% (Rp 12,0 Jt)</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '15%' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full bg-amber-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Profit */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-emerald-700">Laba Bersih Outlet (Net Profit)</span>
                      <span className="text-emerald-700">45% (Rp 36,0 Jt)</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '45%' }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Historical */}
              <div className="p-6 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl space-y-4 text-sm">
                <div className="font-bold text-slate-800 flex justify-between items-center text-xs uppercase tracking-wider">
                  <span>Historis Kinerja (Jan-Aug 2026)</span>
                </div>

                <div className="space-y-2">
                  {realPosData.map((d, idx) => {
                    const omset = d.omset;
                    const netProfit = omset * 0.45;

                    return (
                      <div key={idx} className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors flex items-center justify-between">
                        <div>
                          <div className="font-extrabold text-slate-900 text-sm">{d.period}</div>
                          <div className="text-xs text-slate-500 font-bold">Penjualan: Rp {(omset / 1000000).toFixed(1)}M</div>
                        </div>
                        <div className="text-right">
                          <div className="font-extrabold text-emerald-700 text-sm">Net Profit: Rp {(netProfit / 1000000).toFixed(1)}M</div>
                          <div className="text-xs text-emerald-600 font-bold">Margin Net: 45.0%</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 6: MARKETING SUPPORT
    // ----------------------------------------------------
    {
      id: 'marketing-support',
      title: 'Marketing Support & Channel Sales',
      subtitle: 'Dukungan Pemasaran Full dari Tim Pusat untuk Mendorong Traffic & Omset',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          
          {/* Left Column: Sleek iPhone Mockup Placeholders */}
          <div className="lg:col-span-6 flex justify-center items-center gap-6">
            
            {/* iPhone 1 */}
            <div className="w-56 h-[400px] bg-slate-900 rounded-[3rem] p-4 border-[6px] border-slate-200 shadow-2xl relative flex flex-col justify-between group">
              <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-2 z-10"></div>
              
              <div className="flex-1 bg-gradient-to-b from-red-50 to-white rounded-[2rem] overflow-hidden p-4 text-slate-900 flex flex-col justify-between border border-slate-200 relative">
                <div className="space-y-3 text-center pt-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto border border-red-200">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900">GoFood / GrabFood</h4>
                  <p className="text-xs text-slate-500 font-semibold leading-tight">
                    [ Placeholder Mockup App Storefront ]
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white backdrop-blur-md border border-slate-200 text-center shadow-sm">
                  <div className="text-xs font-bold text-slate-800">Siap Ditampilkan</div>
                </div>
              </div>
            </div>

            {/* iPhone 2 */}
            <div className="w-56 h-[400px] bg-slate-900 rounded-[3rem] p-4 border-[6px] border-slate-200 shadow-2xl relative flex flex-col justify-between group hidden sm:flex">
              <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-2 z-10"></div>
              
              <div className="flex-1 bg-gradient-to-b from-amber-50 to-white rounded-[2rem] overflow-hidden p-4 text-slate-900 flex flex-col justify-between border border-slate-200 relative">
                <div className="space-y-3 text-center pt-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900">Promo & Ads</h4>
                  <p className="text-xs text-slate-500 font-semibold leading-tight">
                    [ Placeholder Mockup Banner & Ads ]
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white backdrop-blur-md border border-slate-200 text-center shadow-sm">
                  <div className="text-xs font-bold text-slate-800">Siap Ditampilkan</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Points */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-black text-slate-900">Dukungan Pemasaran dari Pusat Sabuba HQ:</h3>

            <div className="p-5 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <Megaphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base">Pendaftaran Online Delivery</h4>
                <p className="text-slate-600 font-medium text-sm mt-1">Proses pendaftaran & registrasi merchant online (GoFood, GrabFood, ShopeeFood) dikelola penuh oleh pusat.</p>
              </div>
            </div>

            <div className="p-5 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base">Program Marketing & Promo Diskon</h4>
                <p className="text-slate-600 font-medium text-sm mt-1">Setting kampanye promo diskon ongkir & voucher belanja dilakukan secara terpusat dan berkala.</p>
              </div>
            </div>

            <div className="p-5 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base">Support Desain Materi Branding</h4>
                <p className="text-slate-600 font-medium text-sm mt-1">Disediakan desain materi promosi digital, konten sosial media, spanduk, & banner promo.</p>
              </div>
            </div>
          </div>

        </div>
      )
    },
    // ----------------------------------------------------
    // Slide 7: TIKTOK SOCIAL PROOF (PART 1)
    // ----------------------------------------------------
    {
      id: 'socialproof-part1',
      title: 'Social Proof & Liputan TikTok (Part 1)',
      subtitle: 'Antusiasme Pelanggan & Review Food Vlogger di TikTok',
      content: (
        <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2">
          <p className="text-slate-600 text-xs sm:text-sm max-w-3xl font-medium">
            Tingginya minat masyarakat terhadap Bubur Bakar Claypot Sabuba tercermin dari liputan viral para food vlogger ternama di TikTok!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-1">
            
            {/* TikTok 1: @dilarang.duduk */}
            <div className="p-4 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:shadow-2xl transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-slate-900">@dilarang.duduk</span>
                  <span className="px-2.5 py-0.5 bg-red-100 text-red-700 font-extrabold text-[10px] rounded-full">TikTok Review</span>
                </div>
                
                <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md">
                  <iframe
                    src="https://www.tiktok.com/embed/v2/7680878284493688072"
                    className="w-full h-full border-0 rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="TikTok @dilarang.duduk"
                  />
                </div>
              </div>

              <a
                href="https://www.tiktok.com/@dilarang.duduk/video/7680878284493688072"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Buka TikTok @dilarang.duduk</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* TikTok 2: @mmekuliner */}
            <div className="p-4 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:shadow-2xl transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-slate-900">@mmekuliner</span>
                  <span className="px-2.5 py-0.5 bg-red-100 text-red-700 font-extrabold text-[10px] rounded-full">TikTok Review</span>
                </div>
                
                <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md">
                  <iframe
                    src="https://www.tiktok.com/embed/v2/7632959962536283413"
                    className="w-full h-full border-0 rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="TikTok @mmekuliner"
                  />
                </div>
              </div>

              <a
                href="https://www.tiktok.com/@mmekuliner/video/7632959962536283413"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Buka TikTok @mmekuliner</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* TikTok 3: @aprilliachil 1 */}
            <div className="p-4 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:shadow-2xl transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-slate-900">@aprilliachil</span>
                  <span className="px-2.5 py-0.5 bg-red-100 text-red-700 font-extrabold text-[10px] rounded-full">TikTok Review</span>
                </div>
                
                <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md">
                  <iframe
                    src="https://www.tiktok.com/embed/v2/7657353179687947541"
                    className="w-full h-full border-0 rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="TikTok @aprilliachil 1"
                  />
                </div>
              </div>

              <a
                href="https://www.tiktok.com/@aprilliachil/video/7657353179687947541"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Buka TikTok @aprilliachil</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 8: TIKTOK SOCIAL PROOF (PART 2)
    // ----------------------------------------------------
    {
      id: 'socialproof-part2',
      title: 'Social Proof & Viral Review (Bagian 2)',
      subtitle: 'Liputan Kuliner & Review Vlogger di TikTok',
      content: (
        <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2">
          <p className="text-slate-600 text-xs sm:text-base max-w-3xl font-medium">
            Antusiasme penikmat sarapan pagi Sabuba terus merambah pengguna TikTok melalui pengalaman langsung para food vlogger!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-1">
            
            {/* TikTok 4: @amaryroose */}
            <div className="p-4 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:shadow-2xl transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-slate-900">@amaryroose</span>
                  <span className="px-2.5 py-0.5 bg-red-100 text-red-700 font-extrabold text-[10px] rounded-full">TikTok Review</span>
                </div>
                
                <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md">
                  <iframe
                    src="https://www.tiktok.com/embed/v2/7646970069733362964"
                    className="w-full h-full border-0 rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="TikTok @amaryroose"
                  />
                </div>
              </div>

              <a
                href="https://www.tiktok.com/@amaryroose/video/7646970069733362964"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Buka TikTok @amaryroose</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* TikTok 5: @aprilliachil (Part 2) */}
            <div className="p-4 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:shadow-2xl transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-slate-900">@aprilliachil #2</span>
                  <span className="px-2.5 py-0.5 bg-red-100 text-red-700 font-extrabold text-[10px] rounded-full">TikTok Review</span>
                </div>
                
                <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md">
                  <iframe
                    src="https://www.tiktok.com/embed/v2/7628636632308075796"
                    className="w-full h-full border-0 rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="TikTok @aprilliachil 2"
                  />
                </div>
              </div>

              <a
                href="https://www.tiktok.com/@aprilliachil/video/7628636632308075796"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Buka TikTok @aprilliachil</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* TikTok 6: @aliyaeat */}
            <div className="p-4 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:shadow-2xl transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-slate-900">@aliyaeat</span>
                  <span className="px-2.5 py-0.5 bg-red-100 text-red-700 font-extrabold text-[10px] rounded-full">TikTok Review</span>
                </div>
                
                <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md">
                  <iframe
                    src="https://www.tiktok.com/embed/v2/7649362405088103701"
                    className="w-full h-full border-0 rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="TikTok @aliyaeat"
                  />
                </div>
              </div>

              <a
                href="https://www.tiktok.com/@aliyaeat/video/7649362405088103701"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Buka TikTok @aliyaeat</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 8: ALL MENU CATALOGUE
    // ----------------------------------------------------
    {
      id: 'menu-showcase',
      title: 'Katalog Menu Lengkap Sabuba',
      subtitle: 'Seluruh Hidangan Sarapan Pagi, Dim Sum, Wonton, Topping & Minuman',
      content: (
        <div className="space-y-4 overflow-y-auto max-h-[68vh] pr-2">
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl font-medium">
            Sabuba menyajikan menu sarapan bubur bakar claypot, wonton kuah, dim sum, ekstra topping, & minuman bernilai jual tinggi. Seluruh bahan diproduksi terpusat oleh Central Kitchen.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-2">
            {SABUBA_DATA.menuItems.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(idx * 0.04, 0.4) }}
                className="p-3.5 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-md flex flex-col justify-between group overflow-hidden backdrop-blur-xl hover:shadow-xl transition-all"
              >
                <div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-slate-100 border border-slate-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.isBestSeller && (
                      <span className="absolute top-2 left-2 px-2.5 py-0.5 bg-red-700 text-white font-extrabold text-[10px] uppercase rounded-full shadow-md">
                        Best Seller
                      </span>
                    )}
                  </div>

                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {item.subcategory || item.category}
                  </div>

                  <h4 className="font-extrabold text-xs text-slate-900 line-clamp-2 leading-snug">
                    {item.name}
                  </h4>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-sm font-black text-red-700">
                    Rp {item.price.toLocaleString('id-ID')}
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded-full">
                    100% Halal
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 9: ROADMAP
    // ----------------------------------------------------
    {
      id: 'models-roadmap',
      title: 'Pilihan Model Kemitraan Sabuba',
      subtitle: 'Sabuba Classic (Motor Custom 3 Roda) Beroperasi & Tersedia Sekarang! Model Lain Segera Hadir.',
      content: (
        <div className="space-y-6 overflow-y-auto max-h-[72vh] pr-2">
          
          <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-red-800 via-red-900 to-slate-900 text-white border border-white/20 shadow-2xl relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center backdrop-blur-xl">
            
            <div className="absolute -top-4 right-6 px-4 py-1.5 bg-amber-400 text-red-950 font-black text-[10px] uppercase rounded-full shadow-lg z-10 flex items-center gap-2">
              <Flame className="w-4 h-4" />
              <span>TERSEDIA SEKARANG</span>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="w-full rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl bg-white/90 p-2 group flex items-center justify-center">
                <img
                  src="/assets/Konsep/sabuba-classic-poster.jpg"
                  alt="Sabuba Classic Custom 3-Wheel Motor Poster"
                  className="w-full h-auto max-h-[400px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Street Food Motor Custom 3 Roda</span>
                <h3 className="text-4xl font-black text-white mt-1">Sabuba Classic</h3>
                <div className="text-3xl font-black text-white mt-2">Rp 100.000.000</div>
              </div>

              <p className="text-sm text-red-100 leading-relaxed">
                Unit motor tiga roda custom fleksibel & kompak. Bebas sewa lokasi, mobilitas tinggi, rangka besi hollow kuat, dilengkapi panel aluminium anti karat & kitchen setup lengkap.
              </p>

              <div className="flex flex-wrap gap-3 text-xs font-bold">
                <span className="px-3 py-1.5 bg-white/10 rounded-xl border border-white/10 text-white">✓ Motor 3 Roda Custom (200cc-250cc)</span>
                <span className="px-3 py-1.5 bg-white/10 rounded-xl border border-white/10 text-white">✓ Dimensi 2.40m x 1.10m x 1.80m</span>
                <span className="px-3 py-1.5 bg-white/10 rounded-xl border border-white/10 text-white">✓ Bagi Hasil 50% : 50%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            
            <div className="p-6 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-md relative flex flex-col justify-between backdrop-blur-xl">
              <div className="absolute -top-3 right-4 px-3 py-1 bg-slate-100 text-slate-600 font-bold text-[10px] uppercase rounded-full border border-slate-200">
                SOON
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Semi-Permanent Hub</div>
                <h4 className="text-xl font-extrabold text-slate-900 mt-1">Sabuba Container</h4>
                <p className="text-sm text-slate-600 mt-2 font-medium leading-relaxed">
                  Konsep container booth modern untuk SPBU, minimarket, & pelataran gedung.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-md relative flex flex-col justify-between backdrop-blur-xl">
              <div className="absolute -top-3 right-4 px-3 py-1 bg-slate-100 text-slate-600 font-bold text-[10px] uppercase rounded-full border border-slate-200">
                SOON
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dine-in Fast Casual</div>
                <h4 className="text-xl font-extrabold text-slate-900 mt-1">Sabuba Resto</h4>
                <p className="text-sm text-slate-600 mt-2 font-medium leading-relaxed">
                  Format outlet ruko dengan tempat duduk ber-AC & area outdoor modern.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-[2rem] bg-white/90 border border-slate-200/60 shadow-md relative flex flex-col justify-between backdrop-blur-xl">
              <div className="absolute -top-3 right-4 px-3 py-1 bg-slate-100 text-slate-600 font-bold text-[10px] uppercase rounded-full border border-slate-200">
                SOON
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Island Kiosk Mall</div>
                <h4 className="text-xl font-extrabold text-slate-900 mt-1">Sabuba Express</h4>
                <p className="text-sm text-slate-600 mt-2 font-medium leading-relaxed">
                  Format booth island eksklusif untuk food court mall & indoor area.
                </p>
              </div>
            </div>

          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 10: Call to Action
    // ----------------------------------------------------
    {
      id: 'cta-investment',
      title: 'Bergabung Menjadi Mitra Strategis Sabuba',
      subtitle: 'Slot Kemitraan Terbatas untuk Pengembangan Outlet Sabuba Classic 2026',
      content: (
        <div className="flex flex-col h-full justify-center items-center space-y-8">
          <div className="p-10 rounded-[3rem] bg-gradient-to-br from-red-800 via-red-900 to-slate-900 text-white shadow-2xl text-center space-y-6 border border-white/20 backdrop-blur-2xl max-w-4xl w-full">
            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider">
              Peluang Kemitraan 2026
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Mulai Kemitraan Pasif Sabuba Classic Hari Ini
            </h2>
            <p className="text-red-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Miliki unit usaha makanan cepat saji Sabuba Classic dengan skema Mitra Pasif 50:50. Seluruh operasional harian dikelola terpusat oleh tim profesional HQ.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4 text-sm font-bold text-white">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-2xl border border-white/10 backdrop-blur-md">
                <CheckCircle2 className="w-5 h-5 text-amber-400" /> Modal Investasi Rp 100 Juta
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-2xl border border-white/10 backdrop-blur-md">
                <CheckCircle2 className="w-5 h-5 text-amber-400" /> Bagi Hasil 50% Mitra Pasif
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-2xl border border-white/10 backdrop-blur-md">
                <CheckCircle2 className="w-5 h-5 text-amber-400" /> POS Cloud Transparan 24/7
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full max-w-2xl">
            <a
              href={`https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=Halo%20Tim%20Sabuba,%20saya%20sudah%20membaca%20Proposal%20Kemitraan%20Rp%20100Jt%20(Mitra%20Pasif%2050:50).%20Saya%20tertarik%20untuk%20diskusi%20lebih%20lanjut.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-base shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              <span>Konsultasi via WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-base border border-slate-200 shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5 text-red-700" />
              <span>Cetak PDF Proposal</span>
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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-2 sm:p-4 md:p-6 overflow-y-auto">
        
        {/* Fullscreen Apple Style Presentation Deck (Clean White Theme) */}
        <motion.div
          id="proposal-pitch-deck"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className={`w-full max-w-7xl bg-slate-50 text-slate-900 rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden flex flex-col justify-between relative ${
            isFullscreen ? 'fixed inset-0 z-50 max-w-none rounded-none' : 'max-h-[92vh] h-full'
          }`}
        >
          {/* Subtle Background Glows (Brand Colors) */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Bar Header */}
          <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-white/80 backdrop-blur-2xl shrink-0 z-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center font-black text-sm border border-red-100 shadow-sm overflow-hidden p-1 shrink-0">
                <img src="/assets/sabuba-logo-3d.png" alt="Logo Sabuba 3D" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 tracking-wide">
                  Proposal Kemitraan
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-bold mt-0.5">
                  Slide {currentSlide + 1} dari {slides.length}: <span className="text-red-700">{currentSlideObj.title}</span>
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-3 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 transition-colors hidden sm:flex shadow-sm"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </button>

              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 rounded-2xl bg-red-700 hover:bg-red-800 text-white text-sm font-extrabold flex items-center gap-2 transition-colors shadow-md"
                title="Download / Print PDF"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-3 rounded-2xl bg-white hover:bg-red-50 border border-slate-200 text-slate-600 hover:text-red-600 transition-colors ml-2 shadow-sm"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Slide Content Area */}
          <div className="p-6 sm:p-10 flex-1 overflow-y-auto min-h-[440px] flex flex-col z-10 relative">
            
            {/* Top Right Logo Attached No 1 on Every Slide */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-10 z-20 flex items-center gap-2 p-1.5 sm:p-2 rounded-2xl bg-white/95 border border-slate-200/80 shadow-md backdrop-blur-xl pointer-events-none">
              <img
                src="/assets/sabuba-logo-3d.png"
                alt="Logo Sabuba 3D"
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
              />
            </div>

            <div className="mb-6 pr-16 sm:pr-24">
              <div className="text-xs font-extrabold text-red-600 uppercase tracking-widest mb-2">
                {currentSlideObj.subtitle}
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {currentSlideObj.title}
              </h2>
            </div>

            <div className="flex-1 my-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, type: 'spring', bounce: 0 }}
                  className="h-full"
                >
                  {currentSlideObj.content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Controls Bar */}
          <div className="p-5 sm:p-6 border-t border-slate-200 bg-white/80 backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 text-sm z-10">
            
            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-6 overflow-x-auto max-w-full">
              <div className="flex items-center gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? 'w-10 bg-red-600 shadow-md shadow-red-600/30'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    title={`Slide ${idx + 1}: ${s.title}`}
                  />
                ))}
              </div>

              <div className="hidden md:flex items-center gap-2 text-slate-500 font-bold border-l border-slate-300 pl-6 text-xs">
                <span className="text-slate-900">sabuba.flowstack.com</span>
                <span>•</span>
                <span>Proposal Kemitraan 2026</span>
              </div>
            </div>

            {/* Prev / Next Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="px-5 py-2.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 disabled:opacity-50 disabled:pointer-events-none text-slate-800 font-bold flex items-center gap-2 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Prev</span>
              </button>

              <div className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200 font-bold text-slate-500 text-sm shadow-sm">
                <span className="text-slate-900">0{currentSlide + 1}</span> / {slides.length}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 disabled:opacity-50 disabled:pointer-events-none text-white font-extrabold flex items-center gap-2 transition-colors shadow-xl shadow-slate-900/20"
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </motion.div>
      </div>

      {/* Hidden Print Container for Generating Complete Multi-Page Proposal PDF */}
      <div id="proposal-print-container" className="hidden print:block">
        {slides.map((s, idx) => (
          <div key={s.id} className="slide-print-page">
            <div className="flex justify-between items-center pb-2 mb-2 border-b-2 border-red-700 shrink-0">
              <div>
                <span className="text-[10px] font-black text-red-700 uppercase tracking-widest">SABUBA CLASSIC — PROPOSAL KEMITRAAN 2026</span>
                <h2 className="text-lg font-black text-slate-900 mt-0.5">{s.title}</h2>
                <div className="text-[10px] text-slate-500 font-bold">{s.subtitle}</div>
              </div>
              <img src="/assets/sabuba-logo-3d.png" alt="Sabuba Logo" className="w-8 h-8 object-contain" />
            </div>

            <div className="flex-1 overflow-hidden my-1 text-slate-800 text-xs">
              {s.content}
            </div>

            <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-[9px] text-slate-400 font-bold shrink-0">
              <span>sabuba.flowstack.com • Proposal Kemitraan Pasif 50:50</span>
              <span>Halaman {idx + 1} dari {slides.length}</span>
            </div>
          </div>
        ))}
      </div>
    </AnimatePresence>
  );
}
