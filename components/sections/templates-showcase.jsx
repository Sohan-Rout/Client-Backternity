import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { templates } from '@/lib/templates-data';
import { SiExpress, SiTypescript, SiClerk, SiPostgresql, SiStripe, SiOpenai } from 'react-icons/si';

const iconMap = {
  'SiExpress': SiExpress,
  'SiTypescript': SiTypescript,
  'SiClerk': SiClerk,
  'SiPostgresql': SiPostgresql,
  'SiStripe': SiStripe,
  'SiOpenai': SiOpenai,
};

export default function TemplatesShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <Card key={template.slug} className="flex flex-col h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="flex justify-between items-start mb-2">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {template.category}
              </Badge>
              <Badge variant="secondary" className={template.price === 'Free' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}>
                {template.price}
              </Badge>
            </div>
            <CardTitle className="text-xl mb-2">{template.title}</CardTitle>
            <CardDescription className="line-clamp-2">
              {template.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2 mb-4">
              {template.techStack.slice(0, 4).map((tech) => {
                const Icon = iconMap[tech.icon];
                return (
                  <div key={tech.name} className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">
                    {Icon && <Icon className="w-3 h-3" />}
                    <span>{tech.name}</span>
                  </div>
                );
              })}
              {template.techStack.length > 4 && (
                <div className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">
                  +{template.techStack.length - 4}
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full group">
              <Link href={`/templates/${template.slug}`}>
                View Details
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}