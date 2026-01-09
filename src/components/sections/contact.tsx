'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { socialLinks } from '@/lib/data';
import { submitContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function ContactSection() {
  const initialState = { message: '', errors: {}, success: false };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Success!',
          description: state.message,
        });
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);

  return (
    <Section id="contact" title="Get In Touch" className="bg-secondary">
      <Card>
        <CardContent className="p-6 md:p-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="font-headline text-2xl font-semibold">Contact Me</h3>
              <p className="mt-2 text-muted-foreground">
                I'm open to collaborations and new opportunities. Feel free to
                reach out.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <social.icon className="h-5 w-5" />
                    <span>{social.href.replace('mailto:', '')}</span>
                  </a>
                ))}
              </div>
            </div>
            <form action={dispatch}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" />
                  {state.errors?.name && (
                    <p className="mt-1 text-xs text-destructive">{state.errors.name[0]}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" />
                   {state.errors?.email && (
                    <p className="mt-1 text-xs text-destructive">{state.errors.email[0]}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message here..." />
                   {state.errors?.message && (
                    <p className="mt-1 text-xs text-destructive">{state.errors.message[0]}</p>
                  )}
                </div>
                <SubmitButton />
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
