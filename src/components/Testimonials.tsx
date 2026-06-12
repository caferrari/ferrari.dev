import { MessageSquare, ExternalLink } from 'lucide-react';

import { TESTIMONIALS } from '@/data/profile';

export function Testimonials() {
  return (
    <section id='testimonials' className='bg-card/50 px-6 py-24'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-16 text-center'>
          <span className='text-terminal mb-4 block font-mono text-sm'>
            {"// git log --format='%s' --author=peers"}
          </span>
          <h2 className='gradient-text inline-block text-3xl font-bold md:text-4xl'>Peer Reviews</h2>
        </div>

        <div className='space-y-6'>
          {TESTIMONIALS.map(t => (
            <div
              key={t.author}
              className='bg-card border-border group hover:border-purple/30 relative rounded-xl border p-6 transition-all'
            >
              <div className='from-cyan to-purple absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b' />

              <div className='flex items-start gap-4'>
                <MessageSquare className='text-purple mt-1 h-5 w-5 shrink-0' />
                <div className='flex-1'>
                  <div className='text-muted-foreground mb-3 font-mono text-xs'>
                    <span className='text-purple'>reviewer</span>
                    <span className='text-muted-foreground'>:</span>{' '}
                    <a
                      id={`testimonial-${t.author.toLowerCase().replace(/\s/g, '-')}`}
                      href={t.linkedinUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-cyan inline-flex items-center gap-1 hover:underline'
                    >
                      {t.author}
                      <ExternalLink className='h-3 w-3' />
                    </a>
                    <span className='text-muted-foreground'>
                      {' '}
                      {/* role */} {t.role}
                    </span>
                  </div>

                  <blockquote className='text-foreground/85 leading-relaxed italic'>&quot;{t.text}&quot;</blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
