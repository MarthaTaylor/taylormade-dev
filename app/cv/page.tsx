import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Download, Mail, Linkedin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cvsFull, cvVariants } from '@/lib/portfolio/cv-content';
import { person } from '@/lib/portfolio/content';

export const metadata = {
  title: 'CV — Martha Taylor',
};

export default function CvPage() {
  const cv = cvsFull[0]; // Default to the DevSecOps / CI-CD / Platform variant
  if (!cv) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-6 py-10 md:py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to portfolio
            </Link>
          </Button>
          <Button asChild>
            <a href={cv.downloadUrl} target="_blank" rel="noreferrer" download>
              <Download className="mr-2 h-4 w-4" /> Download ({cv.downloadFormat})
            </a>
          </Button>
        </div>

        {/* Variant switcher */}
        <div className="mb-8 flex flex-wrap gap-2">
          {cvVariants.map((v) => (
            <Badge
              key={v.id}
              variant={v.id === cv.id ? 'default' : 'secondary'}
              className="rounded-full px-3 py-1 text-[12px] font-medium"
            >
              {v.label}
              {v.id !== cv.id && (
                <a
                  href={v.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="ml-2 underline underline-offset-2"
                >
                  ({v.format})
                </a>
              )}
            </Badge>
          ))}
        </div>

        {/* Header */}
        <header className="border-b border-border/70 pb-6">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{person.name.toUpperCase()}</h1>
          <p className="mt-1 text-[15px] text-muted-foreground md:text-base">{cv.headline}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-muted-foreground">
            <span>UK remote-first, open to hybrid</span>
            <span aria-hidden>&middot;</span>
            <a href={person.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-foreground">
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
            <a href={`mailto:${person.email}`} className="inline-flex items-center gap-1 hover:text-foreground">
              <Mail className="h-3.5 w-3.5" /> Email
            </a>
            <Link href="/" className="inline-flex items-center gap-1 hover:text-foreground">
              <Globe className="h-3.5 w-3.5" /> Portfolio
            </Link>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Professional summary
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-foreground/95 md:text-[16px]">
            {cv.summary}
          </p>
        </section>

        {/* Skills */}
        <section className="mt-10">
          <h2 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Core skills
          </h2>
          <div className="mt-3 space-y-3">
            {cv.skills.map((g) => (
              <div key={g.title} className="grid gap-1 md:grid-cols-[200px_1fr] md:gap-4">
                <div className="text-[13px] font-semibold">{g.title}</div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <Badge key={s} variant="secondary" className="rounded-full text-[11px] font-normal">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-10">
          <h2 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Experience
          </h2>
          <div className="mt-4 space-y-8">
            {cv.experience.map((role, i) => (
              <div key={i} className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-6">
                <div className="text-[13px] text-muted-foreground">
                  <div className="font-semibold text-foreground">{role.company}</div>
                  <div>{role.period}</div>
                  <div>{role.location}</div>
                  {role.context && <div className="mt-1 text-[12px] italic">{role.context}</div>}
                </div>
                <div>
                  <div className="text-[14px] font-medium">{role.role}</div>
                  <ul className="mt-2 space-y-1.5 text-[14px] leading-relaxed text-foreground/95">
                    {role.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-10">
          <h2 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Education &amp; certification
          </h2>
          <ul className="mt-2 space-y-1.5 text-[14px] leading-relaxed text-foreground/95">
            {cv.education.map((e, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border/60 pt-6">
          <Button asChild>
            <a href={cv.downloadUrl} target="_blank" rel="noreferrer" download>
              <Download className="mr-2 h-4 w-4" /> Download this CV ({cv.downloadFormat})
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={person.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> Reach me on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
