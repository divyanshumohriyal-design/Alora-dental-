/**
 * ORA Dental - Centralized WhatsApp & Studio Configuration
 * "Modern dentistry, made personal."
 */

export const CLINIC_CONFIG = {
  name: "ORA Dental",
  tagline: "Modern dentistry, made personal.",
  whatsappNumber: "+44 20 0000 0000",
  whatsappDigits: "442000000000",
  phoneDisplay: "+44 20 0000 0000",
  phoneCallNumber: "+442000000000",
  email: "hello@oradental.co.uk",
  address: {
    line1: "ORA Dental",
    line2: "24 Willow Lane",
    city: "London",
    postcode: "W1K 4QF",
    country: "United Kingdom",
  },
  hours: [
    { days: "Monday – Friday", time: "8:30 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  stats: [
    { value: "15+", label: "Years of experience" },
    { value: "8,000+", label: "Smiles cared for" },
    { value: "98%", label: "Patient satisfaction" },
    { value: "Modern", label: "Digital dentistry" },
  ]
};

export function getWhatsAppUrl(context?: {
  treatmentName?: string;
  doctorName?: string;
  intent?: 'general' | 'treatment' | 'doctor' | 'makeover';
  customMessage?: string;
}): string {
  if (context?.customMessage) {
    return `https://wa.me/${CLINIC_CONFIG.whatsappDigits}?text=${encodeURIComponent(context.customMessage)}`;
  }

  if (context?.doctorName) {
    return `https://wa.me/${CLINIC_CONFIG.whatsappDigits}?text=${encodeURIComponent(
      `Hi ORA Dental, I'd like to talk to ${context.doctorName} about scheduling a visit.`
    )}`;
  }

  if (context?.treatmentName) {
    if (context.treatmentName.toLowerCase().includes("whitening")) {
      return `https://wa.me/${CLINIC_CONFIG.whatsappDigits}?text=${encodeURIComponent(
        "Hi ORA Dental, I'd like to know more about Teeth Whitening and would like to discuss an appointment."
      )}`;
    }
    if (context.treatmentName.toLowerCase().includes("makeover")) {
      return `https://wa.me/${CLINIC_CONFIG.whatsappDigits}?text=${encodeURIComponent(
        "Hi ORA Dental, I'm interested in exploring Smile Makeovers and would love to arrange a consultation."
      )}`;
    }
    if (context.treatmentName.toLowerCase().includes("implant")) {
      return `https://wa.me/${CLINIC_CONFIG.whatsappDigits}?text=${encodeURIComponent(
        "Hi ORA Dental, I'd like to know more about Dental Implants and would like to discuss an appointment."
      )}`;
    }
    if (context.treatmentName.toLowerCase().includes("aligner") || context.treatmentName.toLowerCase().includes("invisalign")) {
      return `https://wa.me/${CLINIC_CONFIG.whatsappDigits}?text=${encodeURIComponent(
        "Hi ORA Dental, I'd like to know more about Clear Aligners and would like to discuss an appointment."
      )}`;
    }
    return `https://wa.me/${CLINIC_CONFIG.whatsappDigits}?text=${encodeURIComponent(
      `Hi ORA Dental, I'd like to know more about ${context.treatmentName} and would like to discuss an appointment.`
    )}`;
  }

  // Exact default requirement from brief
  return `https://wa.me/${CLINIC_CONFIG.whatsappDigits}?text=${encodeURIComponent(
    "Hi ORA Dental, I'd like to book a dental appointment. Could you please let me know the available timings?"
  )}`;
}
