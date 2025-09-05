
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

  const paymentMethods = [
    { name: "Visa", image: "/visa.svg" },
    { name: "Mastercard", image: "/mastercard.svg" },
    { name: "PayPal", image: "/paypal.svg" },
    { name: "American Express", image: "/amex.svg" },
  ];


  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-accent/90 text-accent-foreground border-t border-accent/20">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand & Socials */}
          <div className="lg:col-span-4 space-y-6">
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

          {/* Our Commitment & Payments */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-8">
             <div className="space-y-4">
              <h4 className="font-semibold text-white tracking-wider uppercase flex items-center gap-2"><Award className="h-5 w-5 text-accent"/> Our Commitment</h4>
              <p className="text-sm text-muted-foreground">
                We are dedicated to providing the highest quality products with unparalleled service. Your satisfaction is our mission, and we stand behind every item we sell.
              </p>
            </div>
             <div className="space-y-4">
              <h4 className="font-semibold text-white tracking-wider uppercase flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-accent"/> Secure Payments</h4>
               <div className="flex items-center gap-3">
                {paymentMethods.map(method => (
                  <div key={method.name} className="bg-gray-200/80 p-1.5 rounded-md flex items-center justify-center h-8">
                     <Image src={`https://picsum.photos/48/32?random=${Math.random()}`} alt={method.name} width={32} height={20} className="object-contain" data-ai-hint="payment method"/>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-semibold text-white tracking-wider uppercase">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">Subscribe for the latest deals and product announcements.</p>
            <form action="#" className="flex w-full max-w-sm items-center space-x-2">
              <Input 
                type="email" 
                placeholder="your.email@example.com" 
                className="bg-white/5 border-white/20 text-white placeholder:text-muted-foreground focus:ring-accent focus:border-accent"
                required
              />
              <Button type="submit" size="icon" className="bg-accent hover:bg-accent/90 text-white flex-shrink-0">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-black/30 py-6">
        <div className="container text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
          <span>&copy; {new Date().getFullYear()} SAA Enterprises. All Rights Reserved.</span>
          <div className="flex gap-x-4">
            <Link href="/terms-and-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
