import { Star, GitFork, ExternalLink } from 'lucide-react';

import { GithubIcon } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { OPEN_SOURCE_REPOS, GITHUB_STATS, PROFILE } from '@/data/profile';

export function OpenSource() {
  return (
    <section id='opensource' className='px-6 py-24'>
      <div className='mx-auto max-w-5xl'>
        <div className='mb-16 text-center'>
          <span className='text-terminal mb-4 block font-mono text-sm'>{'// cat ~/.gitconfig'}</span>
          <h2 className='gradient-text inline-block text-3xl font-bold md:text-4xl'>Open Source</h2>
        </div>

        <div className='mx-auto mb-12 grid max-w-md grid-cols-3 gap-4'>
          {[
            { label: 'Public Repos', value: GITHUB_STATS.publicRepos, color: 'text-cyan' },
            { label: 'Contributions', value: GITHUB_STATS.totalContributions, color: 'text-terminal' },
            { label: 'Followers', value: GITHUB_STATS.followers, color: 'text-purple' }
          ].map(stat => (
            <div key={stat.label} className='bg-card border-border rounded-lg border p-4 text-center'>
              <div className={`font-mono text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className='text-muted-foreground mt-1 font-mono text-xs'>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {OPEN_SOURCE_REPOS.map(repo => (
            <a
              id={`oss-repo-${repo.name}`}
              key={repo.name}
              href={repo.url}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-card border-border group hover:border-cyan/30 block rounded-xl border p-5 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]'
            >
              <div className='mb-2 flex items-start justify-between'>
                <div className='flex items-center gap-2'>
                  <GitFork className='text-muted-foreground h-4 w-4' />
                  <span className='text-foreground group-hover:text-cyan font-mono text-sm font-semibold transition-colors'>
                    {repo.name}
                  </span>
                </div>
                <ExternalLink className='text-muted-foreground h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100' />
              </div>

              <p className='text-muted-foreground mb-3 text-xs leading-relaxed'>{repo.description}</p>

              <div className='flex items-center gap-3'>
                <span className='text-muted-foreground inline-flex items-center gap-1 text-xs'>
                  <Star className='h-3 w-3 text-yellow-500' />
                  {repo.stars}
                </span>
                <Badge
                  variant='secondary'
                  className='bg-secondary/60 text-foreground/60 border-border border font-mono text-[10px]'
                >
                  {repo.language}
                </Badge>
              </div>
            </a>
          ))}
        </div>

        <div className='mt-8 text-center'>
          <a
            id='oss-view-all'
            href={`https://github.com/${PROFILE.github}`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-cyan inline-flex items-center gap-2 font-mono text-sm transition-colors'
          >
            <GithubIcon className='h-4 w-4' />
            View all {GITHUB_STATS.publicRepos} repositories →
          </a>
        </div>
      </div>
    </section>
  );
}
