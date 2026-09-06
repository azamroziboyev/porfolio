import React from 'react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 border-t border-[#e8e6df]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#7a776f] uppercase">
            MY JOURNEY
          </span>
        </div>

        {/* Minimal Centered Vertical Timeline */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-[1px] bg-[#d8d5cb]" />

          <div className="space-y-16 relative">
            {JOURNEY_MILESTONES.map((item) => (
              <div key={item.year} className="flex flex-col items-center text-center">
                {/* Timeline node */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#1c1b18] border-2 border-[#f9f8f5] ring-2 ring-[#d8d5cb] z-10 mb-4" />

                {/* Year tag */}
                <div className="text-xs font-mono text-[#8a877e] tracking-wider mb-2">
                  {item.year}
                </div>

                {/* Milestone Title */}
                <h4 className="font-serif text-xl sm:text-2xl text-[#1c1b18] font-normal mb-2">
                  {item.title}
                </h4>

                {/* Milestone Description */}
                <p className="text-xs sm:text-sm text-[#5c5952] max-w-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
