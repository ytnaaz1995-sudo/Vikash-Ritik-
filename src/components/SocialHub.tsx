import React, { useState } from 'react';
import { Instagram, Facebook, Youtube, Video, ExternalLink, Sparkles, TrendingUp, Users, Heart, Share2 } from 'lucide-react';
import { SOCIAL_STATS, CREATOR_INFO } from '../data';

export const SocialHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'reels' | 'youtube'>('all');

  return (
    <section id="social-hub" className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-neutral-900">
      {/* Background Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/60 border border-pink-800/40 text-pink-400 text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>153K+ Digital Family</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Follow My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-amber-400">Journey</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-base sm:text-lg">
            Stay connected across all major social media platforms for daily vlogs, viral comedy reels, and behind-the-scenes.
          </p>
        </div>

        {/* Total Reach Highlights Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-neutral-900 via-red-950/30 to-neutral-900 border border-amber-500/30 mb-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-red-600 flex items-center justify-center text-white shadow-xl flex-shrink-0">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs uppercase font-extrabold tracking-widest text-amber-400">Combined Creator Influence</p>
              <h3 className="text-2xl sm:text-4xl font-black text-white">153,400+ Active Followers</h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">High engagement rate across Bihar, UP, Delhi, Jharkhand & Pan-India Hindi audience</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={CREATOR_INFO.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-white font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a
              href={CREATOR_INFO.socialLinks.youtubeComedy}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
            >
              <Youtube className="w-4 h-4" />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* 4 Platform Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Instagram */}
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-all" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-500 flex items-center justify-center text-white shadow-lg">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Instagram Reels & Vlogs</h3>
                  <p className="text-xs text-neutral-400">{CREATOR_INFO.handles.instagram}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-pink-950/80 text-pink-300 border border-pink-800/50 text-xs font-bold">
                Daily Active
              </span>
            </div>

            <div className="my-6 p-4 rounded-2xl bg-black/60 border border-neutral-800/80 flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 font-medium">Follower Base</p>
                <p className="text-3xl font-black text-white mt-0.5">68.6K</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-neutral-400 font-medium">Reel Performance</p>
                <p className="text-sm font-bold text-pink-400 mt-0.5">15K - 60K Avg Views</p>
                <p className="text-[11px] text-neutral-500">1,067 Posts</p>
              </div>
            </div>

            <p className="text-sm text-neutral-300 mb-6 line-clamp-2">
              Viral mini comedy clips, daily village lifestyle stories, and behind the scenes at Class Chai Wala.
            </p>

            <a
              href={CREATOR_INFO.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 text-white font-bold text-sm shadow-lg hover:shadow-pink-900/40 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Follow @vikashritikvlog</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Facebook */}
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg">
                  <Facebook className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Facebook Official Page</h3>
                  <p className="text-xs text-neutral-400">Vikashritik Vlog</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-950/80 text-blue-300 border border-blue-800/50 text-xs font-bold">
                Viral Reach
              </span>
            </div>

            <div className="my-6 p-4 rounded-2xl bg-black/60 border border-neutral-800/80 flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 font-medium">Follower Base</p>
                <p className="text-3xl font-black text-white mt-0.5">66K</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-neutral-400 font-medium">Content Archive</p>
                <p className="text-sm font-bold text-blue-400 mt-0.5">2.1K+ Videos & Reels</p>
                <p className="text-[11px] text-neutral-500">Massive Bihar Audience</p>
              </div>
            </div>

            <p className="text-sm text-neutral-300 mb-6 line-clamp-2">
              High engagement Facebook reels and long-form village comedy sketches loved by families.
            </p>

            <a
              href={CREATOR_INFO.socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-sm shadow-lg hover:shadow-blue-900/40 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Follow Facebook Page</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: YouTube Channel 1 (Comedy - Comedian Boy) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-red-700 flex items-center justify-center text-white shadow-lg">
                  <Youtube className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Comedian Boy (Main Comedy)</h3>
                  <p className="text-xs text-neutral-400">{CREATOR_INFO.handles.youtubeComedy}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-950/80 text-red-300 border border-red-800/50 text-xs font-bold">
                100K+ Views Hits
              </span>
            </div>

            <div className="my-6 p-4 rounded-2xl bg-black/60 border border-neutral-800/80 flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 font-medium">Subscribers</p>
                <p className="text-3xl font-black text-white mt-0.5">11.3K</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-neutral-400 font-medium">Top Video Views</p>
                <p className="text-sm font-bold text-red-400 mt-0.5">107K Views (Doodh Wali)</p>
                <p className="text-[11px] text-neutral-500">36 High Quality Skits</p>
              </div>
            </div>

            <p className="text-sm text-neutral-300 mb-6 line-clamp-2">
              Full-length village comedy videos, spoof skits, regional romance comedy, and group fun.
            </p>

            <a
              href={CREATOR_INFO.socialLinks.youtubeComedy}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm shadow-lg hover:shadow-red-900/40 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Subscribe @Comedianboy06</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 4: YouTube Channel 2 (Vlogs - VRvlogar) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-red-600 flex items-center justify-center text-white shadow-lg">
                  <Video className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Vikashritik Vlog (Daily Vlogs)</h3>
                  <p className="text-xs text-neutral-400">{CREATOR_INFO.handles.youtubeVlog}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800/50 text-xs font-bold">
                1.2K+ Videos
              </span>
            </div>

            <div className="my-6 p-4 rounded-2xl bg-black/60 border border-neutral-800/80 flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 font-medium">Subscribers</p>
                <p className="text-3xl font-black text-white mt-0.5">7.54K</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-neutral-400 font-medium">Video Archive</p>
                <p className="text-sm font-bold text-amber-400 mt-0.5">1,200+ Daily Vlogs</p>
                <p className="text-[11px] text-neutral-500">Z900, Bullet & Village Life</p>
              </div>
            </div>

            <p className="text-sm text-neutral-300 mb-6 line-clamp-2">
              Daily personal life vlogs, bike rides, village coaching experiences, and Class Chai Wala updates.
            </p>

            <a
              href={CREATOR_INFO.socialLinks.youtubeVlog}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-red-600 text-white font-bold text-sm shadow-lg hover:shadow-amber-900/40 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Subscribe @VRVLOGAR</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
