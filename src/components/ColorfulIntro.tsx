import React from 'react';
import { Smile, Sparkles, Shield, Heart, Zap } from 'lucide-react';

export const ColorfulIntro: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-28 relative overflow-hidden bg-white">
      {/* Background colorful geometric elements */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-[3rem] bg-gradient-to-br from-[#102A43] via-[#193858] to-[#102A43] p-8 sm:p-14 lg:p-20 text-white overflow-hidden shadow-2xl shadow-[#102A43]/20">
          
          {/* Dynamic Color Blocking Accents inside the canvas */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF6B6B]/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-96 h-96 rounded-full bg-[#22B8B5]/30 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-[#4DABF7]/20 blur-2xl pointer-events-none" />

          {/* Geometric decorative elements */}
          <div className="absolute top-8 right-12 hidden md:flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#FF6B6B]" />
            <span className="w-4 h-4 rounded-full bg-[#22B8B5]" />
            <span className="w-4 h-4 rounded-full bg-[#4DABF7]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#38D9A9] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B6B]" />
              <span>A Fresh Dental Standard</span>
            </div>

            {/* Large Statement required by prompt */}
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black tracking-tight leading-[1.05]">
              Dentistry can feel <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#4DABF7] to-[#22B8B5]">
                different.
              </span>
            </h2>

            {/* Supporting text required by prompt */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-[#D9E2EC] tracking-tight">
              Less clinical. More comfortable. More personal.
            </p>

            {/* Colorful interactive concept blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
              
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B6B] text-white flex items-center justify-center font-bold mb-4 shadow-md">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">No Clinical Coldness</h3>
                <p className="text-xs sm:text-sm text-[#D9E2EC] leading-relaxed">
                  We replaced harsh fluorescent lights with natural daylight, acoustic calm, and genuine conversations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#22B8B5] text-[#102A43] flex items-center justify-center font-bold mb-4 shadow-md">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Zero Sticky Impressions</h3>
                <p className="text-xs sm:text-sm text-[#D9E2EC] leading-relaxed">
                  3D optical micro-scanners map teeth in 60 seconds with sub-millimeter precision—no goop, no gagging.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#4DABF7] text-white flex items-center justify-center font-bold mb-4 shadow-md">
                  <Smile className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Your Pace, Always</h3>
                <p className="text-xs sm:text-sm text-[#D9E2EC] leading-relaxed">
                  You are in total control. Pause anytime with a simple hand gesture; our team works completely at your comfort level.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
