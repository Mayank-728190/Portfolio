import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { careerFocusData } from '@/lib/data';
import { Target } from 'lucide-react';

export function CareerFocusSection() {
  return (
    <Section id="career-focus" title="Career Focus">
      <Card>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {careerFocusData.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
