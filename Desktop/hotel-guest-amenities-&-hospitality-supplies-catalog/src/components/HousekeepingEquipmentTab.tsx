/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HOUSEKEEPING_EQUIPMENT_PRODUCTS } from '../data';
import { Product } from '../types';
import DynamicIcon from './DynamicIcon';
import { Sparkles, Check, Leaf, ShoppingBag } from 'lucide-react';

interface HousekeepingEquipmentTabProps { }

export default function HousekeepingEquipmentTab() {
  const [selections, setSelections] = useState<Record<string, Record<string, string>>>({});

  // Selections are managed here
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

      {/* Editorial Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1.5 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
          <Sparkles className="h-3.5 w-3.5 text-slate-650" />
          <span>Section 03</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
          Housekeeping Sanitization & Supplies
        </h1>
        <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
          Certified high-quality sanitization bands, glass covers, and protective guards ensuring your rooms reflect pristine hygiene standards upon guest arrival.
        </p>
      </div>

      <hr className="border-slate-200" />

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {HOUSEKEEPING_EQUIPMENT_PRODUCTS.map((product) => {
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
                if (
                  v.label.toLowerCase().includes('material') ||
                  v.label.toLowerCase().includes('type') ||
                  v.label.toLowerCase().includes('packaging')
                ) {
                  materialTags = [...materialTags, ...v.options];
                }
              });
            }

            const formattedTags = Array.from(
              new Set(
                materialTags
                  .map((m) => {
                    if (m.toLowerCase().includes('paper')) return 'Paper';
                    if (m.toLowerCase().includes('plastic')) return 'Recycled Plastic';
                    if (m.toLowerCase().includes('kraft')) return 'Kraft';
                    return m.replace(/Option|Cap|Type|Resin|Band/g, '').trim();
                  })
                  .filter((v) => v.length > 0 && v.length < 20)
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
                    const activeSel = Object.values(productSelections).find(
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

                {/* Material Overview Tag Strip */}
                {formattedTags.length > 0 && (
                  <div className="space-y-1.5 mb-5">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                      Build Options
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {formattedTags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded bg-slate-50 border border-slate-200/50 px-2 py-0.5 text-[10px] font-bold text-slate-600 uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Product Interactive Configuration Controls */}
                <div className="space-y-4 pt-4 border-t border-slate-100 mb-5">
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

                {/* Action Panel */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-100/60 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-sans text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      In Stock / Premium Quality
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>


    </div>
  );
}
