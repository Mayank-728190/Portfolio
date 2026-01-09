import { Section } from '@/components/section';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { researchData } from '@/lib/data';
import { BookOpen } from 'lucide-react';

export function ResearchSection() {
  return (
    <Section id="research" title="Research & Publications">
      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="Published" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {researchData.map((category) => (
                <TabsTrigger key={category.title} value={category.title}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {researchData.map((category) => (
              <TabsContent key={category.title} value={category.title}>
                <ul className="mt-6 space-y-4">
                  {category.papers.map((paper) => (
                    <li
                      key={paper.title}
                      className="flex items-start gap-4"
                    >
                      <BookOpen className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <h4 className="font-semibold">{paper.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {paper.journal}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Note: Acceptance of papers under review depends on peer-review
            outcomes.
          </p>
        </CardContent>
      </Card>
    </Section>
  );
}
