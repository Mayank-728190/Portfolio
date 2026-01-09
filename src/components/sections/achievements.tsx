import { Section } from '@/components/section';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { achievementsData } from '@/lib/data';

export function AchievementsSection() {
  return (
    <Section
      id="achievements"
      title="Achievements & Milestones"
      className="bg-secondary"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {achievementsData.map((achievement) => (
          <Card key={achievement.title}>
            <CardHeader className="flex-row items-center gap-4">
              <achievement.icon className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-xl">
                {achievement.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
