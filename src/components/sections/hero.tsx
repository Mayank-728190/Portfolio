import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { heroData } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-background"
    >
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt="Abstract background image"
          fill
          className="object-cover object-center absolute inset-0 z-0"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm z-10" />

      <div className="container text-center z-20">
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <ArrowRight className="h-6 w-6 -rotate-90 text-muted-foreground" />
      </div>
    </section>
  );
}
