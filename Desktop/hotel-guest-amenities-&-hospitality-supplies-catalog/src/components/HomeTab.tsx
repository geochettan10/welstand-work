/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveTab } from '../types';
import { CORE_BENEFITS } from '../data';
import DynamicIcon from './DynamicIcon';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface HomeTabProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
}

export default function HomeTab({ setActiveTab, onOpenContact }: HomeTabProps) {
  // Map category IDs to their specific display titles and styles
  const categoriesList = [
    {
      id: 'cleaning' as ActiveTab,
      title: 'Cleaning Solutions',
      tagline: 'Professional-Grade Housekeeping',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
      icon: 'Sparkles',
      itemCount: '6 Premium SKUs',
      color: 'border-slate-200 hover:border-blue-700'
    },
    {
      id: 'amenities' as ActiveTab,
      title: 'Guest Amenities',
      tagline: 'Spa Formulation & Dry Packs',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
      icon: 'HeartHandshake',
      itemCount: '17 Core Products',
      color: 'border-slate-200 hover:border-blue-700'
    },
    {
      id: 'housekeeping' as ActiveTab,
      title: 'Housekeeping Equipment',
      tagline: 'Heavy-Duty & Ergonomic Utilities',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80',
      icon: 'Sliders',
      itemCount: '6 Heavy-Duty items',
      color: 'border-slate-200 hover:border-blue-700'
    },
    {
      id: 'linen' as ActiveTab,
      title: 'Linen, Tissue & Garbage',
      tagline: 'Luxury Bedding & Soft Fibers',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
      icon: 'Package',
      itemCount: '6 Combed Essentials',
      color: 'border-slate-200 hover:border-blue-700'
    }
  ];

  return (
    <div className="space-y-24 pb-20">

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-white rounded-2xl border border-slate-200 shadow-xs">
        {/* Abstract Architectural Grid Vectors */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="absolute inset-y-0 left-12 w-px bg-slate-100 pointer-events-none hidden md:block" />
        <div className="absolute inset-y-0 right-12 w-px bg-slate-100 pointer-events-none hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/10 via-white to-slate-50/10 -z-10" />

        <div className="mx-auto max-w-4xl text-center px-6 sm:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-50/80 border border-blue-100/60 px-4 py-1.5 text-[10px] font-bold text-blue-900 tracking-widest uppercase shadow-2xs"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-700" />
            <span>Premium Hospitality Manufacturing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]"
          >
            Elevating Every Stay, <br className="hidden sm:inline" />
            <span className="text-blue-900 font-serif italic">One Amenity</span> at a Time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed"
          >
            Crafting sustainable, high-formulation toiletries and robust housekeeping essentials trusted by the world's leading five-star hotels, luxury boutique resorts, and premium hospitality chains.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => setActiveTab('amenities')}
              className="flex h-12 items-center gap-2 rounded-full bg-slate-900 px-8 font-semibold text-xs uppercase tracking-wider text-white transition-all hover:bg-slate-800 shadow-sm hover:shadow-md cursor-pointer"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. "Why choose us" strip */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold text-blue-800 uppercase tracking-widest block">Our Pillar Values</span>
          <h2 className="font-serif text-3xl font-semibold text-slate-900">Why Global Brands Partner With Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {CORE_BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col p-6 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm transition-all hover:-translate-y-1 hover:border-slate-350"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded bg-slate-100 text-slate-900 mb-5 ring-1 ring-slate-200">
                <DynamicIcon name={benefit.icon} size={20} />
              </div>
              <h3 className="font-sans font-semibold text-slate-900 text-sm mb-2 uppercase tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Preview Grid of the 4 other categories as clickable cards */}
      <section className="space-y-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-bold text-blue-800 uppercase tracking-widest block">Product Categories</span>
            <h2 className="font-serif text-3xl font-semibold text-slate-900">Browse Our Manufacturing Divisions</h2>
          </div>
          <span className="hidden sm:inline-block text-xs font-semibold text-slate-400 uppercase tracking-wider">Click any card to load the catalog segment</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesList.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setActiveTab(cat.id)}
              className={`group cursor-pointer overflow-hidden rounded-xl border bg-white shadow-2xs transition-all duration-300 hover:shadow-md hover:-translate-y-1.5 ${cat.color}`}
            >
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded bg-white/90 backdrop-blur-xs text-slate-850 shadow-sm border border-slate-200">
                  <DynamicIcon name={cat.icon} size={14} />
                </div>
                <div className="absolute bottom-3 right-3 rounded-sm bg-slate-900/90 backdrop-blur-xs px-2 py-0.5 text-[9px] font-bold text-white tracking-widest uppercase">
                  {cat.itemCount}
                </div>
              </div>
              <div className="p-5 space-y-1">
                <h3 className="font-serif text-lg font-semibold text-slate-900 group-hover:text-blue-900 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {cat.tagline}
                </p>
                <div className="pt-3 flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-blue-800 group-hover:gap-2 transition-all">
                  <span>Open Catalogue</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Closing CTA banner ("Request a Catalogue" / "Get in Touch") */}
      <section className="relative overflow-hidden rounded-2xl bg-slate-950 text-white px-8 py-16 sm:px-12 sm:py-20 shadow-lg border border-slate-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 block">Institutional Supplier Solutions</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
            Ready to design your guests' signature sensory experience?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            From customized amenity fragrances matching your local ecosystem, to eco-conscious dry amenities wrapped in biodegradable cornstarch and wheat-straw composite packing, we supply custom tailor-made hospitality solutions.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={onOpenContact}
              className="flex h-11 items-center gap-2 rounded bg-white px-6 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:bg-slate-100 shadow-sm cursor-pointer"
            >
              <MessageSquare className="h-4 w-4 text-slate-800" />
              Get in Touch
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
