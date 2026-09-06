/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { EngineeringPhilosophy } from './components/EngineeringPhilosophy';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9f8f5] text-[#1c1b18] font-sans antialiased selection:bg-[#1c1b18] selection:text-[#f9f8f5]">
      {/* Top Fixed Minimalist Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section & Developer Profile */}
        <About />

        {/* 3. Technical Stack (4 Columns) */}
        <Skills />

        {/* 4. Selected Projects with Architectural Illustrations */}
        <Projects />

        {/* 5. My Journey Timeline */}
        <Experience />

        {/* 6. Engineering Philosophy (Dark Accent Contrast Section) */}
        <EngineeringPhilosophy />

        {/* 7. Education & Certifications */}
        <Education />

        {/* 8. Contact & Social Footers */}
        <Contact />
      </main>
    </div>
  );
}
