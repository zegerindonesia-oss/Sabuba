export const SABUBA_DATA = {
  brand: {
    name: "Bubur Bakar Sabuba",
    shortName: "Sabuba",
    tagline: "Sarapan Bubur Bakar - Hangat, Lezat, & Beraroma Khas Claypot",
    subtagline: "Bubur Bakar • Wonton • Laksa",
    promoText: "PROMO SARAPAN HEMAT MULAI Rp 10.000",
    operatingHours: "Setiap Hari | 06:00 - 11:00 WIB",
    halalCert: "100% Halal & Bahan Segar Pilihan",
    whatsapp: "6281359180156",
  },
  menuCategories: [
    { id: "all", name: "Semua Menu" },
    { id: "bubur", name: "Bubur Bakar Claypot" },
    { id: "wonton", name: "Wonton & Laksa" },
    { id: "zeger", name: "Paket Combo Zeger!" },
    { id: "topping", name: "Ekstra Topping" },
  ],
  menuItems: [
    {
      id: "bb-special",
      category: "bubur",
      name: "Bubur Bakar Special Sabuba",
      price: 12000,
      promoPrice: 10000,
      image: "/assets/Foto Menu (1).png",
      description: "Bubur gurih pilihan dimasak langsung dalam mangkuk tanah liat (claypot) di atas tungku api. Dilengkapi telur rebus mulus, ayam suwir gurih, kerupuk pangsit renyah, jagung manis, dan irisan daun bawang.",
      isBestSeller: true,
      spicyLevel: 0,
      toppingsIncluded: ["Telur Rebus Utuh", "Ayam Suwir Gurih", "Pangsit Renyah", "Jagung Manis", "Daun Bawang"]
    },
    {
      id: "bb-daging",
      category: "bubur",
      name: "Bubur Bakar Daging Sapi Chili Oil",
      price: 16000,
      promoPrice: 14000,
      image: "/assets/Foto Menu (2).png",
      description: "Variasi bubur bakar istimewa dengan irisan daging sapi empuk berbumbu khas, telur setengah matang lelehan kuning gurih, dicipratan minyak cabai (chili oil) beraroma harum membakar.",
      isBestSeller: true,
      spicyLevel: 2,
      toppingsIncluded: ["Telur Half-Boiled", "Slice Daging Sapi", "Chili Oil Spesial", "Pangsit Goreng", "Jagung Bakar"]
    },
    {
      id: "bb-telur-setengah-matang",
      category: "bubur",
      name: "Bubur Bakar Telur Leleh & Rempah",
      price: 14000,
      promoPrice: 12000,
      image: "/assets/Foto Menu (3).png",
      description: "Aroma smoky tanah liat yang berpadu dengan rempah bumbu rahasia Sabuba. Telur leleh dimasukkan saat claypot mendidih panas memberikan sensasi creamy sempurna.",
      isBestSeller: false,
      spicyLevel: 1,
      toppingsIncluded: ["Telur Leleh Hot Claypot", "Ayam Suwir Rempah", "Cakwe Renyah", "Daun Bawang & Bawang Goreng"]
    },
    {
      id: "bb-komplit",
      category: "bubur",
      name: "Bubur Bakar Komplit Sarapan Pagi",
      price: 15000,
      promoPrice: 13000,
      image: "/assets/Foto Menu (4).png",
      description: "Pilihan paling pas untuk sarapan energi penuh! Porsi mantap dengan topping melimpah ganda: telur rebus, suwiran daging, pangsit kriuk, dan kuah kaldu rempah hangat.",
      isBestSeller: false,
      spicyLevel: 0,
      toppingsIncluded: ["Telur Rebus Utuh", "Ayam & Daging Mix", "Pangsit Double", "Emping/Kerupuk"]
    },
    {
      id: "wonton-soup",
      category: "wonton",
      name: "Wonton Soup Kaldu Ayam Juara",
      price: 14000,
      promoPrice: 12000,
      image: "/assets/Foto Menu (5).png",
      description: "Pangsit daging lembut isi tebal disajikan dalam kuah kaldu ayam bening yang kaya akan nutrisi dan aroma minyak wijen segar.",
      isBestSeller: true,
      spicyLevel: 0,
      toppingsIncluded: ["5 Pcs Wonton Daging Tebal", "Kuah Kaldu Ayam Bening", "Sayur Pokcoy Segar", "Minyak Wijen"]
    },
    {
      id: "wonton-chili-oil",
      category: "wonton",
      name: "Wonton Chili Oil Pedas Gurih",
      price: 15000,
      promoPrice: 13000,
      image: "/assets/Foto Menu (6).png",
      description: "Wonton rebus lembut yang dibaluri racikan Chili Oil merah merona khas Sabuba. Rasa pedas, gurih, dan asam segar yang membangkitkan semangat pagi.",
      isBestSeller: true,
      spicyLevel: 3,
      toppingsIncluded: ["5 Pcs Wonton Daging", "Chili Oil House-Blend", "Taburan Daun Bawang & Biji Wijen"]
    },
    {
      id: "laksa-sabuba",
      category: "wonton",
      name: "Laksa Rempah Spesial Sabuba",
      price: 18000,
      promoPrice: 15000,
      image: "/assets/Foto Menu (7).png",
      description: "Mie laksa lembut dengan kuah santan kaya bumbu rempah khas nusantara. Dilengkapi potongan tahu pong, telur rebus, dan suwiran ayam gurih.",
      isBestSeller: false,
      spicyLevel: 2,
      toppingsIncluded: ["Mie Laksa Soft", "Kuah Santan Rempah", "Tahu Pong & Telur Rebus", "Ayam Suwir & Emping"]
    },
    {
      id: "combo-zeger-1",
      category: "zeger",
      name: "Combo Mantap: Bubur Bakar Special + Zeger! Coffee",
      price: 22000,
      promoPrice: 18000,
      image: "/assets/Konsep/4. Trial Zeger X Sabuba.png",
      description: "Perpaduan kehangatan Bubur Bakar Special Claypot dan kesegaran Kopi Susu Aren Zeger! Kolaborasi resmi tempat nongkrong sarapan kekinian.",
      isBestSeller: true,
      spicyLevel: 0,
      toppingsIncluded: ["1x Bubur Bakar Special", "1x Zeger! Es Kopi Susu Aren"]
    },
    {
      id: "combo-zeger-2",
      category: "zeger",
      name: "Combo Pedas: Wonton Chili Oil + Zeger! Tea Segar",
      price: 21000,
      promoPrice: 17000,
      image: "/assets/Foto Menu (6).png",
      description: "Sensasi pedas nagih Wonton Chili Oil dipadukan dengan Es Teh Lemon Zeger! dingin penyeimbang dahaga.",
      isBestSeller: false,
      spicyLevel: 3,
      toppingsIncluded: ["1x Wonton Chili Oil", "1x Zeger! Lemon Tea Ice"]
    }
  ],
  extraToppings: [
    { id: "t-telur-rebus", name: "Telur Rebus Utuh", price: 3000 },
    { id: "t-telur-half", name: "Telur Half-Boiled (Leleh)", price: 3500 },
    { id: "t-daging-sapi", name: "Extra Daging Sapi Slice", price: 5000 },
    { id: "t-ayam-suwir", name: "Extra Ayam Suwir Gurih", price: 4000 },
    { id: "t-pangsit", name: "Pangsit Goreng Renyah (1 Porsi)", price: 3000 },
    { id: "t-chili-oil", name: "Chili Oil Extra Shot", price: 2000 },
  ],
  concepts: [
    {
      id: "tenda",
      title: "Konsep Tenda Sarapan Outdoor",
      tagline: "Merakyat, Ramai, & Menghadirkan Suasana Sarapan Pagi Yang Hangat",
      image: "/assets/Konsep/1. Konsep Tenda.png",
      description: "Konsep tenda modern yang fleksibel untuk area pinggir jalan utama atau area permukiman. Mengutamakan servis cepat dan suasana akrab bagi pelanggan sarapan.",
      highlights: ["Investasi Awal Rendah", "Setup Cepat & Portable", "Sangat Disukai Komunitas Sarapan Pagi"]
    },
    {
      id: "restaurant",
      title: "Konsep Modern Restaurant",
      tagline: "Dine-In Nyaman dengan Sentuhan Kayu Warm Aesthetic & Pick-up Window",
      image: "/assets/Konsep/2. Konsep Restaurant.png",
      description: "Outlet permanen berdesain modern industrial dengan warna khas crimson red Sabuba. Dilengkapi jendela Pick-Up Khusus untuk takeaway dan ojek online.",
      highlights: ["Dine-In Kapasitas Luas", "Fasilitas AC & Clean Kitchen", "Daya Tarik Visual Foto Instagramable"]
    },
    {
      id: "booth",
      title: "Konsep Compact Booth",
      tagline: "Solusi Efisien untuk Area Komersial, Ruko, & Foodcourt",
      image: "/assets/Konsep/3. Konsep Booth.png",
      description: "Booth modular berbahan kayu & kontainer modern yang bersih, efisien, dan menarik perhatian para pembeli lalu lalang.",
      highlights: ["Space Efisien (3x2 meter)", "Operasional Sangat Mudah", "Tampilan Premium Signage Menyala"]
    },
    {
      id: "zeger-collab",
      title: "Kolaborasi Zeger! Coffee X Sabuba",
      tagline: "Sinergi Sarapan Bubur Bakar & Minuman Kopi Kekinian",
      image: "/assets/Konsep/4. Trial Zeger X Sabuba.png",
      description: "Inovasi gabungan dua brand favorit anak muda dan keluarga. Menghadirkan pilihan menu lengkap sarapan + ngopi santai di lokasi yang sama.",
      highlights: ["Double Revenue Stream", "Target Pasar Luas (Sarapan & Hangout)", "Dukungan Pemasaran Bersama"]
    }
  ],
  outlets: [
    {
      id: "out-ayani",
      name: "SABUBA SARAPAN BUBUR BAKAR CAB A.YANI",
      address: "Jl. Ahmad Yani (Depan Warung Leko Sidoarjo)",
      city: "Sidoarjo",
      hours: "06.00 - 09.00 WIB",
      status: "Buka Sarapan Pagi",
      mapsUrl: "https://maps.google.com/?q=Warung+Leko+Sidoarjo",
      image: "/assets/unnamed (3).webp",
      whatsapp: "6281359180156"
    },
    {
      id: "out-rsud",
      name: "SABUBA SARAPAN BUBUR BAKAR CAB RSUD",
      address: "Kantin RSUD Sidoarjo",
      city: "Sidoarjo",
      hours: "07.00 - 16.00 WIB",
      status: "Buka Setiap Hari",
      mapsUrl: "https://maps.google.com/?q=RSUD+Sidoarjo",
      image: "/assets/unnamed (2).webp",
      whatsapp: "6281359180156"
    },
    {
      id: "out-zeger-kemiri",
      name: "SABUBA SARAPAN BUBUR BAKAR x Zeger Coffee",
      address: "Perumahan Kemiri Indah Blok C7 No. 8 Sidoarjo",
      city: "Sidoarjo",
      hours: "09.00 - 21.00 WIB",
      status: "Buka Sarapan & Cafe",
      mapsUrl: "https://maps.google.com/?q=Perumahan+Kemiri+Indah+Blok+C7+No+8+Sidoarjo",
      image: "/assets/Konsep/4. Trial Zeger X Sabuba.png",
      whatsapp: "6281359180156"
    }
  ],
  testimonials: [
    {
      id: "t1",
      name: "Budi Santoso",
      role: "Pelanggan Setia Sidoarjo",
      comment: "Bubur bakarnya smoky banget karena dimasak pakai claypot! Telur setengah matangnya leleh pas diaduk hangat-hangat. Wajib coba!",
      rating: 5
    },
    {
      id: "t2",
      name: "Siti Rahmawati",
      role: "Foodie Kuliner Sidoarjo",
      comment: "Gak cuma bubur, Wonton Chili Oil-nya Sabuba itu juara pedes gurihnya! Harganya terjangkau banget cuma 10 ribuan pas promo.",
      rating: 5
    },
    {
      id: "t3",
      name: "Dedi Kurniawan",
      role: "Mitra Kemitraan Usaha",
      comment: "Bergabung jadi mitra Sabuba keputusannya tepat banget. Sistem operasionalnya simpel, produknya disukai banyak orang.",
      rating: 5
    }
  ]
};

export const formatRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const SIGNATURE_ITEMS = SABUBA_DATA.menuItems.filter(item => item.isBestSeller || item.promoPrice);
