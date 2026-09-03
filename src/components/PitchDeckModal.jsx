import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ChevronLeft, ChevronRight, Download, Share2, Sparkles, TrendingUp,
  DollarSign, ShieldCheck, Cpu, Smartphone, BarChart3, PieChart, Layers,
  Award, Play, CheckCircle2, ArrowRight, RefreshCw, Bot, Check, Maximize2,
  Minimize2, ExternalLink, Calendar, Building2, Zap, Flame, Star, Utensils,
  AlertTriangle, HelpCircle, FileText
} from 'lucide-react';
import SabubaLogo from './SabubaLogo';
import { SABUBA_DATA, formatRupiah } from '../data/sabubaData';

export default function PitchDeckModal({ isOpen, onClose, defaultSlide = 0 }) {
  const [currentSlide, setCurrentSlide] = useState(defaultSlide);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [customVideoUrl, setCustomVideoUrl] = useState('');
  const [selectedScenario, setSelectedScenario] = useState('sedang'); // 'rendah', 'sedang', 'rame', 'real'

  // Historical Screenshots Real Financial Data (Jan to Aug 2026)
  const realPosData = [
    { period: 'Jan 2026', omset: 32176000, profit: 16382000, margin: 50.9 },
    { period: 'Feb-Mar 2026', omset: 37027000, profit: 19181000, margin: 51.8 },
    { period: 'Apr 2026', omset: 51879000, profit: 28039500, margin: 54.0 },
    { period: 'Mei 2026', omset: 71680000, profit: 38623500, margin: 53.8 },
    { period: 'Jun 2026', omset: 66792000, profit: 36617000, margin: 54.8 },
    { period: 'Agu 2026', omset: 80108009, profit: 40177509, margin: 50.1 },
  ];

  // Financial Projection Models (Laporan Laba Rugi Structure)
  const scenarios = {
    rendah: {
      name: 'Konservatif (Rendah)',
      tc: 50,
      avgBill: 30000,
      dailySales: 1500000,
      grossSales: 45000000,
      cogsPercent: 42,
      cogsAmount: 18900000,
      grossProfit: 26100000,
      opsSdm: 9000000,
      marketingAdmin: 2100000,
      totalExpenses: 11100000,
      netProfit: 15000000,
      netMarginPercent: 33.3,
      mitraShare: 7500000,
      hqShare: 7500000,
      description: 'Estimasi performa awal pembukaan outlet atau lokasi kawasan pemukiman sedang.'
    },
    sedang: {
      name: 'Moderate (Sedang)',
      tc: 80,
      avgBill: 35000,
      dailySales: 2800000,
      grossSales: 84000000,
      cogsPercent: 42,
      cogsAmount: 35280000,
      grossProfit: 48720000,
      opsSdm: 11500000,
      marketingAdmin: 3500000,
      totalExpenses: 15000000,
      netProfit: 33720000,
      netMarginPercent: 40.1,
      mitraShare: 16860000,
      hqShare: 16860000,
      description: 'Estimasi performa lokasi rata-rata di kawasan ruko / jalan utama kota.'
    },
    rame: {
      name: 'Optimis (Rame)',
      tc: 120,
      avgBill: 40000,
      dailySales: 4800000,
      grossSales: 144000000,
      cogsPercent: 40,
      cogsAmount: 57600000,
      grossProfit: 86400000,
      opsSdm: 16000000,
      marketingAdmin: 6000000,
      totalExpenses: 22000000,
      netProfit: 64400000,
      netMarginPercent: 44.7,
      mitraShare: 32200000,
      hqShare: 32200000,
      description: 'Estimasi performa lokasi premium dengan kepadatan tinggi (perkantoran / pusat keramaian).'
    }
  };

  const currentScenario = scenarios[selectedScenario] || scenarios.sedang;

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
    // Slide 1: FRONT COVER - Crimson Red Sabuba Theme + Big Menu Image
    // ----------------------------------------------------
    {
      id: 'cover',
      title: 'Executive Summary',
      subtitle: 'Pitch Deck Kemitraan Sabuba Classic 2026',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-red-950 font-black text-xs uppercase tracking-wider shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Investment Proposal Deck 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight"
            >
              SABUBA <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">Fast Casual Food Tech</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-red-100/90 text-sm sm:text-base leading-relaxed"
            >
              Peluang kerjasama kemitraan dengan skema <strong className="text-amber-300 font-extrabold">Mitra Pasif 100%</strong> dan <strong className="text-emerald-400 font-extrabold">Bagi Hasil 50% - 50%</strong>. Investor bebas dari kerumitan operasional harian, seluruh penjualan terpantau real-time via online AI POS.
            </motion.p>

            {/* Key Value Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-3 pt-2"
            >
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-md">
                <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Investasi</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">Rp 100 Jt</div>
                <div className="text-[10px] text-red-200 font-semibold mt-0.5">Sabuba Classic</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-md">
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Bagi Hasil</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">50% : 50%</div>
                <div className="text-[10px] text-red-200 font-semibold mt-0.5">Mitra Pasif</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-md">
                <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">Operasional</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">100% HQ</div>
                <div className="text-[10px] text-red-200 font-semibold mt-0.5">Hands-Off</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Big High-Res Menu Image Showcase */}
          <div className="lg:col-span-6 relative flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group"
            >
              <img
                src="https://drive.google.com/thumbnail?id=15khQoPH2F0ia_gDjRNtEWjN3yjAc1LTm&sz=w800"
                alt="Sabuba Bubur Bakar Claypot Signature"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay & Floating Glass Badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                
                {/* Floating Top Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 right-4 px-3.5 py-2 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 shadow-lg text-amber-300 text-xs font-black flex items-center gap-2"
                >
                  <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Khas Aromatis Claypot</span>
                </motion.div>

                {/* Bottom Content overlay */}
                <div className="space-y-1 text-white">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-red-950 font-black text-[10px] uppercase">
                      Sabuba Classic (Motor Custom)
                    </span>
                    <span className="text-xs text-amber-200 font-bold">100% Halal & Fresh</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white">Bubur Bakar Claypot Sabuba</h3>
                  <p className="text-xs text-red-100/90 max-w-md">
                    Konsep Street Food motor custom yang hemat overhead tanpa biaya sewa ruko mahal & daya jangkau tinggi.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 2: Real Historical POS Data (Jan to Aug 2026)
    // ----------------------------------------------------
    {
      id: 'real-pos-data',
      title: 'Data Historis Real Transaksi POS Outlet',
      subtitle: 'Rekam Jarak Penjualan Riil Outlet Sabuba Januari - Agustus 2026',
      content: (
        <div className="space-y-5">
          <div className="p-3.5 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              Data bersumber langsung dari sistem POS Kasir Cloud Sabuba saat ini.
            </span>
            <span className="px-3 py-1 bg-amber-400 text-red-950 rounded-full font-black text-[10px] uppercase tracking-wider">
              REAL HISTORICAL DATA
            </span>
          </div>

          {/* Real POS Data Table / Bar Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            
            {/* Chart Bars */}
            <div className="lg:col-span-7 space-y-3 bg-black/40 p-5 rounded-3xl border border-white/15 backdrop-blur-md">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Grafik Penjualan & Profit Riil (Rp)</span>
                <span className="text-amber-300 font-extrabold text-[11px]">Agustus 2026 Peak: Rp 80,1 Jt</span>
              </div>

              {realPosData.map((d, i) => {
                const maxOmset = 85000000;
                const widthOmset = (d.omset / maxOmset) * 100;

                return (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-200">
                      <span>{d.period}</span>
                      <span>
                        Omset: <strong className="text-amber-300">Rp {(d.omset / 1000000).toFixed(1)}M</strong> | Profit Store: <strong className="text-emerald-400">Rp {(d.profit / 1000000).toFixed(1)}M</strong>
                      </span>
                    </div>

                    <div className="h-3.5 w-full bg-black/50 rounded-full overflow-hidden relative flex">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${widthOmset}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-400 rounded-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Real Data Highlight Cards */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-500/20 via-black/40 to-black/60 border border-amber-400/30 backdrop-blur-md space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">Penjualan Agustus 2026 (Real POS Log)</span>
                <div className="text-3xl font-black text-white">Rp 80.108.009</div>
                <div className="text-xs font-bold text-emerald-400">Keuntungan Bersih Store: Rp 40.177.509 (50.1%)</div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-red-100/90 leading-relaxed">
                <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                  <FileText className="w-4 h-4" /> Catatan Data Real:
                </div>
                Pencapaian di atas adalah bukti kinerja nyata operasional outlet Sabuba saat ini. Hasil setiap lokasi dapat bervariasi tergantung lokasi & faktor pasar lokal.
              </div>
            </div>

          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 3: PROYEKSI FINANSIAL & LAPORAN LABA RUGI (SIMULASI RENDAH, SEDANG, RAME)
    // ----------------------------------------------------
    {
      id: 'financial-projection',
      title: 'Simulasi Proyeksi Laba Rugi & Bagi Hasil',
      subtitle: 'Simulasi Laporan Keuangan Berdasarkan 3 Skenario Kondisi (Rendah, Sedang, Rame)',
      content: (
        <div className="space-y-4">
          
          {/* Scenario Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-md">
            <button
              onClick={() => setSelectedScenario('rendah')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                selectedScenario === 'rendah'
                  ? 'bg-amber-400 text-red-950 shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Skenario Konservatif (Rendah)
            </button>

            <button
              onClick={() => setSelectedScenario('sedang')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                selectedScenario === 'sedang'
                  ? 'bg-amber-400 text-red-950 shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Skenario Moderate (Sedang)
            </button>

            <button
              onClick={() => setSelectedScenario('rame')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                selectedScenario === 'rame'
                  ? 'bg-amber-400 text-red-950 shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Skenario Optimis (Rame)
            </button>
          </div>

          {/* Income Statement Table format (Laporan Laba Rugi) */}
          <div className="p-5 rounded-3xl bg-black/40 border border-white/15 backdrop-blur-md space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div>
                <h4 className="text-base font-black text-white">{currentScenario.name}</h4>
                <p className="text-xs text-red-100/80">{currentScenario.description}</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-amber-300 font-bold uppercase block">Asumsi Penjualan Harian</span>
                <span className="text-sm font-black text-white">
                  {currentScenario.tc} Trx x Rp {currentScenario.avgBill.toLocaleString('id-ID')} / Bill
                </span>
              </div>
            </div>

            {/* Income Statement Detailed Table */}
            <div className="space-y-2 text-xs">
              
              {/* Gross Sales */}
              <div className="flex justify-between p-2.5 rounded-xl bg-white/5 font-bold text-white">
                <span>Penjualan Kotor (Gross Sales Bulanan):</span>
                <span className="text-amber-300 text-sm">Rp {currentScenario.grossSales.toLocaleString('id-ID')}</span>
              </div>

              {/* COGS */}
              <div className="flex justify-between px-3 py-1.5 text-slate-300 border-b border-white/5">
                <span>HPP / COGS (Bahan Baku ~{currentScenario.cogsPercent}%):</span>
                <span className="text-red-300">- Rp {currentScenario.cogsAmount.toLocaleString('id-ID')}</span>
              </div>

              {/* Gross Profit */}
              <div className="flex justify-between px-3 py-2 font-black text-emerald-400 bg-emerald-500/10 rounded-lg">
                <span>Laba Kotor Store (Gross Profit):</span>
                <span>Rp {currentScenario.grossProfit.toLocaleString('id-ID')}</span>
              </div>

              {/* Operational Expenses */}
              <div className="flex justify-between px-3 py-1.5 text-slate-300">
                <span>Beban SDM / Gaji Karyawan & Utilitas Store:</span>
                <span className="text-red-300">- Rp {currentScenario.opsSdm.toLocaleString('id-ID')}</span>
              </div>

              <div className="flex justify-between px-3 py-1.5 text-slate-300 border-b border-white/5">
                <span>Beban Marketing, Administrasi & Pemeliharaan:</span>
                <span className="text-red-300">- Rp {currentScenario.marketingAdmin.toLocaleString('id-ID')}</span>
              </div>

              {/* Store Net Profit */}
              <div className="flex justify-between p-3 rounded-xl bg-amber-400/20 border border-amber-400/40 text-white font-black">
                <span>Keuntungan Bersih Outlet (Store Net Profit - {currentScenario.netMarginPercent}%):</span>
                <span className="text-amber-300 text-base">Rp {currentScenario.netProfit.toLocaleString('id-ID')}</span>
              </div>

              {/* Profit Split Highlight */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-500/40 text-center">
                  <span className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-wider">Bagi Hasil Mitra (50%)</span>
                  <div className="text-xl font-black text-emerald-400 mt-0.5">
                    Rp {currentScenario.mitraShare.toLocaleString('id-ID')} / Bln
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-gradient-to-r from-sky-950/80 to-slate-900 border border-sky-500/40 text-center">
                  <span className="text-[10px] text-sky-400 font-extrabold uppercase tracking-wider">Pengelola HQ Sabuba (50%)</span>
                  <div className="text-xl font-black text-sky-400 mt-0.5">
                    Rp {currentScenario.hqShare.toLocaleString('id-ID')} / Bln
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 4: Franchise Model Roadmap & Matrix
    // ----------------------------------------------------
    {
      id: 'models-roadmap',
      title: 'Pilihan Model Kemitraan Sabuba',
      subtitle: 'Sabuba Classic Beroperasi & Tersedia Sekarang! Model Lain Segera Hadir.',
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Model 1: Sabuba Classic (AVAILABLE NOW) */}
            <div className="p-5 rounded-3xl bg-gradient-to-b from-amber-950/90 via-black/80 to-black border-2 border-amber-400 relative flex flex-col justify-between shadow-xl">
              <div className="absolute -top-3 right-3 px-3 py-1 bg-amber-400 text-red-950 font-black text-[10px] uppercase rounded-full shadow">
                OPEN NOW
              </div>
              <div>
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">Street Food Motor Custom</div>
                <h4 className="text-xl font-black text-white mt-1">Sabuba Classic</h4>
                <div className="text-2xl font-black text-amber-400 mt-2">Rp 100 Juta</div>
                <p className="text-xs text-red-100/90 mt-2 leading-relaxed">
                  Unit motor tiga roda custom fleksibel. Hemat sewa lokasi, mobilitas tinggi, siap jualan dalam hitungan menit.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-400/20 text-xs font-bold text-emerald-400">
                ✓ Bagi Hasil 50:50 Mitra Pasif
              </div>
            </div>

            {/* Model 2: Sabuba Container (SOON) */}
            <div className="p-5 rounded-3xl bg-black/40 border border-white/10 opacity-70 relative flex flex-col justify-between">
              <div className="absolute -top-3 right-3 px-3 py-1 bg-white/10 text-slate-400 font-bold text-[10px] uppercase rounded-full">
                SOON
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Semi-Permanent Hub</div>
                <h4 className="text-xl font-black text-slate-300 mt-1">Sabuba Container</h4>
                <div className="text-xl font-bold text-slate-400 mt-2">Coming Soon</div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Konsep container booth modern untuk lokasi strategis seperti SPBU, minimarket, & pelataran gedung.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-xs font-semibold text-slate-500">
                ⏳ Dalam Tahap Persiapan
              </div>
            </div>

            {/* Model 3: Sabuba Resto (SOON) */}
            <div className="p-5 rounded-3xl bg-black/40 border border-white/10 opacity-70 relative flex flex-col justify-between">
              <div className="absolute -top-3 right-3 px-3 py-1 bg-white/10 text-slate-400 font-bold text-[10px] uppercase rounded-full">
                SOON
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Dine-in Fast Casual</div>
                <h4 className="text-xl font-black text-slate-300 mt-1">Sabuba Resto</h4>
                <div className="text-xl font-bold text-slate-400 mt-2">Coming Soon</div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Format outlet ruko dengan tempat duduk ber-AC & area outdoor modern untuk pengalaman dine-in keluarga.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-xs font-semibold text-slate-500">
                ⏳ Dalam Tahap Persiapan
              </div>
            </div>

            {/* Model 4: Sabuba Express Mall (SOON) */}
            <div className="p-5 rounded-3xl bg-black/40 border border-white/10 opacity-70 relative flex flex-col justify-between">
              <div className="absolute -top-3 right-3 px-3 py-1 bg-white/10 text-slate-400 font-bold text-[10px] uppercase rounded-full">
                SOON
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Island Kiosk Mall</div>
                <h4 className="text-xl font-black text-slate-300 mt-1">Sabuba Express</h4>
                <div className="text-xl font-bold text-slate-400 mt-2">Coming Soon</div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Format booth island eksklusif untuk food court pusat perbelanjaan & tempat keramaian indoor.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-xs font-semibold text-slate-500">
                ⏳ Dalam Tahap Persiapan
              </div>
            </div>

          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 5: Tech Ecosystem (AI Chatbot & Real-Time POS Cloud)
    // ----------------------------------------------------
    {
      id: 'tech-stack',
      title: 'Teknologi AI POS & Transparansi 24/7',
      subtitle: 'Sistem Cloud Kasir Online, AI Assistant Report, & Akses Real-Time HP',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-3xl bg-black/40 border border-sky-500/30 backdrop-blur-md">
              <div className="w-10 h-10 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-3">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-white">POS Online Real-Time</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Setiap transaksi kasir di lapangan langsung tercatat di Cloud Database. Mitra memantau omset harian, porsi terjual, & metode bayar (QRIS/Cash).
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-black/40 border border-amber-500/30 backdrop-blur-md">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Bot className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-white">AI Assistant Report Bot</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Integrasi AI Chatbot untuk laporan otomatis harian via WhatsApp/App, rekomendasi spot jualan teramai, serta analisis prediksi stok bahan baku.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-black/40 border border-emerald-500/30 backdrop-blur-md">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-white">Auto Export & Audit PDF</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Laporan keuangan bulanan dapat di-export instan ke format PDF / Excel secara otomatis untuk transparansi pembagian hasil mitra 100%.
              </p>
            </div>
          </div>

          {/* Interactive POS Simulation Preview */}
          <div className="p-5 rounded-3xl bg-black/60 border border-white/15">
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Live POS Cloud Sync Feed</span>
              </div>
              <span className="text-[10px] text-slate-400">Status: Online Syncing</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Penjualan Hari Ini</div>
                <div className="text-lg font-black text-amber-400 mt-0.5">Rp 2.800.000</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Total Transaksi</div>
                <div className="text-lg font-black text-white mt-0.5">80 Trx</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Est. Net Profit (40%)</div>
                <div className="text-lg font-black text-emerald-400 mt-0.5">Rp 1.124.000</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Hak Bagi Hasil Mitra (50%)</div>
                <div className="text-lg font-black text-sky-400 mt-0.5">Rp 562.000</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 6: Media Preview Showcase (Video Link & iPad Frame)
    // ----------------------------------------------------
    {
      id: 'media-preview',
      title: 'Media & Operational Video Showcase',
      subtitle: 'Lihat Klip Operasional Outlet, Motor Custom, & Liputan Media',
      content: (
        <div className="space-y-4">
          <div className="bg-black/40 p-6 rounded-3xl border border-white/15 backdrop-blur-md space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-extrabold text-white">Video Player Showcase Frame</h4>
                <p className="text-xs text-slate-300">Video operasional & custom motor Sabuba Classic</p>
              </div>
              <span className="px-3 py-1 bg-amber-400/20 text-amber-300 font-extrabold text-xs rounded-full border border-amber-400/30">
                Video Preview Ready
              </span>
            </div>

            <div className="relative aspect-video rounded-2xl bg-black overflow-hidden border border-white/20 flex items-center justify-center group shadow-2xl">
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
                    alt="Sabuba Video Preview"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-center p-6 text-center text-white">
                    <div className="w-16 h-16 rounded-full bg-amber-400 text-red-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer mb-3">
                      <Play className="w-8 h-8 fill-red-950 ml-1" />
                    </div>
                    <h4 className="text-lg font-black">Video Operasional & Motor Custom Sabuba</h4>
                    <p className="text-xs text-slate-300 max-w-md mt-1">
                      Siap dihubungkan dengan link video YouTube/MP4 perakitan motor custom & outlet.
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
                className="flex-1 bg-black/60 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
              {customVideoUrl && (
                <button
                  onClick={() => setCustomVideoUrl('')}
                  className="px-3 py-2 bg-white/10 hover:bg-white/20 text-xs font-bold text-white rounded-xl"
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
    // Slide 7: Investment Summary, Contact CTA, & Mandatory Disclaimer
    // ----------------------------------------------------
    {
      id: 'cta-investment',
      title: 'Bergabung Menjadi Mitra Strategis Sabuba',
      subtitle: 'Slot Kemitraan Terbatas untuk Pengembangan Outlet Sabuba Classic 2026',
      content: (
        <div className="flex flex-col h-full justify-between space-y-5">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-red-950 via-black/80 to-amber-950 border border-amber-400/40 text-center space-y-4 shadow-2xl">
            <span className="px-3.5 py-1.5 rounded-full bg-amber-400 text-red-950 font-black text-xs uppercase tracking-wider">
              Kesempatan Emas 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Mulai Kemitraan Pasif Sabuba Classic Hari Ini
            </h2>
            <p className="text-red-100/90 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Miliki unit usaha makanan cepat saji Sabuba Classic dengan skema Mitra Pasif 50:50. Seluruh operasional harian dikelola terpusat oleh tim profesional HQ.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-3 text-xs font-bold text-white">
              <span className="flex items-center gap-1.5 bg-black/40 px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Modal Investasi Rp 100 Juta
              </span>
              <span className="flex items-center gap-1.5 bg-black/40 px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Bagi Hasil 50% Mitra Pasif
              </span>
              <span className="flex items-center gap-1.5 bg-black/40 px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> POS Cloud Transparan 24/7
              </span>
            </div>
          </div>

          {/* Mandatory Disclaimer Box */}
          <div className="p-3.5 rounded-2xl bg-black/50 border border-amber-400/30 text-[11px] text-amber-200/90 leading-relaxed flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 font-extrabold">DISCLAIMER KEMITRAAN:</strong> Setiap lokasi outlet memiliki karakteristik pasar, tingkat keramaian, serta biaya operasional lokal yang berbeda-beda. Data historis & simulasi proyeksi keuangan di atas disajikan sebagai bahan estimasi dan bukan merupakan jaminan BEP atau kepastian hasil di masa depan.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1">
            <a
              href={`https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=Halo%20Tim%20Sabuba,%20saya%20sudah%20membaca%20Proposal%20Kemitraan%20Rp%20100Jt%20(Mitra%20Pasif%2050:50).%20Saya%20tertarik%20untuk%20diskusi%20lebih%20lanjut.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-red-950 font-black text-sm shadow-2xl transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Konsultasi Kemitraan via WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-red-950" />
            </a>

            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-black/40 hover:bg-black/60 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Download className="w-4 h-4 text-amber-300" />
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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-2 sm:p-4 md:p-6 overflow-y-auto">
        
        {/* Fullscreen Sabuba Crimson Red Presentation Deck Container */}
        <motion.div
          id="proposal-pitch-deck"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className={`w-full max-w-6xl bg-gradient-to-br from-[#2D0606] via-[#4A0B0B] to-[#1F0404] text-white rounded-3xl border border-white/15 shadow-2xl overflow-hidden flex flex-col justify-between ${
            isFullscreen ? 'fixed inset-2 z-50 max-w-none rounded-none' : 'max-h-[92vh]'
          }`}
        >

          {/* Top Bar Header with Logo on Top-Right */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-2xl bg-amber-400 text-red-950 flex items-center justify-center font-black text-xs shadow-md">
                SBB
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-white tracking-wide">
                  Sabuba Pitch Deck & Proposal Kemitraan
                </h3>
                <p className="text-[11px] text-red-200/80">
                  Slide {currentSlide + 1} dari {slides.length}: <span className="text-amber-300 font-bold">{currentSlideObj.title}</span>
                </p>
              </div>
            </div>

            {/* Right Header: Sabuba Official Logo + Controls */}
            <div className="flex items-center gap-3">
              {/* Sabuba Logo rendered on Top-Right of every slide */}
              <div className="hidden sm:block">
                <SabubaLogo className="h-8" variant="light" />
              </div>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 transition-colors hidden sm:flex"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => window.print()}
                className="px-3.5 py-1.5 rounded-xl bg-amber-400 text-red-950 text-xs font-black flex items-center gap-1.5 shadow-sm transition-colors"
                title="Download / Print PDF"
              >
                <Download className="w-3.5 h-3.5 text-red-950" />
                <span className="hidden sm:inline">Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-red-900/80 text-slate-300 hover:text-white transition-colors ml-1"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Slide Content Area */}
          <div className="p-4 sm:p-8 flex-1 overflow-y-auto min-h-[440px] flex flex-col justify-between">
            <div className="mb-4">
              <div className="text-xs font-black text-amber-300 uppercase tracking-widest mb-1">
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

          {/* Bottom Controls Bar */}
          <div className="p-4 border-t border-white/10 bg-black/40 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            
            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentSlide
                      ? 'w-8 bg-amber-400'
                      : 'w-2.5 bg-white/20 hover:bg-white/40'
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
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:pointer-events-none text-white text-xs font-bold flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <span className="text-xs font-extrabold text-red-200">
                {currentSlide + 1} / {slides.length}
              </span>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:pointer-events-none text-red-950 text-xs font-black flex items-center gap-1 transition-colors shadow-lg"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4 text-red-950" />
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
