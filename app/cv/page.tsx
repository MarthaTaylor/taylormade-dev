import Link from 'next/link';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cvs, person } from '@/lib/portfolio/content';

export const metadata = {
  title: 'CV — Martha Taylor',
  description: 'Download Martha Taylor\'s CV — pick the version that best fits your role.',
};

export default function CvPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to portfolio
          </Link>
        </Button>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            CV downloads
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            {person.name}&apos;s CV
          </h1>
          <p className="mt-3 max-w-2xl text-[15px] text-muted-foreground md:text-base">
            A few tuned versions — same person, different lens. Pick the one closest to the role
            you&apos;re hiring for.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cvs.map((cv) => (
            <Card key={cv.id} className="flex h-full flex-col border-border/70">
              <CardContent className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <Badge variant="secondary" className="rounded-full text-[11px]">{cv.format}</Badge>
                </div>
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">{cv.title}</h2>
                  <p className="mt-0.5 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                    {cv.tag}
                  </p>
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/90">{cv.description}</p>
                <div className="mt-auto pt-2">
                  <Button asChild className="w-full">
                    <a href={cv.url} target="_blank" rel="noreferrer" download>
                      <Download className="mr-2 h-4 w-4" /> Download
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          Prefer LinkedIn? <a href={person.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">Reach me here</a>.
        </p>
      </div>
    </div>
  );
}
