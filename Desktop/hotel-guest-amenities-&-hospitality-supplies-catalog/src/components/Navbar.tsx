/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ActiveTab } from '../types';
import { Sparkles, Menu, X } from 'lucide-react';
import WelstandLogo from './WelstandLogo';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onOpenContact }: NavbarProps) {
  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'cleaning', label: 'Cleaning Solutions' },
    { id: 'amenities', label: 'Guest Amenities' },
    { id: 'housekeeping', label: 'Housekeeping Equipment' },
    { id: 'linen', label: 'Linen, Tissue & Garbage' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div
          onClick={() => setActiveTab('home')}
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

        {/* Navigation Tabs (Horizontal Scrollable on mobile, beautiful pills on desktop) */}
        <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 max-w-full sm:overflow-visible">
          <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs sm:text-sm transition-all duration-300 font-sans tracking-wide ${isActive
                      ? 'bg-blue-50 text-blue-900 font-semibold shadow-2xs ring-1 ring-blue-100/70'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-normal'
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600 sm:hidden" />
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Right side contact placeholder */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
