import React from 'react';
import { Flame, ShieldCheck, HeartHandshake, Sparkles, ChefHat, CheckCircle2 } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: <Flame className="w-8 h-8 text-sabuba-amber" />,
      title: "Teknik Bakar Claypot Direct Flame",
      description: "Bubur tidak sekadar disajikan panas, melainkan dimasak mendidih langsung di atas tungku api menggunakan mangkuk tanah liat (claypot). Menghasilkan aroma smoky khas yang menggugah selera."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      title: "100% Bahan Halal & Segar",
      description: "Menggunakan beras kualitas super, kaldu ayam murni racikan sendiri, serta bahan topping segar harian tanpa pengawet buatan demi keamanan keluarga Anda."
    },
    {
      icon: <ChefHat className="w-8 h-8 text-sabuba-gold" />,
      title: "Chili Oil House-Blend Spesial",
      description: "Resep minyak cabai khas Sabuba yang dibuat dari perpaduan cabai pilihan, rempah sangrai, dan minyak wijen beraroma harum membakar yang bisa disesuaikan level pedasnya."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-rose-400" />,
      title: "Harga Sarapan Merakyat",
      description: "Kualitas hidangan sekelas restoran berbintang dengan harga promo sarapan pagi mulai Rp 10.000 saja. Mengenyangkan dan pas untuk kantong semua kalangan."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-sabuba-dark text-white relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sabuba-red/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sabuba-amber/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Gallery Grid */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                  <img
                    src="/assets/Foto Menu (3).png"
                    alt="Proses Claypot Sabuba"
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="bg-gradient-to-br from-sabuba-red to-sabuba-darkred p-6 rounded-2xl border border-sabuba-amber/30 text-center shadow-flame">
                  <p className="font-heading font-black text-3xl text-sabuba-gold">100%</p>
                  <p className="text-xs text-gray-200 mt-1 uppercase tracking-wider font-semibold">
                    Claypot Smoky Flame
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-center">
                  <p className="font-heading font-extrabold text-2xl text-white">06.00 WIB</p>
                  <p className="text-xs text-gray-300 mt-1 font-medium">Jam Buka Sarapan</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                  <img
                    src="/assets/Foto Menu (6).png"
                    alt="Wonton Chili Oil"
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Features List */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 bg-sabuba-red/30 border border-sabuba-amber/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-sabuba-amber uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4 text-sabuba-gold" />
                <span>Rahasia Kelezatan Sabuba</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
                Mengapa Harus <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sabuba-gold via-sabuba-amber to-sabuba-red">
                  Bubur Bakar Sabuba?
                </span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed">
                Kami mengubah cara menikmati sarapan bubur tradisional menjadi pengalaman kuliner modern yang kaya rasa, hangat meresap, dan memanjakan lidah di setiap suapan.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-sabuba-amber/50 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-sabuba-dark/80 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-sabuba-gold transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Badge */}
            <div className="bg-gradient-to-r from-sabuba-red/20 to-transparent p-4 rounded-xl border-l-4 border-sabuba-amber flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-sabuba-gold flex-shrink-0" />
              <p className="text-xs sm:text-sm text-gray-200 font-medium italic">
                "Sarapan nikmat berenergi, hangat dari claypot tanah liat murni."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
