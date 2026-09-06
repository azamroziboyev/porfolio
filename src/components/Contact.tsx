import React, { useState } from 'react';
import { Mail, MessageSquare, Check, Copy } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-[#e8e6df]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-mono tracking-widest text-[#7a776f] uppercase">
            CONTACT
          </span>
        </div>

        {/* Main Headline with Italic Accent */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#1c1b18] tracking-tight leading-tight max-w-2xl mx-auto mb-14">
          Have a project or opportunity?
          <span className="block italic text-[#3d3b35] mt-1 sm:mt-2">
            Let&apos;s talk.
          </span>
        </h2>

        {/* Direct Channels Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xl mx-auto mb-16">
          {/* Email Me Card */}
          <div className="p-6 rounded-xl bg-[#f2f1eb] border border-[#e2e0d8] hover:border-[#c8c5ba] transition-all flex flex-col items-center justify-center text-center group">
            <span className="text-[10px] font-mono tracking-widest text-[#827f75] uppercase mb-2">
              EMAIL ME
            </span>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-3.5 h-3.5 text-[#6b675e]" />
              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="text-xs sm:text-sm font-mono font-medium text-[#1c1b18] hover:underline"
              >
                {DEVELOPER_INFO.email}
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              className="mt-1 text-[11px] font-mono text-[#7a766c] hover:text-[#1c1b18] inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>

          {/* Telegram Card */}
          <a
            href={DEVELOPER_INFO.telegram}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-xl bg-[#f2f1eb] border border-[#e2e0d8] hover:border-[#c8c5ba] transition-all flex flex-col items-center justify-center text-center group"
          >
            <span className="text-[10px] font-mono tracking-widest text-[#827f75] uppercase mb-2">
              TELEGRAM
            </span>
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-3.5 h-3.5 text-[#6b675e]" />
              <span className="text-xs sm:text-sm font-mono font-medium text-[#1c1b18] group-hover:underline">
                {DEVELOPER_INFO.telegramHandle}
              </span>
            </div>
            <span className="mt-1 text-[11px] font-mono text-[#7a766c] group-hover:text-[#1c1b18]">
              Send message →
            </span>
          </a>
        </div>

        {/* Social Navigation Links */}
        <div className="flex items-center justify-center gap-8 text-xs font-mono tracking-wider text-[#636058] mb-12">
          <a
            href={DEVELOPER_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1c1b18] transition-colors underline underline-offset-4 decoration-[#d2cfc4]"
          >
            GitHub
          </a>
          <a
            href={DEVELOPER_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1c1b18] transition-colors underline underline-offset-4 decoration-[#d2cfc4]"
          >
            LinkedIn
          </a>
          <a
            href={DEVELOPER_INFO.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1c1b18] transition-colors underline underline-offset-4 decoration-[#d2cfc4]"
          >
            Twitter
          </a>
        </div>

        {/* Copyright Footer */}
        <div className="pt-8 border-t border-[#eae8e1] text-[11px] font-mono text-[#8a877d]">
          © 2026 {DEVELOPER_INFO.name}. All rights reserved.
        </div>
      </div>
    </section>
  );
};
