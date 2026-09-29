import React from 'react';
import { Quote, Star, Sparkles } from 'lucide-react';

export const PatientStories: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F3FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#102A43] text-xs font-bold uppercase tracking-widest mb-4 border border-[#D9E2EC]">
            <span className="w-2 h-2 rounded-full bg-[#22B8B5]" />
            <span>PATIENT REFLECTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#102A43] tracking-tight">
            Real people. Real smiles.
          </h2>
          <p className="text-base sm:text-lg text-[#486581] mt-3 font-normal">
            No stock stories. These are candid experiences from patients who found confidence and comfort at ORA.
          </p>
        </div>

        {/* Varied Asymmetric Layouts (Anti-identical cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Testimonial 1: Large Featured Block (Warm Peach / Coral Tint) */}
          <div className="lg:col-span-7 rounded-[2.5rem] p-8 sm:p-12 bg-[#FFF4F1] border-2 border-[#FFE3E3] flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FF6B6B]/10 blur-2xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-1.5 text-[#FF6B6B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <blockquote className="font-display font-bold text-2xl sm:text-3xl text-[#102A43] leading-snug">
                "I used to avoid the dentist completely. The team at ORA somehow made the entire experience feel easy."
              </blockquote>

              <p className="text-sm sm:text-base text-[#486581] leading-relaxed">
                From the moment I walked into the lounge, Dr. Maya listened without lecturing me about missed checkups. Two painless visits later, my chipped front tooth was completely repaired with natural composite bonding.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-[#FF6B6B]/20 flex items-center justify-between relative z-10">
              <div>
                <p className="font-display font-bold text-lg text-[#102A43]">Emma R.</p>
                <p className="text-xs font-semibold text-[#FF6B6B]">Cosmetic Edge Bonding · London</p>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#FF6B6B] border border-[#FFE3E3]">
                Verified Patient
              </span>
            </div>
          </div>

          {/* Column with 2 stacked different layouts */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Testimonial 2: Crisp Turquoise Block */}
            <div className="rounded-[2.2rem] p-8 bg-[#E6FCF5] border-2 border-[#C3FAEB] flex flex-col justify-between shadow-md flex-1">
              <div>
                <div className="flex items-center gap-1 text-[#22B8B5] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <blockquote className="font-display font-bold text-lg text-[#102A43] mb-3 leading-snug">
                  "No sticky mold trays, no lecturing, and the 3D scans showed me exactly where my teeth were shifting."
                </blockquote>
                <p className="text-xs sm:text-sm text-[#486581] leading-relaxed">
                  Clear aligners were finished in under 6 months. Having WhatsApp support for quick questions was unbelievable.
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#22B8B5]/20 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-sm text-[#102A43]">Liam K.</p>
                  <p className="text-xs text-[#22B8B5] font-semibold">Clear Aligners</p>
                </div>
                <span className="text-[11px] font-bold text-[#107A78]">Canary Wharf</span>
              </div>
            </div>

            {/* Testimonial 3: Sky Blue Block */}
            <div className="rounded-[2.2rem] p-8 bg-[#E7F5FF] border-2 border-[#D0EBFF] flex flex-col justify-between shadow-md flex-1">
              <div>
                <div className="flex items-center gap-1 text-[#4DABF7] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <blockquote className="font-display font-bold text-lg text-[#102A43] mb-3 leading-snug">
                  "The warm-water airflow hygiene is a game changer. First time in 15 years I had zero pain during a cleaning."
                </blockquote>
                <p className="text-xs sm:text-sm text-[#486581] leading-relaxed">
                  I used to grip the dental chair until my knuckles went white. At ORA, I actually listened to a podcast and relaxed.
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#4DABF7]/20 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-sm text-[#102A43]">Nadia S.</p>
                  <p className="text-xs text-[#4DABF7] font-semibold">Guided Biofilm Preventive Care</p>
                </div>
                <span className="text-[11px] font-bold text-[#339AF0]">Mayfair</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
