import React, { useState } from 'react';
import { getWhatsAppUrl, CLINIC_CONFIG } from '../config/whatsapp';
import { MessageCircle, Instagram, Facebook } from 'lucide-react';
import { PrivacyModal } from './PrivacyModal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#102A43] text-white py-16 border-t-4 border-[#22B8B5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-white text-[#102A43] flex items-center justify-center font-display font-black text-lg">
                <span className="text-[#22B8B5]">O</span>
                <span className="text-[#102A43]">R</span>
                <span className="text-[#FF6B6B]">A</span>
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                ORA<span className="text-[#22B8B5]">.</span>
              </span>
            </div>
            
            <p className="font-display font-bold text-lg text-[#38D9A9]">
              {CLINIC_CONFIG.tagline}
            </p>

            <p className="text-xs text-[#9FB3C8] max-w-sm leading-relaxed">
              A modern, patient-first dental clinic located in Mayfair, London. Focused on gentle craftsmanship, digital accuracy, and genuine relationships.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <p className="font-extrabold uppercase tracking-wider text-xs text-[#4DABF7]">
                Studio
              </p>
              <ul className="space-y-2 text-xs font-semibold text-[#D9E2EC]">
                <li><a href="#home" className="hover:text-[#FF6B6B] transition-colors">Home</a></li>
                <li><a href="#story" className="hover:text-[#FF6B6B] transition-colors">Our Story</a></li>
                <li><a href="#treatments" className="hover:text-[#FF6B6B] transition-colors">Treatments</a></li>
                <li><a href="#results" className="hover:text-[#FF6B6B] transition-colors">Smile Results</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="font-extrabold uppercase tracking-wider text-xs text-[#22B8B5]">
                Team & Care
              </p>
              <ul className="space-y-2 text-xs font-semibold text-[#D9E2EC]">
                <li><a href="#dentists" className="hover:text-[#22B8B5] transition-colors">Dr. Maya Bennett</a></li>
                <li><a href="#contact" className="hover:text-[#22B8B5] transition-colors">Location</a></li>
                <li><a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-[#22B8B5] transition-colors">WhatsApp Desk</a></li>
              </ul>
            </div>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="md:col-span-3 space-y-4">
            <p className="font-extrabold uppercase tracking-wider text-xs text-[#FF6B6B]">
              Direct Inquiries
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all border border-white/15 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#FF6B6B]" />
              <span>WhatsApp: +44 20 0000 0000</span>
            </a>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FF6B6B] text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#22B8B5] text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#4DABF7] text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#829AB1]">
          <p>© {currentYear} ORA Dental Studio Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="hover:text-[#38D9A9] transition-colors cursor-pointer"
            >
              Privacy Notice
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setModalType('terms')}
              className="hover:text-[#38D9A9] transition-colors cursor-pointer"
            >
              Terms of Care
            </button>
            <span>·</span>
            <span>CQC & GDC Regulated (No. 108392)</span>
          </div>
        </div>

      </div>

      {/* Privacy & Terms Policy Dialog */}
      <PrivacyModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType || 'privacy'}
      />
    </footer>
  );
};
