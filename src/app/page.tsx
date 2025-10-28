"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import DentistCard from '@/components/DentistCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Badge } from '@/components/ui/badge';
import {
  Smile,
  Sparkles,
  Shield,
  Award,
  Users,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  const services = [
    {
      title: 'General Dentistry',
      description: 'Comprehensive dental care including checkups, cleanings, and preventive treatments.',
      icon: Smile,
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with whitening, veneers, and aesthetic treatments.',
      icon: Sparkles,
    },
    {
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth with natural-looking results.',
      icon: Shield,
    },
    {
      title: 'Orthodontics',
      description: 'Straighten your teeth with braces or clear aligners for a perfect smile.',
      icon: Award,
    },
  ];

  const dentists = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'General & Cosmetic Dentistry',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Orthodontics',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
    },
    {
      name: 'Dr. Emily Davis',
      specialty: 'Periodontics',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
    },
  ];

  const testimonials = [
    {
      name: 'Jennifer Smith',
      text: 'The best dental experience I have ever had! The staff is incredibly friendly and professional. Dr. Johnson made me feel comfortable throughout my entire treatment.',
      rating: 5,
      date: 'January 2024',
    },
    {
      name: 'Robert Martinez',
      text: 'I was nervous about getting dental implants, but Dr. Chen and his team made the process smooth and painless. I could not be happier with the results!',
      rating: 5,
      date: 'December 2023',
    },
    {
      name: 'Lisa Anderson',
      text: 'Outstanding service! The office is modern and clean, and they use the latest technology. I highly recommend DentalCare to anyone looking for quality dental care.',
      rating: 5,
      date: 'November 2023',
    },
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Patients' },
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: Smile, value: '50,000+', label: 'Procedures Done' },
    { icon: Calendar, value: '98%', label: 'Satisfaction Rate' },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors duration-300" variant="secondary">
                <Award className="h-3 w-3 mr-1.5" />
                Award-Winning Care
              </Badge>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Your Smile is Our{' '}
                <span className="text-primary inline-block hover:scale-105 transition-transform duration-300">Passion</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
                Experience exceptional dental care with our team of expert dentists. 
                We combine cutting-edge technology with gentle, personalized care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" asChild className="group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                  <Link href="/contact">
                    Book Appointment
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover:bg-secondary/50 transition-all duration-300">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 group">
                  <CheckCircle2 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span>Same-Day Appointments</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <CheckCircle2 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span>Flexible Payment Plans</span>
                </div>
              </div>
            </div>
            <div className={`relative h-[550px] rounded-3xl overflow-hidden transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop"
                alt="Dental Care"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-default"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
                <div className="font-serif text-5xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20" variant="secondary">
              Our Services
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Dental Care
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From routine checkups to advanced procedures, we offer a full range of 
              dental services to keep your smile healthy and beautiful.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" asChild className="group hover:bg-secondary/50 transition-all duration-300">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Our Dentists Section */}
      <section className="py-28 bg-gradient-to-br from-secondary/20 via-secondary/10 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20" variant="secondary">
              <Users className="h-3 w-3 mr-1.5" />
              Our Team
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Expert Dentists
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our experienced team of dental professionals is committed to providing 
              you with the highest quality care in a comfortable environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {dentists.map((dentist, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                <DentistCard {...dentist} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" asChild className="group hover:bg-secondary/50 transition-all duration-300">
              <Link href="/about">
                Meet the Full Team
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20" variant="secondary">
              Testimonials
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Do not just take our word for it. Here is what our patients have to say 
              about their experience with DentalCare.
            </p>
          </div>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
          <Clock className="h-16 w-16 mx-auto mb-8 opacity-90 hover:scale-110 hover:rotate-12 transition-all duration-300" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg mb-10 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Schedule your appointment today and take the first step towards a healthier, 
            more confident smile. Our friendly team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="group shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">
                Book Appointment
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300" asChild>
              <Link href="tel:5551234567">Call (555) 123-4567</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}