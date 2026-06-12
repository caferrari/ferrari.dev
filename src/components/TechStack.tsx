import { Code2, Monitor, Server, Cloud, Database, Network } from 'lucide-react';

import { TECH_STACK, type TechLevel } from '@/data/profile';

const CATEGORY_META: Record<keyof typeof TECH_STACK, { label: string; icon: React.ReactNode; color: string }> = {
  languages: { label: 'Languages', icon: <Code2 className='h-5 w-5' />, color: 'text-cyan' },
  frontend: { label: 'Frontend', icon: <Monitor className='h-5 w-5' />, color: 'text-purple' },
  backend: { label: 'Backend', icon: <Server className='h-5 w-5' />, color: 'text-terminal' },
  infrastructure: { label: 'Infra & DevOps', icon: <Cloud className='h-5 w-5' />, color: 'text-cyan' },
  databases: { label: 'Databases', icon: <Database className='h-5 w-5' />, color: 'text-purple' },
  architecture: { label: 'Architecture', icon: <Network className='h-5 w-5' />, color: 'text-terminal' }
};

function LevelDots({ level }: { level: TechLevel }) {
  const filled = level === 'expert' ? 5 : 4;
  return (
    <div className='flex gap-0.5'>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className={`h-1.5 w-1.5 rounded-full ${i < filled ? 'bg-cyan' : 'bg-border'}`} />
      ))}
    </div>
  );
}

export function TechStack() {
  return (
    <section id='stack' className='bg-card/50 px-6 py-24'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-16 text-center'>
          <span className='text-terminal mb-4 block font-mono text-sm'>{'// tech_stack.ts'}</span>
          <h2 className='gradient-text inline-block text-3xl font-bold md:text-4xl'>Tech Stack</h2>
          <p className='text-muted-foreground mx-auto mt-3 max-w-lg'>
            Tools and technologies I use to build robust, scalable systems
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {(Object.keys(TECH_STACK) as (keyof typeof TECH_STACK)[]).map(cat => {
            const meta = CATEGORY_META[cat];
            return (
              <div
                key={cat}
                className='bg-card border-border hover:border-border/80 group rounded-xl border p-6 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.05)]'
              >
                <div className={`mb-5 flex items-center gap-2 ${meta.color}`}>
                  {meta.icon}
                  <h3 className='font-mono text-sm font-semibold'>{meta.label}</h3>
                </div>
                <div className='space-y-3'>
                  {TECH_STACK[cat].map(tech => (
                    <div key={tech.name} className='flex items-center justify-between'>
                      <span className='text-foreground/80 font-mono text-sm'>{tech.name}</span>
                      <LevelDots level={tech.level} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
