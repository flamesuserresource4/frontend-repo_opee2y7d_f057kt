import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, MapPin, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden bg-[#0D47A1] text-white" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-[#0D47A1]/40 to-[#0D47A1]" />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Pothole Complaint Management System
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
          Report potholes easily and help us make roads safer. Track progress as officials review,
          prioritize, and resolve issues across the city.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#report"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-[#0D47A1] shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <MapPin className="h-5 w-5" />
            Report a Pothole
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#track"
            className="inline-flex items-center gap-2 rounded-md bg-[#0D47A1] px-5 py-3 font-medium text-white ring-1 ring-white/40 hover:bg-[#0c3e8e] focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <Search className="h-5 w-5" />
            Check Complaint Status
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
