import React from 'react';
import { getWhatsAppUrl, CLINIC_CONFIG } from '../config/whatsapp';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Train } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF6FA] text-[#102A43] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF6B6B]" />
            <span>STUDIO & INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#102A43] tracking-tight">
            Find us in Mayfair.
          </h2>
          <p className="text-base sm:text-lg text-[#486581] mt-3 font-normal">
            A serene, light-filled dental studio nestled on quiet Willow Lane in central London.
          </p>
        </div>

        {/* Studio Info & Architectural Cartography (Strictly NO forms) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-7 rounded-3xl bg-[#F3FAFC] border border-[#D9E2EC] space-y-3">
              <div className="flex items-center gap-2 text-[#22B8B5]">
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#102A43]">Studio Location</span>
              </div>
              <div className="text-base font-display text-[#102A43]">
                <p className="font-extrabold text-xl">{CLINIC_CONFIG.name}</p>
                <p>{CLINIC_CONFIG.address.line2}</p>
                <p>{CLINIC_CONFIG.address.city}, {CLINIC_CONFIG.address.postcode}</p>
                <p className="text-xs font-semibold text-[#829AB1] uppercase tracking-wider mt-1">Mayfair Precinct · London</p>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="p-7 rounded-3xl bg-[#F3FAFC] border border-[#D9E2EC] space-y-4">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#102A43]">
                Direct Contacts
              </p>
              
              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[#486581] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#22B8B5]" />
                    <span>Phone</span>
                  </span>
                  <a
                    href={`tel:${CLINIC_CONFIG.phoneCallNumber}`}
                    className="font-bold text-[#102A43] hover:text-[#FF6B6B] transition-colors"
                  >
                    {CLINIC_CONFIG.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center justify-between border-t border-[#D9E2EC]/70 pt-3">
                  <span className="text-[#486581] flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#22B8B5]" />
                    <span>Email</span>
                  </span>
                  <a
                    href={`mailto:${CLINIC_CONFIG.email}`}
                    className="font-bold text-[#102A43] hover:text-[#FF6B6B] transition-colors"
                  >
                    {CLINIC_CONFIG.email}
                  </a>
                </div>

                <div className="flex items-center justify-between border-t border-[#D9E2EC]/70 pt-3">
                  <span className="text-[#486581] flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#FF6B6B]" />
                    <span>WhatsApp</span>
                  </span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#FF6B6B] underline underline-offset-4 hover:text-[#FA5252]"
                  >
                    Chat with our team
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="p-7 rounded-3xl bg-[#F3FAFC] border border-[#D9E2EC] space-y-3">
              <div className="flex items-center gap-2 text-[#4DABF7]">
                <Clock className="w-5 h-5" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#102A43]">Opening Hours</span>
              </div>
              <ul className="space-y-2.5 text-sm">
                {CLINIC_CONFIG.hours.map((slot, sIdx) => (
                  <li key={sIdx} className="flex items-center justify-between border-b border-[#D9E2EC]/50 pb-2 last:border-0 last:pb-0">
                    <span className="text-[#486581]">{slot.days}</span>
                    <span className="font-bold text-[#102A43]">{slot.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary Action Button: "Message Us on WhatsApp" */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#FF6B6B] text-white text-base font-bold hover:bg-[#FA5252] transition-colors shadow-lg shadow-[#FF6B6B]/25 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Message Us on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Cartography & Transit Graphic */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[16/11] rounded-[2.5rem] overflow-hidden bg-[#EBF6FA] border-2 border-[#D9E2EC] shadow-xl">
              <svg viewBox="0 0 700 480" fill="none" className="w-full h-full object-cover">
                <rect width="700" height="480" fill="#EBF6FA" />

                {/* Major streets */}
                <path d="M0 120 L700 120" stroke="#FFFFFF" strokeWidth="26" />
                <path d="M0 320 L700 320" stroke="#FFFFFF" strokeWidth="22" />
                <path d="M180 0 L180 480" stroke="#FFFFFF" strokeWidth="24" />
                <path d="M480 0 L480 480" stroke="#FFFFFF" strokeWidth="24" />
                <path d="M260 480 L440 0" stroke="#FFFFFF" strokeWidth="20" />

                {/* Parks in vibrant turquoise tint */}
                <rect x="50" y="160" width="100" height="120" rx="12" fill="#C3FAEB" />
                <text x="100" y="225" textAnchor="middle" fill="#107A78" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Grosvenor Sq</text>

                <rect x="530" y="160" width="120" height="120" rx="12" fill="#C3FAEB" />
                <text x="590" y="225" textAnchor="middle" fill="#107A78" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Berkeley Sq</text>

                {/* Street labels */}
                <text x="320" y="115" fill="#627D98" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.08em">BROOK STREET</text>
                <text x="320" y="315" fill="#627D98" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.08em">MOUNT STREET</text>
                <text x="385" y="240" fill="#22B8B5" fontSize="12" fontFamily="sans-serif" fontWeight="black" transform="rotate(-68 385 240)">WILLOW LANE</text>

                {/* ORA Studio Pin with pulsing coral badge */}
                <g transform="translate(365, 200)">
                  <circle cx="0" cy="0" r="36" fill="#FF6B6B" opacity="0.2" className="animate-ping" />
                  <circle cx="0" cy="0" r="22" fill="#FF6B6B" opacity="0.3" />
                  <circle cx="0" cy="0" r="12" fill="#102A43" />
                  <circle cx="0" cy="0" r="5" fill="#22B8B5" />

                  <rect x="20" y="-32" width="150" height="38" rx="8" fill="#102A43" stroke="#FF6B6B" strokeWidth="2" />
                  <text x="30" y="-18" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">ORA DENTAL</text>
                  <text x="30" y="-6" fill="#22B8B5" fontSize="9" fontFamily="sans-serif" fontWeight="bold">24 WILLOW LANE</text>
                </g>

                {/* Underground Stations */}
                <g transform="translate(180, 120)">
                  <circle cx="0" cy="0" r="10" fill="#E03131" />
                  <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
                  <rect x="-10" y="-3" width="20" height="6" fill="#00247D" />
                  <text x="16" y="5" fill="#102A43" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Bond St (4 min)</text>
                </g>

                <g transform="translate(480, 320)">
                  <circle cx="0" cy="0" r="10" fill="#E03131" />
                  <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
                  <rect x="-10" y="-3" width="20" height="6" fill="#00247D" />
                  <text x="16" y="5" fill="#102A43" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Green Park (6 min)</text>
                </g>
              </svg>

              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#D9E2EC] shadow-md text-xs font-bold text-[#102A43] flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#22B8B5]" />
                <span>Pedestrian Willow Lane entrance</span>
              </div>
            </div>

            {/* Travel info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#F3FAFC] border border-[#D9E2EC]">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#102A43] mb-1">
                  <Train className="w-4 h-4 text-[#22B8B5]" />
                  <span>Tube Stations</span>
                </div>
                <p className="text-xs text-[#486581]">
                  Bond Street (Elizabeth, Central, Jubilee lines) · 4 min walk.<br />
                  Green Park (Piccadilly, Victoria lines) · 6 min walk.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F3FAFC] border border-[#D9E2EC]">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#102A43] mb-1">
                  <Navigation className="w-4 h-4 text-[#FF6B6B]" />
                  <span>Car & Drop-off</span>
                </div>
                <p className="text-xs text-[#486581]">
                  Discreet kerbside drop-off on Willow Lane. Underground parking access provided on advance notice.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
