import React from 'react';
import { ArrowUp, Coffee, Heart, Instagram, Youtube, Facebook, MapPin, Sparkles } from 'lucide-react';
import { CREATOR_INFO } from '../data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-neutral-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 to-red-600">
                <img src={CREATOR_INFO.profileImage} alt="Vikash Ritik" className="w-full h-full object-cover rounded-full bg-neutral-900" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white">Vikash Ritik</span>
                <span className="text-xs text-amber-400 block font-mono">VRvlogar</span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Official website of Vikash Ritik (VRvlogar) — Aurai, Muzaffarpur content creator, village comedy creator, and owner of Blogger Chai Wala in Muzaffarpur, Bihar.
            </p>

            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-amber-300 italic">
              "{CREATOR_INFO.quote}"
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home Page</a></li>
              <li><a href="#social-hub" className="hover:text-amber-400 transition-colors">Social Media Hub (153K+)</a></li>
              <li><a href="#viral-content" className="hover:text-amber-400 transition-colors">Viral Comedy & Vlogs</a></li>
              <li><a href="#chai-shop" className="hover:text-amber-400 transition-colors">Blogger Chai Wala (ब्लॉगर चाय वाला)</a></li>
              <li><a href="#media-kit" className="hover:text-amber-400 transition-colors">Work With Me (Media Kit)</a></li>
              <li><a href="#bro-sena" className="hover:text-amber-400 transition-colors">Bro Sena Community & VIP Pass</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact & Direct Message</a></li>
            </ul>
          </div>

          {/* Column 3: Social Hub (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">Social Media Platforms</h4>
            <div className="space-y-2 text-xs">
              <a
                href={CREATOR_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-pink-400"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>Instagram (68.6K Followers)</span>
              </a>
              <a
                href={CREATOR_INFO.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-blue-400"
              >
                <Facebook className="w-4 h-4 text-blue-500" />
                <span>Facebook Page (66K Followers)</span>
              </a>
              <a
                href={CREATOR_INFO.socialLinks.youtubeComedy}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-red-400"
              >
                <Youtube className="w-4 h-4 text-red-500" />
                <span>Comedian Boy (11.3K Subs)</span>
              </a>
              <a
                href={CREATOR_INFO.socialLinks.youtubeVlog}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-amber-400"
              >
                <Youtube className="w-4 h-4 text-amber-400" />
                <span>Vikashritik Vlog (7.54K Subs)</span>
              </a>
            </div>
          </div>

          {/* Column 4: Location & Tagline (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">Aurai, Muzaffarpur Hub</h4>
            <p className="text-xs text-neutral-400">
              Blogger Chai Wala, Aurai Bazar, Aurai, Muzaffarpur, Bihar - 843312
            </p>
            <div className="px-3 py-1.5 rounded-lg bg-red-950 border border-red-800 text-red-300 text-[11px] font-bold text-center">
              {CREATOR_INFO.bio}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Vikash Ritik (VRvlogar). All Rights Reserved.</p>

          <div className="flex items-center gap-2">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>for Bihar & Bro Sena Family 🎈</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-amber-500 text-neutral-300 hover:text-white transition-all hover:-translate-y-1"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
