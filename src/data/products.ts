export interface Product {
  id: string;
  name: string;
  shortName: string;
  category: 'mouse' | 'headset' | 'keyboard';
  tier: 'flagship' | 'high' | 'mid' | 'entry';
  price: number;
  image: string | null;
  description: string;
  shortDescription: string;
  features: string[];
  specs: Record<string, string>;
  comingSoon?: boolean;
}

export const products: Product[] = [
  {
    id: 'carbon-x-pro',
    name: 'Iravis Carbon X PRO',
    shortName: 'Carbon X PRO',
    category: 'mouse',
    tier: 'flagship',
    price: 189,
    image: '/images/1000010676.jpg',
    description: 'The pinnacle of gaming precision. The Carbon X PRO features a revolutionary carbon fiber composite shell, delivering unmatched strength at under 40g. With 8KHz polling rate and the PixArt 3950 HS sensor, every micro-movement is captured with absolute accuracy.',
    shortDescription: 'Ultra-lightweight flagship gaming mouse under 40g with 8KHz polling.',
    features: [
      'Carbon fiber composite shell',
      'Under 40g ultra-lightweight design',
      'PixArt 3950 HS optical sensor',
      '8KHz polling rate (0.125ms latency)',
      '250-hour battery life',
      'Omron optical switches (80M clicks)',
      'PTFE mouse feet',
      'USB-C charging with 8K dongle',
    ],
    specs: {
      'Sensor': 'PixArt 3950 HS',
      'DPI Range': '100 - 30,000',
      'Polling Rate': '8,000 Hz (0.125ms)',
      'Weight': '38g',
      'Battery Life': 'Up to 250 hours',
      'Connectivity': '2.4GHz / Bluetooth 5.2 / USB-C',
      'Switches': 'Omron Optical (80M)',
      'Cable': 'Paracord USB-C',
      'Feet': '100% PTFE',
      'Dimensions': '120 x 58 x 38mm',
    },
  },
  {
    id: 'crimson-r1',
    name: 'Iravis Crimson R1',
    shortName: 'Crimson R1',
    category: 'mouse',
    tier: 'high',
    price: 149,
    image: '/images/1000010674.png',
    description: 'Bold aesthetics meet elite performance. The Crimson R1 features a striking red magnesium alloy frame with honeycomb ventilation for optimal thermal management. Designed for competitive gamers who demand both style and substance.',
    shortDescription: 'High-tier gaming mouse with striking design and premium performance.',
    features: [
      'Magnesium alloy honeycomb frame',
      'Under 55g lightweight build',
      'PixArt 3395 optical sensor',
      '4KHz polling rate',
      '180-hour battery life',
      'TTC Gold micro switches',
      'RGB underglow lighting',
      'Premium carrying case included',
    ],
    specs: {
      'Sensor': 'PixArt 3395',
      'DPI Range': '100 - 26,000',
      'Polling Rate': '4,000 Hz (0.25ms)',
      'Weight': '52g',
      'Battery Life': 'Up to 180 hours',
      'Connectivity': '2.4GHz / Bluetooth 5.1 / USB-C',
      'Switches': 'TTC Gold (60M)',
      'Cable': 'Braided USB-C',
      'Feet': 'PTFE',
      'Dimensions': '122 x 60 x 40mm',
    },
  },
  {
    id: 'c1',
    name: 'Iravis C1',
    shortName: 'C1',
    category: 'mouse',
    tier: 'mid',
    price: 89,
    image: null,
    description: 'The perfect balance of performance and value. The C1 delivers competitive-grade specs in a refined, ergonomic package. Coming soon to complete our mid-tier lineup.',
    shortDescription: 'Mid-tier gaming mouse offering exceptional value.',
    features: [
      'Ergonomic right-handed design',
      'Under 65g lightweight',
      'PixArt 3370 optical sensor',
      '1KHz polling rate',
      '120-hour battery life',
      'Kailh GM switches',
      'Wireless charging compatible',
      'Customizable RGB zones',
    ],
    specs: {
      'Sensor': 'PixArt 3370',
      'DPI Range': '100 - 19,000',
      'Polling Rate': '1,000 Hz (1ms)',
      'Weight': '63g',
      'Battery Life': 'Up to 120 hours',
      'Connectivity': '2.4GHz / USB-C',
      'Switches': 'Kailh GM (80M)',
      'Cable': 'USB-C',
      'Feet': 'PTFE',
      'Dimensions': '125 x 63 x 42mm',
    },
    comingSoon: true,
  },
  {
    id: 'v1',
    name: 'Iravis V1',
    shortName: 'V1',
    category: 'mouse',
    tier: 'entry',
    price: 59,
    image: '/images/1000010672.jpg',
    description: 'Entry-level excellence. The V1 brings premium features to aspiring competitive gamers. Do not let the price fool you—this mouse packs serious performance.',
    shortDescription: 'Entry-level gaming mouse with premium features.',
    features: [
      'Ambidextrous design',
      'Under 70g weight',
      'PixArt 3325 optical sensor',
      '1KHz polling rate',
      '100-hour battery life',
      'Huano mechanical switches',
      'Onboard memory profiles',
      'Budget-friendly performance',
    ],
    specs: {
      'Sensor': 'PixArt 3325',
      'DPI Range': '200 - 10,000',
      'Polling Rate': '1,000 Hz (1ms)',
      'Weight': '68g',
      'Battery Life': 'Up to 100 hours',
      'Connectivity': '2.4GHz / USB-C',
      'Switches': 'Huano (20M)',
      'Cable': 'Rubber USB-C',
      'Feet': 'PTFE',
      'Dimensions': '118 x 62 x 40mm',
    },
  },
  {
    id: 'pulse-x',
    name: 'Iravis Pulse X',
    shortName: 'Pulse X',
    category: 'headset',
    tier: 'high',
    price: 129,
    image: '/images/1000010675.png',
    description: 'Hear every detail. The Pulse X gaming headset delivers immersive 7.1 surround sound with crystal-clear communication. Carbon fiber construction ensures durability while maintaining lightweight comfort for marathon gaming sessions.',
    shortDescription: 'Premium gaming headset with 7.1 surround sound.',
    features: [
      '50mm custom-tuned drivers',
      '7.1 virtual surround sound',
      'Active noise cancellation',
      'Carbon fiber headband',
      'Memory foam ear cushions',
      'Detachable noise-canceling mic',
      '30-hour battery life',
      'Multi-platform compatibility',
    ],
    specs: {
      'Drivers': '50mm Neodymium',
      'Frequency Response': '20Hz - 40kHz',
      'Impedance': '32 Ohms',
      'Battery Life': 'Up to 30 hours',
      'Connectivity': '2.4GHz / Bluetooth 5.2 / 3.5mm',
      'Microphone': 'Detachable, noise-canceling',
      'Weight': '298g',
      'Surround': '7.1 Virtual',
      'ANC': 'Yes',
      'Compatibility': 'PC, PS5, Xbox, Switch',
    },
  },
  {
    id: 'k110',
    name: 'Iravis K110',
    shortName: 'K110',
    category: 'keyboard',
    tier: 'high',
    price: 169,
    image: '/images/1000010673.jpg',
    description: 'Type with precision. The K110 mechanical keyboard features a carbon fiber top plate, hot-swappable switches, and per-key RGB lighting. Built for gamers who demand the best typing and gaming experience.',
    shortDescription: 'Premium mechanical keyboard with carbon fiber construction.',
    features: [
      'Carbon fiber top plate',
      'Hot-swappable switches',
      'Per-key RGB lighting',
      '75% compact layout',
      'Wireless & wired modes',
      '200-hour battery life',
      'PBT double-shot keycaps',
      'Aluminum frame',
    ],
    specs: {
      'Layout': '75% (82 keys)',
      'Switches': 'Hot-swappable 3/5-pin',
      'Keycaps': 'PBT Double-shot',
      'Polling Rate': '1,000 Hz',
      'Battery Life': 'Up to 200 hours (RGB off)',
      'Connectivity': '2.4GHz / Bluetooth 5.2 / USB-C',
      'Lighting': 'Per-key RGB',
      'Frame': 'Carbon fiber + Aluminum',
      'Weight': '980g',
      'Dimensions': '320 x 140 x 35mm',
    },
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(p => p.category === category);
};

export const getMice = (): Product[] => {
  return products.filter(p => p.category === 'mouse');
};
