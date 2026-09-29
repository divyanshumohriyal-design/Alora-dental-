import React from 'react';

/**
 * Bespoke Visual Assets for ORA Dental
 * Art-directed with Vibrant Coral (#FF6B6B), Fresh Turquoise (#22B8B5),
 * Bright Sky Blue (#4DABF7), and Deep Ocean Navy (#102A43).
 */

export const HeroVisual: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Decorative Layered Color Blocks & Organic Blobs behind */}
      <div 
        className="absolute -top-6 -right-6 w-72 h-72 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-[#FF6B6B]/15 -z-10 blur-xl animate-pulse pointer-events-none" 
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute -bottom-8 -left-6 w-80 h-80 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] bg-[#22B8B5]/20 -z-10 blur-2xl pointer-events-none" 
      />
      
      {/* Geometric accent circles */}
      <div className="absolute top-4 -left-3 w-8 h-8 rounded-full bg-[#4DABF7] opacity-80 -z-0" />
      <div className="absolute bottom-16 -right-4 w-12 h-12 rounded-full border-4 border-[#FF6B6B] opacity-60 -z-0" />

      {/* Main Organic Shaped Container with Rich Scene */}
      <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-[#102A43] via-[#193858] to-[#22B8B5] p-[3px] shadow-2xl shadow-[#102A43]/15">
        <div className="w-full h-full rounded-[2.35rem] overflow-hidden bg-[#FFFFFF] relative">
          <svg
            viewBox="0 0 760 570"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover select-none"
            role="img"
            aria-label="Modern, welcoming ORA dental studio with warm natural lighting and radiant confident patient"
          >
            <defs>
              <linearGradient id="wallGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F3FAFC" />
                <stop offset="60%" stopColor="#E7F5FF" />
                <stop offset="100%" stopColor="#D0EBFF" />
              </linearGradient>
              <linearGradient id="coralGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FF8787" />
                <stop offset="100%" stopColor="#FF6B6B" />
              </linearGradient>
              <linearGradient id="turqGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38D9A9" />
                <stop offset="100%" stopColor="#22B8B5" />
              </linearGradient>
              <linearGradient id="navyTone" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#193858" />
                <stop offset="100%" stopColor="#102A43" />
              </linearGradient>
              <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FBD7C3" />
                <stop offset="100%" stopColor="#EBB89E" />
              </linearGradient>
            </defs>

            {/* Architectural Studio Room */}
            <rect width="760" height="570" fill="url(#wallGradient)" />
            
            {/* Soft architectural window with daylight */}
            <path d="M420 40 C420 40, 720 40, 720 40 L720 380 L420 380 Z" fill="#FFFFFF" opacity="0.8" />
            <line x1="570" y1="40" x2="570" y2="380" stroke="#D9E2EC" strokeWidth="3" />
            <line x1="420" y1="210" x2="720" y2="210" stroke="#D9E2EC" strokeWidth="3" />
            
            {/* Garden Greenery view outside window */}
            <ellipse cx="640" cy="300" rx="90" ry="110" fill="#22B8B5" opacity="0.25" />
            <circle cx="530" cy="280" r="70" fill="#38D9A9" opacity="0.3" />

            {/* Contemporary Oak & Matte Turquoise Studio Console */}
            <rect x="0" y="380" width="760" height="190" fill="#F0F4F8" />
            <line x1="0" y1="380" x2="760" y2="380" stroke="#D9E2EC" strokeWidth="2" />
            <rect x="60" y="320" width="220" height="180" rx="12" fill="#FFFFFF" stroke="#D9E2EC" strokeWidth="1.5" />
            
            {/* Ceramic vase with monstera / tropical leaves */}
            <path d="M150 320 C140 270, 160 250, 170 250 C180 250, 200 270, 190 320 Z" fill="#22B8B5" />
            <path d="M170 250 Q140 180, 110 160" stroke="#107A78" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="110" cy="160" rx="24" ry="14" fill="#22B8B5" transform="rotate(-30 110 160)" />
            <path d="M170 250 Q200 170, 230 150" stroke="#107A78" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="230" cy="150" rx="22" ry="13" fill="#38D9A9" transform="rotate(35 230 150)" />

            {/* Sleek Ergonomic Medical Lounge Chair (Deep Ocean Navy & Crisp Accent) */}
            <g transform="translate(340, 210)">
              {/* Cast shadow */}
              <ellipse cx="160" cy="280" rx="150" ry="25" fill="#102A43" opacity="0.12" />
              {/* Chair Base */}
              <ellipse cx="160" cy="270" rx="65" ry="14" fill="#D9E2EC" />
              <rect x="150" y="220" width="20" height="50" fill="#9FB3C8" />
              {/* Seat Contour */}
              <path d="M70 190 C70 160, 140 150, 210 155 C260 160, 280 180, 280 205 C270 225, 220 230, 160 230 C90 230, 70 215, 70 190 Z" fill="#102A43" />
              {/* Turquoise Accent Stripe */}
              <path d="M80 195 C110 185, 210 185, 270 200" stroke="#22B8B5" strokeWidth="4" strokeLinecap="round" />
              {/* Gentle Recline Backrest */}
              <path d="M50 140 C30 90, 45 40, 80 25 C115 10, 145 35, 145 80 C145 125, 110 160, 70 160 Z" fill="#193858" transform="rotate(22 70 90)" />
              {/* Headrest */}
              <rect x="95" y="10" width="55" height="30" rx="10" fill="#22B8B5" />
            </g>

            {/* Joyful Patient / Clinician Human Presence (Warm, Expressive) */}
            <g transform="translate(240, 90)">
              {/* Shoulders */}
              <path d="M-20 420 C -10 270, 70 230, 170 230 C 270 230, 350 270, 360 420 Z" fill="#FF6B6B" />
              {/* Collar Accent */}
              <path d="M120 230 L170 310 L220 230 Z" fill="#FFFFFF" />
              {/* Neck */}
              <rect x="145" y="160" width="50" height="80" rx="8" fill="#FBD7C3" />
              {/* Head */}
              <ellipse cx="170" cy="115" rx="55" ry="70" fill="url(#skinGrad)" />
              {/* Hair */}
              <path d="M105 110 C 105 40, 235 40, 235 110 C 240 180, 240 220, 220 230 C 190 240, 150 240, 120 230 C 100 220, 105 170, 105 110 Z" fill="#102A43" />
              {/* Fringe / Hair detail */}
              <path d="M110 90 C 140 50, 210 50, 230 85 C 210 70, 170 70, 130 95 Z" fill="#193858" />
              {/* Face features */}
              <ellipse cx="148" cy="115" rx="5" ry="3.5" fill="#102A43" />
              <circle cx="150" cy="114" r="1.5" fill="#FFFFFF" />
              <ellipse cx="192" cy="115" rx="5" ry="3.5" fill="#102A43" />
              <circle cx="194" cy="114" r="1.5" fill="#FFFFFF" />
              {/* Warm Smile showing bright healthy teeth */}
              <path d="M142 145 C150 168, 190 168, 198 145 Z" fill="#FF8787" />
              <path d="M145 146 C155 156, 185 156, 195 146 Z" fill="#FFFFFF" />
              {/* Cheerful blush */}
              <circle cx="138" cy="132" r="8" fill="#FF6B6B" opacity="0.3" />
              <circle cx="202" cy="132" r="8" fill="#FF6B6B" opacity="0.3" />
            </g>

            {/* Modern Whispering Overhead Light Arc */}
            <path d="M600 60 Q 560 140, 480 180" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round" fill="none" />
            <circle cx="480" cy="180" r="14" fill="#FF6B6B" />
            <circle cx="480" cy="180" r="7" fill="#FFFFFF" />
          </svg>

          {/* Floating Live Badge inside visual */}
          <div className="absolute top-6 left-6 bg-[#FFFFFF]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#D9E2EC] flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#22B8B5] animate-ping" />
            <div>
              <p className="text-[11px] font-bold tracking-wider uppercase text-[#102A43]">ORA Care Protocol</p>
              <p className="text-xs font-medium text-[#22B8B5]">100% Anxiety-Free Certified</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge Required by Prompt: "15+ Years of Care" (Bottom right, elegant & colorful) */}
      <div className="absolute -bottom-5 -right-2 sm:right-6 bg-[#102A43] text-[#FFFFFF] px-5 py-3.5 rounded-2xl shadow-2xl border-2 border-[#22B8B5] flex items-center gap-3.5 transform hover:scale-105 transition-transform duration-200">
        <div className="w-10 h-10 rounded-xl bg-[#FF6B6B] flex items-center justify-center font-display font-extrabold text-white text-base shadow-sm">
          15+
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#38D9A9]">Clinical Trust</p>
          <p className="text-sm font-bold text-white">15+ Years of Care</p>
        </div>
      </div>
    </div>
  );
};

export const DoctorPortrait: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Dynamic color backdrop layers */}
      <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] bg-[#22B8B5] -z-10" />
      <div className="absolute -bottom-3 -right-3 w-full h-full rounded-[2.5rem] bg-[#FF6B6B] -z-20 opacity-80" />

      <div className="w-full aspect-[4/5] rounded-[2.3rem] overflow-hidden bg-[#FFFFFF] border-4 border-white shadow-xl relative">
        <svg
          viewBox="0 0 500 625"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover select-none"
          role="img"
          aria-label="Dr. Maya Bennett, Lead Dentist at ORA Dental"
        >
          <defs>
            <linearGradient id="docGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F3FAFC" />
              <stop offset="60%" stopColor="#E7F5FF" />
              <stop offset="100%" stopColor="#C3FAEB" />
            </linearGradient>
          </defs>

          {/* Background backdrop */}
          <rect width="500" height="625" fill="url(#docGrad)" />
          
          {/* Subtle modern geometric circles */}
          <circle cx="420" cy="120" r="80" fill="#FF6B6B" opacity="0.15" />
          <circle cx="80" cy="480" r="110" fill="#22B8B5" opacity="0.2" />

          {/* Shoulders & Modern Navy Clinician Blazer */}
          <path d="M80 625 C 90 460, 160 380, 250 380 C 340 380, 410 460, 420 625 Z" fill="#102A43" />
          
          {/* Vibrant Coral inner silk top */}
          <path d="M210 380 L250 470 L290 380 Z" fill="#FF6B6B" />
          
          {/* Clean modern lapels */}
          <path d="M170 390 L230 500 L200 510 L140 430 Z" fill="#193858" />
          <path d="M330 390 L270 500 L300 510 L360 430 Z" fill="#193858" />

          {/* Neck */}
          <rect x="225" y="300" width="50" height="90" rx="10" fill="#FBD7C3" />

          {/* Hair back */}
          <ellipse cx="250" cy="220" rx="85" ry="110" fill="#102A43" />

          {/* Face */}
          <ellipse cx="250" cy="225" rx="60" ry="75" fill="#FCE4D6" />

          {/* Hair styling */}
          <path d="M185 200 C 190 120, 310 120, 315 200 C 310 160, 260 150, 185 200 Z" fill="#193858" />
          <path d="M180 180 C 195 135, 230 140, 250 170 C 230 160, 200 165, 180 180 Z" fill="#102A43" />

          {/* Confident Friendly Eyes */}
          <ellipse cx="225" cy="225" rx="7" ry="4.5" fill="#102A43" />
          <circle cx="227" cy="224" r="2" fill="#FFFFFF" />
          <ellipse cx="275" cy="225" rx="7" ry="4.5" fill="#102A43" />
          <circle cx="277" cy="224" r="2" fill="#FFFFFF" />
          {/* Eyebrows */}
          <path d="M215 212 Q 225 208 238 214" stroke="#102A43" strokeWidth="3" strokeLinecap="round" />
          <path d="M262 214 Q 275 208 285 212" stroke="#102A43" strokeWidth="3" strokeLinecap="round" />

          {/* Reassuring, warm natural smile */}
          <path d="M228 270 Q 250 292 272 270" fill="none" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round" />
          <path d="M234 271 Q 250 284 266 271" fill="#FFFFFF" />

          {/* Cheeks */}
          <circle cx="215" cy="245" r="10" fill="#FF8787" opacity="0.35" />
          <circle cx="285" cy="245" r="10" fill="#FF8787" opacity="0.35" />

          {/* Turquoise modern geometric earrings */}
          <circle cx="185" cy="240" r="5" fill="#22B8B5" />
        </svg>

        {/* Doctor credentials badge */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#D9E2EC] shadow-md flex items-center justify-between">
          <div>
            <p className="text-xs uppercase font-extrabold tracking-wider text-[#22B8B5]">BDS (Hons) · GDC 108392</p>
            <p className="text-sm font-display font-bold text-[#102A43]">Dr. Maya Bennett</p>
          </div>
          <span className="px-2.5 py-1 rounded-lg bg-[#FFF5F5] text-[#FF6B6B] text-[11px] font-bold border border-[#FFE3E3]">
            Lead Dentist
          </span>
        </div>
      </div>
    </div>
  );
};

export const SmileMakeoverVisual: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FF6B6B] to-[#FA5252] p-8 text-white ${className}`}>
      {/* Decorative bright turquoise and sky blue organic rings */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#22B8B5]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-[#4DABF7]/30 blur-2xl pointer-events-none" />

      {/* Modern graphic art overlay */}
      <svg viewBox="0 0 600 380" fill="none" className="w-full h-full object-cover">
        {/* Harmonious smiling arch motif */}
        <circle cx="300" cy="190" r="160" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="8 8" opacity="0.4" />
        <circle cx="300" cy="190" r="120" stroke="#22B8B5" strokeWidth="3" opacity="0.6" />
        
        {/* Curated teeth translucency preview */}
        <g transform="translate(160, 110)">
          <rect x="0" y="40" width="280" height="120" rx="24" fill="#FFFFFF" opacity="0.15" />
          {/* Luminous ceramic teeth */}
          <path d="M40 70 C 45 120, 75 120, 80 70 Z" fill="#FFFFFF" />
          <path d="M85 70 C 90 128, 135 128, 140 70 Z" fill="#FFFFFF" />
          <path d="M145 70 C 150 128, 195 128, 200 70 Z" fill="#FFFFFF" />
          <path d="M205 70 C 210 120, 240 120, 245 70 Z" fill="#FFFFFF" />
          {/* Sparkles */}
          <circle cx="140" cy="95" r="4" fill="#22B8B5" />
          <circle cx="85" cy="90" r="3" fill="#4DABF7" />
        </g>
        
        {/* Geometric accent tags */}
        <text x="300" y="320" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.15em">
          PRECISION PORCELAIN & DIGITAL SMILE ARCHITECTURE
        </text>
      </svg>
    </div>
  );
};
