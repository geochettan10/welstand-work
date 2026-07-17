/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from './types';

export const CORE_BENEFITS = [
  {
    id: 'eco',
    title: 'Eco-Conscious Standards',
    description: 'Biodegradable formulations, FSC-certified cardboard packing, and zero-waste alternatives like wheat straw and bamboo.',
    icon: 'Leaf'
  },
  {
    id: 'custom',
    title: 'Bespoke Brand Customization',
    description: 'We offer full logo branding, custom fragrance engineering, and bespoke colorways matching your hotel brand identity.',
    icon: 'Sparkles'
  },
  {
    id: 'bulk',
    title: 'High-Capacity Bulk Supply',
    description: 'Reliable volume distribution, large-scale factory direct container shipments, and smart multi-hub logistics.',
    icon: 'Truck'
  },
  {
    id: 'quality',
    title: 'Hospitality-Grade Assurance',
    description: 'Dermatologically tested formulations, ISO-9001 certified manufacturing, and strictly vetted supplier standards.',
    icon: 'ShieldCheck'
  }
];

export const GUEST_AMENITIES_PRODUCTS: Product[] = [
  // --- Wet Amenities ---
  {
    id: 'wet-shampoo',
    name: 'Revitalizing Botanical Shampoo',
    description: 'Gently cleanses and restores hair with organic aloe vera, green tea extracts, and sweet citrus notes.',
    imageUrl: '/images/wet_shampoo_1784229476960.jpg',
    iconName: 'Droplet',
    category: 'amenities',
    subCategory: 'wet',
    sizes: ['15ml', '20ml', '30ml', '5L Bulk Refill'],
    materials: ['Recycled Ocean Plastic Bottle', 'Biodegradable Wheat-straw Tube', 'PCR Dispenser Bottle'],
    ecoFriendly: true,
    skuCode: 'AM-W-SH01',
    badge: 'Best Seller'
  },
  {
    id: 'wet-shower-gel',
    name: 'Nourishing Shower Gel',
    description: 'An aromatic body wash infused with skin-nourishing marine minerals, lavender, and chamomile.',
    imageUrl: '/images/wet_shower_gel_1784229464986.jpg',
    iconName: 'Sparkles',
    category: 'amenities',
    subCategory: 'wet',
    sizes: ['15ml', '20ml', '30ml', '5L Bulk Refill'],
    materials: ['Recycled Ocean Plastic Bottle', 'Biodegradable Wheat-straw Tube', 'PCR Dispenser Bottle'],
    ecoFriendly: true,
    skuCode: 'AM-W-SG02'
  },
  {
    id: 'wet-bubble-bath',
    name: 'Soothing Bubble Bath',
    description: 'Rich foaming bath concentrate containing relaxing sandalwood oil and organic jasmine hydrosol.',
    imageUrl: '/images/wet_bubble_bath_1784229490007.jpg',
    iconName: 'Wind',
    category: 'amenities',
    subCategory: 'wet',
    sizes: ['15ml', '20ml', '30ml', '5L Bulk Refill'],
    materials: ['Recycled Ocean Plastic Bottle', 'Biodegradable Wheat-straw Tube'],
    ecoFriendly: false,
    skuCode: 'AM-W-BB03'
  },
  {
    id: 'wet-moisturizer',
    name: 'Hydrating Moisturizer',
    description: 'Velvety-smooth, fast-absorbing body lotion enriched with refined shea butter, jojoba, and vitamin E.',
    imageUrl: '/images/wet_moisturizer_1784229549290.jpg',
    iconName: 'HeartHandshake',
    category: 'amenities',
    subCategory: 'wet',
    sizes: ['15ml', '20ml', '30ml', '5L Bulk Refill'],
    materials: ['Recycled Ocean Plastic Bottle', 'Biodegradable Wheat-straw Tube', 'PCR Dispenser Bottle'],
    ecoFriendly: true,
    skuCode: 'AM-W-MZ04',
    badge: 'Premium Formulation'
  },
  {
    id: 'wet-conditioner',
    name: 'Restorative Conditioner',
    description: 'Ultra-nourishing formulation containing Moroccan argan oil and wildflower honey for silky hair texture.',
    imageUrl: '/images/wet_conditioner_1784229563841.jpg',
    iconName: 'FlameKindling', // representing silk/smoothness metaphorically or warm shine
    category: 'amenities',
    subCategory: 'wet',
    sizes: ['15ml', '20ml', '30ml', '5L Bulk Refill'],
    materials: ['Recycled Ocean Plastic Bottle', 'Biodegradable Wheat-straw Tube', 'PCR Dispenser Bottle'],
    ecoFriendly: true,
    skuCode: 'AM-W-CO05'
  },
  {
    id: 'wet-soap',
    name: 'Soap Bar',
    description: 'Dermatologist-tested vegetable-base bar. Available in classic white or translucent amber glycerin.',
    imageUrl: '/images/wet_soap_1784229575064.jpg',
    iconName: 'Layers',
    category: 'amenities',
    subCategory: 'wet',
    sizes: ['15g Oil Bar', '15g Glycerin Bar'],
    materials: ['White Vegetable Soap', 'Glycerin Transparent Soap'],
    packaging: ['Recycled Pleated Paper Wrapper', 'FSC Cardboard Box', 'Kraft Bio-Pouch'],
    ecoFriendly: true,
    skuCode: 'AM-W-SP06',
    badge: 'Eco-Wrap'
  },
  {
    id: 'wet-hair-oil',
    name: 'Pure Almond Hair Oil',
    description: 'Ultra-lightweight hair-conditioning treatment for premium resort salons and in-room spa collections.',
    imageUrl: '/images/wet_hair_oil_1784229586265.jpg',
    iconName: 'Pipette',
    category: 'amenities',
    subCategory: 'wet',
    sizes: ['15ml', '20ml', '30ml'],
    materials: ['Amber Glass Dropper Bottle', 'Recycled PET Bottle'],
    ecoFriendly: true,
    skuCode: 'AM-W-HO07'
  },

  // --- Dry Amenities ---
  {
    id: 'dry-shaving-kit',
    name: 'Hospitality Shaving Kit',
    description: 'Complete shave solution with specialized double-lubricated high-grade razor and aloe shaving gel.',
    imageUrl: '/images/dry_shaving_kit_1784277243066.png',
    variantImages: {
      'Wooden Handle Razor + Gel': '/images/dry_shaving_kit_1784277243066.png',
      'Wheat Straw Razor + Gel': '/images/dry_shaving_kit_1784277243066.png',
      'Plastic Razor + Gel': '/images/plastic_shaving_kit_1784236240159.jpg'
    },
    iconName: 'Scissors',
    category: 'amenities',
    subCategory: 'dry',
    variants: [
      {
        label: 'Razor Type',
        options: [
          'Wooden Handle Razor + Gel',
          'Wheat Straw Razor + Gel',
          'Plastic Razor + Gel'
        ]
      },
      {
        label: 'Packaging Option',
        options: ['Box', 'Bio-Pouch']
      }
    ],
    ecoFriendly: true,
    skuCode: 'AM-D-SHV01',
    badge: 'Popular'
  },
  {
    id: 'dry-dental-kit',
    name: 'Eco-Conscious Dental Kit',
    description: 'Includes premium natural fiber dental brush with rounded bristles and standard refreshing mint toothpaste.',
    imageUrl: '/images/dry_dental_kit_1784230510814.jpg',
    variantImages: {
      'Bamboo Brush + Anchor Paste': '/images/dry_dental_kit_1784230510814.jpg',
      'Wheat Straw Brush + Anchor Paste': '/images/dental_kit_wheat_straw_1784236219058.jpg',
      'Plastic Brush + Anchor Paste': '/images/plastic_dental_kit_1784236273797.jpg'
    },
    iconName: 'Smile',
    category: 'amenities',
    subCategory: 'dry',
    variants: [
      {
        label: 'Brush Material',
        options: [
          'Bamboo Brush + Anchor Paste',
          'Wheat Straw Brush + Anchor Paste',
          'Plastic Brush + Anchor Paste'
        ]
      },
      {
        label: 'Packaging Option',
        options: ['Box', 'Bio-Pouch']
      }
    ],
    ecoFriendly: true,
    skuCode: 'AM-D-DNT02',
    badge: '100% Biodegradable'
  },
  {
    id: 'dry-comb',
    name: 'Refined Styling Comb',
    description: 'Smooth, static-free wide-tooth hospitality comb designed for delicate detangling.',
    imageUrl: '/images/dry_comb_1784278061779.jpg',
    variantImages: {
      'Wood': '/images/dry_comb_1784278061779.jpg',
      'Wheat Straw': '/images/dry_comb_1784278061779.jpg',
      'Plastic': '/images/comb_plastic_1784236251177.jpg'
    },
    iconName: 'Menu',
    category: 'amenities',
    subCategory: 'dry',
    variants: [
      {
        label: 'Material Selection',
        options: ['Wood', 'Wheat Straw', 'Plastic']
      },
      {
        label: 'Packaging',
        options: ['Box', 'Bio-Pouch']
      }
    ],
    ecoFriendly: true,
    skuCode: 'AM-D-CMB03'
  },
  {
    id: 'dry-slippers',
    name: 'Luxury Room Slippers',
    description: 'Plush, non-slip hospitality footwear designed for maximal in-room relaxation and comfort.',
    imageUrl: '/images/dry_white_slippers_1784231081372.jpg',
    variantImages: {
      'Premium Terry': '/images/dry_white_slippers_1784231081372.jpg',
      'Natural Jute': '/images/dry_jute_slippers_1784231069170.jpg',
      'Non-Woven': '/images/non_woven_slipper_1784236262437.jpg'
    },
    iconName: 'Footprints',
    category: 'amenities',
    subCategory: 'dry',
    variants: [
      {
        label: 'Slipper Material',
        options: ['Premium Terry', 'Natural Jute', 'Non-Woven']
      }
    ],
    ecoFriendly: true,
    skuCode: 'AM-D-SLP04',
    badge: 'Guest Favorite'
  },
  {
    id: 'dry-shower-cap',
    name: 'Elasticated Shower Cap',
    description: 'Waterproof high-elastic fit crown cap to keep hair dry during shower cycles.',
    imageUrl: '/images/dry_shower_cap_premium_1784231096198.jpg',
    iconName: 'Shield',
    category: 'amenities',
    subCategory: 'dry',
    variants: [
      {
        label: 'Packaging',
        options: ['Butter Cover', 'With Box']
      }
    ],
    ecoFriendly: true,
    skuCode: 'AM-D-CAP05'
  },
  {
    id: 'dry-all-purpose-kit',
    name: 'Essential All-Purpose Kit',
    description: 'Compact personal care kit comprising soft medical band-aids, cotton buds, and standard sewing threads.',
    imageUrl: '/images/dry_all_purpose_kit_1784231122037.jpg',
    iconName: 'Wrench',
    category: 'amenities',
    subCategory: 'dry',
    ecoFriendly: true,
    skuCode: 'AM-D-APK10',
    badge: 'Essential'
  },
  {
    id: 'dry-loofah',
    name: 'Natural Fiber Loofah Sponge',
    description: '100% natural, biodegradable oval loofah sponge with soft cotton piping border for gentle body exfoliation.',
    imageUrl: '/images/dry_loofah_1784230763353.jpg',
    iconName: 'Flower',
    category: 'amenities',
    subCategory: 'dry',
    ecoFriendly: true,
    skuCode: 'AM-D-LFH11',
    badge: 'Eco Choice'
  }
];

export const CLEANING_SOLUTIONS_PRODUCTS: Product[] = [
  {
    id: 'stark-hand-wash',
    name: 'Stark Chem Hand Wash',
    description: 'A premium, skin-safe hand wash with an exotic fragrance. Gentle on hands, dermatologically tested, eco-friendly, and highly effective at sanitizing.',
    iconName: 'Sparkles',
    category: 'cleaning',
    sizes: ['5L Bulk Refill Canister'],
    materials: ['Gold Pearlescent Liquid Formula'],
    ecoFriendly: true,
    skuCode: 'ST-HW-250',
    badge: 'Luxury Selection',
    imageUrl: '/images/stark_hand_wash_1784226813515.jpg'
  },
  {
    id: 'stark-floor-cleaner',
    name: 'Stark Chem Floor Cleaner',
    description: 'A high-performance floor cleanser with an exotic tea aroma. Suitable for all polished flooring, leaving a streak-free, gleaming finish.',
    iconName: 'Layers',
    category: 'cleaning',
    sizes: ['5L Institutional Jug'],
    materials: ['Translucent Pink Liquid Formula'],
    ecoFriendly: true,
    skuCode: 'ST-FC-500',
    badge: 'High Performance',
    imageUrl: '/images/stark_floor_cleaner_1784226832756.jpg'
  },
  {
    id: 'stark-toilet-cleaner',
    name: 'Stark Chem Toilet Bowl Cleaner',
    description: 'Hospital-grade triple-action toilet bowl sanitizer. Rapidly descales, deodorizes, and removes stubborn organic stains with ease.',
    iconName: 'Shield',
    category: 'cleaning',
    sizes: ['5L Bulk Refill'],
    materials: ['Active Acid Gel Formula'],
    ecoFriendly: true,
    skuCode: 'ST-TC-710',
    badge: '3-in-1 Power',
    imageUrl: '/images/stark_toilet_cleaner_1784226850889.jpg'
  },
  {
    id: 'stark-dishwash-liquid',
    name: 'Stark Chem Dishwash Liquid',
    description: '2x active grease-cutting power with a refreshing lemon scent. Rinses clean with zero residue, leaving kitchenware spotless and shining.',
    iconName: 'Droplet',
    category: 'cleaning',
    sizes: ['5L Dispensing Canister'],
    materials: ['Concentrated Citrus Formula'],
    ecoFriendly: true,
    skuCode: 'ST-DW-500',
    badge: '2x Active Power',
    imageUrl: '/images/stark_dishwash_liquid_1784226864579.jpg'
  },
  {
    id: 'stark-air-freshener',
    name: 'Stark Chem Air Freshener',
    description: 'A premium, aerosol air freshener with an exotic fragrance. Neutrallizes bad odors instantly and fills the hotel space with a luxurious botanical scent.',
    iconName: 'Wind',
    category: 'cleaning',
    sizes: ['250ml Spray Can', '5L Bulk Refill Canister'],
    materials: ['Aerosol Odor Eliminator Formula'],
    ecoFriendly: true,
    skuCode: 'ST-AF-400',
    badge: 'Exotic Fragrance',
    imageUrl: '/images/stark_air_freshener_1784236464267.jpg'
  }
];

export const HOUSEKEEPING_EQUIPMENT_PRODUCTS: Product[] = [
  {
    id: 'dry-glass-cover',
    name: 'Hygienic Drinking Glass Cover',
    description: 'Sanitized paper or plastic caps protecting glassware prior to guest check-in.',
    imageUrl: '/images/dry_glass_cover_1784231133242.jpg',
    iconName: 'Wine',
    category: 'housekeeping',
    ecoFriendly: true,
    skuCode: 'AM-D-GLC07',
    badge: 'Hygiene Seal'
  },
  {
    id: 'dry-wc-band',
    name: 'Sanitized WC Toilet Band',
    description: 'Vibrant blue-printed sanitized paper strips confirming deep-cleaning cycle completion.',
    imageUrl: '/images/dry_wc_band_1784231109407.jpg',
    iconName: 'CheckSquare',
    category: 'housekeeping',
    ecoFriendly: true,
    skuCode: 'AM-D-WCB09',
    badge: 'Sanitized Certified'
  }
];

export const LINEN_TISSUE_GARBAGE_PRODUCTS: Product[] = [
  {
    id: 'dry-disposal-bag',
    name: 'Disposal Bag',
    description: 'Individually folded sanitary hygiene liners. Discrete, robust, and cleanly presented.',
    imageUrl: '/images/ln_disposal_bag_1784272414187.jpg',
    iconName: 'Trash2',
    category: 'linen',
    materials: [
      'Paper',
      'Box'
    ],
    ecoFriendly: true,
    skuCode: 'AM-D-DSP06',
    badge: 'Hygiene Seal'
  },
  {
    id: 'dry-laundry-bag',
    name: 'Guest Laundry Bag',
    description: 'Generously-sized laundry storage bag featuring secure drawstrings and branding fields.',
    imageUrl: '/images/ln_laundry_bag_1784272684061.jpg',
    iconName: 'Briefcase',
    category: 'linen',
    materials: [
      'Non- woven',
      'Paper'
    ],
    ecoFriendly: true,
    skuCode: 'AM-D-LND08',
    badge: 'Eco choice'
  },
  {
    id: 'ln-toilet-roll',
    name: 'Toilet Roll',
    description: 'Deluxe toilet rolls crafted with premium softness and strength. Optimized for hotel guestrooms.',
    imageUrl: '/images/ln_toilet_roll_1784271837073.jpg',
    iconName: 'Scroll',
    category: 'linen',
    sizes: ['80 Pulls', '100 Pulls', '340 Pulls'],
    ecoFriendly: true,
    skuCode: 'LN-TS-TRL',
    badge: 'Soft Touch'
  },
  {
    id: 'ln-garbage-bag',
    name: 'Oxo-Degradable Garbage Bag',
    description: 'Heavy-duty oxo-degradable garbage bags available in multiple room-fit sizes. Eco-responsible disposal solution designed for hotel housekeeping.',
    iconName: 'Trash2',
    category: 'linen',
    sizes: ['Small', 'Medium', 'Large', 'XL'],
    variants: [
      {
        label: 'Color',
        options: ['Green', 'Black']
      },
      {
        label: 'Thickness',
        options: ['50 Micron', '70 Micron']
      }
    ],
    ecoFriendly: true,
    skuCode: 'LN-GB-OXO',
    badge: 'Oxo-Degradable'
  },
  {
    id: 'ln-cm-fold-tissue',
    name: 'C/M Fold Tissue',
    description: 'Interlocking folded paper towels designed for convenient, hygienic single-sheet dispensing.',
    iconName: 'Layers',
    category: 'linen',
    sizes: ['C-Fold', 'M-Fold'],
    ecoFriendly: true,
    skuCode: 'LN-TS-CMF',
    badge: 'High Absorbency'
  },
  {
    id: 'ln-tissue-napkin-premium',
    name: 'Tissue Napkin Premium Soft',
    description: 'Luxuriously soft and strong napkins designed for high-quality table settings and dining comfort.',
    iconName: 'Square',
    category: 'linen',
    sizes: ['1-Ply 30x30 cm', '1-Ply 27x30 cm', '2-Ply 30x30 cm'],
    ecoFriendly: true,
    skuCode: 'LN-TS-NPK',
    badge: 'Premium Soft'
  },
  {
    id: 'ln-facial-tissue-box',
    name: 'Facial Tissue Box',
    description: 'Velvet-soft facial tissues in a convenient, elegantly styled dispenser box for guests.',
    iconName: 'Box',
    category: 'linen',
    sizes: ['2-Ply 100 Pulls', '2-Ply 50 Pulls', '2-Ply 25 Pulls'],
    ecoFriendly: true,
    skuCode: 'LN-TS-FTB',
    badge: 'Gentle Care'
  },
  {
    id: 'ln-hrt-roll',
    name: 'HRT Hand Roll Towel',
    description: 'Heavy-duty Hand Roll Towel (HRT) for automatic and manual dispensers. Designed for high efficiency and speed.',
    iconName: 'RefreshCw',
    category: 'linen',
    sizes: ['150 Meter Roll'],
    ecoFriendly: true,
    skuCode: 'LN-TS-HRT',
    badge: 'High Capacity'
  }
];

export const CATEGORIES_METADATA = {
  cleaning: {
    title: 'Cleaning Solutions',
    description: 'Professional-grade, highly concentrated cleaning solutions tailored for premium hospitality housekeeping operations.',
    icon: 'Sparkles',
    items: CLEANING_SOLUTIONS_PRODUCTS
  },
  amenities: {
    title: 'Guest Amenities',
    description: 'Impeccably designed personal care solutions. Choose from spa-grade liquid formulations to customizable unbleached dry necessities.',
    icon: 'Sparkles',
    items: GUEST_AMENITIES_PRODUCTS
  },
  housekeeping: {
    title: 'Housekeeping Equipment',
    description: 'Durable, ergonomically engineered cleaning utilities, modular carts, and ultra-quiet vacuum machinery designed for peak workflow.',
    icon: 'Sliders',
    items: HOUSEKEEPING_EQUIPMENT_PRODUCTS
  },
  linen: {
    title: 'Linen, Tissue & Garbage',
    description: 'High-thread-count sateen bedding, luxurious Turkish towels, compostable disposal liners, and whisper-soft toilet tissue.',
    icon: 'Package',
    items: LINEN_TISSUE_GARBAGE_PRODUCTS
  }
};
