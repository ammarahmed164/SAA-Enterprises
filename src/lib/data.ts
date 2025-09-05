
import type { Product, Category } from '@/lib/types';

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
    images: ['/product1.png', '/Product1A.png', '/Product1B.png', '/Product1C.png'],
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
    images: ['/Product2.png', '/Product2A.png', '/Product2B.png', '/Product2C.png'],
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
    images: ['/Product3.png', '/Product3A.png', '/Product3B.png', '/Product3C.png', '/Product3D.png'],
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
    images: ['/Product4.png', '/Product4A.png', '/Product4B.png', '/Product4C.png', '/Product4D.png'],
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
    images: ['/Product5.png', '/Product5A.png', '/Product5B.png', '/Product5C.png', '/Product5D.png', '/Product5E.png'],
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
    images: ['/Product6.png', '/Product6A.png', '/Product6B.png', '/Product6C.png'],
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
    images: ['/Product7.png', '/Product7A.png', '/Product7B.png', '/Product7C.png','/Product7D.png'],
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
    images: ['/Product8.png', '/Product8A.png', '/Product8B.png', '/Product8C.png'],
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
    images: ['/Product9.png', '/Product9A.png', '/Product9B.png', '/Product9C.png','/Product9D.png','/Product9E.png'],
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
    images: ['/product1Din.png','/product1ADIN.png'],
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
    images: ['/product2Din.png','/product2ADIN.png'],
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
    images: ['/product3Din.png'],
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
    images: ['/product4Din.png'],
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
    images: ['/product1GAL.png', '/product1AGAL.png', '/product1BGAL.png', '/product1CGAL.png', '/product1DGAL.png'],
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
    images: ['/product2GAL.png', '/product2AGAL.png', '/product2BGAL.png', '/product2CGAL.png', '/product2DGAL.png'],
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
    images: ['/product3GAL.png', '/product3AGAL.png', '/product3BGAL.png', '/product3CGAL.png', '/product3DGAL.png','/product3EGAL.png'],
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
    images: ['/product4GAL.png', '/product4AGAL.png', '/product4BGAL.png', '/product4CGAL.png', '/product4DGAL.png','/product4EGAL.png'],
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
    images: ['/product5GAL.png', '/product5AGAL.png', '/product5BGAL.png', '/product5CGAL.png', '/product5DGAL.png','/product5EGAL.png'],
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
    images: ['/product1Sof.png', '/product1AS.png', '/product1BS.png', '/product1CS.png', '/product1DS.png','/product1ES.png'],
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
    images: ['/product2Sof.png', '/product2AS.png', '/product2BS.png', '/product2CS.png', '/product2DS.png','/product2ES.png'],
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
    images: ['/product3Sof.png', '/product3AS.png', '/product3BS.png', '/product3CS.png', '/product3DS.png','/product3ES.png'],
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
    images: ['/product4Sof.png', '/product4AS.png', '/product4BS.png', '/product4CS.png', '/product4DS.png','/product4ES.png'],
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
    images: ['/product5Sof.png', '/product5AS.png', '/product5BS.png', '/product5CS.png', '/product5DS.png'],
    dataAiHint: 'Softy olive green',
    category: 'Unisex Softy',
    rating: 4.8,
    reviews: 220,
  },
];
