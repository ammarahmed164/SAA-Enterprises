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
import { Search, X, Frown, ArrowRight, LayoutGrid, List } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

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

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setPriceRange([0, 200]);
    const slider = document.querySelector('[data-radix-collection-item]') as HTMLSpanElement | null
    if (slider) {
       // a bit of a hack to reset the slider visually
    }
  }
  
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
    <div className="container py-12">
      <div className="relative rounded-lg overflow-hidden mb-12 bg-muted/30 p-8 md:p-16 flex items-center justify-center text-center">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
         <div className="relative">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl !font-headline bg-clip-text text-transparent bg-gradient-to-r from-foreground/80 to-foreground">
                Our Collection
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our curated selection of high-quality, stylish lifestyle products designed for you.
            </p>
         </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-x-12">
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
             <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search products..."
                            className="pl-9 bg-background"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Accordion type="multiple" defaultValue={['category', 'price']} className="w-full">
                    <AccordionItem value="category">
                        <AccordionTrigger className="text-base font-medium">Category</AccordionTrigger>
                        <AccordionContent className="pt-2 space-y-3">
                        {categories.map(category => (
                            <div key={category.slug} className="flex items-center space-x-2">
                            <Checkbox
                                id={category.slug}
                                checked={selectedCategories.includes(category.slug)}
                                onCheckedChange={() => handleCategoryChange(category.slug)}
                            />
                            <label htmlFor={category.slug} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                {category.name}
                            </label>
                            </div>
                        ))}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="price">
                        <AccordionTrigger className="text-base font-medium">Price Range</AccordionTrigger>
                        <AccordionContent className="pt-4">
                        <Slider
                            defaultValue={priceRange}
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
                </CardContent>
             </Card>
             <Button variant="secondary" className="w-full" onClick={clearFilters}>
                <X className="mr-2 h-4 w-4"/>
                Clear Filters
            </Button>
          </div>
        </aside>

        <main className="lg:col-span-3 mt-8 lg:mt-0">
          {showCategoryCards ? (
            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Shop by Category</h2>
                    <p className="mt-2 text-muted-foreground">Click a category to start exploring our products.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((category) => (
                    <div 
                        key={category.slug} 
                        onClick={() => setSelectedCategories([category.slug])}
                        className="relative group aspect-[4/3] rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                        <Image 
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            data-ai-hint={category.dataAiHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-300" />
                        <div className="relative z-10 flex flex-col items-start justify-end h-full p-6 text-white">
                            <h3 className="text-2xl lg:text-3xl font-bold tracking-tight drop-shadow-md">{category.name}</h3>
                            <div className="mt-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 flex items-center gap-2 text-sm font-semibold">
                                <span>View Collection</span>
                                <ArrowRight className="h-4 w-4"/>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <p className="text-lg font-medium">{filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''} found</p>
                <Select value={sortOrder} onValueChange={setSortOrder}>
                  <SelectTrigger className="w-full sm:w-[200px]">
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
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredAndSortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 border-2 border-dashed rounded-lg flex flex-col items-center">
                    <Frown className="w-16 h-16 text-muted-foreground/50 mb-4" />
                    <p className="text-xl font-semibold">No products found</p>
                    <p className="text-muted-foreground mt-2">Try adjusting your filters or clearing them to see all products.</p>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
