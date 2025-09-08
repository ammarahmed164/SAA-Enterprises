
'use client';

import { useState, useMemo, Suspense, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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

function CategoryCard({ category, selectedCategory, onSelectCategory }: { category: any, selectedCategory: string | null, onSelectCategory: (slug: string | null) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10.5deg", "-10.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10.5deg", "10.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  const isSelected = selectedCategory === category.slug;

  return (
     <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelectCategory(category.slug)}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative h-40 w-64 shrink-0 rounded-2xl transition-all duration-300",
        "bg-gradient-to-br from-gray-800 to-gray-900",
        isSelected ? 'ring-4 ring-primary ring-offset-4 ring-offset-background' : 'ring-2 ring-transparent'
      )}
    >
       <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-2 grid place-content-center rounded-xl bg-gray-900/80 shadow-lg"
      >
        <Image
          src={category.image}
          alt={category.name}
          fill
          className={cn(
            "object-cover rounded-xl transition-all duration-300",
            isSelected ? 'opacity-30' : 'opacity-20 group-hover:opacity-30'
          )}
          data-ai-hint={category.dataAiHint}
        />
        <div 
          className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"
        />

        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className={cn(
            "text-center text-xl font-bold text-white transition-colors duration-300",
            isSelected ? "text-primary" : "group-hover:text-white"
          )}
        >
          {category.name}
        </p>
      </div>
    </motion.div>
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

  const allCategories = [{ slug: null, name: 'All Products', image: 'https://picsum.photos/300/200?random=0', dataAiHint: 'all products' }, ...categories];

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
            <div className="w-full max-w-7xl overflow-x-auto pb-4">
              <div className="flex justify-start items-center gap-8 px-4 relative">
                {allCategories.map(category => (
                   <motion.div variants={itemVariants} key={category.slug || 'all'} className="group">
                    <CategoryCard 
                      category={category}
                      selectedCategory={selectedCategory}
                      onSelectCategory={setSelectedCategory}
                    />
                  </motion.div>
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
