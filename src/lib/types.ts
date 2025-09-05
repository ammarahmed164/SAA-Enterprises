
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
  id: string;
  date: string;
  status: 'Pending' | 'Shipped' | 'Delivered';
  total: number;
  items: CartItem[];
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};
