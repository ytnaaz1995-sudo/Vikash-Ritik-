/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SocialHub } from './components/SocialHub';
import { ViralContent } from './components/ViralContent';
import { ClassChaiWala } from './components/ClassChaiWala';
import { MediaKit } from './components/MediaKit';
import { BroSena } from './components/BroSena';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'social-hub', 'viral-content', 'chai-shop', 'media-kit', 'bro-sena', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 font-sans selection:bg-amber-500 selection:text-black antialiased">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <AboutSection />
        <SocialHub />
        <ViralContent />
        <ClassChaiWala />
        <MediaKit />
        <BroSena />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
