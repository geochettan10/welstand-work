/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GUEST_AMENITIES_PRODUCTS } from '../data';
import { Product } from '../types';
import DynamicIcon from './DynamicIcon';
import { Sparkles, ShoppingBag, Check, Leaf } from 'lucide-react';

interface GuestAmenitiesTabProps { }

type SubSection = 'wet' | 'dry';

export default function GuestAmenitiesTab() {
  const [activeSubTab, setActiveSubTab] = useState<SubSection>('wet');
  const [selections, setSelections] = useState<Record<string, Record<string, string>>>({});

  // Filters the product list based on subcategory
  const filteredProducts = GUEST_AMENITIES_PRODUCTS.filter(
    (prod) => prod.subCategory === activeSubTab
  );

  const handleSelectionChange = (productId: string, key: string, value: string) => {
    setSelections((prev) => {
      const current = prev[productId] || {};
      return {
        ...prev,
        [productId]: {
          ...current,
          [key]: value
        }
      };
    });
  };

  return (
    <div className="space-y-12 pb-20">

      {/* 1. Header & Dynamic Sub-Tab Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1.5 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5 text-slate-650" />
            <span>Core Focus - Section 02</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Guest Amenities With L'Essence
          </h1>
          <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
            Refined sensory collections designed to elevate your brand. Experience our botanical liquids or customize unbleached biodegradable dry-packaged essentials.
          </p>
        </div>

        {/* Outer Pill Switcher */}
        <div className="flex bg-slate-100 p-1 rounded border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => setActiveSubTab('wet')}
            className={`rounded px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeSubTab === 'wet'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-500 hover:text-slate-800'
              }`}
          >
            Wet Amenities
          </button>
          <button
            onClick={() => setActiveSubTab('dry')}
            className={`rounded px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeSubTab === 'dry'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-500 hover:text-slate-800'
              }`}
          >
            Dry Amenities
          </button>
        </div>
      </div>

      <hr className="border-slate-200" />

      {/* 2. Section Description & Title Bar based on Active Switch */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-blue-800 uppercase tracking-widest block">
            {activeSubTab === 'wet' ? 'Formulations Division' : 'Eco Packaging Division'}
          </span>
          <h2 className="font-serif text-2xl font-semibold text-slate-900">
            {activeSubTab === 'wet' ? 'Wet Amenities Collection' : 'Dry Amenities Essentials'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-sans italic">
            {activeSubTab === 'wet'
              ? '“Indulgent formulations for a spa-like in-room experience”'
              : '“Thoughtfully packaged essentials, from eco-friendly to classic”'}
          </p>
        </div>

        {/* Rapid summary info */}
        <div className="flex gap-4 text-xs font-medium text-slate-500 bg-slate-50 rounded border border-slate-200 p-3 shrink-0">
          <div>

          </div>
        </div>
      </div>

      {/* 3. Product Cards Grid with custom material tag indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => {
            const productSelections = selections[product.id] || {};

            // Collect all potential material tags to render as small tag chips on the card
            let materialTags: string[] = [];
            if (product.materials) {
              materialTags = [...materialTags, ...product.materials];
            }
            if (product.packaging) {
              materialTags = [...materialTags, ...product.packaging];
            }
            if (product.variants) {
              product.variants.forEach((v) => {
                if (v.label.toLowerCase().includes('material') || v.label.toLowerCase().includes('type') || v.label.toLowerCase().includes('packaging')) {
                  materialTags = [...materialTags, ...v.options];
                }
              });
            }

            const formattedTags = Array.from(
              new Set(
                materialTags
                  .map((m) => {
                    if (m.toLowerCase().includes('wood')) return 'Wooden';
                    if (m.toLowerCase().includes('wheat')) return 'Wheat Straw';
                    if (m.toLowerCase().includes('plastic')) return 'Plastic';
                    if (m.toLowerCase().includes('bio-pouch') || m.toLowerCase().includes('kraft')) return 'Bio Pouch';
                    if (m.toLowerCase().includes('box') || m.toLowerCase().includes('cardboard')) return 'Box Pack';
                    if (m.toLowerCase().includes('paper')) return 'Paper Wrap';
                    if (m.toLowerCase().includes('jute')) return 'Jute';
                    if (m.toLowerCase().includes('terry')) return 'Terry';
                    if (m.toLowerCase().includes('non-woven')) return 'Non-Woven';
                    return m.replace(/Handle|Slipper|Brush|Option|Cap|Type|Resin|Collection/g, '').trim();
                  })
                  .filter((v) => v.length > 0 && v.length < 20 && v !== 'Plastic' && v !== 'Wheat Straw')
              )
            ).slice(0, 4);

            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-[0_20px_35px_-10px_rgba(15,23,42,0.15)] hover:border-slate-350 hover:-translate-y-2 hover:[transform:perspective(1000px)_rotateX(2.5deg)_rotateY(-2.5deg)] [transform-style:preserve-3d] transition-all duration-500 ease-out relative"
              >
                {/* Green Eco Leaf Indicator if eco-friendly */}
                {product.ecoFriendly && (
                  <span className="absolute top-4 right-4 flex items-center gap-1 rounded bg-emerald-50 border border-emerald-100 px-2 py-0.5 text-[8px] font-bold text-emerald-700 tracking-wider uppercase transition-all duration-500 group-hover:[transform:translateZ(10px)] z-10">
                    <Leaf className="h-3 w-3 shrink-0" />
                    <span>Eco-Choice</span>
                  </span>
                )}

                {/* Product Badge */}
                {product.badge && !product.ecoFriendly && (
                  <span className="absolute top-4 right-4 rounded bg-blue-50 border border-blue-100/50 px-2 py-0.5 text-[8px] font-bold text-blue-900 tracking-wider uppercase transition-all duration-500 group-hover:[transform:translateZ(10px)] z-10">
                    {product.badge}
                  </span>
                )}

                {/* Product Image */}
                {(() => {
                  let activeImage = product.imageUrl;
                  if (product.variantImages) {
                    const selectionsList = product.variants
                      ? product.variants.map(v => productSelections[v.label] || v.options[0])
                      : Object.values(productSelections);
                    const activeSel = selectionsList.find(
                      (val) => typeof val === 'string' && product.variantImages?.[val]
                    );
                    if (activeSel && typeof activeSel === 'string') {
                      activeImage = product.variantImages[activeSel];
                    }
                  }

                  if (!activeImage) return null;

                  return (
                    <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-lg bg-slate-50 border border-slate-100/80 flex items-center justify-center transition-all duration-500 group-hover:bg-slate-100/40 shrink-0">
                      <img
                        src={activeImage}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-contain p-2 transition-all duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  );
                })()}

                {/* Icon / SKU Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-slate-100 text-slate-900 border border-slate-200 transition-all duration-500 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 group-hover:[transform:translateZ(15px)] shadow-2xs group-hover:shadow-md">
                    <DynamicIcon name={product.iconName} size={18} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-sans font-semibold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-blue-900 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Product Description */}
                <p className="text-xs text-slate-500 leading-relaxed font-sans mb-5 flex-1">
                  {product.description}
                </p>



                {/* Product Interactive Configuration Controls */}
                <div className="space-y-4 pt-4 border-t border-slate-100 mb-5">

                  {/* Sizes Selector */}
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                        Volume / Sizes
                      </label>
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.map((size) => {
                          const isSelected = productSelections['size'] === size || (!productSelections['size'] && product.sizes?.[0] === size);
                          return (
                            <button
                              key={size}
                              onClick={() => handleSelectionChange(product.id, 'size', size)}
                              className={`rounded-sm px-2.5 py-1 text-[11px] font-semibold transition-all cursor-pointer ${isSelected
                                ? 'bg-slate-900 text-white shadow-2xs'
                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/50'
                                }`}
                            >
                              {size}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}



                  {/* Dynamic Variants arrays */}
                  {product.variants && product.variants.map((variant) => {
                    const currentValue = productSelections[variant.label] || variant.options[0];
                    return (
                      <div key={variant.label} className="space-y-1">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                          {variant.label}
                        </label>
                        <div className="space-y-1">
                          {variant.options.map((opt) => {
                            const isSelected = currentValue === opt;
                            return (
                              <button
                                key={opt}
                                onClick={() => handleSelectionChange(product.id, variant.label, opt)}
                                className={`w-full text-left rounded px-2.5 py-1.5 text-[11px] font-medium transition-all flex items-center justify-between border cursor-pointer ${isSelected
                                  ? 'bg-blue-50 border-blue-200 text-blue-900 font-bold'
                                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                                  }`}
                              >
                                <span>{opt}</span>
                                {isSelected && <Check className="h-3.5 w-3.5 text-blue-800 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>



    </div>
  );
}
