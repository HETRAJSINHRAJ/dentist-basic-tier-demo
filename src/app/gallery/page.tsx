"use client";

import type { Metadata } from 'next';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      category: 'office',
      title: 'Reception Area',
    },
    {
      src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop',
      category: 'office',
      title: 'Modern Treatment Room',
    },
    {
      src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      category: 'office',
      title: 'Dental Equipment',
    },
    {
      src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop',
      category: 'office',
      title: 'Waiting Area',
    },
    {
      src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop',
      category: 'treatments',
      title: 'Dental Checkup',
    },
    {
      src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop',
      category: 'treatments',
      title: 'Teeth Whitening',
    },
    {
      src: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=600&fit=crop',
      category: 'treatments',
      title: 'Dental Implant Procedure',
    },
    {
      src: 'https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=800&h=600&fit=crop',
      category: 'treatments',
      title: 'Orthodontic Treatment',
    },
    {
      src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      category: 'team',
      title: 'Our Dental Team',
    },
    {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      category: 'team',
      title: 'Dr. Johnson with Patient',
    },
    {
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      category: 'results',
      title: 'Smile Transformation',
    },
    {
      src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      category: 'results',
      title: 'Before & After Whitening',
    },
    {
      src: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=600&fit=crop',
      category: 'results',
      title: 'Dental Implant Result',
    },
    {
      src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      category: 'results',
      title: 'Orthodontic Success',
    },
    {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      category: 'office',
      title: 'Sterilization Room',
    },
    {
      src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop',
      category: 'office',
      title: 'Consultation Room',
    },
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter);

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4" variant="secondary">
              Gallery
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              See Our Work & Facility
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Take a look at our modern dental practice, meet our team, and see the beautiful 
              smiles we have helped create.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Tabs value={filter} onValueChange={setFilter} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto gap-2">
                <TabsTrigger value="all" className="py-3">All Photos</TabsTrigger>
                <TabsTrigger value="office" className="py-3">Our Office</TabsTrigger>
                <TabsTrigger value="treatments" className="py-3">Treatments</TabsTrigger>
                <TabsTrigger value="team" className="py-3">Our Team</TabsTrigger>
                <TabsTrigger value="results" className="py-3">Results</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
          {selectedImage !== null && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-xl font-semibold">{filteredImages[selectedImage].title}</h3>
                <p className="text-sm text-white/80">
                  {selectedImage + 1} of {filteredImages.length}
                </p>
              </div>

              {selectedImage > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
              )}

              {selectedImage < filteredImages.length - 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}