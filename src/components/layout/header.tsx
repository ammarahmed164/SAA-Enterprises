
'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react';
import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/use-cart';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from 'react';
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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Top bar for search, logo, and actions */}
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Left: Search Bar */}
          <div className="hidden lg:flex items-center flex-1">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search for products..." className="pl-9 bg-muted/50 border-none focus-visible:ring-primary focus-visible:bg-background" />
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background p-0">
                <div className="p-6">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold mb-6"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="font-bold text-xl">SAA Scrubs</span>
                  </Link>
                  <nav className="grid gap-4 text-lg font-medium">
                    {navLinks.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "text-muted-foreground transition-colors hover:text-foreground",
                          pathname === link.href && "text-foreground font-semibold"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search..." className="pl-9" />
                    </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Center: Logo */}
          <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <Logo className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold sm:inline-block">SAA Scrubs</span>
              </Link>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center justify-end gap-2 sm:gap-4 flex-1">
            <Button variant="ghost" className="hidden sm:flex items-center gap-2">
              <User className="h-5 w-5" />
              <div className="text-left text-sm">
                <p className="text-xs text-muted-foreground">Sign In</p>
                <p className="font-medium">Account</p>
              </div>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex relative">
                <Heart className="h-5 w-5"/>
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 justify-center rounded-full p-0 text-xs bg-accent text-accent-foreground">0</Badge>
                <span className="sr-only">Wishlist</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 justify-center rounded-full p-0 text-xs bg-accent text-accent-foreground"
                  >
                    {cartCount}
                  </Badge>
                )}
                <span className="sr-only">Shopping Cart</span>
              </Link>
            </Button>
             <Button variant="ghost" size="icon" className="sm:hidden">
              <User className="h-6 w-6" />
               <span className="sr-only">Account</span>
            </Button>
          </div>
        </div>

      </div>
        {/* Bottom bar for navigation */}
        <nav className="hidden lg:flex justify-center items-center h-12 border-t bg-muted/30">
            {navLinks.map((link, index) => (
               <div key={link.href} className="flex items-center h-full">
                <Link
                    href={link.href}
                    className={cn(
                    "px-6 text-sm font-medium transition-colors hover:text-primary h-full flex items-center",
                    pathname === link.href ? "text-primary font-semibold" : "text-foreground/80"
                    )}
                >
                    {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                    <div className="h-1/3 w-px bg-border"></div>
                )}
               </div>
          ))}
        </nav>
    </header>
  );
}
