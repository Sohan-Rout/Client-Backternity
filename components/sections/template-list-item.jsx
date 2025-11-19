import Link from 'next/link';
import { ArrowRight, Check, Terminal, CreditCard, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const iconMap = {
  'SiOpenai': Terminal,
  'SiStripe': CreditCard,
  'SiClerk': Shield,
};

export default function TemplateListItem({ template }) {
  return (
    <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 border-b border-white/5 last:border-0">
      {/* Left Column: Info */}
      <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              {template.category}
            </Badge>
            <span className="text-sm font-medium text-muted-foreground">
              {template.price}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-emerald-400 transition-colors">
            <Link href={`/templates/${template.slug}`}>
              {template.title}
            </Link>
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {template.description}
          </p>
        </div>

        <div className="pt-4">
          <Button asChild variant="outline" className="group/btn border-white/10 hover:bg-white/5 hover:text-emerald-400">
            <Link href={`/templates/${template.slug}`}>
              Download
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Right Column: Feature Previews */}
      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {template.features?.slice(0, 3).map((feature, index) => {
          const Icon = iconMap[feature.icon] || Check;
          return (
            <Link key={index} href={`/templates/${template.slug}`} className="block h-full">
              <Card className="h-full bg-black/40 border-white/10 hover:border-emerald-500/30 hover:bg-white/5 transition-all duration-300 group/card overflow-hidden">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit group-hover/card:bg-emerald-500/10 group-hover/card:text-emerald-400 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground/90">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
