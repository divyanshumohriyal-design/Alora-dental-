import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl } from '../config/whatsapp';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-fadeIn"
    >
      {/* Subtle tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#102A43] text-white px-3.5 py-2 rounded-2xl shadow-xl text-xs font-bold border border-[#22B8B5]/40">
          <span className="w-2 h-2 rounded-full bg-[#22B8B5] animate-ping" />
          <span>Chat with ORA Team</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#829AB1] hover:text-white p-0.5 ml-1 cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ORA Dental on WhatsApp"
        className="w-14 h-14 rounded-2xl bg-[#FF6B6B] text-white flex items-center justify-center shadow-xl shadow-[#FF6B6B]/35 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22B8B5]"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </aside>
  );
};
