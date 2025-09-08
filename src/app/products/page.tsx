
'use client';

import { useState, useMemo, Suspense, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LayoutGrid, Check, SearchX, Tag } from 'lucide-react';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  const searchQuery = searchParams.get('q');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);

  const filteredProducts = useMemo(() => {
    let prods = products;

    if (selectedCategory) {
      prods = prods.filter(p => p.category.toLowerCase().replace(/ /g, '-') === selectedCategory);
    }

    if (searchQuery) {
      prods = prods.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    
    return prods;
  }, [selectedCategory, searchQuery]);

  const allCategories = [{ slug: null, name: 'All Products' }, ...categories];

  return (
    <div className="bg-background text-foreground">
      <div className="container py-12 md:py-16">
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tighter !font-headline"
          >
            {searchQuery ? `Searching for "${searchQuery}"` : "Our Curated Collection"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            {searchQuery 
              ? `Found ${filteredProducts.length} products.`
              : "Discover unique and stylish products designed for your lifestyle."
            }
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-xl font-bold mb-6 text-center text-primary">Shop by Category</motion.h2>
           <motion.div 
            variants={containerVariants}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-5xl overflow-x-auto pb-4">
              <div className="flex justify-start sm:justify-center items-center gap-3 px-4 relative bg-muted p-2 rounded-full">
                {allCategories.map(category => (
                   <motion.button
                    key={category.slug || 'all'}
                    variants={itemVariants}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={cn(
                      "relative z-10 flex items-center gap-2.5 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
                      selectedCategory === category.slug 
                        ? "text-primary-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.slug === null ? <LayoutGrid className="h-4 w-4" /> : <Tag className="h-4 w-4" />}
                    <span>{category.name}</span>
                    {selectedCategory === category.slug && (
                      <motion.div
                        layoutId="category-highlight"
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={selectedCategory || 'all'}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -30 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10"
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                   <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
             <motion.div
              key="no-results"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <SearchX className="mx-auto h-24 w-24 text-muted-foreground/50" />
              <h2 className="mt-6 text-2xl font-semibold">No Products Found</h2>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your search or category filters.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}


export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  )
}
