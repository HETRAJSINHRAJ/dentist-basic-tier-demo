"use client";

import Footer from '@/components/Footer';
import DentistCard from '@/components/DentistCard';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Users, Trophy, CheckCircle2, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutPage() {
  const visibleSections = useScrollAnimation();
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'General & Cosmetic Dentistry',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
      bio: 'With over 15 years of experience, Dr. Johnson specializes in creating beautiful, healthy smiles through comprehensive dental care.',
      education: [
        'DDS, Harvard School of Dental Medicine',
        'Advanced Cosmetic Dentistry Certification',
        'Member, American Dental Association',
      ],
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Orthodontics',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
      bio: 'Dr. Chen is an expert in orthodontics, helping patients achieve perfectly aligned smiles with the latest techniques and technologies.',
      education: [
        'DDS, UCLA School of Dentistry',
        'MS in Orthodontics, Columbia University',
        'Invisalign Platinum Provider',
      ],
    },
    {
      name: 'Dr. Emily Davis',
      specialty: 'Periodontics',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
      bio: 'Specializing in gum health and dental implants, Dr. Davis provides exceptional periodontal care with a gentle touch.',
      education: [
        'DDS, University of Michigan',
        'Periodontics Residency, NYU',
        'Board Certified Periodontist',
      ],
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Endodontics',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop',
      bio: 'Dr. Wilson excels in root canal therapy and dental trauma, using advanced technology to ensure comfortable, successful treatments.',
      education: [
        'DDS, University of Pennsylvania',
        'Endodontics Certificate, Boston University',
        'American Board of Endodontics',
      ],
    },
    {
      name: 'Dr. Rachel Martinez',
      specialty: 'Pediatric Dentistry',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
      bio: 'Dr. Martinez creates positive dental experiences for children, building trust and healthy habits that last a lifetime.',
      education: [
        'DDS, University of California, San Francisco',
        'Pediatric Dentistry Residency, Stanford',
        'Diplomate, American Board of Pediatric Dentistry',
      ],
    },
    {
      name: 'Dr. David Thompson',
      specialty: 'Oral Surgery',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop',
      bio: 'With expertise in complex extractions and jaw surgery, Dr. Thompson provides comprehensive oral surgical care.',
      education: [
        'DDS, Johns Hopkins University',
        'Oral Surgery Residency, Mayo Clinic',
        'Fellow, American Association of Oral Surgeons',
      ],
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: 'ADA Accredited',
      description: 'Fully accredited by the American Dental Association',
    },
    {
      icon: Trophy,
      title: 'Best Practice Award',
      description: 'Top Dental Practice 2023 - Local Health Magazine',
    },
    {
      icon: CheckCircle2,
      title: 'Board Certified',
      description: 'All dentists are board certified in their specialties',
    },
    {
      icon: Target,
      title: 'Quality Standards',
      description: 'Exceeds all state and federal quality standards',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 animate-fade-in" variant="secondary">
              About Us
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-100">
              Caring for Smiles Since 1998
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              At DentalCare, we believe that exceptional dental care goes beyond treating teeth.
              It is about building lasting relationships, creating comfortable experiences, and
              helping our patients achieve their best smiles.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        id="story-section"
        data-animate-section
        className={`py-20 bg-background transition-all duration-1000 ${
          visibleSections.has('story-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${
              visibleSections.has('story-section') ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
              <Badge className="mb-4 hover:scale-105 transition-transform duration-300" variant="secondary">
                Our Story
              </Badge>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                A Legacy of Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1998 by Dr. Sarah Johnson, DentalCare began with a simple mission:
                  to provide compassionate, high-quality dental care to our community. What started
                  as a small practice has grown into a comprehensive dental center serving over
                  10,000 patients.
                </p>
                <p>
                  Our success is built on a foundation of trust, innovation, and genuine care for
                  our patients. We invest in the latest dental technology and ongoing education to
                  ensure we are always providing the most advanced treatments available.
                </p>
                <p>
                  Today, our team of six specialized dentists and experienced staff work together
                  to create a welcoming environment where patients of all ages feel comfortable
                  and confident in their dental care.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="group cursor-default">
                  <div className="text-3xl font-serif font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">25+</div>
                  <div className="text-sm text-muted-foreground">Years of Service</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-3xl font-serif font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-3xl font-serif font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">6</div>
                  <div className="text-sm text-muted-foreground">Expert Dentists</div>
                </div>
              </div>
            </div>
            <div className={`relative h-[600px] rounded-2xl overflow-hidden shadow-xl group transition-all duration-700 delay-200 ${
              visibleSections.has('story-section') ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop"
                alt="Our Practice"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        id="values-section"
        data-animate-section
        className={`py-20 bg-secondary/30 transition-all duration-1000 ${
          visibleSections.has('values-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            visibleSections.has('values-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Badge className="mb-4 hover:scale-105 transition-transform duration-300" variant="secondary">
              Our Values
            </Badge>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Compassionate Care',
                description: 'We treat every patient with kindness, understanding, and respect, ensuring a comfortable experience at every visit.',
                delay: 0
              },
              {
                icon: Award,
                title: 'Clinical Excellence',
                description: 'Our commitment to continuing education and advanced technology ensures the highest standard of dental care.',
                delay: 100
              },
              {
                icon: Users,
                title: 'Community Focus',
                description: 'We are proud to be part of this community, supporting local initiatives and providing care to those in need.',
                delay: 200
              }
            ].map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{
                  animation: visibleSections.has('values-section') ? `fadeInUp 0.6s ease-out ${value.delay}ms backwards` : 'none'
                }}
              >
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  <h3 className="font-serif text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team-section"
        data-animate-section
        className={`py-20 bg-background transition-all duration-1000 ${
          visibleSections.has('team-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            visibleSections.has('team-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Badge className="mb-4 hover:scale-105 transition-transform duration-300" variant="secondary">
              Our Team
            </Badge>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Dentists
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of specialists ensures comprehensive care for all your dental needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((dentist, index) => (
              <div
                key={index}
                style={{
                  animation: visibleSections.has('team-section') ? `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` : 'none'
                }}
              >
                <DentistCard {...dentist} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications-section"
        data-animate-section
        className={`py-20 bg-primary text-white transition-all duration-1000 ${
          visibleSections.has('certifications-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            visibleSections.has('certifications-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="font-serif text-4xl font-bold mb-4">
              Accreditations & Certifications
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our commitment to excellence is recognized by leading dental organizations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center group cursor-default"
                style={{
                  animation: visibleSections.has('certifications-section') ? `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` : 'none'
                }}
              >
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <cert.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-transform duration-300">{cert.title}</h3>
                <p className="text-sm opacity-90">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Tour Section */}
      <section
        id="office-section"
        data-animate-section
        className={`py-20 bg-background transition-all duration-1000 ${
          visibleSections.has('office-section') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            visibleSections.has('office-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Badge className="mb-4 hover:scale-105 transition-transform duration-300" variant="secondary">
              Our Facility
            </Badge>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              State-of-the-Art Office
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a virtual tour of our modern, comfortable dental practice designed with your
              comfort and care in mind.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-80 rounded-xl overflow-hidden shadow-lg group"
                style={{
                  animation: visibleSections.has('office-section') ? `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` : 'none'
                }}
              >
                <img
                  src={image}
                  alt={`Office ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}