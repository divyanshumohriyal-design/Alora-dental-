import React from 'react';
import { Coffee, Eye, Sparkles, Smile, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Experience: React.FC = () => {
  const stages = [
    {
      step: "01",
      title: "Your first visit",
      subtitle: "Relaxed consultation, not a rushed exam",
      description: "You'll be welcomed in our bright, plant-filled lounge with your choice of artisan tea, sparkling water, or iced matcha. We spend the first 20 minutes getting to know your goals and addressing any fears.",
      color: "bg-[#FF6B6B]",
      tagColor: "bg-[#FFF4F1] text-[#FF6B6B]",
      borderColor: "border-[#FF6B6B]/30",
      icon: Coffee,
      feature: "Organic tea lounge & unhurried dialogue"
    },
    {
      step: "02",
      title: "Your personalised plan",
      subtitle: "Interactive 3D visuals with zero pressure",
      description: "Together, we review sub-millimeter 3D optical scans on a high-definition studio screen. You'll see exactly what we see. We outline conservative alternatives with honest, transparent pricing.",
      color: "bg-[#22B8B5]",
      tagColor: "bg-[#E6FCF5] text-[#22B8B5]",
      borderColor: "border-[#22B8B5]/30",
      icon: Eye,
      feature: "Complete digital transparency with fixed fees"
    },
    {
      step: "03",
      title: "Your ongoing care",
      subtitle: "Gentle maintenance on your schedule",
      description: "Regular check-ins with our warm-water airflow hygiene team. Between appointments, you have direct WhatsApp access to our clinical desk for any quick questions or advice.",
      color: "bg-[#4DABF7]",
      tagColor: "bg-[#E7F5FF] text-[#4DABF7]",
      borderColor: "border-[#4DABF7]/30",
      icon: Sparkles,
      feature: "Direct WhatsApp concierge support"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F3FAFC] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#102A43] text-xs font-bold uppercase tracking-widest mb-4 border border-[#D9E2EC]">
            <span className="w-2 h-2 rounded-full bg-[#22B8B5]" />
            <span>THE ORA JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#102A43] tracking-tight">
            Come in curious. <span className="text-[#FF6B6B]">Leave confident.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#486581] mt-3 font-normal">
            Here is what your journey looks like from the minute you step through our Mayfair studio doors.
          </p>
        </div>

        {/* Colorful 3-Stage Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                className="rounded-[2.5rem] p-8 sm:p-10 bg-white border border-[#D9E2EC] flex flex-col justify-between shadow-lg shadow-[#102A43]/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className={`w-12 h-12 rounded-2xl ${stage.color} text-white font-display font-black text-xl flex items-center justify-center shadow-md`}>
                      {stage.step}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${stage.tagColor}`}>
                      Stage {stage.step}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#102A43] mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-bold text-[#22B8B5] uppercase tracking-wider mb-4">
                    {stage.subtitle}
                  </p>

                  <p className="text-sm text-[#486581] leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D9E2EC] flex items-center gap-2.5 text-xs font-semibold text-[#102A43]">
                  <Icon className="w-4 h-4 text-[#22B8B5] shrink-0" />
                  <span>{stage.feature}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
