import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { ResearchSection } from '@/components/sections/research';
import { AchievementsSection } from '@/components/sections/achievements';
import { CareerFocusSection } from '@/components/sections/career-focus';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchSection />
        <AchievementsSection />
        <CareerFocusSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
