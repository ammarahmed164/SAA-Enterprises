
import type { Timestamp } from "firebase/firestore";

export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  dataAiHint?: string;
};

export type Category = {
  name: string;
  slug: string;
  image: string;
  dataAiHint?: string;
};

export type Order = {
  id: string; // Document ID from Firestore
  userId: string;
  userName?: string;
  userEmail: string;
  date: string; // Should be ISO string
  createdAt: Timestamp;
  status: 'Pending' | 'Shipped' | 'Delivered';
  total: number;
  totalAmount: number;
  items: CartItem[];
  orderItems: CartItem[];
};

export type CartItem = {
  id: string;
  name:string;
  price: number;
  image: string;
  quantity: number;
};

export type User = {
  id: string; // Firebase UID
  name?: string;
  email: string;
};

// This type is for the signup form data
export type StoredUser = {
  id: string;
  name: string;
  email: string;
  password?: string;
};
