import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Youtube, Instagram, Facebook, Sparkles, Coffee, Play, ArrowDown, Users, Heart, Award, Film } from 'lucide-react';
import { CREATOR_INFO } from '../data';

export const Hero: React.FC = () => {
  const [animatedReach, setAnimatedReach] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll 3D effect hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // 3D perspective transforms
  const rotateX = useTransform(smoothProgress, [0, 1], [0, 35]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);
  const translateY = useTransform(smoothProgress, [0, 1], [0, 100]);

  useEffect(() => {
    let start = 0;
    const end = 153;
    const timer = setInterval(() => {
      start += 3;
      if (start >= end) {
        setAnimatedReach(end);
        clearInterval(timer);
      } else {
        setAnimatedReach(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#0a0a0a] [perspective:1200px]"
    >
      {/* Dynamic Animated Ambient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-amber-500/20 via-red-600/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          y: [0, -40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-pink-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* 3D Motion Container */}
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          y: translateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center flex flex-col items-center"
      >
        {/* Official Creator Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-red-500/20 to-pink-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-6 backdrop-blur-xl shadow-2xl"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span>Official Digital Creator • VRvlogar</span>
        </motion.div>

        {/* Creator Name & Title with 3D Depth */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl"
        >
          Vikash Ritik{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-pink-500">
            (VRvlogar)
          </span>
        </motion.h1>

        {/* Social Handles Badge Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2 rounded-2xl bg-neutral-900/90 border border-neutral-800 text-xs sm:text-sm text-neutral-300 font-mono shadow-xl backdrop-blur-md"
        >
          <a
            href="https://www.youtube.com/@VRVLOGAR"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-red-400 hover:text-red-300 transition-colors"
          >
            <Youtube className="w-4 h-4" />
            <span>{CREATOR_INFO.handles.youtubeVlog}</span>
          </a>
          <span className="text-neutral-700">•</span>
          <a
            href="https://www.instagram.com/vikashritikvlog"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>{CREATOR_INFO.handles.instagram}</span>
          </a>
          <span className="text-neutral-700">•</span>
          <a
            href="https://www.facebook.com/vikashritikvlog"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Facebook className="w-4 h-4" />
            <span>{CREATOR_INFO.handles.facebook}</span>
          </a>
        </motion.div>

        {/* Professional Sub-Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-4 text-base sm:text-xl text-neutral-300 font-medium max-w-2xl leading-relaxed"
        >
          Desi Vlogging • Village Comedy • Digital Storytelling 🎬
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <motion.a
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#viral-content"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-extrabold text-base shadow-2xl shadow-red-950/80 transition-all border border-red-500/30"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Watch Viral Content 🚀</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#chai-shop"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-amber-950/90 hover:from-amber-800 hover:to-amber-900 border border-amber-500/50 text-amber-200 font-extrabold text-base shadow-2xl shadow-amber-950/80 transition-all"
          >
            <Coffee className="w-5 h-5 text-amber-400" />
            <span>Blogger Chai Wala (ब्लॉगर चाय वाला) ☕</span>
          </motion.a>
        </motion.div>

        {/* 3D Animated Interactive Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
            className="p-5 rounded-3xl bg-neutral-900/80 border border-neutral-800/90 backdrop-blur-xl shadow-2xl hover:border-amber-500/60 transition-all group"
          >
            <div className="flex items-center justify-center gap-2 text-amber-400 mb-1">
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-2xl sm:text-3xl font-black text-white">{animatedReach}K+</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-neutral-400">Total Audience Reach</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
            className="p-5 rounded-3xl bg-neutral-900/80 border border-neutral-800/90 backdrop-blur-xl shadow-2xl hover:border-pink-500/60 transition-all group"
          >
            <div className="flex items-center justify-center gap-2 text-pink-500 mb-1">
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-2xl sm:text-3xl font-black text-white">68.6K</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-neutral-400">Instagram Family</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
            className="p-5 rounded-3xl bg-neutral-900/80 border border-neutral-800/90 backdrop-blur-xl shadow-2xl hover:border-blue-500/60 transition-all group"
          >
            <div className="flex items-center justify-center gap-2 text-blue-500 mb-1">
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-2xl sm:text-3xl font-black text-white">66K</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-neutral-400">Facebook Followers</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
            className="p-5 rounded-3xl bg-neutral-900/80 border border-neutral-800/90 backdrop-blur-xl shadow-2xl hover:border-red-500/60 transition-all group"
          >
            <div className="flex items-center justify-center gap-2 text-red-500 mb-1">
              <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-2xl sm:text-3xl font-black text-white">18.8K</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-neutral-400">YouTube Subs</p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          href="#about"
          className="mt-12 text-neutral-400 hover:text-white transition-colors flex flex-col items-center gap-2 group"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 group-hover:text-amber-400">
            Scroll Down
          </span>
          <ArrowDown className="w-5 h-5 text-amber-500 animate-bounce" />
        </motion.a>
      </motion.div>
    </section>
  );
};
