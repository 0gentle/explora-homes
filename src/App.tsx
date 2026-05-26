/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import PropertiesView from './components/PropertiesView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import PropertyDetailView from './components/PropertyDetailView';
import BecomeAgentModal from './components/BecomeAgentModal';
import Toast from './components/Toast';
import { PageId, Property, FilterState } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [becomeAgentOpen, setBecomeAgentOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // Transporter state to sync filters searched from Home Hero to the Properties View
  const [overrideFilters, setOverrideFilters] = useState<Partial<FilterState> | null>(null);

  // Automatically reset the page scroll when changing active views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [activePage, selectedProperty]);

  const handleSelectProperty = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleSearchRedirect = (searchParams: Partial<FilterState>) => {
    setOverrideFilters(searchParams);
    setSelectedProperty(null); // Close active detailed property views if any
    setActivePage('properties');
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleDownloadBrochure = () => {
    handleShowToast('Preparing certified catalogs... Your download of "Explorer Estates Master Brochure & Survey Plots Pricing Guide PDF - 2026" is starting!');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Global Navigation header */}
      <Header
        activePage={activePage}
        onPageChange={setActivePage}
        onBecomeAgentClick={() => setBecomeAgentOpen(true)}
        onViewPropertyReset={() => setSelectedProperty(null)}
      />

      {/* 2. Main Page views (displays the property detail page if selected, otherwise displays active navigation tab) */}
      <main className="flex-grow animate-fade-in" id="app-content-body">
        {selectedProperty ? (
          <PropertyDetailView
            property={selectedProperty}
            onBack={() => setSelectedProperty(null)}
            onShowToast={handleShowToast}
          />
        ) : (
          <>
            {activePage === 'home' && (
              <HomeView
                onSelectProperty={handleSelectProperty}
                onSearchRedirect={handleSearchRedirect}
                onNavigateToTab={setActivePage}
                onBecomeAgentClick={() => setBecomeAgentOpen(true)}
                onDownloadBrochure={handleDownloadBrochure}
              />
            )}

            {activePage === 'properties' && (
              <PropertiesView
                onSelectProperty={handleSelectProperty}
                overrideFilters={overrideFilters}
                onClearOverrideFilters={() => setOverrideFilters(null)}
              />
            )}

            {activePage === 'about' && (
              <AboutView
                onShowToast={handleShowToast}
                onNavigateToTab={setActivePage}
              />
            )}

            {activePage === 'contact' && (
              <ContactView
                onShowToast={handleShowToast}
              />
            )}
          </>
        )}
      </main>

      {/* 3. Global Footer bar */}
      <Footer
        onPageChange={setActivePage}
        onShowToast={handleShowToast}
        onBecomeAgentClick={() => setBecomeAgentOpen(true)}
        onViewPropertyReset={() => setSelectedProperty(null)}
      />

      {/* 4. Onboarding "Become an Agent" modal panel */}
      <BecomeAgentModal
        isOpen={becomeAgentOpen}
        onClose={() => setBecomeAgentOpen(false)}
        onShowToast={handleShowToast}
      />

      {/* 5. Custom notification popup */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}

    </div>
  );
}
