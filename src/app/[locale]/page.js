import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BentoGrid from '@/components/bento/BentoGrid';
import MagazineHeader from '@/components/bento/MagazineHeader';
import HeroCard from '@/components/bento/HeroCard';
import ProfileCard from '@/components/bento/ProfileCard';
import StatsCard from '@/components/bento/StatsCard';
import TerminalCard from '@/components/bento/TerminalCard';
import GithubCard from '@/components/bento/GithubCard';
import SkillsCard from '@/components/bento/SkillsCard';
import ProjectCard from '@/components/bento/ProjectCard';
import ExperienceCard from '@/components/bento/ExperienceCard';
import AboutCard from '@/components/bento/AboutCard';
import QuoteCard from '@/components/bento/QuoteCard';
import TestimonialCard from '@/components/bento/TestimonialCard';
import SocialCard from '@/components/bento/SocialCard';
import ContactCard from '@/components/bento/ContactCard';
import AnimatedCard from '@/components/AnimatedCard';

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white">
      <Navbar />

      <main className="pt-16 sm:pt-20 pb-10 flex-1">
        {/* Magazine Edition Header Bar */}
        <MagazineHeader />

        <BentoGrid>
          {/* Row 1: Hero (8 cols) + Profile (4 cols) */}
          <AnimatedCard className="col-span-1 md:col-span-6 lg:col-span-8" delay={0} direction="left">
            <HeroCard />
          </AnimatedCard>

          <AnimatedCard className="col-span-1 md:col-span-6 lg:col-span-4" delay={0.1} direction="right">
            <ProfileCard />
          </AnimatedCard>

          {/* Row 2: Stats (4 cols) + Developer Terminal (8 cols) */}
          <AnimatedCard className="col-span-1 md:col-span-6 lg:col-span-4" delay={0.1} direction="left">
            <StatsCard />
          </AnimatedCard>

          <AnimatedCard className="col-span-1 md:col-span-6 lg:col-span-8" delay={0.15} direction="right">
            <TerminalCard />
          </AnimatedCard>

          {/* Row 3: Featured Projects Showcase (Full 12 cols for maximum visual impact) */}
          <AnimatedCard className="col-span-1 md:col-span-12 lg:col-span-12" delay={0.2} direction="up">
            <ProjectCard />
          </AnimatedCard>

          {/* Row 4: GitHub Activity Heatmap (6 cols) + Skills Matrix (6 cols) */}
          <AnimatedCard className="col-span-1 md:col-span-6 lg:col-span-6" delay={0.1} direction="left">
            <GithubCard />
          </AnimatedCard>

          <AnimatedCard className="col-span-1 md:col-span-6 lg:col-span-6" delay={0.15} direction="right">
            <SkillsCard />
          </AnimatedCard>

          {/* Row 5: Career Experience (7 cols) + Architectural Pillars (5 cols) */}
          <AnimatedCard className="col-span-1 md:col-span-6 lg:col-span-7" delay={0.1} direction="left">
            <ExperienceCard />
          </AnimatedCard>

          <AnimatedCard className="col-span-1 md:col-span-6 lg:col-span-5" delay={0.15} direction="right">
            <AboutCard />
          </AnimatedCard>

          {/* Row 6: Philosophy Quote (4 cols) + Client Testimonial (5 cols) + Social Channels (3 cols) */}
          <AnimatedCard className="col-span-1 md:col-span-6 lg:col-span-4" delay={0.1} direction="scale">
            <QuoteCard />
          </AnimatedCard>

          <AnimatedCard className="col-span-1 md:col-span-6 lg:col-span-5" delay={0.15} direction="up">
            <TestimonialCard />
          </AnimatedCard>

          <AnimatedCard className="col-span-1 md:col-span-12 lg:col-span-3" delay={0.2} direction="right">
            <SocialCard />
          </AnimatedCard>

          {/* Row 7: High-Conversion Editorial Contact Terminal (Full 12 cols) */}
          <AnimatedCard className="col-span-1 md:col-span-12 lg:col-span-12" delay={0.1} direction="up">
            <ContactCard />
          </AnimatedCard>
        </BentoGrid>
      </main>

      <Footer />
    </div>
  );
}
