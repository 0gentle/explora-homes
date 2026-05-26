/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Landmark, Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onPageChange: (pageId: PageId) => void;
  onShowToast: (message: string) => void;
  onBecomeAgentClick: () => void;
  onViewPropertyReset: () => void;
}

export default function Footer({
  onPageChange,
  onShowToast,
  onBecomeAgentClick,
  onViewPropertyReset
}: FooterProps) {
  const [newsEmail, setNewsEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    onShowToast(`Subscribed! Property catalogs and direct title audit files will be delivered to ${newsEmail} weekly.`);
    setNewsEmail('');
  };

  const handleQuickLink = (page: PageId) => {
    onViewPropertyReset();
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-8 border-t border-neutral-900 font-sans relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        
        {/* Core Description (4 columns) */}
        <div className="lg:col-span-4 space-y-6">
          <div 
            onClick={() => handleQuickLink('home')} 
            className="flex items-center gap-2 cursor-pointer group leading-none"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-blue-900 text-amber-500 rounded-xl transition-transform group-hover:scale-105">
              <Landmark className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white block">
                EXPLORER<span className="text-amber-500 text-xl leading-none">.</span>
              </span>
              <span className="text-[9px] tracking-widest text-amber-500 uppercase font-mono font-bold block -mt-1">
                Homes & Estates
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed font-medium">
            A premium real estate firm specialized in providing secure, high-appreciating, and litigation-free lands and estates in Nigeria. Secure your wealth through vetted investment portfolios.
          </p>

          <div className="space-y-3.5 text-xs text-gray-400 font-medium font-sans">
            <p className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              Admiralty Way, Lekki Phase 1, Lagos, Nigeria
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              +234 812 345 6789
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              advisor@explorerhomes.com
            </p>
          </div>
        </div>

        {/* Quick navigation (2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-semibold uppercase tracking-wide">
            <li>
              <button 
                onClick={() => handleQuickLink('home')} 
                className="hover:text-amber-500 transition-colors cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleQuickLink('properties')} 
                className="hover:text-amber-500 transition-colors cursor-pointer"
              >
                All Properties
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleQuickLink('about')} 
                className="hover:text-amber-500 transition-colors cursor-pointer"
              >
                About Company
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleQuickLink('contact')} 
                className="hover:text-amber-500 transition-colors cursor-pointer"
              >
                Contact Desk
              </button>
            </li>
            <li>
              <button 
                onClick={onBecomeAgentClick}
                className="hover:text-amber-500 text-amber-400 transition-colors cursor-pointer"
              >
                Join Broker Desk
              </button>
            </li>
          </ul>
        </div>

        {/* Investment parameters (3 columns) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
            Vetted Axis Categories
          </h4>
          <ul className="space-y-3.5 text-xs text-gray-400 font-medium">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span>Flourish Garden Phase 2, Ibeju-Lekki</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span>Kings Court Terraces, Lekki Phase 1</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span>Explorer Horizon Estates, Epe</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span>Diamond Gate Elite, Sangotedo</span>
            </li>
          </ul>
        </div>

        {/* Interactive Newsletter Subscription (3 columns) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
            Verify Your Inbox
          </h4>
          <p className="text-[11px] text-gray-400 leading-relaxed font-semibold">
            Register your active email coordinates below to receive fresh title deeds audits, zoning plans, discount alerts, directly.
          </p>
          
          <form onSubmit={handleSubscribe} className="space-y-2">
            <input 
              type="email" 
              required
              value={newsEmail}
              onChange={(e) => setNewsEmail(e.target.value)}
              placeholder="Your email account..."
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-2 px-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors font-semibold"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-900 hover:bg-blue-950 text-white font-bold text-[10px] tracking-widest uppercase rounded-lg shadow-sm transition-all duration-300 transform active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </form>
        </div>

      </div>

      {/* Subline bottom bars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-neutral-900 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between text-[11px] font-mono tracking-wider text-gray-500 font-medium gap-4">
        <div>
          © 2026 Explorer Homes & Estates. All rights reserved physically. Built litigation-free.
        </div>
        
        <div className="flex justify-center md:justify-end gap-5">
          <span className="hover:text-amber-500 cursor-pointer">Security Certifications</span>
          <span>•</span>
          <span className="hover:text-amber-500 cursor-pointer">Deed Transcripts</span>
        </div>
      </div>

    </footer>
  );
}
