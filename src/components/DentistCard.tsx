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
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/20">
      <div className="aspect-[3/4] relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">{name}</h3>
        <p className="text-primary font-medium mb-3 text-sm">{specialty}</p>
        {bio && <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{bio}</p>}
        {education && education.length > 0 && (
          <div className="border-t pt-3 mt-3">
            <p className="text-xs font-semibold text-foreground mb-2">Education:</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              {education.map((edu, index) => (
                <li key={index}>• {edu}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}