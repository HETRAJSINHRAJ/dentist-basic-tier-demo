"use client";

import { useState } from 'react';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Smile,
  Sparkles,
  Shield,
  Award,
  Heart,
  Baby,
  Siren,
  Pill,
  Scissors,
  Stethoscope,
  Sun,
  Target,
  Zap,
  Activity,
} from 'lucide-react';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ServicesPage() {
  const [filter, setFilter] = useState('all');
  const visibleSections = useScrollAnimation();

  const services = [
    {
      title: 'General Checkup',
      description: 'Comprehensive dental examination including X-rays, oral cancer screening, and personalized treatment planning.',
      icon: Smile,
      price: 'From $150',
      category: 'general',
    },
    {
      title: 'Teeth Cleaning',
      description: 'Professional cleaning to remove plaque, tartar, and stains, leaving your teeth fresh and healthy.',
      icon: Sparkles,
      price: 'From $100',
      category: 'general',
    },
    {
      title: 'Teeth Whitening',
      description: 'Professional whitening treatment to brighten your smile by several shades in just one visit.',
      icon: Sun,
      price: 'From $400',
      category: 'cosmetic',
    },
    {
      title: 'Dental Veneers',
      description: 'Custom-made porcelain shells to cover imperfections and create a flawless, natural-looking smile.',
      icon: Award,
      price: 'From $1,200/tooth',
      category: 'cosmetic',
    },
    {
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solution that looks, feels, and functions like natural teeth.',
      icon: Shield,
      price: 'From $2,500',
      category: 'restorative',
    },
    {
      title: 'Dental Crowns',
      description: 'Custom-fitted caps to restore damaged teeth, improving both function and appearance.',
      icon: Target,
      price: 'From $1,000',
      category: 'restorative',
    },
    {
      title: 'Root Canal Therapy',
      description: 'Advanced endodontic treatment to save infected teeth and relieve pain with modern techniques.',
      icon: Heart,
      price: 'From $800',
      category: 'restorative',
    },
    {
      title: 'Dental Bridges',
      description: 'Fill gaps from missing teeth with custom bridges that blend seamlessly with your natural smile.',
      icon: Activity,
      price: 'From $1,800',
      category: 'restorative',
    },
    {
      title: 'Orthodontics',
      description: 'Traditional braces and clear aligners to straighten teeth and correct bite issues.',
      icon: Zap,
      price: 'From $3,500',
      category: 'orthodontics',
    },
    {
      title: 'Invisalign',
      description: 'Clear, removable aligners for discreet teeth straightening without traditional braces.',
      icon: Award,
      price: 'From $4,500',
      category: 'orthodontics',
    },
    {
      title: 'Periodontal Treatment',
      description: 'Specialized care for gum disease, including deep cleaning and surgical procedures.',
      icon: Stethoscope,
      price: 'From $500',
      category: 'specialized',
    },
    {
      title: 'Oral Surgery',
      description: 'Expert surgical procedures including wisdom teeth removal and jaw surgery.',
      icon: Scissors,
      price: 'Varies',
      category: 'specialized',
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Gentle, child-friendly dental care to establish healthy habits from an early age.',
      icon: Baby,
      price: 'From $80',
      category: 'specialized',
    },
    {
      title: 'Emergency Dental Care',
      description: 'Same-day treatment for dental emergencies including severe pain, trauma, and infections.',
      icon: Siren,
      price: 'Varies',
      category: 'emergency',
    },
    {
      title: 'Sedation Dentistry',
      description: 'Safe, comfortable sedation options for anxious patients or complex procedures.',
      icon: Pill,
      price: 'From $200',
      category: 'specialized',
    },
  ];

  const filteredServices = filter === 'all' 
    ? services 
    : services.filter(service => service.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/20 pt-32 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 animate-fade-in" variant="secondary">
              Our Services
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-100">
              Comprehensive Dental Care
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              From routine checkups to advanced procedures, we offer a complete range of dental
              services to meet all your oral health needs in one convenient location.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services-list-section"
        data-animate-section
        className={`py-20 bg-background transition-all duration-1000 ${
          visibleSections.has('services-list-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 transition-all duration-700 ${
            visibleSections.has('services-list-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Tabs value={filter} onValueChange={setFilter} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto gap-2">
                <TabsTrigger value="all" className="py-3 transition-all duration-300">All Services</TabsTrigger>
                <TabsTrigger value="general" className="py-3 transition-all duration-300">General</TabsTrigger>
                <TabsTrigger value="cosmetic" className="py-3 transition-all duration-300">Cosmetic</TabsTrigger>
                <TabsTrigger value="restorative" className="py-3 transition-all duration-300">Restorative</TabsTrigger>
                <TabsTrigger value="orthodontics" className="py-3 transition-all duration-300">Orthodontics</TabsTrigger>
                <TabsTrigger value="specialized" className="py-3 transition-all duration-300">Specialized</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                style={{
                  animation: visibleSections.has('services-list-section') ? `fadeInUp 0.6s ease-out ${index * 0.05}s backwards` : 'none'
                }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta-section"
        data-animate-section
        className={`py-20 bg-linear-to-r from-primary to-primary/80 text-white transition-all duration-1000 ${
          visibleSections.has('cta-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          visibleSections.has('cta-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="font-serif text-4xl font-bold mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Schedule a consultation with our team and we will help you find the perfect
            treatment plan for your dental needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="hover:-translate-y-0.5 transition-all duration-300 hover:shadow-xl">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-lg"
              asChild
            >
              <Link href="tel:5551234567">Call (555) 123-4567</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section
        id="insurance-section"
        data-animate-section
        className={`py-20 bg-secondary/30 transition-all duration-1000 ${
          visibleSections.has('insurance-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-700 ${
            visibleSections.has('insurance-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Insurance & Payment Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              We accept most major dental insurance plans and offer flexible payment options
              to make quality dental care accessible to everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Delta Dental', 'MetLife', 'Aetna', 'Cigna', 'Guardian', 'United Healthcare'].map((insurance, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-6 py-3 text-base hover:scale-105 hover:border-primary/50 transition-all duration-300"
                  style={{
                    animation: visibleSections.has('insurance-section') ? `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` : 'none'
                  }}
                >
                  {insurance}
                </Badge>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">
              We also offer flexible payment plans and accept CareCredit financing.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}