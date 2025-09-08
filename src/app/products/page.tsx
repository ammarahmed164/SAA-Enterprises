
'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SearchX, LayoutGrid, Tag } from 'lucide-react';
import React from 'react';

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


function AuroraTabs({ categories, selectedCategory, onSelectCategory }: { categories: any[], selectedCategory: string | null, onSelectCategory: (slug: string | null) => void }) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const icons: { [key: string]: React.ElementType } = {
    'all-products': LayoutGrid,
    'unisex-palm': Tag,
    'unisex-dinner': Tag,
    'unisex-galaxy': Tag,
    'unisex-softy': Tag,
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative flex justify-center items-center p-2 bg-gray-900/80 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl"
      style={{
        perspective: '500px'
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
          <motion.div
            className="absolute h-[300%] w-[200%] -left-[50%] -top-[100%] z-0 bg-[radial-gradient(45rem_45rem_at_var(--x)_var(--y),#ff7e5f_0%,#feb47b_20%,#00a8c6_40%,#9cecfb_60%,#64dfdf_80%,#806bff_100%)] opacity-30"
            style={{
              "--x": useTransform(mouseX, (x) => `${x}px`),
              "--y": useTransform(mouseY, (y) => `${y}px`),
              animation: "aurora 10s linear infinite",
            }}
          />
          <style jsx>{`
            @keyframes aurora {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
      </div>
      
      {categories.map((tab) => {
        const Icon = icons[tab.slug || 'all-products'] || Tag;
        return (
          <button
            key={tab.slug || 'all'}
            onClick={() => onSelectCategory(tab.slug)}
            onMouseEnter={() => setHoveredCategory(tab.slug || 'all')}
            onMouseLeave={() => setHoveredCategory(null)}
            className="relative rounded-lg px-4 py-2.5 text-sm font-medium text-white/80 transition-colors focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {selectedCategory === tab.slug && (
              <motion.div
                layoutId="aurora-bubble"
                className="absolute inset-0 z-10 bg-white/10 backdrop-blur-sm"
                style={{ borderRadius: 8 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
             <AnimatePresence>
              {hoveredCategory === (tab.slug || 'all') && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: .15 } }}
                  exit={{ opacity: 0, transition: { duration: .15, delay: 0.2 } }}
                  className="absolute inset-0 z-10"
                >
                  <motion.div
                    className="absolute inset-0 h-full w-full bg-white/10 rounded-lg"
                    style={{
                      maskImage: `radial-gradient(200px 100px at ${useSpring(mouseX, { stiffness: 500, damping: 100 })}px ${useSpring(mouseY, { stiffness: 500, damping: 100 })}px, black, transparent)`,
                      WebkitMaskImage: `radial-gradient(200px 100px at ${useSpring(mouseX, { stiffness: 500, damping: 100 })}px ${useSpring(mouseY, { stiffness: 500, damping: 100 })}px, black, transparent)`,
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <span className="relative z-20 flex items-center gap-2 transition-colors duration-300">
              <Icon className="h-4 w-4" />
              {tab.name}
            </span>
          </button>
        )
      })}
    </div>
  );
}


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
          className="mb-16 flex justify-center"
        >
          <AuroraTabs
            categories={allCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
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
