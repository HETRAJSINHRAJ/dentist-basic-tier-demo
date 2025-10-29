import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  price?: string;
}

export default function ServiceCard({ title, description, icon: Icon, price }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm hover-lift relative overflow-hidden">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

      <CardHeader className="relative z-10">
        <div className="h-14 w-14 rounded-2xl bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 hover-glow">
          <Icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        {price && <CardDescription className="text-lg font-semibold text-primary animate-fade-in">{price}</CardDescription>}
      </CardHeader>
      <CardContent className="relative z-10">
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{description}</p>
      </CardContent>
    </Card>
  );
}