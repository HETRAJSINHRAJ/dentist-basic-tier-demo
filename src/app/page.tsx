"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
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
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    setMounted(true);
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set(prev).add(entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
      {/* Hero Section - Enhanced Premium Version */}
      <section className="relative bg-linear-to-br from-primary/5 via-background to-secondary/10 pt-32 xl:pt-40 pb-40 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 animate-gradient" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating Gradient Orbs for Premium Feel */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float animation-delay-300 opacity-40"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Premium Badge with Animation */}
              <Badge className="mb-6 bg-linear-to-r from-primary/10 to-primary/5 text-primary border-primary/20 hover:bg-primary/15 hover:scale-105 transition-all duration-300 hover-glow animate-fade-in" variant="secondary">
                <Award className="h-3 w-3 mr-1.5 animate-smooth-bounce" />
                Award-Winning Care
              </Badge>

              {/* Enhanced Typography with Gradient Accent */}
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
                Your Smile is Our{' '}
                <span className="gradient-text inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                  Passion
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl animate-fade-in-up animation-delay-100">
                Experience exceptional dental care with our team of expert dentists.
                We combine cutting-edge technology with gentle, personalized care.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up animation-delay-200">
                <Button
                  size="lg"
                  asChild
                  className="group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden"
                >
                  <Link href="/contact">
                    <span className="relative text-white z-10">Book Appointment</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                    <span className="absolute inset-0 bg-linear-to-r from-primary via-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </div>

              {/* Enhanced Feature Badges */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-muted-foreground animate-fade-in-up animation-delay-300">
                <div className="flex items-center gap-2 group cursor-default hover-lift rounded-lg px-3 py-2 -ml-3">
                  <CheckCircle2 className="h-5 w-5 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <span className="group-hover:text-foreground transition-colors duration-300">Same-Day Appointments</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default hover-lift rounded-lg px-3 py-2 -ml-3">
                  <CheckCircle2 className="h-5 w-5 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <span className="group-hover:text-foreground transition-colors duration-300">Flexible Payment Plans</span>
                </div>
              </div>
            </div>

            {/* Enhanced Image Container with Premium Effects */}
            <div className={`relative h-[550px] rounded-3xl overflow-hidden transition-all duration-1000 delay-200 hover-lift ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Multi-layered Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/30 via-primary/10 to-transparent z-10 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-linear-to-bl from-secondary/20 to-transparent z-10"></div>

              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 z-20 opacity-0 hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 animate-shimmer"></div>
              </div>

              {/* Premium Border Glow */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/10 z-30 pointer-events-none"></div>

              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop"
                alt="Dental Care"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats-section"
        data-animate-section
        className={`py-20 bg-linear-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('stats-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
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
                className="text-center group cursor-default hover-lift"
                style={{
                  animation: visibleSections.has('stats-section') ? `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` : 'none'
                }}
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-90 group-hover:scale-125 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" />
                <div className="font-serif text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services-section"
        data-animate-section
        className={`py-28 bg-background transition-all duration-1000 ${
          visibleSections.has('services-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${
            visibleSections.has('services-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:scale-105 transition-transform duration-300" variant="secondary">
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
                  animation: visibleSections.has('services-section') ? `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` : 'none'
                }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className={`text-center transition-all duration-700 delay-500 ${
            visibleSections.has('services-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Button size="lg" variant="outline" asChild className="group hover:bg-secondary/50 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-md">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Our Dentists Section */}
      <section
        id="dentists-section"
        data-animate-section
        className={`py-12 bg-linear-to-br from-secondary/20 via-secondary/10 to-background transition-all duration-1000 ${
          visibleSections.has('dentists-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${
            visibleSections.has('dentists-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:scale-105 transition-transform duration-300" variant="secondary">
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
                  animation: visibleSections.has('dentists-section') ? `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` : 'none'
                }}
              >
                <DentistCard {...dentist} />
              </div>
            ))}
          </div>
          <div className={`text-center transition-all duration-700 delay-500 ${
            visibleSections.has('dentists-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Button size="lg" variant="outline" asChild className="group hover:bg-secondary/50 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-md">
              <Link href="/about">
                Meet the Full Team
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials-section"
        data-animate-section
        className={`py-28 bg-background transition-all duration-1000 ${
          visibleSections.has('testimonials-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${
            visibleSections.has('testimonials-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:scale-105 transition-transform duration-300" variant="secondary">
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
      <section
        id="cta-section"
        data-animate-section
        className={`py-28 bg-linear-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('cta-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative transition-all duration-700 ${
          visibleSections.has('cta-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <Clock className="h-16 w-16 mx-auto mb-8 opacity-90 hover:scale-125 hover:rotate-12 transition-all duration-300 animate-float" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg mb-10 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Schedule your appointment today and take the first step towards a healthier,
            more confident smile. Our friendly team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="group shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              <Link href="/contact">
                Book Appointment
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300" asChild>
              <Link href="tel:5551234567">Call (555) 123-4567</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}