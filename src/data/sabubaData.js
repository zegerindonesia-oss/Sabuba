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
  // Target Google Sheet for customer and transaction data auto-sync:
  // https://docs.google.com/spreadsheets/d/1PSbBSYxsLbXBgzwoBS3Xm1i_C-nLYCffXXGeIJ5tbHA/edit#gid=0
  appScriptUrl: "https://script.google.com/macros/s/AKfycbxiOagkGeuiCq6xwTeeV5xGb8dyUJIoVeclgBjPJs86ruMcc2W46ZI8CvyZlBGUrz4Uiw/exec",
  menuCategories: [
    { id: "all", name: "Semua Menu" },
    { id: "bubur", name: "Bubur Bakar" },
    { id: "wonton", name: "Dim Sum & Wonton" },
    { id: "topping", name: "Ekstra Topping" },
    { id: "minuman", name: "Minuman & Kopi" },
  ],
  menuItems: [
    {
      id: "bb-polos",
      category: "bubur",
      subcategory: "BUBUR",
      name: "Bubur Polos (Bubur Saja)",
      price: 10000,
      image: "https://drive.google.com/thumbnail?id=1VAE79KUd7U5bNCf7Y2MaohXE2yz_sZ5K&sz=w800",
      description: "Sajian nikmat bubur bakar polos",
      ingredients: "Bubur polos",
      isBestSeller: false,
      spicyLevel: 0,
      toppingsIncluded: ["Bubur Polos"]
    },
    {
      id: "bb-ori-ayam",
      category: "bubur",
      subcategory: "BUBUR",
      name: "Bubur (Ori) Ayam",
      price: 15000,
      image: "https://drive.google.com/thumbnail?id=1OSEnCsfJq29y118BY349wViNXxmfaQCK&sz=w800",
      description: "Sajian nikmat bubur bakar dengan topping jagung, sayur, keripik dan lauk utama ayam.",
      ingredients: "Bubur, daging ayam, jagung, sayur, keripik.",
      isBestSeller: false,
      spicyLevel: 0,
      toppingsIncluded: ["Daging Ayam", "Jagung", "Sayur", "Keripik"]
    },
    {
      id: "bb-ori-sapi",
      category: "bubur",
      subcategory: "BUBUR",
      name: "Bubur (Ori) Sapi",
      price: 18000,
      image: "https://drive.google.com/thumbnail?id=161beYaRXQXQljnMuq9whYCQqgv7NwNZH&sz=w800",
      description: "Sajian nikmat bubur bakar dengan topping jagung, sayur, keripik dan lauk utama sapi.",
      ingredients: "Bubur, daging sapi, jagung, sayur, keripik.",
      isBestSeller: false,
      spicyLevel: 0,
      toppingsIncluded: ["Daging Sapi", "Jagung", "Sayur", "Keripik"]
    },
    {
      id: "bb-ori-mix",
      category: "bubur",
      subcategory: "BUBUR",
      name: "Bubur (Ori) Mix (Ayam+Sapi)",
      price: 19000,
      image: "https://drive.google.com/thumbnail?id=15khQoPH2F0ia_gDjRNtEWjN3yjAc1LTm&sz=w800",
      description: "Sajian nikmat bubur bakar dengan topping jagung, sayur, keripik dan lauk utama ayam dan sapi.",
      ingredients: "Bubur, daging ayam, daging sapi, jagung, sayur, keripik.",
      isBestSeller: false,
      spicyLevel: 0,
      toppingsIncluded: ["Daging Ayam & Sapi", "Jagung", "Sayur", "Keripik"]
    },
    {
      id: "bb-laksa-ayam",
      category: "bubur",
      subcategory: "BUBUR",
      name: "Bubur (Kuah Laksa) Ayam",
      price: 16000,
      image: "https://drive.google.com/thumbnail?id=1D1DbaCtrDo4BPQZHbHzWS7Upb_-Ep4yh&sz=w800",
      description: "Sajian nikmat bubur bakar kuah laksa dengan topping jagung, sayur, keripik dan lauk utama ayam.",
      ingredients: "Bubur, kuah laksa, daging ayam, jagung, sayur, keripik.",
      isBestSeller: false,
      spicyLevel: 1,
      toppingsIncluded: ["Kuah Laksa", "Daging Ayam", "Jagung", "Sayur", "Keripik"]
    },
    {
      id: "bb-laksa-sapi",
      category: "bubur",
      subcategory: "BUBUR",
      name: "Bubur (Kuah Laksa) Sapi",
      price: 19000,
      image: "https://drive.google.com/thumbnail?id=1HQt19A09XLGoibnMcb94reFBJ89IHc58&sz=w800",
      description: "Sajian nikmat bubur bakar kuah laksa dengan topping jagung, sayur, keripik dan lauk utama sapi.",
      ingredients: "Bubur, kuah laksa, daging sapi, jagung, sayur, keripik.",
      isBestSeller: false,
      spicyLevel: 1,
      toppingsIncluded: ["Kuah Laksa", "Daging Sapi", "Jagung", "Sayur", "Keripik"]
    },
    {
      id: "bb-laksa-mix",
      category: "bubur",
      subcategory: "BUBUR",
      name: "Bubur (Kuah Laksa) Mix (Ayam+Sapi)",
      price: 19000,
      image: "https://drive.google.com/thumbnail?id=1N9PYBAox07AKVBxRgWjtaHXc3fS7Kvsb&sz=w800",
      description: "Sajian nikmat bubur bakar kuah laksa dengan topping jagung, sayur, keripik dan lauk utama ayam dan sapi.",
      ingredients: "Bubur, kuah laksa, daging ayam, daging sapi, jagung, sayur, keripik.",
      isBestSeller: false,
      spicyLevel: 1,
      toppingsIncluded: ["Kuah Laksa", "Daging Ayam & Sapi", "Jagung", "Sayur", "Keripik"]
    },
    {
      id: "bb-kuning-ayam",
      category: "bubur",
      subcategory: "BUBUR",
      name: "Bubur (Kuah Kuning) Ayam",
      price: 16000,
      image: "https://drive.google.com/thumbnail?id=1s6zr7OG5KkVZ6GHEWdumAWBR9IDW2fe_&sz=w800",
      description: "Sajian nikmat bubur bakar kuah kuning dengan topping jagung, sayur, keripik dan lauk utama ayam.",
      ingredients: "Bubur, kuah kuning, daging ayam, jagung, sayur, keripik.",
      isBestSeller: false,
      spicyLevel: 0,
      toppingsIncluded: ["Kuah Kuning", "Daging Ayam", "Jagung", "Sayur", "Keripik"]
    },
    {
      id: "bb-kuning-sapi",
      category: "bubur",
      subcategory: "BUBUR",
      name: "Bubur (Kuah Kuning) Sapi",
      price: 19000,
      image: "https://drive.google.com/thumbnail?id=16KK3fHQZ8cZlWU2MMhId3wGKYFfp0572&sz=w800",
      description: "Sajian nikmat bubur bakar kuah kuning dengan topping jagung, sayur, keripik dan lauk utama sapi.",
      ingredients: "Bubur, kuah kuning, daging sapi, jagung, sayur, keripik.",
      isBestSeller: true,
      spicyLevel: 0,
      toppingsIncluded: ["Kuah Kuning", "Daging Sapi", "Jagung", "Sayur", "Keripik"]
    },
    {
      id: "bb-kuning-mix",
      category: "bubur",
      subcategory: "BUBUR",
      name: "Bubur (Kuah Kuning) Mix (Ayam+Sapi)",
      price: 19000,
      image: "https://drive.google.com/thumbnail?id=1owibLb-n-rx0Z0UOZBbUVlRcBsP4kr2L&sz=w800",
      description: "Sajian nikmat bubur bakar kuah kuning dengan topping jagung, sayur, keripik dan lauk utama ayam dan sapi.",
      ingredients: "Bubur, kuah kuning, daging ayam, daging sapi, jagung, sayur, keripik.",
      isBestSeller: true,
      spicyLevel: 0,
      toppingsIncluded: ["Kuah Kuning", "Daging Ayam & Sapi", "Jagung", "Sayur", "Keripik"]
    },
    {
      id: "bb-semur-ayam-telur",
      category: "bubur",
      subcategory: "BUBUR",
      name: "Bubur (Kuah Semur) Ayam + Telur (Utuh)",
      price: 18000,
      image: "https://drive.google.com/thumbnail?id=17QZFlxABkyCLmm27GfKNKut5Xbm4vXTB&sz=w800",
      description: "Sajian nikmat bubur bakar kuah semur dengan topping jagung, sayur, keripik dan lauk utama ayam dan telur utuh.",
      ingredients: "Bubur, kuah semur, daging ayam, telur utuh, jagung, sayur, keripik.",
      isBestSeller: true,
      spicyLevel: 0,
      toppingsIncluded: ["Kuah Semur", "Telur Utuh", "Daging Ayam", "Jagung", "Sayur", "Keripik"]
    },
    {
      id: "bb-semur-sapi-telur",
      category: "bubur",
      subcategory: "BUBUR",
      name: "Bubur (Kuah Semur) Sapi + Telur (Utuh)",
      price: 19000,
      image: "https://drive.google.com/thumbnail?id=155Q5GPAxlR7gTE1JDGMR4SGSykxZZ-I3&sz=w800",
      description: "Sajian nikmat bubur bakar kuah semur dengan topping jagung, sayur, keripik dan lauk utama sapi dan telur utuh.",
      ingredients: "Bubur, kuah semur, daging sapi, telur utuh, jagung, sayur, keripik.",
      isBestSeller: true,
      spicyLevel: 0,
      toppingsIncluded: ["Kuah Semur", "Telur Utuh", "Daging Sapi", "Jagung", "Sayur", "Keripik"]
    },
    {
      id: "dimsum-siomay",
      category: "wonton",
      subcategory: "DIM SUM",
      name: "Dim Sum (Isi 4 Siomay Ayam)",
      price: 13000,
      image: "https://drive.google.com/thumbnail?id=1nEAhDwYbP2d6O4I7TD8557BkjboXn8-f&sz=w800",
      description: "Dim sum siomay ayam hangat.",
      ingredients: "Daging ayam, tepung, bumbu.",
      isBestSeller: false,
      spicyLevel: 0,
      toppingsIncluded: ["4 Pcs Siomay Ayam"]
    },
    {
      id: "wonton-kuah",
      category: "wonton",
      subcategory: "WONTON",
      name: "Wonton Kuah (Isi 5 Dumpling Ayam)",
      price: 13000,
      image: "https://drive.google.com/thumbnail?id=1LLms9wP-r2XxSGJS5fhbq-OWf9s30na7&sz=w800",
      description: "Wonton kuah dengan dumpling ayam hangat.",
      ingredients: "Daging ayam, kulit pangsit, kuah kaldu.",
      isBestSeller: true,
      spicyLevel: 0,
      toppingsIncluded: ["5 Pcs Dumpling Ayam", "Kuah Kaldu"]
    },
    {
      id: "top-telur-kampung",
      category: "topping",
      subcategory: "TELUR",
      name: "Telur Kampung (Rebus)",
      price: 5000,
      image: "https://drive.google.com/thumbnail?id=1MPhEVlQiNI4RolMIyaAj3INxtzvrIkZ1&sz=w800",
      description: "Telur ayam kampung rebus kaya protein.",
      ingredients: "Telur ayam kampung.",
      isBestSeller: false,
      spicyLevel: 0
    },
    {
      id: "top-daging-ayam",
      category: "topping",
      subcategory: "DAGING",
      name: "Daging Ayam",
      price: 5000,
      image: "https://drive.google.com/thumbnail?id=1AB9c-cg62YxMliJSGA1s70YzJkbHS_VO&sz=w800",
      description: "Tambahan topping daging ayam.",
      ingredients: "Daging ayam, bumbu.",
      isBestSeller: false,
      spicyLevel: 0
    },
    {
      id: "top-daging-sapi",
      category: "topping",
      subcategory: "DAGING",
      name: "Daging Sapi",
      price: 5000,
      image: "https://drive.google.com/thumbnail?id=18lfSnvTfCdYI7D-cDJ5WQ9xTixIjyf-X&sz=w800",
      description: "Tambahan topping daging sapi.",
      ingredients: "Daging sapi, bumbu.",
      isBestSeller: false,
      spicyLevel: 0
    },
    {
      id: "top-sate-satean",
      category: "topping",
      subcategory: "SATE",
      name: "Sate Satean",
      price: 3000,
      image: "https://drive.google.com/thumbnail?id=1MsylaAok7LyEIiQ1VaqUvWl0n-_BZUmg&sz=w800",
      description: "Pelengkap hidangan sate dan krupuk.",
      ingredients: "Sate pilihan, krupuk.",
      isBestSeller: false,
      spicyLevel: 0
    },
    {
      id: "top-krupuk",
      category: "topping",
      subcategory: "KRUPUK",
      name: "Krupuk",
      price: 3000,
      image: "https://drive.google.com/thumbnail?id=1ueUkzBE8M1N7nBK0t3b_JhDM9CkH47HG&sz=w800",
      description: "Krupuk renyah gurih.",
      ingredients: "krupuk.",
      isBestSeller: false,
      spicyLevel: 0
    },
    {
      id: "min-teh",
      category: "minuman",
      subcategory: "TEH",
      name: "Teh",
      price: 5000,
      image: "https://drive.google.com/thumbnail?id=1AUNiHe7vaGUh31WmyK-pSGSpI1TLuaDn&sz=w800",
      description: "Minuman teh hangat menyegarkan.",
      ingredients: "Daun teh, air hangat, gula (opsional).",
      isBestSeller: false,
      spicyLevel: 0
    },
    {
      id: "min-kopi-nusantara",
      category: "minuman",
      subcategory: "KOPI",
      name: "Kopi Hitam Nusantara",
      price: 8000,
      image: "https://drive.google.com/thumbnail?id=1mPkZsPOo0_r9Bh-wdzSRyKyBFnJi66pR&sz=w800",
      description: "Kopi tubruk hitam khas nusantara.",
      ingredients: "Biji kopi pilihan, air panas.",
      isBestSeller: false,
      spicyLevel: 0
    },
    {
      id: "min-air-mineral",
      category: "minuman",
      subcategory: "AIR MINERAL",
      name: "Air Mineral",
      price: 3000,
      image: "https://drive.google.com/thumbnail?id=1AUvQZiR9LxMOnYPhAag9z_cqFYgSfy3d&sz=w800",
      description: "Air mineral murni menyegarkan.",
      ingredients: "Air mineral.",
      isBestSeller: false,
      spicyLevel: 0
    }
  ],
  extraToppings: [
    { id: "top-telur-kampung", name: "Telur Kampung (Rebus)", price: 5000 },
    { id: "top-daging-ayam", name: "Daging Ayam", price: 5000 },
    { id: "top-daging-sapi", name: "Daging Sapi", price: 5000 },
    { id: "top-sate-satean", name: "Sate Satean", price: 3000 },
    { id: "top-krupuk", name: "Krupuk", price: 3000 }
  ],
  concepts: [
    {
      id: "street-food",
      title: "Konsep Street Food Kompact (Sabuba Classic)",
      tagline: "Kompak • Praktis • Siap Jualan Di Mana Saja",
      image: "/assets/Konsep/5. Konsep Street Food.jpg",
      description: "Konsep jualan fleksibel menggunakan motor tiga roda custom khusus. Bebas buka di lokasi strategis mana saja, area perkantoran, event, hingga panggilan acara tanpa terbeban biaya sewa tempat yang mahal.",
      highlights: [
        "Fleksibel & Bebas/Hemat Biaya Sewa Tempat",
        "Siap Buka Di Mana Saja & Terima Panggilan Acara",
        "Mobilitas Tinggi - Siap Jualan Dalam Hitungan Menit",
        "Rangka Kuat, Material Anti Karat & Irit Bahan Bakar",
        "Desain Kompak, Fungsional & Untung Maksimal"
      ]
    },
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
      id: "out-leko",
      name: "Sabuba - Depan Warung Leko",
      address: "Jl. Ahmad Yani No.3D, Pucang, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61219",
      city: "Sidoarjo",
      hours: "06.00 - 09.00 WIB",
      status: "Buka Sarapan Pagi",
      mapsUrl: "https://maps.app.goo.gl/CQzouJCAjf7XX6aD6",
      image: "/assets/unnamed (3).webp",
      whatsapp: "6281332778277"
    },
    {
      id: "out-rsud",
      name: "Sabuba - Kantin RSUD",
      address: "Jl. Mojopahit No.667, Sidowayah, Celep, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61215",
      city: "Sidoarjo",
      hours: "07.00 - 10.00 WIB",
      status: "Buka Setiap Hari",
      mapsUrl: "https://maps.app.goo.gl/oF2WALQ6RaB7dyay6",
      image: "/assets/unnamed (2).webp",
      whatsapp: "6281332778277"
    },
    {
      id: "out-zeger-kemiri",
      name: "Sabuba X Zeger Coffee",
      address: "Perum Kemiri Indah No.8 RT/RW 20/05 Blok C7, Bluru Cilik, Kemiri, Kec. Sidoarjo, Jawa Timur 61234",
      city: "Sidoarjo",
      hours: "07.00 - 12.00 WIB",
      status: "Buka Sarapan & Cafe",
      mapsUrl: "https://maps.app.goo.gl/oxrfELDnjMpTvVmx8",
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
      comment: "Gak cuma bubur, Wonton dan Dim Sum-nya Sabuba itu juara pedes gurihnya! Harganya terjangkau banget mulai 10 ribuan.",
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

export const formatImageUrl = (url) => {
  if (!url) return '/assets/Foto Menu (1).png';
  const driveIdMatch = url.match(/id=([a-zA-Z0-9_-]+)/) || url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (driveIdMatch && driveIdMatch[1]) {
    return `https://drive.google.com/thumbnail?id=${driveIdMatch[1]}&sz=w800`;
  }
  return url;
};

export const SIGNATURE_ITEMS = SABUBA_DATA.menuItems.filter(item => item.isBestSeller || item.price <= 15000);

export const syncSheetImagesWithAppData = async (onUpdate) => {
  try {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/1HuhlPIe-GF7fIewCD__NHIkt8xEBzXfx0LdBIek16Q0/export?format=csv&gid=1112273668';
    const response = await fetch(csvUrl);
    if (!response.ok) return;
    const csvText = await response.text();
    
    // Parse CSV rows handling quotes & newlines
    const rows = [];
    let currentRow = [];
    let currentVal = '';
    let insideQuotes = false;

    for (let i = 0; i < csvText.length; i++) {
      const char = csvText[i];
      const nextChar = csvText[i + 1];

      if (char === '"') {
        if (insideQuotes && nextChar === '"') {
          currentVal += '"';
          i++;
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (char === ',' && !insideQuotes) {
        currentRow.push(currentVal.trim());
        currentVal = '';
      } else if ((char === '\r' || char === '\n') && !insideQuotes) {
        if (char === '\r' && nextChar === '\n') i++;
        currentRow.push(currentVal.trim());
        if (currentRow.some(c => c)) rows.push(currentRow);
        currentRow = [];
        currentVal = '';
      } else {
        currentVal += char;
      }
    }
    if (currentVal || currentRow.length > 0) {
      currentRow.push(currentVal.trim());
      rows.push(currentRow);
    }

    const photoMap = {};
    for (let i = 1; i < rows.length; i++) {
      const r = rows[i];
      if (r.length > 9 && r[4] && r[9]) {
        const cleanName = String(r[4]).trim().toLowerCase().replace(/\s+/g, ' ');
        photoMap[cleanName] = formatImageUrl(r[9]);
      }
    }

    let updatedCount = 0;
    SABUBA_DATA.menuItems.forEach(item => {
      const key = String(item.name).trim().toLowerCase().replace(/\s+/g, ' ');
      if (photoMap[key] && photoMap[key] !== item.image) {
        item.image = photoMap[key];
        updatedCount++;
      }
    });

    if (updatedCount > 0 && typeof onUpdate === 'function') {
      onUpdate();
    }
  } catch (err) {
    console.warn("Sheet live sync warning:", err);
  }
};


