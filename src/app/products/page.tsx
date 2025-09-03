
'use client';

import { useState, useMemo } from 'react';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LayoutGrid, Check } from 'lucide-react';

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

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return products;
    }
    return products.filter(p => p.category.toLowerCase().replace(/ /g, '-') === selectedCategory);
  }, [selectedCategory]);

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
            Our Curated Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            Discover unique and stylish products designed for your lifestyle.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-xl font-bold mb-4 text-center">Shop by Category</motion.h2>
          <motion.div 
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-3 md:gap-4">
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={cn(
                "px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300 flex items-center gap-2",
                selectedCategory === null
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-background text-foreground hover:bg-muted/50 border-border"
              )}
            >
              <LayoutGrid className="h-4 w-4" />
              All Products
            </motion.button>
            {categories.map(category => (
              <motion.button
                key={category.slug}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.slug)}
                className={cn(
                  "px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300",
                  selectedCategory === category.slug
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-background text-foreground hover:bg-muted/50 border-border"
                )}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
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
        </AnimatePresence>
      </div>
    </div>
  );
}
