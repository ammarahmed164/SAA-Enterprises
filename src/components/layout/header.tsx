"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

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
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-orange-300 via-rose-200 to-blue-300 shadow-md backdrop-blur-lg">
      <div className="container flex flex-col">
        {/* -------- Row 1: Search | Logo | Icons -------- */}
        <div className="flex h-24 items-center w-full">
          {/* Left: Search Bar (Desktop) / Hamburger (Mobile) */}
          <div className="flex flex-1 items-center md:flex-none">
             <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                   <nav className="flex flex-col gap-4 py-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsSheetOpen(false)}
                        className={cn(
                          "text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300",
                          pathname === link.href
                            ? "bg-blue-500 text-white shadow-md"
                            : "text-blue-700 hover:bg-blue-100 hover:text-blue-900"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden md:flex flex-1 items-center">
                <input
                type="text"
                placeholder="Search for products..."
                className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
                />
                <Button
                variant="default"
                size="icon"
                className="rounded-r-full bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all"
                >
                <Search className="h-5 w-5" />
                </Button>
            </div>
          </div>

          {/* Middle: Logo */}
          <div className="flex flex-1 justify-center items-center">
            <Link href="/" className="flex items-center group">
              <div className="p-1 rounded-full bg-white/50 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <Image
                  src="/logo.png"
                  alt="SAA Scrubs Logo"
                  width={90}
                  height={90}
                  className="h-20 w-20 object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Right: Account + Cart */}
          <div className="flex flex-1 justify-end items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-white/50 rounded-full transition-colors"
            >
              <User className="h-6 w-6 text-blue-700" />
              <span className="sr-only">Account</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-white/50 rounded-full transition-colors"
            >
              <Link href="/cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-blue-700" />
                {cartCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0 text-xs bg-orange-500 text-white border-2 border-white"
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
        <nav className="hidden md:flex justify-center gap-4 py-3 border-t border-white/30">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ease-out transform",
                pathname === link.href
                  ? "bg-blue-600/90 text-white shadow-lg scale-105"
                  : "bg-white/40 text-blue-800 hover:bg-white/80 hover:text-blue-900 hover:shadow-md"
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
