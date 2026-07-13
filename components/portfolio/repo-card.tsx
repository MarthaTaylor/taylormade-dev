'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export type RepoCardData = {
  name: string;
  htmlUrl: string;
  language: string | null;
  stargazersCount: number;
  summary: {
    problem: string;
    approach: string;
    tech: string[];
    result: string;
    liveDemoUrl: string | null;
  };
};

export function RepoCard({ data, index }: { data: RepoCardData; index: number }) {
  const { summary } = data;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3), ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col border-border/70 transition-colors hover:border-foreground/30">
        <CardContent className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="text-base font-semibold tracking-tight">{prettify(data.name)}</h4>
              {data.language && (
                <p className="mt-0.5 text-xs text-muted-foreground">{data.language}</p>
              )}
            </div>
            {data.stargazersCount > 0 && (
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Star className="h-3 w-3" /> {data.stargazersCount}
              </span>
            )}
          </div>

          {summary.problem && (
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Problem</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">{summary.problem}</p>
            </div>
          )}
          {summary.approach && (
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Approach</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">{summary.approach}</p>
            </div>
          )}
          {summary.result && (
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Result</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">{summary.result}</p>
            </div>
          )}

          {summary.tech.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {summary.tech.map((t) => (
                <Badge key={t} variant="secondary" className="rounded-full text-[10px] font-normal">
                  {t}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {summary.liveDemoUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={summary.liveDemoUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-3.5 w-3.5" /> Live demo
                </a>
              </Button>
            )}
            <Button size="sm" variant="ghost" asChild>
              <a href={data.htmlUrl} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-3.5 w-3.5" /> View code
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function prettify(slug: string) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b(\w)/g, (c) => c.toUpperCase());
}
