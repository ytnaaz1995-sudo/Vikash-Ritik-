import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, Sparkles, Youtube, Instagram, Facebook } from 'lucide-react';
import { CREATOR_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Social Hub', href: '#social-hub' },
    { name: 'Viral Content', href: '#viral-content' },
    { name: 'Blogger Chai Wala', href: '#chai-shop' },
    { name: 'Work With Me', href: '#media-kit' },
    { name: 'Bro Sena', href: '#bro-sena' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-amber-900/30 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-red-600 to-pink-500 group-hover:scale-105 transition-transform">
              <img
                src={CREATOR_INFO.profileImage}
                alt="Vikash Ritik"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full border-2 border-black bg-neutral-900"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-black flex items-center justify-center text-[9px] font-bold text-white">
                VR
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  Vikash Ritik
                </span>
                <span className="bg-red-600/90 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                  VRvlogar
                </span>
              </div>
              <p className="text-xs text-amber-400/80 font-medium">
                Digital Creator • VRvlogar
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/80 border border-neutral-800 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md shadow-red-900/30'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#chai-shop"
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 border border-amber-600/50 text-amber-100 text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-amber-950/50"
            >
              <Coffee className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Blogger Chai Wala ☕</span>
            </a>

            <a
              href="#contact"
              className="px-3.5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-lg shadow-red-900/40 hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d0d] border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-sm font-semibold text-neutral-200 hover:text-amber-400 hover:border-amber-700 transition-colors text-center"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#chai-shop"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 text-white font-bold text-sm"
            >
              <Coffee className="w-4 h-4 text-amber-300" />
              <span>Blogger Chai Wala (ब्लॉगर चाय वाला) ☕</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-2 border-t border-neutral-800 text-neutral-400">
              <a
                href={CREATOR_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-neutral-900 hover:text-pink-400"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CREATOR_INFO.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-neutral-900 hover:text-blue-400"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CREATOR_INFO.socialLinks.youtubeVlog}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-neutral-900 hover:text-red-500"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
