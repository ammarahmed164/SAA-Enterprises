import type { Product, Category, Order } from '@/lib/types';

export const categories: Category[] = [
  { name: 'Unisex Palm', slug: 'unisex-palm', image: '/PalmHeader.png', dataAiHint: 'palm surgicals Products' },
  { name: 'Unisex Dinner', slug: 'unisex-dinner', image: '/DinnerFront.png', dataAiHint: 'dinner surgicals Products' },
  { name: 'Unisex Galaxy', slug: 'unisex-galaxy', image: '/GalaxyFront.png', dataAiHint: 'galaxy surgicals Products' },
  { name: 'Unisex Softy', slug: 'unisex-softy', image: '/SoftyFront.png', dataAiHint: 'soft surgicals Products' },
];

export const products: Product[] = [
  {
    id: '9',
    name: 'Palm alphabatic',
    description: 'Comfortable palm slippers for all-day wear.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobility`,
    price: 16.2,
    image: '/product1.png',
    images: ['/product1.png', 'https://picsum.photos/800/800?random=1', 'https://picsum.photos/800/800?random=2', 'https://picsum.photos/800/800?random=3', 'https://picsum.photos/800/800?random=4'],
    dataAiHint: 'Palm alphabatic',
    category: 'Unisex Palm',
    rating: 4.5,
    reviews: 120,
  },
  {
    id: '10',
    name: 'Unisex Palm Black',
    description: 'Stylish palm sandals for outdoor activities.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobility`,    
    price: 16.2,
    image: '/Product2.png',
    images: ['/Product2.png', 'https://picsum.photos/800/800?random=5', 'https://picsum.photos/800/800?random=6', 'https://picsum.photos/800/800?random=7', 'https://picsum.photos/800/800?random=8'],
    dataAiHint: 'Unisex Palm Black',
    category: 'Unisex Palm',
    rating: 4.6,
    reviews: 95,
  },
  {
    id: '11',
    name: 'Unisex Palm Grey',
    description: 'Lightweight and durable palm flip-flops.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobility`,    
    price: 16.2,
    image: '/Product3.png',
    images: ['/Product3.png', 'https://picsum.photos/800/800?random=9', 'https://picsum.photos/800/800?random=10', 'https://picsum.photos/800/800?random=11', 'https://picsum.photos/800/800?random=12'],
    dataAiHint: 'Unisex Palm Grey',
    category: 'Unisex Palm',
    rating: 4.4,
    reviews: 80,
  },
  {
    id: '12',
    name: 'Unisex Palm Green',
    description: 'A stylish hat made from woven palm leaves.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobility`,    
    price: 16.2,
    image: '/Product4.png',
    images: ['/Product4.png', 'https://picsum.photos/800/800?random=13', 'https://picsum.photos/800/800?random=14', 'https://picsum.photos/800/800?random=15', 'https://picsum.photos/800/800?random=16'],
    dataAiHint: 'Unisex Palm Green',
    category: 'Unisex Palm',
    rating: 4.7,
    reviews: 110,
  },
  {
    id: '13',
    name: 'Unisex Palm Maroon',
    description: 'A spacious and eco-friendly tote bag.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobility`,    
    price: 16.2,
    image: '/Product5.png',
    images: ['/Product5.png', 'https://picsum.photos/800/800?random=17', 'https://picsum.photos/800/800?random=18', 'https://picsum.photos/800/800?random=19', 'https://picsum.photos/800/800?random=20'],
    dataAiHint: 'Unisex Palm Maroon',
    category: 'Unisex Palm',
    rating: 4.8,
    reviews: 130,
  },
  {
    id: '14',
    name: 'Unisex Palm Navy Blue',
    description: 'Comfortable loafers with a palm tree accent.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobility`,    
    price: 16.2,
    image: '/Product6.png',
    images: ['/Product6.png', 'https://picsum.photos/800/800?random=21', 'https://picsum.photos/800/800?random=22', 'https://picsum.photos/800/800?random=23', 'https://picsum.photos/800/800?random=24'],
    dataAiHint: 'Unisex Palm Navy Blue',
    category: 'Unisex Palm',
    rating: 4.6,
    reviews: 90,
  },
  {
    id: '15',
    name: 'Unisex Palm Olive Green',
    description: 'Classic espadrilles with a tropical twist.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobility`,    
    price: 16.2,
    image: '/Product7.png',
    images: ['/Product7.png', 'https://picsum.photos/800/800?random=25', 'https://picsum.photos/800/800?random=26', 'https://picsum.photos/800/800?random=27', 'https://picsum.photos/800/800?random=28'],
    dataAiHint: 'Unisex Palm Olive Green',
    category: 'Unisex Palm',
    rating: 4.5,
    reviews: 105,
  },
  {
    id: '16',
    name: 'Unisex Palm Royal Blue',
    description: 'A sleek wallet with a debossed palm design.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobility`,    
    price: 16.2,
    image: '/Product8.png',
    images: ['/Product8.png', 'https://picsum.photos/800/800?random=29', 'https://picsum.photos/800/800?random=30', 'https://picsum.photos/800/800?random=31', 'https://picsum.photos/800/800?random=32'],
    dataAiHint: 'Unisex Palm Royal Blue',
    category: 'Unisex Palm',
    rating: 4.7,
    reviews: 150,
  },
  {
    id: '17',
    name: 'Unisex Palm Sky Blue',
    description: 'A lightweight scarf with a palm leaf print.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobility`,    
    price: 16.2,
    image: '/Product9.png',
    images: ['/Product9.png', 'https://picsum.photos/800/800?random=33', 'https://picsum.photos/800/800?random=34', 'https://picsum.photos/800/800?random=35', 'https://picsum.photos/800/800?random=36'],
    dataAiHint: 'Unisex Palm Sky Blue',
    category: 'Unisex Palm',
    rating: 4.6,
    reviews: 70,
  },


  {
    id: '18',
    name: 'Unisex Dinner Black',
    description: 'Elegant dinner plate set for special occasions.',
    longDescription: `Crafted from a soft, breathable fabric for all-day wear and unrestricted movement
                      Multiple pockets on both the top and pants for easy access to tools and essentials
                      Streamlined Fit
                      Fade-Resistant Color
                      High-quality stitching and fabric
                      V-neck top and straight-leg pants`,
    price: 16.2,
    image: '/product1Din.png',
    images: ['/product1Din.png', 'https://picsum.photos/800/800?random=37', 'https://picsum.photos/800/800?random=38', 'https://picsum.photos/800/800?random=39', 'https://picsum.photos/800/800?random=40'],
    dataAiHint: 'Unisex Dinner Black',
    category: 'Unisex Dinner',
    rating: 4.8,
    reviews: 75,
  },
  {
    id: '19',
    name: 'Unisex Dinner White',
    description: 'Premium stainless steel cutlery set.',
    longDescription: `Crafted from a soft, breathable fabric for all-day wear and unrestricted movement
                      Multiple pockets on both the top and pants for easy access to tools and essentials
                      Streamlined Fit
                      Fade-Resistant Color
                      High-quality stitching and fabric
                      V-neck top and straight-leg pants`,   
    price: 16.2,
    image: '/product2Din.png',
    images: ['/product2Din.png', 'https://picsum.photos/800/800?random=41', 'https://picsum.photos/800/800?random=42', 'https://picsum.photos/800/800?random=43', 'https://picsum.photos/800/800?random=44'],
    dataAiHint: 'Unisex Dinner White',
    category: 'Unisex Dinner',
    rating: 4.7,
    reviews: 88,
  },
  {
    id: '20',
    name: 'Unisex Dinner Purple',
    description: 'Set of 4 crystal wine glasses.',
    longDescription: `Crafted from a soft, breathable fabric for all-day wear and unrestricted movement
                      Multiple pockets on both the top and pants for easy access to tools and essentials
                      Streamlined Fit
                      Fade-Resistant Color
                      High-quality stitching and fabric
                      V-neck top and straight-leg pants`,    
    price: 16.2,
    image: '/product3Din.png',
    images: ['/product3Din.png', 'https://picsum.photos/800/800?random=45', 'https://picsum.photos/800/800?random=46', 'https://picsum.photos/800/800?random=47', 'https://picsum.photos/800/800?random=48'],
    dataAiHint: 'Unisex Dinner Purple',
    category: 'Unisex Dinner',
    rating: 4.8,
    reviews: 60,
  },
  {
    id: '21',
    name: 'Unisex Dinner Teal',
    description: 'A beautiful and durable tablecloth.',
    longDescription: `Crafted from a soft, breathable fabric for all-day wear and unrestricted movement
                      Multiple pockets on both the top and pants for easy access to tools and essentials
                      Streamlined Fit
                      Fade-Resistant Color
                      High-quality stitching and fabric
                      V-neck top and straight-leg pants`,    
    price: 16.2,
    image: '/product4Din.png',
    images: ['/product4Din.png', 'https://picsum.photos/800/800?random=49', 'https://picsum.photos/800/800?random=50', 'https://picsum.photos/800/800?random=51', 'https://picsum.photos/800/800?random=52'],
    dataAiHint:'Unisex Dinner Teal',
    category: 'Unisex Dinner',
    rating: 4.7,
    reviews: 55,
  },


  {
    id: '22',
    name: 'Unisex Galaxy Black',
    description: 'Transform your room into a starry night sky.',
    longDescription: `Experience the gentle touch of our Galaxy fabric against your skin, providing all-day comfort
                      Comfortable Fit for Every Body
                      V-neck scrub top
                      Double-pocket design on the lower front
                      Moisture-Wicking Fabric
                      Wrinkle-Resistant`,
    price: 16.2,
    image: '/product1GAL.png',
    images: ['/product1GAL.png', 'https://picsum.photos/800/800?random=53', 'https://picsum.photos/800/800?random=54', 'https://picsum.photos/800/800?random=55', 'https://picsum.photos/800/800?random=56'],
    dataAiHint: 'Unisex Galaxy Black',
    category: 'Unisex Galaxy',
    rating: 4.9,
    reviews: 250,
  },
  {
    id: '23',
    name: 'Unisex Galaxy Charcoal Gray',
    description: 'A cool t-shirt with a vibrant galaxy print.',
    longDescription: `Experience the gentle touch of our Galaxy fabric against your skin, providing all-day comfort
                      Comfortable Fit for Every Body
                      V-neck scrub top
                      Double-pocket design on the lower front
                      Moisture-Wicking Fabric
                      Wrinkle-Resistant`,    
    price: 16.2,
    image: '/product2GAL.png',
    images: ['/product2GAL.png', 'https://picsum.photos/800/800?random=57', 'https://picsum.photos/800/800?random=58', 'https://picsum.photos/800/800?random=59', 'https://picsum.photos/800/800?random=60'],
    dataAiHint: 'Unisex Galaxy Charcoal Gray',
    category: 'Unisex Galaxy',
    rating: 4.6,
    reviews: 150,
  },
  {
    id: '24',
    name: 'Unisex Galaxy Grey',
    description: 'A cool t-shirt with a vibrant galaxy print.',
    longDescription: `Experience the gentle touch of our Galaxy fabric against your skin, providing all-day comfort
                      Comfortable Fit for Every Body
                      V-neck scrub top
                      Double-pocket design on the lower front
                      Moisture-Wicking Fabric
                      Wrinkle-Resistant`,    
    price: 16.2,
    image: '/product3GAL.png',
    images: ['/product3GAL.png', 'https://picsum.photos/800/800?random=61', 'https://picsum.photos/800/800?random=62', 'https://picsum.photos/800/800?random=63', 'https://picsum.photos/800/800?random=64'],
    dataAiHint: 'Unisex Galaxy Grey',
    category: 'Unisex Galaxy',
    rating: 4.6,
    reviews: 150,
  },
  {
    id: '25',
    name: 'Unisex Galaxy Navy Blue',
    description: 'A cool t-shirt with a vibrant galaxy print.',
    longDescription: `Experience the gentle touch of our Galaxy fabric against your skin, providing all-day comfort
                      Comfortable Fit for Every Body
                      V-neck scrub top
                      Double-pocket design on the lower front
                      Moisture-Wicking Fabric
                      Wrinkle-Resistant`,    
    price: 16.2,
    image: '/product4GAL.png',
    images: ['/product4GAL.png', 'https://picsum.photos/800/800?random=65', 'https://picsum.photos/800/800?random=66', 'https://picsum.photos/800/800?random=67', 'https://picsum.photos/800/800?random=68'],
    dataAiHint: 'Unisex Galaxy Navy Blue',
    category: 'Unisex Galaxy',
    rating: 4.6,
    reviews: 150,
  },
  {
    id: '26',
    name: 'Unisex Galaxy Royal blue',
    description: 'A cool t-shirt with a vibrant galaxy print.',
    longDescription: `Experience the gentle touch of our Galaxy fabric against your skin, providing all-day comfort
                      Comfortable Fit for Every Body
                      V-neck scrub top
                      Double-pocket design on the lower front
                      Moisture-Wicking Fabric
                      Wrinkle-Resistant`,    
    price: 16.2,
    image: '/product5GAL.png',
    images: ['/product5GAL.png', 'https://picsum.photos/800/800?random=69', 'https://picsum.photos/800/800?random=70', 'https://picsum.photos/800/800?random=71', 'https://picsum.photos/800/800?random=72'],
    dataAiHint: 'Unisex Galaxy Royal blue',
    category: 'Unisex Galaxy',
    rating: 4.6,
    reviews: 150,
  },


  {
    id: '27',
    name: 'Softy Black',
    description: 'A super soft and cozy fleece blanket.',
    longDescription: `Premium "Softy" Fabric
                      Modern, Tailored Fit
                      Wrinkle-Resistant
                      Four-Way Stretch
                      Moisture-Wicking Technology
                      Fade & Shrink Resistant`,
    price: 16.2,
    image: '/product1Sof.png',
    images: ['/product1Sof.png', 'https://picsum.photos/800/800?random=73', 'https://picsum.photos/800/800?random=74', 'https://picsum.photos/800/800?random=75', 'https://picsum.photos/800/800?random=76'],
    dataAiHint: 'soft blanket',
    category: ' Softy Black',
    rating: 4.9,
    reviews: 300,
  },
  {
    id: '28',
    name: 'Softy dark blue',
    description: 'A plush pillow for ultimate relaxation.',
    longDescription: `Premium "Softy" Fabric
                      Modern, Tailored Fit
                      Wrinkle-Resistant
                      Four-Way Stretch
                      Moisture-Wicking Technology
                      Fade & Shrink Resistant`,    
    price: 16.2,
    image: '/product2Sof.png',
    images: ['/product2Sof.png', 'https://picsum.photos/800/800?random=77', 'https://picsum.photos/800/800?random=78', 'https://picsum.photos/800/800?random=79', 'https://picsum.photos/800/800?random=80'],
    dataAiHint: 'Softy dark blue',
    category: 'Unisex Softy',
    rating: 16.2,
    reviews: 220,
  },
  {
    id: '29',
    name: 'Softy Gray',
    description: 'A plush pillow for ultimate relaxation.',
    longDescription: `Premium "Softy" Fabric
                      Modern, Tailored Fit
                      Wrinkle-Resistant
                      Four-Way Stretch
                      Moisture-Wicking Technology
                      Fade & Shrink Resistant`,    
    price: 16.2,
    image: '/product3Sof.png',
    images: ['/product3Sof.png', 'https://picsum.photos/800/800?random=81', 'https://picsum.photos/800/800?random=82', 'https://picsum.photos/800/800?random=83', 'https://picsum.photos/800/800?random=84'],
    dataAiHint: 'Softy Gray',
    category: 'Unisex Softy',
    rating: 16.2,
    reviews: 220,
  },
  {
    id: '30',
    name: 'Softy maroon',
    description: 'A plush pillow for ultimate relaxation.',
    longDescription: `Premium "Softy" Fabric
                      Modern, Tailored Fit
                      Wrinkle-Resistant
                      Four-Way Stretch
                      Moisture-Wicking Technology
                      Fade & Shrink Resistant`,    
    price: 16.2,
    image: '/product4Sof.png',
    images: ['/product4Sof.png', 'https://picsum.photos/800/800?random=85', 'https://picsum.photos/800/800?random=86', 'https://picsum.photos/800/800?random=87', 'https://picsum.photos/800/800?random=88'],
    dataAiHint: 'Softy maroon',
    category: 'Unisex Softy',
    rating: 4.8,
    reviews: 220,
  },
  {
    id: '31',
    name: 'Softy olive green',
    description: 'A plush pillow for ultimate relaxation.',
    longDescription: `Premium "Softy" Fabric
                      Modern, Tailored Fit
                      Wrinkle-Resistant
                      Four-Way Stretch
                      Moisture-Wicking Technology
                      Fade & Shrink Resistant`,    
    price: 16.2,
    image: '/product5Sof.png',
    images: ['/product5Sof.png', 'https://picsum.photos/800/800?random=89', 'https://picsum.photos/800/800?random=90', 'https://picsum.photos/800/800?random=91', 'https://picsum.photos/800/800?random=92'],
    dataAiHint: 'Softy olive green',
    category: 'Unisex Softy',
    rating: 4.8,
    reviews: 220,
  },
];

export const orders: Order[] = [];
