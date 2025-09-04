"use client";

import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/orders", label: "My Orders" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const { cartCount } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full"
            >
              <Link href="/cart" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 justify-center rounded-full p-0 text-xs"
                  >
                    {cartCount}
                  </Badge>
                )}
                <span className="sr-only">Shopping Cart</span>
              </Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
