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
    <Card className="h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-8 relative">
        <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
        <div className="flex items-center mb-4 gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 transition-all duration-300 ${
                i < rating 
                  ? 'fill-yellow-400 text-yellow-400 group-hover:scale-110' 
                  : 'text-gray-300'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed">{text}</p>
        <div className="border-t border-border/50 pt-4">
          <p className="font-semibold text-foreground font-serif">{name}</p>
          {date && <p className="text-xs text-muted-foreground mt-1">{date}</p>}
        </div>
      </CardContent>
    </Card>
  );
}