
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories } from '@/lib/data';
import { Github, Twitter, Linkedin, Send } from 'lucide-react';
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-accent/90 text-accent-foreground border-t border-accent/20">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="SAA Enterprises" width={56} height={56} className="h-14 w-14 rounded-full" />
              <span className="text-2xl font-bold text-white">SAA Scrubs</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              The future of lifestyle product purchasing, combining quality, reliability, and innovation.
            </p>
            <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                    <Button key={social.name} variant="outline" size="icon" className="bg-white/5 border-white/10 text-white hover:bg-white/20 hover:text-white rounded-full">
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                    </Button>
                ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-white tracking-wider uppercase">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="/products" className="hover:text-accent transition-colors">All Products</Link></li>
                <li><Link href="/orders" className="hover:text-accent transition-colors">Your Orders</Link></li>
                <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white tracking-wider uppercase">Categories</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {categories.map(category => (
                  <li key={category.slug}>
                    <Link href={`/products?category=${category.slug}`} className="hover:text-accent transition-colors">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-semibold text-white tracking-wider uppercase">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for the latest deals and product announcements.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input 
                type="email" 
                placeholder="your.email@example.com" 
                className="bg-white/5 border-white/20 text-white placeholder:text-muted-foreground focus:ring-accent focus:border-accent"
              />
              <Button type="submit" size="icon" className="bg-accent hover:bg-accent/90 text-white flex-shrink-0">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/30 py-6">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SAA Scrubs. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
