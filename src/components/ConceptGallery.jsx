import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SABUBA_DATA } from '../data/sabubaData';
import { CheckCircle2, ArrowUpRight, Flame } from 'lucide-react';

export default function ConceptGallery() {
  const [activeConceptIdx, setActiveConceptIdx] = useState(0);
  const activeConcept = SABUBA_DATA.concepts[activeConceptIdx];

  return (
    <section id="konsep" className="py-20 bg-white text-slate-800 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest text-red-800 uppercase">Inovasi Outlet</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            4 Konsep Kemitraan & Outlet Sabuba
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Fleksibel untuk berbagai lokasi usaha sarapan & tempat nongkrong kekinian.
          </p>
        </div>

        {/* Concept Selector Pills */}
        <div className="flex justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {SABUBA_DATA.concepts.map((concept, idx) => {
            const isActive = activeConceptIdx === idx;
            return (
              <button
                key={concept.id}
                onClick={() => setActiveConceptIdx(idx)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-red-800 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {concept.title}
              </button>
            );
          })}
        </div>

        {/* Active Concept Showcase Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-7 relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-white">
            <motion.img
              key={activeConcept.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              src={activeConcept.image}
              alt={activeConcept.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-red-800 text-white text-xs font-extrabold shadow-md flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5" />
              <span>Konsep #{activeConceptIdx + 1}</span>
            </div>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {activeConcept.title}
            </h3>
            <p className="text-xs sm:text-sm font-bold text-red-800 mt-1">
              "{activeConcept.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
              {activeConcept.description}
            </p>

            {/* Highlights List */}
            <div className="mt-6 space-y-2.5">
              {activeConcept.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-red-800 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Consultation CTA */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <a
                href={`https://wa.me/${SABUBA_DATA.brand.whatsapp}?text=Halo%20Sabuba,%20saya%20tertarik%20dengan%20${encodeURIComponent(activeConcept.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-800 hover:bg-red-900 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
              >
                <span>Konsultasi Konsep via WA</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
