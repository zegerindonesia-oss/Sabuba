import React, { useState } from 'react';
import { Store, Tent, Building2, Coffee, Check, ArrowRight, Sparkles } from 'lucide-react';
import { SABUBA_DATA } from '../data/sabubaData';

export default function ConceptGallery() {
  const [selectedConcept, setSelectedConcept] = useState(SABUBA_DATA.concepts[0]);

  const conceptIcons = {
    tenda: <Tent className="w-5 h-5" />,
    restaurant: <Building2 className="w-5 h-5" />,
    booth: <Store className="w-5 h-5" />,
    'zeger-collab': <Coffee className="w-5 h-5" />
  };

  return (
    <section id="concepts" className="py-20 bg-sabuba-creambg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-sabuba-red/10 border border-sabuba-red/30 px-4 py-1.5 rounded-full text-xs font-extrabold text-sabuba-red uppercase tracking-wider">
            <Store className="w-4 h-4" />
            <span>Fleksibilitas Model Usaha</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-sabuba-dark">
            Konsep Outlet <span className="text-sabuba-red">Sabuba</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Didesain adaptif untuk berbagai tipe lokasi strategis, mulai dari street food pagi hari, booth indoor, hingga resto modern.
          </p>
        </div>

        {/* Concept Switcher Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {SABUBA_DATA.concepts.map((concept) => {
            const isSelected = selectedConcept.id === concept.id;
            return (
              <button
                key={concept.id}
                onClick={() => setSelectedConcept(concept)}
                className={`p-4 rounded-2xl font-heading font-bold text-left transition-all duration-300 flex items-center gap-3 border ${
                  isSelected
                    ? 'bg-sabuba-red text-white border-sabuba-red shadow-flame scale-[1.02]'
                    : 'bg-white text-sabuba-dark border-gray-200 hover:border-sabuba-red/40 hover:bg-sabuba-red/5'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-sabuba-creambg text-sabuba-red'
                }`}>
                  {conceptIcons[concept.id]}
                </div>
                <div>
                  <p className="text-sm sm:text-base leading-tight">{concept.title}</p>
                  <p className={`text-[11px] font-normal mt-0.5 ${isSelected ? 'text-gray-200' : 'text-gray-500'}`}>
                    {concept.id === 'tenda' && 'Outdoor Street Food'}
                    {concept.id === 'restaurant' && 'Dine-In Modern'}
                    {concept.id === 'booth' && 'Compact Hub'}
                    {concept.id === 'zeger-collab' && 'Coffee Pairing'}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Concept Showcase Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Big Image Preview */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-sabuba-dark">
            <img
              src={selectedConcept.image}
              alt={selectedConcept.title}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sabuba-dark/80 via-transparent to-transparent lg:hidden" />
            
            <div className="absolute bottom-4 left-4 right-4 lg:hidden">
              <span className="bg-sabuba-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                {selectedConcept.title}
              </span>
            </div>
          </div>

          {/* Right: Concept Details & Value Proposition */}
          <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 bg-sabuba-gold/20 text-sabuba-dark text-xs font-bold px-3 py-1 rounded-full border border-sabuba-gold/40">
                <Sparkles className="w-3.5 h-3.5 text-sabuba-red" />
                <span>Visualisasi Konsep Nyata</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-sabuba-dark mt-3">
                {selectedConcept.title}
              </h3>
              
              <p className="text-sabuba-red font-bold text-sm sm:text-base mt-2">
                "{selectedConcept.tagline}"
              </p>

              <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
                {selectedConcept.description}
              </p>

              {/* Highlights Checklist */}
              <div className="mt-6 space-y-3 border-t border-gray-100 pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Keunggulan Konsep Ini:
                </p>
                {selectedConcept.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-sabuba-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-100">
              <a
                href="#franchise"
                className="inline-flex items-center gap-2 bg-sabuba-dark hover:bg-sabuba-red text-white px-6 py-3.5 rounded-xl font-heading font-bold text-sm shadow transition-all duration-300 active:scale-95"
              >
                <span>Tanya Kemitraan Konsep Ini</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
