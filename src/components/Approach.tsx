import React from 'react';
import { MessageSquare, Compass, ShieldCheck } from 'lucide-react';

export const Approach: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Listen",
      quote: "We start by understanding what you want—not simply what you need.",
      description: "Before picking up any clinical instruments, we sit down with you for an unhurried consultation. We talk about past dental anxiety, aesthetic preferences, and long-term health objectives.",
      badgeColor: "bg-[#FF6B6B]",
      textColor: "text-[#FF6B6B]",
      borderColor: "border-[#FF6B6B]/20",
      bgColor: "bg-[#FFF4F1]",
      icon: MessageSquare,
    },
    {
      number: "02",
      title: "Plan",
      quote: "Every treatment is explained clearly, with options that make sense for you.",
      description: "Using interactive 3D digital imaging, we map out every option with transparent fee structures. No surprising jargon, no upsells—just clear, conservative clinical choices.",
      badgeColor: "bg-[#22B8B5]",
      textColor: "text-[#22B8B5]",
      borderColor: "border-[#22B8B5]/20",
      bgColor: "bg-[#E6FCF5]",
      icon: Compass,
    },
    {
      number: "03",
      title: "Care",
      quote: "Modern dentistry delivered with patience, precision and genuine attention.",
      description: "Gentle warmed local anesthetics, noise-cancelling headphones, and warm towels. Our appointments are carefully unhurried so you always feel completely looked after.",
      badgeColor: "bg-[#4DABF7]",
      textColor: "text-[#4DABF7]",
      borderColor: "border-[#4DABF7]/20",
      bgColor: "bg-[#E7F5FF]",
      icon: ShieldCheck,
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF6FA] text-[#102A43] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#22B8B5]" />
            <span>OUR PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#102A43] leading-tight tracking-tight">
            Good dentistry starts with{' '}
            <span className="text-[#22B8B5]">good conversations.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#486581] mt-4 font-normal leading-relaxed">
            We tore up the traditional clinical playbook. At ORA Dental, your experience is centered around trust, open listening, and gentle craftsmanship.
          </p>
        </div>

        {/* Asymmetric Editorial 3-Step Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`lg:col-span-4 rounded-3xl p-8 sm:p-10 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${step.bgColor} ${step.borderColor} flex flex-col justify-between`}
              >
                <div>
                  {/* Top: Colorful Number Indicator & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className={`w-12 h-12 rounded-2xl ${step.badgeColor} text-white font-display font-black text-xl flex items-center justify-center shadow-md`}>
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center shadow-xs">
                      <Icon className={`w-5 h-5 ${step.textColor}`} />
                    </div>
                  </div>

                  {/* Title & Core Quote */}
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#102A43] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-display font-semibold text-base sm:text-lg text-[#102A43] leading-snug mb-4">
                    "{step.quote}"
                  </p>
                </div>

                <p className="text-sm text-[#486581] leading-relaxed pt-4 border-t border-black/5">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
