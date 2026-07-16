import { Nav } from '@/components/portfolio/nav';
import { Hero } from '@/components/portfolio/hero';
import { About } from '@/components/portfolio/about';
import { Skills } from '@/components/portfolio/skills';
import { Projects } from '@/components/portfolio/projects';
import { Experience } from '@/components/portfolio/experience';
import { Contact } from '@/components/portfolio/contact';
import { GamificationProvider } from '@/components/portfolio/gamification';

export default function Page() {
  return (
    <GamificationProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </GamificationProvider>
  );
}
