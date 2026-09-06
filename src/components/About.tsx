import React from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-[#e8e6df]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Tag */}
        <div className="text-center mb-8">
          <span className="text-xs font-mono tracking-widest text-[#7a776f] uppercase">
            ABOUT ME
          </span>
        </div>

        {/* Lead Headline */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#1c1b18] leading-snug">
            {DEVELOPER_INFO.aboutStatement}
          </h2>
        </div>

        {/* Extended Narrative */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-sm sm:text-base text-[#5c5952] leading-relaxed">
            {DEVELOPER_INFO.aboutBio}
          </p>
        </div>

        {/* Highlight Quote */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <blockquote className="font-serif italic text-base sm:text-lg text-[#383632]">
            &ldquo;{DEVELOPER_INFO.quote}&rdquo;
          </blockquote>
        </div>

        {/* Developer Profile Card */}
        <div className="bg-[#f2f1eb] border border-[#e2e0d8] rounded-xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono tracking-widest text-[#78756d] uppercase">
              DEVELOPER PROFILE
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#e2e0d8]">
            <div className="pt-3 md:pt-0">
              <div className="text-[10px] font-mono tracking-wider text-[#827f76] uppercase mb-1">
                ROLE
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#1c1b18]">
                {DEVELOPER_INFO.profile.role}
              </div>
            </div>

            <div className="pt-3 md:pt-0 md:pl-6">
              <div className="text-[10px] font-mono tracking-wider text-[#827f76] uppercase mb-1">
                FOCUS
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#1c1b18]">
                {DEVELOPER_INFO.profile.focus}
              </div>
            </div>

            <div className="pt-3 md:pt-0 md:pl-6">
              <div className="text-[10px] font-mono tracking-wider text-[#827f76] uppercase mb-1">
                LOCATION
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#1c1b18]">
                {DEVELOPER_INFO.profile.location}
              </div>
            </div>

            <div className="pt-3 md:pt-0 md:pl-6">
              <div className="text-[10px] font-mono tracking-wider text-[#827f76] uppercase mb-1">
                STATUS
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#1c1b18] inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>{DEVELOPER_INFO.profile.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
