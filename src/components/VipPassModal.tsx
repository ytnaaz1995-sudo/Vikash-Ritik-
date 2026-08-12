import React, { useState } from 'react';
import { X, Sparkles, Award, ShieldCheck, Heart, Download, Share2 } from 'lucide-react';
import { CREATOR_INFO } from '../data';

interface VipPassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VipPassModal: React.FC<VipPassModalProps> = ({ isOpen, onClose }) => {
  const [fanName, setFanName] = useState('');
  const [fanLocation, setFanLocation] = useState('Bihar');
  const [passGenerated, setPassGenerated] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fanName) return;
    setPassGenerated(true);
  };

  const passNumber = `VR-BRO-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-neutral-900 border border-amber-500/40 p-6 sm:p-8 shadow-2xl text-white">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
        >
          <X className="w-5 h-5" />
        </button>

        {!passGenerated ? (
          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="text-center">
              <span className="px-3 py-1 rounded-full bg-red-950 text-red-400 text-xs font-bold uppercase">
                Official VIP Card
              </span>
              <h3 className="text-2xl font-black text-white mt-2">Generate Bro Sena VIP Pass 🫡</h3>
              <p className="text-xs text-neutral-400 mt-1">
                Enter your details to create your official Bro Sena Fan VIP Member Card
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Kumar"
                value={fanName}
                onChange={(e) => setFanName(e.target.value)}
                className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">City / Location</label>
              <input
                type="text"
                placeholder="e.g. Muzaffarpur, Bihar"
                value={fanLocation}
                onChange={(e) => setFanLocation(e.target.value)}
                className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-red-600 to-amber-600 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Create My VIP Member Pass</span>
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-xs font-bold text-emerald-400 uppercase">Verified VIP Member</span>
              <h3 className="text-2xl font-black text-white mt-0.5">Bro Sena VIP Pass</h3>
            </div>

            {/* Generated VIP Pass Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-neutral-950 via-red-950 to-amber-950 border-2 border-amber-500 p-6 shadow-2xl overflow-hidden space-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-amber-500/30">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full p-[2px] bg-amber-400">
                    <img src={CREATOR_INFO.profileImage} alt="Vikash Ritik" className="w-full h-full object-cover rounded-full bg-neutral-900" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">VIKASH RITIK</p>
                    <p className="text-[10px] text-amber-400 font-mono">Bro Sena Official</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500 text-black font-extrabold text-[10px] uppercase">
                    VIP CARD
                  </span>
                  <p className="text-[10px] text-neutral-400 font-mono mt-1">{passNumber}</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] text-neutral-400 uppercase font-semibold">Member Name</p>
                <p className="text-xl font-black text-white">{fanName}</p>
                <p className="text-xs text-amber-300 font-medium">{fanLocation}</p>
              </div>

              <div className="pt-3 border-t border-amber-500/20 flex items-center justify-between text-[11px] text-neutral-300">
                <span>Tagline: <em>"Aurai, Muzaffarpur | Content Creator"</em></span>
                <span className="font-bold text-amber-400">100K 🎯 Family</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => alert(`Bro Sena VIP Card generated for ${fanName}! Take a screenshot to share on Instagram story!`)}
                className="flex-1 py-3 rounded-xl bg-amber-500 text-black font-bold text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Save Card</span>
              </button>

              <button
                onClick={() => setPassGenerated(false)}
                className="py-3 px-4 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white font-bold text-xs"
              >
                Create New
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
