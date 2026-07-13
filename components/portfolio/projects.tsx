'use client';

import * as React from 'react';
import useSWR from 'swr';
import { HeroProject } from './hero-project';
import { RepoCard, type RepoCardData } from './repo-card';
import { Skeleton } from '@/components/ui/skeleton';
import { heroProjects } from '@/lib/portfolio/content';
import { AlertCircle, Sparkles } from 'lucide-react';
import { SectionAchievement } from '@/components/portfolio/gamification';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function Projects() {
  const { data, isLoading, error } = useSWR<{ repos: RepoCardData[]; generatedByAi: boolean }>(
    '/api/repos',
    fetcher,
    { revalidateOnFocus: false }
  );

  return (
    <SectionAchievement id="projects" achievementId="project-explorer">
      <section className="container mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Projects</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Featured &amp; recent work</h2>
          </div>
          <div className="hidden items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[11px] text-muted-foreground md:inline-flex">
            <Sparkles className="h-3 w-3" /> Repo cards auto-summarised from GitHub READMEs
          </div>
        </div>

        <div className="space-y-8">
          {heroProjects.map((p, i) => (
            <HeroProject key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Other projects
          </h3>

          {error && (
            <div className="flex items-center gap-2 rounded-md border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
              <AlertCircle className="h-4 w-4" /> Couldn&apos;t load repos right now. Please retry.
            </div>
          )}

          {isLoading && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-3 rounded-xl border border-border/70 p-6">
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-3 w-1/3" />
                  <div className="space-y-2 pt-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-11/12" />
                    <Skeleton className="h-3 w-9/12" />
                  </div>
                  <div className="flex gap-1.5 pt-3">
                    <Skeleton className="h-5 w-14 rounded-full" />
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-5 w-12 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {data?.repos && data.repos.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.repos.map((repo, i) => (
                <RepoCard key={repo.htmlUrl} data={repo} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </SectionAchievement>
  );
}
