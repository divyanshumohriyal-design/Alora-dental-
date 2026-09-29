import React from 'react';
import { X, ShieldCheck, Lock, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 text-[#102A43] shadow-2xl border border-[#D9E2EC]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#D9E2EC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6FCF5] text-[#22B8B5] flex items-center justify-center">
              {type === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 id="modal-title" className="text-xl sm:text-2xl font-display font-bold text-[#102A43]">
                {type === 'privacy' ? 'Privacy & Data Policy' : 'Terms of Patient Care'}
              </h3>
              <p className="text-xs text-[#829AB1]">ORA Dental Studio · Mayfair, London</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#829AB1] hover:text-[#102A43] hover:bg-[#F3FAFC] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-5 text-xs sm:text-sm text-[#486581] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <div className="p-4 rounded-2xl bg-[#EBF6FA] border border-[#D9E2EC] flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#22B8B5] shrink-0 mt-0.5" />
                <p className="text-xs font-semibold text-[#102A43]">
                  Zero Patient Health Data is collected, tracked, or stored on this website. All appointment bookings take place directly via official WhatsApp or telephone.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#102A43] mb-1">1. Information We Do Not Collect</h4>
                <p>
                  This website does not feature contact forms, login portals, or trackers. We do not ask for or collect medical history, personal identifiers, prescription records, or diagnostic information through web inputs.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#102A43] mb-1">2. WhatsApp Direct Communication</h4>
                <p>
                  When you initiate a conversation via WhatsApp, communication is end-to-end encrypted under Meta/WhatsApp terms. ORA Dental uses WhatsApp solely for preliminary scheduling inquiries and clinic coordinates.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#102A43] mb-1">3. In-Clinic Medical Records</h4>
                <p>
                  Official clinical records, radiographs, and health questionnaires are managed on secure, air-gapped, encrypted practice management software during in-person consultations, compliant with UK GDPR and GDC standards.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="p-4 rounded-2xl bg-[#FFF4F1] border border-[#FFE3E3] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B6B] shrink-0 mt-0.5" />
                <p className="text-xs font-semibold text-[#102A43]">
                  Every clinical treatment pathway is personalized following a comprehensive examination by Dr. Maya Bennett and our registered dental team.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#102A43] mb-1">1. Consultations & Diagnostic Assessments</h4>
                <p>
                  Website descriptions and smile galleries illustrate typical clinical transformations. Individual clinical viability, risks, and conservative alternatives are confirmed during your in-studio assessment.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#102A43] mb-1">2. Transparent Treatment Estimates</h4>
                <p>
                  All planned procedures receive an itemized, written clinical estimate before any treatment begins. We do not engage in hidden fees or unexpected post-appointment charges.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#102A43] mb-1">3. Cancellations & Rescheduling</h4>
                <p>
                  As an unhurried private studio reserving dedicated surgical suites, we appreciate 48 hours’ advance notice via WhatsApp or phone for appointment adjustments.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#D9E2EC] flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#102A43] text-white text-xs font-bold hover:bg-[#193858] transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
