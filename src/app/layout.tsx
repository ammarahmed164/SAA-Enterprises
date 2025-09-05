
import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Chatbot from '@/components/chatbot';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});


export const metadata: Metadata = {
  title: 'SAA Enterprises',
  description: 'Your one-stop shop for surgical business products.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )} suppressHydrationWarning={true}>
        <Providers>
          <div className="relative flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Chatbot />
        </Providers>
      </body>
    </html>
  );
}
