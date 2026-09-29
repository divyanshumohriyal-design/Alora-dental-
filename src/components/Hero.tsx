import React from 'react';
import { getWhatsAppUrl } from '../config/whatsapp';
import { HeroVisual } from './Visuals';
import { MessageCircle, ArrowRight, Sparkles, Shield, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-[#F3FAFC]">
      {/* Background Soft Blobs & Geometric accents */}
      <div 
        className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-[#4DABF7]/10 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-1/4 w-[480px] h-[480px] rounded-full bg-[#22B8B5]/15 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Bold Typography & Action Controls */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Small eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D9E2EC] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF6B6B]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#102A43] uppercase">
                MODERN DENTISTRY
              </span>
            </div>

            {/* Large headline with "better" highlighted in Coral */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#102A43] leading-[1.1] tracking-tight">
              Your smile deserves{' '}
              <span className="text-[#FF6B6B] underline decoration-[#22B8B5] decoration-wavy decoration-2 underline-offset-8">
                better
              </span>{' '}
              than ordinary.
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-[#334E68] font-sans leading-relaxed max-w-xl">
              Thoughtful dental care, modern technology and a team that puts your comfort first. Experience dentistry designed for human beings.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#FF6B6B] text-white text-base font-bold tracking-wide hover:bg-[#FA5252] transition-all duration-200 shadow-lg shadow-[#FF6B6B]/25 hover:shadow-xl hover:shadow-[#FF6B6B]/35 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Book Your Visit</span>
              </a>

              <a
                href="#dentists"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white text-[#102A43] text-base font-bold border-2 border-[#D9E2EC] hover:border-[#22B8B5] hover:bg-[#EBF6FA] transition-all duration-200"
              >
                <span>Meet Our Team</span>
                <ArrowRight className="w-4 h-4 text-[#22B8B5]" />
              </a>
            </div>

            {/* Micro Trust badges */}
            <div className="pt-6 border-t border-[#D9E2EC] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-semibold text-[#486581]">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#E6FCF5] text-[#22B8B5] flex items-center justify-center">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span>Same-Day Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#FFF5F5] text-[#FF6B6B] flex items-center justify-center">
                  <Heart className="w-3 h-3" />
                </div>
                <span>Zero Judgment Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#E7F5FF] text-[#4DABF7] flex items-center justify-center">
                  <Shield className="w-3 h-3" />
                </div>
                <span>Central London Studio</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Organic Shape & Layered Colors */}
          <div className="lg:col-span-6">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
