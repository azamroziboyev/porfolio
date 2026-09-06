import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLang, setActiveLang] = useState<'EN' | 'UZ'>('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROCESS', href: '#process' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f9f8f5]/95 backdrop-blur-md border-b border-[#e8e6df] shadow-xs py-3.5'
          : 'bg-[#f9f8f5] border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#"
          className="font-serif text-2xl sm:text-3xl font-bold tracking-tighter text-[#1c1b18] hover:opacity-80 transition-opacity"
        >
          AS.
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-widest text-[#5c5952]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#1c1b18] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1c1b18] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action: Language Switcher */}
        <div className="flex items-center gap-4">
          <div className="flex items-center text-[11px] font-mono tracking-wider text-[#737067]">
            <button
              onClick={() => setActiveLang('EN')}
              className={`transition-colors cursor-pointer ${
                activeLang === 'EN' ? 'font-bold text-[#1c1b18]' : 'hover:text-[#1c1b18]'
              }`}
            >
              EN
            </button>
            <span className="mx-1 opacity-40">/</span>
            <button
              onClick={() => setActiveLang('UZ')}
              className={`transition-colors cursor-pointer ${
                activeLang === 'UZ' ? 'font-bold text-[#1c1b18]' : 'hover:text-[#1c1b18]'
              }`}
            >
              UZ
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#2c2a26] hover:text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f9f8f5] border-b border-[#e8e6df] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-mono tracking-widest text-[#5c5952] hover:text-[#1c1b18] py-2 border-b border-[#eeece4]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
