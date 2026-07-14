'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGamification } from '@/components/portfolio/gamification';
import { ClientVisual } from '@/components/portfolio/visuals/client-visuals';
import type { ClientProject } from '@/lib/portfolio/content';

export function ClientProjectCard({ project, index }: { project: ClientProject; index: number }) {
  const { unlock } = useGamification();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3), ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden border-border/70 transition-colors hover:border-foreground/30">
        {/* Visual cover */}
        <div
          className="relative aspect-[16/9] w-full border-b border-border/60"
          role="img"
          aria-label={`${project.name} illustration`}
        >
          <ClientVisual id={project.visualId} />
        </div>

        <CardContent className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <h4 className="text-[17px] font-semibold tracking-tight">{project.name}</h4>
            <p className="mt-0.5 text-[13px] text-muted-foreground">{project.tagline}</p>
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Problem</p>
            <p className="mt-1 text-[15px] leading-relaxed text-foreground/95">{project.problem}</p>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Approach</p>
            <p className="mt-1 text-[15px] leading-relaxed text-foreground/95">{project.approach}</p>
          </div>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.tech.map((t) => (
              <Badge key={t} variant="secondary" className="rounded-full text-[11px] font-normal">
                {t}
              </Badge>
            ))}
          </div>

          {project.liveUrl && (
            <div className="pt-2">
              <Button size="sm" asChild onClick={() => unlock('deep-diver')}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name} live app in a new tab`}
                >
                  <ExternalLink className="mr-2 h-3.5 w-3.5" /> Live app
                </a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
