/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { ActiveTab } from '../types';
import WelstandLogo from './WelstandLogo';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center text-[#1e5d93] transition-transform duration-300 hover:scale-105">
                <WelstandLogo className="h-full w-full" />
              </div>
              <div>
                <span className="font-sans text-white text-base tracking-wide font-bold">WelStand</span>
                <span className="ml-1.5 font-sans text-[10px] font-semibold uppercase tracking-widest text-blue-400">Enterprises</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Partnering with luxury hotels and boutique resorts globally to supply premium, environmentally conscious guest experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-wide uppercase">Product Catalog</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => setActiveTab('amenities')}
                  id="footer-link-amenities"
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Guest Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('cleaning')}
                  id="footer-link-cleaning"
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cleaning Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('housekeeping')}
                  id="footer-link-housekeeping"
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Housekeeping Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('linen')}
                  id="footer-link-linen"
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Linen, Tissue & Garbage
                </button>
              </li>
            </ul>
          </div>

          {/* Quality & Standards */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-wide uppercase">Standards</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <span className="text-slate-500">Premium Formulations</span>
              </li>
              <li>
                <span className="text-slate-500">Eco-Friendly Certifications</span>
              </li>
              <li>
                <span className="text-slate-500">Hospitality Grade Quality</span>
              </li>
              <li>
                <span className="text-slate-500">Sustainability Reports</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-wide uppercase">Corporate Offices</h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-400 block mb-0.5">Head Office:</span>
                  <span>63/3102A, Karshaka Road, Ernakulam - 682016</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-400 block mb-0.5">Registered Office:</span>
                  <span>29/23A, SH Apartments, Kovilakam Kundu North, Manjeri - 676121</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-slate-500 shrink-0" />
                <a href="tel:+918943344664" className="hover:text-white transition-colors">+91 8943344664</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-slate-500 shrink-0" />
                <a href="mailto:welstandenterprises@gmail.com" className="hover:text-white transition-colors">welstandenterprises@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Welstand Enterprises Supplies. All rights reserved.</p>
          <div className="flex gap-6 text-slate-500">
            <span className="hover:text-slate-400 transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors">Terms of Service</span>
            <span className="hover:text-slate-400 transition-colors">Compliance Certifications</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
