import { Globe, Heart } from 'lucide-react';

import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import { PROFILE } from '@/data/profile';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-border border-t px-6 py-16'>
      <div className='mx-auto max-w-4xl'>
        <div className='flex flex-col items-center gap-6'>
          <nav className='flex items-center gap-4'>
            {[
              { href: `https://github.com/${PROFILE.github}`, icon: GithubIcon, label: 'GitHub' },
              { href: `https://linkedin.com/in/${PROFILE.linkedin}`, icon: LinkedinIcon, label: 'LinkedIn' },
              { href: `https://${PROFILE.website}`, icon: Globe, label: 'Website' }
            ].map(({ href, icon: Icon, label }) => (
              <a
                id={`footer-link-${label.toLowerCase()}`}
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-cyan rounded-lg p-2.5 transition-all'
                aria-label={label}
              >
                <Icon className='h-4 w-4' />
              </a>
            ))}
          </nav>

          <Separator className='bg-border/50 max-w-xs' />

          <div className='space-y-2 text-center'>
            <p className='text-muted-foreground font-mono text-sm'>
              Built with <Heart className='text-purple inline h-3.5 w-3.5' /> using React + TypeScript + Tailwind
            </p>
            <p className='text-muted-foreground/60 font-mono text-xs'>
              © {currentYear} {PROFILE.name}
            </p>
          </div>

          <div className='text-border/40 mt-4 font-mono text-xs select-none'>{'// TODO: take over the world'}</div>
        </div>
      </div>
    </footer>
  );
}
