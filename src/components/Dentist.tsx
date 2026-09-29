import React from 'react';
import { getWhatsAppUrl } from '../config/whatsapp';
import { DoctorPortrait } from './Visuals';
import { MessageCircle, Award, GraduationCap, Clock, CheckCircle2 } from 'lucide-react';

export const Dentist: React.FC = () => {
  const credentials = [
    {
      icon: GraduationCap,
      label: "Education & Honours",
      value: "BDS (Hons) King's College London · Clinical Distinction in Aesthetic Restorations",
      badgeColor: "bg-[#FFF4F1] text-[#FF6B6B]",
    },
    {
      icon: Award,
      label: "Accreditations",
      value: "Member of the British Academy of Cosmetic Dentistry (BACD) · GDC 108392",
      badgeColor: "bg-[#E6FCF5] text-[#22B8B5]",
    },
    {
      icon: Clock,
      label: "Clinical Focus",
      value: "15+ Years specialized in minimal-prep aesthetic dentistry and anxiety-sensitive care",
      badgeColor: "bg-[#E7F5FF] text-[#4DABF7]",
    }
  ];

  return (
    <section id="dentists" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF6FA] text-[#102A43] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF6B6B]" />
            <span>CLINICAL LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#102A43] tracking-tight">
            Meet the people behind the smiles.
          </h2>
          <p className="text-base sm:text-lg text-[#486581] mt-3 font-normal">
            Dentistry is an intimate medical relationship. Our clinicians combine hospital-grade rigor with warmth and empathy.
          </p>
        </div>

        {/* Editorial Layout: Dr. Maya Bennett Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait on Left */}
          <div className="lg:col-span-5">
            <DoctorPortrait className="max-w-md mx-auto" />
          </div>

          {/* Narrative Content on Right */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#FF6B6B] text-white text-xs font-bold uppercase tracking-wider">
                  Lead Dentist
                </span>
                <span className="text-xs font-bold text-[#22B8B5] uppercase tracking-wider">
                  GDC No. 108392
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#102A43] tracking-tight">
                Dr. Maya Bennett
              </h3>
            </div>

            {/* Core Bio required by prompt */}
            <p className="text-lg sm:text-xl font-display font-medium text-[#243B53] leading-relaxed">
              Dr. Maya Bennett believes great dentistry should feel approachable, transparent and completely centred around the patient.
            </p>

            <div className="p-6 rounded-2xl bg-[#F3FAFC] border border-[#D9E2EC] text-[#334E68] text-sm leading-relaxed italic border-l-4 border-l-[#22B8B5]">
              "For too many people, dentistry has been wrapped in stress, cold jargon, and discomfort. My mission at ORA is to make every appointment feel like an unhurried, collaborative partnership where you always feel in complete control."
            </div>

            {/* Qualifications / Credentials */}
            <div className="space-y-3.5 pt-2">
              {credentials.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#D9E2EC]/70 shadow-xs">
                    <div className={`p-2 rounded-lg ${c.badgeColor} shrink-0 mt-0.5`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-extrabold tracking-wider text-[#102A43]">
                        {c.label}
                      </p>
                      <p className="text-xs sm:text-sm text-[#486581] mt-0.5">
                        {c.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA: "Talk to Dr. Maya" */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl({ doctorName: "Dr. Maya Bennett" })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#102A43] text-white text-base font-bold hover:bg-[#193858] transition-all shadow-md active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 text-[#38D9A9]" />
                <span>Talk to Dr. Maya</span>
              </a>

              <span className="text-xs text-[#829AB1] font-medium text-center sm:text-left">
                Direct preliminary inquiries directly via WhatsApp. Unhurried answers guaranteed.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
