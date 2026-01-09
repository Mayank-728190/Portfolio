import Image from 'next/image';
import { Section } from '@/components/section';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projectsData } from '@/lib/data';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  return (
    <Section id="projects" title="Featured Projects" className="bg-secondary">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projectsData.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg"
          >
            <CardHeader>
              <div className="relative aspect-video w-full">
                <Image
                  src={project.image.url}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.image.hint}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-2 flex items-center justify-between">
                <CardTitle className="font-headline text-xl">
                  {project.title}
                </CardTitle>
                <Badge
                  variant={
                    project.status === 'Published' ? 'default' : 'secondary'
                  }
                >
                  {project.status}
                </Badge>
              </div>
              <CardDescription className="space-y-4">
                <div>
                  <h4 className="font-semibold">Problem</h4>
                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Approach & Impact</h4>
                  <p className="text-sm text-muted-foreground">{project.approach} {project.impact}</p>
                </div>
              </CardDescription>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-semibold">Tech Used:</span>
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="font-code">
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.link && (
                <Button variant="link" asChild className="p-0 h-auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
