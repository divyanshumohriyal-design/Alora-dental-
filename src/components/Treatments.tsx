import React, { useState } from 'react';
import { getWhatsAppUrl } from '../config/whatsapp';
import { ArrowUpRight, Sparkles, MessageCircle, CheckCircle2, ChevronDown } from 'lucide-react';
import { SmileMakeoverVisual } from './Visuals';
import { TreatmentImageCard, TREATMENT_IMAGES } from './TreatmentImages';

interface TreatmentItem {
  id: string;
  name: string;
  tag: string;
  shortDesc: string;
  fullDetails: string;
  accentBg: string;
  accentText: string;
  hoverBg: string;
  pillColor: string;
  previewColor: string;
  keyStats: string;
  sessionDuration: string;
}

const TREATMENTS_LIST: TreatmentItem[] = [
  {
    id: 'general-dentistry',
    name: 'General Dentistry',
    tag: 'Foundation & Health',
    shortDesc: 'Comprehensive oral checks, biomimetic fillings, and micro-invasive restorations that protect natural enamel.',
    fullDetails: 'Preserving your natural tooth architecture with state-of-the-art ceramic composite bio-materials that look and wear exactly like healthy enamel.',
    accentBg: 'bg-[#FFF4F1]',
    accentText: 'text-[#FF6B6B]',
    hoverBg: 'hover:bg-[#FFF4F1]/60',
    pillColor: 'bg-[#FF6B6B]',
    previewColor: '#FF6B6B',
    keyStats: '100% Enamel-Preserving',
    sessionDuration: '45–60 min check & restore',
  },
  {
    id: 'preventive-care',
    name: 'Preventive Care',
    tag: 'Hygiene & Cleanliness',
    shortDesc: 'Warm-water airflow guided biofilm therapy (GBT) for painless, thorough plaque and stain removal.',
    fullDetails: 'Zero sensitivity hygiene appointments utilizing heated airflow technology that glides gently over sensitive gums and tooth necks.',
    accentBg: 'bg-[#E6FCF5]',
    accentText: 'text-[#22B8B5]',
    hoverBg: 'hover:bg-[#E6FCF5]/60',
    pillColor: 'bg-[#22B8B5]',
    previewColor: '#22B8B5',
    keyStats: 'Zero-Pain Heated Airflow',
    sessionDuration: '40 min therapy session',
  },
  {
    id: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    tag: 'Natural Aesthetics',
    shortDesc: 'Bespoke hand-layered porcelain veneers and edge-bonding designed for radiant, authentic facial harmony.',
    fullDetails: 'Understated enhancements custom-shaded to your natural complexion and tooth curvature—never artificial or bulky.',
    accentBg: 'bg-[#E7F5FF]',
    accentText: 'text-[#4DABF7]',
    hoverBg: 'hover:bg-[#E7F5FF]/60',
    pillColor: 'bg-[#4DABF7]',
    previewColor: '#4DABF7',
    keyStats: 'Facial Harmony Milled',
    sessionDuration: '2–3 bespoke visits',
  },
  {
    id: 'teeth-whitening',
    name: 'Teeth Whitening',
    tag: 'Safe Luminous Shine',
    shortDesc: 'Gentle, pH-neutral professional laser and custom night tray systems that brighten without pain or sensitivity.',
    fullDetails: 'Lift 4 to 8 natural Vita shades safely with our proprietary desensitized whitening protocol.',
    accentBg: 'bg-[#FFF5F5]',
    accentText: 'text-[#FF6B6B]',
    hoverBg: 'hover:bg-[#FFF5F5]/70',
    pillColor: 'bg-[#FF6B6B]',
    previewColor: '#FF6B6B',
    keyStats: 'Up to 8 Vita Shades',
    sessionDuration: '60 min laser or night trays',
  },
  {
    id: 'clear-aligners',
    name: 'Clear Aligners',
    tag: 'Discreet Orthodontics',
    shortDesc: 'Invisible 3D digital dental alignment. Smooth, removable, and comfortable without metal wires.',
    fullDetails: 'Track your smile progress in real-time with optical 3D simulations before you begin your custom aligner journey.',
    accentBg: 'bg-[#E6FCF5]',
    accentText: 'text-[#22B8B5]',
    hoverBg: 'hover:bg-[#E6FCF5]/70',
    pillColor: 'bg-[#22B8B5]',
    previewColor: '#22B8B5',
    keyStats: 'Invisible & Removable',
    sessionDuration: '3–9 month typical journey',
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    tag: 'Permanent Restoration',
    shortDesc: 'Guided 3D robotic precision implants that permanently restore strength, functionality, and confidence.',
    fullDetails: 'Titanium and ceramic biocompatible roots placed with 3D surgical guides for lifetime strength and natural stability.',
    accentBg: 'bg-[#E7F5FF]',
    accentText: 'text-[#4DABF7]',
    hoverBg: 'hover:bg-[#E7F5FF]/70',
    pillColor: 'bg-[#4DABF7]',
    previewColor: '#4DABF7',
    keyStats: 'Lifetime Bone Integration',
    sessionDuration: '3D Guided precision visit',
  }
];

export const Treatments: React.FC = () => {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="treatments" className="py-24 sm:py-32 bg-[#F3FAFC] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#102A43] text-xs font-bold uppercase tracking-widest mb-4 border border-[#D9E2EC]">
              <span className="w-2 h-2 rounded-full bg-[#FF6B6B]" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#102A43] tracking-tight">
              Everything your smile needs.
            </h2>
            <p className="text-base sm:text-lg text-[#486581] mt-3 font-normal">
              Explore our patient-focused treatments with high-resolution photography, micro-precision technology, and zero-anxiety care.
            </p>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-auto px-6 py-3 rounded-xl bg-white border-2 border-[#D9E2EC] hover:border-[#FF6B6B] text-[#102A43] text-sm font-bold shadow-xs transition-all hover:bg-[#FFF4F1]"
          >
            <MessageCircle className="w-4 h-4 text-[#FF6B6B]" />
            <span>Ask About Any Treatment</span>
          </a>
        </div>

        {/* Interactive Editorial Treatment List with Curated Photography */}
        <div className="bg-white rounded-3xl border border-[#D9E2EC] divide-y divide-[#D9E2EC] overflow-hidden shadow-xl shadow-[#102A43]/5">
          {TREATMENTS_LIST.map((item, idx) => {
            const isHovered = activeHoverId === item.id;
            const isExpanded = expandedId === item.id;
            const waUrl = getWhatsAppUrl({ treatmentName: item.name });

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveHoverId(item.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                className={`p-6 sm:p-8 lg:p-10 transition-all duration-300 ${item.hoverBg} group relative`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  
                  {/* Left: Number & Titles */}
                  <div className="lg:col-span-4 flex items-start gap-5">
                    <span className="font-display font-black text-xl text-[#829AB1] group-hover:text-[#102A43] transition-colors pt-1">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase mb-2 ${item.accentBg} ${item.accentText}`}>
                        {item.tag}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#102A43] group-hover:translate-x-1 transition-transform duration-200">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 text-xs font-semibold text-[#829AB1]">
                        <span>{item.keyStats}</span>
                        <span>·</span>
                        <span>{item.sessionDuration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle: Integrated Image with Organic Rounded Styling & Lazy Loading */}
                  <div className="lg:col-span-3">
                    <TreatmentImageCard
                      treatmentId={item.id}
                      isHovered={isHovered}
                      className="w-full aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3]"
                    />
                  </div>

                  {/* Right: Description & Action Controls */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                    <p className="text-sm sm:text-base text-[#486581] leading-relaxed">
                      {item.shortDesc}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => toggleExpand(item.id)}
                        className="px-4 py-2.5 rounded-xl border border-[#D9E2EC] bg-[#F8FAFC] hover:bg-white text-xs font-bold text-[#102A43] flex items-center gap-1.5 transition-colors cursor-pointer"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Less Details' : 'Clinical Details'}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#102A43] text-white text-xs font-bold hover:bg-[#22B8B5] transition-colors duration-200 shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#38D9A9]" />
                        <span>Enquire on WhatsApp</span>
                      </a>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white border border-[#D9E2EC] flex items-center justify-center text-[#102A43] group-hover:bg-[#FF6B6B] group-hover:text-white group-hover:border-[#FF6B6B] group-hover:rotate-45 transition-all duration-300 ml-auto"
                        aria-label={`Open WhatsApp for ${item.name}`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                </div>

                {/* Expandable Clinical Details Drawer */}
                {isExpanded && (
                  <div className="mt-8 pt-6 border-t border-[#D9E2EC] animate-fadeIn grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#F8FAFC] p-6 rounded-2xl">
                    <div className="md:col-span-7 space-y-2">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#102A43]">
                        Clinical Methodology & Philosophy
                      </p>
                      <p className="text-sm text-[#486581] leading-relaxed">
                        {item.fullDetails}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-bold text-[#22B8B5] pt-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Performed with hospital-grade sterilization & digital intraoral scanning</span>
                      </div>
                    </div>

                    <div className="md:col-span-5 flex flex-col justify-center space-y-3 border-t md:border-t-0 md:border-l border-[#D9E2EC] md:pl-6">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#829AB1]">
                        What to expect
                      </p>
                      <ul className="text-xs text-[#334E68] space-y-1.5">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B]" />
                          <span>No rush: unhurried personal appointment time</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#22B8B5]" />
                          <span>Transparent itemized fee estimate in advance</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4DABF7]" />
                          <span>Same-week WhatsApp follow-up with Dr. Maya</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SECTION 11: FEATURED TREATMENT - "Smile Makeovers" */}
        <div className="mt-20 rounded-[3rem] bg-gradient-to-r from-[#FF6B6B] via-[#FA5252] to-[#FF8787] p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Turquoise and navy decorative orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#22B8B5]/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-[#102A43]/20 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-[#C3FAEB]" />
                <span>SIGNATURE DISCIPLINE</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black leading-tight tracking-tight">
                Smile Makeovers
              </h3>

              <p className="text-xl sm:text-2xl font-display font-semibold text-white/90">
                Small refinements. Big confidence.
              </p>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                A harmonious combination of discreet clear alignment, conservative porcelain facings, and natural enamel brightening. Designed digitally so you see your transformed smile before any treatment begins.
              </p>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl({ treatmentName: "Smile Makeovers" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-[#102A43] text-base font-bold hover:bg-[#F3FAFC] hover:shadow-xl transition-all duration-200 shadow-lg active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 text-[#FF6B6B]" />
                  <span>Explore Smile Makeovers</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SmileMakeoverVisual className="aspect-[4/3] w-full shadow-2xl border-4 border-white/20" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
