/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Sun, 
  KeyRound, 
  TrendingUp, 
  Compass, 
  ArrowRight, 
  Gem, 
  HardHat, 
  Handshake,
  MessageSquare,
  Sparkles,
  Download
} from 'lucide-react';
import { Property, FilterState } from '../types';
import HeroSlider from './HeroSlider';
import PropertyCard from './PropertyCard';
import { PROPERTIES, CORE_VALUES, ADVAN_SPEC } from '../data';

interface HomeViewProps {
  onSelectProperty: (property: Property) => void;
  onSearchRedirect: (filters: Partial<FilterState>) => void;
  onNavigateToTab: (tabId: 'home' | 'properties' | 'about' | 'contact') => void;
  onBecomeAgentClick: () => void;
  onDownloadBrochure: () => void;
}

export default function HomeView({
  onSelectProperty,
  onSearchRedirect,
  onNavigateToTab,
  onBecomeAgentClick,
  onDownloadBrochure
}: HomeViewProps) {
  
  // Highlighting the featured properties
  const featuredProperties = PROPERTIES.filter((p) => p.featured);

  return (
    <div className="font-sans space-y-24 pb-20 overflow-x-hidden bg-white">
      
      {/* 1. Hero Carousel slider */}
      <HeroSlider onSearch={onSearchRedirect} />

      {/* Spacer to push bento content under floating search desk */}
      <div className="h-16 md:h-12" />

      {/* 2. Section 1: "Unwavering Commitment to Your Legacy" (Legacy & Core Story) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-4/5 md:aspect-auto md:h-[480px]">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e08562744ad?auto=format&fit=crop&w=800&q=80" 
                alt="Explorer corporate advisory"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Premium Blue overlay gradients */}
              <div className="absolute inset-0 bg-blue-950/25 mix-blend-multiply" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-950/80 p-6 text-white text-center">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest font-mono">Lagos Head Office</p>
                <h4 className="text-sm font-bold mt-1">Property Advisory Desk Open For Audits</h4>
              </div>
            </div>

            {/* Asymmetric "15+ Years Legacy" Stamp Badge */}
            <div className="absolute -bottom-8 -right-4 bg-white p-5 rounded-2xl shadow-2xl border border-gray-50 flex items-center gap-3.5 max-w-[200px] animate-bounce-slow">
              <div className="w-12 h-12 rounded-xl bg-blue-900 text-amber-500 flex items-center justify-center shrink-0">
                <span className="text-lg font-bold">15+</span>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-950 block">Years Legacy</span>
                <span className="text-[10px] text-gray-400 font-mono font-medium leading-none block mt-0.5">Secure Land Banking</span>
              </div>
            </div>
          </div>

          {/* Texts (7 Columns) */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <span className="text-xs font-bold tracking-widest text-amber-500 uppercase font-mono block">
              WHO WE ARE
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-950 leading-tight font-sans">
              Unwavering Commitment to Your Legacy
            </h2>
            
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
              At Explorer Homes & Estates, we target land holding options that are completely free from ancestral ownership conflicts, government acquisitions, or legal constraints. We believe real estate is the foundational block of family inheritance and security.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {CORE_VALUES.slice(0, 2).map((val, idx) => (
                <div key={idx} className="p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                  <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wide mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {val.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onNavigateToTab('about')}
                className="px-6 py-3 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs tracking-wider uppercase rounded-lg shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                Learn Our Story
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
              
              <button
                onClick={onBecomeAgentClick}
                className="px-6 py-3 border-2 border-blue-900 text-blue-900 font-bold text-xs tracking-wider uppercase rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer"
              >
                Become Partner
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Section 2: "Signature Estates for the Discerning Investor" (Featured Cards) */}
      <section className="bg-gray-50/50 py-20 border-y border-gray-150/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-amber-500 uppercase font-mono block mb-1">
                EXQUISITE PORTFOLIOS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight font-sans">
                Signature Estates for the Discerning Investor
              </h2>
              <p className="text-xs text-gray-400 mt-1 max-w-xl">
                Diligently screened lands and premium properties chosen entirely for their infrastructure readiness and capital growth acceleration.
              </p>
            </div>

            <button
              onClick={() => onNavigateToTab('properties')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-50 border border-gray-100 rounded-lg text-xs font-bold text-blue-950 tracking-widest uppercase shadow-xs transition-colors cursor-pointer shrink-0"
            >
              Browse All Estates
              <ArrowRight className="w-4 h-4 text-amber-500" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((prop) => (
              <PropertyCard 
                key={prop.id} 
                property={prop} 
                onSelect={onSelectProperty} 
              />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Section 3: "Comprehensive Real Estate Solutions" (Bento Grid Services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase font-mono block mb-1">
            WHAT WE DO
          </span>
          <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight font-sans">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
            From strategic land storage to physical construction, we provide highly secured channels configured around standard wealth preservation.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento box 1: Strategic Land Banking (7 Columns) */}
          <div className="md:col-span-7 bg-radial from-blue-950/95 to-blue-950 text-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between border border-blue-900/30 group hover:border-amber-400/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-sans text-white mb-2">
                Strategic Land Banking Hubs
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal max-w-md">
                Purchase secure perimeter plots at introductory phases in growing industrial hubs (Epe, Ibeju-Lekki), hold, and leverage excellent property valuation spikes.
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-bold">Secure Wealth Storage</span>
              <button 
                onClick={() => onNavigateToTab('properties')} 
                className="text-xs font-bold uppercase tracking-wide flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                Explore Portfolos
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Bento box 2: Land Purchase (5 Columns) */}
          <div className="md:col-span-5 bg-white p-6 sm:p-8 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6">
                <Gem className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-md sm:text-lg font-bold font-sans text-gray-950 mb-2">
                Litigation-Free Land Purchase
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Direct purchasing channels with 100% dry topographic guarantees. Authentic surveying files logged under standard government land charts.
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-50">
              <span className="text-[9px] font-mono tracking-wider uppercase text-gray-400 font-bold">100% Zero-Risk Registry</span>
              <button 
                onClick={() => onNavigateToTab('contact')}
                className="text-xs font-bold text-blue-900 uppercase tracking-wide flex items-center gap-1.5 hover:text-amber-500 transition-colors"
              >
                Speak to Advisor
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Bento box 3: Estate Development (5 Columns) */}
          <div className="md:col-span-5 bg-white p-6 sm:p-8 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6">
                <HardHat className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-md sm:text-lg font-bold font-sans text-gray-950 mb-2">
                Modern Estate Construction
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                High quality structural setups integrating state power plants, smart automation frameworks, automated drainings, and pristine gated entries.
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-50">
              <span className="text-[9px] font-mono tracking-wider uppercase text-gray-400 font-bold">Premium Builders</span>
              <button 
                onClick={() => onNavigateToTab('about')}
                className="text-xs font-bold text-blue-900 uppercase tracking-wide flex items-center gap-1.5 hover:text-amber-500 transition-colors"
              >
                View Standards
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Bento box 4: Professional Consultations (7 Columns) */}
          <div className="md:col-span-7 bg-neutral-900 text-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between border border-neutral-800 group hover:border-amber-400/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-sans text-white mb-2">
                Corporate & Legacy Consultations
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal max-w-md">
                Senior legal advisors offer verification charts, coordinates tracking, global charting clearances, so your joint syndications remain iron-clad secure.
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-bold">Legal Advisory</span>
              <button 
                onClick={() => onNavigateToTab('contact')}
                className="text-xs font-bold uppercase tracking-wide flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                Initiate Consults
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Section 4: "The Explorer Advantage" (Metrics and Proof) */}
      <section className="bg-blue-950 text-white py-20 relative overflow-hidden">
        {/* Abstract vector backdrops */}
        <div className="absolute inset-x-0 bottom-0 top-0 bg-radial from-blue-900/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase font-mono block mb-1">
              THE EXPLORER STANDARD
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans text-white">
              The Explorer Advantage
            </h2>
            <p className="text-xs text-gray-300 mt-2">
              Our pledge of security, convenience, and wealth growth is back-topped by verifiable legal structures.
            </p>
          </div>

          {/* Specification cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ADVAN_SPEC.map((spec, index) => {
              return (
                <div 
                  key={index} 
                  className="bg-white/5 hover:bg-white/8.5 border border-white/10 hover:border-amber-400/40 p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-lg flex items-center justify-center mb-5 shrink-0">
                      {index === 0 && <ShieldCheck className="w-5 h-5" />}
                      {index === 1 && <Sun className="w-5 h-5" />}
                      {index === 2 && <KeyRound className="w-5 h-5" />}
                      {index === 3 && <TrendingUp className="w-5 h-5" />}
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2 font-sans tracking-wide">
                      {spec.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-medium">
                      {spec.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Desk */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-900 rounded-full">
          <MessageSquare className="w-6 h-6 text-amber-500" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-display font-semibold italic text-blue-950 leading-relaxed">
            "Explorer Homes completely eliminated the typical fears that come with buying real estate in Lekki and Epe. Our corporate allocation files and land coordinates were verified instantly, and we received physical boundaries mapping day-one. Unmatched secure standards!"
          </h3>
          
          <div className="mt-6">
            <p className="text-sm font-bold text-gray-900">Dr. Frederick & Engr. Victoria Alao</p>
            <p className="text-[10px] font-mono tracking-wider text-amber-500 uppercase font-bold mt-1">Multi-Plot Lekki Hub Investors</p>
          </div>
        </div>
      </section>

      {/* 7. Double Column CTA Section: "Ready to Secure Your Investment?" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-radial from-neutral-900 via-neutral-950 to-neutral-950 text-white rounded-3xl border border-neutral-800 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
            <div className="max-w-2xl space-y-3">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-mono block">
                PROMPT ALLOCATION AND BROCHURE DIRECTLY
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight leading-tight font-sans">
                Ready to Secure Your Investment?
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Download copies of our certified land survey charts, corporate brochures, layout profiles, or immediately book an express VIP site transit vehicle with an advisory guide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                onClick={() => onNavigateToTab('contact')}
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold text-xs tracking-wider uppercase rounded-lg shadow-md transition-all duration-300 hover:scale-103 transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 shrink-0 text-blue-950" />
                Book Private Tour
              </button>

              <button
                onClick={onDownloadBrochure}
                className="px-6 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 font-bold text-xs tracking-wider uppercase rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-400" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
