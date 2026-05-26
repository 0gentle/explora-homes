/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, DollarSign, Award, SlidersHorizontal, RefreshCw, Layers } from 'lucide-react';
import { Property, FilterState } from '../types';
import PropertyCard from './PropertyCard';
import { PROPERTIES } from '../data';

interface PropertiesViewProps {
  onSelectProperty: (property: Property) => void;
  overrideFilters?: Partial<FilterState> | null;
  onClearOverrideFilters?: () => void;
}

export default function PropertiesView({
  onSelectProperty,
  overrideFilters,
  onClearOverrideFilters
}: PropertiesViewProps) {
  
  // Local Filter state
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    location: '',
    type: '',
    priceRange: '',
    titleType: ''
  });

  // Local Sort state
  const [sortBy, setSortBy] = useState<string>('default');

  // Triggering syncing with redirects from Home Hero Slider search desk
  React.useEffect(() => {
    if (overrideFilters) {
      setFilters((prev) => ({
        ...prev,
        location: overrideFilters.location ?? '',
        type: overrideFilters.type ?? '',
        priceRange: overrideFilters.priceRange ?? '',
        search: overrideFilters.search ?? ''
      }));
      // Clear parent memory once synchronized
      if (onClearOverrideFilters) {
        onClearOverrideFilters();
      }
    }
  }, [overrideFilters, onClearOverrideFilters]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      location: '',
      type: '',
      priceRange: '',
      titleType: ''
    });
    setSortBy('default');
  };

  // Filter & Search computation sequence
  const filteredProperties = useMemo(() => {
    let result = [...PROPERTIES];

    // 1. Text Search matching title or description
    if (filters.search) {
      const query = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.subLocation.toLowerCase().includes(query)
      );
    }

    // 2. Location exact filter or matching sphere
    if (filters.location) {
      result = result.filter((p) => p.location === filters.location);
    }

    // 3. Category Exact match
    if (filters.type) {
      result = result.filter((p) => p.type === filters.type);
    }

    // 4. Title specifications
    if (filters.titleType) {
      result = result.filter((p) => p.titleType.toLowerCase().includes(filters.titleType.toLowerCase()));
    }

    // 5. Price range parameters matching Nigeria millions
    if (filters.priceRange) {
      if (filters.priceRange === 'below-10') {
        result = result.filter((p) => p.price < 10000000);
      } else if (filters.priceRange === '10-50') {
        result = result.filter((p) => p.price >= 10000000 && p.price <= 50000000);
      } else if (filters.priceRange === 'above-50') {
        result = result.filter((p) => p.price > 50000000);
      }
    }

    // Apply designated user sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'title-asc') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [filters, sortBy]);

  return (
    <div className="bg-gray-50/40 min-h-screen py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* All Properties Header layout */}
        <div className="text-center md:text-left">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase font-mono block mb-1">
            EXPLORER ESTATES DIRECTORY
          </span>
          <h1 className="text-3xl sm:text-4.5xl font-extrabold text-blue-950 tracking-tight font-sans">
            Prime Real Estate Collections
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl leading-relaxed">
            Diligently vetted land parcels and premium homes across Lagos, Abuja, and Port Harcourt. Secure your legacy investment with zero traditional litigation problems.
          </p>
        </div>

        {/* Dynamic Filters Console Widget */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-xs space-y-4">
          
          <div className="flex items-center justify-between pb-3.5 border-b border-gray-50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-amber-500" />
              Advanced Property Search console
            </h3>

            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-[10px] font-bold text-gray-400 hover:text-amber-500 transition-colors uppercase tracking-widest"
            >
              <RefreshCw className="w-3 h-3" />
              Reset filters
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            
            {/* keyword search */}
            <div className="relative">
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wide mb-1 flex items-center gap-1">
                <Search className="w-3 h-3 text-blue-900" />
                Keyword search
              </label>
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleInputChange}
                placeholder="e.g. Flourish, Eluju, Orchid"
                className="w-full text-xs font-semibold px-3 py-2.5 bg-gray-50 hover:bg-gray-100/60 border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
              />
            </div>

            {/* location selects */}
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wide mb-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-900" />
                States & Cities
              </label>
              <select
                name="location"
                value={filters.location}
                onChange={handleInputChange}
                className="w-full text-xs font-semibold px-3 py-2.5 bg-gray-50 hover:bg-gray-100/60 border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 focus:bg-white transition-colors cursor-pointer"
              >
                <option value="">All Locations</option>
                <option value="Lekki Phase 1, Lagos">Lekki Phase 1</option>
                <option value="Ibeju-Lekki, Lagos">Ibeju-Lekki</option>
                <option value="Epe, Lagos">Epe</option>
                <option value="Sangotedo, Lagos">Sangotedo</option>
                <option value="Ikorodu, Lagos">Ikorodu</option>
                <option value="Guzape, Abuja">Guzape, Abuja</option>
              </select>
            </div>

            {/* type selection */}
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wide mb-1 flex items-center gap-1">
                <Layers className="w-3 h-3 text-blue-900" />
                Category
              </label>
              <select
                name="type"
                value={filters.type}
                onChange={handleInputChange}
                className="w-full text-xs font-semibold px-3 py-2.5 bg-gray-50 hover:bg-gray-100/60 border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 focus:bg-white transition-colors cursor-pointer"
              >
                <option value="">All Categories</option>
                <option value="Land">Land Plot</option>
                <option value="House">Residential House</option>
              </select>
            </div>

            {/* price options */}
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wide mb-1 flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-blue-900" />
                Price Bracket
              </label>
              <select
                name="priceRange"
                value={filters.priceRange}
                onChange={handleInputChange}
                className="w-full text-xs font-semibold px-3 py-2.5 bg-gray-50 hover:bg-gray-100/60 border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 focus:bg-white transition-colors cursor-pointer"
              >
                <option value="">All Budgets</option>
                <option value="below-10">Under ₦10M</option>
                <option value="10-50">₦10M - ₦50M</option>
                <option value="above-50">Above ₦50M</option>
              </select>
            </div>

            {/* title options */}
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wide mb-1 flex items-center gap-1">
                <Award className="w-3 h-3 text-blue-900" />
                Verified Title Type
              </label>
              <select
                name="titleType"
                value={filters.titleType}
                onChange={handleInputChange}
                className="w-full text-xs font-semibold px-3 py-2.5 bg-gray-50 hover:bg-gray-100/60 border border-gray-100 rounded-lg focus:outline-none focus:border-amber-400 focus:bg-white transition-colors cursor-pointer"
              >
                <option value="">All Titles</option>
                <option value="C of O">Certificate of Occupancy (C of O)</option>
                <option value="Consent">Governor's Consent</option>
                <option value="Gazette">Excision / Gazette</option>
                <option value="Survey">Registered Survey</option>
              </select>
            </div>

          </div>

          {/* Quick sort strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3.5 border-t border-gray-50 text-[11px] font-semibold text-gray-400 gap-3">
            <div>
              Showing <span className="text-blue-950 font-bold">{filteredProperties.length}</span> active estate portfolio listings
            </div>

            <div className="flex items-center gap-2">
              <span>Sort result by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-50 hover:bg-gray-100 border border-neutral-100 rounded-md py-1 px-2.5 text-[11px] font-bold text-gray-700 focus:outline-none cursor-pointer"
              >
                <option value="default">Release Default</option>
                <option value="price-asc">Price: Lowest to Highest</option>
                <option value="price-desc">Price: Highest to Lowest</option>
                <option value="title-asc">Alphabetical (A - Z)</option>
              </select>
            </div>
          </div>

        </div>

        {/* Properties Core Listings Dynamic Grid with animations */}
        <AnimatePresence mode="popLayout">
          {filteredProperties.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProperties.map((property) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <PropertyCard 
                    property={property} 
                    onSelect={onSelectProperty} 
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Empty parameters fallback
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl border border-gray-100 p-12 text-center max-w-md mx-auto"
            >
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto mb-4">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-950 mb-1">No Matching Estates</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                We couldn't locate any property portfolios matching your designated filters. Try adjusting your parameters or keyword searches.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all duration-300"
              >
                Reset Search Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Classic layout pagination */}
        {filteredProperties.length > 0 && (
          <div className="flex justify-center items-center gap-1.5 pt-6 font-mono font-bold">
            <button className="px-3 py-2 border border-gray-100 rounded-lg text-xs bg-white text-gray-400 cursor-not-allowed">
              Prev
            </button>
            <button className="px-3.5 py-2 border border-gray-100 bg-blue-950 text-white rounded-lg text-xs">
              1
            </button>
            <button className="px-3.5 py-2 border border-gray-150 bg-white text-gray-700 hover:bg-gray-100 text-xs rounded-lg transition-colors">
              2
            </button>
            <button className="px-3 py-2 border border-gray-150 bg-white text-gray-700 hover:bg-gray-100 text-xs rounded-lg transition-colors">
              Next
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
