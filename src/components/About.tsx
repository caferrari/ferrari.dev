import { MapPin, Calendar, Zap } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { PROFILE } from '@/data/profile';

export function About() {
  return (
    <section id='about' className='px-6 py-24'>
      <div className='mx-auto max-w-4xl'>
        <div className='text-muted-foreground mb-2 font-mono text-sm'>
          <span className='text-purple'>const</span> <span className='text-cyan'>about</span>{' '}
          <span className='text-muted-foreground'>=</span> <span className='text-terminal'>{'{'}</span>
        </div>

        <div className='bg-card border-border relative ml-0 rounded-xl border p-8 md:ml-6'>
          <div className='from-cyan via-purple to-terminal absolute top-0 left-0 h-1 w-full rounded-t-xl bg-gradient-to-r' />

          <div className='text-muted-foreground mb-6 flex flex-wrap gap-4 font-mono text-sm'>
            <span className='inline-flex items-center gap-1.5'>
              <MapPin className='text-cyan h-3.5 w-3.5' />
              {PROFILE.location}
            </span>
            <span className='inline-flex items-center gap-1.5'>
              <Calendar className='text-purple h-3.5 w-3.5' />
              {PROFILE.yearsOfExperience}+ years of experience
            </span>
          </div>

          <p className='text-foreground/90 mb-8 text-lg leading-relaxed whitespace-pre-line'>{PROFILE.bio}</p>

          <div className='space-y-3'>
            {PROFILE.highlights.map(h => (
              <div key={h} className='flex items-start gap-2 text-sm'>
                <Zap className='text-terminal mt-0.5 h-4 w-4 shrink-0' />
                <span className='text-muted-foreground'>{h}</span>
              </div>
            ))}
          </div>

          <div className='mt-8 flex flex-wrap gap-2'>
            {['TypeScript', 'Node.js', 'React', 'System Design', 'AWS', 'PostgreSQL', 'Docker', 'Microservices'].map(
              tech => (
                <Badge
                  key={tech}
                  variant='secondary'
                  className='bg-secondary/80 text-foreground/80 border-border hover:border-cyan/50 hover:text-cyan border font-mono text-xs transition-colors'
                >
                  {tech}
                </Badge>
              )
            )}
          </div>
        </div>

        <div className='text-terminal mt-2 font-mono text-sm'>
          <span>{'}'}</span>
        </div>
      </div>
    </section>
  );
}
