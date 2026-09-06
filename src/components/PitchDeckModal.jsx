import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ChevronLeft, ChevronRight, Download, Sparkles, TrendingUp,
  DollarSign, ShieldCheck, BarChart3, PieChart, Layers,
  Award, Play, CheckCircle2, ArrowRight, RefreshCw, Maximize2,
  Minimize2, ExternalLink, Calendar, Building2, Zap, Flame, Star, Utensils,
  AlertTriangle, HelpCircle, FileText, Bike, Heart, Users, MapPin, Store,
  Clock, Target, Shield, CheckCircle, Info, Video, ChevronUp, ChevronDown
} from 'lucide-react';
import SabubaLogo from './SabubaLogo';
import { SABUBA_DATA, formatRupiah } from '../data/sabubaData';

// ----------------------------------------------------
// Background Wave & Subtle Red Ornament Component
// ----------------------------------------------------
function BackgroundWave() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle Top-Right Red Gradient Mesh */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-red-600/10 via-amber-500/5 to-transparent blur-3xl" />
      
      {/* Subtle Bottom-Left Soft Red Glow */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-red-800/10 via-red-600/5 to-transparent blur-3xl" />

      {/* SVG Waves Line Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,192L60,202.7C120,213,240,235,360,229.3C480,224,600,192,720,181.3C840,171,960,181,1080,197.3C1200,213,1320,235,1380,245.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          fill="#991B1B"
        />
        <path
          d="M0,450C300,520 600,380 900,480C1200,580 1350,420 1440,400V800H0V450Z"
          fill="#991B1B"
        />
      </svg>
    </div>
  );
}

// ----------------------------------------------------
// Unified Data Classification Badge (Clean Brand Colors)
// ----------------------------------------------------
function DataBadge({ type, text }) {
  let badgeStyle = "bg-red-50 text-red-900 border-red-200";
  let label = text || type;

  switch (type) {
    case 'ACTUAL':
      badgeStyle = "bg-red-800 text-white border-red-900 font-extrabold";
      label = text || "DATA AKTUAL BPS & POS";
      break;
    case 'ASSUMPTION':
      badgeStyle = "bg-white text-red-900 border-red-300 font-semibold shadow-2xs";
      label = text || "SIMULASI KEUANGAN";
      break;
    case 'TARGET':
      badgeStyle = "bg-amber-500/10 text-amber-900 border-amber-300 font-extrabold";
      label = text || "TARGET OPERASIONAL";
      break;
    case 'FORECAST':
      badgeStyle = "bg-red-50 text-red-800 border-red-300 font-bold";
      label = text || "PROYEKSI / FORECAST";
      break;
    case 'VERIFY':
    case 'DATA_NEEDED':
      badgeStyle = "bg-red-100 text-red-950 border-red-400 font-extrabold";
      label = text || "DATA NEEDED — VERIFY BEFORE PUBLICATION";
      break;
    case 'CONCEPT':
    case 'FUTURE':
      badgeStyle = "bg-slate-900 text-amber-400 border-slate-700 font-extrabold";
      label = text || "FUTURE / CONCEPT VISUALIZATION";
      break;
    default:
      break;
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] uppercase tracking-wider ${badgeStyle}`}>
      <Info className="w-3.5 h-3.5 shrink-0" />
      <span>{label}</span>
    </span>
  );
}

// ----------------------------------------------------
// Playable TikTok Embed Card Component
// ----------------------------------------------------
function TikTokCard({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col justify-between hover:border-red-300 transition-all">
      <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[9/14] max-h-56">
        {isPlaying ? (
          <iframe
            src={`https://www.tiktok.com/embed/v2/${video.videoId}`}
            className="w-full h-full rounded-xl border-0"
            allow="fullscreen"
            title={video.handle}
          />
        ) : (
          <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
            <img src={video.image} alt={video.handle} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            <div className="absolute inset-0 bg-slate-950/40 flex flex-col items-center justify-center gap-2 p-3 text-center">
              <div className="w-10 h-10 rounded-full bg-red-800 text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </div>
              <span className="text-[10px] font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm">
                Klik untuk Play Video
              </span>
            </div>
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-red-800 text-[9px] font-extrabold text-white shadow-sm">
              {video.tag}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-1.5 pt-2">
        <div className="flex items-center justify-between">
          <div className="font-extrabold text-xs text-red-800 flex items-center gap-1">
            <Video className="w-3.5 h-3.5" />
            <span>{video.handle}</span>
          </div>
          <a
            href={video.url}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] text-slate-500 hover:text-red-800 flex items-center gap-0.5 font-bold"
          >
            <span>TikTok</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
        <p className="text-[11px] text-slate-700 italic line-clamp-2 leading-snug">"{video.quote}"</p>
      </div>
    </div>
  );
}

export default function PitchDeckModal({ isOpen, onClose, defaultSlide = 0 }) {
  const [currentSlide, setCurrentSlide] = useState(defaultSlide);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(1); // Default: 100 Pack (Sedang)

  // Full Feasibility Study Data (Feasibility Study - Pack Terminology)
  const feasibilityScenarios = [
    {
      name: 'Rendah (50 Pack)',
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
      name: 'Sedang (100 Pack)',
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
      name: 'Ramai (150 Pack)',
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
      name: 'Ramai Sekali (200 Pack)',
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
  ];

  // Outlet Jl. A Yani Historical P&L Data (3 Months: Mei, Juni, Agustus 2026)
  const pnlHistoricalData = [
    {
      month: 'Mei 2026',
      sales: 71680000,
      hpp: 28672000,
      grossProfit: 43008000,
      opsKaryawan: 3000000,
      opsUtilitas: 1384500,
      totalOpex: 4384500,
      netProfit: 38623500,
      marginPercent: 53.9,
      isTop: false
    },
    {
      month: 'Juni 2026',
      sales: 66792000,
      hpp: 26716800,
      grossProfit: 40075200,
      opsKaryawan: 2500000,
      opsUtilitas: 958200,
      totalOpex: 3458200,
      netProfit: 36617000,
      marginPercent: 54.8,
      isTop: false
    },
    {
      month: 'Agustus 2026 (PUNCAK OMSET)',
      sales: 80108009,
      hpp: 32043204,
      grossProfit: 48064805,
      opsKaryawan: 4500000,
      opsUtilitas: 3387296,
      totalOpex: 7887296,
      netProfit: 40177509,
      marginPercent: 50.1,
      isTop: true
    }
  ];

  // 6 Embedded Playable TikTok Video Links Requested by User
  const tiktokVideos = [
    {
      videoId: '7646970069733362964',
      url: 'https://www.tiktok.com/@amaryroose/video/7646970069733362964?is_from_webapp=1&sender_device=pc',
      handle: '@amaryroose',
      title: 'Review Sensasi Claypot Panas',
      quote: 'Sensasi sarapan panas claypot yang ramah kantong tapi rasa resto premium!',
      tag: 'VIRAL REVIEW #1',
      image: 'https://drive.google.com/thumbnail?id=1N9PYBAox07AKVBxRgWjtaHXc3fS7Kvsb&sz=w800',
    },
    {
      videoId: '7630859047729630482',
      url: 'https://www.tiktok.com/@qhueenz/photo/7630859047729630482?is_from_webapp=1&sender_device=pc',
      handle: '@qhueenz',
      title: 'Kuliner Sarapan Hits',
      quote: 'Rekomendasi sarapan enak & murah di Sidoarjo, bubur bakarnya lembut & wangi!',
      tag: 'VIRAL REVIEW #2',
      image: 'https://drive.google.com/thumbnail?id=15khQoPH2F0ia_gDjRNtEWjN3yjAc1LTm&sz=w800',
    },
    {
      videoId: '7628636632308075796',
      url: 'https://www.tiktok.com/@aprilliachil/video/7628636632308075796?is_from_webapp=1&sender_device=pc',
      handle: '@aprilliachil',
      title: 'Sarapan Keluarga Favorit',
      quote: 'Pilihan sarapan sehat keluarga. Porsi pas & kuah laksanya gurih hangat di perut.',
      tag: 'VIRAL REVIEW #3',
      image: 'https://drive.google.com/thumbnail?id=17QZFlxABkyCLmm27GfKNKut5Xbm4vXTB&sz=w800',
    },
    {
      videoId: '7657353179687947541',
      url: 'https://www.tiktok.com/@aprilliachil/video/7657353179687947541?is_from_webapp=1&sender_device=pc',
      handle: '@aprilliachil (Part 2)',
      title: 'Bubur Bakar Kuah Semur',
      quote: 'Kuah semurnya meresap banget sampai ke dalam bubur panasnya. Wajib coba!',
      tag: 'VIRAL REVIEW #4',
      image: 'https://drive.google.com/thumbnail?id=16KK3fHQZ8cZlWU2MMhId3wGKYFfp0572&sz=w800',
    },
    {
      videoId: '7632918291463458069',
      url: 'https://www.tiktok.com/@anissarosied/video/7632918291463458069?is_from_webapp=1&sender_device=pc',
      handle: '@anissarosied',
      title: 'Spot Sarapan Pagi Sidoarjo',
      quote: 'Wonton kuah & dim sum siomay-nya beneran nagih! Pas banget buat menu sarapan.',
      tag: 'VIRAL REVIEW #5',
      image: 'https://drive.google.com/thumbnail?id=1LLms9wP-r2XxSGJS5fhbq-OWf9s30na7&sz=w800',
    },
    {
      videoId: '7632959962536283413',
      url: 'https://www.tiktok.com/@mmekuliner/video/7632959962536283413?is_from_webapp=1&sender_device=pc',
      handle: '@mmekuliner',
      title: 'Antrean Sarapan Rame',
      quote: 'Antrean pagi rame banget! Inovasi sarapan 3 roda yang super praktis & lezat.',
      tag: 'VIRAL REVIEW #6',
      image: 'https://drive.google.com/thumbnail?id=1nEAhDwYbP2d6O4I7TD8557BkjboXn8-f&sz=w800',
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
  // STORYBOARD MASTER SLIDES (Master Hybrid Structure)
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
              <DataBadge type="ACTUAL" text="PROPOSAL KEMITRAAN 2026" />
              <DataBadge type="ACTUAL" text="FORMAT UTAMA: SABUBA CLASSIC" />
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                SABUBA <br />
                <span className="text-red-800">Modern Indonesian</span> <br />
                Breakfast Brand
              </h1>
              <div className="w-20 h-1.5 bg-red-700 rounded-full" />
            </div>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
              Born from Bubur Bakar Claypot. Built for Indonesian families. Designed to scale across the nation.
            </p>

            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-950 font-bold text-sm flex items-center gap-3">
              <Flame className="w-5 h-5 text-red-700 shrink-0" />
              <span>POSITIONING: <em>"The motor is the entry point, NOT the destination."</em></span>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md">
                <div className="text-[11px] font-bold text-slate-500 uppercase">CAPEX Usaha</div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">Rp 100 Jt</div>
                <DataBadge type="ACTUAL" text="Sabuba Classic" />
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md">
                <div className="text-[11px] font-bold text-slate-500 uppercase">Bagi Hasil</div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">50% : 50%</div>
                <DataBadge type="ACTUAL" text="Mitra Pasif" />
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md">
                <div className="text-[11px] font-bold text-slate-500 uppercase">Operasional</div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">100% HQ</div>
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
                <h3 className="text-2xl font-extrabold mt-2 text-white">Signature Warm Claypot Experience</h3>
                <p className="text-xs text-slate-200 mt-1">Sensasi bubur panas beraroma khas claypot, topping kaya rasa, &amp; pelayanan cepat di bawah 3 menit.</p>
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
              <span className="text-red-800">Sarapan Adalah Kebiasaan Harian.</span>
            </h2>
            <div className="w-20 h-1.5 bg-red-700 rounded-full" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
              Setiap pagi, jutaan keluarga Indonesia, pekerja kantor, pelajar, dan komuter membutuhkan makanan hangat, praktis, lezat, bernutrisi, dan terjangkau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3 hover:border-red-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-red-800 text-white flex items-center justify-center font-bold text-xl">01</div>
              <h3 className="text-xl font-bold text-slate-900">Keluarga &amp; Anak-Anak</h3>
              <p className="text-sm text-slate-600">Sarapan bernutrisi, 100% Halal, &amp; disukai seluruh anggota keluarga di pagi hari.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3 hover:border-red-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-red-800 text-white flex items-center justify-center font-bold text-xl">02</div>
              <h3 className="text-xl font-bold text-slate-900">Pekerja &amp; Komuter Pagi</h3>
              <p className="text-sm text-slate-600">Pelayanan super cepat (&lt; 3 menit) untuk mobilitas jam 06:00 - 09:00 WIB.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3 hover:border-red-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-red-800 text-white flex items-center justify-center font-bold text-xl">03</div>
              <h3 className="text-xl font-bold text-slate-900">Konsistensi Harian</h3>
              <p className="text-sm text-slate-600">Bukan makanan musiman. Memiliki frekuensi repeat order tinggi sepanjang tahun.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-red-900 text-white flex items-center justify-between shadow-lg">
            <span className="font-extrabold text-sm sm:text-base">THE OPPORTUNITY STARTS EVERY SINGLE MORNING.</span>
            <span className="text-xs bg-red-800 border border-red-700 px-3 py-1.5 rounded-full font-bold">100% Habitual Market</span>
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
              <span className="text-red-800">But Great Food Is Hard To Scale.</span>
            </h2>
            <div className="w-20 h-1.5 bg-red-700 rounded-full" />
            <p className="text-slate-700 text-base font-medium leading-relaxed">
              Bisnis makanan tradisional Indonesia memiliki permintaan (demand) yang sangat besar, tetapi sering gagal berkembang saat membuka cabang baru.
            </p>
            <div className="p-4 rounded-2xl bg-red-900 text-white font-extrabold text-sm shadow-md">
              "The problem is NOT demand. The problem is SCALABILITY."
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <AlertTriangle className="w-6 h-6 text-red-700" />
              <h4 className="font-extrabold text-slate-900 text-base">Ketergantungan Pada Lokasi</h4>
              <p className="text-xs text-slate-600">Sewa ruko permanen yang mahal memperlambat ROI &amp; mengunci fleksibilitas tempat.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <AlertTriangle className="w-6 h-6 text-red-700" />
              <h4 className="font-extrabold text-slate-900 text-base">Ketergantungan Koki &amp; SDM</h4>
              <p className="text-xs text-slate-600">Rasa berubah ketika koki berganti karena resep tidak terstandarisasi dengan ketat.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <AlertTriangle className="w-6 h-6 text-red-700" />
              <h4 className="font-extrabold text-slate-900 text-base">Supply Chain Berkelanjutan</h4>
              <p className="text-xs text-slate-600">Kesulitan menjaga pasokan bahan baku segar dan berkualitas di banyak lokasi sekaligus.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <AlertTriangle className="w-6 h-6 text-red-700" />
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
            Turn a Daily Habit into a <span className="text-red-800">Scalable Food Brand.</span>
          </h2>
          <div className="w-20 h-1.5 bg-red-700 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3 opacity-90">
              <span className="text-xs font-bold text-slate-500 uppercase">Format Tradisional</span>
              <h3 className="text-lg font-bold text-slate-800">Traditional Street Food</h3>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• Murah &amp; Merakyat</li>
                <li>• Resep tidak terstandar</li>
                <li>• Manajemen manual &amp; acak</li>
                <li>• Sulit di-scale</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-red-900 text-white space-y-3 shadow-2xl ring-4 ring-red-100 transform scale-105 z-10">
              <span className="text-xs font-bold text-amber-300 uppercase">Posisi Sabuba</span>
              <h3 className="text-xl font-black text-white">SABUBA SYSTEM</h3>
              <ul className="text-xs text-red-100 space-y-2 font-medium">
                <li>✓ Signature Product Claypot</li>
                <li>✓ Central Kitchen Production</li>
                <li>✓ Standardized SOP &amp; Fast Service</li>
                <li>✓ Replicable Unit Economics</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3 opacity-90">
              <span className="text-xs font-bold text-slate-500 uppercase">Format Korporat</span>
              <h3 className="text-lg font-bold text-slate-800">Modern Chain F&amp;B</h3>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• Standar &amp; Sistem Baik</li>
                <li>• CAPEX sangat tinggi (&gt;Rp 1M)</li>
                <li>• Harga kurang terjangkau</li>
                <li>• Ekspansi lambat</li>
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
            <DataBadge type="ACTUAL" text="KATALOG MENU LENGKAP" />
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              Bubur Bakar <span className="text-red-800">Claypot</span>
            </h2>
            <div className="w-20 h-1.5 bg-red-700 rounded-full" />
            <p className="text-slate-700 text-base font-medium leading-relaxed">
              Bukan sekadar bubur biasa. Sabuba menyajikan aroma harum panggang claypot hangat dengan pilihan kuah khas (Laksa, Semur, Ori, Kuning) serta aneka topping pilihan.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-950 text-xs font-bold">
                🔥 Hot Claypot Served
              </div>
              <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-950 text-xs font-bold">
                ⏱️ &lt; 3 Min Turnaround
              </div>
              <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-950 text-xs font-bold">
                🥟 Wonton &amp; Dim Sum Add-ons
              </div>
              <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-950 text-xs font-bold">
                ☕ Kopi Hitam Nusantara
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <img src="https://drive.google.com/thumbnail?id=15khQoPH2F0ia_gDjRNtEWjN3yjAc1LTm&sz=w800" alt="Bubur Ori Mix" className="w-full h-28 object-cover rounded-xl" />
              <div className="font-black text-xs text-slate-900">Bubur (Ori) Mix</div>
              <div className="text-xs text-red-800 font-extrabold">Rp 19.000</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <img src="https://drive.google.com/thumbnail?id=1N9PYBAox07AKVBxRgWjtaHXc3fS7Kvsb&sz=w800" alt="Bubur Kuah Laksa" className="w-full h-28 object-cover rounded-xl" />
              <div className="font-black text-xs text-slate-900">Bubur Kuah Laksa</div>
              <div className="text-xs text-red-800 font-extrabold">Rp 19.000</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <img src="https://drive.google.com/thumbnail?id=17QZFlxABkyCLmm27GfKNKut5Xbm4vXTB&sz=w800" alt="Bubur Kuah Semur" className="w-full h-28 object-cover rounded-xl" />
              <div className="font-black text-xs text-slate-900">Kuah Semur + Telur</div>
              <div className="text-xs text-red-800 font-extrabold">Rp 18.000</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <img src="https://drive.google.com/thumbnail?id=1LLms9wP-r2XxSGJS5fhbq-OWf9s30na7&sz=w800" alt="Wonton Kuah" className="w-full h-28 object-cover rounded-xl" />
              <div className="font-black text-xs text-slate-900">Wonton Kuah Ayam</div>
              <div className="text-xs text-red-800 font-extrabold">Rp 13.000</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <img src="https://drive.google.com/thumbnail?id=1nEAhDwYbP2d6O4I7TD8557BkjboXn8-f&sz=w800" alt="Dim Sum Siomay" className="w-full h-28 object-cover rounded-xl" />
              <div className="font-black text-xs text-slate-900">Dim Sum Siomay (4pcs)</div>
              <div className="text-xs text-red-800 font-extrabold">Rp 13.000</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <img src="https://drive.google.com/thumbnail?id=1mPkZsPOo0_r9Bh-wdzSRyKyBFnJi66pR&sz=w800" alt="Kopi Nusantara" className="w-full h-28 object-cover rounded-xl" />
              <div className="font-black text-xs text-slate-900">Kopi Hitam Nusantara</div>
              <div className="text-xs text-red-800 font-extrabold">Rp 8.000</div>
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
            <DataBadge type="ACTUAL" text="ARSITEKTUR SISTEM OPERASIONAL" />
          </div>

          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              We Don't Just Replicate Outlets. <br />
              <span className="text-red-800">We Replicate A System.</span>
            </h2>
            <div className="w-20 h-1.5 bg-red-700 rounded-full" />
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              Kunci keberhasilan scale-up Sabuba adalah standarisasi seluruh rantai pasok dan operasional dari hilir ke hulu.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-red-800 text-white mx-auto flex items-center justify-center font-bold text-xs">1</div>
              <div className="font-extrabold text-xs text-slate-900">Central Kitchen</div>
              <div className="text-[10px] text-slate-500">Pembuatan bumbu &amp; kuah terpusat.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-red-800 text-white mx-auto flex items-center justify-center font-bold text-xs">2</div>
              <div className="font-extrabold text-xs text-slate-900">Supply Chain</div>
              <div className="text-[10px] text-slate-500">Distribusi vacuum terstandar.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-red-800 text-white mx-auto flex items-center justify-center font-bold text-xs">3</div>
              <div className="font-extrabold text-xs text-slate-900">Unit Sabuba</div>
              <div className="text-[10px] text-slate-500">Penyajian cepat di lokasi.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-red-800 text-white mx-auto flex items-center justify-center font-bold text-xs">4</div>
              <div className="font-extrabold text-xs text-slate-900">SOP Pelatihan</div>
              <div className="text-[10px] text-slate-500">Crew terlatih tanpa koki khusus.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-red-800 text-white mx-auto flex items-center justify-center font-bold text-xs">5</div>
              <div className="font-extrabold text-xs text-slate-900">POS Cloud</div>
              <div className="text-[10px] text-slate-500">Data penjualan real-time 24/7.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-red-800 text-white mx-auto flex items-center justify-center font-bold text-xs">6</div>
              <div className="font-extrabold text-xs text-slate-900">Customer</div>
              <div className="text-[10px] text-slate-500">Pengalaman rasa konsisten.</div>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 07: SABUBA CLASSIC (ENTRY FORMAT - POSTER IMAGE UPDATE)
    // ----------------------------------------------------
    {
      id: 'slide-07-sabuba-classic',
      title: 'THE FIRST FORMAT — SABUBA CLASSIC',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <DataBadge type="ACTUAL" text="FORMAT USAHA AKTIF" />
              <DataBadge type="ACTUAL" text="SABUBA CLASSIC (3-WHEEL MOTOR)" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              Motor Custom 3 Roda <br />
              <span className="text-red-800">Entry Format Teruji.</span>
            </h2>
            <div className="w-20 h-1.5 bg-red-700 rounded-full" />

            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-800 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Capex Jauh Lebih Ringan:</strong> Hanya Rp 100 Juta lengkap dengan kitchen setup &amp; sistem POS.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-800 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Mobilitas Tinggi:</strong> Fleksibel jemput bola di titik traffic sarapan pagi (perkantoran, sekolah, perumahan).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-800 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Siap Jualan Dalam Menit:</strong> Rangka kuat, anti karat, &amp; irit bahan bakar untuk operasional lincah.</span>
              </li>
            </ul>

            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-950 font-bold text-xs">
              <strong>Catatan Strategis:</strong> Motor adalah kendaraan awal untuk penguasaan titik ceruk sarapan pagi, bukan tujuan akhir bentuk fisik brand.
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src="/assets/Konsep/5. Konsep Street Food.jpg"
                alt="Sabuba Classic Street Food Kompak Poster"
                className="w-full h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white pointer-events-none">
                <DataBadge type="ACTUAL" text="KONSEP STREET FOOD KOMPAK — SABUBA CLASSIC" />
                <h4 className="font-extrabold text-xl mt-1 text-white">Sabuba Classic Custom 3-Wheel Vehicle</h4>
                <p className="text-xs text-slate-200 mt-1">Kompak • Praktis • Siap Jualan Di Mana Saja • Usaha Flexible Untung Maksimal</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 08: SABUBA HOUSE VISION (COPYWRITING LEFT, IMAGE 2 RIGHT LARGE)
    // ----------------------------------------------------
    {
      id: 'slide-08-sabuba-house-vision',
      title: 'FROM STREET FOOD TO SABUBA HOUSE',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          {/* Copywriting Left (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <DataBadge type="CONCEPT" text="LONG-TERM BRAND ROADMAP" />
              <DataBadge type="CONCEPT" text="FUTURE / CONCEPT VISUALIZATION" />
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
                The Motor Is The Entry Point. <br />
                <span className="text-red-800">Sabuba House Is The Destination.</span>
              </h2>
              <div className="w-20 h-1.5 bg-red-700 rounded-full" />
            </div>

            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
              Evolusi wujud fisik outlet dari format street food menuju outlet modern permanen yang ramah keluarga (family-friendly Indonesian comfort food restaurant).
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                <span className="text-[10px] font-black text-red-800 bg-red-50 px-2 py-0.5 rounded">PHASE 1</span>
                <h4 className="font-extrabold text-slate-900 text-xs">Sabuba Classic</h4>
                <p className="text-[11px] text-slate-500">Motor 3 Roda / Street Food.</p>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                <span className="text-[10px] font-black text-red-800 bg-red-50 px-2 py-0.5 rounded">PHASE 2</span>
                <h4 className="font-extrabold text-slate-900 text-xs">Sabuba Point</h4>
                <p className="text-[11px] text-slate-500">Booth / Pick-up Window.</p>
              </div>
              <div className="p-3 rounded-2xl bg-red-900 text-white shadow-md space-y-1 col-span-2">
                <span className="text-[10px] font-black text-amber-300 bg-red-800 px-2 py-0.5 rounded">PHASE 3 — VISION</span>
                <h4 className="font-extrabold text-white text-sm">Sabuba House</h4>
                <p className="text-xs text-red-100">Modern family-friendly dine-in breakfast outlet with clean kitchen &amp; AC area.</p>
              </div>
            </div>
          </div>

          {/* Large Image 2 Right (7 cols) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 group">
              <img
                src="/assets/Konsep/2. Konsep Restaurant.png"
                alt="Konsep Sabuba House Restaurant Modern"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <DataBadge type="CONCEPT" text="FUTURE CONCEPT RENDER: SABUBA HOUSE" />
                <h3 className="text-2xl font-black mt-2 text-white">Sabuba House Flagship Restaurant</h3>
                <p className="text-xs text-slate-200 mt-1">Dine-in nyaman dengan sentuhan kayu warm aesthetic, Pick-Up Window khusus, &amp; resto sarapan keluarga modern.</p>
              </div>
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
            <DataBadge type="FORECAST" text="MENU &amp; CATEGORY EXPANSION ROADMAP" />
          </div>

          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              More Than Breakfast. <br />
              <span className="text-red-800">A Modern Indonesian Food Brand.</span>
            </h2>
            <div className="w-20 h-1.5 bg-red-700 rounded-full" />
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              Memulai dari bubur bakar claypot, lalu berkembang secara selektif ke makanan kenyamanan harian (comfort food) keluarga Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3">
              <span className="text-xs font-bold text-red-800 uppercase">Category Anchor</span>
              <h4 className="font-extrabold text-slate-900 text-lg">Signature Breakfast</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>✓ Bubur Bakar Claypot (Ori, Laksa, Semur)</li>
                <li>✓ Telur Kampung Half-Boiled</li>
                <li>✓ Kopi Hitam &amp; Teh Nusantara</li>
              </ul>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3">
              <span className="text-xs font-bold text-red-800 uppercase">Side &amp; Add-Ons</span>
              <h4 className="font-extrabold text-slate-900 text-lg">Dim Sum &amp; Wonton</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>✓ Wonton Kuah Dumpling Ayam</li>
                <li>✓ Dim Sum Siomay Ayam</li>
                <li>✓ Aneka Sate-satean Pendamping</li>
              </ul>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3">
              <span className="text-xs font-bold text-red-800 uppercase">Future Expansion</span>
              <h4 className="font-extrabold text-slate-900 text-lg">All-Day Comfort Food</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
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
    // Slide 10: SOCIAL PROOF — EMBEDDED TIKTOK VIDEOS (6 VIDEO SHOWCASE)
    // ----------------------------------------------------
    {
      id: 'slide-10-social-proof-tiktok',
      title: 'SOCIAL PROOF (6 VIRAL EMBEDDED TIKTOK REVIEWS)',
      content: (
        <div className="space-y-4 h-full flex flex-col justify-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DataBadge type="ACTUAL" text="6 PLAYABLE VIRAL TIKTOK REVIEWS" />
            </div>
            <span className="text-xs font-bold text-red-800">Klik Card / Play Untuk Memutar Video</span>
          </div>

          <div className="max-w-3xl space-y-1">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              People Are Already <span className="text-red-800">Talking About Sabuba.</span>
            </h2>
            <div className="w-16 h-1 bg-red-700 rounded-full" />
          </div>

          {/* 6 Embed Playable TikTok Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {tiktokVideos.map((vid, idx) => (
              <TikTokCard key={idx} video={vid} />
            ))}
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
            <DataBadge type="ACTUAL" text="KLASTER OPERASIONAL SIDOARJO" />
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              Start Where We <span className="text-red-800">Know The Market.</span>
            </h2>
            <div className="w-20 h-1.5 bg-red-700 rounded-full" />
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              Sidoarjo dipilih sebagai titik awal ekspansi (beachhead) karena keberadaan basis operasional &amp; Central Kitchen pertama Sabuba.
            </p>
            <div className="p-4 rounded-2xl bg-red-900 text-white font-bold text-xs space-y-1">
              <div className="text-amber-300 font-extrabold uppercase">Rute Ekspansi Regional:</div>
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
    // Slide 12: TAM / SAM / SOM (BPS WATERFALL DATA)
    // ----------------------------------------------------
    {
      id: 'slide-12-tam-sam-som-bps',
      title: 'TAM / SAM / SOM (PROYEKSI DATA BPS)',
      content: (
        <div className="space-y-5 h-full flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2">
            <DataBadge type="ACTUAL" text="DATA MAKRO BPS RI &amp; BPS SIDOARJO" />
            <DataBadge type="ASSUMPTION" text="TOP-DOWN WATERFALL MODEL" />
          </div>

          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              A Big Market. <span className="text-red-800">A Focused Entry.</span>
            </h2>
            <div className="w-20 h-1.5 bg-red-700 rounded-full" />
            <p className="text-slate-700 text-xs sm:text-sm font-medium">
              Data resmi BPS menurunkan estimasi potensi pasar secara sistematis dari tingkat Nasional, Regional Jawa Timur, hingga penetrasi lokal Kabupaten Sidoarjo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* TAM - Nasional BPS */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-red-800 uppercase">TAM (Nasional BPS)</span>
                <span className="text-[10px] bg-red-50 text-red-800 px-2 py-0.5 rounded font-bold">BPS RI 2023</span>
              </div>
              <h4 className="font-black text-slate-900 text-2xl">Rp 120+ Triliun</h4>
              <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                <li>• Total Populasi Indonesia: <strong>278,7 Juta Jiwa</strong></li>
                <li>• Pengeluaran Makanan Jadi: Rp 425.000+/bln/jiwa</li>
                <li>• Pasar konsumsi makanan siap saji &amp; sarapan pagi harian nasional.</li>
              </ul>
            </div>

            {/* SAM - Jawa Timur BPS */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-red-800 uppercase">SAM (Jawa Timur BPS)</span>
                <span className="text-[10px] bg-red-50 text-red-800 px-2 py-0.5 rounded font-bold">BPS JATIM</span>
              </div>
              <h4 className="font-black text-slate-900 text-2xl">Rp 8,4 Triliun</h4>
              <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                <li>• Populasi Jawa Timur: <strong>41,4 Juta Jiwa</strong></li>
                <li>• Urban Gerbangkertosusila: 12,8 Juta</li>
                <li>• Partisipasi Sarapan Luar Rumah: ~42% warga perkotaan.</li>
              </ul>
            </div>

            {/* SOM - Sidoarjo Beachhead */}
            <div className="p-5 rounded-3xl bg-red-900 text-white shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 uppercase">SOM (Klaster Sidoarjo)</span>
                <span className="text-[10px] bg-red-800 text-amber-300 px-2 py-0.5 rounded font-bold">TARGET 20 UNIT</span>
              </div>
              <h4 className="font-black text-amber-400 text-2xl">Rp 21,6 Miliar/thn</h4>
              <ul className="text-xs text-red-100 space-y-1.5 font-medium">
                <li>• Populasi Kab. Sidoarjo: <strong>2.082.800 Jiwa</strong> (BPS 2023)</li>
                <li>• Angkatan Kerja Pagi: ~1.15 Juta</li>
                <li>• Target SOM: 20 Unit Sabuba Classic × 150 Pack/hari × Rp 20.000 APC.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 13: FEASIBILITY STUDY (SIMULASI KEUANGAN - PACK TERMINOLOGY & DISCLAIMER)
    // ----------------------------------------------------
    {
      id: 'slide-13-feasibility-study',
      title: 'Feasibility Study',
      content: (
        <div className="space-y-4 h-full flex flex-col justify-center">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <DataBadge type="ASSUMPTION" text="SIMULASI KEUANGAN SABUBA CLASSIC" />
              <DataBadge type="ASSUMPTION" text="CAPEX RP 100M | HPP 40% | OPEX ~15%" />
            </div>
            <span className="text-xs font-bold text-red-800">Unit: PACK</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
                Feasibility Study
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">Simulasi Keuangan Sabuba Classic (Skema Bagi Hasil 50% : 50%)</p>
            </div>
            
            {/* Scenario Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl self-start sm:self-auto">
              {feasibilityScenarios.map((sc, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScenarioIdx(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                    activeScenarioIdx === idx
                      ? 'bg-red-800 text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {sc.name}
                </button>
              ))}
            </div>
          </div>

          {/* Full Feasibility Study Breakdown Table */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-x-auto">
            {(() => {
              const sc = feasibilityScenarios[activeScenarioIdx];
              return (
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 uppercase font-black">
                      <th className="py-2 px-3">Komponen Keuangan</th>
                      <th className="py-2 px-3 text-right">Per Hari</th>
                      <th className="py-2 px-3 text-right">Per Bulan (30 Hari)</th>
                      <th className="py-2 px-3 text-right">Per Tahun</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                    <tr>
                      <td className="py-2 px-3 font-bold text-slate-900">Target Transaksi Penjualan (@ Rp 20.000 / Pack)</td>
                      <td className="py-2 px-3 text-right font-black text-red-800">{sc.tcDay} Pack</td>
                      <td className="py-2 px-3 text-right font-black text-red-800">{sc.tcMonth.toLocaleString()} Pack</td>
                      <td className="py-2 px-3 text-right font-black text-red-800">{(sc.tcMonth * 12).toLocaleString()} Pack</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="py-2 px-3 font-bold text-slate-900">Gross Sales / Total Omset Penjualan</td>
                      <td className="py-2 px-3 text-right font-black">{formatRupiah(sc.salesDay)}</td>
                      <td className="py-2 px-3 text-right font-black">{formatRupiah(sc.salesMonth)}</td>
                      <td className="py-2 px-3 text-right font-black">{formatRupiah(sc.salesYear)}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-slate-600">HPP / COGS (Bahan Baku Utama 40%)</td>
                      <td className="py-2 px-3 text-right text-slate-600">{formatRupiah(sc.salesDay * 0.4)}</td>
                      <td className="py-2 px-3 text-right text-slate-600">{formatRupiah(sc.hppAmount)}</td>
                      <td className="py-2 px-3 text-right text-slate-600">{formatRupiah(sc.hppAmount * 12)}</td>
                    </tr>
                    <tr className="font-bold text-slate-900 bg-red-50/40">
                      <td className="py-2 px-3">Laba Kotor (Gross Profit 60%)</td>
                      <td className="py-2 px-3 text-right">{formatRupiah(sc.salesDay * 0.6)}</td>
                      <td className="py-2 px-3 text-right">{formatRupiah(sc.grossProfitAmount)}</td>
                      <td className="py-2 px-3 text-right">{formatRupiah(sc.grossProfitAmount * 12)}</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 px-3 text-slate-500 pl-6">• Gaji Karyawan Operasional (HQ)</td>
                      <td className="py-1.5 px-3 text-right text-slate-500">{formatRupiah(sc.opsKaryawan / 30)}</td>
                      <td className="py-1.5 px-3 text-right text-slate-500">{formatRupiah(sc.opsKaryawan)}</td>
                      <td className="py-1.5 px-3 text-right text-slate-500">{formatRupiah(sc.opsKaryawan * 12)}</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 px-3 text-slate-500 pl-6">• Perlengkapan &amp; Ops Rumah Tangga</td>
                      <td className="py-1.5 px-3 text-right text-slate-500">{formatRupiah(sc.opsRumahTangga / 30)}</td>
                      <td className="py-1.5 px-3 text-right text-slate-500">{formatRupiah(sc.opsRumahTangga)}</td>
                      <td className="py-1.5 px-3 text-right text-slate-500">{formatRupiah(sc.opsRumahTangga * 12)}</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 px-3 text-slate-500 pl-6">• Listrik, Air, Fuel &amp; Gas Utilitas</td>
                      <td className="py-1.5 px-3 text-right text-slate-500">{formatRupiah(sc.opsListrikAirFuel / 30)}</td>
                      <td className="py-1.5 px-3 text-right text-slate-500">{formatRupiah(sc.opsListrikAirFuel)}</td>
                      <td className="py-1.5 px-3 text-right text-slate-500">{formatRupiah(sc.opsListrikAirFuel * 12)}</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="py-2 px-3 font-bold text-slate-800">Total OPEX (Operasional Outlet ~15%)</td>
                      <td className="py-2 px-3 text-right font-bold">{formatRupiah(sc.totalOpsAmount / 30)}</td>
                      <td className="py-2 px-3 text-right font-bold">{formatRupiah(sc.totalOpsAmount)}</td>
                      <td className="py-2 px-3 text-right font-bold">{formatRupiah(sc.totalOpsAmount * 12)}</td>
                    </tr>
                    <tr className="bg-red-900 text-white font-black">
                      <td className="py-2.5 px-3">EBITDA Store Net Profit (45%)</td>
                      <td className="py-2.5 px-3 text-right">{formatRupiah(sc.ebitdaNetProfitStore / 30)}</td>
                      <td className="py-2.5 px-3 text-right">{formatRupiah(sc.ebitdaNetProfitStore)}</td>
                      <td className="py-2.5 px-3 text-right">{formatRupiah(sc.ebitdaNetProfitStore * 12)}</td>
                    </tr>
                    <tr className="bg-amber-500/20 text-amber-950 font-black">
                      <td className="py-2.5 px-3">Bagi Hasil Mitra Pasif (50% Shared Profit)</td>
                      <td className="py-2.5 px-3 text-right">{formatRupiah(sc.mitraShare50 / 30)}</td>
                      <td className="py-2.5 px-3 text-right text-red-900 font-black text-sm">{formatRupiah(sc.mitraShare50)} / bln</td>
                      <td className="py-2.5 px-3 text-right text-red-900 font-black text-sm">{formatRupiah(sc.mitraShare50 * 12)} / thn</td>
                    </tr>
                  </tbody>
                </table>
              );
            })()}
          </div>

          {/* User Requested Disclaimer Box */}
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-950 text-xs font-semibold leading-relaxed flex items-start gap-2">
            <Info className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
            <div>
              <strong>Disclaimer Simulasi Keuangan:</strong> Angka di atas merupakan simulasi keuangan berdasarkan data penjualan historis yang sudah ada. Banyak faktor operasional, cuaca, &amp; lokasi yang mempengaruhi penjualan di lapangan, sehingga tidak ada jaminan kepastian hasil.
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 14: LAPORAN LABA RUGI OUTLET (JL. A YANI SIDOARJO)
    // ----------------------------------------------------
    {
      id: 'slide-14-laporan-laba-rugi-ayani',
      title: 'Laporan Laba Rugi Outlet (Jl. A Yani)',
      content: (
        <div className="space-y-4 h-full flex flex-col justify-center">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <DataBadge type="ACTUAL" text="DATA KINERJA KEUANGAN REAL HISTORIS" />
              <DataBadge type="ACTUAL" text="OUTLET JL. A YANI SIDOARJO" />
            </div>
            <span className="text-xs font-bold text-red-800">POS Cloud Sync System</span>
          </div>

          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Laporan Laba Rugi Outlet (Jl. A Yani)
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Realisasi Keuangan Real Outlet Utama Sidoarjo (Mei, Juni, &amp; Agustus 2026)</p>
          </div>

          {/* Full Itemized P&L Historical Table */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 uppercase font-black">
                  <th className="py-2.5 px-3">Komponen Laba Rugi</th>
                  <th className="py-2.5 px-3 text-right">Mei 2026</th>
                  <th className="py-2.5 px-3 text-right">Juni 2026</th>
                  <th className="py-2.5 px-3 text-right bg-red-800 text-white rounded-t-lg">Agustus 2026 (PUNCAK OMSET 🔥)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                <tr className="bg-slate-50/50 font-black">
                  <td className="py-2.5 px-3 font-bold text-slate-900 text-sm">Gross Sales (Total Omset Real)</td>
                  <td className="py-2.5 px-3 text-right text-sm">{formatRupiah(71680000)}</td>
                  <td className="py-2.5 px-3 text-right text-sm">{formatRupiah(66792000)}</td>
                  <td className="py-2.5 px-3 text-right text-red-900 font-black text-base bg-red-50/80">{formatRupiah(80108009)}</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-slate-600">HPP / COGS (Bahan Baku Utama ~40%)</td>
                  <td className="py-2 px-3 text-right text-slate-600">{formatRupiah(28672000)}</td>
                  <td className="py-2 px-3 text-right text-slate-600">{formatRupiah(26716800)}</td>
                  <td className="py-2 px-3 text-right text-slate-700 bg-red-50/30">{formatRupiah(32043204)}</td>
                </tr>
                <tr className="font-bold text-slate-900 bg-slate-100/60">
                  <td className="py-2 px-3">Gross Profit (Laba Kotor ~60%)</td>
                  <td className="py-2 px-3 text-right">{formatRupiah(43008000)}</td>
                  <td className="py-2 px-3 text-right">{formatRupiah(40075200)}</td>
                  <td className="py-2 px-3 text-right font-black bg-red-50/50">{formatRupiah(48064805)}</td>
                </tr>
                <tr>
                  <td className="py-1.5 px-3 text-slate-500 pl-6">• Gaji Karyawan Operasional</td>
                  <td className="py-1.5 px-3 text-right text-slate-500">{formatRupiah(3000000)}</td>
                  <td className="py-1.5 px-3 text-right text-slate-500">{formatRupiah(2500000)}</td>
                  <td className="py-1.5 px-3 text-right text-slate-500 bg-red-50/20">{formatRupiah(4500000)}</td>
                </tr>
                <tr>
                  <td className="py-1.5 px-3 text-slate-500 pl-6">• Utilitas, Listrik, Air, Fuel &amp; Misc</td>
                  <td className="py-1.5 px-3 text-right text-slate-500">{formatRupiah(1384500)}</td>
                  <td className="py-1.5 px-3 text-right text-slate-500">{formatRupiah(958200)}</td>
                  <td className="py-1.5 px-3 text-right text-slate-500 bg-red-50/20">{formatRupiah(3387296)}</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-2 px-3 font-bold text-slate-800">Total OPEX (Beban Operasional Real)</td>
                  <td className="py-2 px-3 text-right font-bold">{formatRupiah(4384500)}</td>
                  <td className="py-2 px-3 text-right font-bold">{formatRupiah(3458200)}</td>
                  <td className="py-2 px-3 text-right font-bold bg-red-50/40">{formatRupiah(7887296)}</td>
                </tr>
                <tr className="bg-red-900 text-white font-black">
                  <td className="py-3 px-3 text-sm">EBITDA Store Net Profit Real</td>
                  <td className="py-3 px-3 text-right text-sm">{formatRupiah(38623500)}</td>
                  <td className="py-3 px-3 text-right text-sm">{formatRupiah(36617000)}</td>
                  <td className="py-3 px-3 text-right text-base text-amber-300 font-black bg-red-950">{formatRupiah(40177509)}</td>
                </tr>
                <tr className="bg-amber-500/20 text-amber-950 font-black">
                  <td className="py-2.5 px-3">Margin Persentase Laba Bersih Store</td>
                  <td className="py-2.5 px-3 text-right">53.9%</td>
                  <td className="py-2.5 px-3 text-right">54.8%</td>
                  <td className="py-2.5 px-3 text-right text-red-900 font-black text-sm bg-amber-500/30">50.1% Net Margin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 15: THE PARTNERSHIP MODEL
    // ----------------------------------------------------
    {
      id: 'slide-15-partnership-model',
      title: 'THE PARTNERSHIP MODEL',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          <div className="lg:col-span-5 space-y-5">
            <DataBadge type="ACTUAL" text="PENAWARAN KEMITRAAN RESMI" />
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              A Business System, <br />
              <span className="text-red-800">Not Just A Package.</span>
            </h2>
            <div className="w-20 h-1.5 bg-red-700 rounded-full" />
            <p className="text-slate-700 text-sm font-medium leading-relaxed">
              Skema kemitraan pasif yang dirancang transparan, akuntabel, dan didukung penuh oleh tim operasional profesional HQ Sabuba.
            </p>
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-950 text-xs font-semibold leading-relaxed">
              ⚠️ <strong>Prinsip Transparansi:</strong> Sabuba tidak menggunakan klaim "guaranteed profit" atau "guaranteed ROI". Keuntungan didasarkan pada performa riil outlet &amp; laporan POS Cloud transparan 24/7.
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-2">
              <span className="text-xs font-bold text-red-800 uppercase">Modal Awal CAPEX</span>
              <h4 className="text-2xl font-black text-slate-900">Rp 100.000.000</h4>
              <p className="text-xs text-slate-500">Unit Sabuba Classic, peralatan kitchen lengkap, branding, &amp; sistem POS.</p>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-2">
              <span className="text-xs font-bold text-red-800 uppercase">Nisbah Bagi Hasil</span>
              <h4 className="text-2xl font-black text-slate-900">50% : 50%</h4>
              <p className="text-xs text-slate-500">Pembagian laba bersih toko antara Mitra Pasif &amp; Pengelola HQ.</p>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-2">
              <span className="text-xs font-bold text-red-800 uppercase">Manajemen Operasional</span>
              <h4 className="text-2xl font-black text-slate-900">100% HQ Managed</h4>
              <p className="text-xs text-slate-500">Rekrutmen crew, suplai bahan, &amp; operasional harian diurus tim HQ.</p>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-2">
              <span className="text-xs font-bold text-red-800 uppercase">Transparansi Penjualan</span>
              <h4 className="text-2xl font-black text-slate-900">POS Cloud 24/7</h4>
              <p className="text-xs text-slate-500">Akses langsung ke aplikasi kasir cloud untuk memantau omset real-time.</p>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 16: HOW WE SCALE
    // ----------------------------------------------------
    {
      id: 'slide-16-how-we-scale',
      title: 'HOW WE SCALE (SCALING ENGINE)',
      content: (
        <div className="space-y-6 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <DataBadge type="TARGET" text="8-STEP STRATEGIC SCALING ENGINE" />
          </div>

          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              One Proven Unit → <br />
              <span className="text-red-800">Repeatable Clusters → Network.</span>
            </h2>
            <div className="w-20 h-1.5 bg-red-700 rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-xs font-bold text-red-800">STEP 1</div>
              <h4 className="font-extrabold text-slate-900 text-sm">Prove Unit Economics</h4>
              <p className="text-xs text-slate-500">Validasi omset &amp; profit di cluster Sidoarjo.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-xs font-bold text-red-800">STEP 2</div>
              <h4 className="font-extrabold text-slate-900 text-sm">Standardize Operations</h4>
              <p className="text-xs text-slate-500">Pembekuan SOP &amp; resep Central Kitchen.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-xs font-bold text-red-800">STEP 3</div>
              <h4 className="font-extrabold text-slate-900 text-sm">Strengthen Kitchen</h4>
              <p className="text-xs text-slate-500">Peningkatan kapasitas produksi bumbu induk.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-xs font-bold text-red-800">STEP 4</div>
              <h4 className="font-extrabold text-slate-900 text-sm">Build Cluster Density</h4>
              <p className="text-xs text-slate-500">Penambahan 20+ unit di Jawa Timur.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-xs font-bold text-red-800">STEP 5</div>
              <h4 className="font-extrabold text-slate-900 text-sm">Sabuba Point Launch</h4>
              <p className="text-xs text-slate-500">Uji coba booth &amp; pick-up window modern.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-xs font-bold text-red-800">STEP 6</div>
              <h4 className="font-extrabold text-slate-900 text-sm">Geographical Expansion</h4>
              <p className="text-xs text-slate-500">Penetrasi kota-kota besar di Pulau Jawa.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-xs font-bold text-red-800">STEP 7</div>
              <h4 className="font-extrabold text-slate-900 text-sm">Sabuba House Pilot</h4>
              <p className="text-xs text-slate-500">Peluncuran flagship dine-in restaurant.</p>
            </div>
            <div className="p-4 rounded-2xl bg-red-900 text-white shadow-xl space-y-2">
              <div className="text-xs font-bold text-amber-300">STEP 8</div>
              <h4 className="font-extrabold text-white text-sm">National Brand</h4>
              <p className="text-xs text-slate-200">Top of mind sarapan keluarga Indonesia.</p>
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 17: THE ROADMAP
    // ----------------------------------------------------
    {
      id: 'slide-17-roadmap',
      title: 'THE ROADMAP',
      content: (
        <div className="space-y-6 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <DataBadge type="TARGET" text="TIMELINE EKSPANSI STRATEGIS" />
          </div>

          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              From Sidoarjo <span className="text-red-800">To Indonesia.</span>
            </h2>
            <div className="w-20 h-1.5 bg-red-700 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3 relative">
              <span className="text-2xl font-black text-red-800">2026</span>
              <h4 className="font-extrabold text-slate-900">Validation Phase</h4>
              <p className="text-xs text-slate-600">Validasi rasa, sistem SOP, &amp; unit economics Sabuba Classic di Sidoarjo.</p>
              <DataBadge type="ACTUAL" text="CURRENT PHASE" />
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3 relative">
              <span className="text-2xl font-black text-red-800">2027</span>
              <h4 className="font-extrabold text-slate-900">Regional Cluster</h4>
              <p className="text-xs text-slate-600">Ekspansi jaringan Sabuba Classic &amp; Sabuba Point di wilayah Jawa Timur.</p>
              <DataBadge type="TARGET" text="TARGET 50+ UNITS" />
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3 relative">
              <span className="text-2xl font-black text-red-800">2028</span>
              <h4 className="font-extrabold text-slate-900">Sabuba House Pilot</h4>
              <p className="text-xs text-slate-600">Peluncuran outlet dine-in Sabuba House pertama untuk pengalaman sarapan keluarga.</p>
              <DataBadge type="CONCEPT" text="FLAGSHIP DINE-IN" />
            </div>

            <div className="p-6 rounded-3xl bg-red-900 text-white shadow-2xl space-y-3 relative">
              <span className="text-2xl font-black text-amber-300">2029+</span>
              <h4 className="font-extrabold text-white">National Network</h4>
              <p className="text-xs text-slate-200">Ekspansi ke seluruh kota besar di Indonesia sebagai brand sarapan nasional.</p>
              <DataBadge type="TARGET" text="NATIONAL BRAND" />
            </div>
          </div>
        </div>
      )
    },

    // ----------------------------------------------------
    // Slide 18: CLOSING & CTA
    // ----------------------------------------------------
    {
      id: 'slide-18-closing',
      title: 'CLOSING — FROM ONE BOWL TO A NATIONAL BRAND',
      content: (
        <div className="space-y-6 h-full flex flex-col justify-center text-center items-center max-w-4xl mx-auto">
          <DataBadge type="ACTUAL" text="PESAN UTAMA BRAND" />

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tight"
          >
            FROM ONE BOWL <br />
            TO A <span className="text-red-800">NATIONAL INDONESIAN</span> FOOD BRAND.
          </motion.h1>
          <div className="w-24 h-1.5 bg-red-700 rounded-full mx-auto" />

          <p className="text-slate-700 text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
            Sabuba dimulai dari satu kebutuhan sederhana: <strong>sarapan hangat untuk keluarga Indonesia.</strong> Hari ini kami membangun unit pertama. Besok kami membangun sistem. Dan berikutnya, kami membangun brand nasional.
          </p>

          <div className="p-6 rounded-3xl bg-red-950 text-white w-full max-w-2xl space-y-4 shadow-2xl border border-red-900">
            <h3 className="text-xl font-extrabold text-amber-300">Partner With Sabuba Today</h3>
            <p className="text-xs text-slate-200 font-medium">Bergabunglah sebagai mitra pasif awal dalam membangun brand kuliner sarapan Indonesia masa depan.</p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="https://wa.me/6281359180156?text=Halo%20HQ%20Sabuba,%20saya%20tertarik%20diskusi%20kemitraan%20Sabuba%20Classic"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 text-red-950 font-black text-sm flex items-center gap-2 shadow-lg transition-all"
              >
                <span>Konsultasi via WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-red-800" />
              </a>

              <button
                onClick={() => window.print()}
                className="px-6 py-3 rounded-2xl bg-red-800 hover:bg-red-700 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg transition-all border border-red-700"
              >
                <Download className="w-4 h-4" />
                <span>Export PDF Proposal</span>
              </button>
            </div>
          </div>

          <div className="text-xs text-slate-500 font-semibold pt-2">
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
        
        {/* Main Deck Container (Clean White Canvas) */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className={`w-full bg-white text-slate-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 transition-all relative ${
            isFullscreen ? 'h-screen w-screen rounded-none' : 'max-w-6xl h-[92vh]'
          }`}
        >

          {/* Background Wave & Red Gradient Ornaments */}
          <BackgroundWave />

          {/* Top Bar Header */}
          <div className="px-6 py-4 bg-white/90 border-b border-slate-200 flex items-center justify-between z-20 shrink-0 shadow-xs backdrop-blur-md">
            <div className="flex items-center gap-3">
              <SabubaLogo className="h-8 w-auto" />
              <div className="h-4 w-px bg-slate-300 hidden sm:block" />
              <div>
                <h3 className="font-black text-sm text-slate-900 tracking-tight">SABUBA Presentation System</h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  Slide {currentSlide + 1} / {slides.length}: <span className="text-red-800 font-bold">{currentSlideObj.title}</span>
                </p>
              </div>
            </div>

            {/* Header Action Buttons */}
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
                className="px-4 py-2 rounded-xl bg-red-800 hover:bg-red-900 text-white text-xs font-black flex items-center gap-2 transition-all shadow-md"
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
          <div className="p-6 sm:p-10 flex-1 overflow-y-auto flex flex-col justify-center relative z-10">
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
          <div className="px-6 py-4 bg-white/90 border-t border-slate-200 flex items-center justify-between z-20 shrink-0 backdrop-blur-md">
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
                      ? 'w-6 bg-red-800'
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
                  : 'bg-red-800 hover:bg-red-900 text-white shadow-md'
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
