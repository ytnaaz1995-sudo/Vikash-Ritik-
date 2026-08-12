import React from 'react';
import { User, MapPin, Sparkles, Heart, Coffee, Youtube, Instagram, Award, CheckCircle } from 'lucide-react';
import { CREATOR_INFO } from '../data';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0d0d0d] relative overflow-hidden border-t border-neutral-900">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5 text-amber-400" />
            <span>परिचय • About Vikash Ritik</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            जानिए <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-pink-500">विकास रितिक</span> को
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base font-medium">
            औरई बाज़ार, मुज़फ़्फ़रपुर (बिहार) से डिजिटल दुनिया तक का एक ख़ास सफ़र 🚀
          </p>
        </div>

        {/* Content Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Avatar & Quick Info */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500 via-red-600 to-pink-500 rounded-3xl blur-md opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="relative rounded-3xl bg-neutral-900 border border-neutral-800 p-6 text-center space-y-4 shadow-2xl">
                
                <div className="relative w-36 h-36 mx-auto rounded-full p-[3px] bg-gradient-to-tr from-amber-400 to-red-600">
                  <img
                    src={CREATOR_INFO.profileImage}
                    alt="Vikash Ritik"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full border-2 border-black bg-neutral-950"
                  />
                  <span className="absolute bottom-1 right-1 p-1.5 rounded-full bg-red-600 border-2 border-black text-white">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-white">विकास रितिक (VRvlogar)</h3>
                  <p className="text-xs text-amber-400 font-mono mt-0.5">@vikashritikvlog • @Comedianboy06</p>
                </div>

                {/* Location Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>औरई, मुज़फ़्फ़रपुर, बिहार</span>
                </div>

                {/* Micro Badges */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-800 text-left">
                  <div className="p-2.5 rounded-xl bg-black/60 border border-neutral-800">
                    <p className="text-[10px] text-neutral-400 font-medium">कुल ऑडियंस</p>
                    <p className="text-lg font-black text-amber-400">1,53,000+</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-neutral-800">
                    <p className="text-[10px] text-neutral-400 font-medium">श्रेणी</p>
                    <p className="text-sm font-bold text-white mt-0.5">व्लॉगिंग व कॉमेडी 🎬</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Short Best Hindi About Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Hindi Bio Quote Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/90 border border-amber-500/30 shadow-2xl space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
                <Heart className="w-4 h-4 fill-current text-red-500" />
                <span>हमारी छोटी सी कहानी (Our Story)</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                "ज़मीन से जुड़कर लोगों के चेहरे पर सच्ची मुस्कान लाना ही हमारा सबसे बड़ा मक़सद है।"
              </h3>

              <div className="space-y-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
                <p>
                  नमस्कार दोस्तों! मैं <strong className="text-amber-300">विकास रितिक (VRvlogar)</strong>, बिहार के मुज़फ़्फ़रपुर ज़िले के औरई बाज़ार से हूँ। मैंने अपने सोशल मीडिया का सफ़र एक छोटे से सपने के साथ शुरू किया था—अपने गाँव की असली ख़ूबसूरती, स्थानीय संस्कृति और खांटी बिहारी कॉमेडी से लोगों को हँसाना।
                </p>
                <p>
                  हमारी हर कॉमेडी वीडियो और रील की सफलता के पीछे <strong className="text-red-400">हमारी पूरी टैलेंटेड टीम और कलाकार</strong> हैं। अलग-अलग मज़ेदार किरदारों (Characters) के ज़रिए हमारी टीम हर वीडियो में जान फूँक देती है, जिससे दर्शकों को हर बार नया और मनोरंजक कंटेंट देखने को मिलता है।
                </p>
                <p>
                  हम सब मिलकर दिन-रात मेहनत करते हैं ताकि आपकी रोज़मर्रा की ज़िंदगी में मनोरंजन और हँसी बिखेर सकें।
                </p>
              </div>
            </div>

            {/* 3 Key Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-400 mb-2">
                  <Youtube className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">देसी व्लॉगिंग</h4>
                <p className="text-[11px] text-neutral-400 mt-1">औरई बाज़ार व बिहार की ज़मीनी ख़ूबसूरती।</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-pink-500/40 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-pink-950 border border-pink-800 flex items-center justify-center text-pink-400 mb-2">
                  <Instagram className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">वायरल रील्स</h4>
                <p className="text-[11px] text-neutral-400 mt-1">68.6K+ इंस्टाग्राम फ़ॉलोअर्स और लाखों व्यूज।</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-500/40 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-red-950 border border-red-800 flex items-center justify-center text-red-400 mb-2">
                  <User className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">कॉमेडी टीम व कैरेक्टर्स</h4>
                <p className="text-[11px] text-neutral-400 mt-1">प्रतिभाशाली कलाकारों की टोली व मज़ेदार किरदार।</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
