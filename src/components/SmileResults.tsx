import React, { useState, useRef, useCallback } from 'react';
import { getWhatsAppUrl } from '../config/whatsapp';
import { Sparkles, MessageCircle, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

interface CaseItem {
  id: string;
  name: string;
  category: string;
  timeframe: string;
  accentColor: string;
  tagColor: string;
  description: string;
  highlights: string[];
  renderBefore: () => React.ReactNode;
  renderAfter: () => React.ReactNode;
}

const SMILE_CASES: CaseItem[] = [
  {
    id: 'bonding',
    name: 'Composite Edge Bonding',
    category: 'Aesthetic Refinement',
    timeframe: 'Single 90-Minute Visit',
    accentColor: '#FF6B6B',
    tagColor: 'bg-[#FFF4F1] text-[#FF6B6B]',
    description: 'Smoothing micro-fractures along incisal edges and closing a small 1.5mm central diastema without removing any healthy tooth structure.',
    highlights: [
      'Zero drilling of natural enamel',
      'Nano-hybrid composite matched to Vita multi-shade layers',
      'Reversible, conservative aesthetic enhancement'
    ],
    renderBefore: () => (
      <svg viewBox="0 0 540 340" className="w-full h-full object-cover bg-[#F3FAFC]">
        {/* Soft Gumline */}
        <path d="M0 0 L540 0 L540 135 C480 120 420 140 370 125 C310 115 260 130 210 120 C160 115 100 130 50 120 C20 115 0 125 0 125 Z" fill="#E89B85" />
        {/* Teeth - Chipped edge and gap */}
        <g fill="#F3EBDD" stroke="#D9E2EC" strokeWidth="2.5">
          <path d="M70 120 C80 160 90 200 95 220 C105 210 115 180 120 118 Z" />
          <path d="M120 118 C130 170 145 225 155 230 C165 225 180 170 185 117 Z" />
          {/* Central Incisor with chipped edge */}
          <path d="M190 117 C195 180 200 230 205 250 L230 248 L235 238 L248 240 L258 248 C262 230 264 180 264 117 Z" />
          {/* Central Incisor with gap */}
          <path d="M272 117 C272 180 270 230 272 248 L295 250 L305 244 L325 246 C330 225 335 180 340 117 Z" />
          <path d="M345 117 C350 170 365 225 375 230 C385 225 400 170 410 118 Z" />
        </g>
        <line x1="230" y1="248" x2="235" y2="238" stroke="#829AB1" strokeWidth="2" />
        <ellipse cx="242" cy="240" rx="6" ry="2" fill="#829AB1" opacity="0.4" />
      </svg>
    ),
    renderAfter: () => (
      <svg viewBox="0 0 540 340" className="w-full h-full object-cover bg-[#F3FAFC]">
        {/* Healthy Gumline */}
        <path d="M0 0 L540 0 L540 135 C480 120 420 140 370 125 C310 115 260 130 210 120 C160 115 100 130 50 120 C20 115 0 125 0 125 Z" fill="#E89B85" />
        {/* Symmetrical Restored Enamel with Translucent Luster */}
        <g fill="#FCFBF7" stroke="#D9E2EC" strokeWidth="2.5">
          <path d="M70 120 C80 160 90 200 95 220 C105 210 115 180 120 118 Z" />
          <path d="M120 118 C130 170 145 225 155 230 C165 225 180 170 185 117 Z" />
          {/* Central Incisor perfectly restored */}
          <path d="M190 117 C195 180 200 230 205 252 C210 254 260 254 265 252 C266 230 266 180 266 117 Z" />
          <path d="M205 244 C215 248 255 248 265 244 L265 252 C260 254 210 254 205 252 Z" fill="#EBF6FA" opacity="0.8" />
          {/* Central Incisor with gap closed */}
          <path d="M267 117 C267 180 267 230 267 252 C272 254 322 254 327 252 C332 230 337 180 342 117 Z" />
          <path d="M267 244 C272 248 317 248 327 244 L327 252 C322 254 272 254 267 252 Z" fill="#EBF6FA" opacity="0.8" />
          <path d="M345 117 C350 170 365 225 375 230 C385 225 400 170 410 118 Z" />
        </g>
        {/* Luminous gloss highlights */}
        <ellipse cx="235" cy="180" rx="3.5" ry="24" fill="#FFFFFF" opacity="0.9" transform="rotate(-5 235 180)" />
        <ellipse cx="295" cy="180" rx="3.5" ry="24" fill="#FFFFFF" opacity="0.9" transform="rotate(5 295 180)" />
      </svg>
    )
  },
  {
    id: 'whitening',
    name: 'Gentle Laser Whitening',
    category: 'Enamel Radiance',
    timeframe: '60-Minute In-Clinic Session',
    accentColor: '#22B8B5',
    tagColor: 'bg-[#E6FCF5] text-[#22B8B5]',
    description: 'Lifting intrinsic coffee and tea chromogenic stains using buffered pH neutral active agents with zero tooth neck sensitivity.',
    highlights: [
      'Lifted 5 full Vita shades to natural B1 radiance',
      'Desensitizing formula protects sensitive nerve roots',
      'Custom take-home night trays included for maintenance'
    ],
    renderBefore: () => (
      <svg viewBox="0 0 540 340" className="w-full h-full object-cover bg-[#F3FAFC]">
        <path d="M0 0 L540 0 L540 135 C480 120 420 140 370 125 C310 115 260 130 210 120 C160 115 100 130 50 120 C20 115 0 125 0 125 Z" fill="#E89B85" />
        {/* Warm tinted enamel (A3.5 shade) */}
        <g fill="#EADBC8" stroke="#D9E2EC" strokeWidth="2.5">
          <path d="M120 118 C130 170 145 225 155 230 C165 225 180 170 185 117 Z" />
          <path d="M190 117 C195 180 200 230 205 252 C210 254 260 254 265 252 C266 230 266 180 266 117 Z" />
          <path d="M267 117 C267 180 267 230 267 252 C272 254 322 254 327 252 C332 230 337 180 342 117 Z" />
          <path d="M345 117 C350 170 365 225 375 230 C385 225 400 170 410 118 Z" />
        </g>
        <path d="M190 117 C210 135 245 135 265 117 Z" fill="#D4BC98" opacity="0.5" />
        <path d="M267 117 C285 135 315 135 342 117 Z" fill="#D4BC98" opacity="0.5" />
      </svg>
    ),
    renderAfter: () => (
      <svg viewBox="0 0 540 340" className="w-full h-full object-cover bg-[#F3FAFC]">
        <path d="M0 0 L540 0 L540 135 C480 120 420 140 370 125 C310 115 260 130 210 120 C160 115 100 130 50 120 C20 115 0 125 0 125 Z" fill="#E89B85" />
        {/* Luminous Pearl Vita B1 shade */}
        <g fill="#FFFFFF" stroke="#D9E2EC" strokeWidth="2.5">
          <path d="M120 118 C130 170 145 225 155 230 C165 225 180 170 185 117 Z" />
          <path d="M190 117 C195 180 200 230 205 252 C210 254 260 254 265 252 C266 230 266 180 266 117 Z" />
          <path d="M267 117 C267 180 267 230 267 252 C272 254 322 254 327 252 C332 230 337 180 342 117 Z" />
          <path d="M345 117 C350 170 365 225 375 230 C385 225 400 170 410 118 Z" />
        </g>
        <ellipse cx="230" cy="180" rx="4" ry="26" fill="#4DABF7" opacity="0.15" transform="rotate(-6 230 180)" />
        <ellipse cx="295" cy="180" rx="4" ry="26" fill="#22B8B5" opacity="0.15" transform="rotate(6 295 180)" />
      </svg>
    )
  }
];

export const SmileResults: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = SMILE_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(clamped);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="results" className="py-24 sm:py-32 bg-white relative border-t border-[#D9E2EC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF6FA] text-[#102A43] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF6B6B]" />
            <span>REAL RESULTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#102A43] tracking-tight">
            See what a little confidence can change.
          </h2>
          <p className="text-base sm:text-lg text-[#486581] mt-3 font-normal">
            Natural aesthetics that preserve your unique individuality. Drag the slider to compare before and after results.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {SMILE_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-6 py-3 rounded-2xl font-display font-bold text-sm transition-all duration-200 cursor-pointer ${
                activeCaseIndex === idx
                  ? 'bg-[#102A43] text-white shadow-md'
                  : 'bg-[#F3FAFC] text-[#486581] hover:text-[#102A43] hover:bg-[#EBF6FA]'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Comparison Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Slider Container */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-[#F3FAFC] select-none cursor-ew-resize bg-[#F3FAFC]"
            >
              {/* "After" Image */}
              <div className="absolute inset-0 w-full h-full">
                {activeCase.renderAfter()}
                <div className="absolute top-4 right-4 bg-[#22B8B5] text-white px-3.5 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm">
                  After
                </div>
              </div>

              {/* "Before" Image */}
              <div
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="w-[100vw] max-w-none h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
                  {activeCase.renderBefore()}
                </div>
                <div className="absolute top-4 left-4 bg-[#102A43] text-white px-3.5 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm">
                  Before
                </div>
              </div>

              {/* Slider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-2xl bg-[#FF6B6B] text-white shadow-xl flex items-center justify-center border-2 border-white">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 px-2 text-xs font-semibold text-[#829AB1]">
              <span className="flex items-center gap-1.5 text-[#102A43]">
                <span className="w-2 h-2 rounded-full bg-[#FF6B6B]" />
                Drag to compare natural results
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSliderPosition(10)}
                  className="hover:text-[#FF6B6B] cursor-pointer"
                >
                  Show Before
                </button>
                <span>·</span>
                <button
                  onClick={() => setSliderPosition(90)}
                  className="hover:text-[#22B8B5] cursor-pointer"
                >
                  Show After
                </button>
              </div>
            </div>
          </div>

          {/* Case Narrative Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${activeCase.tagColor}`}>
                {activeCase.category}
              </span>
              <h3 className="text-3xl font-display font-extrabold text-[#102A43] tracking-tight">
                {activeCase.name}
              </h3>
              <p className="text-sm text-[#486581] mt-3 leading-relaxed">
                {activeCase.description}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F3FAFC] border border-[#D9E2EC] space-y-3">
              <p className="text-xs uppercase font-extrabold tracking-wider text-[#102A43]">
                Treatment Details & Time
              </p>
              <p className="text-xs font-bold text-[#22B8B5]">
                {activeCase.timeframe}
              </p>
              <ul className="space-y-2 mt-2">
                {activeCase.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334E68]">
                    <CheckCircle2 className="w-4 h-4 text-[#22B8B5] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl({ treatmentName: activeCase.name })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#FF6B6B] text-white text-sm font-bold hover:bg-[#FA5252] transition-colors shadow-md shadow-[#FF6B6B]/25"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire About {activeCase.name}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
