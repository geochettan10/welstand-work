/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActiveTab = 'home' | 'cleaning' | 'amenities' | 'housekeeping' | 'linen';

export interface ProductVariant {
  label: string;
  options: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  iconName: string; // Will map to a Lucide icon component dynamically
  category: 'cleaning' | 'amenities' | 'housekeeping' | 'linen';
  subCategory?: 'wet' | 'dry';
  sizes?: string[];
  materials?: string[];
  packaging?: string[];
  variants?: ProductVariant[];
  ecoFriendly: boolean;
  skuCode?: string;
  badge?: string;
  imageUrl?: string;
  variantImages?: Record<string, string>;
}

export interface InquiryItem {
  product: Product;
  selectedSize?: string;
  selectedMaterial?: string;
  selectedPackaging?: string;
  quantity: number;
}
