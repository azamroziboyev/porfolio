import React from 'react';

export const ArchitecturalDrawing: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[340px] bg-[#f2f1ec] border border-[#e4e2db] rounded-sm overflow-hidden flex items-center justify-center p-4 relative group">
      {/* Delicate grid background */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#b8b5ac 0.75px, transparent 0.75px)',
          backgroundSize: '16px 16px'
        }}
      />

      {/* High-precision Architectural Wireframe Drawing matching the PDF */}
      <svg
        viewBox="0 0 760 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[620px] h-auto text-[#2b2a27] stroke-current transition-transform duration-700 ease-out group-hover:scale-[1.01]"
      >
        {/* Ground grid lines */}
        <g strokeWidth="0.75" strokeDasharray="3 3" opacity="0.35">
          <line x1="60" y1="360" x2="700" y2="360" />
          <line x1="120" y1="380" x2="640" y2="380" />
          <line x1="140" y1="400" x2="620" y2="400" />
        </g>

        {/* Outer Structural Volume & Axonometric Walls */}
        <g strokeWidth="1.25" opacity="0.9">
          {/* Main frame box */}
          <rect x="150" y="110" width="460" height="230" strokeWidth="1.5" />
          
          {/* Upper floor balcony / terrace lines */}
          <line x1="150" y1="180" x2="610" y2="180" strokeWidth="1.2" />
          <line x1="150" y1="130" x2="610" y2="130" strokeWidth="0.8" opacity="0.6" />
          
          {/* Vertical architectural mullions & pillars */}
          <line x1="280" y1="110" x2="280" y2="340" strokeWidth="1.2" />
          <line x1="430" y1="110" x2="430" y2="340" strokeWidth="1.2" />
          <line x1="510" y1="110" x2="510" y2="340" strokeWidth="1" />
          
          {/* Roof overhang & parapet */}
          <line x1="130" y1="100" x2="630" y2="100" strokeWidth="1.75" />
          <line x1="130" y1="100" x2="150" y2="110" strokeWidth="1" />
          <line x1="630" y1="100" x2="610" y2="110" strokeWidth="1" />
          
          {/* Floor slab depth */}
          <rect x="145" y="220" width="470" height="10" strokeWidth="1" opacity="0.8" />
        </g>

        {/* Structural cross bracing & interior layout (matching isometric sketch) */}
        <g strokeWidth="0.8" opacity="0.75">
          {/* Left Room Framing */}
          <line x1="180" y1="130" x2="250" y2="175" strokeDasharray="4 2" />
          <line x1="250" y1="130" x2="180" y2="175" strokeDasharray="4 2" />
          <rect x="170" y="240" width="90" height="85" strokeWidth="0.9" />
          <line x1="215" y1="240" x2="215" y2="325" strokeWidth="0.8" />

          {/* Central Double Height Void / Staircase Lines */}
          <g opacity="0.85">
            <line x1="300" y1="330" x2="410" y2="240" strokeWidth="1.2" />
            <line x1="310" y1="330" x2="310" y2="320" />
            <line x1="325" y1="320" x2="325" y2="308" />
            <line x1="340" y1="308" x2="340" y2="296" />
            <line x1="355" y1="296" x2="355" y2="284" />
            <line x1="370" y1="284" x2="370" y2="272" />
            <line x1="385" y1="272" x2="385" y2="260" />
            <line x1="400" y1="260" x2="400" y2="248" />
            {/* Stair railing */}
            <line x1="300" y1="300" x2="410" y2="210" strokeWidth="0.9" />
          </g>

          {/* Right Room Windows & Modular Panels */}
          <rect x="445" y="130" width="50" height="40" />
          <line x1="470" y1="130" x2="470" y2="170" />
          <rect x="525" y="130" width="70" height="40" />
          <line x1="560" y1="130" x2="560" y2="170" />

          {/* Ground floor door & entryway */}
          <rect x="445" y="240" width="55" height="90" strokeWidth="1" />
          <line x1="445" y1="240" x2="500" y2="270" strokeDasharray="3 2" />
          <circle cx="490" cy="285" r="2" fill="currentColor" />

          {/* Large panoramic window grid right */}
          <rect x="525" y="240" width="75" height="90" strokeWidth="1" />
          <line x1="525" y1="285" x2="600" y2="285" strokeWidth="0.75" />
          <line x1="562" y1="240" x2="562" y2="330" strokeWidth="0.75" />
        </g>

        {/* Subtle technical dimension markers */}
        <g strokeWidth="0.6" opacity="0.45" className="font-mono text-[9px]">
          <line x1="150" y1="85" x2="610" y2="85" />
          <line x1="150" y1="80" x2="150" y2="90" />
          <line x1="610" y1="80" x2="610" y2="90" />
          <text x="360" y="78" textAnchor="middle" fill="currentColor" stroke="none">18.40m</text>

          <line x1="645" y1="110" x2="645" y2="340" />
          <line x1="640" y1="110" x2="650" y2="110" />
          <line x1="640" y1="340" x2="650" y2="340" />
          <text x="655" y="230" fill="currentColor" stroke="none">6.80m</text>
        </g>
      </svg>
    </div>
  );
};

export const PresentationSlidesGraphic: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[340px] bg-[#f2f1ec] border border-[#e4e2db] rounded-sm overflow-hidden p-6 sm:p-8 flex items-center justify-center relative group">
      {/* Subtle isometric presentation layout matching PDF */}
      <div className="w-full max-w-[620px] grid grid-cols-2 gap-4 sm:gap-6">
        {/* Slide 1: Utilization */}
        <div className="bg-[#fbfbf9] border border-[#dedcd4] rounded p-4 sm:p-5 shadow-xs transition-transform duration-500 group-hover:-translate-y-0.5">
          <div className="text-[10px] sm:text-xs font-serif font-semibold text-[#2c2a26] mb-2 tracking-wide">
            Utilization
          </div>
          <div className="space-y-1.5 mb-4">
            <div className="h-1.5 bg-[#e5e3dc] rounded-full w-full" />
            <div className="h-1.5 bg-[#e5e3dc] rounded-full w-4/5" />
            <div className="h-1.5 bg-[#e5e3dc] rounded-full w-3/5" />
          </div>
          <div className="border border-[#e5e3dc] bg-[#f4f3ed] rounded p-3 flex items-center justify-center">
            {/* Minimal line chart */}
            <svg viewBox="0 0 100 40" className="w-full h-10 text-[#403e39] stroke-current" fill="none">
              <path d="M5 32 Q 25 15, 45 22 T 85 8" strokeWidth="1.5" />
              <circle cx="85" cy="8" r="2" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Slide 2: Form Charisma */}
        <div className="bg-[#fbfbf9] border border-[#dedcd4] rounded p-4 sm:p-5 shadow-xs transition-transform duration-500 group-hover:translate-y-0.5">
          <div className="text-[10px] sm:text-xs font-serif font-semibold text-[#2c2a26] mb-2 tracking-wide">
            Form Charisma
          </div>
          <div className="grid grid-cols-3 gap-1.5 mb-3">
            <div className="h-9 bg-[#ebe9e2] rounded flex items-center justify-center text-[8px] font-mono text-[#78756d]">01</div>
            <div className="h-9 bg-[#ebe9e2] rounded flex items-center justify-center text-[8px] font-mono text-[#78756d]">02</div>
            <div className="h-9 bg-[#dedcd4] rounded flex items-center justify-center text-[8px] font-mono text-[#2c2a26] font-bold">03</div>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 bg-[#e5e3dc] rounded-full w-11/12" />
            <div className="h-1.5 bg-[#e5e3dc] rounded-full w-3/4" />
          </div>
        </div>

        {/* Slide 3: Frame Creation */}
        <div className="bg-[#fbfbf9] border border-[#dedcd4] rounded p-4 sm:p-5 shadow-xs transition-transform duration-500 group-hover:-translate-y-0.5">
          <div className="text-[10px] sm:text-xs font-serif font-semibold text-[#2c2a26] mb-2 tracking-wide">
            Frame Creation
          </div>
          <div className="border border-dashed border-[#c9c6bc] bg-[#f7f6f0] rounded h-16 flex items-center justify-center">
            <div className="w-8 h-8 rounded border border-[#a8a59b] flex items-center justify-center text-[#78756d]">
              <span className="text-xs">+</span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-[9px] font-mono text-[#8a877d]">
            <span>16:9 Aspect</span>
            <span>Vector PPTX</span>
          </div>
        </div>

        {/* Slide 4: Focus & Correlation */}
        <div className="bg-[#fbfbf9] border border-[#dedcd4] rounded p-4 sm:p-5 shadow-xs transition-transform duration-500 group-hover:translate-y-0.5">
          <div className="text-[10px] sm:text-xs font-serif font-semibold text-[#2c2a26] mb-2 tracking-wide">
            Focus & Correlation
          </div>
          <div className="h-16 bg-[#f4f3ee] border border-[#e5e3dc] rounded p-2.5 flex flex-col justify-between">
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-[#1c1b18]" />
              <div className="h-1 bg-[#dcd9ce] rounded w-16" />
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-[#78756d]" />
              <div className="h-1 bg-[#dcd9ce] rounded w-24" />
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-[#b8b5ab]" />
              <div className="h-1 bg-[#dcd9ce] rounded w-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MinimalistShelfPhoto: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[340px] bg-[#f2f1ec] border border-[#e4e2db] rounded-sm overflow-hidden flex items-center justify-center relative group">
      {/* High-res aesthetic monochrome photograph matching the minimalist study shelf in PDF */}
      <img
        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
        alt="Minimalist academic shelf and workspace"
        className="w-full h-full object-cover grayscale contrast-[1.05] brightness-95 opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
        loading="lazy"
      />
      {/* Subtle overlay to preserve high-key editorial tone */}
      <div className="absolute inset-0 bg-[#f9f8f5]/20 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-3 right-4 px-2 py-1 rounded bg-[#1c1b18]/70 text-[#f9f8f5] text-[10px] font-mono backdrop-blur-xs">
        HEMIS Automation
      </div>
    </div>
  );
};
