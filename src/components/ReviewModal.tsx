import React, { useState } from 'react';
import { X, Star, Send, CheckCircle2 } from 'lucide-react';
import { CustomerReview } from '../types';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: CustomerReview) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onAddReview }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('Muzaffarpur');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newRev: CustomerReview = {
      id: Date.now().toString(),
      name,
      location,
      rating,
      comment,
      date: 'Just now',
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150`
    };

    onAddReview(newRev);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setComment('');
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 shadow-2xl text-white">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Dhanyawad! Review Added</h3>
            <p className="text-sm text-neutral-300">
              Aapka pyara review Class Chai Wala list mein add ho gaya hai! 🍵
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Rate Class Chai Wala</span>
              <h3 className="text-2xl font-black text-white mt-0.5">Write a Customer Review</h3>
              <p className="text-xs text-neutral-400">Share your chai & samosa experience with Vikash Ritik & Manoj Ji</p>
            </div>

            {/* Star Rating Selector */}
            <div className="flex items-center gap-2 py-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 text-2xl transition-transform hover:scale-125 focus:outline-none"
                >
                  <Star className={`w-7 h-7 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-600'}`} />
                </button>
              ))}
              <span className="text-sm font-bold text-amber-400 ml-2">{rating} / 5 Stars</span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">Location / City</label>
              <input
                type="text"
                placeholder="e.g. Muzaffarpur, Bihar"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Review *</label>
              <textarea
                required
                rows={3}
                placeholder="Chai ka taste kaisa laga? Samosa aur dosti kaisi rahi?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Submit Review</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
