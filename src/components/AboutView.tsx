/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Sparkles, Building2, Phone, Mail, Clock, MapPin, Eye, Compass, HeartHandshake } from 'lucide-react';
import { TEAM_MEMBERS, CORE_VALUES, OFFICE_LOCATIONS } from '../data';

interface AboutViewProps {
  onShowToast: (message: string) => void;
  onNavigateToTab: (tabId: 'home' | 'properties' | 'about' | 'contact') => void;
}

export default function AboutView({ onShowToast, onNavigateToTab }: AboutViewProps) {
  return (
    <div className="bg-white min-h-screen pb-20 font-sans space-y-24 overflow-hidden">
      
      {/* 1. Header Hero Panel */}
      <section className="relative bg-blue-950 text-white py-20 px-4 text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-mono">ABOUT EXPLORER HOMES</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-white">
            A Leading Real Estate Company in Nigeria
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Diligently vetting land and housing transactions to provide litigation-free investments, instant allocations, and compound wealth returns.
          </p>
        </div>
      </section>

      {/* 2. Who We Are Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest text-amber-500 uppercase font-mono block">OUR ORIGINS</span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-blue-950 tracking-tight leading-tight font-sans">
              Securing Inheritances Through Premium Property Vetting
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-semibold">
              Founded on the pillars of absolute transparency and corporate verification, Explorer Homes was born to protect local and international investors from traditional land-leasing issues.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              We operate standard coordinate tracking protocols on each piece of land, ensuring they do not conflict with planned national developments or private properties. Through strategic advisory board programs, we ensure our subscribers own 100% legal, functional assets.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigateToTab('properties')}
                className="px-5 py-3 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all duration-300 cursor-pointer"
              >
                Browse Estates
              </button>
              <button
                onClick={() => onNavigateToTab('contact')}
                className="px-5 py-3 border-2 border-blue-900 text-blue-900 font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-neutral-50 cursor-pointer"
              >
                Visit Headquarters
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-video lg:aspect-square lg:h-[440px]">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" 
                alt="Corporate advisory meeting"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Vision & Mission (Asymmetric Cards Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-950 to-blue-900 text-white p-8 sm:p-10 rounded-2xl border border-blue-900 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-white mb-3">Our Dedicated Mission</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                To simplify and secure the real estate investment process in Africa by establishing standard, verified premium land-banks and housing enclaves completely free from structural conflicts or title liabilities.
              </p>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-amber-400 block mt-8 uppercase font-bold">100% Risk Elimination</span>
          </div>

          {/* Vision */}
          <div className="bg-amber-50 border border-amber-200 p-8 sm:p-10 rounded-2xl shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-amber-950 mb-3">Our Ultimate Vision</h3>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
                To stand as the absolute benchmark of trust and premium development in real estate across Sub-Saharan Africa, enabling thousands of citizens and diaspora families to safely build inter-generational financial wealth.
              </p>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-amber-700 block mt-8 uppercase font-bold">Global Wealth Preservation</span>
          </div>

        </div>
      </section>

      {/* 4. Core Corporate Values */}
      <section className="bg-gray-50/50 py-20 border-y border-gray-150/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-amber-500 uppercase font-mono block mb-1">FOUNDATIONAL PILLARS</span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-blue-950 tracking-tight font-sans">Our Core Values</h2>
            <p className="text-xs text-gray-500 mt-1.5">
              The operational guidelines under which our developers, agents, and legal advisors secure assets daily.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-4 text-amber-500">
                    <HeartHandshake className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="text-sm font-bold text-blue-950 mb-2 font-sans tracking-wide uppercase">{val.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Leadership Board Board */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase font-mono block mb-1">EXPERTS WORKING FOR YOU</span>
          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-blue-950 tracking-tight font-sans">Our Leadership Team</h2>
          <p className="text-xs text-gray-500 mt-1.5">
            Meet the veteran property planners, counsel, and strategists structuring your secure estate portfolios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((team, idx) => (
            <div key={idx} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-lg transition-shadow">
              
              <div className="relative h-64 overflow-hidden bg-neutral-100">
                <img 
                  src={team.image} 
                  alt={team.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-102" 
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5 text-center">
                <h4 className="text-sm font-bold text-gray-900 block font-sans truncate">{team.name}</h4>
                <p className="text-[10px] font-mono tracking-wider font-bold text-amber-500 uppercase mt-0.5">{team.role}</p>
                <p className="text-[11px] text-gray-400 mt-3 leading-relaxed font-sans line-clamp-3">
                  {team.bio}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 6. Visit Our Offices (Lagos and PH office structures) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase font-mono block mb-1">PHYSICAL HEADQUARTERS</span>
          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-blue-950 tracking-tight font-sans">Visit Our Offices</h2>
          <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
            Walk in to discuss custom layouts, review master survey charts, or schedule inspections directly with our Senior Partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {OFFICE_LOCATIONS.map((loc, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-1 justify-between">
              
              {/* Info column (7 cols) */}
              <div className="p-6 sm:p-8 md:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-base font-bold text-blue-950 font-sans tracking-wide mb-3 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-amber-500" />
                    {loc.city}
                  </h3>
                  
                  <div className="space-y-3.5 text-xs text-gray-500 leading-normal font-medium">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                      {loc.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                      {loc.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                      {loc.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                      {loc.hours}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-50">
                  <button
                    onClick={() => {
                      onShowToast(`VIP Consultation Booking initiated for ${loc.city}. Speak to Partner desk!`);
                    }}
                    className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white font-bold text-[10px] tracking-wider uppercase rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    Schedule Walk-In Chat
                  </button>
                </div>
              </div>

              {/* Map rendering (5 cols) */}
              <div className="md:col-span-5 h-[240px] md:h-full relative overflow-hidden bg-neutral-100">
                <img 
                  src={loc.mapUrl} 
                  alt="Headquarters map visual"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60 mix-blend-multiply" 
                />
                <div className="absolute inset-x-0 bottom-0 bg-blue-950/80 p-4 text-center">
                  <span className="text-[10px] text-amber-400 font-mono font-bold tracking-widest block uppercase">Certified Physical Site</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
