import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="font-serif text-2xl font-bold">DentalCare</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Providing exceptional dental care with a gentle touch. Your smile is our passion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">123 Dental Street, Suite 100, City, ST 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-slate-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-slate-300">info@dentalcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-white">
          <p>&copy; {new Date().getFullYear()} DentalCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
