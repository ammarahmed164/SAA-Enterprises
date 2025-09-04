
import Link from 'next/link';
import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">SAA Scrubs</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              The future of lifestyle product purchasing, combining quality, reliability, and innovation.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link href="/orders" className="hover:text-primary transition-colors">Your Orders</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {categories.map(category => (
                <li key={category.slug}>
                  <Link href={`/products?category=${category.slug}`} className="hover:text-primary transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for the latest deals and product announcements.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit" className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted/60 py-4">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SAA Scrubs. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
