import { Section } from '@/components/section';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skillsData } from '@/lib/data';
import { Code, Cpu, FlaskConical, PenTool } from 'lucide-react';

const icons = [Code, Cpu, FlaskConical, PenTool];

export function SkillsSection() {
  return (
    <Section id="skills" title="Technical & Research Skills">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((category, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Card key={category.title}>
              <CardHeader className="flex-row items-center gap-4">
                <Icon className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-xl">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-code">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
