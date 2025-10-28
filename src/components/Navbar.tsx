"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                DentalCare
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Button asChild className="ml-4 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group">
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                Book Appointment
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-primary/10 transition-colors duration-300"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    animation: `fadeInUp 0.3s ease-out ${index * 0.05}s backwards`
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full shadow-lg shadow-primary/20 group">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Phone className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}