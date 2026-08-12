import React, { useState } from 'react';
import { Award, Calculator } from 'lucide-react';

export const MediaKit: React.FC = () => {
  // ROI Calculator State
  const [calcBudget, setCalcBudget] = useState(30000);

  const estimatedReach = Math.round(calcBudget * 2.8);
  const estimatedImpressions = Math.round(calcBudget * 5.5);

  return (
    <section id="media-kit" className="py-20 bg-[#0d0d0d] relative overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Brand Influencer Media Kit</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Work With <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-pink-500">Vikash Ritik</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-base sm:text-lg">
            Connect your brand directly with 153,000+ passionate regional youth across Bihar, Uttar Pradesh, Jharkhand & Delhi NCR.
          </p>
        </div>

        {/* Stats Dashboard Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center">
            <p className="text-3xl font-black text-amber-400">153K+</p>
            <p className="text-xs font-semibold text-neutral-300 mt-1">Total Cross-Platform Audience</p>
          </div>
          <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center">
            <p className="text-3xl font-black text-pink-500">4,500+</p>
            <p className="text-xs font-semibold text-neutral-300 mt-1">Avg Likes per Reel / Video</p>
          </div>
          <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center">
            <p className="text-3xl font-black text-blue-400">66K</p>
            <p className="text-xs font-semibold text-neutral-300 mt-1">Facebook Followers Reach</p>
          </div>
          <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center">
            <p className="text-3xl font-black text-red-500">Tier 2/3</p>
            <p className="text-xs font-semibold text-neutral-300 mt-1">Bihar, UP & Jharkhand Domination</p>
          </div>
        </div>

        {/* Interactive Campaign Estimator */}
        <div className="max-w-3xl mx-auto">
          {/* Campaign ROI Estimator */}
          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-6 shadow-2xl">
            <div className="flex items-center gap-2 text-amber-400">
              <Calculator className="w-6 h-6" />
              <h4 className="text-2xl font-bold text-white">Campaign ROI Estimator</h4>
            </div>

            <p className="text-sm text-neutral-400">
              Adjust your marketing budget to estimate expected organic reach and video impressions across Vikash Ritik's network.
            </p>

            <div>
              <div className="flex justify-between text-sm font-bold text-neutral-300 mb-2">
                <span>Budget slider:</span>
                <span className="text-amber-400 font-mono text-base">₹{calcBudget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={10000}
                max={150000}
                step={5000}
                value={calcBudget}
                onChange={(e) => setCalcBudget(Number(e.target.value))}
                className="w-full accent-amber-500 h-2.5 bg-neutral-800 rounded-lg cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-black/60 border border-neutral-800 text-center">
                <p className="text-xs text-neutral-400 font-medium">Est. Target Reach</p>
                <p className="text-3xl font-black text-amber-400 mt-1">~{estimatedReach.toLocaleString()}</p>
                <p className="text-xs text-neutral-500 mt-0.5">Unique Viewers</p>
              </div>

              <div className="p-5 rounded-2xl bg-black/60 border border-neutral-800 text-center">
                <p className="text-xs text-neutral-400 font-medium">Est. Impressions</p>
                <p className="text-3xl font-black text-emerald-400 mt-1">~{estimatedImpressions.toLocaleString()}</p>
                <p className="text-xs text-neutral-500 mt-0.5">Total Views</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-600/30 text-xs text-amber-200 space-y-1 text-center sm:text-left">
              <p className="font-bold text-sm">✨ High Engagement Guarantee</p>
              <p className="text-neutral-300 text-xs leading-relaxed">Includes dedicated Hindi scriptwriting, authentic village humor integration, and lifetime video visibility on channel archives.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
