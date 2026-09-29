import React from 'react';
import { CLINIC_CONFIG } from '../config/whatsapp';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#F3FAFC] border-y border-[#D9E2EC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#D9E2EC]">
          {CLINIC_CONFIG.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx > 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}`}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A43] tracking-tight">
                  {stat.value}
                </span>
                {idx === 0 && <span className="w-2 h-2 rounded-full bg-[#FF6B6B]" />}
                {idx === 1 && <span className="w-2 h-2 rounded-full bg-[#22B8B5]" />}
                {idx === 2 && <span className="w-2 h-2 rounded-full bg-[#4DABF7]" />}
                {idx === 3 && <span className="w-2 h-2 rounded-full bg-[#FF6B6B]" />}
              </div>
              <p className="text-sm font-semibold text-[#486581] mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
