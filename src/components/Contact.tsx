import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, MessageCircle, Instagram, Youtube, Facebook, Sparkles } from 'lucide-react';
import { CREATOR_INFO } from '../data';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Fan Message');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0d0d0d] relative overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-4 h-4 text-red-400" />
            <span>Connect Directly</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">Touch</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-base sm:text-lg">
            Have a fan question, business proposal, or want to drop by Class Chai Wala in Muzaffarpur? Send a message below!
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Hub Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-6">
              <h3 className="text-2xl font-black text-white">Direct Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-950 border border-red-800 flex items-center justify-center text-red-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase">Location</p>
                    <p className="text-sm font-bold text-white mt-0.5">Aurai, Muzaffarpur, Bihar, India</p>
                    <p className="text-xs text-neutral-400">Blogger Chai Wala, Aurai Bazar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase">Official Business Email</p>
                    <p className="text-sm font-bold text-white mt-0.5">vikashritikvlog@gmail.com</p>
                    <p className="text-xs text-neutral-400">Reaches Vikash Ritik & Team</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase">WhatsApp Fan & Business Line</p>
                    <p className="text-sm font-bold text-white mt-0.5">+91 98765 43210</p>
                    <p className="text-xs text-neutral-400">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-6 border-t border-neutral-800">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">Official Handles</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={CREATOR_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-black/60 border border-neutral-800 hover:border-pink-500 text-neutral-300 hover:text-white flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4 text-pink-500" />
                    <span>@vikashritikvlog</span>
                  </a>
                  <a
                    href={CREATOR_INFO.socialLinks.youtubeComedy}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-black/60 border border-neutral-800 hover:border-red-500 text-neutral-300 hover:text-white flex items-center gap-2"
                  >
                    <Youtube className="w-4 h-4 text-red-500" />
                    <span>@Comedianboy06</span>
                  </a>
                  <a
                    href={CREATOR_INFO.socialLinks.youtubeVlog}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-black/60 border border-neutral-800 hover:border-amber-500 text-neutral-300 hover:text-white flex items-center gap-2"
                  >
                    <Youtube className="w-4 h-4 text-amber-400" />
                    <span>@VRVLOGAR</span>
                  </a>
                  <a
                    href={CREATOR_INFO.socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-black/60 border border-neutral-800 hover:border-blue-500 text-neutral-300 hover:text-white flex items-center gap-2"
                  >
                    <Facebook className="w-4 h-4 text-blue-500" />
                    <span>Facebook Page</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl">
            <h3 className="text-2xl font-black text-white mb-2">Send Collaboration Request</h3>
            <p className="text-xs text-neutral-400 mb-6">
              Submit your brand, influencer, or creator partnership proposal to connect directly with Vikash Ritik & management team.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-800 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Message Received!</h4>
                <p className="text-xs text-neutral-300">
                  Dhanyawad <strong className="text-amber-400">{name}</strong>! Your message has been routed to Vikash Ritik.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Full Name *</label>
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
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Subject</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option>Fan Message & Love</option>
                      <option>Brand Collaboration Inquiry</option>
                      <option>Class Chai Wala Shop Visit</option>
                      <option>Event Invitation</option>
                      <option>Other Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-amber-600 to-red-600 hover:opacity-90 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Now</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* Floating WhatsApp Action Button (Bottom Right) */}
      <a
        href={CREATOR_INFO.socialLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute right-16 bg-neutral-900 border border-neutral-800 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Chat with Vikash Ritik 💬
        </span>
      </a>

    </section>
  );
};
