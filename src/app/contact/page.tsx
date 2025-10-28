import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - DentalCare | Schedule Your Appointment',
  description: 'Get in touch with DentalCare. Schedule an appointment, ask questions, or contact us for emergency dental care. Call (555) 123-4567 or visit us at 123 Dental Street.',
  openGraph: {
    title: 'Contact Us - DentalCare | Schedule Your Appointment',
    description: 'Get in touch with DentalCare. Schedule an appointment or contact us for emergency dental care.',
    images: ['https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=630&fit=crop'],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4" variant="secondary">
              Contact Us
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions or ready to schedule an appointment? We would love to hear from you. 
              Reach out to us and we will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
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
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Phone</h3>
                        <p className="text-muted-foreground">(555) 123-4567</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Call us for appointments and inquiries
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-muted-foreground">info@dentalcare.com</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          We will respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Location</h3>
                        <p className="text-muted-foreground">
                          123 Dental Street, Suite 100
                          <br />
                          City, ST 12345
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Free parking available
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Business Hours */}
              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6" />
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
            <div>
              <Card>
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
      <section className="py-0 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className="aspect-[21/9] relative">
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
      <section className="py-20 bg-destructive/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            Dental Emergency?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            If you are experiencing a dental emergency, please call us immediately. 
            We offer same-day emergency appointments.
          </p>
          <a
            href="tel:5551234567"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-white hover:bg-destructive/90 h-11 px-8"
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