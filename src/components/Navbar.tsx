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
    <header
      className={`bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-9999 transition-all duration-300 ${scrolled ? 'shadow-md bg-white/90' : 'shadow-sm'}`}
      style={{ position: 'fixed' }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="h-10 w-10 rounded-full bg-linear-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-primary/20 hover-glow">
                <span className="text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">D</span>
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
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
            <Button asChild className="ml-4 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 group hover:-translate-y-0.5 relative overflow-hidden">
              <Link href="/contact" className="flex items-center justify-center">
                <span className="relative z-10 flex items-center justify-center text-white">
                  <Phone className="mr-2 h-4 w-4 text-white group-hover:rotate-12 transition-transform duration-300" />
                  Book Appointment
                </span>
                <span className="absolute inset-0 bg-linear-to-r from-primary via-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-primary/10 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 animate-rotate-in" />
              ) : (
                <Menu className="h-6 w-6 animate-fade-in" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slide-in-down">
            <div className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 py-2 px-2 rounded-lg hover:bg-primary/5"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    animation: `fadeInUp 0.3s ease-out ${index * 0.05}s backwards`
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full shadow-lg shadow-primary/20 group hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 animate-fade-in-up animation-delay-300">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Phone className="mr-2 h-4 w-4 text-white group-hover:rotate-12 transition-transform duration-300" />
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