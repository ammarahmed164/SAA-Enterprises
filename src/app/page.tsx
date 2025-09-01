import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, HeartPulse, Microscope, Stethoscope, Syringe } from 'lucide-react';
import { products } from '@/lib/data';
import ProductCard from '@/components/product-card';

const categoryIcons: Record<string, JSX.Element> = {
  'Surgical Instruments': <HeartPulse className="h-8 w-8 text-primary" />,
  'Medical Disposables': <Syringe className="h-8 w-8 text-primary" />,
  'Diagnostic Equipment': <Stethoscope className="h-8 w-8 text-primary" />,
  'Hospital Furniture': <Microscope className="h-8 w-8 text-primary" />,
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[calc(100vh-64px)] w-full">
        <Image
          src="https://picsum.photos/1920/1080?random=hero"
          alt="Surgical instruments laid out on a sterile surface"
          fill
          className="object-cover"
          priority
          data-ai-hint="surgical instruments sterile"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="container text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter !font-headline drop-shadow-lg">
              Precision Tools for Modern Healthcare
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90 drop-shadow">
              Equip your practice with the highest quality surgical supplies, delivered with reliability and care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-transform hover:scale-105">
                <Link href="#">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
            <p className="mt-2 text-muted-foreground">Find exactly what you need from our curated selection.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {Object.entries(categoryIcons).map(([category, icon]) => (
              <Link href={`/products?category=${category.toLowerCase().replace(' ', '-')}`} key={category}>
                <Card className="text-center p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full flex flex-col justify-center items-center">
                  <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">{icon}</div>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="container">
          <div className="flex justify-between items-baseline mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
              <p className="mt-2 text-muted-foreground">Top-rated and bestselling items from our catalog.</p>
            </div>
            <Button asChild variant="link" className="text-primary hidden sm:flex">
              <Link href="/products">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight">Your Trusted Partner in Surgical Excellence</h2>
            <p className="text-muted-foreground text-lg mt-4">
              At MediShop, we're committed to providing not just products, but solutions. Our dedication to quality, innovation, and customer satisfaction sets us apart.
            </p>
            <ul className="space-y-6 mt-8">
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">Uncompromising Quality</h4>
                  <p className="text-muted-foreground text-sm">Every product is vetted for quality and compliance with industry standards.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">Fast & Reliable Shipping</h4>
                  <p className="text-muted-foreground text-sm">Get what you need, when you need it, with our efficient logistics network.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">Expert Support</h4>
                  <p className="text-muted-foreground text-sm">Our team of specialists and our AI assistant are here to help you 24/7.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://picsum.photos/800/600?random=team"
              alt="Team of doctors collaborating"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
              data-ai-hint="doctors team"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
