import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ChevronLeft, ChevronRight, Download, Share2, Sparkles, TrendingUp,
  DollarSign, ShieldCheck, Cpu, Smartphone, BarChart3, PieChart, Layers,
  Award, Play, CheckCircle2, ArrowRight, RefreshCw, Maximize2,
  Minimize2, ExternalLink, Calendar, Building2, Zap, Flame, Star, Utensils,
  AlertTriangle, HelpCircle, FileText, Bike, Heart, Users, MapPin, Store,
  Clock, Target, Shield, CheckCircle, Info
} from 'lucide-react';
import SabubaLogo from './SabubaLogo';
import { SABUBA_DATA, formatRupiah } from '../data/sabubaData';

// ----------------------------------------------------
// Reusable Visual Classification Tag (Data Taxonomy)
// ----------------------------------------------------
function DataBadge({ type, text }) {
  let badgeStyle = "bg-slate-100 text-slate-700 border-slate-300";
  let label = text || type;

  switch (type) {
    case 'ACTUAL':
      badgeStyle = "bg-emerald-500/10 text-emerald-700 border-emerald-300/60";
      label = text || "ACTUAL POS DATA";
      break;
    case 'ASSUMPTION':
      badgeStyle = "bg-sky-500/10 text-sky-700 border-sky-300/60";
      label = text || "ASSUMPTION";
      break;
    case 'TARGET':
      badgeStyle = "bg-amber-500/10 text-amber-700 border-amber-300/60";
      label = text || "TARGET OPERASIONAL";
      break;
    case 'FORECAST':
      badgeStyle = "bg-purple-500/10 text-purple-700 border-purple-300/60";
      label = text || "PROYEKSI / FORECAST";
      break;
    case 'VERIFY':
    case 'DATA_NEEDED':
      badgeStyle = "bg-rose-500/10 text-rose-700 border-rose-300/60 font-semibold";
      label = text || "DATA NEEDED — VERIFY BEFORE PUBLICATION";
      break;
    case 'CONCEPT':
    case 'FUTURE':
      badgeStyle = "bg-teal-500/10 text-teal-700 border-teal-300/60 font-semibold";
      label = text || "FUTURE / CONCEPT VISUALIZATION";
      break;
    default:
      break;
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold uppercase tracking-wider shadow-2xs backdrop-blur-md ${badgeStyle}`}>
      <Info className="w-3 h-3 shrink-0" />
      <span>{label}</span>
    </span>
  );
}

export default function PitchDeckModal({ isOpen, onClose, defaultSlide = 0 }) {
  const [currentSlide, setCurrentSlide] = useState(defaultSlide);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(1); // Default: 100 Cups (Sedang)

  // 4 Unit Economics Scenarios (Slide 13)
  const financialScenarios = [
    {
      name: 'Konservatif',
      cupsDay: 50,
      apc: 20000,
      salesDay: 1000000,
      salesMonth: 30000000,
      cogsPercent: 40,
      cogsAmount: 12000000,
      grossProfit: 18000000,
      opexAmount: 4500000,
      storeNetProfit: 13500000,
      partnerShare50: 6750000,
      paybackMonths: '14.8 bln'
    },
    {
      name: 'Moderat (Target Baseline)',
      cupsDay: 100,
      apc: 20000,
      salesDay: 2000000,
      salesMonth: 60000000,
      cogsPercent: 40,
      cogsAmount: 24000000,
      grossProfit: 36000000,
      opexAmount: 9000000,
      storeNetProfit: 27000000,
      partnerShare50: 13500000,
      paybackMonths: '7.4 bln'
    },
    {
      name: 'Optimis',
      cupsDay: 150,
      apc: 20000,
      salesDay: 3000000,
      salesMonth: 90000000,
      cogsPercent: 40,
      cogsAmount: 36000000,
      grossProfit: 54000000,
      opexAmount: 13500000,
      storeNetProfit: 40500000,
      partnerShare50: 20250000,
      paybackMonths: '4.9 bln'
    },
    {
      name: 'High Performance',
      cupsDay: 200,
      apc: 20000,
      salesDay: 4000000,
      salesMonth: 120000000,
      cogsPercent: 40,
      cogsAmount: 48000000,
      grossProfit: 72000000,
      opexAmount: 18000000,
      storeNetProfit: 54000000,
      partnerShare50: 27000000,
      paybackMonths: '3.7 bln'
    }
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

  // ----------------------------------------------------
  // STORYBOARD 17 SLIDES (Master Hybrid Structure)
  // ----------------------------------------------------
  const slides = [
    // ----------------------------------------------------
    // Slide 01: COVER
    // ----------------------------------------------------
    {
      id: 'slide-01-cover',
      title: 'SABUBA — Indonesia\'s Modern Breakfast & Comfort Food Brand',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <DataBadge type="ACTUAL" text="HYBRID PROPOSAL 2026" />
              <DataBadge type="ACTUAL" text="SABUBA CLASSIC ENTRY FORMAT" />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tight"
            >
              SABUBA <span className="text-red-700">Modern Indonesian</span> Breakfast & Comfort Food
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg leading-relaxed max-w-xl font-medium"
            >
              Born from Bubur Bakar Claypot. Built for Indonesian families. Designed to scale across the nation.
            </motion.p>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300/70 text-amber-900 font-extrabold text-sm flex items-center gap-3">
              <Flame className="w-5 h-5 text-amber-600 shrink-0" />
              <span>CORE STRATEGY: <em>"The motor is the entry point, NOT the destination."</em></span>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md">
                <div className="text-[11px] font-bold text-slate-500 uppercase">CAPEX Usaha</div>
                <div className="text-2xl font-black text-slate-900 mt-1">Rp 100 Jt</div>
                <DataBadge type="ACTUAL" text="Rp 100M Fixed" />
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md">
                <div className="text-[11px] font-bold text-slate-500 uppercase">Bagi Hasil</div>
                <div className="text-2xl font-black text-slate-900 mt-1">50% : 50%</div>
                <DataBadge type="ACTUAL" text="Mitra Pasif" />
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md">
                <div className="text-[11px] font-bold text-slate-500 uppercase">Operasional</div>
                <div className="text-2xl font-black text-slate-900 mt-1">100% HQ</div>
                <DataBadge type="ACTUAL" text="Hands-Off" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="https://drive.google.com/thumbnail?id=15khQoPH2F0ia_gDjRNtEWjN3yjAc1LTm&sz=w800"
                alt="Bubur Bakar Claypot Sabuba Signature"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-6 text-white">
                <DataBadge type="ACTUAL" text="HERO PRODUCT: BUBUR BAKAR CLAYPOT" />
                <h3 className="text-2xl font-extrabold mt-2">Signature Warm Claypot Experience</h3>
                <p className="text-xs text-slate-200 mt-1">Sensasi bubur panas beraroma khas claypot, topping kaya rasa, & pelayanan cepat di bawah 3 menit.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 02: EVERY MORNING, INDONESIA EATS
    // ----------------------------------------------------
    {
      id: 'slide-02-every-morning',
      title: 'EVERY MORNING, INDONESIA EATS',
      content: (
        <div className="space-y-6 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <DataBadge type="ASSUMPTION" text="HABITUAL DAILY MARKET DEMAND" />
          </div>

          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              Sarapan Bukan Tren. <br />
              <span className="text-red-700">Sarapan Adalah Kebiasaan Harian.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              Setiap pagi, jutaan keluarga Indonesia, pekerja kantor, pelajar, dan komuter membutuhkan makanan hangat, praktis, lezat, bernutrisi, dan terjangkau yang siap saji.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3 hover:border-red-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center font-bold text-xl">01</div>
              <h3 className="text-xl font-bold text-slate-900">Keluarga & Anak-Anak</h3>
              <p className="text-sm text-slate-600">Sarapan bernutrisi, aman, 100% Halal, & disukai seluruh anggota keluarga.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3 hover:border-red-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xl">02</div>
              <h3 className="text-xl font-bold text-slate-900">Pekerja &amp; Komuter Pagi</h3>
              <p className="text-sm text-slate-600">Pelayanan super cepat (&lt; 3 menit) untuk orang beraktivitas tinggi di jam 06:00 - 09:00 WIB.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3 hover:border-red-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xl">03</div>
              <h3 className="text-xl font-bold text-slate-900">Konsistensi Harian</h3>
              <p className="text-sm text-slate-600">Bukan makanan musiman. Memiliki frekuensi pembelian ulang (repeat order) yang sangat tinggi.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 text-white flex items-center justify-between shadow-lg">
            <span className="font-extrabold text-sm sm:text-base">THE OPPORTUNITY STARTS EVERY SINGLE MORNING.</span>
            <span className="text-xs bg-red-700 px-3 py-1.5 rounded-full font-bold">100% Habitual Market</span>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 03: THE PROBLEM
    // ----------------------------------------------------
    {
      id: 'slide-03-problem',
      title: 'THE PROBLEM',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          <div className="lg:col-span-5 space-y-5">
            <DataBadge type="VERIFY" text="INDUSTRY SCALABILITY BOTTLENECK" />
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              Indonesia Has Great Food. <br />
              <span className="text-red-700">But Great Food Is Hard To Scale.</span>
            </h2>
            <p className="text-slate-600 text-base font-medium leading-relaxed">
              Bisnis makanan tradisional Indonesia memiliki permintaan (demand) yang sangat besar, tetapi sering gagal berkembang saat membuka cabang baru.
            </p>
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 font-extrabold text-sm">
              "The problem is NOT demand. The problem is SCALABILITY."
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h4 className="font-extrabold text-slate-900 text-base">Ketergantungan Pada Lokasi</h4>
              <p className="text-xs text-slate-600">Sewa ruko permanen yang mahal memperlambat ROI & mengunci fleksibilitas usaha.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h4 className="font-extrabold text-slate-900 text-base">Ketergantungan Koki & SDM</h4>
              <p className="text-xs text-slate-600">Rasa berubah ketika koki berganti karena resep tidak terstandarisasi dengan ketat.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h4 className="font-extrabold text-slate-900 text-base">Supply Chain Berkelanjutan</h4>
              <p className="text-xs text-slate-600">Kesulitan menjaga pasokan bahan baku segar dan berkualitas di banyak lokasi sekaligus.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h4 className="font-extrabold text-slate-900 text-base">Operasional Rumit</h4>
              <p className="text-xs text-slate-600">Manajemen outlet manual membuat pemilik usaha kewalahan saat unit bertambah.</p>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 04: THE OPPORTUNITY
    // ----------------------------------------------------
    {
      id: 'slide-04-opportunity',
      title: 'THE OPPORTUNITY',
      content: (
        <div className="space-y-6 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <DataBadge type="TARGET" text="STRATEGIC MARKET POSITIONING" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight max-w-3xl">
            Turn a Daily Habit into a <span className="text-red-700">Scalable Food Brand.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-3xl bg-slate-100 border border-slate-300 space-y-3 opacity-80">
              <span className="text-xs font-bold text-slate-500 uppercase">Format Tradisional</span>
              <h3 className="text-lg font-bold text-slate-800">Traditional Street Food</h3>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Murah & Merakyat</li>
                <li>• Resep tidak terstandar</li>
                <li>• Manajemen manual & acak</li>
                <li>• Sulit di-scale</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-red-700 text-white space-y-3 shadow-2xl ring-4 ring-red-100 transform scale-105 z-10">
              <span className="text-xs font-bold text-amber-300 uppercase">Posisi Sabuba</span>
              <h3 className="text-xl font-black">SABUBA SYSTEM</h3>
              <ul className="text-xs text-red-100 space-y-2 font-medium">
                <li>✓ Signature Product Claypot</li>
                <li>✓ Central Kitchen Production</li>
                <li>✓ Standardized SOP & Fast Service</li>
                <li>✓ Replicable Unit Economics</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-slate-100 border border-slate-300 space-y-3 opacity-80">
              <span className="text-xs font-bold text-slate-500 uppercase">Format Korporat</span>
              <h3 className="text-lg font-bold text-slate-800">Modern Chain F&B</h3>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Standar & Sistem Baik</li>
                <li>• CAPEX sangat tinggi (&gt;Rp 1M)</li>
                <li>• Harga kurang terjangkau</li>
                <li>• Lambat melakukan ekspansi</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 05: SIGNATURE PRODUCT
    // ----------------------------------------------------
    {
      id: 'slide-05-signature-product',
      title: 'SIGNATURE PRODUCT',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          <div className="lg:col-span-5 space-y-5">
            <DataBadge type="ACTUAL" text="PRODUCT CATALOGUE & MENU" />
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              Bubur Bakar <span className="text-red-700">Claypot</span>
            </h2>
            <p className="text-slate-600 text-base font-medium leading-relaxed">
              Bukan sekadar bubur biasa. Sabuba menyajikan aroma harum panggang claypot hangat dengan pilihan kuah khas (Laksa, Semur, Ori, Kuning) serta aneka topping pilihan.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                🔥 Hot Claypot Served
              </div>
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold">
                ⏱️ &lt; 3 Min Turnaround
              </div>
              <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-900 text-xs font-bold">
                🥟 Wonton & Dim Sum Add-ons
              </div>
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 text-sky-900 text-xs font-bold">
                ☕ Kopi Hitam Nusantara
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <img src="https://drive.google.com/thumbnail?id=15khQoPH2F0ia_gDjRNtEWjN3yjAc1LTm&sz=w800" alt="Bubur Ori Mix" className="w-full h-28 object-cover rounded-xl" />
              <div className="font-black text-xs text-slate-900">Bubur (Ori) Mix</div>
              <div className="text-xs text-red-700 font-extrabold">Rp 19.000</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <img src="https://drive.google.com/thumbnail?id=1N9PYBAox07AKVBxRgWjtaHXc3fS7Kvsb&sz=w800" alt="Bubur Kuah Laksa" className="w-full h-28 object-cover rounded-xl" />
              <div className="font-black text-xs text-slate-900">Bubur Kuah Laksa</div>
              <div className="text-xs text-red-700 font-extrabold">Rp 19.000</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <img src="https://drive.google.com/thumbnail?id=17QZFlxABkyCLmm27GfKNKut5Xbm4vXTB&sz=w800" alt="Bubur Kuah Semur" className="w-full h-28 object-cover rounded-xl" />
              <div className="font-black text-xs text-slate-900">Kuah Semur + Telur</div>
              <div className="text-xs text-red-700 font-extrabold">Rp 18.000</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <img src="https://drive.google.com/thumbnail?id=1LLms9wP-r2XxSGJS5fhbq-OWf9s30na7&sz=w800" alt="Wonton Kuah" className="w-full h-28 object-cover rounded-xl" />
              <div className="font-black text-xs text-slate-900">Wonton Kuah Ayam</div>
              <div className="text-xs text-red-700 font-extrabold">Rp 13.000</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <img src="https://drive.google.com/thumbnail?id=1nEAhDwYbP2d6O4I7TD8557BkjboXn8-f&sz=w800" alt="Dim Sum Siomay" className="w-full h-28 object-cover rounded-xl" />
              <div className="font-black text-xs text-slate-900">Dim Sum Siomay (4pcs)</div>
              <div className="text-xs text-red-700 font-extrabold">Rp 13.000</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <img src="https://drive.google.com/thumbnail?id=1mPkZsPOo0_r9Bh-wdzSRyKyBFnJi66pR&sz=w800" alt="Kopi Nusantara" className="w-full h-28 object-cover rounded-xl" />
              <div className="font-black text-xs text-slate-900">Kopi Hitam Nusantara</div>
              <div className="text-xs text-red-700 font-extrabold">Rp 8.000</div>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 06: SABUBA IS A SYSTEM
    // ----------------------------------------------------
    {
      id: 'slide-06-system',
      title: 'SABUBA IS A SYSTEM',
      content: (
        <div className="space-y-6 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <DataBadge type="ACTUAL" text="OPERATIONAL SYSTEM ARCHITECTURE" />
          </div>

          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              We Don't Just Replicate Outlets. <br />
              <span className="text-red-700">We Replicate A System.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Kunci keberhasilan scale-up Sabuba adalah standarisasi seluruh rantai pasok dan operasional dari hilir ke hulu.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 mx-auto flex items-center justify-center font-bold text-xs">1</div>
              <div className="font-extrabold text-xs text-slate-900">Central Kitchen</div>
              <div className="text-[10px] text-slate-500">Pembuatan bumbu & kuah terpusat.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 mx-auto flex items-center justify-center font-bold text-xs">2</div>
              <div className="font-extrabold text-xs text-slate-900">Supply Chain</div>
              <div className="text-[10px] text-slate-500">Distribusi vacuum terstandar.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 mx-auto flex items-center justify-center font-bold text-xs">3</div>
              <div className="font-extrabold text-xs text-slate-900">Unit Sabuba</div>
              <div className="text-[10px] text-slate-500">Penyajian cepat di lokasi.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 mx-auto flex items-center justify-center font-bold text-xs">4</div>
              <div className="font-extrabold text-xs text-slate-900">SOP Pelatihan</div>
              <div className="text-[10px] text-slate-500">Crew terlatih tanpa koki khusus.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 mx-auto flex items-center justify-center font-bold text-xs">5</div>
              <div className="font-extrabold text-xs text-slate-900">POS Cloud</div>
              <div className="text-[10px] text-slate-500">Data penjualan real-time 24/7.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 mx-auto flex items-center justify-center font-bold text-xs">6</div>
              <div className="font-extrabold text-xs text-slate-900">Customer</div>
              <div className="text-[10px] text-slate-500">Pengalaman rasa konsisten.</div>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 07: SABUBA CLASSIC (ENTRY FORMAT)
    // ----------------------------------------------------
    {
      id: 'slide-07-sabuba-classic',
      title: 'THE FIRST FORMAT — SABUBA CLASSIC',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <DataBadge type="ACTUAL" text="CURRENT COMMERCIAL FORMAT" />
              <DataBadge type="ACTUAL" text="SABUBA CLASSIC (3-WHEEL MOTOR)" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              Motor Custom 3 Roda <br />
              <span className="text-red-700">Entry Format Teruji.</span>
            </h2>

            <ul className="space-y-3 text-sm text-slate-600 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Capex Jauh Lebih Ringan:</strong> Hanya Rp 100 Juta lengkap dengan kitchen setup & sistem POS.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Mobilitas Tinggi:</strong> Fleksibel jemput bola di titik traffic sarapan pagi (perkantoran, sekolah, perumahan).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Validasi Pasar Cepat:</strong> Menguji potensi titik lokasi baru tanpa risiko biaya sewa tempat jangka panjang.</span>
              </li>
            </ul>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300 text-amber-900 font-bold text-xs">
              <strong>Catatan Strategis:</strong> Motor adalah kendaraan awal untuk penguasaan titik ceruk sarapan pagi, bukan tujuan akhir bentuk fisik brand.
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/Konsep/1. Sabuba Classic.png"
                alt="Sabuba Classic Motor Custom 3 Roda"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <DataBadge type="ACTUAL" text="UNIT USLEEP SABUBA CLASSIC" />
                <h4 className="font-extrabold text-lg mt-1">Sabuba Classic Custom Vehicle</h4>
                <p className="text-xs text-slate-300">Desain kompak, rangka kokoh, stainless steel food grade, & siap jualan dalam waktu 5 menit.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 08: SABUBA HOUSE VISION
    // ----------------------------------------------------
    {
      id: 'slide-08-sabuba-house-vision',
      title: 'FROM STREET FOOD TO SABUBA HOUSE',
      content: (
        <div className="space-y-6 h-full flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2">
            <DataBadge type="CONCEPT" text="LONG-TERM BRAND ROADMAP" />
            <DataBadge type="CONCEPT" text="FUTURE / CONCEPT VISUALIZATION" />
          </div>

          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              The Motor Is The Entry Point. <br />
              <span className="text-red-700">Sabuba House Is The Destination.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Evolusi wujud fisik outlet dari format street food menuju outlet modern permanen yang ramah keluarga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <span className="text-[10px] font-black text-red-700 bg-red-50 px-2 py-0.5 rounded">PHASE 1</span>
              <h4 className="font-extrabold text-slate-900 text-sm">Sabuba Classic</h4>
              <p className="text-xs text-slate-500">Motor 3 Roda / Street Food. Validasi unit awal.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <span className="text-[10px] font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded">PHASE 2</span>
              <h4 className="font-extrabold text-slate-900 text-sm">Sabuba Point</h4>
              <p className="text-xs text-slate-500">Compact booth / ruko pick-up window.</p>
            </div>
            <div className="p-4 rounded-2xl bg-red-900 text-white shadow-xl space-y-2 ring-2 ring-red-400">
              <span className="text-[10px] font-black text-amber-300 bg-red-800 px-2 py-0.5 rounded">PHASE 3 — VISION</span>
              <h4 className="font-extrabold text-white text-sm">Sabuba House</h4>
              <p className="text-xs text-red-200">Modern family-friendly dine-in breakfast outlet.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">PHASE 4</span>
              <h4 className="font-extrabold text-slate-900 text-sm">National Network</h4>
              <p className="text-xs text-slate-500">Jaringan restoran nasional terintegrasi.</p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-slate-300 shadow-xl h-44 flex items-center justify-between p-8 bg-slate-900 text-white">
            <img src="/assets/Konsep/2. Konsep Restaurant.png" alt="Konsep Sabuba House" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="relative z-10 space-y-1">
              <DataBadge type="CONCEPT" text="FUTURE CONCEPT RENDER" />
              <h3 className="text-2xl font-black">Sabuba House Outlet Concept</h3>
              <p className="text-xs text-slate-300">Sentuhan warm wood, AC dine-in area, pick-up window, & suasana sarapan keluarga modern.</p>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 09: WHAT SABUBA CAN BECOME
    // ----------------------------------------------------
    {
      id: 'slide-09-brand-expansion',
      title: 'WHAT SABUBA CAN BECOME',
      content: (
        <div className="space-y-6 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <DataBadge type="FORECAST" text="MENU & CATEGORY EXPANSION ROADMAP" />
          </div>

          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              More Than Breakfast. <br />
              <span className="text-red-700">A Modern Indonesian Food Brand.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Memulai dari bubur bakar claypot, lalu berkembang secara selektif ke makanan kenyamanan harian (comfort food) keluarga Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3">
              <span className="text-xs font-bold text-red-700 uppercase">Category Anchor</span>
              <h4 className="font-extrabold text-slate-900 text-lg">Signature Breakfast</h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>✓ Bubur Bakar Claypot (Ori, Laksa, Semur)</li>
                <li>✓ Telur Kampung Half-Boiled</li>
                <li>✓ Kopi Hitam & Teh Nusantara</li>
              </ul>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3">
              <span className="text-xs font-bold text-amber-700 uppercase">Side & Add-Ons</span>
              <h4 className="font-extrabold text-slate-900 text-lg">Dim Sum & Wonton</h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>✓ Wonton Kuah Dumpling Ayam</li>
                <li>✓ Dim Sum Siomay Ayam</li>
                <li>✓ Aneka Sate-satean Pendamping</li>
              </ul>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3">
              <span className="text-xs font-bold text-purple-700 uppercase">Future Expansion</span>
              <h4 className="font-extrabold text-slate-900 text-lg">All-Day Comfort Food</h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Rice-based Claypot Meals</li>
                <li>• Indonesian Comfort Soups</li>
                <li>• Specialty Artisan Drinks</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 10: SOCIAL PROOF
    // ----------------------------------------------------
    {
      id: 'slide-10-social-proof',
      title: 'SOCIAL PROOF',
      content: (
        <div className="space-y-6 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <DataBadge type="ACTUAL" text="AUTHENTIC VIRAL TIKTOK REVIEWS" />
          </div>

          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              People Are Already <span className="text-red-700">Talking About Sabuba.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Mendapatkan sambutan hangat dan ulasan antusias dari berbagai kuliner influencer & pelanggan di Sidoarjo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-red-700">
                <span>@dilarang.duduk</span>
              </div>
              <p className="text-xs text-slate-700 italic">"Bubur bakar claypot pertama di Sidoarjo yang rempahnya berasa bgt & smoky khas claypot!"</p>
              <DataBadge type="ACTUAL" text="VIRAL TIKTOK REVIEW" />
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-red-700">
                <span>@mmekuliner</span>
              </div>
              <p className="text-xs text-slate-700 italic">"Antrean sarapan pagi rame bgt! Wonton kuah & dim sum siomay-nya wajib dicoba."</p>
              <DataBadge type="ACTUAL" text="VIRAL TIKTOK REVIEW" />
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-red-700">
                <span>@amaryroose</span>
              </div>
              <p className="text-xs text-slate-700 italic">"Sensasi sarapan panas claypot yang ramah kantong tapi rasa resto premium!"</p>
              <DataBadge type="ACTUAL" text="VIRAL TIKTOK REVIEW" />
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-red-700">
                <span>@aprilliachil</span>
              </div>
              <p className="text-xs text-slate-700 italic">"Pilihan sarapan sehat keluarga. Porsi pas & kuah laksanya gurih hangat di perut."</p>
              <DataBadge type="ACTUAL" text="VIRAL TIKTOK REVIEW" />
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 11: BEACHHEAD MARKET — SIDOARJO
    // ----------------------------------------------------
    {
      id: 'slide-11-beachhead-sidoarjo',
      title: 'BEACHHEAD MARKET — SIDOARJO',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          <div className="lg:col-span-5 space-y-5">
            <DataBadge type="ACTUAL" text="SIDOARJO OPERATIONAL CLUSTER" />
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              Start Where We <span className="text-red-700">Know The Market.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Sidoarjo dipilih sebagai titik awal ekspansi (beachhead) karena keberadaan basis operasional & Central Kitchen pertama Sabuba.
            </p>
            <div className="p-4 rounded-2xl bg-slate-900 text-white font-bold text-xs space-y-1">
              <div className="text-amber-400 font-extrabold uppercase">Rute Ekspansi Regional:</div>
              <div>Sidoarjo → Jawa Timur → Pulau Jawa → Seluruh Indonesia</div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-between">
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">Sabuba Depan Warung Leko</h4>
                <p className="text-xs text-slate-500">Jl. Ahmad Yani No.3D, Pucang, Sidoarjo</p>
              </div>
              <DataBadge type="ACTUAL" text="PRIMARY OUTLET" />
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-between">
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">Sabuba Kantin RSUD Sidoarjo</h4>
                <p className="text-xs text-slate-500">Jl. Mojopahit No.667, Celep, Sidoarjo</p>
              </div>
              <DataBadge type="ACTUAL" text="ACTIVE OUTLET" />
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-between">
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">Sabuba X Zeger Coffee</h4>
                <p className="text-xs text-slate-500">Perum Kemiri Indah No.8, Kemiri, Sidoarjo</p>
              </div>
              <DataBadge type="ACTUAL" text="ACTIVE OUTLET" />
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 12: TAM / SAM / SOM
    // ----------------------------------------------------
    {
      id: 'slide-12-tam-sam-som',
      title: 'TAM / SAM / SOM',
      content: (
        <div className="space-y-6 h-full flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2">
            <DataBadge type="VERIFY" text="DATA NEEDED — VERIFY BEFORE PUBLICATION" />
            <DataBadge type="ASSUMPTION" text="BOTTOM-UP MARKET SIZING MODEL" />
          </div>

          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              A Big Market. <span className="text-red-700">A Focused Entry.</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              *Catatan Transparansi: Angka TAM Rp120T dari proposal lama ditandai untuk verifikasi data eksternal. Kami menggunakan pendekatan bottom-up realistis untuk estimasi potensi pasar sarapan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <span className="text-xs font-bold text-slate-500 uppercase">TAM (Total Market)</span>
              <h4 className="font-black text-slate-900 text-xl">Nasional Sarapan</h4>
              <p className="text-xs text-slate-600">Total belanja makan pagi & comfort food harian seluruh masyarakat Indonesia.</p>
              <DataBadge type="VERIFY" text="VERIFY EX-DATA" />
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <span className="text-xs font-bold text-sky-700 uppercase">SAM (Serviceable Market)</span>
              <h4 className="font-black text-slate-900 text-xl">Perkotaan Jawa Timur</h4>
              <p className="text-xs text-slate-600">Populasi urban area Gerbangkertosusila & Jawa Timur yang mengonsumsi sarapan di luar rumah.</p>
              <DataBadge type="ASSUMPTION" text="ESTIMASI BPS URBAN" />
            </div>
            <div className="p-5 rounded-3xl bg-red-900 text-white shadow-xl space-y-3">
              <span className="text-xs font-bold text-amber-300 uppercase">SOM (Target Sabuba)</span>
              <h4 className="font-black text-amber-400 text-xl">Cluster Sidoarjo & Sekitar</h4>
              <p className="text-xs text-red-100">Target penetrasi realistis: 20-50 unit Sabuba Classic di koridor utama Sidoarjo & Surabaya.</p>
              <DataBadge type="TARGET" text="CLUSTER GOAL" />
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 13: UNIT ECONOMICS & INTERACTIVE SIMULATOR
    // ----------------------------------------------------
    {
      id: 'slide-13-unit-economics',
      title: 'UNIT ECONOMICS & FINANCIAL MODEL',
      content: (
        <div className="space-y-4 h-full flex flex-col justify-center">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <DataBadge type="TARGET" text="4 SCENARIO SIMULATOR" />
              <DataBadge type="ASSUMPTION" text="HPP 40% | OPEX 15%" />
            </div>
            <DataBadge type="ACTUAL" text="BASELINE HISTORIS: AUG 2026 OMSET RP 80,1M (OUTLET A. YANI)" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            One Unit. <span className="text-red-700">One Repeatable Model.</span>
          </h2>

          {/* Scenario Selector Tabs */}
          <div className="flex items-center gap-2 bg-slate-200/70 p-1.5 rounded-2xl overflow-x-auto">
            {financialScenarios.map((sc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveScenarioIdx(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                  activeScenarioIdx === idx
                    ? 'bg-red-700 text-white shadow-md scale-105'
                    : 'text-slate-700 hover:bg-slate-300/60'
                }`}
              >
                {sc.name} ({sc.cupsDay} Cup/Hari)
              </button>
            ))}
          </div>

          {/* Active Scenario Card Breakdown */}
          {(() => {
            const sc = financialScenarios[activeScenarioIdx];
            return (
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5 space-y-4 border-r border-slate-100 pr-0 md:pr-6">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase">Skenario Penjualan</span>
                    <h3 className="text-3xl font-black text-slate-900">{sc.cupsDay} Cup / Hari</h3>
                    <p className="text-xs text-slate-500">Asumsi Rata-rata Harga Jual (APC): Rp 20.000 / porsi</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="text-[10px] text-slate-500 font-bold uppercase">Omset / Bulan</div>
                      <div className="text-lg font-black text-slate-900">{formatRupiah(sc.salesMonth)}</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                      <div className="text-[10px] text-emerald-700 font-bold uppercase">Payback Period</div>
                      <div className="text-lg font-black text-emerald-800">{sc.paybackMonths}</div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">HPP / COGS (40%)</div>
                    <div className="text-base font-extrabold text-slate-900">{formatRupiah(sc.cogsAmount)}</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">OPEX (Operasional ~15%)</div>
                    <div className="text-base font-extrabold text-slate-900">{formatRupiah(sc.opexAmount)}</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-1 col-span-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400 uppercase">Net Profit Store (45%)</span>
                      <DataBadge type="TARGET" text="STORE EBITDA" />
                    </div>
                    <div className="text-2xl font-black text-white">{formatRupiah(sc.storeNetProfit)} / bulan</div>
                    <div className="text-xs text-amber-300 font-bold pt-1 border-t border-slate-800 flex justify-between">
                      <span>Bagian Mitra (50% Bagi Hasil):</span>
                      <strong className="text-white text-sm">{formatRupiah(sc.partnerShare50)} / bulan</strong>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 14: PARTNERSHIP MODEL
    // ----------------------------------------------------
    {
      id: 'slide-14-partnership-model',
      title: 'THE PARTNERSHIP MODEL',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          <div className="lg:col-span-5 space-y-5">
            <DataBadge type="ACTUAL" text="COMMERCIAL PARTNERSHIP OFFER" />
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              A Business System, <br />
              <span className="text-red-700">Not Just A Package.</span>
            </h2>
            <p className="text-slate-600 text-sm font-medium leading-relaxed">
              Skema kemitraan pasif yang dirancang transparan, akuntabel, dan didukung penuh oleh tim operasional profesional HQ Sabuba.
            </p>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold leading-relaxed">
              ⚠️ <strong>Prinsip Transparansi:</strong> Sabuba tidak menggunakan klaim "guaranteed profit" atau "guaranteed ROI". Keuntungan didasarkan pada performa riil outlet & laporan POS Cloud transparan 24/7.
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-2">
              <span className="text-xs font-bold text-red-700 uppercase">Modal Awal CAPEX</span>
              <h4 className="text-2xl font-black text-slate-900">Rp 100.000.000</h4>
              <p className="text-xs text-slate-500">Unit Sabuba Classic, peralatan kitchen lengkap, branding, & sistem POS.</p>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase">Nisbah Bagi Hasil</span>
              <h4 className="text-2xl font-black text-slate-900">50% : 50%</h4>
              <p className="text-xs text-slate-500">Pembagian laba bersih toko antara Mitra Pasif & Pengelola HQ.</p>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-2">
              <span className="text-xs font-bold text-sky-700 uppercase">Manajemen Operasional</span>
              <h4 className="text-2xl font-black text-slate-900">100% HQ Managed</h4>
              <p className="text-xs text-slate-500">Rekrutmen crew, suplai bahan, & operasional harian diurus tim HQ.</p>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-2">
              <span className="text-xs font-bold text-purple-700 uppercase">Transparansi Penjualan</span>
              <h4 className="text-2xl font-black text-slate-900">POS Cloud 24/7</h4>
              <p className="text-xs text-slate-500">Akses langsung ke aplikasi kasir cloud untuk memantau omset real-time.</p>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 15: HOW WE SCALE
    // ----------------------------------------------------
    {
      id: 'slide-15-how-we-scale',
      title: 'HOW WE SCALE (SCALING ENGINE)',
      content: (
        <div className="space-y-6 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <DataBadge type="TARGET" text="8-STEP STRATEGIC SCALING ENGINE" />
          </div>

          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              One Proven Unit → <br />
              <span className="text-red-700">Repeatable Clusters → Network.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-xs font-bold text-red-700">STEP 1</div>
              <h4 className="font-extrabold text-slate-900 text-sm">Prove Unit Economics</h4>
              <p className="text-xs text-slate-500">Validasi omset & profit di cluster Sidoarjo.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-xs font-bold text-red-700">STEP 2</div>
              <h4 className="font-extrabold text-slate-900 text-sm">Standardize Operations</h4>
              <p className="text-xs text-slate-500">Pembekuan SOP & resep Central Kitchen.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-xs font-bold text-red-700">STEP 3</div>
              <h4 className="font-extrabold text-slate-900 text-sm">Strengthen Kitchen</h4>
              <p className="text-xs text-slate-500">Peningkatan kapasitas produksi bumbu induk.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-xs font-bold text-red-700">STEP 4</div>
              <h4 className="font-extrabold text-slate-900 text-sm">Build Cluster Density</h4>
              <p className="text-xs text-slate-500">Penambahan 20+ unit di Jawa Timur.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-xs font-bold text-red-700">STEP 5</div>
              <h4 className="font-extrabold text-slate-900 text-sm">Sabuba Point Launch</h4>
              <p className="text-xs text-slate-500">Uji coba booth & pick-up window modern.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-xs font-bold text-red-700">STEP 6</div>
              <h4 className="font-extrabold text-slate-900 text-sm">Geographical Expansion</h4>
              <p className="text-xs text-slate-500">Penetrasi kota-kota besar di Pulau Jawa.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-xs font-bold text-red-700">STEP 7</div>
              <h4 className="font-extrabold text-slate-900 text-sm">Sabuba House Pilot</h4>
              <p className="text-xs text-slate-500">Peluncuran flagship dine-in restaurant.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-xl space-y-2">
              <div className="text-xs font-bold text-amber-400">STEP 8</div>
              <h4 className="font-extrabold text-white text-sm">National Brand</h4>
              <p className="text-xs text-slate-300">Top of mind sarapan keluarga Indonesia.</p>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 16: THE ROADMAP
    // ----------------------------------------------------
    {
      id: 'slide-16-roadmap',
      title: 'THE ROADMAP',
      content: (
        <div className="space-y-6 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <DataBadge type="TARGET" text="STRATEGIC EXPANSION TIMELINE" />
          </div>

          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              From Sidoarjo <span className="text-red-700">To Indonesia.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3 relative">
              <span className="text-2xl font-black text-red-700">2026</span>
              <h4 className="font-extrabold text-slate-900">Validation Phase</h4>
              <p className="text-xs text-slate-600">Validasi rasa, sistem SOP, & unit economics Sabuba Classic di Sidoarjo.</p>
              <DataBadge type="ACTUAL" text="CURRENT PHASE" />
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3 relative">
              <span className="text-2xl font-black text-amber-600">2027</span>
              <h4 className="font-extrabold text-slate-900">Regional Cluster</h4>
              <p className="text-xs text-slate-600">Ekspansi jaringan Sabuba Classic & Sabuba Point di wilayah Jawa Timur.</p>
              <DataBadge type="TARGET" text="TARGET 50+ UNITS" />
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3 relative">
              <span className="text-2xl font-black text-sky-600">2028</span>
              <h4 className="font-extrabold text-slate-900">Sabuba House Pilot</h4>
              <p className="text-xs text-slate-600">Peluncuran outlet dine-in Sabuba House pertama untuk pengalaman sarapan keluarga.</p>
              <DataBadge type="CONCEPT" text="FLAGSHIP DINE-IN" />
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-2xl space-y-3 relative">
              <span className="text-2xl font-black text-amber-400">2029+</span>
              <h4 className="font-extrabold text-white">National Network</h4>
              <p className="text-xs text-slate-300">Ekspansi ke seluruh kota besar di Indonesia sebagai brand sarapan nasional.</p>
              <DataBadge type="TARGET" text="NATIONAL BRAND" />
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 17: CLOSING & CTA
    // ----------------------------------------------------
    {
      id: 'slide-17-closing',
      title: 'CLOSING — FROM ONE BOWL TO A NATIONAL BRAND',
      content: (
        <div className="space-y-6 h-full flex flex-col justify-center text-center items-center max-w-4xl mx-auto">
          <DataBadge type="ACTUAL" text="FINAL BRAND MESSAGE" />

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tight"
          >
            FROM ONE BOWL <br />
            TO A <span className="text-red-700">NATIONAL INDONESIAN</span> FOOD BRAND.
          </motion.h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
            Sabuba dimulai dari satu kebutuhan sederhana: <strong>sarapan hangat untuk keluarga Indonesia.</strong> Hari ini kami membangun unit pertama. Besok kami membangun sistem. Dan berikutnya, kami membangun brand nasional.
          </p>

          <div className="p-6 rounded-3xl bg-slate-900 text-white w-full max-w-2xl space-y-4 shadow-2xl">
            <h3 className="text-xl font-extrabold text-amber-400">Partner With Sabuba Today</h3>
            <p className="text-xs text-slate-300">Bergabunglah sebagai mitra pasif awal dalam membangun brand kuliner sarapan Indonesia masa depan.</p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="https://wa.me/6281359180156?text=Halo%20HQ%20Sabuba,%20saya%20tertarik%20diskusi%20kemitraan%20Sabuba%20Classic"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg transition-all"
              >
                <span>Konsultasi via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => window.print()}
                className="px-6 py-3 rounded-2xl bg-red-700 hover:bg-red-800 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Executive PDF</span>
              </button>
            </div>
          </div>

          <div className="text-xs text-slate-400 font-semibold pt-2">
            Official Website: www.sabubabuburbakar.com | WhatsApp HQ: +62 813-5918-0156
          </div>
        </div>
      )
    }
  ];

  const currentSlideObj = slides[currentSlide] || slides[0];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/80 backdrop-blur-md">
        
        {/* Printable PDF Landscape Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className={`w-full bg-slate-50 text-slate-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 transition-all ${
            isFullscreen ? 'h-screen w-screen rounded-none' : 'max-w-6xl h-[92vh]'
          }`}
        >

          {/* Top Bar Header */}
          <div className="px-6 py-4 bg-white border-b border-slate-200 flex items-center justify-between z-20 shrink-0 shadow-xs">
            <div className="flex items-center gap-3">
              <SabubaLogo className="h-8 w-auto" />
              <div className="h-4 w-px bg-slate-300 hidden sm:block" />
              <div>
                <h3 className="font-extrabold text-sm text-slate-900 tracking-tight">SABUBA Presentation System</h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  Slide {currentSlide + 1} / {slides.length}: <span className="text-red-700 font-bold">{currentSlideObj.title}</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors hidden sm:flex"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-black flex items-center gap-2 transition-all shadow-md"
                title="Download / Print PDF"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-red-100 text-slate-700 hover:text-red-700 transition-colors ml-1"
                aria-label="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Active Slide Content Area */}
          <div className="p-6 sm:p-10 flex-1 overflow-y-auto flex flex-col justify-center relative bg-slate-50">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-center"
              >
                {currentSlideObj.content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Bar Controls & Progress */}
          <div className="px-6 py-4 bg-white border-t border-slate-200 flex items-center justify-between z-20 shrink-0">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                currentSlide === 0
                  ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-100'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 shadow-xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            {/* Slide Navigation Dots */}
            <div className="hidden md:flex items-center gap-1.5 overflow-x-auto max-w-md px-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentSlide === idx
                      ? 'w-6 bg-red-700'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  title={`Go to slide ${idx + 1}: ${s.title}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`px-5 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 transition-all ${
                currentSlide === slides.length - 1
                  ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-100'
                  : 'bg-red-700 hover:bg-red-800 text-white shadow-md'
              }`}
            >
              <span>{currentSlide === slides.length - 1 ? 'Selesai' : 'Berikutnya'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
