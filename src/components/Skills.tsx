import React from 'react';
import { TECH_STACK } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-[#e8e6df]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Tag */}
        <div className="text-center mb-14">
          <span className="text-xs font-mono tracking-widest text-[#7a776f] uppercase">
            TECHNICAL STACK
          </span>
        </div>

        {/* 4 Category Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Backend Column */}
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1c1b18] pb-3 border-b border-[#e2e0d8] mb-4">
              Backend
            </h3>
            <ul className="space-y-2.5">
              {TECH_STACK.backend.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#4a4741] font-mono">
                  <span className="text-[#a19e94] text-[10px]">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Database Column */}
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1c1b18] pb-3 border-b border-[#e2e0d8] mb-4">
              Database
            </h3>
            <ul className="space-y-2.5">
              {TECH_STACK.database.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#4a4741] font-mono">
                  <span className="text-[#a19e94] text-[10px]">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Column */}
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1c1b18] pb-3 border-b border-[#e2e0d8] mb-4">
              Tools
            </h3>
            <ul className="space-y-2.5">
              {TECH_STACK.tools.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#4a4741] font-mono">
                  <span className="text-[#a19e94] text-[10px]">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Frontend Column */}
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1c1b18] pb-3 border-b border-[#e2e0d8] mb-4">
              Frontend
            </h3>
            <ul className="space-y-2.5">
              {TECH_STACK.frontend.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#4a4741] font-mono">
                  <span className="text-[#a19e94] text-[10px]">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
