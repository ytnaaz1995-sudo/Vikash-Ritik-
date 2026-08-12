import React, { useState } from 'react';
import { Heart, MessageSquare, Sparkles, Users, Award, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { INITIAL_FAN_MESSAGES, CREATOR_INFO } from '../data';
import { FanMessage } from '../types';
import { VipPassModal } from './VipPassModal';

export const BroSena: React.FC = () => {
  const [messages, setMessages] = useState<FanMessage[]>(INITIAL_FAN_MESSAGES);
  const [vipModalOpen, setVipModalOpen] = useState(false);

  // Form State for new Fan Message
  const [fanName, setFanName] = useState('');
  const [fanLocation, setFanLocation] = useState('');
  const [message, setMessage] = useState('');
  const [postedSuccess, setPostedSuccess] = useState(false);

  const handlePostMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fanName || !message) return;

    const newMsg: FanMessage = {
      id: Date.now().toString(),
      fanName,
      location: fanLocation || 'Bihar',
      message,
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150`,
      time: 'Just now'
    };

    setMessages([newMsg, ...messages]);
    setPostedSuccess(true);
    setTimeout(() => {
      setPostedSuccess(false);
      setFanName('');
      setFanLocation('');
      setMessage('');
    }, 3000);
  };

  return (
    <section id="bro-sena" className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>153,000+ Strong Community</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Vikash Ritik <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-pink-500">Bro Sena 🫡</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-base sm:text-lg">
            The most energetic, loyal & passionate vlogging family in Bihar.
          </p>
        </div>

        {/* Community VIP Pass Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-red-950/80 via-neutral-900 to-amber-950/80 border border-amber-500/40 shadow-2xl mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500 text-black text-xs font-black uppercase">
              Official Fan Card
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Get Your Digital "Bro Sena VIP Member Pass" 🎈
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              Create your personalized digital fan identity card with your name, city, and official Vikash Ritik watermark.
            </p>
          </div>

          <button
            onClick={() => setVipModalOpen(true)}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 hover:opacity-90 text-black font-extrabold text-sm shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all flex-shrink-0"
          >
            <Sparkles className="w-5 h-5 text-black" />
            <span>Generate VIP Pass Now</span>
          </button>
        </div>

        {/* Fan Messages & Interactive Shoutout Grid */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-amber-400" />
            <span>Bro Sena Fan Messages</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={msg.avatar} alt={msg.fanName} className="w-9 h-9 rounded-full object-cover border border-neutral-700" />
                      <div>
                        <h4 className="text-sm font-bold text-white">{msg.fanName}</h4>
                        <p className="text-[10px] text-amber-400">{msg.location}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-neutral-500">{msg.time}</span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed pl-12">
                    "{msg.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>

      </div>

      {/* VIP Member Pass Modal */}
      <VipPassModal isOpen={vipModalOpen} onClose={() => setVipModalOpen(false)} />
    </section>
  );
};
