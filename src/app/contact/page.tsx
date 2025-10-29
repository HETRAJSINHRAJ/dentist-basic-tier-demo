"use client";

import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactPage() {
  const visibleSections = useScrollAnimation();
  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/20 pt-32 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 animate-fade-in" variant="secondary">
              Contact Us
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-100">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Have questions or ready to schedule an appointment? We would love to hear from you.
              Reach out to us and we will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section
        id="contact-info-section"
        data-animate-section
        className={`py-20 bg-background transition-all duration-1000 ${
          visibleSections.has('contact-info-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`space-y-6 transition-all duration-700 ${
              visibleSections.has('contact-info-section') ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our friendly staff is available to answer your questions and schedule your
                  appointment. We look forward to seeing you!
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '(555) 123-4567',
                    subtitle: 'Call us for appointments and inquiries',
                    delay: 0
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'info@dentalcare.com',
                    subtitle: 'We will respond within 24 hours',
                    delay: 100
                  },
                  {
                    icon: MapPin,
                    title: 'Location',
                    content: '123 Dental Street, Suite 100\nCity, ST 12345',
                    subtitle: 'Free parking available',
                    delay: 200
                  }
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    style={{
                      animation: visibleSections.has('contact-info-section') ? `fadeInUp 0.6s ease-out ${item.delay}ms backwards` : 'none'
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <item.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card
                className="bg-primary text-white group hover:shadow-xl transition-all duration-300"
                style={{
                  animation: visibleSections.has('contact-info-section') ? 'fadeInUp 0.6s ease-out 300ms backwards' : 'none'
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <Clock className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Monday - Thursday:</span>
                          <span className="font-medium">8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Friday:</span>
                          <span className="font-medium">8:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span className="font-medium">9:00 AM - 2:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="font-medium">Closed</span>
                        </div>
                      </div>
                      <p className="text-sm mt-4 opacity-90">
                        Emergency services available 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-700 delay-200 ${
              visibleSections.has('contact-info-section') ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        id="map-section"
        data-animate-section
        className={`py-0 bg-background transition-all duration-1000 ${
          visibleSections.has('map-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className={`overflow-hidden hover:shadow-xl transition-all duration-700 ${
            visibleSections.has('map-section') ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            <div className="aspect-21/9 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98823492346494!3d40.75889737139185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </Card>
        </div>
      </section>

      {/* Emergency CTA */}
      <section
        id="emergency-section"
        data-animate-section
        className={`py-20 bg-destructive/10 transition-all duration-1000 ${
          visibleSections.has('emergency-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          visibleSections.has('emergency-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            Dental Emergency?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            If you are experiencing a dental emergency, please call us immediately.
            We offer same-day emergency appointments.
          </p>
          <a
            href="tel:5551234567"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-white hover:bg-destructive/90 hover:scale-105 hover:shadow-xl h-11 px-8"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Emergency Line
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}