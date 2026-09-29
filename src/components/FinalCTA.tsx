import React from 'react';
import { getWhatsAppUrl, CLINIC_CONFIG } from '../config/whatsapp';
import { MessageCircle, Phone, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-[#102A43] via-[#193858] to-[#102A43] text-white relative overflow-hidden">
      {/* Dynamic Colorful Orbs */}
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#FF6B6B]/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#22B8B5]/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#4DABF7]/15 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-8">
        
        {/* Colorful badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#38D9A9] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-4 h-4 text-[#FF6B6B]" />
          <span>START WITH A CHAT</span>
        </div>

        {/* Headline required by prompt */}
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black tracking-tight leading-[1.08] max-w-3xl mx-auto">
          Ready to love <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#4DABF7] to-[#22B8B5]">
            your smile?
          </span>
        </h2>

        {/* Supporting text required by prompt */}
        <p className="text-lg sm:text-xl lg:text-2xl font-display font-medium text-[#D9E2EC] max-w-2xl mx-auto leading-relaxed">
          Let's make your next dental visit a little easier.
        </p>

        {/* Action Buttons: Primary WhatsApp & Secondary Call */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#FF6B6B] text-white text-base font-bold tracking-wide hover:bg-[#FA5252] shadow-xl shadow-[#FF6B6B]/30 hover:shadow-2xl hover:shadow-[#FF6B6B]/45 transition-all duration-200 active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${CLINIC_CONFIG.phoneCallNumber}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 text-white text-base font-bold hover:bg-white/20 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-[#22B8B5]" />
            <span>Call the Clinic</span>
          </a>
        </div>

        {/* Human Signals */}
        <div className="pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-semibold text-[#D9E2EC]">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-[#FF6B6B]" />
            <span>Direct dialogue with Dr. Maya & clinical staff</span>
          </div>
          <span className="hidden sm:inline text-white/30">·</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#22B8B5]" />
            <span>No clinical pressure or pushy upselling</span>
          </div>
        </div>

      </div>
    </section>
  );
};
