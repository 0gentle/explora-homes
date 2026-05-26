/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'properties' | 'about' | 'contact';

export interface Property {
  id: string;
  title: string;
  type: 'Land' | 'House' | 'Commercial';
  location: string;
  subLocation: string;
  price: number;
  promoPrice?: number;
  size: string; // e.g. "500 SQM"
  titleType: string; // e.g. "C of O", "Registered Survey", "Excision Gazette", "Governor's Consent"
  topography: string; // e.g. "100% Dry Land", "Table Dry Land"
  primaryImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  whyInvest: { title: string; desc: string }[];
  featured: boolean;
  status: 'Available' | 'Selling Fast' | 'Sold Out';
  amenities: string[];
}

export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyTitle?: string;
}

export interface AgentApplication {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  whyJoin: string;
}

export interface FilterState {
  search: string;
  location: string;
  type: string;
  priceRange: string;
  titleType: string;
}
