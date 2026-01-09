import { cn } from '@/lib/utils';

type SectionProps = {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, title, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
