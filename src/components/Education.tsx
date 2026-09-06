import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 border-t border-[#e8e6df]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono tracking-widest text-[#7a776f] uppercase">
            EDUCATION
          </span>
        </div>

        {/* University Degree Info */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1c1b18] mb-2">
            {EDUCATION_DATA.degree}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-[#78756d]">
            {EDUCATION_DATA.institution}
          </p>
        </div>

        {/* Certifications & Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 max-w-2xl mx-auto text-left">
          {/* Left: Certifications */}
          <div>
            <div className="text-center sm:text-left text-[11px] font-mono tracking-widest text-[#858279] uppercase pb-2 border-b border-[#e2e0d8] mb-4">
              CERTIFICATIONS
            </div>
            <ul className="space-y-3">
              {EDUCATION_DATA.certifications.map((item) => (
                <li key={item} className="text-xs sm:text-sm text-[#45423b] font-mono flex items-start gap-2">
                  <span className="text-[#a8a59b] text-[10px] mt-0.5">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Courses */}
          <div>
            <div className="text-center sm:text-left text-[11px] font-mono tracking-widest text-[#858279] uppercase pb-2 border-b border-[#e2e0d8] mb-4">
              COURSES
            </div>
            <ul className="space-y-3">
              {EDUCATION_DATA.courses.map((item) => (
                <li key={item} className="text-xs sm:text-sm text-[#45423b] font-mono flex items-start gap-2">
                  <span className="text-[#a8a59b] text-[10px] mt-0.5">◆</span>
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
