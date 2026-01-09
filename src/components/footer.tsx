import { socialLinks } from '@/lib/data';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Mayank. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <Button
              key={social.href}
              variant="ghost"
              size="icon"
              asChild
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
