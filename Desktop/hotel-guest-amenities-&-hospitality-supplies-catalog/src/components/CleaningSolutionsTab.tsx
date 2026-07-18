/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CLEANING_SOLUTIONS_PRODUCTS } from '../data';
import { Product } from '../types';
import DynamicIcon from './DynamicIcon';
import { Sparkles, ShoppingBag, Check, Shield } from 'lucide-react';

interface CleaningSolutionsTabProps { }

export default function CleaningSolutionsTab() {
  // Store selected variants locally per product ID to allow custom options
  const [selections, setSelections] = useState<Record<string, { size: string; material: string }>>({});

  const handleSelectionChange = (productId: string, type: 'size' | 'material', value: string) => {
    setSelections(prev => {
      const current = prev[productId] || { size: '', material: '' };
      return {
        ...prev,
        [productId]: {
          ...current,
          [type]: value
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
          <span>Section 01</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
          Best Cleaning Solutions With Stark Chem
        </h1>
        <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
          We manufacture a wide range of eco-friendly cleaning chemicals under the Stark Chem brand, including floor cleaners, air fresheners, hand wash, toilet bowl cleaners, and dish wash liquid. All products are made with advanced formulas to deliver reliable quality and performance.
        </p>
      </div>

      <hr className="border-slate-200" />

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CLEANING_SOLUTIONS_PRODUCTS.map((product) => {
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
              {/* Product Badge */}
              {product.badge && (
                <span className="absolute top-4 right-4 z-10 rounded-sm bg-blue-50 border border-blue-100/50 px-2 py-0.5 text-[9px] font-bold text-blue-900 tracking-wider uppercase transition-all duration-500 group-hover:[transform:translateZ(10px)]">
                  {product.badge}
                </span>
              )}

              {/* Product Image */}
              {product.imageUrl && (
                <div className="relative w-full aspect-[16/9] mb-5 overflow-hidden rounded-lg bg-slate-50 border border-slate-100/80 flex items-center justify-center transition-all duration-500 group-hover:bg-slate-100/40">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={`h-full w-full object-contain p-3 transition-all duration-500 group-hover:scale-[1.03] ${product.id === 'stark-toilet-cleaner' || product.id === 'stark-dishwash-liquid'
                      ? 'mix-blend-multiply filter contrast-[1.05] brightness-[1.02]'
                      : ''
                      }`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              {/* Product Icon & Title Block */}
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

              {/* Product Description */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans mb-6 flex-1">
                {product.description}
              </p>

              {/* Product Configurations */}
              <div className="space-y-4 pt-4 border-t border-slate-100 mb-6">

                {/* Size Selector */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                      Supply Capacity / Volume
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

              </div>

            </motion.div>
          );
        })}
      </div>

      <hr className="border-slate-200" />

      {/* Additional Products List */}
      <div className="space-y-6">
        <div className="space-y-1.5">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">More Products</p>
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
            Additional Cleaning Range
          </h2>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="py-3 px-5 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest w-8">#</th>
                <th className="py-3 px-5 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Product</th>
                <th className="py-3 px-5 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pack Size</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: 'All Purpose Cleaner', size: '5 kg' },
                { name: 'Glass Cleaner', size: '5 L' },
                { name: 'Steel Polish', size: '5 L' },
                { name: 'Wood Polish', size: '5 kg' },
                { name: 'Phenyl', size: '5 L' },
                { name: 'Phenyl', size: '25 L' },
                { name: 'Soap Oil', size: '5 kg' },
                { name: 'Soap Oil', size: '25 kg' },
                { name: 'Oven & Grill Cleaner', size: '5 kg' },
                { name: 'Laundry Liquid Detergent', size: '5 kg' },
                { name: 'Laundry Perfume', size: '5 L' },
                { name: 'Sanitizer Liquid', size: '5 L' },
                { name: 'Sanitizer Gel', size: '5 kg' },
                { name: 'Diffuser Oil', size: '1 L' },
                { name: 'Fuel Gel', size: '200 ml' },
                { name: 'Fuel Gel', size: '14 kg' },
              ].map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-5 text-slate-300 font-mono text-xs tabular-nums">{String(idx + 1).padStart(2, '0')}</td>
                  <td className="py-3 px-5 font-sans font-medium text-slate-800">{item.name}</td>
                  <td className="py-3 px-5">
                    <span className="inline-flex items-center rounded-sm bg-slate-100 border border-slate-200/50 px-2 py-0.5 text-xs font-semibold text-slate-700">
                      {item.size}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
