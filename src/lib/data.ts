import type { Product, Category, Order } from '@/lib/types';

export const categories: Category[] = [
  { name: 'Unisex Palm', slug: 'unisex-palm' },
  { name: 'Unisex Dinner', slug: 'unisex-dinner' },
  { name: 'Unisex Galaxy', slug: 'unisex-galaxy' },
  { name: 'Unisex Softy', slug: 'unisex-softy' },
];

export const products: Product[] = [
  {
    id: '9',
    name: 'Palm alphabatic',
    description: 'Comfortable palm alphabatic for all-day wear.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobility`,
    price: 16.2,
    image: '/Product1.png',
    dataAiHint: 'Palm alphabatic',
    category: 'Unisex Palm',
    rating: 4.5,
    reviews: 120,
  },
  {
    id: '10',
    name: 'Unisex Palm Black',
    description: 'Stylish palm sandals for outdoor activities.',
    longDescription:`Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobility`,
    price: 16.2,
    image: '/Product2.png',
    dataAiHint: 'Unisex Palm Black',
    category: 'Unisex Palm',
    rating: 4.6,
    reviews: 95,
  },
  {
    id: '11',
    name: 'Unisex Dinner Plate Set',
    description: 'Elegant dinner plate set for special occasions.',
    longDescription: 'A set of 4 elegant dinner plates that will impress your guests. Made from high-quality ceramic, these plates are both microwave and dishwasher safe.',
    price: 59.99,
    image: 'https://picsum.photos/600/400?random=11',
    dataAiHint: 'dinner plates',
    category: 'Unisex Dinner',
    rating: 4.8,
    reviews: 75,
  },
  {
    id: '12',
    name: 'Unisex Dinner Cutlery Set',
    description: 'Premium stainless steel cutlery set.',
    longDescription: 'This 16-piece cutlery set includes forks, knives, spoons, and teaspoons. Made from premium stainless steel with a modern design.',
    price: 49.99,
    image: 'https://picsum.photos/600/400?random=12',
    dataAiHint: 'cutlery set',
    category: 'Unisex Dinner',
    rating: 4.7,
    reviews: 88,
  },
  {
    id: '13',
    name: 'Unisex Galaxy Projector',
    description: 'Transform your room into a starry night sky.',
    longDescription: 'This galaxy projector displays a mesmerizing array of stars and nebulae on your ceiling. It comes with a remote control and multiple color options.',
    price: 79.95,
    image: 'https://picsum.photos/600/400?random=13',
    dataAiHint: 'galaxy projector',
    category: 'Unisex Galaxy',
    rating: 4.9,
    reviews: 250,
  },
  {
    id: '14',
    name: 'Unisex Galaxy T-Shirt',
    description: 'A cool t-shirt with a vibrant galaxy print.',
    longDescription: 'Made from 100% cotton, this t-shirt features a stunning all-over galaxy print. It\'s comfortable, durable, and perfect for space lovers.',
    price: 29.99,
    image: 'https://picsum.photos/600/400?random=14',
    dataAiHint: 'galaxy shirt',
    category: 'Unisex Galaxy',
    rating: 4.6,
    reviews: 150,
  },
  {
    id: '15',
    name: 'Unisex Softy Blanket',
    description: 'A super soft and cozy fleece blanket.',
    longDescription: 'Wrap yourself in warmth with this incredibly soft fleece blanket. It\'s perfect for cuddling on the couch or adding an extra layer of comfort to your bed.',
    price: 39.99,
    image: 'https://picsum.photos/600/400?random=15',
    dataAiHint: 'soft blanket',
    category: 'Unisex Softy',
    rating: 4.9,
    reviews: 300,
  },
  {
    id: '16',
    name: 'Unisex Softy Pillow',
    description: 'A plush pillow for ultimate relaxation.',
    longDescription: 'This plush pillow is filled with a hypoallergenic down alternative, providing the perfect balance of softness and support for a restful night\'s sleep.',
    price: 24.99,
    image: 'https://picsum.photos/600/400?random=16',
    dataAiHint: 'plush pillow',
    category: 'Unisex Softy',
    rating: 4.8,
    reviews: 220,
  },
  {
    id: '17',
    name: 'Unisex Palm Gray',
    description: 'Lightweight and durable palm flip-flops.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobilit`,
    price: 16.2,
    image: '/Product3.png',
    dataAiHint: 'Unisex Palm Gray',
    category: 'Unisex Palm',
    rating: 4.4,
    reviews: 80,
  },
  {
    id: '18',
    name: 'Unisex Palm Green',
    description: 'A stylish hat made from woven palm leaves.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobilit`,
    price: 16.2,
    image: '/Product4.png',
    dataAiHint: 'Unisex Palm Green',
    category: 'Unisex Palm',
    rating: 4.7,
    reviews: 110,
  },
  {
    id: '19',
    name: 'Unisex Palm Maroon',
    description: 'A spacious and eco-friendly tote bag.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobilit`,
    price: 16.2,
    image: '/Product5.png',
    dataAiHint: 'Unisex Palm Maroon',
    category: 'Unisex Palm',
    rating: 4.8,
    reviews: 130,
  },
  {
    id: '20',
    name: 'Unisex Palm Navy Blue',
    description: 'Comfortable loafers with a palm tree accent.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobilit`,
    price: 16.2,
    image: '/Product6.png',
    dataAiHint: 'Unisex Palm Navy Blue',
    category: 'Unisex Palm',
    rating: 4.6,
    reviews: 90,
  },
  {
    id: '21',
    name: 'Unisex Palm Olive Green',
    description: 'Classic espadrilles with a tropical twist.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobilit`,
    price: 16.2,
    image: '/Product7.png',
    dataAiHint: 'Unisex Palm Olive Green',
    category: 'Unisex Palm',
    rating: 4.5,
    reviews: 105,
  },
  {
    id: '22',
    name: 'Unisex Palm Royal Blue',
    description: 'A sleek wallet with a debossed palm design.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobilit`,
    price: 16.2,
    image: '/Product8.png',
    dataAiHint: 'Unisex Palm Royal Blue',
    category: 'Unisex Palm',
    rating: 4.7,
    reviews: 150,
  },
  {
    id: '23',
    name: 'Unisex Palm Sky Blue',
    description: 'A lightweight scarf with a palm leaf print.',
    longDescription: `Unisex Design
                      Modern V-Neck Top
                      Multiple Pockets
                      Comfortable Elastic Waistband
                      Durable & Easy-Care Fabric
                      Enhanced Mobilit`,    
    price: 16.2,
    image: '/Product9.png',
    dataAiHint: 'Unisex Palm Sky Blue',
    category: 'Unisex Palm',
    rating: 4.6,
    reviews: 70,
  },
  {
    id: '24',
    name: 'Unisex Dinner Wine Glasses',
    description: 'Set of 4 crystal wine glasses.',
    longDescription: 'A set of 4 crystal wine glasses, perfect for any occasion. The elegant design will complement any table setting.',
    price: 39.99,
    image: 'https://picsum.photos/600/400?random=24',
    dataAiHint: 'wine glasses',
    category: 'Unisex Dinner',
    rating: 4.8,
    reviews: 60,
  },
  {
    id: '25',
    name: 'Unisex Dinner Tablecloth',
    description: 'A beautiful and durable tablecloth.',
    longDescription: 'This tablecloth is made from a durable, stain-resistant fabric, making it perfect for everyday use or special occasions. Available in multiple colors.',
    price: 29.99,
    image: 'https://picsum.photos/600/400?random=25',
    dataAiHint: 'tablecloth dining',
    category: 'Unisex Dinner',
    rating: 4.7,
    reviews: 55,
  },
];

export const orders: Order[] = [];
