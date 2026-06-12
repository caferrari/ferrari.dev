import { useEffect, useState } from 'react';

import { Globe, ChevronDown } from 'lucide-react';

import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { PROFILE } from '@/data/profile';

const TYPING_PHRASES = [
  'building scalable systems',
  'designing distributed architectures',
  'crafting developer tools',
  'shipping production code since 2001',
  'turning coffee into TypeScript'
];

function useTypingEffect(phrases: string[], typingSpeed = 60, deleteSpeed = 30, pauseMs = 2000) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));

          if (text.length === current.length) {
            setTimeout(() => setIsDeleting(true), pauseMs);
            return;
          }
        } else {
          setText(current.slice(0, text.length - 1));

          if (text.length === 0) {
            setIsDeleting(false);
            setPhraseIndex(prev => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deleteSpeed, pauseMs]);

  return text;
}

export function Hero() {
  const typedText = useTypingEffect(TYPING_PHRASES);

  return (
    <section className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6'>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.08)_0%,_transparent_70%)]' />
      <div className='text-border/30 absolute top-20 left-10 hidden font-mono text-sm select-none lg:block'>
        {'// welcome to my corner of the internet'}
      </div>
      <div className='text-border/30 absolute top-20 right-10 hidden font-mono text-sm select-none lg:block'>
        v25.0.1
      </div>

      <div className='relative z-10 max-w-4xl text-center'>
        <div className='text-terminal mb-6 font-mono text-sm tracking-wider'>
          <span className='text-muted-foreground'>$</span> whoami
        </div>

        <h1 className='mb-4 text-5xl font-bold tracking-tight md:text-7xl'>
          <span className='gradient-text'>{PROFILE.name}</span>
        </h1>

        <p className='text-muted-foreground mb-8 font-mono text-xl md:text-2xl'>
          {'{'} {PROFILE.title} {'}'}
        </p>

        <div className='mb-10 h-8 font-mono text-lg'>
          <span className='text-muted-foreground'>&gt; </span>
          <span className='text-cyan'>{typedText}</span>
          <span className='text-terminal animate-pulse'>█</span>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-4'>
          <a
            id='hero-link-github'
            href={`https://github.com/${PROFILE.github}`}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-secondary hover:bg-secondary/80 text-foreground hover:text-cyan inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-mono text-sm transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]'
          >
            <GithubIcon className='h-4 w-4' />
            github
          </a>
          <a
            id='hero-link-linkedin'
            href={`https://linkedin.com/in/${PROFILE.linkedin}`}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-secondary hover:bg-secondary/80 text-foreground hover:text-purple inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-mono text-sm transition-all hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]'
          >
            <LinkedinIcon className='h-4 w-4' />
            linkedin
          </a>
          <a
            id='hero-link-website'
            href={`https://${PROFILE.website}`}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-secondary hover:bg-secondary/80 text-foreground hover:text-terminal inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-mono text-sm transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.15)]'
          >
            <Globe className='h-4 w-4' />
            {PROFILE.website}
          </a>
        </div>
      </div>

      <a
        id='hero-scroll-down'
        href='#about'
        className='text-muted-foreground hover:text-cyan absolute bottom-10 animate-bounce transition-colors'
      >
        <ChevronDown className='h-6 w-6' />
      </a>
    </section>
  );
}
