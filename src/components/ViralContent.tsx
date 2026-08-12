import React, { useState } from 'react';
import { Play, Eye, ThumbsUp, Flame, Sparkles, Youtube, Instagram, Facebook, Filter, Search } from 'lucide-react';
import { VIRAL_VIDEOS } from '../data';
import { VideoContent } from '../types';
import { VideoModal } from './VideoModal';

export const ViralContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedVideo, setSelectedVideo] = useState<VideoContent | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Village Comedy', 'Desi Vlogs', 'Lifestyle'];

  const filteredVideos = VIRAL_VIDEOS.filter((vid) => {
    const matchesCat = selectedCategory === 'All' || vid.category === selectedCategory;
    const matchesSearch =
      vid.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (vid.hindiTitle && vid.hindiTitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      vid.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="viral-content" className="py-20 bg-[#0d0d0d] relative overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>Top Performing Hits</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Viral Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">Showcase</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-base sm:text-lg">
            Explore top viral village comedy videos, Bihari romance skits, and high-octane daily vlogs.
          </p>
        </div>

        {/* Filters & Search Controls Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-neutral-900/80 p-3 sm:p-4 rounded-2xl border border-neutral-800">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg shadow-red-950/50'
                    : 'bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700'
                }`}
              >
                {cat === 'All' ? '🔥 All Videos' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top.1/2 top-3" />
            <input
              type="text"
              placeholder="Search comedy, vlogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
            />
          </div>

        </div>

        {/* 6 Grid Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-2 flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video bg-neutral-950 overflow-hidden">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Platform Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-neutral-800 text-white text-xs font-bold flex items-center gap-1.5">
                  {video.platform === 'YouTube' ? (
                    <Youtube className="w-3.5 h-3.5 text-red-500" />
                  ) : video.platform === 'Instagram' ? (
                    <Instagram className="w-3.5 h-3.5 text-pink-500" />
                  ) : (
                    <Facebook className="w-3.5 h-3.5 text-blue-500" />
                  )}
                  <span>{video.platform}</span>
                </div>

                {/* Hindi Title Banner Overlay if present */}
                {video.hindiTitle && (
                  <div className="absolute top-3 right-3 max-w-[65%] px-2.5 py-1 rounded-lg bg-red-950/90 border border-red-700/60 text-amber-300 font-bold text-xs truncate">
                    {video.hindiTitle}
                  </div>
                )}

                {/* Play Icon Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom View Count Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300 font-semibold">
                  <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm border border-neutral-800 flex items-center gap-1 text-amber-400">
                    <Eye className="w-3.5 h-3.5" />
                    <span className="text-white font-extrabold">{video.views}</span>
                  </span>
                  <span className="text-neutral-400 text-[11px]">{video.published}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400">
                    {video.category}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 mt-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {video.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {video.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] text-amber-500 bg-neutral-950 px-2 py-0.5 rounded">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-red-500 group-hover:text-amber-400 flex items-center gap-1 hover:underline"
                  >
                    <span>Watch Now</span>
                    <Play className="w-3 h-3 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Popup */}
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
};
