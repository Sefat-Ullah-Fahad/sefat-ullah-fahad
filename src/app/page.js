import dynamic from 'next/dynamic';
import Hero from '../components/sections/Hero';

const sectionFallback = (minHeight = '480px') => (
  <div
    className="w-full bg-background border-t border-slate-900/50"
    style={{ minHeight }}
    aria-hidden="true"
  />
);

const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
  loading: () => sectionFallback('520px'),
});
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'), {
  loading: () => sectionFallback('720px'),
});
const ExperienceSection = dynamic(
  () => import('@/components/sections/ExperienceSection'),
  { loading: () => sectionFallback('560px') }
);
const EducationSection = dynamic(
  () => import('@/components/sections/EducationSection'),
  { loading: () => sectionFallback('520px') }
);
const ProjectsSection = dynamic(
  () => import('@/components/sections/ProjectsSection'),
  { loading: () => sectionFallback('900px') }
);
const ServicesSection = dynamic(
  () => import('@/components/sections/ServicesSection'),
  { loading: () => sectionFallback('640px') }
);
const CurrentFocusSection = dynamic(
  () => import('@/components/sections/CurrentFocusSection'),
  { loading: () => sectionFallback('640px') }
);
const TimelineSection = dynamic(
  () => import('@/components/sections/TimelineSection'),
  { loading: () => sectionFallback('720px') }
);
const ContactSection = dynamic(
  () => import('@/components/sections/ContactSection'),
  { loading: () => sectionFallback('640px') }
);

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <div className="section-perf">
        <AboutSection />
      </div>
      <div className="section-perf">
        <SkillsSection />
      </div>
      <div className="section-perf">
        <ExperienceSection />
      </div>
      <div className="section-perf">
        <EducationSection />
      </div>
      <div className="section-perf">
        <ProjectsSection />
      </div>
      <div className="section-perf">
        <ServicesSection />
      </div>
      <div className="section-perf">
        <CurrentFocusSection />
      </div>
      <div className="section-perf">
        <TimelineSection />
      </div>
      <div className="section-perf">
        <ContactSection />
      </div>
    </div>
  );
}
