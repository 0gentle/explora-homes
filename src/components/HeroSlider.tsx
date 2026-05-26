/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Building2, CircleSlash } from 'lucide-react';
import { FilterState } from '../types';

interface HeroSliderProps {
  onSearch: (filters: Partial<FilterState>) => void;
}

interface Slide {
  id: number;
  title: string;
  sub: string;
  highlight: string;
  image: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    title: 'Sanctuary of High-Yield Legacies',
    sub: 'Acquire premium dry lands in strategic hubs adjacent to Lekki Free Zone and Epe with verified secure global titles.',
    highlight: 'FLOURISH GARDEN PHASE 2',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 2,
    title: 'Architectural Jewels of Lagos Prestige',
    sub: 'Step into automated modern grandeur with fully serviced luxury duplexes holding premium Governor’s Consent.',
    highlight: 'KINGS COURT LEKKI',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 3,
    title: 'Future-Proof Strategic Land Banking',
    sub: 'Invest securely inside rapidly expanding development corridors of Epe opposite major industrial centers.',
    highlight: 'EXPLORER HORIZON EPE',
    image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1920&q=85'
  }
];

export default function HeroSlider({ onSearch }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location,
      type,
      priceRange,
      search: ''
    });
  };

  return (
    <section className="relative h-[640px] md:h-[700px] overflow-hidden bg-blue-950 font-sans">
      
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${SLIDES[currentSlide].image})` }}
          >
            {/* Multi-layered Premium Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-950/65 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-blue-950/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content Section */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-white">
          <div className="max-w-3xl">
            {/* Animated Bullet Tag */}
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-[10px] font-bold tracking-widest text-amber-400 uppercase mb-4"
            >
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping" />
              {SLIDES[currentSlide].highlight}
            </motion.div>

            {/* Title display */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-md font-sans">
              Discover Your
              <span className="block text-amber-400 font-display font-semibold italic mt-1.5">
                Sanctuary of Success
              </span>
            </h1>

            {/* Subtext description */}
            <p className="text-base sm:text-lg text-gray-200 font-medium mb-10 max-w-2xl leading-relaxed">
              {SLIDES[currentSlide].sub}
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Bullets */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Interactive Quick Search Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-5">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-3.5 items-center">
            
            {/* Location Select */}
            <div className="relative">
              <label className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-900" />
                Target Region
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-gray-50 hover:bg-gray-100/75 border border-gray-100 rounded-lg py-2.5 px-3.5 text-xs font-semibold text-gray-800 transition-colors focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="">All Locations</option>
                <option value="Lekki Phase 1">Lekki Phase 1</option>
                <option value="Ibeju-Lekki">Ibeju-Lekki</option>
                <option value="Epe">Epe</option>
                <option value="Sangotedo">Sangotedo</option>
                <option value="Ikorodu">Ikorodu</option>
              </select>
            </div>

            {/* Property Type Select */}
            <div className="relative">
              <label className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-900" />
                Property Category
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-gray-50 hover:bg-gray-100/75 border border-gray-100 rounded-lg py-2.5 px-3.5 text-xs font-semibold text-gray-800 transition-colors focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="">All Types</option>
                <option value="Land">Land Plot</option>
                <option value="House">Residential House</option>
              </select>
            </div>

            {/* Price Category Select */}
            <div className="relative">
              <label className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1 flex items-center gap-1.5">
                <CircleSlash className="w-3.5 h-3.5 text-blue-900 rotate-45" />
                Price Budget
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full bg-gray-50 hover:bg-gray-100/75 border border-gray-100 rounded-lg py-2.5 px-3.5 text-xs font-semibold text-gray-800 transition-colors focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="">All Budgets</option>
                <option value="below-10">Under ₦10M</option>
                <option value="10-50">₦10M - ₦50M</option>
                <option value="above-50">Above ₦50M</option>
              </select>
            </div>

            {/* Action Search Button */}
            <div>
              <button
                type="submit"
                className="w-full md:mt-4 py-3 bg-blue-900 hover:bg-blue-950 text-white rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform active:scale-98 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                Search Estates
              </button>
            </div>

          </form>
        </div>
      </div>

    </section>
  );
}
