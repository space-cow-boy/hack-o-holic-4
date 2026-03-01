// src/App.jsx
import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import StickyTimer from './components/ui/StickyTimer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import MissionSection from './components/sections/MissionSection';
import TimelineSection from './components/sections/TimelineSection';
import TracksSection from './components/sections/TracksSection';
import PrizesSection from './components/sections/PrizesSection';
import SponsorsSection from './components/sections/SponsorsSection';
import GallerySection from './components/sections/GallerySection';
import FaqSection from './components/sections/FaqSection';
import ContactSection from './components/sections/ContactSection';
import SpeedDivider from './components/ui/SpeedDivider';

export default function App() {
  return (
    <>
      <Navbar />
      <StickyTimer />
      <main>
        <HeroSection />
        <SpeedDivider />
        <AboutSection />
        <MissionSection />
        <SpeedDivider />
        <TimelineSection />
        <SpeedDivider />
        <TracksSection />
        <PrizesSection />
        <SpeedDivider />
        <SponsorsSection />
        <SpeedDivider />
        <GallerySection />
        <SpeedDivider />
        <FaqSection />
        <SpeedDivider />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
