import { Briefcase, MapPin } from 'lucide-react';

import { EXPERIENCES } from '@/data/profile';

export function Experience() {
  return (
    <section id='experience' className='px-6 py-24'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-16 text-center'>
          <span className='text-terminal mb-4 block font-mono text-sm'>{'// git log --oneline --graph'}</span>
          <h2 className='gradient-text inline-block text-3xl font-bold md:text-4xl'>Experience</h2>
        </div>

        <div className='relative'>
          <div className='from-cyan via-purple to-terminal absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b md:left-6' />

          <div className='space-y-10'>
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.company} className='relative pl-12 md:pl-16'>
                <div
                  className={`absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 md:left-4.5 ${
                    idx === 0
                      ? 'bg-cyan border-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)]'
                      : 'bg-background border-purple'
                  }`}
                />

                <div className='bg-card border-border hover:border-border/80 rounded-xl border p-6 transition-all hover:shadow-[0_0_30px_rgba(167,139,250,0.05)]'>
                  <div className='mb-4 flex flex-wrap items-start justify-between gap-2'>
                    <div className='flex items-center gap-2'>
                      <Briefcase className='text-cyan h-4 w-4' />
                      <h3 className='text-foreground font-mono text-base font-semibold'>{exp.company}</h3>
                    </div>
                    <span className='text-muted-foreground inline-flex items-center gap-1 font-mono text-xs'>
                      <MapPin className='h-3 w-3' />
                      {exp.location}
                    </span>
                  </div>

                  <div className='space-y-4'>
                    {exp.roles.map(role => (
                      <div key={role.title} className='border-border border-l-2 pl-4'>
                        <div className='flex flex-wrap items-center gap-2'>
                          <span className='text-purple font-mono text-sm font-semibold'>{role.title}</span>
                          <span className='text-muted-foreground font-mono text-xs'>{role.period}</span>
                        </div>
                        {role.description && (
                          <p className='text-muted-foreground mt-1 text-sm leading-relaxed'>{role.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
