/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Award, 
  ShieldCheck, 
  DropletOff, 
  Sparkles, 
  CheckCircle,
  PhoneCall, 
  MessageSquareCode,
  CalendarDays,
  CheckCircle2
} from 'lucide-react';
import { Property, InquiryForm } from '../types';

interface PropertyDetailViewProps {
  property: Property;
  onBack: () => void;
  onShowToast: (message: string) => void;
}

export default function PropertyDetailView({
  property,
  onBack,
  onShowToast
}: PropertyDetailViewProps) {
  const [formData, setFormData] = useState<InquiryForm>({
    name: '',
    email: '',
    phone: '',
    message: `Hello Explorer Homes, I am highly interested in purchasing a plot/housing unit in "${property.title}" located at ${property.subLocation}. Please send me the brochure and available payment scheme details.`
  });

  const [activeTab, setActiveTab] = useState<'details' | 'why' | 'amenities'>('details');

  const handleInquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      onShowToast('Please complete your Name and Phone Contact.');
      return;
    }
    onShowToast(`VIP Inspection Scheduled! Our Senior Real Estate Partner will call you at ${formData.phone} shortly with details.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: `Hello Explorer Homes, I am highly interested in "${property.title}"...`
    });
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(`Hello Explorer Homes! I am interested in property "${property.title}" (${property.size}). Can I speak to an agent?`);
    window.open(`https://wa.me/2348123456789?text=${text}`, '_blank');
    onShowToast('Routing to WhatsApp secure chat sequence with Senior Agent...');
  };

  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(property.price);

  const formattedPromoPrice = property.promoPrice
    ? new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        maximumFractionDigits: 0
      }).format(property.promoPrice)
    : null;

  return (
    <div className="bg-gray-50/50 min-h-screen py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link Breadcrumb */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-100 rounded-lg text-xs font-bold text-gray-700 hover:text-blue-900 shadow-xs hover:border-gray-200 transition-all duration-300 uppercase tracking-widest cursor-pointer mb-6"
        >
          <ArrowLeft className="w-4 h-4 text-amber-500" />
          Back to Properties
        </button>

        {/* Title Block Banner */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded bg-amber-500 text-blue-950">
                  {property.status}
                </span>
                <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded bg-blue-950 text-white">
                  {property.type}
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight font-sans">
                {property.title}
              </h1>
              
              <p className="text-sm text-gray-400 font-medium mt-1 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500" />
                {property.subLocation}, {property.location}
              </p>
            </div>

            <div className="text-left md:text-right shrink-0">
              <span className="text-xs text-gray-400 block font-medium">Outright Investment Price</span>
              <div className="flex items-baseline gap-2 mt-1 md:justify-end">
                {formattedPromoPrice ? (
                  <>
                    <span className="text-2xl sm:text-3xl font-extrabold text-blue-900 font-mono">
                      {formattedPromoPrice}
                    </span>
                    <span className="text-sm line-through text-gray-400 font-mono">
                      {formattedPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-2xl sm:text-3xl font-extrabold text-blue-900 font-mono">
                    {formattedPrice}
                  </span>
                )}
              </div>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold font-mono inline-block mt-1">
                Immediate Allocation Guaranteed
              </span>
            </div>
          </div>
        </div>

        {/* Gallery Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xs border border-gray-100">
            <img 
              src={property.primaryImage} 
              alt={property.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {property.gallery.slice(1, 3).map((img, index) => (
              <div key={index} className="h-[140px] sm:h-[192px] rounded-2xl overflow-hidden shadow-xs border border-gray-100">
                <img 
                  src={img} 
                  alt={`${property.title} secondary`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Description Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Multi-Badge Grid Panel */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center mb-2">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] text-gray-400 font-semibold block uppercase">Parcel Area</span>
                <span className="text-xs sm:text-sm font-bold text-gray-800 font-mono mt-0.5">{property.size}</span>
              </div>

              <div className="flex flex-col items-center border-x border-gray-100">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] text-gray-400 font-semibold block uppercase">Verified Title</span>
                <span className="text-xs sm:text-sm font-bold text-gray-800 font-mono mt-0.5 truncate max-w-full px-2" title={property.titleType}>
                  {property.titleType}
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
                  <DropletOff className="w-5 h-5" />
                </div>
                <span className="text-[10px] text-gray-400 font-semibold block uppercase">Topography</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-700 font-mono mt-0.5">{property.topography}</span>
              </div>
            </div>

            {/* In-view Tabs Controller */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs">
              <div className="flex border-b border-gray-100 pb-3 mb-6 gap-2">
                {(['details', 'why', 'amenities'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-blue-900 text-white'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {tab === 'details' ? 'Overview' : tab === 'why' ? 'Why Invest Here' : 'Estate Amenities'}
                  </button>
                ))}
              </div>

              {/* Tab Case 1: Overview */}
              {activeTab === 'details' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 font-sans flex items-center gap-1.5">
                      <Sparkles className="w-5 h-5 text-amber-500" />
                      Estate Description
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {property.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-4 font-sans">Investment Highlights</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {property.highlights.map((highlight, index) => (
                        <div key={index} className="flex gap-2.5 items-start bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-xs font-semibold text-gray-700 leading-relaxed">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Case 2: Why Invest Here (Asymmetric Cards) */}
              {activeTab === 'why' && (
                <div className="space-y-4">
                  {property.whyInvest.map((item, index) => (
                    <div 
                      key={index}
                      className={`p-5 rounded-xl border ${
                        index % 2 === 0 
                          ? 'bg-gradient-to-br from-blue-900/5 to-transparent border-blue-900/10' 
                          : 'bg-gradient-to-br from-amber-500/5 to-transparent border-amber-500/10'
                      }`}
                    >
                      <h4 className="text-sm font-bold text-blue-950 flex items-center gap-2 mb-1.5 font-sans">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab Case 3: Amenities */}
              {activeTab === 'amenities' && (
                <div className="grid grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 px-3.5 py-3.5 bg-neutral-50 border border-neutral-100 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-bold text-gray-700 uppercase font-sans tracking-wide">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Location & Infrastructure Maps Placeholder */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs">
              <h3 className="text-base font-bold text-gray-900 mb-2 font-sans">Neighborhood & Topographic Map</h3>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Strategic aerial blueprint overview outlining master coordinates and registered boundaries. Secure enclaves mapped free of litigation.
              </p>
              
              <div className="relative h-64 rounded-xl overflow-hidden border border-gray-100 bg-neutral-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80')` }} />
                <div className="absolute inset-0 bg-blue-950/20" />
                
                <div className="relative z-10 text-center px-4 max-w-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white text-blue-900 rounded-full shadow-lg mb-3">
                    <MapPin className="w-6 h-6 text-amber-500 animate-bounce" />
                  </div>
                  <p className="text-xs font-bold text-blue-950 uppercase tracking-widest font-sans">Master Estate Coordinates</p>
                  <p className="text-[10px] text-gray-500 mt-1 uppercase font-mono tracking-wider bg-white/90 py-1.5 px-3 rounded-md inline-block">
                    {property.subLocation.split(' (')[0]} Hub
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Inquiry Form Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-4">
              
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-md">
                <h3 className="text-base font-bold text-blue-950 tracking-tight font-sans mb-1 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-amber-500" />
                  Inquire Now
                </h3>
                <p className="text-[11px] text-gray-400 mb-4 leading-relaxed">
                  Schedule a private VIP tour to site coordinates with immediate physical allocation mapping options.
                </p>

                <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-1">Your Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInquiryChange}
                      placeholder="e.g. Kolawole Ademola"
                      className="w-full text-xs font-semibold px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInquiryChange}
                      placeholder="e.g. kola@company.com"
                      className="w-full text-xs font-semibold px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-1">Phone Number (WhatsApp Preferred)</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInquiryChange}
                      placeholder="e.g. +234 812 345 6789"
                      className="w-full text-xs font-semibold px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-1">Custom Message</label>
                    <textarea 
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInquiryChange}
                      className="w-full text-xs font-medium px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-900 hover:bg-blue-950 text-white font-bold text-[11px] tracking-widest uppercase rounded-lg shadow-md transition-all duration-300 transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-400" />
                    Book Private Tour
                  </button>
                </form>

                <div className="relative flex items-center justify-center my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-100" />
                  </div>
                  <span className="relative z-10 bg-white px-3 text-[9px] font-bold text-gray-400 uppercase tracking-widest">Or Chat Live</span>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppChat}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] tracking-widest uppercase rounded-lg shadow-xs transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquareCode className="w-4 h-4" />
                  Chat on WhatsApp
                </button>
              </div>

              {/* Secure Trust Stamp */}
              <div className="bg-neutral-900 text-white p-4 rounded-2xl border border-neutral-800 text-center">
                <p className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-bold mb-1">Explorer Security Guarantee</p>
                <p className="text-[10px] text-gray-400 leading-normal">
                  All property acquisitions are handled through legal trust accounts. Official deeds & allocations delivered instantly on completion.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
