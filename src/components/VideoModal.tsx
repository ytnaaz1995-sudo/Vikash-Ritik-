import React, { useState } from 'react';
import { X, Play, ExternalLink, ThumbsUp, Eye } from 'lucide-react';
import { VideoContent } from '../types';

interface VideoModalProps {
  video: VideoContent | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!video) return null;

  // Extract media IDs
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  };

  const getInstagramId = (url: string) => {
    const match = url.match(/instagram\.com\/(?:reel|p)\/([\w-]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = getYouTubeId(video.url);
  const instagramId = getInstagramId(video.url);
  const isFacebook = video.url.includes('facebook.com');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-white my-8">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-neutral-800 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
              {video.category}
            </span>
            <span className="text-xs text-neutral-400 font-medium">
              {video.published}
            </span>
          </div>

          <button
            onClick={() => {
              setIsPlaying(false);
              onClose();
            }}
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          {isPlaying && youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : instagramId ? (
            <iframe
              src={`https://www.instagram.com/reel/${instagramId}/embed`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <>
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />

              {/* Hindi Title Overlay */}
              {video.hindiTitle && (
                <div className="absolute top-4 left-4 right-4 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-300 font-bold text-base sm:text-xl shadow-lg truncate">
                  {video.hindiTitle}
                </div>
              )}

              {/* Big Play CTA Button */}
              {youtubeId ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 w-20 h-20 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group-hover:shadow-red-900/80"
                >
                  <Play className="w-9 h-9 fill-current ml-1" />
                </button>
              ) : (
                <a
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`relative z-10 w-20 h-20 rounded-full ${
                    isFacebook ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/80' : 'bg-red-600 hover:bg-red-500'
                  } text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all`}
                >
                  <Play className="w-9 h-9 fill-current ml-1" />
                </a>
              )}

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 font-medium">
                <span className="flex items-center gap-1.5 bg-black/80 px-3 py-1.5 rounded-lg border border-neutral-800">
                  <Eye className="w-4 h-4 text-amber-400" />
                  <strong className="text-white">{video.views}</strong>
                </span>
                {video.likes && (
                  <span className="flex items-center gap-1.5 bg-black/80 px-3 py-1.5 rounded-lg border border-neutral-800">
                    <ThumbsUp className="w-4 h-4 text-pink-400" />
                    <strong className="text-white">{video.likes} Likes</strong>
                  </span>
                )}
              </div>
            </>
          )}
        </div>

        {/* Video Details Body */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {video.title}
          </h3>

          <p className="text-sm text-neutral-300 leading-relaxed">
            {video.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {video.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-neutral-800 text-amber-400 text-xs font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer CTAs */}
          <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-400">
              Published by <span className="text-white font-bold">Vikash Ritik (VRvlogar)</span>
            </div>

            <a
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
            >
              <span>Watch Full Video on {video.platform}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
