import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl } from '../config/whatsapp';
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Dentists', href: '#dentists' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3.5 shadow-sm border-b border-[#D9E2EC]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo: ORA */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
            aria-label="ORA Dental Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#102A43] flex items-center justify-center text-white font-display font-black text-xl tracking-tight shadow-md group-hover:scale-105 transition-transform duration-200">
              <span className="text-[#22B8B5]">O</span>
              <span className="text-white">R</span>
              <span className="text-[#FF6B6B]">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl tracking-tight text-[#102A43] leading-none">
                ORA<span className="text-[#22B8B5]">.</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#486581] uppercase">Dental</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#334E68] hover:text-[#102A43] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B6B] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: CTA "Book a Visit" (Opens WhatsApp) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF6B6B] text-white text-sm font-bold tracking-wide hover:bg-[#FA5252] shadow-md shadow-[#FF6B6B]/25 hover:shadow-lg hover:shadow-[#FF6B6B]/35 transition-all duration-200 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Book a Visit</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#FFF5F5] text-[#FF6B6B] sm:hidden"
              aria-label="Book on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#102A43] rounded-xl hover:bg-[#EBF6FA] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white border-b border-[#D9E2EC] shadow-2xl p-6">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-[#102A43] hover:text-[#22B8B5] py-2 border-b border-[#F0F4F8] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#FF6B6B] text-white font-bold shadow-md shadow-[#FF6B6B]/30"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Book a Visit on WhatsApp</span>
            </a>
            <p className="text-center text-xs text-[#829AB1] mt-2 font-medium">
              Immediate chat with our London clinical team
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
