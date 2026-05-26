/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquareText, ShieldAlert, Award } from 'lucide-react';

interface ContactViewProps {
  onShowToast: (message: string) => void;
}

export default function ContactView({ onShowToast }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Property Acquisition',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      onShowToast('Please complete all required fields (*).');
      return;
    }
    onShowToast(`Message submitted! Thank you ${formData.name.split(' ')[0]}, our litigation & acquisition partners have logged your file under reference "EXP-#${Math.floor(Math.random() * 89999) + 10000}".`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Property Acquisition',
      message: ''
    });
  };

  return (
    <div className="bg-gray-50/40 min-h-screen py-16 font-sans space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase font-mono block mb-1">
            24/7 SUPPORT ROUTINGS
          </span>
          <h1 className="text-3xl sm:text-4.5xl font-extrabold text-blue-950 tracking-tight font-sans">
            Contact Acquisition Desk
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1.5 leading-relaxed font-semibold">
            Have questions about land titles, excision gazettes, mapping inspection vehicles, or coordinate chart files? File a secure inquiry directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Detailed contact and support numbers (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="text-md font-bold text-gray-900 font-sans tracking-wide">
                Direct Channels
              </h3>

              <div className="space-y-5">
                {/* 1. Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block font-mono">Immediate Inspection Requests</span>
                    <span className="text-sm font-extrabold text-gray-800 font-mono">+234 812 345 6789</span>
                    <span className="text-[10px] text-emerald-600 block font-bold uppercase tracking-widest mt-0.5 font-mono">● WhatsApp Lines active</span>
                  </div>
                </div>

                {/* 2. Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block font-mono">Title Audits & Deeds File</span>
                    <span className="text-sm font-extrabold text-gray-800 font-mono">legal@explorerhomes.com</span>
                  </div>
                </div>

                {/* 3. Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block font-mono">Operating Hours</span>
                    <span className="text-sm font-bold text-gray-800">Mon - Fri (8:00 AM - 6:00 PM)</span>
                    <span className="text-[10px] text-gray-400 block font-medium leading-none mt-1">Saturday Inspections by Appointment Only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Litigations Security note card */}
            <div className="bg-neutral-900 text-white rounded-2xl border border-neutral-800 p-6">
              <div className="flex gap-3items-center mb-4 text-amber-400">
                <ShieldAlert className="w-6 h-6 text-amber-500 shrink-0" />
                <h4 className="text-xs font-bold uppercase tracking-widest font-mono">Antigravity Title Verification</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-medium">
                Every transaction with Explorer Homes is backed by our Legal Excision Insurance. All plots are automatically charted, surveyor coordinates logged, and boundary peggings photographed directly at allocation. There are 100% zero land disputes.
              </p>
            </div>
          </div>

          {/* Interactive contact message form (7 columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-md">
              <h3 className="text-base font-bold text-blue-950 font-sans tracking-tight mb-1 flex items-center gap-2">
                <MessageSquareText className="w-5 h-5 text-amber-500" />
                Register New File
              </h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Connect directly with our legal & acquisition partner desks. Fill out form parameters marked with (*) to initiate file allocations.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* 1. Name */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Kolawole Josephine"
                    className="w-full text-xs font-semibold px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Grid inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* email */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. j.kola@gmail.com"
                      className="w-full text-xs font-semibold px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* phone */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Direct Phone Contact *</label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +234 812 345 6789"
                      className="w-full text-xs font-semibold px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                </div>

                {/* Topic selection subject */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Inquiry Classification Desk *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full text-xs font-semibold px-3.5 py-2.5 bg-neutral-50 hover:bg-neutral-100/50 border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="Property Acquisition">Property Acquisition</option>
                    <option value="Title Vetting & Deeds Charting">Title Vetting & Deeds Charting</option>
                    <option value="Joint Venture Land storage">Joint Venture Land Investment</option>
                    <option value="Partner Broker Affiliation">Partner Broker Affiliation</option>
                  </select>
                </div>

                {/* message details */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Inquiry Details *</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide specific details regarding your target properties, preferred size SQM, or legal timeline expectations..."
                    className="w-full text-xs font-medium px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100/50 border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 focus:bg-white transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs tracking-widest uppercase rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-[0.98] cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    Submit Secure Request
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
