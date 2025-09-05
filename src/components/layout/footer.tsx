
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Youtube, Send, ShieldCheck, Award } from 'lucide-react';
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/ClassicSurgical' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/saaenterprises/' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@SAA.Enterprises' },
  ];

  const mainLinks = [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Products", href: "/products" },
      { name: "Contact Us", href: "/contact" },
  ]

  const legalLinks = [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
      { name: "My Orders", href: "/orders" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-accent/90 text-accent-foreground border-t border-accent/20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Socials */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="SAA Enterprises" width={56} height={56} className="h-14 w-14 rounded-full" />
              <span className="text-2xl font-bold text-white">SAA Enterprises</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              The future of lifestyle product purchasing, combining quality, reliability, and innovation.
            </p>
            <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                    <Button key={social.name} asChild variant="outline" size="icon" className="bg-white/5 border-white/10 text-white hover:bg-white/20 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-accent/30">
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                            <social.icon className="h-5 w-5" />
                            <span className="sr-only">{social.name}</span>
                        </a>
                    </Button>
                ))}
            </div>
          </div>
          
          {/* Main Links */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Navigate</h4>
            <ul className="space-y-3">
                {mainLinks.map(link => (
                    <li key={link.name}>
                        <Link href={link.href} className="text-muted-foreground text-sm hover:text-accent transition-colors">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Legal</h4>
            <ul className="space-y-3">
                {legalLinks.map(link => (
                    <li key={link.name}>
                        <Link href={link.href} className="text-muted-foreground text-sm hover:text-accent transition-colors">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          {/* Our Commitment */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wider uppercase flex items-center gap-2"><Award className="h-5 w-5 text-accent"/> Our Commitment</h4>
            <p className="text-sm text-muted-foreground">
              We are dedicated to providing the highest quality products with unparalleled service. Your satisfaction is our mission.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black/30 py-4">
        <div className="container text-center text-sm text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} SAA Enterprises. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
