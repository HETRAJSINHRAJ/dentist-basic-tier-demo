import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  date?: string;
}

export default function TestimonialCard({ name, text, rating, date }: TestimonialCardProps) {
  return (
    <Card className="h-full group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm hover-lift relative overflow-hidden">
      {/* Subtle gradient background on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

      <CardContent className="p-8 relative z-10">
        <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6 group-hover:scale-125 group-hover:rotate-12 group-hover:text-primary/30 transition-all duration-300" />
        <div className="flex items-center mb-4 gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 transition-all duration-300 ${
                i < rating
                  ? 'fill-yellow-400 text-yellow-400 group-hover:scale-110 group-hover:rotate-12'
                  : 'text-gray-300'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{text}</p>
        <div className="border-t border-border/50 group-hover:border-primary/20 pt-4 transition-colors duration-300">
          <p className="font-semibold text-foreground font-serif group-hover:text-primary transition-colors duration-300">{name}</p>
          {date && <p className="text-xs text-muted-foreground mt-1">{date}</p>}
        </div>
      </CardContent>
    </Card>
  );
}