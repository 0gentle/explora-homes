/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Landmark, Compass, Award, Phone } from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
  onBecomeAgentClick: () => void;
  onViewPropertyReset: () => void;
}

export default function Header({
  activePage,
  onPageChange,
  onBecomeAgentClick,
  onViewPropertyReset
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Compass className="w-4 h-4" /> },
    { id: 'properties', label: 'Properties', icon: <Landmark className="w-4 h-4" /> },
    { id: 'about', label: 'About Us', icon: <Award className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Phone className="w-4 h-4" /> }
  ];

  const handleNavClick = (pageId: PageId) => {
    onViewPropertyReset();
    onPageChange(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="flex items-center justify-center w-11 h-11 bg-blue-900 text-amber-500 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
              <Landmark className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-gray-900 block font-sans">
                EXPLORER<span className="text-amber-500 text-2xl leading-none">.</span>
              </span>
              <span className="text-[10px] tracking-widest text-amber-500 uppercase font-mono font-bold block -mt-1.5">
                Homes & Estates
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-[13px] font-semibold tracking-wide uppercase transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-blue-950 text-white shadow-xs'
                      : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Become an Agent CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onBecomeAgentClick}
              className="px-5 py-2.5 border-2 border-blue-900 text-blue-900 font-bold rounded-lg text-[12px] tracking-wider uppercase hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-xs cursor-pointer"
            >
              Become an Agent
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-950 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/98 backdrop-blur-lg animate-fade-in">
          <div className="px-2 pt-3 pb-6 space-y-1.5 sm:px-3">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wide flex items-center gap-3 transition-colors ${
                    isActive
                      ? 'bg-blue-950 text-white'
                      : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 px-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBecomeAgentClick();
                }}
                className="w-full py-3 bg-blue-900 text-white text-center font-bold rounded-lg text-xs tracking-wider uppercase shadow-md hover:bg-blue-950 transition-colors cursor-pointer"
              >
                Become an Agent
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
