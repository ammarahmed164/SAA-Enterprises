
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
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


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
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-orange-400 via-rose-300 to-blue-400 shadow-md backdrop-blur-lg">
      <div className="container flex flex-col">
        {/* -------- Row 1: Search | Logo | Icons -------- */}
        <div className="flex h-24 items-center w-full">
          {/* Left: Search Bar (Desktop) / Hamburger (Mobile) */}
          <div className="flex w-1/3 items-center">
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
            <div className="hidden md:flex items-center">
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
          <div className="flex w-1/3 justify-center items-center">
            <Link href="/" className="flex items-center group">
              <motion.div 
                className="p-1 rounded-full bg-gradient-to-tr from-orange-400 via-blue-500 to-teal-400 shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  scale: [1, 1.03, 1],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                 <div className="bg-white/80 p-1.5 rounded-full">
                    <Image
                      src="/logo.png"
                      alt="SAA Scrubs Logo"
                      width={120}
                      height={120}
                      className="h-28 w-28 object-contain"
                    />
                 </div>
              </motion.div>
            </Link>
          </div>

          {/* Right: Account + Cart */}
          <div className="flex w-1/3 justify-end items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild className="group relative">
                    <Link href="/login">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 animate-pulse"></div>
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                        <User className="h-6 w-6" />
                      </div>
                      <span className="sr-only">Account</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Login / Signup</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                   <Button variant="ghost" size="icon" asChild className="group relative">
                      <Link href="/cart" className="relative">
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 animate-pulse"></div>
                          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                            <ShoppingCart className="h-6 w-6" />
                          </div>
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
                </TooltipTrigger>
                <TooltipContent>
                  <p>Shopping Cart</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
