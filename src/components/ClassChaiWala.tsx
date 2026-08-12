import React from 'react';
import { Coffee, Heart, Share2, Play, Eye, MessageSquare, Facebook } from 'lucide-react';
import { CHAI_SHOP_INFO, CREATOR_INFO } from '../data';

export const ClassChaiWala: React.FC = () => {
  return (
    <section id="chai-shop" className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-neutral-900">
      {/* Background Amber Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Coffee className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>Official Vlogger Chai Stall & Meetup Point</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            🍵 {CHAI_SHOP_INFO.name} <span className="text-amber-400">({CHAI_SHOP_INFO.englishName})</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-medium">
            📍 {CHAI_SHOP_INFO.address}
          </p>
        </div>

        {/* Viral Facebook Reel Card Centered */}
        <div className="max-w-md mx-auto">
          <div className="p-5 sm:p-6 rounded-3xl bg-neutral-900/90 border border-amber-500/30 shadow-2xl relative space-y-4">
            
            {/* Card Header */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 to-red-600">
                  <img src={CREATOR_INFO.profileImage} alt="Vikash Ritik Profile" className="w-full h-full object-cover rounded-full bg-neutral-900" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-bold text-white">vikashritikvlog</p>
                    <span className="text-blue-500 text-[10px]">✓</span>
                  </div>
                  <p className="text-[10px] text-neutral-400">Blogger Chai Wala • Aurai Bazar</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-blue-950/80 border border-blue-700/50 text-blue-400 text-[10px] font-extrabold flex items-center gap-1">
                <Facebook className="w-3 h-3 text-blue-400" />
                <span>VIRAL REEL</span>
              </span>
            </div>

            {/* Reel Video Frame Cover with Play Overlay */}
            <a
              href={CHAI_SHOP_INFO.viralReelStats.reelUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-inner cursor-pointer"
            >
              <img
                src={CHAI_SHOP_INFO.viralReelStats.thumbnailUrl || CREATOR_INFO.profileImage}
                alt="Viral Facebook Reel Cover"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 group-hover:opacity-80 transition-opacity" />

              {/* Top View Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-neutral-800 text-amber-400 text-xs font-black flex items-center gap-1.5 shadow-lg">
                <Eye className="w-3.5 h-3.5" />
                <span>70K+ Views</span>
              </div>

              {/* Glowing Play Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-900/60 transform group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <span className="text-xs font-bold text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                  Click to Watch Reel
                </span>
              </div>

              {/* Bottom Caption & Engagement Stats */}
              <div className="absolute bottom-3 left-3 right-3 space-y-2">
                <p className="text-xs font-bold text-white drop-shadow line-clamp-2">
                  {CHAI_SHOP_INFO.viralReelStats.caption}
                </p>

                <div className="flex items-center justify-between text-[11px] text-neutral-300 pt-2 border-t border-white/10 font-semibold">
                  <span className="flex items-center gap-1 text-red-400">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span>{CHAI_SHOP_INFO.viralReelStats.likes}</span>
                  </span>
                  <span className="flex items-center gap-1 text-blue-400">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{CHAI_SHOP_INFO.viralReelStats.comments}</span>
                  </span>
                  <span className="flex items-center gap-1 text-amber-400">
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{CHAI_SHOP_INFO.viralReelStats.shares}</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Direct Watch Button */}
            <a
              href={CHAI_SHOP_INFO.viralReelStats.reelUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-extrabold text-white flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-900/40"
            >
              <Facebook className="w-4 h-4 fill-current text-white" />
              <span>Watch Reel on Facebook (70K+ Views)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
