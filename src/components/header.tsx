'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks, socialLinks } from '@/lib/data';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold font-headline">
          Mayank
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" asChild>
            <a href="/Mayank_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="text-xl font-bold font-headline" onClick={() => setIsMobileMenuOpen(false)}>
                  Mayank
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                    <Button variant="outline" asChild>
                        <a href="/Mayank_Resume.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Resume
                        </a>
                    </Button>
                    <div className="flex justify-center gap-4">
                        {socialLinks.map((social) => (
                        <Button key={social.href} variant="ghost" size="icon" asChild>
                            <a href={social.href} target="_blank" rel="noopener noreferrer">
                                <social.icon className="h-5 w-5" />
                                <span className="sr-only">{social.label}</span>
                            </a>
                        </Button>
                        ))}
                    </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
