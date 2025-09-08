
'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LayoutGrid, Check, SearchX } from 'lucide-react';
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {/* All Products Card */}
             <motion.button
              variants={itemVariants}
              onClick={() => setSelectedCategory(null)}
              className={cn(
                "relative group col-span-1 lg:col-span-1 h-32 rounded-xl overflow-hidden transition-all duration-500 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
                selectedCategory === null ? "ring-4 ring-primary ring-offset-2" : "ring-1 ring-border"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm group-hover:bg-white/50 transition-all duration-300">
                <LayoutGrid className="h-8 w-8 mb-2 text-primary transition-transform duration-300 group-hover:scale-110" />
                <span className="font-bold text-lg text-primary">All Products</span>
              </div>
            </motion.button>
            
            {/* Category Cards */}
            {categories.map(category => (
              <motion.button
                key={category.slug}
                variants={itemVariants}
                onClick={() => setSelectedCategory(category.slug)}
                className={cn(
                  "relative group col-span-1 lg:col-span-1 h-32 rounded-xl overflow-hidden transition-all duration-500 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
                  selectedCategory === category.slug ? "ring-4 ring-primary ring-offset-2" : "ring-1 ring-border"
                )}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  data-ai-hint={category.dataAiHint}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>
                 <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="font-bold text-xl text-white text-center tracking-tight transition-transform duration-300 group-hover:scale-105">{category.name}</h3>
                </div>
              </motion.button>
            ))}
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
