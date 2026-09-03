import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ChevronLeft, ChevronRight, Download, Share2, Sparkles, TrendingUp,
  DollarSign, ShieldCheck, Cpu, Smartphone, BarChart3, PieChart, Layers,
  Award, Play, CheckCircle2, ArrowRight, RefreshCw, Bot, Check, Maximize2,
  Minimize2, ExternalLink, Calendar, Building2, Zap, Flame, Star, Utensils,
  AlertTriangle, HelpCircle, FileText, Bike
} from 'lucide-react';
import SabubaLogo from './SabubaLogo';
import { SABUBA_DATA, formatRupiah } from '../data/sabubaData';

export default function PitchDeckModal({ isOpen, onClose, defaultSlide = 0 }) {
  const [currentSlide, setCurrentSlide] = useState(defaultSlide);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [customVideoUrl, setCustomVideoUrl] = useState('');

  // Historical Screenshots Real Financial Data (Jan to Aug 2026)
  const realPosData = [
    { period: 'Jan 2026', omset: 32176000, profit: 16382000, margin: 50.9 },
    { period: 'Feb-Mar 2026', omset: 37027000, profit: 19181000, margin: 51.8 },
    { period: 'Apr 2026', omset: 51879000, profit: 28039500, margin: 54.0 },
    { period: 'Mei 2026', omset: 71680000, profit: 38623500, margin: 53.8 },
    { period: 'Jun 2026', omset: 66792000, profit: 36617000, margin: 54.8 },
    { period: 'Agu 2026', omset: 80108009, profit: 40177509, margin: 50.1 },
  ];

  // Feasibility Study Data (Matches Zeger! Feasibility Study Format attached by user)
  const feasibilityData = {
    brand: 'Sabuba Indonesia (Sabuba Classic)',
    status: 'Partnership / Mitra Pasif (Bagi Hasil 50% : 50%)',
    lokasi: 'Sidoarjo & Jawa Timur',
    paketUsaha: 'Sabuba Classic (Motor Custom 3 Roda, Kitchen Setup, Branding, POS System)',
    capex: 100000000, // Rp 100.000.000
    scenarios: [
      {
        name: 'Rendah (50 Porsi)',
        tcDay: 50,
        tcMonth: 1500,
        apc: 20000,
        salesDay: 1000000,
        salesMonth: 30000000,
        salesYear: 360000000,
        hppPercent: 42,
        hppAmount: 12600000,
        grossProfitPercent: 58,
        grossProfitAmount: 17400000,
        opsKaryawan: 3000000,
        opsRumahTangga: 450000,
        opsListrikAirFuel: 450000,
        totalOpsAmount: 3900000,
        totalOpsPercent: 13,
        ebitdaNetProfitStore: 13500000,
        ebitdaPercent: 45,
        mitraShare50: 6750000,
        paybackMonths: 14.8
      },
      {
        name: 'Sedang (100 Porsi)',
        tcDay: 100,
        tcMonth: 3000,
        apc: 20000,
        salesDay: 2000000,
        salesMonth: 60000000,
        salesYear: 720000000,
        hppPercent: 42,
        hppAmount: 25200000,
        grossProfitPercent: 58,
        grossProfitAmount: 34800000,
        opsKaryawan: 5500000,
        opsRumahTangga: 900000,
        opsListrikAirFuel: 900000,
        totalOpsAmount: 7300000,
        totalOpsPercent: 12.1,
        ebitdaNetProfitStore: 27500000,
        ebitdaPercent: 45.8,
        mitraShare50: 13750000,
        paybackMonths: 7.2
      },
      {
        name: 'Ramai (150 Porsi)',
        tcDay: 150,
        tcMonth: 4500,
        apc: 20000,
        salesDay: 3000000,
        salesMonth: 90000000,
        salesYear: 1080000000,
        hppPercent: 40,
        hppAmount: 36000000,
        grossProfitPercent: 60,
        grossProfitAmount: 54000000,
        opsKaryawan: 7500000,
        opsRumahTangga: 1350000,
        opsListrikAirFuel: 1350000,
        totalOpsAmount: 10200000,
        totalOpsPercent: 11.3,
        ebitdaNetProfitStore: 43800000,
        ebitdaPercent: 48.7,
        mitraShare50: 21900000,
        paybackMonths: 4.5
      },
      {
        name: 'Ramai Sekali (200 Porsi)',
        tcDay: 200,
        tcMonth: 6000,
        apc: 20000,
        salesDay: 4000000,
        salesMonth: 120000000,
        salesYear: 1440000000,
        hppPercent: 40,
        hppAmount: 48000000,
        grossProfitPercent: 60,
        grossProfitAmount: 72000000,
        opsKaryawan: 9500000,
        opsRumahTangga: 1800000,
        opsListrikAirFuel: 1800000,
        totalOpsAmount: 13100000,
        totalOpsPercent: 10.9,
        ebitdaNetProfitStore: 58900000,
        ebitdaPercent: 49.1,
        mitraShare50: 29450000,
        paybackMonths: 3.4
      }
    ]
  };

  // Featured Menu Items for Product Showcase
  const featuredMenu = [
    {
      name: 'Bubur (Ori) Mix (Ayam + Sapi)',
      price: 19000,
      tag: 'BEST SELLER #1',
      image: 'https://drive.google.com/thumbnail?id=15khQoPH2F0ia_gDjRNtEWjN3yjAc1LTm&sz=w800',
      cogs: '32%',
      margin: '68% Gross Margin',
    },
    {
      name: 'Bubur (Kuah Kuning) Sapi',
      price: 19000,
      tag: 'FAVORITE',
      image: 'https://drive.google.com/thumbnail?id=16KK3fHQZ8cZlWU2MMhId3wGKYFfp0572&sz=w800',
      cogs: '30%',
      margin: '70% Gross Margin',
    },
    {
      name: 'Bubur (Kuah Laksa) Mix',
      price: 19000,
      tag: 'SPICY SIGNATURE',
      image: 'https://drive.google.com/thumbnail?id=1N9PYBAox07AKVBxRgWjtaHXc3fS7Kvsb&sz=w800',
      cogs: '31%',
      margin: '69% Gross Margin',
    },
    {
      name: 'Wonton Kuah Dumpling Ayam',
      price: 13000,
      tag: 'HIGH REPEAT ORDER',
      image: 'https://drive.google.com/thumbnail?id=1LLms9wP-r2XxSGJS5fhbq-OWf9s30na7&sz=w800',
      cogs: '28%',
      margin: '72% Gross Margin',
    },
    {
      name: 'Dim Sum Siomay Ayam (4 Pcs)',
      price: 13000,
      tag: 'ADD-ON POPULER',
      image: 'https://drive.google.com/thumbnail?id=1nEAhDwYbP2d6O4I7TD8557BkjboXn8-f&sz=w800',
      cogs: '27%',
      margin: '73% Gross Margin',
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
    // Slide 1: FRONT COVER - Clean White + Dark Red Sabuba Ornaments + Big Menu Image
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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-900 font-extrabold text-xs uppercase tracking-wider shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-red-700 animate-spin" />
              <span>Investment Deck & Opportunity 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight"
            >
              SABUBA <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#991B1B] via-[#7F1D1D] to-[#450A0A]">Fast Casual Food Tech</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              Peluang kerjasama kemitraan strategis <strong className="text-red-900 font-bold">Sabuba Classic</strong>. Konsep <strong className="text-red-800 font-bold">Mitra Pasif 100%</strong> dengan <strong className="text-emerald-700 font-bold">Bagi Hasil 50% - 50%</strong>. Bebas dari kerumitan operasional harian, terpantau real-time 24/7 via sistem AI POS online.
            </motion.p>

            {/* Key Value Glass Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-3 pt-2"
            >
              <div className="p-3.5 rounded-2xl bg-white/90 border border-red-100 shadow-md backdrop-blur-md">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Investasi CAPEX</div>
                <div className="text-xl sm:text-2xl font-black text-red-900 mt-0.5">Rp 100 Jt</div>
                <div className="text-[10px] text-red-800 font-bold mt-0.5">Sabuba Classic</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/90 border border-red-100 shadow-md backdrop-blur-md">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Bagi Hasil</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-700 mt-0.5">50% : 50%</div>
                <div className="text-[10px] text-slate-600 font-semibold mt-0.5">Mitra Pasif</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/90 border border-red-100 shadow-md backdrop-blur-md">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Operasional</div>
                <div className="text-xl sm:text-2xl font-black text-amber-700 mt-0.5">100% HQ</div>
                <div className="text-[10px] text-slate-600 font-semibold mt-0.5">Hands-Off</div>
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

              {/* Gradient overlay & Floating Badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                
                {/* Floating Top Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 right-4 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg text-red-950 text-xs font-black flex items-center gap-2"
                >
                  <Flame className="w-4 h-4 text-red-700 fill-red-700" />
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
                  <p className="text-xs text-red-100 max-w-md">
                    Konsep Street Food motor tiga roda custom yang hemat overhead tanpa sewa ruko mahal & mobilitas tinggi.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 2: FEASIBILITY STUDY & FINANCE PROJECTION (MATCHES ZEGER! CANVA TEMPLATE EXACTLY)
    // ----------------------------------------------------
    {
      id: 'feasibility-study',
      title: 'Feasibility Study (Sabuba Classic)',
      subtitle: 'Analisa Keuangan & Proyeksi Laba/Rugi Kemitraan Sabuba Motor Custom',
      content: (
        <div className="space-y-3 overflow-y-auto max-h-[70vh] pr-1">
          
          {/* Header Banner - Matches Zeger Feasibility Study Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-[#991B1B] via-[#7F1D1D] to-[#450A0A] text-white shadow-md">
            <div>
              <div className="inline-block px-3 py-1 bg-amber-400 text-red-950 font-black text-[10px] uppercase rounded-full mb-1">
                FEASIBILITY STUDY (SABUBA CLASSIC)
              </div>
              <h3 className="text-xl sm:text-2xl font-black italic tracking-wide">
                Analisa Keuangan Sabuba Classic (Motor Custom)
              </h3>
            </div>
            <div className="text-right text-xs bg-black/30 px-3.5 py-2 rounded-xl border border-white/10 shrink-0">
              <div className="text-amber-300 font-extrabold text-sm">TOTAL MODAL AWAL / CAPEX</div>
              <div className="text-xl font-black text-white">Rp 100.000.000</div>
            </div>
          </div>

          {/* Upper Info Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs p-3 rounded-xl bg-red-50/70 border border-red-100 font-semibold text-slate-800">
            <div><span className="text-slate-500">Brand:</span> <strong className="text-red-900 block">Sabuba Indonesia</strong></div>
            <div><span className="text-slate-500">Status Kepemilikan:</span> <strong className="text-slate-900 block">Partnership (Mitra Pasif 50:50)</strong></div>
            <div><span className="text-slate-500">Paket Usaha:</span> <strong className="text-slate-900 block">Sabuba Classic (Motor Custom)</strong></div>
            <div><span className="text-slate-500">Biaya Kemitraan:</span> <strong className="text-red-900 block">Rp 100.000.000</strong></div>
          </div>

          {/* Detailed Financial Table - Exactly Styled like Zeger Feasibility Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white text-[11px]">
            <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-red-900 text-white text-[10px] font-black uppercase tracking-wider">
                  <th className="p-2.5 border-r border-red-800">ANALISIS PENDAPATAN</th>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <th key={i} className="p-2.5 text-center border-r border-red-800 last:border-0">
                      {sc.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 font-medium">
                <tr className="bg-slate-50">
                  <td className="p-2 font-bold text-slate-800">Jumlah Motor Custom / Outlet</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2 text-center text-slate-700 font-bold">1 Unit</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-800">TC / Day (Transaksi per Hari)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2 text-center font-bold text-slate-900">{sc.tcDay} Porsi</td>
                  ))}
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-2 font-bold text-slate-800">TC / Month (30 Hari)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2 text-center text-slate-700">{sc.tcMonth.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-800">APC (Average per Check / Rata2 Belanja)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2 text-center text-slate-700">Rp {sc.apc.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-2 font-bold text-slate-800">Sales / Hari</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2 text-center text-slate-900 font-bold">Rp {sc.salesDay.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="bg-red-50 text-red-950 font-black">
                  <td className="p-2">TOTAL REVENUE (NET SALES / BULAN)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2 text-center text-red-900 text-xs">Rp {sc.salesMonth.toLocaleString('id-ID')}</td>
                  ))}
                </tr>

                {/* HPP & Gross Profit Header */}
                <tr className="bg-red-800 text-white font-black text-[10px] uppercase">
                  <td className="p-2 border-r border-red-700">PROYEKSI LABA / RUGI BULANAN</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2 text-center border-r border-red-700 last:border-0">SIMULASI</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-2 text-slate-700">HPP / Total Biaya Bahan Baku (~40-42%)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2 text-center text-red-700">Rp {sc.hppAmount.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="bg-emerald-50 text-emerald-950 font-bold">
                  <td className="p-2 font-black">GROSS PROFIT (LABA KOTOR)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2 text-center text-emerald-800 font-black">Rp {sc.grossProfitAmount.toLocaleString('id-ID')}</td>
                  ))}
                </tr>

                {/* Biaya Operasional */}
                <tr className="bg-slate-50 font-semibold">
                  <td className="p-2 text-slate-800">Biaya Karyawan / Gaji Tim Operasional Store</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2 text-center text-slate-700">Rp {sc.opsKaryawan.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 text-slate-800">Biaya Rumah Tangga / Kebersihan</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2 text-center text-slate-700">Rp {sc.opsRumahTangga.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-2 text-slate-800">Biaya Listrik, Air & Bahan Bakar Motor</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2 text-center text-slate-700">Rp {sc.opsListrikAirFuel.toLocaleString('id-ID')}</td>
                  ))}
                </tr>
                <tr className="bg-slate-100 font-bold text-slate-900">
                  <td className="p-2">TOTAL BIAYA OPERASIONAL STORE</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2 text-center text-red-900 font-bold">Rp {sc.totalOpsAmount.toLocaleString('id-ID')}</td>
                  ))}
                </tr>

                {/* Net Profit Store */}
                <tr className="bg-amber-100 text-red-950 font-black">
                  <td className="p-2.5">STORE NET PROFIT (KEUNTUNGAN BERSIH OUTLET)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2.5 text-center text-red-900 text-xs">Rp {sc.ebitdaNetProfitStore.toLocaleString('id-ID')}</td>
                  ))}
                </tr>

                {/* Bagi Hasil Mitra 50% */}
                <tr className="bg-emerald-600 text-white font-black text-xs">
                  <td className="p-2.5">HAK BAGI HASIL MITRA PASIF (50% DARI NET PROFIT)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2.5 text-center text-amber-300 text-sm">Rp {sc.mitraShare50.toLocaleString('id-ID')} / Bln</td>
                  ))}
                </tr>

                {/* Payback Period Row */}
                <tr className="bg-slate-900 text-white font-bold">
                  <td className="p-2">Estimasi Payback Period (Berdasarkan Net Profit Mitra)</td>
                  {feasibilityData.scenarios.map((sc, i) => (
                    <td key={i} className="p-2 text-center text-amber-400 font-extrabold">~{sc.paybackMonths} Bulan</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom Note Disclaimer - Matches Zeger Canva Disclaimer */}
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-[10px] text-red-900 font-semibold leading-relaxed">
            <strong className="text-red-950">Catatan & Disclaimer Proyeksi:</strong> Bukan merupakan jaminan hitungan pasti. Perhitungan di atas hanya merupakan proyeksi/simulasi matematis berdasarkan standar operasional. Hasil dapat berbeda-beda tergantung kondisi lokasi, tingkat keramaian, & faktor pasar masing-masing outlet.
          </div>

        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 3: REAL HISTORICAL POS DATA (Jan to Aug 2026)
    // ----------------------------------------------------
    {
      id: 'real-pos-data',
      title: 'Data Historis Real Penjualan POS Outlet',
      subtitle: 'Rekam Penjualan Riil Kasir Cloud Sabuba Januari - Agustus 2026',
      content: (
        <div className="space-y-5">
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              Data bersumber langsung dari Laporan Kasir Cloud POS Sabuba saat ini.
            </span>
            <span className="px-3 py-1 bg-emerald-700 text-white rounded-full font-black text-[10px] uppercase tracking-wider">
              REAL HISTORICAL LOGS
            </span>
          </div>

          {/* Real POS Data Table / Bar Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            
            {/* Chart Bars */}
            <div className="lg:col-span-7 space-y-3 bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Grafik Penjualan & Profit Riil (Rp)</span>
                <span className="text-red-800 font-extrabold text-[11px]">Agustus 2026 Peak: Rp 80,1 Jt</span>
              </div>

              {realPosData.map((d, i) => {
                const maxOmset = 85000000;
                const widthOmset = (d.omset / maxOmset) * 100;

                return (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>{d.period}</span>
                      <span>
                        Omset: <strong className="text-slate-900">Rp {(d.omset / 1000000).toFixed(1)}M</strong> | Profit Store: <strong className="text-emerald-700">Rp {(d.profit / 1000000).toFixed(1)}M</strong>
                      </span>
                    </div>

                    <div className="h-3.5 w-full bg-slate-100 rounded-full overflow-hidden relative flex">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${widthOmset}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-red-800 via-red-600 to-emerald-600 rounded-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Real Data Highlight Cards */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-5 rounded-3xl bg-gradient-to-br from-red-900 to-red-950 text-white shadow-lg space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">Penjualan Agustus 2026 (Real POS Log)</span>
                <div className="text-3xl font-black">Rp 80.108.009</div>
                <div className="text-xs font-bold text-emerald-300">Keuntungan Bersih Store: Rp 40.177.509 (50.1%)</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed shadow-sm">
                <div className="font-bold text-red-900 mb-1 flex items-center gap-1.5">
                  <FileText className="w-4 h-4" /> Catatan Data Real:
                </div>
                Pencapaian di atas adalah bukti rekam jejak operasional outlet Sabuba yang berjalan saat ini. Data ini disajikan sebagai bukti validitas produk & daya terima pasar.
              </div>
            </div>

          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 4: 3D Funnel Market Analysis (TAM / SAM / SOM)
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

          {/* 3D Funnel Stack */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: 3D Funnel Visual Stack */}
            <div className="md:col-span-6 space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="p-5 rounded-3xl bg-gradient-to-r from-red-900 to-red-800 text-white shadow-xl relative overflow-hidden"
              >
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <span className="px-2.5 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-wider">
                      TAM (Total Addressable Market)
                    </span>
                    <h3 className="text-3xl font-black mt-1">Rp 120 Triliun</h3>
                    <p className="text-xs text-red-100 mt-1">Total konsumsi sarapan & street food harian di seluruh Indonesia</p>
                  </div>
                  <div className="text-4xl font-black opacity-20">01</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-4 rounded-3xl bg-gradient-to-r from-amber-600 to-red-700 text-white shadow-lg relative overflow-hidden ml-4"
              >
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <span className="px-2.5 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-wider">
                      SAM (Serviceable Addressable Market)
                    </span>
                    <h3 className="text-2xl font-black mt-1">Rp 15 Triliun</h3>
                    <p className="text-xs text-amber-100 mt-0.5">Komuter & pekerja di area perkotaan Tier 1 & Tier 2 Jawa & Sumatra</p>
                  </div>
                  <div className="text-3xl font-black opacity-20">02</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-4 rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-md relative overflow-hidden ml-8"
              >
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <span className="px-2.5 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-wider">
                      SOM (Serviceable Obtainable Market)
                    </span>
                    <h3 className="text-xl font-black mt-1">Rp 500 Miliar</h3>
                    <p className="text-xs text-emerald-100 mt-0.5">Target ekspansi 1,000 unit outlet Sabuba Classic dalam 3-5 tahun</p>
                  </div>
                  <div className="text-2xl font-black opacity-20">03</div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Key Market Drivers */}
            <div className="md:col-span-6 space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-800 flex items-center justify-center shrink-0 font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">Frekuensi Repeat Order Tinggi</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Konsumsi rutin 4-6 kali per minggu oleh pekerja & keluarga karena menu sarapan yang praktis & mengenyangkan.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">Efisiensi Tanpa Sewa Tempat</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Unit motor custom menekan biaya sewa tempat hingga 0%, menjaga net profit margin tetap tinggi.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 font-bold">
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
    // Slide 5: Product Showcase & Margins
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-2">
            {featuredMenu.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-3.5 rounded-3xl bg-white border border-red-100 shadow-md flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-2.5 bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-red-950/80 backdrop-blur-md text-amber-300 text-[9px] font-black uppercase">
                      {item.tag}
                    </div>
                  </div>

                  <h4 className="font-extrabold text-xs text-slate-900 line-clamp-2 leading-tight">
                    {item.name}
                  </h4>
                  <div className="text-sm font-black text-red-900 mt-1">
                    Rp {item.price.toLocaleString('id-ID')}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                  <span className="text-slate-500 font-medium">COGS: {item.cogs}</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {item.margin}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-3.5 rounded-2xl bg-red-50 border border-red-100 text-red-950 text-xs font-bold flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-red-800 shrink-0" />
              Setiap menu telah diformulasikan untuk daya saing harga pasar sarapan pagi (Rp 10.000 - 19.000).
            </span>
            <span className="text-[11px] text-red-900 font-extrabold">Volume Penjualan Harian Tinggi</span>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 6: Franchise Models Roadmap
    // ----------------------------------------------------
    {
      id: 'models-roadmap',
      title: 'Pilihan Model Kemitraan Sabuba',
      subtitle: 'Sabuba Classic Beroperasi & Tersedia Sekarang! Model Lain Segera Hadir.',
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Model 1: Sabuba Classic (AVAILABLE NOW) */}
            <div className="p-5 rounded-3xl bg-gradient-to-b from-red-950 via-red-900 to-red-950 border-2 border-amber-400 text-white relative flex flex-col justify-between shadow-xl">
              <div className="absolute -top-3 right-3 px-3 py-1 bg-amber-400 text-red-950 font-black text-[10px] uppercase rounded-full shadow">
                OPEN NOW
              </div>
              <div>
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">Street Food Motor Custom</div>
                <h4 className="text-xl font-black text-white mt-1">Sabuba Classic</h4>
                <div className="text-2xl font-black text-amber-400 mt-2">Rp 100 Juta</div>
                <p className="text-xs text-red-100 mt-2 leading-relaxed">
                  Unit motor tiga roda custom fleksibel. Hemat sewa lokasi, mobilitas tinggi, siap jualan dalam hitungan menit.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/20 text-xs font-bold text-emerald-300">
                ✓ Bagi Hasil 50:50 Mitra Pasif
              </div>
            </div>

            {/* Model 2: Sabuba Container (SOON) */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200 opacity-70 relative flex flex-col justify-between">
              <div className="absolute -top-3 right-3 px-3 py-1 bg-slate-200 text-slate-600 font-bold text-[10px] uppercase rounded-full">
                SOON
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Semi-Permanent Hub</div>
                <h4 className="text-xl font-black text-slate-800 mt-1">Sabuba Container</h4>
                <div className="text-xl font-bold text-slate-500 mt-2">Coming Soon</div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Konsep container booth modern untuk lokasi strategis seperti SPBU, minimarket, & pelataran gedung.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                ⏳ Dalam Tahap Persiapan
              </div>
            </div>

            {/* Model 3: Sabuba Resto (SOON) */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200 opacity-70 relative flex flex-col justify-between">
              <div className="absolute -top-3 right-3 px-3 py-1 bg-slate-200 text-slate-600 font-bold text-[10px] uppercase rounded-full">
                SOON
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dine-in Fast Casual</div>
                <h4 className="text-xl font-black text-slate-800 mt-1">Sabuba Resto</h4>
                <div className="text-xl font-bold text-slate-500 mt-2">Coming Soon</div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Format outlet ruko dengan tempat duduk ber-AC & area outdoor modern untuk pengalaman dine-in keluarga.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                ⏳ Dalam Tahap Persiapan
              </div>
            </div>

            {/* Model 4: Sabuba Express Mall (SOON) */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200 opacity-70 relative flex flex-col justify-between">
              <div className="absolute -top-3 right-3 px-3 py-1 bg-slate-200 text-slate-600 font-bold text-[10px] uppercase rounded-full">
                SOON
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Island Kiosk Mall</div>
                <h4 className="text-xl font-black text-slate-800 mt-1">Sabuba Express</h4>
                <div className="text-xl font-bold text-slate-500 mt-2">Coming Soon</div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Format booth island eksklusif untuk food court pusat perbelanjaan & tempat keramaian indoor.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                ⏳ Dalam Tahap Persiapan
              </div>
            </div>

          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 7: Tech Stack & AI POS Cloud
    // ----------------------------------------------------
    {
      id: 'tech-stack',
      title: 'Teknologi AI POS & Transparansi 24/7',
      subtitle: 'Sistem Cloud Kasir Online, AI Assistant Report, & Akses Real-Time HP',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-3xl bg-white border border-red-100 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-800 flex items-center justify-center mb-3">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-slate-900">POS Online Real-Time</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Setiap transaksi kasir di lapangan langsung tercatat di Cloud Database. Mitra memantau omset harian, porsi terjual, & metode bayar (QRIS/Cash).
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-red-100 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                <Bot className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-slate-900">AI Assistant Report Bot</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Integrasi AI Chatbot untuk laporan otomatis harian via WhatsApp/App, rekomendasi spot jualan teramai, serta analisis prediksi stok bahan baku.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-red-100 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-slate-900">Auto Export & Audit PDF</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Laporan keuangan bulanan dapat di-export instan ke format PDF / Excel secara otomatis untuk transparansi pembagian hasil mitra 100%.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-900 text-white border border-slate-800">
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Live POS Cloud Sync Feed</span>
              </div>
              <span className="text-[10px] text-slate-400">Status: Online Syncing</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Penjualan Hari Ini</div>
                <div className="text-lg font-black text-amber-400 mt-0.5">Rp 2.000.000</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Total Transaksi</div>
                <div className="text-lg font-black text-white mt-0.5">100 Trx</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Est. Net Profit Store</div>
                <div className="text-lg font-black text-emerald-400 mt-0.5">Rp 916.000</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Bagi Hasil Mitra (50%)</div>
                <div className="text-lg font-black text-sky-400 mt-0.5">Rp 458.000</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 8: Video Media Preview Frame
    // ----------------------------------------------------
    {
      id: 'media-preview',
      title: 'Media & Operational Video Showcase',
      subtitle: 'Lihat Klip Operasional Outlet, Motor Custom, & Liputan Media',
      content: (
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">Video Player Showcase Frame</h4>
                <p className="text-xs text-slate-500">Video operasional & custom motor Sabuba Classic</p>
              </div>
              <span className="px-3 py-1 bg-red-50 text-red-900 font-extrabold text-xs rounded-full border border-red-200">
                Video Preview Ready
              </span>
            </div>

            <div className="relative aspect-video rounded-2xl bg-slate-950 overflow-hidden border border-slate-300 flex items-center justify-center group shadow-2xl">
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
                    <div className="w-16 h-16 rounded-full bg-red-700 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer mb-3">
                      <Play className="w-8 h-8 fill-white ml-1" />
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
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-700"
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
    // Slide 9: Investment Call to Action & Disclaimer
    // ----------------------------------------------------
    {
      id: 'cta-investment',
      title: 'Bergabung Menjadi Mitra Strategis Sabuba',
      subtitle: 'Slot Kemitraan Terbatas untuk Pengembangan Outlet Sabuba Classic 2026',
      content: (
        <div className="flex flex-col h-full justify-between space-y-5">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-red-900 via-red-950 to-slate-950 text-white shadow-2xl text-center space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-amber-400 text-red-950 font-black text-xs uppercase tracking-wider">
              Peluang Kemitraan 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
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

          {/* Disclaimer Box */}
          <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-[11px] text-red-900 leading-relaxed flex items-start gap-2.5 font-semibold">
            <AlertTriangle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-red-950 font-extrabold">DISCLAIMER KEMITRAAN:</strong> Setiap lokasi outlet memiliki karakteristik pasar, tingkat keramaian, serta biaya operasional lokal yang berbeda-beda. Data historis & simulasi proyeksi keuangan di atas disajikan sebagai bahan estimasi dan bukan merupakan jaminan BEP atau kepastian hasil di masa depan.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1">
            <a
              href={`https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=Halo%20Tim%20Sabuba,%20saya%20sudah%20membaca%20Feasibility%20Study%20%26%20Proposal%20Kemitraan%20Rp%20100Jt%20(Mitra%20Pasif%2050:50).%20Saya%20tertarik%20untuk%20diskusi%20lebih%20lanjut.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-red-800 via-red-900 to-red-950 hover:from-red-700 hover:to-red-900 text-white font-black text-sm shadow-2xl transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Konsultasi Kemitraan via WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Download className="w-4 h-4 text-red-800" />
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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xl p-2 sm:p-4 md:p-6 overflow-y-auto">
        
        {/* Fullscreen Clean White Presentation Deck with Dark Red Ornaments */}
        <motion.div
          id="proposal-pitch-deck"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className={`w-full max-w-6xl bg-gradient-to-br from-slate-50 via-white to-red-50/30 text-slate-900 rounded-3xl border border-white/80 shadow-2xl overflow-hidden flex flex-col justify-between ${
            isFullscreen ? 'fixed inset-2 z-50 max-w-none rounded-none' : 'max-h-[92vh]'
          }`}
        >

          {/* Top Bar Header with Sabuba Logo on Top Right of EVERY slide */}
          <div className="p-4 sm:p-5 border-b border-slate-200/80 flex items-center justify-between bg-white/90 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-2xl bg-red-900 text-white flex items-center justify-center font-black text-xs shadow-md">
                SBB
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-slate-900 tracking-wide">
                  Sabuba Proposal Kemitraan 2026
                </h3>
                <p className="text-[11px] text-slate-500 font-semibold">
                  Slide {currentSlide + 1} dari {slides.length}: <span className="text-red-900 font-bold">{currentSlideObj.title}</span>
                </p>
              </div>
            </div>

            {/* Right Header: Sabuba Official Logo + Controls */}
            <div className="flex items-center gap-3">
              {/* Sabuba Logo rendered on Top-Right of every slide */}
              <div className="hidden sm:block">
                <SabubaLogo className="h-8" variant="dark" />
              </div>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors hidden sm:flex"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => window.print()}
                className="px-3.5 py-1.5 rounded-xl bg-red-900 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                title="Download / Print PDF"
              >
                <Download className="w-3.5 h-3.5 text-white" />
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
          <div className="p-4 sm:p-7 flex-1 overflow-y-auto min-h-[440px] flex flex-col justify-between">
            <div className="mb-3">
              <div className="text-xs font-black text-red-800 uppercase tracking-widest mb-0.5">
                {currentSlideObj.subtitle}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {currentSlideObj.title}
              </h2>
            </div>

            <div className="flex-1 my-1">
              {currentSlideObj.content}
            </div>
          </div>

          {/* Bottom Controls Bar */}
          <div className="p-4 border-t border-slate-200/80 bg-white/90 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            
            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentSlide
                      ? 'w-8 bg-red-900'
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
                className="px-4 py-2 rounded-xl bg-red-900 hover:bg-red-800 disabled:opacity-40 disabled:pointer-events-none text-white text-xs font-extrabold flex items-center gap-1 transition-colors shadow-md"
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
