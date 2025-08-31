import { Product, ProductSeriesDetail } from '../types';

export const products: Product[] = [
  {
    id: 'galaxy-single',
    name: 'GALAXY Series - Horizontal Single',
    description: 'Standard ABS shell with metal frame featuring TV slot, security sliding door, and ergonomic non-slip ladder. Perfect for hotels, airports, and commercial applications.',
    price: '₹4,75,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/Galaxy Series/Galaxy Series Horizontal single:double bed.png',
      '/Pods_Images/Galaxy Series/GALAXY"series -Horizontal single:double bed details.png',
      '/Pods_Images/Galaxy Series/"GALAXY"series -Horizontal single:double bed more images4.png'
    ],
    features: [
      'Intelligent LED multifunction control panel with back-lit number plate',
      'Internal security lock with stainless-steel handle',
      'Reading light, mirror light & ceiling light',
      'Adjustable ventilation (two inlets/outlets)',
      'Ergonomic non-slip ladder with security sliding door',
      'TV slot integration ready',
      'Fire-retardant ABS shell (Taiwan Chi-Mei)',
      'High-quality metal frame construction',
      'Available in 8 colors including Green',
      'Model codes: TWS-801/802/803'
    ],
    specifications: {
      dimensions: '2060 × 1140 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'galaxy-double',
    name: 'GALAXY Series - Horizontal Double',
    description: 'Spacious double variant with all premium GALAXY features, designed for couples or guests requiring extra space in commercial facilities.',
    price: '₹4,99,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/Galaxy Series/"GALAXY"series -Horizontal single:double bed more images5.png',
      '/Pods_Images/Galaxy Series/"GALAXY"series -Horizontal single:double bed more images 6.png',
      '/Pods_Images/Galaxy Series/GALAXY"series -Horizontal single:double bed more pictures2.png'
    ],
    features: [
      'Intelligent LED multifunction control panel with back-lit number plate',
      'Internal security lock with stainless-steel handle',
      'Reading light, mirror light & ceiling light',
      'Adjustable ventilation (two inlets/outlets)',
      'Ergonomic non-slip ladder with security sliding door',
      'TV slot integration ready',
      'Fire-retardant ABS shell (Taiwan Chi-Mei)',
      'High-quality metal frame construction',
      'Extra-wide sleeping space for comfort',
      'Model codes: TWD-811/812/813'
    ],
    specifications: {
      dimensions: '2060 × 1580 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'cosmos-vertical',
    name: 'COSMOS Series - Vertical Single',
    description: 'Innovative vertical design with ABS + metal construction, featuring sliding door, ladder, TV slot, and mirror panel for space-efficient installations.',
    price: '₹4,99,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed main.png',
      '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed details.png',
      '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed more1.png'
    ],
    features: [
      'Vertical space-saving design',
      'Intelligent LED multifunction control panel',
      'Internal security lock with stainless-steel handle',
      'Mirror panel integration',
      'TV slot ready for entertainment systems',
      'Sliding door with ergonomic ladder',
      'Fire-retardant ABS shell construction',
      'Adjustable ventilation system',
      'Suitable for high-density installations',
      'Model codes: COS-V891/892/893'
    ],
    specifications: {
      dimensions: '2060 × 1140 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'wooden-single',
    name: 'Wooden Series - Horizontal Single',
    description: 'Premium eco multi-layer board construction with metal frame, offering natural wood-grain aesthetics while maintaining all essential capsule bed features.',
    price: '₹4,99,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/wooden series/"wooden"series -Horizontal single bed:Vertical single bed main.png',
      '/Pods_Images/wooden series/"wooden"series -Horizontal single bed:Vertical single bed details.png',
      '/Pods_Images/wooden series/"wooden"series -Horizontal single bed:Vertical single bed more1.png'
    ],
    features: [
      'Eco multi-layer board construction',
      'Natural wood-grain finish available',
      'Intelligent LED control system',
      'Internal security lock with stainless-steel handle',
      'Reading and ceiling lighting',
      'Ventilation with adjustable airflow',
      'Extended ladder design (480mm)',
      'Environmentally friendly materials',
      'Premium aesthetic appeal',
      'Model codes: WEH-809/810/811'
    ],
    specifications: {
      dimensions: '2150 × 1100 × 2400 mm (L × W × H)',
      materials: 'Eco multi-layer board + high-quality metal frame',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey, Wood-grain',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'esports-single',
    name: 'E-sports Series - Horizontal Single',
    description: 'Specialized gaming capsule with larger length specification and shorter ladder, featuring eco-board + ABS + metal construction for extended gaming sessions.',
    price: '₹4,99,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/E-sports series/"E-sports"series -Horizontal single bed main.png',
      '/Pods_Images/E-sports series/"E-sports"series -Horizontal single bed details.png',
      '/Pods_Images/E-sports series/"E-sports"series -Horizontal single bed more1.png'
    ],
    features: [
      'Extended length for gaming comfort',
      'Shorter ladder design (180mm)',
      'Eco-board + ABS + metal construction',
      'Optimized for gaming setups',
      'Enhanced ventilation for extended use',
      'Gaming-focused lighting system',
      'Ergonomic design for long sessions',
      'Cable management integration',
      'Sound dampening materials',
      'Model codes: WSN-901/902/903'
    ],
    specifications: {
      dimensions: '2150 × 1150 × 2400 mm (L × W × H)',
      materials: 'Eco-board + Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~80W (gaming optimized)',
      freshAirVentilation: '~35 m³/h enhanced airflow'
    }
  },
  {
    id: 'indian-premium-single',
    name: 'BIDUA Premium - Made in India Single',
    description: 'Locally manufactured premium capsule bed with indigenous materials and craftsmanship. Features advanced ventilation, LED controls, and security systems designed specifically for Indian market needs.',
    price: '₹3,00,000 per set (2 pods)',
    origin: 'made-in-india',
    images: [
      '/Pods_Images/Galaxy Series/Galaxy Series Horizontal single:double bed.png',
      '/Pods_Images/Galaxy Series/GALAXY"series -Horizontal single:double bed details.png',
      '/Pods_Images/Galaxy Series/"GALAXY"series -Horizontal single:double bed more images4.png'
    ],
    features: [
      'Made in India with local materials and craftsmanship',
      'Indigenous design optimized for Indian climate',
      'Advanced LED multifunction control panel',
      'Internal security lock with stainless-steel handle',
      'Reading light, mirror light & ceiling light',
      'Enhanced ventilation for tropical conditions',
      'Ergonomic ladder with anti-slip surface',
      'Fire-retardant materials meeting Indian standards',
      'Local service and support network',
      'Competitive pricing with no import duties'
    ],
    specifications: {
      dimensions: '2060 × 1140 × 2400 mm (L × W × H)',
      materials: 'Indian-grade fire-retardant ABS + high-quality steel',
      colors: 'White, Blue, Green, Orange, Custom colors available',
      ratedVoltage: '220V (Indian standard)',
      lightingPower: '12V low-voltage LED system',
      typicalConsumption: '~55W (energy optimized)',
      freshAirVentilation: '~32 m³/h with humidity control'
    }
  },
  {
    id: 'abs-flagship-2025-single-horizontal-zzk-hc02',
    name: 'ABS Flagship Series - Single Horizontal (ZZK-HC02)',
    description: 'Perfect for capsule hotels, hostels, and compact accommodations where space optimization is essential. Features universal adjustable air vent, integrated fresh air circulation system, and smart LED control panel.',
    price: '₹4,99,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/ABS Flagship Series/Pod real view.jpeg',
      '/Pods_Images/ABS Flagship Series/inner view.png',
      '/Pods_Images/ABS Flagship Series/outer view .png'
    ],
    features: [
      'Universal adjustable air vent for optimal comfort',
      'Integrated fresh air circulation system',
      'Smart LED control panel with multiple functions',
      'High-quality ABS construction with metal reinforcement',
      'Space-optimized design for maximum efficiency',
      'Advanced ventilation technology',
      'Ergonomic interior layout',
      'Energy-efficient LED lighting system',
      'Secure locking mechanism',
      'Model codes: ZZK-HC02-Intelligence/Update/Standard/Basic'
    ],
    specifications: {
      dimensions: '2060 × 1140 × 2400 mm (L × W × H)',
      materials: 'Premium ABS + high-quality metal frame',
      colors: 'White',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage LED system',
      typicalConsumption: '~65W (optimized)',
      freshAirVentilation: '~35 m³/h with adjustable flow'
    }
  },
  {
    id: 'abs-flagship-2025-double-horizontal-zzk-sr02',
    name: 'ABS Flagship Series - Double Horizontal (ZZK-SR02)',
    description: 'Suitable for shared stays in dormitories, budget hotels, and group living setups. Same features as single capsule but with wider internal space for two occupants and strong fresh air system.',
    price: '₹4,99,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/ABS Flagship Series/Pod real view.jpeg',
      '/Pods_Images/ABS Flagship Series/showcase.png',
      '/Pods_Images/ABS Flagship Series/Pod inner view.jpeg'
    ],
    features: [
      'Extra-wide design for two occupants',
      'Enhanced fresh air circulation system',
      'Dual-zone climate control capability',
      'Smart LED control panel with multiple functions',
      'High-quality ABS construction with metal reinforcement',
      'Optimized for shared accommodation',
      'Advanced ventilation technology',
      'Spacious interior layout',
      'Energy-efficient LED lighting system',
      'Model codes: ZZK-SR02-Intelligence/Update/Standard/Basic'
    ],
    specifications: {
      dimensions: '2060 × 1580 × 2400 mm (L × W × H)',
      materials: 'Premium ABS + high-quality metal frame',
      colors: 'White',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage LED system',
      typicalConsumption: '~85W (dual occupancy optimized)',
      freshAirVentilation: '~45 m³/h with enhanced flow'
    }
  },
  {
    id: 'abs-flagship-2025-single-vertical-zzk-sc02',
    name: 'ABS Flagship Series - Single Vertical (ZZK-SC02)',
    description: 'Designed to optimize vertical space usage, ideal for facilities with limited floor area. Perfect for medical hostels, training dormitories, and staff accommodations where vertical stacking increases capacity.',
    price: '₹4,75,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/ABS Flagship Series/ABS Single Vertical.png',
      '/Pods_Images/ABS Flagship Series/inner view.png',
      '/Pods_Images/ABS Flagship Series/outer view .png'
    ],
    features: [
      'Vertical space-saving design',
      'Optimized for high-density installations',
      'Universal adjustable air vent system',
      'Smart LED control panel',
      'High-quality ABS construction with metal reinforcement',
      'Stackable design for maximum capacity',
      'Advanced ventilation technology',
      'Ergonomic vertical access',
      'Energy-efficient LED lighting system',
      'Model codes: ZZK-SC02-Intelligence/Update/Standard/Basic'
    ],
    specifications: {
      dimensions: '2060 × 1140 × 2400 mm (L × W × H)',
      materials: 'Premium ABS + high-quality metal frame',
      colors: 'White',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage LED system',
      typicalConsumption: '~65W (optimized)',
      freshAirVentilation: '~35 m³/h with adjustable flow'
    }
  },
  {
    id: 'platinum-frp-fully-loaded',
    name: 'Platinum FRP Series - Fully Loaded Pod',
    description: 'Premium 100% Made in India FRP capsule sleeping pod with complete smart features, digital safe, fire safety systems, and luxury amenities. Perfect for high-end hospitality and premium accommodations.',
    price: '₹3,00,000 per set (2 pods)',
    origin: 'made-in-india',
    images: [
      '/Pods_Images/Made in India T1/Main.jpg',
      '/Pods_Images/Made in India T1/Internal view.jpeg',
      '/Pods_Images/Made in India T1/outer view.jpeg',
      '/Pods_Images/Made in India T1/PHOTO-2024-07-18-23-28-44.jpg'
    ],
    features: [
      'Smart Panel with USB & universal charging point',
      'Premium wiring (ISI-standard RR Kabel FRLS)',
      'Cosmetic mirror with touch LED function (Saint Gobain & ModiGuard)',
      'Reading & ceiling LED lights (ISI standard, 1-year warranty)',
      'Digital safe locker for security',
      'Fire extinguisher (as per Indian standards)',
      'Smoke alarm detector (Indian-made)',
      'Stainless steel ladder & handle',
      'Hanging hooks (SS material)',
      'Optional: Smart TV & Wireless Headphones (Indian assembled brand)',
      'High-quality fiberglass with mild steel structure',
      'Adjustable 4-inch AC duct for fresh airflow',
      '4-inch comfort mattress with pillow (customizable, premium quality)',
      'FRP sliding door with smooth operation',
      'Customizable color as per RAL Code'
    ],
    specifications: {
      dimensions: 'External: 2150 × 1270 × 1270 mm | Internal: 2000 × 1000 × 1000 mm',
      materials: 'High-quality fiberglass (FRP) with mild steel structure',
      colors: 'Customizable as per RAL Code',
      ratedVoltage: '220V (Indian standard)',
      lightingPower: 'ISI standard LED system with 1-year warranty',
      typicalConsumption: '~70W (energy optimized for Indian conditions)',
      freshAirVentilation: 'Adjustable 4-inch AC duct system'
    }
  },
  {
    id: 'platinum-frp-mid-tier',
    name: 'Platinum FRP Series - Mid-tier Pod',
    description: '100% Made in India FRP capsule with essential features including structure, mattress, electrical switches, USB charging, mirror, and LED lights. Ideal for budget-conscious premium installations.',
    price: '₹2,50,000 per set (2 pods)',
    origin: 'made-in-india',
    images: [
      '/Pods_Images/Made in India T1/PHOTO-2024-07-18-23-28-45.jpg',
      '/Pods_Images/Made in India T1/PHOTO-2024-07-18-23-28-46.jpg',
      '/Pods_Images/Made in India T1/Internal view.jpeg',
      '/Pods_Images/Made in India T1/outer view.jpeg'
    ],
    features: [
      'FRP structure with MS frame',
      '4-inch comfort mattress with pillow',
      'Electrical switches and USB charging points',
      'Cosmetic mirror with basic lighting',
      'Reading & ceiling LED lights',
      'Stainless steel ladder & handle',
      'FRP sliding door',
      'Adjustable ventilation system',
      'High-quality fiberglass construction',
      'Lightweight yet durable design',
      'Customizable color options',
      'Made in India quality assurance',
      'Cost-effective premium solution',
      'Easy maintenance and cleaning',
      'Suitable for commercial applications'
    ],
    specifications: {
      dimensions: 'External: 2150 × 1270 × 1270 mm | Internal: 2000 × 1000 × 1000 mm',
      materials: 'High-quality fiberglass (FRP) with mild steel structure',
      colors: 'Customizable as per RAL Code',
      ratedVoltage: '220V (Indian standard)',
      lightingPower: 'Basic LED lighting system',
      typicalConsumption: '~50W (energy efficient)',
      freshAirVentilation: 'Adjustable 4-inch AC duct system'
    }
  },
  {
    id: 'platinum-frp-basic',
    name: 'Platinum FRP Series - Basic Pod',
    description: '100% Made in India FRP capsule structure with MS frame and sliding door. Basic configuration for custom fitouts and budget installations. Bedding and electronics not included.',
    price: '₹2,00,000 per set (2 pods)',
    origin: 'made-in-india',
    images: [
      '/Pods_Images/Made in India T1/PHOTO-2024-07-18-23-29-22.jpg',
      '/Pods_Images/Made in India T1/PHOTO-2024-07-18-23-29-23.jpg',
      '/Pods_Images/Made in India T1/Main.jpg',
      '/Pods_Images/Made in India T1/outer view.jpeg'
    ],
    features: [
      'FRP capsule structure with MS frame',
      'FRP sliding door with smooth operation',
      'High-quality fiberglass construction',
      'Mild steel structural framework',
      'Lightweight yet robust design',
      'Customizable color as per RAL Code',
      'Made in India manufacturing',
      'Cost-effective base solution',
      'Ready for custom electronics fitout',
      'Easy installation and setup',
      'Durable fiberglass finish',
      'Corrosion-resistant materials',
      'Suitable for DIY customization',
      'Commercial-grade construction',
      'Flexible configuration options'
    ],
    specifications: {
      dimensions: 'External: 2150 × 1270 × 1270 mm | Internal: 2000 × 1000 × 1000 mm',
      materials: 'High-quality fiberglass (FRP) with mild steel structure',
      colors: 'Customizable as per RAL Code',
      ratedVoltage: 'Not included (customer fitout)',
      lightingPower: 'Not included (customer fitout)',
      typicalConsumption: 'Depends on customer electronics',
      freshAirVentilation: 'Structure ready for ventilation system'
    }
  }
  {
    id: 'galaxy-big-bed',
    name: 'GALAXY Series - Horizontal Double Big Bed',
    description: 'Extra-wide big bed variant with all premium GALAXY features, designed for maximum comfort in commercial facilities with spacious sleeping area.',
    price: '₹5,24,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/Galaxy Series/Galaxy Series Horizontal single:double bed.png',
      '/Pods_Images/Galaxy Series/GALAXY"series -Horizontal single:double bed details.png',
      '/Pods_Images/Galaxy Series/"GALAXY"series -Horizontal single:double bed more images4.png'
    ],
    features: [
      'Intelligent LED multifunction control panel with back-lit number plate',
      'Internal security lock with stainless-steel handle',
      'Reading light, mirror light & ceiling light',
      'Adjustable ventilation (two inlets/outlets)',
      'Ergonomic non-slip ladder with security sliding door',
      'TV slot integration ready',
      'Fire-retardant ABS shell (Taiwan Chi-Mei)',
      'High-quality metal frame construction',
      'Extra-wide big bed sleeping space',
      'Model codes: TWD-821/822/823'
    ],
    specifications: {
      dimensions: '2060 × 1950 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'space-single',
    name: 'SPACE Series - Horizontal Single',
    description: 'Standard SPACE series with mirror panel, sliding door, TV slot, and intelligent LED controls. Perfect for hotels and commercial applications.',
    price: '₹4,75,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed.png',
      '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed details.png',
      '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed more images.png'
    ],
    features: [
      'Capsule number LED with back-lit display',
      'Internal security lock with stainless-steel handle',
      'Mirror panel integration',
      'TV slot ready for entertainment systems',
      'Smart sliding door with smooth operation',
      'Adjustable ventilation system',
      'Fire-retardant ABS shell construction',
      'Ergonomic ladder design',
      'Reading and ceiling lighting',
      'Model codes: SPAS-801/802/803'
    ],
    specifications: {
      dimensions: '2060 × 1140 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'space-double',
    name: 'SPACE Series - Horizontal Double',
    description: 'Spacious double variant of SPACE series with mirror panel, TV slot, and all premium features for couples or guests requiring extra space.',
    price: '₹4,95,000 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed more images2.png',
      '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed more images3.png',
      '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed more images4.png'
    ],
    features: [
      'Capsule number LED with back-lit display',
      'Internal security lock with stainless-steel handle',
      'Mirror panel integration',
      'TV slot ready for entertainment systems',
      'Smart sliding door with smooth operation',
      'Adjustable ventilation system',
      'Fire-retardant ABS shell construction',
      'Extra-wide sleeping space for comfort',
      'Reading and ceiling lighting',
      'Model codes: SPAD-811/812/813'
    ],
    specifications: {
      dimensions: '2060 × 1580 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'space-big-bed',
    name: 'SPACE Series - Horizontal Big Bed',
    description: 'Extra-wide big bed variant of SPACE series with mirror panel, TV slot, and maximum sleeping comfort for premium commercial applications.',
    price: '₹5,24,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed more images4.png',
      '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed more images5.png',
      '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed details.png'
    ],
    features: [
      'Capsule number LED with back-lit display',
      'Internal security lock with stainless-steel handle',
      'Mirror panel integration',
      'TV slot ready for entertainment systems',
      'Smart sliding door with smooth operation',
      'Adjustable ventilation system',
      'Fire-retardant ABS shell construction',
      'Extra-wide big bed sleeping space',
      'Reading and ceiling lighting',
      'Model codes: SPAD-821/822/823'
    ],
    specifications: {
      dimensions: '2060 × 1950 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'explore-single',
    name: 'EXPLORE THE WORLD Series - Horizontal Single',
    description: 'Innovative "explore window" design with LED multifunction panel, stainless handle, and premium features for modern hospitality applications.',
    price: '₹4,75,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/EXPLORETHE WORLD series/"EXPLORETHE WORLD"series -Horizontal single:double bed main.png',
      '/Pods_Images/EXPLORETHE WORLD series/"EXPLORETHE WORLD"series -Horizontal single:double bed details.png',
      '/Pods_Images/EXPLORETHE WORLD series/"EXPLORETHE WORLD"series -Horizontal single:double bed more1.png'
    ],
    features: [
      'Capsule number LED with back-lit display',
      'Internal security lock with stainless-steel handle',
      'Explore window design feature',
      'TV slot ready for entertainment systems',
      'Smart sliding door with smooth operation',
      'Adjustable ventilation system',
      'Fire-retardant ABS shell construction',
      'Ergonomic ladder design',
      'Reading and ceiling lighting',
      'Model codes: EXWS-601/602/603'
    ],
    specifications: {
      dimensions: '2060 × 1140 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'explore-double',
    name: 'EXPLORE THE WORLD Series - Horizontal Double',
    description: 'Spacious double variant with "explore window" design, LED multifunction panel, and premium features for couples or guests requiring extra space.',
    price: '₹4,99,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/EXPLORETHE WORLD series/"EXPLORETHE WORLD"series -Horizontal single:double bed more2.png',
      '/Pods_Images/EXPLORETHE WORLD series/"EXPLORETHE WORLD"series -Horizontal single:double bed more3.png',
      '/Pods_Images/EXPLORETHE WORLD series/"EXPLORETHE WORLD"series -Horizontal single:double bed more4.png'
    ],
    features: [
      'Capsule number LED with back-lit display',
      'Internal security lock with stainless-steel handle',
      'Explore window design feature',
      'TV slot ready for entertainment systems',
      'Smart sliding door with smooth operation',
      'Adjustable ventilation system',
      'Fire-retardant ABS shell construction',
      'Extra-wide sleeping space for comfort',
      'Reading and ceiling lighting',
      'Model codes: EXWD-611/612/613'
    ],
    specifications: {
      dimensions: '2060 × 1580 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'explore-big-bed',
    name: 'EXPLORE THE WORLD Series - Horizontal Big Bed',
    description: 'Extra-wide big bed variant with "explore window" design and maximum sleeping comfort for premium commercial applications.',
    price: '₹5,24,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/EXPLORETHE WORLD series/"EXPLORETHE WORLD"series -Horizontal single:double bed more3.png',
      '/Pods_Images/EXPLORETHE WORLD series/"EXPLORETHE WORLD"series -Horizontal single:double bed more4.png',
      '/Pods_Images/EXPLORETHE WORLD series/"EXPLORETHE WORLD"series -Horizontal single:double bed details.png'
    ],
    features: [
      'Capsule number LED with back-lit display',
      'Internal security lock with stainless-steel handle',
      'Explore window design feature',
      'TV slot ready for entertainment systems',
      'Smart sliding door with smooth operation',
      'Adjustable ventilation system',
      'Fire-retardant ABS shell construction',
      'Extra-wide big bed sleeping space',
      'Reading and ceiling lighting',
      'Model codes: EXWD-621/622/623'
    ],
    specifications: {
      dimensions: '2060 × 1950 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'cosmos-horizontal-single',
    name: 'COSMOS Series - Horizontal Single',
    description: 'Horizontal single variant with ABS + metal construction, featuring sliding door, ladder, TV slot, and mirror panel for standard installations.',
    price: '₹4,75,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed main.png',
      '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed details.png',
      '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed more2.png'
    ],
    features: [
      'Horizontal space-efficient design',
      'Intelligent LED multifunction control panel',
      'Internal security lock with stainless-steel handle',
      'Mirror panel integration',
      'TV slot ready for entertainment systems',
      'Sliding door with ergonomic ladder',
      'Fire-retardant ABS shell construction',
      'Adjustable ventilation system',
      'Suitable for standard installations',
      'Model codes: COS-H891/892/893'
    ],
    specifications: {
      dimensions: '2060 × 1140 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'cosmos-horizontal-double',
    name: 'COSMOS Series - Horizontal Double',
    description: 'Spacious double variant with ABS + metal construction, featuring sliding door, ladder, TV slot, and mirror panel for couples or extra space requirements.',
    price: '₹4,99,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed more3.png',
      '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed more4.png',
      '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed details.png'
    ],
    features: [
      'Horizontal double space design',
      'Intelligent LED multifunction control panel',
      'Internal security lock with stainless-steel handle',
      'Mirror panel integration',
      'TV slot ready for entertainment systems',
      'Sliding door with ergonomic ladder',
      'Fire-retardant ABS shell construction',
      'Extra-wide sleeping space for comfort',
      'Adjustable ventilation system',
      'Model codes: COD-H991/992/993'
    ],
    specifications: {
      dimensions: '2060 × 1580 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'future-horizontal-single',
    name: 'BACK TO FUTURE 2047 Series - Horizontal Single',
    description: 'Futuristic design with sliding door, rolling-door style option, backrest feature, and advanced controls for next-generation hospitality.',
    price: '₹4,75,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/BACK TO FUTURE 2047 series/"BACK TO FUTURE 2047"series -Horizontal:Verticalsingle bed main.png',
      '/Pods_Images/BACK TO FUTURE 2047 series/"BACK TO FUTURE 2047"series -Horizontal:Verticalsingle bed details.png',
      '/Pods_Images/BACK TO FUTURE 2047 series/"BACK TO FUTURE 2047"series -Horizontal:Verticalsingle bed more1.png'
    ],
    features: [
      'Futuristic capsule design',
      'Capsule number LED with advanced display',
      'Internal security lock with stainless-steel handle',
      'Backrest feature for comfort',
      'Rolling door curtain option',
      'TV slot ready for entertainment systems',
      'Smart sliding door system',
      'Fire-retardant ABS shell construction',
      'Advanced ventilation controls',
      'Model codes: TWS-118H/128H'
    ],
    specifications: {
      dimensions: '2060 × 1140 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'future-horizontal-double',
    name: 'BACK TO FUTURE 2047 Series - Horizontal Double',
    description: 'Spacious double variant with futuristic design, sliding door, rolling-door style option, and backrest feature for premium comfort.',
    price: '₹4,99,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/BACK TO FUTURE 2047 series/"BACK TO FUTURE 2047"series -Horizontal:Verticalsingle bed more2.png',
      '/Pods_Images/BACK TO FUTURE 2047 series/"BACK TO FUTURE 2047"series -Horizontal:Verticalsingle bed more3.png',
      '/Pods_Images/BACK TO FUTURE 2047 series/"BACK TO FUTURE 2047"series -Horizontal:Verticalsingle bed more4.png'
    ],
    features: [
      'Futuristic capsule design',
      'Capsule number LED with advanced display',
      'Internal security lock with stainless-steel handle',
      'Backrest feature for comfort',
      'Rolling door curtain option',
      'TV slot ready for entertainment systems',
      'Smart sliding door system',
      'Fire-retardant ABS shell construction',
      'Extra-wide sleeping space for comfort',
      'Model codes: TWD-118H/128H'
    ],
    specifications: {
      dimensions: '2060 × 1580 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'future-vertical-single',
    name: 'BACK TO FUTURE 2047 Series - Vertical Single',
    description: 'Vertical space-saving variant with futuristic design, sliding door, rolling-door style option, and backrest feature for high-density installations.',
    price: '₹4,75,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/BACK TO FUTURE 2047 series/"BACK TO FUTURE 2047"series -Horizontal:Verticalsingle bed more1.png',
      '/Pods_Images/BACK TO FUTURE 2047 series/"BACK TO FUTURE 2047"series -Horizontal:Verticalsingle bed more2.png',
      '/Pods_Images/BACK TO FUTURE 2047 series/"BACK TO FUTURE 2047"series -Horizontal:Verticalsingle bed details.png'
    ],
    features: [
      'Vertical space-saving design',
      'Capsule number LED with advanced display',
      'Internal security lock with stainless-steel handle',
      'Backrest feature for comfort',
      'Rolling door curtain option',
      'TV slot ready for entertainment systems',
      'Smart sliding door system',
      'Fire-retardant ABS shell construction',
      'Optimized for high-density installations',
      'Model codes: TWS-118V/128V/138V'
    ],
    specifications: {
      dimensions: '2060 × 1140 × 2400 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'wooden-vertical-single',
    name: 'Wooden Series - Vertical Single',
    description: 'Premium eco multi-layer board construction with metal frame in vertical configuration, offering natural wood-grain aesthetics with space-saving design.',
    price: '₹4,75,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/wooden series/"wooden"series -Horizontal single bed:Vertical single bed more2.png',
      '/Pods_Images/wooden series/"wooden"series -Horizontal single bed:Vertical single bed more3.png',
      '/Pods_Images/wooden series/"wooden"series -Horizontal single bed:Vertical single bed more4.png'
    ],
    features: [
      'Vertical space-saving design',
      'Eco multi-layer board construction',
      'Natural wood-grain finish available',
      'Intelligent LED control system',
      'Internal security lock with stainless-steel handle',
      'Reading and ceiling lighting',
      'Ventilation with adjustable airflow',
      'Extended ladder design (480mm)',
      'Environmentally friendly materials',
      'Model codes: WEH-809V/810V/811V'
    ],
    specifications: {
      dimensions: '2150 × 1100 × 2400 mm (L × W × H)',
      materials: 'Eco multi-layer board + high-quality metal frame',
      colors: 'White, Pink, Yellow, Black, Blue, Green, Orange, Grey, Wood-grain',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~60W (no TV) / ~110W (with TV)',
      freshAirVentilation: '~30 m³/h with adjustable airflow'
    }
  },
  {
    id: 'lounge-small',
    name: 'Online Red Studio / Small Room Lounge - Small',
    description: 'Compact enclosed lounge/booth module with intelligent door lock, perfect for internet bars, livestream studios, and small private spaces.',
    price: '₹2,99,000 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/Online Red Studio : Small Room Lounge/Online Red Studio : Small Room Lounge main.png',
      '/Pods_Images/Online Red Studio : Small Room Lounge/Online Red Studio : Small Room Lounge details.png',
      '/Pods_Images/Online Red Studio : Small Room Lounge/Online Red Studio : Small Room Lounge more1.png'
    ],
    features: [
      'Compact enclosed design',
      'Intelligent door lock system',
      'Door blue light indicator',
      'Advanced control panel',
      'Decorative blue lighting',
      'Fire-retardant ABS construction',
      'Perfect for studios and internet bars',
      'Space-efficient footprint',
      'Professional appearance',
      'Model codes: CS-101/102'
    ],
    specifications: {
      dimensions: '1580 × 2150 × 2450 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'Silvery grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~70W (studio optimized)',
      freshAirVentilation: 'Integrated ventilation system'
    }
  },
  {
    id: 'lounge-large',
    name: 'Online Red Studio / Small Room Lounge - Large',
    description: 'Spacious enclosed lounge/booth module with intelligent door lock, ideal for larger studios, private offices, and premium lounge applications.',
    price: '₹3,24,999 per set (2 pods)',
    origin: 'imported',
    images: [
      '/Pods_Images/Online Red Studio : Small Room Lounge/Online Red Studio : Small Room Lounge more2.png',
      '/Pods_Images/Online Red Studio : Small Room Lounge/Online Red Studio : Small Room Lounge more3.png',
      '/Pods_Images/Online Red Studio : Small Room Lounge/Online Red Studio : Small Room Lounge more4.png'
    ],
    features: [
      'Spacious enclosed design',
      'Intelligent door lock system',
      'Door blue light indicator',
      'Advanced control panel',
      'Decorative blue lighting',
      'Fire-retardant ABS construction',
      'Perfect for larger studios and offices',
      'Enhanced space utilization',
      'Professional premium appearance',
      'Model codes: CS-201/202'
    ],
    specifications: {
      dimensions: '2180 × 2150 × 2450 mm (L × W × H)',
      materials: 'Taiwan Chi-Mei V0 Fire-retardant ABS + high-quality metal',
      colors: 'Silvery grey',
      ratedVoltage: '110–240V (universal)',
      lightingPower: '12V low-voltage system',
      typicalConsumption: '~85W (large studio optimized)',
      freshAirVentilation: 'Enhanced ventilation system'
    }
  }
];

// Helper function to get series price display
export const getSeriesPriceDisplay = (seriesId: string): string => {
  // Find all products that belong to this series
  const seriesProducts = products.filter(product => 
    product.id.toLowerCase().includes(seriesId.toLowerCase()) || 
    (seriesId === 'platinum-frp' && product.id.includes('platinum-frp'))
  );
  
  if (seriesProducts.length === 0) return 'Contact for Quote';
  
  // Extract prices from all products in this series
  const prices = seriesProducts.map(product => {
    const priceMatch = product.price.match(/₹([\d,]+)/);
    return priceMatch ? parseInt(priceMatch[1].replace(/,/g, '')) : 0;
  }).filter(price => price > 0);
  
  if (prices.length === 0) return 'Contact for Quote';
  
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  
  // If all products have the same price, show that price
  if (minPrice === maxPrice) {
    return `₹${new Intl.NumberFormat('en-IN').format(minPrice)} per set (2 pods)`;
  }
  
  // If there are different prices, show the range
  return `Starting from ₹${new Intl.NumberFormat('en-IN').format(minPrice)} per set (2 pods)`;
};

export const productSeries: ProductSeriesDetail[] = [
  {
    id: 'galaxy',
    name: 'GALAXY Series',
    description: 'Horizontal Single & Double; standard ABS shell + metal frame; TV slot, security sliding door, ergonomic non-slip ladder.',
    images: [
      '/Pods_Images/Galaxy Series/Galaxy Series Horizontal single:double bed.png',
      '/Pods_Images/Galaxy Series/GALAXY"series -Horizontal single:double bed details.png',
      '/Pods_Images/Galaxy Series/"GALAXY"series -Horizontal single:double bed more images4.png',
      '/Pods_Images/Galaxy Series/"GALAXY"series -Horizontal single:double bed more images5.png'
    ],
    models: ['TWS-801/802/803', 'TWD-811/812/813', 'TWD-821/822/823'],
    colors: ['White', 'Pink', 'Yellow', 'Black', 'Blue', 'Green', 'Orange', 'Grey'],
    sizes: [
      { variant: 'Single', dimensions: 'L2060 × W1140 × H2400 mm' },
      { variant: 'Double', dimensions: 'L2060 × W1580 × H2400 mm' },
      { variant: 'Big Bed', dimensions: 'L2060 × W1950 × H2400 mm (ladder 300 mm)' }
    ],
    material: 'Taiwan Chi Mei V0 Fire-retardant ABS + high-quality metal',
    features: [
      'Intelligent LED multifunction',
      'Stainless steel handle',
      'TV slot',
      'Smart sliding door',
      'Ergonomic non-slip ladder'
    ],
    applications: [
      'Hotels', 'Airports', 'Dormitories', 'Sauna clubs', 'Youth hostels', 
      'Family apartments', 'Schools', 'Hospitals', 'Companies', 'Capsule hotels'
    ],
    availableMaterials: ['ABS V0 Fire-retardant'],
    origin: 'imported'
  },
  {
    id: 'space', 
    name: 'SPACE Series',
    description: 'Horizontal Single & Double; similar hardware + mirror panel, sliding door, TV slot.',
    images: [
      '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed.png',
      '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed details.png',
      '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed more images.png',
      '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed more images2.png'
    ],
    models: ['SPAS-801/802/803', 'SPAD-811/812/813', 'SPAD-821/822/823'],
    colors: ['White', 'Pink', 'Yellow', 'Black', 'Blue', 'Green', 'Orange', 'Grey'],
    sizes: [
      { variant: 'Single', dimensions: 'L2060 × W1140 × H2400 mm' },
      { variant: 'Double', dimensions: 'L2060 × W1580 × H2400 mm' },
      { variant: 'Big Bed', dimensions: 'L2060 × W1950 × H2400 mm (ladder 300 mm)' }
    ],
    material: 'Taiwan Chi Mei V0 Fire-retardant ABS + high-quality metal',
    features: [
      'Capsule number LED',
      'Stainless steel handle',
      'Toilet glass',
      'TV slot',
      'Smart sliding door'
    ],
    applications: [
      'Hotels', 'Airports', 'Dormitories', 'Youth hostels', 
      'Schools', 'Hospitals', 'Companies', 'Capsule hotels'
    ],
    availableMaterials: ['ABS V0 Fire-retardant'],
    origin: 'imported'
  },
  {
    id: 'explore',
    name: 'EXPLORE THE WORLD Series',
    description: 'Horizontal Single & Double; "explore window" design, LED multifunction panel, stainless handle.',
    images: [
      '/Pods_Images/EXPLORETHE WORLD series/"EXPLORETHE WORLD"series -Horizontal single:double bed main.png',
      '/Pods_Images/EXPLORETHE WORLD series/"EXPLORETHE WORLD"series -Horizontal single:double bed details.png',
      '/Pods_Images/EXPLORETHE WORLD series/"EXPLORETHE WORLD"series -Horizontal single:double bed more1.png',
      '/Pods_Images/EXPLORETHE WORLD series/"EXPLORETHE WORLD"series -Horizontal single:double bed more2.png'
    ],
    models: ['EXWS-601/602/603', 'EXWD-611/612/613', 'EXWD-621/622/623'],
    colors: ['White', 'Pink', 'Yellow', 'Black', 'Blue', 'Green', 'Orange', 'Grey'],
    sizes: [
      { variant: 'Single', dimensions: 'L2060 × W1140 × H2400 mm' },
      { variant: 'Double', dimensions: 'L2060 × W1580 × H2400 mm' },
      { variant: 'Big Bed', dimensions: 'L2060 × W1950 × H2400 mm (ladder 300 mm)' }
    ],
    material: 'Taiwan Chi Mei V0 Fire-retardant ABS + high-quality metal',
    features: [
      'Capsule number LED',
      'Stainless steel handle',
      'Explore window',
      'TV slot',
      'Smart sliding door'
    ],
    applications: [
      'Hotels', 'Airports', 'Dormitories', 'Sauna clubs', 
      'Schools', 'Hospitals', 'Capsule hotels'
    ],
    availableMaterials: ['ABS V0 Fire-retardant'],
    origin: 'imported'
  },
  {
    id: 'cosmos',
    name: 'COSMOS Series',
    description: 'Horizontal Single & Double, plus Vertical Single variant; ABS + metal; sliding door, ladder, TV slot, mirror.',
    images: [
      '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed main.png',
      '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed details.png',
      '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed more1.png',
      '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed more2.png'
    ],
    models: ['COS-H891/892/893', 'COS-V891/892/893', 'COD-H991/992/993'],
    colors: ['White', 'Pink', 'Yellow', 'Black', 'Blue', 'Green', 'Orange', 'Grey'],
    sizes: [
      { variant: 'Single (Horizontal)', dimensions: 'L2060 × W1140 × H2400 mm' },
      { variant: 'Double', dimensions: 'L2060 × W1580 × H2400 mm' },
      { variant: 'Ladder', dimensions: '300 mm' }
    ],
    material: 'Taiwan Chi Mei V0 Fire-retardant ABS + high-quality metal',
    features: [
      'Capsule number LED',
      'Stainless steel handle',
      'Toilet glass',
      'TV slot',
      'Smart sliding door'
    ],
    applications: [
      'Hotels', 'Airports', 'Dormitories', 'Youth hostels', 'Family apartments',
      'Schools', 'Hospitals', 'Capsule hotels'
    ],
    availableMaterials: ['ABS V0 Fire-retardant'],
    origin: 'imported'
  },
  {
    id: 'future',
    name: 'BACK TO FUTURE 2047 Series',
    description: 'Horizontal Single & Vertical Single; sliding door (including rolling-door style), backrest option.',
    images: [
      '/Pods_Images/BACK TO FUTURE 2047 series/"BACK TO FUTURE 2047"series -Horizontal:Verticalsingle bed main.png',
      '/Pods_Images/BACK TO FUTURE 2047 series/"BACK TO FUTURE 2047"series -Horizontal:Verticalsingle bed details.png',
      '/Pods_Images/BACK TO FUTURE 2047 series/"BACK TO FUTURE 2047"series -Horizontal:Verticalsingle bed more1.png',
      '/Pods_Images/BACK TO FUTURE 2047 series/"BACK TO FUTURE 2047"series -Horizontal:Verticalsingle bed more2.png'
    ],
    models: ['TWS-118H/128H', 'TWS-118V/128V/138V'],
    colors: ['White', 'Pink', 'Yellow', 'Black', 'Blue', 'Green', 'Orange', 'Grey'],
    sizes: [
      { variant: 'Horizontal Single', dimensions: 'L2060 × W1140 × H2400 mm' },
      { variant: 'Vertical Single', dimensions: 'L2060 × W1140 × H2400 mm' },
      { variant: 'Ladder', dimensions: '300 mm' }
    ],
    material: 'Taiwan Chi Mei V0 Fire-retardant ABS + high-quality metal',
    features: [
      'Capsule number LED',
      'Stainless steel handle',
      'Backrest',
      'Rolling door curtain',
      'TV slot',
      'Smart sliding door'
    ],
    applications: [
      'Hotels', 'Airports', 'Dormitories', 'Schools', 'Hospitals', 'Capsule hotels'
    ],
    availableMaterials: ['ABS V0 Fire-retardant'],
    origin: 'imported'
  },
  {
    id: 'esports',
    name: 'E-sports Series',
    description: 'Horizontal Single; larger length spec and shorter ladder; eco-board + ABS + metal.',
    images: [
      '/Pods_Images/E-sports series/"E-sports"series -Horizontal single bed main.png',
      '/Pods_Images/E-sports series/"E-sports"series -Horizontal single bed details.png',
      '/Pods_Images/E-sports series/"E-sports"series -Horizontal single bed more1.png',
      '/Pods_Images/E-sports series/"E-sports"series -Horizontal single bed more2.png'
    ],
    models: ['WSN-901/902/903'],
    colors: ['White', 'Grey'],
    sizes: [
      { variant: 'Horizontal Single', dimensions: 'L2150 × W1150 × H2400 mm (ladder 180 mm)' }
    ],
    material: 'Environmental protection board + Taiwan Chi Mei V0 Fire-retardant ABS + high-quality metal',
    features: [
      'Stainless steel handle',
      'Door blue light',
      'Control panel',
      'Toilet glass',
      'Non-slip ladder'
    ],
    applications: [
      'Hotels', 'Airports', 'Dormitories', 'Youth hostels', 'Family apartments',
      'Schools', 'Hospitals', 'Capsule hotels'
    ],
    availableMaterials: ['ABS V0 Fire-retardant', 'Wood (eco multi-layer board)'],
    origin: 'imported'
  },
  {
    id: 'wooden',
    name: 'Wooden Series',
    description: 'Horizontal Single & Vertical Single; eco multi-layer board + metal; wood-grain colorway available.',
    images: [
      '/Pods_Images/wooden series/"wooden"series -Horizontal single bed:Vertical single bed main.png',
      '/Pods_Images/wooden series/"wooden"series -Horizontal single bed:Vertical single bed details.png',
      '/Pods_Images/wooden series/"wooden"series -Horizontal single bed:Vertical single bed more1.png',
      '/Pods_Images/wooden series/"wooden"series -Horizontal single bed:Vertical single bed more2.png'
    ],
    models: ['WEH-809/810/811', 'WEH-809V/810V/811V'],
    colors: ['Wood color', 'White', 'Black', 'Grey'],
    sizes: [
      { variant: 'Horizontal/Vertical Single', dimensions: 'L2150 × W1100 × H2400 mm (ladder 480 mm)' }
    ],
    material: 'Multi-layer splint, ecological board, high-quality metal',
    features: [
      'Stainless steel handle',
      'Sliding door',
      'Non-slip ladder'
    ],
    applications: [
      'Hotels', 'Airports', 'Dormitories', 'Youth hostels', 'Family apartments',
      'Schools', 'Hospitals', 'Capsule hotels'
    ],
    availableMaterials: ['Wood (eco multi-layer board)'],
    origin: 'imported'
  },
  {
    id: 'lounge',
    name: 'Online Red Studio / Small Room Lounge',
    description: 'Enclosed lounge/booth modules with intelligent door lock; ABS + metal; two external size options.',
    images: [
      '/Pods_Images/Online Red Studio : Small Room Lounge/Online Red Studio : Small Room Lounge main.png',
      '/Pods_Images/Online Red Studio : Small Room Lounge/Online Red Studio : Small Room Lounge details.png',
      '/Pods_Images/Online Red Studio : Small Room Lounge/Online Red Studio : Small Room Lounge more1.png',
      '/Pods_Images/Online Red Studio : Small Room Lounge/Online Red Studio : Small Room Lounge more2.png'
    ],
    models: ['CS-101/102', 'CS-201/202'],
    colors: ['Silvery grey'],
    sizes: [
      { variant: 'Small', dimensions: 'L1580 × W2150 × H2450 mm' },
      { variant: 'Large', dimensions: 'L2180 × W2150 × H2450 mm' }
    ],
    material: 'Taiwan Chi Mei V0 Fire-retardant ABS + high-quality metal',
    features: [
      'Door blue light',
      'Intelligent door lock',
      'Control panel',
      'Decorate blue light'
    ],
    applications: [
      'Airports', 'Family apartments', 'Hospitals', 'Companies', 
      'Internet bars', 'Livestream studios'
    ],
    availableMaterials: ['ABS V0 Fire-retardant'],
    origin: 'imported'
  },
  {
    id: 'abs-flagship-2025',
    name: 'ABS Flagship Series 2025',
    description: 'Designed for hotels, capsule hostels, medical dormitories, and shared living spaces. These pods combine futuristic aesthetics with practical features for comfort, privacy, and safety.',
    images: [
      '/Pods_Images/ABS Flagship Series/Pod real view.jpeg',
      '/Pods_Images/ABS Flagship Series/Pod inner view.jpeg',
      '/Pods_Images/ABS Flagship Series/Pod back view.jpeg',
      '/Pods_Images/ABS Flagship Series/Sleeping pod outer view.jpeg'
    ],
    models: ['ZZK-HC02-Intelligence', 'ZZK-HC02-Update', 'ZZK-HC02-Standard', 'ZZK-HC02-Basic', 'ZZK-SR02-Intelligence', 'ZZK-SR02-Update', 'ZZK-SR02-Standard', 'ZZK-SR02-Basic', 'ZZK-SC02-Intelligence', 'ZZK-SC02-Update', 'ZZK-SC02-Standard', 'ZZK-SC02-Basic'],
    colors: ['White'],
    sizes: [
      { variant: 'Single Horizontal (ZZK-HC02)', dimensions: 'L2060 × W1140 × H2400 mm' },
      { variant: 'Double Horizontal (ZZK-SR02)', dimensions: 'L2060 × W1580 × H2400 mm' },
      { variant: 'Single Vertical (ZZK-SC02)', dimensions: 'L2060 × W1140 × H2400 mm' }
    ],
    material: 'Premium ABS + high-quality metal frame',
    features: [
      'Universal adjustable air vent',
      'Integrated fresh air circulation system',
      'Smart LED control panel',
      'Advanced ventilation technology',
      'Energy-efficient LED lighting',
      'Secure locking mechanism'
    ],
    applications: [
      'Hotels', 'Capsule hostels', 'Medical dormitories', 'Shared living spaces',
      'Budget accommodations', 'Staff quarters', 'Training facilities'
    ],
    availableMaterials: ['Premium ABS V0 Fire-retardant'],
    origin: 'imported'
  },
  {
    id: 'platinum-frp',
    name: 'Platinum FRP Series',
    description: '100% Made in India fiberglass capsule sleeping pods with MS structure. Available in three configurations: Fully Loaded (complete smart features), Mid-tier (essential features), and Basic (structure only). Customizable colors as per RAL Code.',
    images: [
      '/Pods_Images/Made in India T1/Main.jpg',
      '/Pods_Images/Made in India T1/Internal view.jpeg',
      '/Pods_Images/Made in India T1/outer view.jpeg',
      '/Pods_Images/Made in India T1/PHOTO-2024-07-18-23-28-44.jpg'
    ],
    models: ['FRP-FL-001', 'FRP-MT-002', 'FRP-BS-003'],
    colors: ['Customizable as per RAL Code', 'White', 'Blue', 'Green', 'Custom colors available'],
    sizes: [
      { variant: 'Single Pod', dimensions: 'External: 2150 × 1270 × 1270 mm | Internal: 2000 × 1000 × 1000 mm' },
      { variant: 'Weight', dimensions: '~125 kg per pod' }
    ],
    material: 'High-quality fiberglass (FRP) with mild steel structure',
    features: [
      'Smart Panel with USB & universal charging (Fully Loaded)',
      'Premium ISI-standard wiring',
      'Touch LED mirror function',
      'Digital safe locker',
      'Fire extinguisher & smoke alarm',
      'Stainless steel components',
      'Adjustable AC duct ventilation'
    ],
    applications: [
      'Hotels', 'Hostels', 'Corporate housing', 'Hospitals', 'Schools',
      'Airports', 'Budget accommodations', 'Staff quarters', 'Dormitories'
    ],
    availableMaterials: ['Fiberglass (FRP)', 'Mild Steel Structure'],
    origin: 'made-in-india'
  },
];