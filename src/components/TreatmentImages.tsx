import React from 'react';

/**
 * Editorial Dental Photography for ORA Dental Treatments
 * Features diverse individuals, modern high-tech clinical environments,
 * vibrant color-accented lighting, and authentic expressions.
 * High-resolution curated Unsplash images optimized with webp, quality params,
 * and lazy loading.
 */

export interface TreatmentVisualMeta {
  src: string;
  fallbackSrc: string;
  alt: string;
  badge: string;
  caption: string;
  accentBg: string;
  accentText: string;
}

export const TREATMENT_IMAGES: Record<string, TreatmentVisualMeta> = {
  'general-dentistry': {
    // Modern dental examination with precision micro-tools & digital lighting
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    fallbackSrc: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    alt: "Patient receiving gentle, comprehensive oral exam with modern biomimetic dental tools",
    badge: "Biomimetic Health",
    caption: "Minimally invasive restorative care preserving healthy tooth structure",
    accentBg: "bg-[#FFF4F1]",
    accentText: "text-[#FF6B6B]",
  },
  'preventive-care': {
    // Warm, welcoming clinic hygiene session with smiling patient and caring hygienist
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    fallbackSrc: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    alt: "Gentle warm-water airflow hygiene treatment session with smiling patient",
    badge: "Airflow GBT Therapy",
    caption: "Zero-sensitivity cleaning with heated airflow technology",
    accentBg: "bg-[#E6FCF5]",
    accentText: "text-[#22B8B5]",
  },
  'cosmetic-dentistry': {
    // Diverse smiling woman showing natural, beautiful tooth contours
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    fallbackSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    alt: "Portrait of woman with natural, radiant smile after aesthetic edge bonding",
    badge: "Facial Harmony",
    caption: "Hand-crafted porcelain veneers & natural composite bonding",
    accentBg: "bg-[#E7F5FF]",
    accentText: "text-[#4DABF7]",
  },
  'teeth-whitening': {
    // Radiant clean smile close-up with healthy bright enamel and warm skin tone
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    fallbackSrc: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    alt: "Close-up of bright, naturally whitened healthy smile",
    badge: "Safe Vita Radiance",
    caption: "Desensitized neutral-pH laser & custom overnight whitening",
    accentBg: "bg-[#FFF5F5]",
    accentText: "text-[#FF6B6B]",
  },
  'clear-aligners': {
    // Confident young man holding/wearing clear orthodontic aligner with happy expression
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    fallbackSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    alt: "Confident man smiling happily during clear aligner orthodontic treatment",
    badge: "Invisible 3D Alignment",
    caption: "Custom removable aligners planned with 3D digital simulation",
    accentBg: "bg-[#E6FCF5]",
    accentText: "text-[#22B8B5]",
  },
  'dental-implants': {
    // High-tech modern surgical suite with 3D guided computer screen and skilled doctor
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    fallbackSrc: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80",
    alt: "Advanced 3D guided surgical setup for precision dental implant placement",
    badge: "Guided 3D Precision",
    caption: "Titanium & ceramic biocompatible roots for lifetime strength",
    accentBg: "bg-[#E7F5FF]",
    accentText: "text-[#4DABF7]",
  },
};

/**
 * Editorial Treatment Card Graphic with Organic Rounded Frame,
 * Layered Accent Badges, and Hover Dynamics
 */
export const TreatmentImageCard: React.FC<{
  treatmentId: string;
  className?: string;
  isHovered?: boolean;
}> = ({ treatmentId, className = "", isHovered = false }) => {
  const meta = TREATMENT_IMAGES[treatmentId] || TREATMENT_IMAGES['general-dentistry'];

  return (
    <div className={`relative group/img overflow-hidden rounded-[2rem] bg-[#F0F4F8] p-[3px] transition-all duration-500 shadow-md ${className}`}>
      {/* Decorative organic color backing */}
      <div 
        className={`absolute -inset-1 rounded-[2.2rem] opacity-75 blur-sm transition-all duration-500 ${
          isHovered ? 'scale-105 opacity-100' : 'opacity-40'
        } ${meta.accentBg === 'bg-[#FFF4F1]' ? 'bg-[#FF6B6B]/30' : meta.accentBg === 'bg-[#E6FCF5]' ? 'bg-[#22B8B5]/30' : 'bg-[#4DABF7]/30'}`}
      />

      <div className="relative w-full h-full rounded-[1.85rem] overflow-hidden bg-white">
        <img
          src={meta.src}
          alt={meta.alt}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            // Fallback gracefully if primary fails
            const target = e.target as HTMLImageElement;
            if (target.src !== meta.fallbackSrc) {
              target.src = meta.fallbackSrc;
            }
          }}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            isHovered ? 'scale-110 brightness-[1.03]' : 'scale-100'
          }`}
        />

        {/* Ambient Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/85 via-[#102A43]/20 to-transparent opacity-90 transition-opacity duration-300" />

        {/* Floating pill badge */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-sm backdrop-blur-md bg-white/95 ${meta.accentText}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${meta.accentText.replace('text-', 'bg-')}`} />
            {meta.badge}
          </span>
        </div>

        {/* Bottom caption reveal */}
        <div className="absolute bottom-3 left-3.5 right-3.5 z-10">
          <p className="text-white text-xs font-semibold leading-snug drop-shadow-sm line-clamp-2">
            {meta.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
