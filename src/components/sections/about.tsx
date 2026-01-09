import Image from 'next/image';
import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { aboutData } from '@/lib/data';

export function AboutSection() {
  return (
    <Section id="about" title="About Me" className="bg-secondary">
      <Card>
        <CardContent className="p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-center justify-center">
              <Image
                src={aboutData.image.url}
                alt="A professional headshot of Mayank"
                width={250}
                height={250}
                className="rounded-full object-cover shadow-lg"
                data-ai-hint={aboutData.image.hint}
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {aboutData.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
