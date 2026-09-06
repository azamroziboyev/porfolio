import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 text-center relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col items-center">
        {/* Availability Pill / Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0eee8] border border-[#e2e0d8] text-[10px] sm:text-[11px] font-mono tracking-widest text-[#66635b] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{DEVELOPER_INFO.availability}</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#1c1b18] tracking-tight leading-[1.08] max-w-3xl">
          Alex Rozz.
          <span className="block italic font-normal text-[#383632] mt-1 sm:mt-2">
            Junior Python Backend Developer
          </span>
        </h1>

        {/* Descriptive Statement */}
        <p className="mt-8 text-base sm:text-lg text-[#5e5b53] max-w-2xl font-sans leading-relaxed">
          {DEVELOPER_INFO.heroBio}
        </p>

        {/* Primary Stack Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {DEVELOPER_INFO.primaryPills.map((pill) => (
            <span
              key={pill}
              className="px-3.5 py-1 rounded-full bg-[#f2f1ec] border border-[#dcd9ce] text-xs font-mono text-[#42403b] hover:border-[#b8b5aa] transition-colors"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-5 sm:gap-7">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1c1b18] hover:bg-[#2c2a26] text-[#f9f8f5] text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm hover:translate-y-[-1px]"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            className="text-xs sm:text-sm font-mono tracking-wider font-semibold text-[#1c1b18] hover:text-[#5e5b53] uppercase py-2 relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-[#1c1b18] hover:after:bg-[#5e5b53] transition-colors"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
};
