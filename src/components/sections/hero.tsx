import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { heroData } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-background"
    >
      <div className="container text-center">
        <p className="mb-2 font-headline text-lg font-medium text-primary md:text-xl">
          {heroData.name}
        </p>
        <h1 className="mb-4 font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
          {heroData.title}
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
          {heroData.subtitle}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="#projects">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#research">Research & Publications</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 -rotate-90 text-muted-foreground" />
      </div>
    </section>
  );
}
