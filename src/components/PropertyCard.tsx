/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, Shield, Award, DropletOff } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  key?: string;
  property: Property;
  onSelect: (property: Property) => void;
}

export default function PropertyCard({ property, onSelect }: PropertyCardProps) {
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
    <div 
      onClick={() => onSelect(property)}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col cursor-pointer"
    >
      {/* Property Image Cover */}
      <div className="relative h-64 overflow-hidden shrink-0">
        <img
          src={property.primaryImage}
          alt={property.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dynamic Gated Tag Overlay */}
        <div className="absolute top-4 left-4 flex gap-1.5 z-10">
          <span className={`px-2.5 py-1 text-[9px] font-bold tracking-wider uppercase rounded-md shadow-sm ${
            property.status === 'Selling Fast'
              ? 'bg-amber-500 text-blue-950'
              : 'bg-emerald-600 text-white'
          }`}>
            {property.status}
          </span>
          <span className="px-2.5 py-1 text-[9px] font-bold tracking-wider uppercase rounded-md shadow-sm bg-blue-950 text-white border border-white/10">
            {property.type}
          </span>
        </div>

        {/* Dynamic Dark Gradient Shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-60" />
      </div>

      {/* Property Information and Badges */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase font-mono block mb-1">
            {property.location}
          </span>
          
          <h3 className="text-base font-bold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-1 mb-2 font-sans">
            {property.title}
          </h3>

          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
            {property.description}
          </p>

          {/* Essential Specs Grid */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-50 mb-4 text-center">
            {/* Size spec */}
            <div className="flex flex-col items-center justify-center">
              <Award className="w-4 h-4 text-amber-500 mb-1" />
              <span className="text-[10px] text-gray-400 font-medium">Size</span>
              <span className="text-[11px] text-gray-800 font-bold font-mono">{property.size}</span>
            </div>
            {/* Title spec */}
            <div className="flex flex-col items-center justify-center border-x border-gray-50 px-1">
              <Shield className="w-4 h-4 text-blue-900 mb-1" />
              <span className="text-[10px] text-gray-400 font-medium font-sans">Title</span>
              <span className="text-[10px] text-gray-800 font-bold truncate max-w-full font-mono" title={property.titleType}>
                {property.titleType}
              </span>
            </div>
            {/* Ground topog spec */}
            <div className="flex flex-col items-center justify-center">
              <DropletOff className="w-4 h-4 text-emerald-600 mb-1" />
              <span className="text-[10px] text-gray-400 font-medium">Ground</span>
              <span className="text-[11px] text-gray-800 font-bold font-mono">100% Dry</span>
            </div>
          </div>
        </div>

        {/* Action strip & Prices */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="text-[10px] text-gray-400 block font-medium">Outright Price</span>
            <div className="flex items-baseline gap-1.5">
              {formattedPromoPrice ? (
                <>
                  <span className="text-base font-extrabold text-blue-950 font-mono">
                    {formattedPromoPrice}
                  </span>
                  <span className="text-[11px] line-through text-gray-400 font-mono">
                    {formattedPrice}
                  </span>
                </>
              ) : (
                <span className="text-base font-extrabold text-blue-950 font-mono">
                  {formattedPrice}
                </span>
              )}
            </div>
          </div>

          {/* Premium Vector Action Arrow */}
          <div className="w-9 h-9 bg-blue-50 group-hover:bg-amber-500 text-blue-900 group-hover:text-blue-950 rounded-lg flex items-center justify-center transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
          </div>
        </div>

      </div>
    </div>
  );
}
