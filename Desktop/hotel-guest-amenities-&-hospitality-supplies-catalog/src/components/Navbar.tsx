/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { Sparkles, Menu, X } from 'lucide-react';
import WelstandLogo from './WelstandLogo';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onOpenContact }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'cleaning', label: 'Cleaning Solutions' },
    { id: 'amenities', label: 'Guest Amenities' },
    { id: 'housekeeping', label: 'Housekeeping Equipment' },
    { id: 'linen', label: 'Linen, Tissue & Garbage' }
  ];

  const handleTabClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div
          onClick={() => handleTabClick('home')}
          className="flex cursor-pointer items-center gap-2.5 transition-opacity hover:opacity-90 group"
        >
          <div className="flex h-10 w-10 items-center justify-center text-[#1e5d93] transition-transform duration-300 group-hover:scale-105">
            <WelstandLogo className="h-full w-full" />
          </div>
          <div>
            <span className="font-serif text-lg font-bold tracking-widest text-slate-900">
              WELSTAND
            </span>
            <span className="ml-1.5 font-sans text-[10px] font-semibold uppercase tracking-widest text-blue-800">
              Enterprises
            </span>
          </div>
        </div>

        {/* Navigation Tabs (Desktop only) */}
        <nav className="hidden md:flex items-center gap-1.5 whitespace-nowrap">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                onClick={() => handleTabClick(item.id)}
                className={`relative rounded-full px-3.5 py-1.5 text-xs lg:text-sm transition-all duration-300 font-sans tracking-wide ${isActive
                    ? 'bg-blue-50 text-blue-900 font-semibold shadow-2xs ring-1 ring-blue-100/70'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-normal hover:cursor-pointer'
                  }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Contact Us button (Desktop only) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-full p-2 text-slate-700 hover:bg-slate-105 focus:outline-none transition-all cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 animate-spin duration-300" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg">
          <div className="space-y-1.5 px-4 py-4">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full text-left rounded-lg px-4 py-3 text-sm font-sans tracking-wide transition-all border cursor-pointer ${isActive
                      ? 'bg-blue-50 border-blue-100 text-blue-900 font-bold'
                      : 'bg-white border-transparent text-slate-655 hover:bg-slate-50'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full rounded-lg bg-slate-900 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
