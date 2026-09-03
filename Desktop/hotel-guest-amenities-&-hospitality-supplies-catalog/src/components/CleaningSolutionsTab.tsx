/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CLEANING_SOLUTIONS_PRODUCTS } from '../data';
import { Product } from '../types';
import DynamicIcon from './DynamicIcon';
import { Package, ImageOff, Building2, CheckCircle2 } from 'lucide-react';

// ── Section definitions ──────────────────────────────────────────────────────

const SECTIONS = [
  {
    id: 'surface-floor',
    emoji: '✨',
    title: 'Surface & Floor Care',
    productIds: ['stark-floor-cleaner', 'stark-all-purpose-cleaner', 'stark-glass-cleaner'],
  },
  {
    id: 'washroom',
    emoji: '🧴',
    title: 'Washroom & Personal Hygiene',
    productIds: ['stark-toilet-cleaner', 'stark-hand-wash'],
  },
  {
    id: 'specialty',
    emoji: '🛋️',
    title: 'Specialty Maintenance',
    productIds: ['stark-furniture-polish', 'stark-steel-polish'],
  },
  {
    id: 'kitchen',
    emoji: '🍽️',
    title: 'Kitchen & Dining',
    productIds: ['stark-dishwash-liquid', 'stark-oven-grill-cleaner'],
  },
  {
    id: 'ambiance',
    emoji: '🌬️',
    title: 'Ambiance',
    productIds: ['stark-air-freshener'],
  },
];

const WHY_CHOOSE = [
  { icon: 'Zap', label: 'Commercial Efficacy', text: 'Concentrated formulas that reduce cleaning time, effort, and overhead costs.' },
  { icon: 'Shield', label: 'Consistent Quality', text: 'Reliable performance batch after batch, tailored for high-volume use.' },
  { icon: 'Package', label: 'Streamlined Supply', text: 'Our universal 5-Litre packaging simplifies inventory management and storage.' },
];

// ── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group relative flex flex-col rounded-xl border border-slate-200 bg-white shadow-2xs hover:shadow-[0_18px_32px_-8px_rgba(15,23,42,0.13)] hover:border-slate-300 hover:-translate-y-1 transition-all duration-400 ease-out overflow-hidden"
    >
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-3.5 right-3.5 z-10 rounded-sm bg-blue-50 border border-blue-100 px-2 py-0.5 text-[9px] font-bold text-blue-900 tracking-wider uppercase">
          {product.badge}
        </span>
      )}

      {/* Image / Placeholder */}
      <div className="w-full aspect-[16/9] bg-slate-50 border-b border-slate-100 flex items-center justify-center overflow-hidden shrink-0">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04]"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex flex-col items-center gap-1.5 text-slate-300">
            <ImageOff className="h-8 w-8" strokeWidth={1.2} />
            <span className="text-[10px] font-medium tracking-wide uppercase">No Image</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Icon + Name */}
        <div className="flex items-start gap-3 mb-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-slate-100 border border-slate-200 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-800 group-hover:border-blue-200 transition-colors duration-300">
            <DynamicIcon name={product.iconName} size={16} />
          </div>
          <h3 className="font-sans font-semibold text-slate-900 text-sm leading-snug pt-1.5 group-hover:text-blue-900 transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-4">
          {product.description}
        </p>

        {/* Pack Size Tag */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="pt-3.5 border-t border-slate-100">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Pack Size</p>
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map((s) => (
                <span key={s} className="inline-flex items-center rounded-sm bg-slate-900 text-white px-2.5 py-0.5 text-[10px] font-semibold">
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function CleaningSolutionsTab() {
  const productMap = Object.fromEntries(CLEANING_SOLUTIONS_PRODUCTS.map((p) => [p.id, p]));

  return (
    <div className="space-y-14 pb-20">

      {/* ── About Stark Chem ── */}
      <div className="space-y-5">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1.5 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
          <Building2 className="h-3.5 w-3.5" />
          <span>About Stark Chem</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight max-w-2xl">
          Commercial-Grade Cleaning, Engineered for Hospitality
        </h1>

        <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base max-w-2xl">
          At Stark Chem, we understand that cleanliness is the foundation of an exceptional guest and staff experience.
          We engineer commercial-grade cleaning chemicals designed to tackle the rigorous demands of high-traffic facilities.
          From maintaining pristine lobbies to ensuring hygienic washrooms and kitchens, our comprehensive range of solutions
          delivers uncompromising results, efficiency, and reliability for your property.
        </p>

        {/* Bulk Packaging Callout */}
        <div className="flex items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5 max-w-2xl">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 border border-amber-200 text-amber-800">
            <Package className="h-5 w-5" />
          </div>
          <div>
            <p className="font-sans font-semibold text-amber-900 text-sm mb-1">Standardized Bulk Packaging — Built for Business</p>
            <p className="text-xs text-amber-800 leading-relaxed">
              All Stark Chem products are exclusively available in economical <strong>5-Litre containers</strong>. This standardized
              bulk sizing ensures you have the volume you need, reduces reordering frequency, and provides superior cost-efficiency
              for your housekeeping budget.
            </p>
          </div>
        </div>
      </div>

      <hr className="border-slate-200" />

      {/* ── Our Product Range ── */}
      <div className="space-y-1.5">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Our Product Range</p>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
          Stark Chem Product Catalogue
        </h2>
      </div>

      {/* ── Sections ── */}
      {SECTIONS.map((section, sIdx) => {
        const products = section.productIds.map((id) => productMap[id]).filter(Boolean);
        if (products.length === 0) return null;
        return (
          <div key={section.id} className="space-y-5">
            {/* Section Header */}
            <div className="flex items-center gap-3">
              <span className="text-xl">{section.emoji}</span>
              <h3 className="font-sans font-semibold text-slate-800 text-base sm:text-lg tracking-tight">
                {section.title}
              </h3>
              <div className="flex-1 h-px bg-slate-200 ml-1" />
            </div>

            {/* Product Grid */}
            <div className={`grid gap-6 ${products.length === 1 ? 'grid-cols-1 max-w-sm' : products.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
              {products.map((product, pIdx) => (
                <ProductCard key={product!.id} product={product!} index={sIdx * 5 + pIdx} />
              ))}
            </div>
          </div>
        );
      })}

      <hr className="border-slate-200" />

      {/* ── Why Choose Stark Chem ── */}
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">The Stark Chem Advantage</p>
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">Why Choose Stark Chem?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {WHY_CHOOSE.map((item) => (
            <div key={item.label} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" />
              <div>
                <p className="font-sans font-semibold text-slate-800 text-sm mb-1">{item.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      {/* ── Partner Footer ── */}
      <div className="rounded-xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="flex-1">
          <h3 className="font-serif text-lg sm:text-xl font-semibold mb-1.5">Partner with Stark Chem Today</h3>
          <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
            Ensure your property always makes a brilliant first impression. Contact us for bulk ordering,
            customized supply plans, and product demonstrations.
          </p>
          <p className="text-slate-400 text-xs mt-3 font-medium">
            Marketed in India by: M/s. WelStand Enterprises
          </p>
        </div>
        <button
          onClick={() => document.getElementById('contact-modal-trigger')?.click()}
          className="shrink-0 rounded-lg bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
        >
          Get in Touch
        </button>
      </div>

    </div>
  );
}
