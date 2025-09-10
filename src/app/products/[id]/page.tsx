import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import ProductDetailClient from './ProductDetailClient';
import type { Product } from '@/lib/types';
import { Suspense } from 'react';

// This function can be uncommented if you want to statically generate all product pages at build time
// export async function generateStaticParams() {
//   return products.map(product => ({
//     id: product.id,
//   }));
// }

function getProductData(id: string): { product: Product | undefined, relatedProducts: Product[] } {
  const product = products.find(p => p.id === id);
  if (!product) {
    return { product: undefined, relatedProducts: [] };
  }
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  return { product, relatedProducts };
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { product, relatedProducts } = getProductData(params.id);
  
  if (!product) {
    notFound();
  }
  
  return (
    <Suspense fallback={<div>Loading product...</div>}>
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </Suspense>
  );
}
