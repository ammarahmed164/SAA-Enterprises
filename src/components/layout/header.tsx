
'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/use-cart';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/orders', label: 'My Orders' },
];

export default function Header() {
  const { cartCount } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col">
        <div className="flex h-20 items-center w-full">
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold hidden sm:inline-block">SAA Scrubs</span>
            </Link>
          </div>

          <nav className="hidden md:flex flex-1 justify-center items-center gap-6 mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary font-semibold" : "text-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
          </nav>
          
          <div className="flex-1 flex justify-end items-center gap-3">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="/cart">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute top-1 right-1 h-4 w-4 justify-center rounded-full p-0 text-xs bg-accent text-accent-foreground"
                    >
                      {cartCount}
                    </Badge>
                  )}
                  <span className="sr-only">Shopping Cart</span>
                </Link>
              </Button>
          </div>
        </div>
        
        <nav className="md:hidden flex flex-wrap justify-center items-center gap-x-4 gap-y-2 pb-4 border-t pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary font-semibold" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}
