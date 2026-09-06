import React from 'react';
import { Lightbulb, Compass, Cog, CheckCircle2 } from 'lucide-react';
import { PHILOSOPHY_STEPS } from '../data/portfolioData';

export const EngineeringPhilosophy: React.FC = () => {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#141517] text-[#f4f3ee]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-xs font-mono tracking-widest text-[#9c988e] uppercase block mb-3">
            ENGINEERING PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight">
            How I approach building software.
          </h2>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-20 text-center md:text-left">
          {PHILOSOPHY_STEPS.map((step) => (
            <div key={step.step} className="flex flex-col items-center md:items-start">
              {/* Step Number */}
              <div className="text-sm font-mono text-[#8a867c] mb-3">
                {step.step}
              </div>

              {/* Step Title */}
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs sm:text-sm text-[#a8a499] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Flow Diagram (Idea -> Design -> Build -> Test) */}
        <div className="pt-12 border-t border-[#26282c]">
          <div className="relative flex items-center justify-between max-w-xl mx-auto">
            {/* Connecting Horizontal Line */}
            <div className="absolute top-5 left-8 right-8 h-[1px] bg-[#2e3138] z-0" />

            {/* Node 1: Idea */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#1e2024] border border-[#343840] flex items-center justify-center text-[#e2ded4] mb-2 shadow-sm">
                <Lightbulb className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono text-[#9e9a90]">Idea</span>
            </div>

            {/* Node 2: Design */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#1e2024] border border-[#343840] flex items-center justify-center text-[#e2ded4] mb-2 shadow-sm">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono text-[#9e9a90]">Design</span>
            </div>

            {/* Node 3: Build */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#1e2024] border border-[#343840] flex items-center justify-center text-[#e2ded4] mb-2 shadow-sm">
                <Cog className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono text-[#9e9a90]">Build</span>
            </div>

            {/* Node 4: Test */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#1e2024] border border-[#343840] flex items-center justify-center text-[#e2ded4] mb-2 shadow-sm">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono text-[#9e9a90]">Test</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
