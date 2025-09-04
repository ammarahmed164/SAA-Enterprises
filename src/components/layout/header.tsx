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
];

export default function Header() {
  const { cartCount } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-orange-100 via-white to-blue-100 backdrop-blur">
      <div className="container flex flex-col">
        {/* -------- Row 1: Search | Logo | Icons -------- */}
        <div className="flex h-20 items-center w-full">
          {/* Left: Search Bar */}
          <div className="flex flex-1 items-center">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 shadow-sm"
            />
            <Button
              variant="default"
              size="icon"
              className="rounded-r-full bg-blue-500 hover:bg-blue-600 text-white shadow-md"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Middle: Logo */}
          <div className="flex flex-1 justify-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="SAA Enterprises" width={64} height={64} className="h-16 w-16" />
            </Link>
          </div>

          {/* Right: Account + Cart */}
          <div className="flex flex-1 justify-end items-center gap-3 relative">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-orange-200 rounded-full"
            >
              <User className="h-5 w-5 text-blue-600" />
              <span className="sr-only">Account</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-orange-200 rounded-full"
            >
              <Link href="/cart" className="relative">
                <ShoppingCart className="h-5 w-5 text-blue-600" />
                {cartCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-4 w-4 justify-center rounded-full p-0 text-xs bg-orange-500 text-white"
                  >
                    {cartCount}
                  </Badge>
                )}
                <span className="sr-only">Shopping Cart</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* -------- Row 2: Navigation Menu -------- */}
        <nav className="flex justify-center gap-4 py-3 border-t">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium px-4 py-2 rounded-full transition-all duration-300",
                pathname === link.href
                  ? "bg-blue-500 text-white shadow-md scale-105"
                  : "bg-orange-100 text-blue-700 hover:bg-blue-100 hover:text-blue-900"
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
