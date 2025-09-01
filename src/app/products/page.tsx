'use client';

import { useState, useMemo } from 'react';
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
import { Search } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const productSections = [
  { title: 'Unisex Palm', slug: 'unisex-palm', category: 'Unisex Palm' },
  { title: 'Unisex Dinner', slug: 'unisex-dinner', category: 'Unisex Dinner' },
  { title: 'Unisex Galaxy', slug: 'unisex-galaxy', category: 'Unisex Galaxy' },
  { title: 'Unisex Softy', slug: 'unisex-softy', category: 'Unisex Softy' },
]

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('rating-desc');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get('category') ? [searchParams.get('category') as string] : []
  );
  const [priceRange, setPriceRange] = useState([0, 2000]);

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

  const showSections = selectedCategories.length === 0 && searchTerm === '';

  const handleSectionClick = (slug: string) => {
    setSelectedCategories([slug]);
  };

  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Our Products</h1>
        <p className="mt-4 text-lg text-muted-foreground">Browse our extensive catalog of high-quality surgical supplies.</p>
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
                    defaultValue={[0, 2000]}
                    max={2000}
                    step={50}
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
                setPriceRange([0, 2000]);
             }}>Clear Filters</Button>
          </div>
        </aside>

        <main className="lg:col-span-3">
          {showSections ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {productSections.map((section) => (
                <Card key={section.slug} onClick={() => handleSectionClick(section.slug)} className="text-center p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full flex flex-col justify-center items-center">
                    <CardTitle className="text-lg">{section.title}</CardTitle>
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
