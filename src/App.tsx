/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ColorfulIntro } from './components/ColorfulIntro';
import { TrustSection } from './components/TrustSection';
import { Approach } from './components/Approach';
import { Treatments } from './components/Treatments';
import { Dentist } from './components/Dentist';
import { PatientStories } from './components/PatientStories';
import { SmileResults } from './components/SmileResults';
import { Experience } from './components/Experience';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F3FAFC] text-[#102A43] font-sans selection:bg-[#FF6B6B]/20 selection:text-[#102A43]">
      {/* 1. Header & Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Colorful Introduction ("Dentistry can feel different.") */}
        <ColorfulIntro />

        {/* 4. Compact Trust Section (Stats & Digital Dentistry) */}
        <TrustSection />

        {/* 5. Our Approach (01 Listen, 02 Plan, 03 Care) */}
        <Approach />

        {/* 6. Treatments (Interactive Editorial List & Smile Makeovers Feature) */}
        <Treatments />

        {/* 7. Dentist Section (Dr. Maya Bennett) */}
        <Dentist />

        {/* 8. Patient Stories ("Real people. Real smiles.") */}
        <PatientStories />

        {/* 9. Smile Results (Interactive Before / After Slider) */}
        <SmileResults />

        {/* 10. Experience Section ("Come in curious. Leave confident.") */}
        <Experience />

        {/* 11. Final CTA ("Ready to love your smile?") */}
        <FinalCTA />

        {/* 12. Contact Section (Central London Location, NO forms) */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* 14. Floating WhatsApp Concierge Button */}
      <FloatingWhatsApp />
    </div>
  );
}
