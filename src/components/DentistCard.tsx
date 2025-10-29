import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface DentistCardProps {
  name: string;
  specialty: string;
  image: string;
  bio?: string;
  education?: string[];
}

export default function DentistCard({ name, specialty, image, bio, education }: DentistCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30 hover-lift relative">
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-primary/0 group-hover:ring-primary/20 transition-all duration-500 pointer-events-none z-10"></div>

      <div className="aspect-[3/4] relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 animate-shimmer"></div>
        </div>
      </div>

      <CardContent className="p-6 relative">
        <h3 className="font-serif text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">{name}</h3>
        <p className="text-primary font-medium mb-3 text-sm group-hover:scale-105 inline-block transition-transform duration-300">{specialty}</p>
        {bio && <p className="text-muted-foreground text-sm mb-3 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{bio}</p>}
        {education && education.length > 0 && (
          <div className="border-t pt-3 mt-3 border-border/50 group-hover:border-primary/20 transition-colors duration-300">
            <p className="text-xs font-semibold text-foreground mb-2">Education:</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              {education.map((edu, index) => (
                <li key={index} className="hover:text-foreground transition-colors duration-200">• {edu}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}