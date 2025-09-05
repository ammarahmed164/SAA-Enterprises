
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Youtube, Award } from 'lucide-react';
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
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Wavy Top Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="relative block w-[calc(100%+1.3px)] h-[150px]">
          <path fill="#f8fafc" fillOpacity="1" d="M0,192L80,176C160,160,320,128,480,133.3C640,139,800,181,960,186.7C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container relative z-20 pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Socials */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="SAA Enterprises" width={56} height={56} className="h-14 w-14 rounded-full bg-white/10 p-1" />
              <span className="text-2xl font-bold text-white">SAA Enterprises</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm">
              The future of lifestyle product purchasing, combining quality, reliability, and innovation.
            </p>
            <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                      <Button asChild variant="outline" size="icon" className="relative bg-gray-800/80 border-white/20 text-white hover:bg-gray-700/80 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110">
                          <div>
                              <social.icon className="h-5 w-5" />
                              <span className="sr-only">{social.name}</span>
                          </div>
                      </Button>
                    </a>
                ))}
            </div>
          </div>
          
          {/* Main Links */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Navigate</h4>
            <ul className="space-y-3">
                {mainLinks.map(link => (
                    <li key={link.name}>
                        <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
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
                        <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          {/* Our Commitment */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wider uppercase flex items-center gap-2"><Award className="h-5 w-5 text-accent"/> Our Commitment</h4>
            <p className="text-sm text-gray-400">
              We are dedicated to providing the highest quality products with unparalleled service. Your satisfaction is our mission.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black/30 py-4 relative z-20">
        <div className="container text-center text-sm text-gray-500">
          <span>&copy; {new Date().getFullYear()} SAA Enterprises. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
