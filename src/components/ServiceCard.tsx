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
    <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        {price && <CardDescription className="text-lg font-semibold text-primary">{price}</CardDescription>}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}