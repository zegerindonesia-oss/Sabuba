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

  // Clean Menu Cards (COGS Display Removed as requested)
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider shadow-sm backdrop-blur-md"
            >
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
              <span>Sajian Warm Claypot Khas Nusantara</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl font-extrabold text-white leading-tight tracking-tight"
            >
              SABUBA <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Sarapan Bubur Bakar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#86868B] text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Hadir sebagai hidangan sarapan pagi yang hangat, lezat, & bernutrisi tinggi untuk keluarga Indonesia. Membuka peluang kerjasama kemitraan <strong className="text-white font-bold">Mitra Pasif 100%</strong> dengan <strong className="text-purple-400 font-bold">Bagi Hasil 50% : 50%</strong> tanpa repot operasional harian.
            </motion.p>

            {/* Key Value Glass Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <div className="p-4 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl">
                <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">Investasi CAPEX</div>
                <div className="text-2xl sm:text-3xl font-bold text-white mt-1">Rp 100 Jt</div>
                <div className="text-xs text-blue-400 font-medium mt-1">Sabuba Classic</div>
              </div>

              <div className="p-4 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl">
                <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">Bagi Hasil</div>
                <div className="text-2xl sm:text-3xl font-bold text-white mt-1">50% : 50%</div>
                <div className="text-xs text-purple-400 font-medium mt-1">Mitra Pasif</div>
              </div>

              <div className="p-4 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl">
                <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">Operasional</div>
                <div className="text-2xl sm:text-3xl font-bold text-white mt-1">100% HQ</div>
                <div className="text-xs text-pink-400 font-medium mt-1">Hands-Off</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Gradient-Blended Big Menu Photo */}
          <div className="lg:col-span-6 relative flex justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group"
            >
              <img
                src="https://drive.google.com/thumbnail?id=15khQoPH2F0ia_gDjRNtEWjN3yjAc1LTm&sz=w800"
                alt="Sabuba Bubur Bakar Claypot Signature"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Soft Gradient Overlay Fading into Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-[#0B0B0E]/50 to-transparent flex flex-col justify-end p-8">
                <div className="space-y-2 text-white">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-bold text-[10px] uppercase border border-blue-500/30">
                      Sabuba Classic (Motor Custom)
                    </span>
                    <span className="text-xs text-white/70 font-semibold">100% Halal & Fresh</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-white">Bubur Bakar Claypot Sabuba</h3>
                  <p className="text-sm text-[#86868B] max-w-md">
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
    // Slide 2: Problem & Solution + Motor Custom Showcase
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
            <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 space-y-4 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-[#86868B]" />
                </div>
                <span>Tantangan Usaha Kuliner Saat Ini</span>
              </div>
              <ul className="space-y-3 text-sm text-[#86868B]">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0 mt-2"></span>
                  <span><strong className="text-white">Sewa Tempat Ruko Mahal:</strong> Biaya sewa ruko & tempat permanen memakan puluhan juta/tahun yang memperlambat pengembalian modal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0 mt-2"></span>
                  <span><strong className="text-white">Rumit Kelola SDM & Operasional:</strong> Mengurus karyawan, rekrutmen, belanja bahan harian, & konsistensi rasa sering menguras waktu mitra.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0 mt-2"></span>
                  <span><strong className="text-white">Kurang Higienis di Street Food:</strong> Tempat sarapan di pinggir jalan umum kurang bersih & penyajiannya sering lambat.</span>
                </li>
              </ul>
            </div>

            {/* Solution Card */}
            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-black border border-white/10 space-y-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <div className="w-10 h-10 rounded-2xl bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span>Solusi Inovatif Sabuba Classic</span>
              </div>
              <ul className="space-y-3 text-sm text-[#86868B]">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Motor Custom 3 Roda (Bebas Sewa Ruko):</strong> Unit street food hemat overhead, fleksibel buka di lokasi strategis & terima panggilan acara.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Skema Mitra Pasif 100%:</strong> Tim pusat Sabuba mengelola rekrutmen SDM, kitchen supply chain terpusat, & promosi tanpa membuat mitra repot.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Speed of Service &lt; 2 Menit:</strong> SOP penyajian cepat dengan standar higiene tinggi & cita rasa claypot khas yang konsisten.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Sabuba Motor Poster Image Card Showcase (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 p-3 group relative backdrop-blur-xl">
              <img
                src="/assets/Konsep/motor-poster.png"
                alt="Sabuba Classic Custom 3-Wheel Motor Unit Poster"
                className="w-full h-[400px] sm:h-[480px] object-contain rounded-3xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 3: McKinsey Market Analysis (TAM / SAM / SOM)
    // ----------------------------------------------------
    {
      id: 'market-funnel',
      title: 'Top-Down Market Analysis',
      subtitle: 'Potensi Pasar Kuliner Sarapan & Fast Casual Food di Indonesia',
      content: (
        <div className="space-y-8">
          <p className="text-[#86868B] text-sm sm:text-base max-w-3xl">
            Pasar makanan sarapan & street food di Indonesia merupakan kebutuhan harian (daily essential) dengan tingkat repeat order sangat tinggi. Sabuba mengambil ceruk pasar fast casual street food modern yang efisien & higienis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Stacked Cards */}
            <div className="md:col-span-6 space-y-4 relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 z-0 hidden md:block"></div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl relative z-10"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-[#86868B] uppercase tracking-wider">
                      TAM (Total Addressable Market)
                    </span>
                    <h3 className="text-4xl font-extrabold text-white mt-3">Rp 120 Triliun</h3>
                    <p className="text-sm text-[#86868B] mt-1">Total konsumsi sarapan & street food harian di seluruh Indonesia</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-[2rem] bg-gradient-to-br from-blue-900/40 to-transparent border border-blue-500/20 shadow-2xl backdrop-blur-xl relative z-10 md:ml-12"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-500/30">
                      SAM (Serviceable Addressable Market)
                    </span>
                    <h3 className="text-3xl font-extrabold text-white mt-3">Rp 15 Triliun</h3>
                    <p className="text-sm text-blue-100/70 mt-1">Komuter & pekerja di area perkotaan Tier 1 & Tier 2 Jawa & Sumatra</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-[2rem] bg-gradient-to-br from-purple-900/40 to-transparent border border-purple-500/20 shadow-2xl backdrop-blur-xl relative z-10 md:ml-24"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold uppercase tracking-wider border border-purple-500/30">
                      SOM (Serviceable Obtainable Market)
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mt-3">Rp 500 Miliar</h3>
                    <p className="text-sm text-purple-100/70 mt-1">Target ekspansi 1,000 unit outlet Sabuba Classic dalam 3-5 tahun</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Key Market Drivers */}
            <div className="md:col-span-6 space-y-6">
              <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 shadow-inner">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Frekuensi Repeat Order Tinggi</h4>
                  <p className="text-sm text-[#86868B] mt-1">
                    Konsumsi rutin 4-6 kali per minggu oleh pekerja & keluarga karena menu sarapan yang praktis & mengenyangkan.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0 shadow-inner border border-blue-500/30">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Efisiensi Tanpa Sewa Tempat</h4>
                  <p className="text-sm text-[#86868B] mt-1">
                    Unit motor custom menekan biaya sewa tempat hingga 0%, menjaga net profit margin tetap tinggi.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center shrink-0 shadow-inner border border-purple-500/30">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Speed of Service &lt; 2 Menit</h4>
                  <p className="text-sm text-[#86868B] mt-1">
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
    // Slide 4: FEASIBILITY STUDY & FINANCE PROJECTION
    // ----------------------------------------------------
    {
      id: 'feasibility-study',
      title: 'Feasibility Study (Sabuba Classic)',
      subtitle: 'Analisa Keuangan & Proyeksi Laba/Rugi Kemitraan Sabuba Motor Custom',
      content: (
        <div className="space-y-6 overflow-y-auto max-h-[70vh] pr-2">
          
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div>
              <div className="inline-block px-3 py-1 bg-white/10 text-[#86868B] font-semibold text-xs uppercase tracking-wider rounded-full mb-2">
                FEASIBILITY STUDY (SABUBA CLASSIC)
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Analisa Keuangan Sabuba Classic (Motor Custom)
              </h3>
            </div>
            <div className="text-right bg-black/40 px-6 py-4 rounded-2xl border border-white/10 shrink-0">
              <div className="text-[#86868B] font-semibold text-xs tracking-wider">TOTAL MODAL AWAL / CAPEX</div>
              <div className="text-2xl font-bold text-white mt-1">Rp 100.000.000</div>
            </div>
          </div>

          {/* Upper Info Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl text-sm">
            <div><span className="text-[#86868B]">Brand:</span> <strong className="text-white block mt-1">Sabuba Indonesia</strong></div>
            <div><span className="text-[#86868B]">Status Kepemilikan:</span> <strong className="text-white block mt-1">Partnership (Mitra Pasif 50:50)</strong></div>
            <div><span className="text-[#86868B]">Paket Usaha:</span> <strong className="text-white block mt-1">Sabuba Classic (Motor)</strong></div>
            <div><span className="text-[#86868B]">Biaya Kemitraan:</span> <strong className="text-white block mt-1">Rp 100.000.000</strong></div>
          </div>

          {/* Feasibility Table */}
          <div className="overflow-x-auto rounded-[2rem] border border-white/10 shadow-2xl bg-black/50 backdrop-blur-xl text-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 text-[#86868B] text-xs font-semibold uppercase tracking-wider border-b border-white/10">
                  <th className="p-4 border-r border-white/10">ANALISIS PENDAPATAN</th>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <th key={i} className="p-4 text-center border-r border-white/10 last:border-0 text-white">
                      {sc.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10 font-medium">
                <tr className="hover:bg-white/5">
                  <td className="p-4 text-white">Jumlah Motor Custom / Outlet</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-[#86868B]">1 Unit</td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-4 text-white">TC / Day (Transaksi per Hari)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-white font-bold">{sc.tcDay} Porsi</td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-4 text-white">TC / Month (30 Hari)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-[#86868B]">{sc.tcMonth.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-4 text-white">APC (Average per Check)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-[#86868B]">Rp {sc.apc.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-4 text-white">Sales / Hari</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-white font-bold">Rp {sc.salesDay.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="bg-blue-900/20 font-bold text-blue-400">
                  <td className="p-4">TOTAL REVENUE (NET SALES / BULAN)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-blue-400 text-sm">Rp {sc.salesMonth.toLocaleString('id-ID')}</td>
                  ))}
                </tr>

                <tr className="bg-white/5 text-[#86868B] text-xs font-semibold uppercase tracking-wider border-y border-white/10">
                  <td className="p-4 border-r border-white/10">PROYEKSI LABA / RUGI BULANAN</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center border-r border-white/10 last:border-0">SIMULASI</td>
                  ))}
                </tr>

                <tr className="hover:bg-white/5">
                  <td className="p-4 text-[#86868B]">HPP / Total Biaya Bahan Baku (~40-42%)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-white/50">Rp {sc.hppAmount.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="bg-white/5 font-bold">
                  <td className="p-4 text-white">GROSS PROFIT (LABA KOTOR)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-white">Rp {sc.grossProfitAmount.toLocaleString('id-ID')}</td>
                  ))}
                </tr>

                <tr className="hover:bg-white/5">
                  <td className="p-4 text-[#86868B]">Biaya Karyawan / Gaji Tim Ops Store</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-white/50">Rp {sc.opsKaryawan.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-4 text-[#86868B]">Biaya Rumah Tangga / Kebersihan</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-white/50">Rp {sc.opsRumahTangga.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-4 text-[#86868B]">Biaya Listrik, Air & Bahan Bakar Motor</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-white/50">Rp {sc.opsListrikAirFuel.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="bg-white/5 font-bold">
                  <td className="p-4 text-white">TOTAL BIAYA OPERASIONAL STORE</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-white/70">Rp {sc.totalOpsAmount.toLocaleString('id-ID')}</td>
                  ))}
                </tr>

                <tr className="bg-purple-900/20 font-bold">
                  <td className="p-4 text-purple-400">STORE NET PROFIT (KEUNTUNGAN BERSIH OUTLET)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-purple-400 text-sm">Rp {sc.ebitdaNetProfitStore.toLocaleString('id-ID')}</td>
                  ))}
                </tr>

                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 font-bold">
                  <td className="p-4 text-white">HAK BAGI HASIL MITRA PASIF (50% DARI NET PROFIT)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-white text-base">Rp {sc.mitraShare50.toLocaleString('id-ID')} / Bln</td>
                  ))}
                </tr>

                <tr className="bg-black/50 font-semibold">
                  <td className="p-4 text-[#86868B]">Estimasi Payback Period (Berdasarkan Net Profit Mitra)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-4 text-center text-white font-bold">~{sc.paybackMonths} Bulan</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#86868B] leading-relaxed backdrop-blur-xl">
            <strong className="text-white">Catatan & Disclaimer Proyeksi:</strong> Perhitungan di atas hanya merupakan proyeksi/simulasi matematis berdasarkan standar operasional. Hasil dapat berbeda-beda tergantung kondisi lokasi, tingkat keramaian, & faktor pasar masing-masing outlet.
          </div>

        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 5: REAL FINANCIAL STATEMENT
    // ----------------------------------------------------
    {
      id: 'real-pos-data',
      title: 'Laporan Keuangan Real Outlet',
      subtitle: 'Kinerja Operasional Outlet Sabuba Pusat (Sales 100% | COGS 40% | OPEX 15% | Net Profit 45%)',
      content: (
        <div className="space-y-6 overflow-y-auto max-h-[72vh] pr-2">
          
          {/* Grid Layout: Left Financial Statement Table, Right Animated Waterfall Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Official Financial Report Table (Laporan Keuangan) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl bg-white/5 backdrop-blur-xl text-sm">
                <div className="bg-black/40 text-white px-5 py-4 font-semibold text-xs uppercase tracking-wider flex justify-between items-center border-b border-white/10">
                  <span>LAPORAN LABA / RUGI REAL (AGUSTUS 2026)</span>
                  <span className="text-[#86868B]">INCOME STATEMENT</span>
                </div>

                <table className="w-full text-left divide-y divide-white/10 font-medium">
                  <tbody>
                    {/* Revenue */}
                    <tr className="font-bold">
                      <td className="p-4 text-white">1. PENJUALAN BERSIH (NET SALES REVENUE)</td>
                      <td className="p-4 text-center text-white/50">100.0%</td>
                      <td className="p-4 text-right text-white text-base">Rp 80.108.009</td>
                    </tr>

                    {/* COGS 40% */}
                    <tr className="hover:bg-white/5 text-[#86868B]">
                      <td className="p-4 pl-8">2. Beban Pokok Penjualan (COGS / HPP)</td>
                      <td className="p-4 text-center">40.0%</td>
                      <td className="p-4 text-right">Rp 32.043.204</td>
                    </tr>

                    {/* Gross Profit 60% */}
                    <tr className="bg-white/5 font-bold border-t border-white/10">
                      <td className="p-4 text-white">3. LABA KOTOR (GROSS PROFIT)</td>
                      <td className="p-4 text-center text-white/50">60.0%</td>
                      <td className="p-4 text-right text-white text-base">Rp 48.064.805</td>
                    </tr>

                    {/* OPEX Breakdown Header */}
                    <tr className="font-semibold">
                      <td colSpan="3" className="px-4 py-3 text-xs uppercase tracking-wider text-[#86868B]">
                        4. BEBAN OPERASIONAL STORE (OPEX 15.0%)
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 text-xs text-[#86868B]">
                      <td className="py-2 px-4 pl-10">• Gaji Tim Karyawan & Bonus Store</td>
                      <td className="py-2 px-4 text-center">9.4%</td>
                      <td className="py-2 px-4 text-right">Rp 7.500.000</td>
                    </tr>
                    <tr className="hover:bg-white/5 text-xs text-[#86868B]">
                      <td className="py-2 px-4 pl-10">• Biaya Utility (Listrik, Air & Bahan Bakar)</td>
                      <td className="py-2 px-4 text-center">3.1%</td>
                      <td className="py-2 px-4 text-right">Rp 2.500.000</td>
                    </tr>
                    <tr className="hover:bg-white/5 text-xs text-[#86868B]">
                      <td className="py-2 px-4 pl-10">• Biaya Pemeliharaan & Kebersihan Ops</td>
                      <td className="py-2 px-4 text-center">2.5%</td>
                      <td className="py-2 px-4 text-right">Rp 2.016.201</td>
                    </tr>
                    <tr className="bg-white/5 font-bold border-t border-white/10">
                      <td className="p-4 text-white">TOTAL BEBAN OPERASIONAL (TOTAL OPEX)</td>
                      <td className="p-4 text-center text-white/50">15.0%</td>
                      <td className="p-4 text-right text-white">Rp 12.016.201</td>
                    </tr>

                    {/* Net Profit 45% */}
                    <tr className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 text-white font-bold border-t border-white/10">
                      <td className="p-5">5. STORE NET PROFIT (LABA BERSIH OUTLET)</td>
                      <td className="p-5 text-center text-blue-400">45.0%</td>
                      <td className="p-5 text-right text-white text-xl">Rp 36.048.604</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column: Animated Financial Chart Waterfall & Multi-Month Table */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Visual Animated Financial Waterfall Chart */}
              <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl space-y-5">
                <div className="flex justify-between items-center text-xs font-semibold text-[#86868B] uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-white" />
                    Visual Breakdown
                  </span>
                  <span>Proporsi Standard</span>
                </div>

                <div className="space-y-4 text-sm">
                  {/* Sales 100% */}
                  <div>
                    <div className="flex justify-between font-bold text-white mb-2">
                      <span>Total Sales</span>
                      <span>100% (Rp 80,1 Jt)</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-white rounded-full"
                      />
                    </div>
                  </div>

                  {/* COGS 40% */}
                  <div>
                    <div className="flex justify-between font-bold text-white mb-2">
                      <span className="text-[#86868B]">Beban Bahan Baku (COGS)</span>
                      <span>40% (Rp 32,0 Jt)</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '40%' }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full bg-slate-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* OPEX 15% */}
                  <div>
                    <div className="flex justify-between font-bold text-white mb-2">
                      <span className="text-[#86868B]">Beban Operasional (OPEX)</span>
                      <span>15% (Rp 12,0 Jt)</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '15%' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full bg-slate-600 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Store Net Profit 45% */}
                  <div>
                    <div className="flex justify-between font-bold text-white mb-2">
                      <span className="text-blue-400">Laba Bersih Outlet (Net Profit)</span>
                      <span className="text-blue-400">45% (Rp 36,0 Jt)</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '45%' }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Historical Log Summary Table (Jan to Aug 2026) */}
              <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl space-y-4 text-sm">
                <div className="font-semibold text-[#86868B] flex justify-between items-center text-xs uppercase tracking-wider">
                  <span>Historis Kinerja (Jan-Aug 2026)</span>
                </div>

                <div className="space-y-2">
                  {realPosData.map((d, idx) => {
                    const omset = d.omset;
                    const netProfit = omset * 0.45;

                    return (
                      <div key={idx} className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white text-sm">{d.period}</div>
                          <div className="text-xs text-[#86868B]">Penjualan: Rp {(omset / 1000000).toFixed(1)}M</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-white text-sm">Net Profit: Rp {(netProfit / 1000000).toFixed(1)}M</div>
                          <div className="text-xs text-blue-400 font-semibold">Margin Net: 45.0%</div>
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
            
            {/* iPhone Mockup 1 Placeholder */}
            <div className="w-56 h-[400px] bg-black rounded-[3rem] p-4 border-[6px] border-white/10 shadow-2xl relative flex flex-col justify-between group">
              <div className="w-20 h-4 bg-white/10 rounded-full mx-auto mb-2 z-10"></div>
              
              <div className="flex-1 bg-gradient-to-b from-blue-900/40 to-transparent rounded-[2rem] overflow-hidden p-4 text-white flex flex-col justify-between border border-white/10 relative">
                <div className="space-y-3 text-center pt-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/30">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white">GoFood / GrabFood</h4>
                  <p className="text-xs text-[#86868B] leading-tight">
                    [ Placeholder Mockup App Storefront ]
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
                  <div className="text-xs font-bold text-white">Siap Ditampilkan</div>
                </div>
              </div>
            </div>

            {/* iPhone Mockup 2 Placeholder */}
            <div className="w-56 h-[400px] bg-black rounded-[3rem] p-4 border-[6px] border-white/10 shadow-2xl relative flex flex-col justify-between group hidden sm:flex">
              <div className="w-20 h-4 bg-white/10 rounded-full mx-auto mb-2 z-10"></div>
              
              <div className="flex-1 bg-gradient-to-b from-purple-900/40 to-transparent rounded-[2rem] overflow-hidden p-4 text-white flex flex-col justify-between border border-white/10 relative">
                <div className="space-y-3 text-center pt-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto border border-purple-500/30">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Promo & Ads</h4>
                  <p className="text-xs text-[#86868B] leading-tight">
                    [ Placeholder Mockup Banner & Ads ]
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
                  <div className="text-xs font-bold text-white">Siap Ditampilkan</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Marketing Support Points */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-white">Dukungan Pemasaran dari Pusat Sabuba HQ:</h3>

            <div className="p-5 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center shrink-0">
                <Megaphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Pendaftaran Online Delivery</h4>
                <p className="text-[#86868B] text-sm mt-1">Proses pendaftaran & registrasi merchant online (GoFood, GrabFood, ShopeeFood) dikelola penuh oleh pusat.</p>
              </div>
            </div>

            <div className="p-5 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Program Marketing & Promo Diskon</h4>
                <p className="text-[#86868B] text-sm mt-1">Setting kampanye promo diskon ongkir & voucher belanja dilakukan secara terpusat dan berkala.</p>
              </div>
            </div>

            <div className="p-5 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Support Desain Materi Branding</h4>
                <p className="text-[#86868B] text-sm mt-1">Disediakan desain materi promosi digital, konten sosial media, spanduk, & banner promo.</p>
              </div>
            </div>
          </div>

        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 7: GALLERY & SOCIAL PROOF
    // ----------------------------------------------------
    {
      id: 'gallery-socialproof',
      title: 'Social Proof & Suasana Outlet',
      subtitle: 'Antusiasme Pelanggan & Keramaian Outlet Operasional Sabuba',
      content: (
        <div className="space-y-6">
          <p className="text-[#86868B] text-sm sm:text-base max-w-3xl">
            Tingginya minat masyarakat terhadap Bubur Bakar Claypot Sabuba tercermin dari antrean sarapan pagi harian & liputan konten di media sosial.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            
            {/* iPhone Frame 1 */}
            <div className="p-4 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col justify-between group">
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-black flex flex-col items-center justify-center text-center p-4">
                <img
                  src="/assets/Konsep/1. Konsep Tenda.png"
                  alt="Suasana Outlet Rame"
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col items-center justify-center p-4 text-white">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-xl mb-3 border border-white/30">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                  <div className="text-sm font-bold text-white">Suasana Keramaian Outlet</div>
                </div>
              </div>
            </div>

            {/* iPhone Frame 2 */}
            <div className="p-4 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col justify-between group">
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-black flex flex-col items-center justify-center text-center p-4">
                <img
                  src="/assets/Konsep/5. Konsep Street Food.jpg"
                  alt="Operasional Motor Custom"
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col items-center justify-center p-4 text-white">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-xl mb-3 border border-white/30">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                  <div className="text-sm font-bold text-white">Sabuba Classic in Action</div>
                </div>
              </div>
            </div>

            {/* iPhone Frame 3 */}
            <div className="p-4 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col justify-between group">
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-black flex flex-col items-center justify-center text-center p-4">
                <img
                  src="/assets/Konsep/4. Trial Zeger X Sabuba.png"
                  alt="Review Foodie Kuliner"
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col items-center justify-center p-4 text-white">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-xl mb-3 border border-white/30">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                  <div className="text-sm font-bold text-white">Review Foodie Kuliner</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 8: KATALOG MENU FAVORIT
    // ----------------------------------------------------
    {
      id: 'menu-showcase',
      title: 'Katalog Menu Favorit Sabuba',
      subtitle: 'Hidangan Sarapan Pagi Lezat dengan Tingkat Penjualan Harian Tinggi',
      content: (
        <div className="space-y-6">
          <p className="text-[#86868B] text-sm sm:text-base max-w-3xl">
            Sabuba menyajikan menu sarapan bubur bakar claypot, wonton kuah, & dim sum bernilai jual tinggi. Seluruh bahan diproduksi terpusat oleh Central Kitchen untuk menjaga konsistensi rasa & kebersihan.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-2">
            {featuredMenu.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="p-4 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl flex flex-col justify-between group overflow-hidden backdrop-blur-xl"
              >
                <div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-black/50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <h4 className="font-bold text-sm text-white line-clamp-2 leading-tight">
                    {item.name}
                  </h4>
                  <div className="text-base font-bold text-white mt-2">
                    Rp {item.price.toLocaleString('id-ID')}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#86868B] font-medium">100% Halal</span>
                  <span className="font-bold text-blue-400">
                    Signature
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 9: Franchise Models Roadmap
    // ----------------------------------------------------
    {
      id: 'models-roadmap',
      title: 'Pilihan Model Kemitraan Sabuba',
      subtitle: 'Sabuba Classic (Motor Custom 3 Roda) Beroperasi & Tersedia Sekarang! Model Lain Segera Hadir.',
      content: (
        <div className="space-y-6 overflow-y-auto max-h-[72vh] pr-2">
          
          {/* Main Hero Showcase: Sabuba Classic Motor 3 Roda */}
          <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-transparent text-white border border-white/20 shadow-2xl relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center backdrop-blur-xl">
            
            <div className="absolute -top-4 right-6 px-4 py-1.5 bg-blue-500 text-white font-bold text-[10px] uppercase rounded-full shadow-lg z-10 flex items-center gap-2">
              <Flame className="w-4 h-4" />
              <span>TERSEDIA SEKARANG</span>
            </div>

            {/* Left Column: Sabuba Classic 3-Wheel Custom Motor Poster */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black/50 p-2 group">
                <img
                  src="/assets/Konsep/motor-poster.png"
                  alt="Sabuba Classic Custom 3-Wheel Motor Poster"
                  className="w-full h-[300px] sm:h-[380px] object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Column: Specifications & Investment Info */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Street Food Motor Custom 3 Roda</span>
                <h3 className="text-4xl font-extrabold text-white mt-1">Sabuba Classic</h3>
                <div className="text-3xl font-bold text-white mt-2">Rp 100.000.000</div>
              </div>

              <p className="text-sm text-[#86868B] leading-relaxed">
                Unit motor tiga roda custom fleksibel & kompak. Bebas sewa lokasi, mobilitas tinggi, rangka besi hollow kuat, dilengkapi panel aluminium anti karat & kitchen setup lengkap.
              </p>

              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <span className="px-3 py-1.5 bg-white/10 rounded-xl border border-white/10 text-white">✓ Motor 3 Roda Custom (200cc-250cc)</span>
                <span className="px-3 py-1.5 bg-white/10 rounded-xl border border-white/10 text-white">✓ Dimensi 2.40m x 1.10m x 1.80m</span>
                <span className="px-3 py-1.5 bg-white/10 rounded-xl border border-white/10 text-white">✓ Bagi Hasil 50% : 50%</span>
              </div>
            </div>
          </div>

          {/* Upcoming Models */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            
            {/* Model 2: Sabuba Container */}
            <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 relative flex flex-col justify-between backdrop-blur-xl">
              <div className="absolute -top-3 right-4 px-3 py-1 bg-white/10 text-white font-semibold text-[10px] uppercase rounded-full backdrop-blur-md border border-white/20">
                SOON
              </div>
              <div>
                <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">Semi-Permanent Hub</div>
                <h4 className="text-xl font-bold text-white mt-1">Sabuba Container</h4>
                <p className="text-sm text-[#86868B] mt-2 leading-relaxed">
                  Konsep container booth modern untuk SPBU, minimarket, & pelataran gedung.
                </p>
              </div>
            </div>

            {/* Model 3: Sabuba Resto */}
            <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 relative flex flex-col justify-between backdrop-blur-xl">
              <div className="absolute -top-3 right-4 px-3 py-1 bg-white/10 text-white font-semibold text-[10px] uppercase rounded-full backdrop-blur-md border border-white/20">
                SOON
              </div>
              <div>
                <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">Dine-in Fast Casual</div>
                <h4 className="text-xl font-bold text-white mt-1">Sabuba Resto</h4>
                <p className="text-sm text-[#86868B] mt-2 leading-relaxed">
                  Format outlet ruko dengan tempat duduk ber-AC & area outdoor modern.
                </p>
              </div>
            </div>

            {/* Model 4: Sabuba Express Mall */}
            <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 relative flex flex-col justify-between backdrop-blur-xl">
              <div className="absolute -top-3 right-4 px-3 py-1 bg-white/10 text-white font-semibold text-[10px] uppercase rounded-full backdrop-blur-md border border-white/20">
                SOON
              </div>
              <div>
                <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">Island Kiosk Mall</div>
                <h4 className="text-xl font-bold text-white mt-1">Sabuba Express</h4>
                <p className="text-sm text-[#86868B] mt-2 leading-relaxed">
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
          <div className="p-10 rounded-[3rem] bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-transparent text-white shadow-2xl text-center space-y-6 border border-white/10 backdrop-blur-2xl max-w-4xl w-full">
            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider">
              Peluang Kemitraan 2026
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
              Mulai Kemitraan Pasif Sabuba Classic Hari Ini
            </h2>
            <p className="text-[#86868B] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Miliki unit usaha makanan cepat saji Sabuba Classic dengan skema Mitra Pasif 50:50. Seluruh operasional harian dikelola terpusat oleh tim profesional HQ.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4 text-sm font-semibold text-white">
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-2xl border border-white/10 backdrop-blur-md">
                <CheckCircle2 className="w-5 h-5 text-blue-400" /> Modal Investasi Rp 100 Juta
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-2xl border border-white/10 backdrop-blur-md">
                <CheckCircle2 className="w-5 h-5 text-purple-400" /> Bagi Hasil 50% Mitra Pasif
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-2xl border border-white/10 backdrop-blur-md">
                <CheckCircle2 className="w-5 h-5 text-pink-400" /> POS Cloud Transparan 24/7
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full max-w-2xl">
            <a
              href={`https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=Halo%20Tim%20Sabuba,%20saya%20sudah%20membaca%20Proposal%20Kemitraan%20Rp%20100Jt%20(Mitra%20Pasif%2050:50).%20Saya%20tertarik%20untuk%20diskusi%20lebih%20lanjut.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-200 text-black font-bold text-base shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              <span>Konsultasi via WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-2xl p-2 sm:p-4 md:p-6 overflow-y-auto">
        
        {/* Fullscreen Apple Style Presentation Deck */}
        <motion.div
          id="proposal-pitch-deck"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className={`w-full max-w-7xl bg-[#0B0B0E] text-white rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between relative ${
            isFullscreen ? 'fixed inset-0 z-50 max-w-none rounded-none' : 'max-h-[92vh] h-full'
          }`}
        >
          {/* Subtle Background Glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Bar Header */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-white/5 backdrop-blur-2xl shrink-0 z-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center font-bold text-sm shadow-inner border border-white/5">
                SBB
              </div>
              <div>
                <h3 className="font-bold text-base text-white tracking-wide">
                  Sabuba Proposal Kemitraan 2026
                </h3>
                <p className="text-xs text-[#86868B] font-medium mt-0.5">
                  Slide {currentSlide + 1} dari {slides.length}: <span className="text-white">{currentSlideObj.title}</span>
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors hidden sm:flex backdrop-blur-md"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </button>

              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-bold flex items-center gap-2 transition-colors backdrop-blur-md"
                title="Download / Print PDF"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors ml-2 backdrop-blur-md"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Slide Content Area */}
          <div className="p-6 sm:p-10 flex-1 overflow-y-auto min-h-[440px] flex flex-col z-10">
            <div className="mb-6">
              <div className="text-xs font-bold text-[#86868B] uppercase tracking-widest mb-2">
                {currentSlideObj.subtitle}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
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
          <div className="p-5 sm:p-6 border-t border-white/10 bg-white/5 backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 text-sm z-10">
            
            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-6 overflow-x-auto max-w-full">
              <div className="flex items-center gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? 'w-10 bg-white shadow-lg shadow-white/20'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    title={`Slide ${idx + 1}: ${s.title}`}
                  />
                ))}
              </div>

              <div className="hidden md:flex items-center gap-2 text-[#86868B] font-medium border-l border-white/10 pl-6 text-xs">
                <span className="text-white">sabuba.flowstack.com</span>
                <span>•</span>
                <span>Proposal Kemitraan 2026</span>
              </div>
            </div>

            {/* Prev / Next Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="px-5 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 disabled:opacity-30 disabled:pointer-events-none text-white font-bold flex items-center gap-2 transition-colors backdrop-blur-md"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Prev</span>
              </button>

              <div className="px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 font-bold text-[#86868B] text-sm backdrop-blur-md">
                <span className="text-white">0{currentSlide + 1}</span> / {slides.length}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="px-5 py-2.5 rounded-2xl bg-white hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none text-black font-bold flex items-center gap-2 transition-colors shadow-xl shadow-white/10"
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
