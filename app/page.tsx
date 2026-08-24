import { Contact } from '@/components/sections/contact';
import { Education } from '@/components/sections/education';
import { Experience } from '@/components/sections/experience';
import { Faq } from '@/components/sections/faq';
import { Footer } from '@/components/sections/footer';
import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { OpenSource } from '@/components/sections/open-source';
import { HowIWork } from '@/components/sections/how-i-work';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Stats } from '@/components/sections/stats';
import { TechMarquee } from '@/components/sections/tech-marquee';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <Stats />
        <HowIWork />
        <Skills />
        <OpenSource />
        <Projects />
        <Experience />
        <Education />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
