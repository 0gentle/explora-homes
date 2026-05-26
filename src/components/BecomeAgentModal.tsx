/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, ShieldCheck, Mail, Phone, MapPin, Briefcase, PlusCircle } from 'lucide-react';
import { AgentApplication } from '../types';

interface BecomeAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export default function BecomeAgentModal({
  isOpen,
  onClose,
  onShowToast
}: BecomeAgentModalProps) {
  const [formData, setFormData] = useState<AgentApplication>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    experience: '1-3 years',
    whyJoin: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      onShowToast('Please complete all required fields.');
      return;
    }
    onShowToast(`Application Received! Hello ${formData.fullName.split(' ')[0]}, our Broker Relations Unit will reach out to you via ${formData.email} regarding your onboarding kit.`);
    onClose();
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      experience: '1-3 years',
      whyJoin: ''
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto pointer-events-auto">
          {/* Backdrop Blur overlay */}
          <div className="fixed inset-0 bg-gray-950/80 backdrop-blur-xs transition-opacity" onClick={onClose} />

          {/* Modal layout center */}
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white text-left shadow-2xl border border-gray-100 font-sans my-8"
            >
              
              {/* Graphic Header Panel */}
              <div className="bg-blue-950 text-white p-6 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-[9px] font-bold tracking-widest text-amber-400 mb-2 uppercase">
                  <Award className="w-3.5 h-3.5" />
                  Broker Network
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-white mb-1.5">
                  Become a Certified Agent Partner
                </h3>
                
                <p className="text-xs text-gray-300 leading-relaxed">
                  Join Nigeria's fastest growing premium broker team. Enjoy unbeatable commissions (up to 15%), direct site resources, and litigation-free legal title guarantees.
                </p>
              </div>

              {/* Form container */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                
                {/* Full name input */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                    <PlusCircle className="w-3.5 h-3.5 text-blue-900" />
                    Full Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Samuel Kolawole Properties"
                    className="w-full text-xs font-semibold px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Grid contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-900" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. samuel@gmail.com"
                      className="w-full text-xs font-semibold px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-blue-900" />
                      Phone Number *
                    </label>
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

                {/* Location and Experience splits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-900" />
                      Resident State/City *
                    </label>
                    <input
                      type="text"
                      required
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Lekki, Lagos"
                      className="w-full text-xs font-semibold px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-blue-900" />
                      Field Experience
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full text-xs font-semibold px-3.5 py-2.5 bg-neutral-50 hover:bg-neutral-100/50 border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                    >
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1-3 years">1 - 3 years</option>
                      <option value="Over 3 years">Over 3 years</option>
                    </select>
                  </div>
                </div>

                {/* Motivations note */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    What drives your interest to collaborate with Explorer Homes?
                  </label>
                  <textarea
                    name="whyJoin"
                    rows={3}
                    value={formData.whyJoin}
                    onChange={handleChange}
                    placeholder="Brief details about your client base, sales records, or target achievements..."
                    className="w-full text-xs font-medium px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100/50 border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Agreement declaration */}
                <div className="flex items-start gap-2.5 pt-1">
                  <div className="shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-[10px] text-gray-400 leading-normal font-medium">
                    By submitting this request, you agree to protect investor confidentiality and present land portfolios strictly within true legal pricing brackets.
                  </p>
                </div>

                {/* Submissions button element */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs tracking-widest uppercase rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-98 cursor-pointer"
                  >
                    Submit Agency Application
                  </button>
                </div>

              </form>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
