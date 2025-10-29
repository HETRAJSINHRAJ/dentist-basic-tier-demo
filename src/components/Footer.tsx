import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 hover-glow">
                <span className="text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">D</span>
              </div>
              <span className="font-serif text-2xl text-white font-bold group-hover:text-primary transition-colors duration-300">DentalCare</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md leading-relaxed">
              Providing exceptional dental care with a gentle touch. Your smile is our passion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 group">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300">123 Dental Street, Suite 100, City, ST 12345</span>
              </li>
              <li className="flex items-center space-x-2 group">
                <Phone className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 group">
                <Mail className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300">info@dentalcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-white">
          <p className='text-white'>&copy; {new Date().getFullYear()} DentalCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
