/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ActiveTab } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeTab from './components/HomeTab';
import CleaningSolutionsTab from './components/CleaningSolutionsTab';
import GuestAmenitiesTab from './components/GuestAmenitiesTab';
import HousekeepingEquipmentTab from './components/HousekeepingEquipmentTab';
import LinenTissueGarbageTab from './components/LinenTissueGarbageTab';
import { X, Phone, Mail, MapPin, Building } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [showContactModal, setShowContactModal] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeTab
            setActiveTab={setActiveTab}
            onOpenContact={() => setShowContactModal(true)}
          />
        );
      case 'cleaning':
        return <CleaningSolutionsTab />;
      case 'amenities':
        return <GuestAmenitiesTab />;
      case 'housekeeping':
        return <HousekeepingEquipmentTab />;
      case 'linen':
        return <LinenTissueGarbageTab />;
      default:
        return (
          <HomeTab
            setActiveTab={setActiveTab}
            onOpenContact={() => setShowContactModal(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/30 bg-grid-pattern flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* Persistent Sticky Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenContact={() => setShowContactModal(true)}
      />

      {/* Main Container Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Bottom Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Global Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl z-10"
            >
              <button
                onClick={() => setShowContactModal(false)}
                className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700">Get in Touch</span>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">Welstand Enterprises</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="mailto:welstandenterprises@gmail.com"
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:border-blue-200 hover:bg-blue-50/20 group"
                  >
                    <div className="rounded-lg bg-blue-50 p-2 text-blue-700 group-hover:bg-blue-100 transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Us</p>
                      <p className="text-xs font-semibold text-slate-700 truncate group-hover:text-blue-900 transition-colors">
                        welstandenterprises@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+918943344664"
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:border-emerald-200 hover:bg-emerald-50/20 group"
                  >
                    <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700 group-hover:bg-emerald-100 transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Call Us</p>
                      <p className="text-xs font-semibold text-slate-700 group-hover:text-emerald-900 transition-colors">
                        +91 8943344664
                      </p>
                    </div>
                  </a>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex gap-3">
                    <div className="mt-0.5 rounded-lg bg-slate-100 p-2 text-slate-600 shrink-0">
                      <Building className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-455 mb-1">Head Office</h4>
                      <p className="text-xs text-slate-650 font-sans leading-relaxed whitespace-pre-line">
                        63/3102A, Karshaka Road,{"\n"}Ernakulam-682016
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-0.5 rounded-lg bg-slate-100 p-2 text-slate-600 shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-455 mb-1">Registered Office</h4>
                      <p className="text-xs text-slate-650 font-sans leading-relaxed whitespace-pre-line">
                        29/23A, SH Apartments{"\n"}Kovilakam Kundu North, Manjeri-676121
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setShowContactModal(false)}
                    className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
