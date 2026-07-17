/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LINEN_TISSUE_GARBAGE_PRODUCTS } from '../data';
import DynamicIcon from './DynamicIcon';
import { Sparkles } from 'lucide-react';

export default function LinenTissueGarbageTab() {
  const [selections, setSelections] = useState<Record<string, { size: string; material: string }>>({});

  const handleSelectionChange = (productId: string, type: 'size' | 'material', value: string) => {
    setSelections(prev => {
      const current = prev[productId] || { size: '', material: '' };
      return {
        ...prev,
        [productId]: { ...current, [type]: value }
      };
    });
  };

  const cardProducts = LINEN_TISSUE_GARBAGE_PRODUCTS.slice(0, 3);
  const listProducts = LINEN_TISSUE_GARBAGE_PRODUCTS.slice(3);

  return (
    <div className="space-y-12 pb-20">

      {/* Editorial Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1.5 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
          <Sparkles className="h-3.5 w-3.5 text-slate-650" />
          <span>Section 04</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
          Linen, Tissue & Garbage Liners
        </h1>
        <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
          Luxurious spun yarns and high-thread bedding collections paired with daily necessities like ultra-dense double-ply bath rolls and 100% biodegradable cornstarch garbage bags.
        </p>
      </div>

      <hr className="border-slate-200" />

      {/* Grid of Product Cards (first 3) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardProducts.map((product) => {
          const currentSelect = selections[product.id] || {
            size: product.sizes ? product.sizes[0] : '',
            material: product.materials ? product.materials[0] : ''
          };

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-[0_20px_35px_-10px_rgba(15,23,42,0.15)] hover:border-slate-350 hover:-translate-y-2 hover:[transform:perspective(1000px)_rotateX(2.5deg)_rotateY(-2.5deg)] [transform-style:preserve-3d] transition-all duration-500 ease-out"
            >
              {product.badge && (
                <span className="absolute top-4 right-4 z-10 rounded-sm bg-blue-50 border border-blue-100/50 px-2 py-0.5 text-[9px] font-bold text-blue-900 tracking-wider uppercase transition-all duration-500 group-hover:[transform:translateZ(10px)]">
                  {product.badge}
                </span>
              )}

              {product.imageUrl && (
                <div className="relative w-full aspect-[16/9] mb-5 overflow-hidden rounded-lg bg-slate-50 border border-slate-100/80 flex items-center justify-center transition-all duration-500 group-hover:bg-slate-100/40">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full w-full object-contain p-3 transition-all duration-500 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <div className="flex items-start gap-4 mb-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-slate-100 text-slate-900 border border-slate-200 transition-all duration-500 group-hover:bg-blue-50 group-hover:text-blue-900 group-hover:border-blue-200 group-hover:[transform:translateZ(15px)] shadow-2xs group-hover:shadow-md">
                  <DynamicIcon name={product.iconName} size={18} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-sans font-semibold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-blue-900 transition-colors">
                    {product.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans mb-6 flex-1">
                {product.description}
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100 mb-6">
                {product.sizes && product.sizes.length > 0 && (
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                      Size & Cut
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {product.sizes.map((size) => {
                        const isSelected = currentSelect.size === size || (!currentSelect.size && product.sizes?.[0] === size);
                        return (
                          <button
                            key={size}
                            onClick={() => handleSelectionChange(product.id, 'size', size)}
                            className={`rounded-sm px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${isSelected
                              ? 'bg-slate-900 text-white shadow-2xs'
                              : 'bg-slate-50 text-slate-650 hover:bg-slate-100 border border-slate-200/50'
                              }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {product.materials && product.materials.length > 0 && (
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                      Material Quality
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {product.materials.map((mat) => {
                        const isSelected = currentSelect.material === mat || (!currentSelect.material && product.materials?.[0] === mat);
                        return (
                          <button
                            key={mat}
                            onClick={() => handleSelectionChange(product.id, 'material', mat)}
                            className={`rounded-sm px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${isSelected
                              ? 'bg-blue-50 text-blue-900 ring-1 ring-blue-150 font-bold shadow-2xs'
                              : 'bg-slate-50 text-slate-655 hover:bg-slate-100 border border-slate-200/50'
                              }`}
                          >
                            {mat}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {product.variants && product.variants.map((variant) => (
                  <div key={variant.label} className="space-y-1.5">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                      {variant.label}
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {variant.options.map((opt) => (
                        <button
                          key={opt}
                          className="rounded-sm px-2.5 py-1 text-xs font-semibold bg-slate-50 text-slate-650 border border-slate-200/50 hover:bg-slate-100 transition-all cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-1.5">
                  <div className={`h-2 w-2 rounded-full ${product.ecoFriendly ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                  <span className="font-sans text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    {product.ecoFriendly ? 'Eco-Certified' : 'Premium Finish'}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Simple List for last 4 products */}
      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">More Products</p>
        </div>
        <ul className="divide-y divide-slate-100">
          {listProducts.map((product, i) => (
            <motion.li
              key={product.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors group"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-800 group-hover:border-blue-200 transition-colors">
                <DynamicIcon name={product.iconName} size={16} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-sans font-semibold text-slate-900 text-sm group-hover:text-blue-900 transition-colors">
                  {product.name}
                </p>
                {product.sizes && product.sizes.length > 0 && (
                  <p className="text-xs text-slate-400 mt-0.5 truncate">
                    {product.sizes.join(' · ')}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {product.badge && (
                  <span className="rounded-sm bg-blue-50 border border-blue-100/50 px-2 py-0.5 text-[9px] font-bold text-blue-900 tracking-wider uppercase hidden sm:inline">
                    {product.badge}
                  </span>
                )}
                <div className="flex items-center gap-1">
                  <div className={`h-1.5 w-1.5 rounded-full ${product.ecoFriendly ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide hidden md:inline">
                    {product.ecoFriendly ? 'Eco' : 'Premium'}
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>


    </div>
  );
}
