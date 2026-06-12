import { Sparkles, Calendar } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { PROJECTS } from '@/data/profile';

export function Projects() {
  return (
    <section id='projects' className='bg-card/50 px-6 py-24'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-16 text-center'>
          <span className='text-terminal mb-4 block font-mono text-sm'>{'// ls -la ~/projects'}</span>
          <h2 className='gradient-text inline-block text-3xl font-bold md:text-4xl'>Featured Projects</h2>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {PROJECTS.map(project => (
            <div
              key={project.name}
              className='bg-card border-border group hover:border-cyan/30 relative overflow-hidden rounded-xl border p-6 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]'
            >
              <div className='via-cyan/50 absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100' />

              <div className='mb-3 flex items-start justify-between'>
                <h3 className='text-foreground group-hover:text-cyan font-mono text-lg font-bold transition-colors'>
                  {project.name}
                </h3>
                <span className='text-muted-foreground flex items-center gap-1 font-mono text-xs'>
                  <Calendar className='h-3 w-3' />
                  {project.period}
                </span>
              </div>

              <p className='text-muted-foreground mb-4 text-sm leading-relaxed'>{project.description}</p>

              {project.highlight && (
                <div className='text-terminal mb-4 flex items-center gap-1.5 font-mono text-sm'>
                  <Sparkles className='h-3.5 w-3.5' />
                  {project.highlight}
                </div>
              )}

              <div className='flex flex-wrap gap-1.5'>
                {project.tech.map(t => (
                  <Badge
                    key={t}
                    variant='secondary'
                    className='bg-secondary/80 text-foreground/70 border-border border font-mono text-[11px]'
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
