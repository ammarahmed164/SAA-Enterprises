'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { products, categories } from '@/lib/data';
import type { Product } from '@/lib/types';
import ProductCard from '@/components/product-card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight } from 'lucide-react';
import { Card, CardTitle } from '@/components/ui/card';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('rating-desc');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get('category') ? [searchParams.get('category') as string] : []
  );
  const [priceRange, setPriceRange] = useState([0, 200]);

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategories(prev =>
      prev.includes(categorySlug)
        ? prev.filter(c => c !== categorySlug)
        : [...prev, categorySlug]
    );
  };
  
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category.toLowerCase().replace(/ /g, '-'));
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });

    return filtered.sort((a, b) => {
      switch (sortOrder) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'rating-desc': return b.rating - a.rating;
        case 'name-asc': return a.name.localeCompare(b.name);
        default: return 0;
      }
    });
  }, [searchTerm, sortOrder, selectedCategories, priceRange]);

  const showCategoryCards = selectedCategories.length === 0 && searchTerm === '';

  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Our Products</h1>
        <p className="mt-4 text-lg text-muted-foreground">Browse our extensive catalog of high-quality products.</p>
      </div>
      <div className="grid lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            <h2 className="text-2xl font-bold">Filters</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name..."
                className="pl-9"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <Accordion type="multiple" defaultValue={['category', 'price']} className="w-full">
              <AccordionItem value="category">
                <AccordionTrigger className="text-lg font-medium">Category</AccordionTrigger>
                <AccordionContent className="pt-2 space-y-2">
                  {categories.map(category => (
                    <div key={category.slug} className="flex items-center space-x-2">
                      <Checkbox
                        id={category.slug}
                        checked={selectedCategories.includes(category.slug)}
                        onCheckedChange={() => handleCategoryChange(category.slug)}
                      />
                      <label htmlFor={category.slug} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="price">
                <AccordionTrigger className="text-lg font-medium">Price Range</AccordionTrigger>
                <AccordionContent className="pt-4">
                  <Slider
                    defaultValue={[0, 200]}
                    max={200}
                    step={10}
                    onValueCommit={setPriceRange}
                  />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
             <Button className="w-full" onClick={() => {
                setSearchTerm('');
                setSelectedCategories([]);
                setPriceRange([0, 200]);
             }}>Clear Filters</Button>
          </div>
        </aside>

        <main className="lg:col-span-3">
          {showCategoryCards ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category) => (
                <Card 
                  key={category.slug} 
                  onClick={() => setSelectedCategories([category.slug])}
                  className="relative group aspect-video rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <div className="absolute inset-0 bg-muted/50 z-0"/>
                  <Image 
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105 p-4 drop-shadow-lg"
                    data-ai-hint={category.dataAiHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="relative z-10 flex flex-col items-start justify-end h-full p-6 text-white">
                    <h3 className="text-3xl font-extrabold tracking-tight drop-shadow-lg">{category.name}</h3>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-sm bg-white/20 backdrop-blur-sm py-1 px-3 rounded-full">
                      <span>Explore</span>
                      <ArrowRight className="h-4 w-4"/>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">{filteredAndSortedProducts.length} products found</p>
                <Select value={sortOrder} onValueChange={setSortOrder}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating-desc">Best Rating</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {filteredAndSortedProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredAndSortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 border-2 border-dashed rounded-lg">
                    <p className="text-xl font-semibold">No products found</p>
                    <p className="text-muted-foreground mt-2">Try adjusting your filters.</p>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
