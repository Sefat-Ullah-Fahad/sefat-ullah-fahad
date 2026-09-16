"use client";

import React, { useEffect, useRef } from 'react';
import {
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineBuildingOffice2,
  HiOutlineCheckCircle,
  HiOutlineSparkles
} from 'react-icons/hi2';

const experienceData = [
  {
    id: 'exp-1',
    title: 'Full-Stack Developer & Accountant',
    company: 'Experivia',
    period: 'April 2026 – Present',
    isCurrent: true,
    type: 'Full-time / Permanent',
    responsibilities: [
      'Architecting and maintaining full-stack web applications and client CMS environments with Next.js and MERN stack.',
      'Building custom WordPress widgets, themes, and dynamic plugins tailored for high-conversion marketing funnels.',
      'Developing secure backend REST APIs, JWT authentication protocols, and Supabase / MongoDB query pipelines.',
      'Leading database schema optimization and automated data migration pipelines for growing product catalogs.',
      'Managing corporate bookkeeping, financial reporting, cash flow analysis, and data auditing with strict accuracy.'
    ],
    skills: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Supabase', 'WordPress', 'Financial Analysis', 'API Optimization']
  },
  {
    id: 'exp-2',
    title: 'Full-Stack Developer & Accountant — Intern',
    company: 'Experivia',
    period: 'December 2025 – March 2026',
    isCurrent: false,
    type: '4-Month Intensive Internship',
    responsibilities: [
      'Contributed actively to core frontend development sprints, converting design specifications into responsive React components.',
      'Assisted in backend endpoint testing, bug remediation, and third-party API integrations.',
      'Handled day-to-day transaction records, financial ledger updates, and weekly financial summarization.',
      'Demonstrated high engineering velocity and dual-discipline reliability, resulting in rapid promotion to permanent full-time role.'
    ],
    skills: ['JavaScript ES6+', 'React.js', 'Express.js', 'Tailwind CSS', 'Bookkeeping', 'Postman']
  }
];

export default function ExperienceSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger এর বদলে Raw JS Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -8% 0px', // GSAP এর 'top 92%' এর মতো কাজ করবে
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = sectionRef.current.querySelectorAll('.exp-card');
          cards.forEach((card, index) => {
            // GSAP এর stagger: 0.08 এর হুবহু কাজ
            card.style.transitionDelay = `${index * 0.08}s`;
            card.classList.add('animate-exp-in');
          });
          // একবার অ্যানিমেশন হওয়ার পর অবজার্ভার বন্ধ করে দেওয়া হবে
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 lg:py-32 bg-background/85 border-t border-slate-900 overflow-hidden backdrop-blur-[3px]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(124,58,237,0.15)_1px,transparent_1px)] bg-[size:100%_40px] bg-fixed pointer-events-none opacity-80" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(236,72,153,0.08)_1px,transparent_1px)] bg-[size:40px_100%] bg-fixed pointer-events-none opacity-80" />

      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#5B21B6]/90 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#DB2777]/90 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-pink-400 font-semibold uppercase tracking-wider">
                04 // Professional History
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Work <span className="text-brand-gradient-glow">Experience</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-purple-500/40 text-pink-300 text-xs font-mono">
            <HiOutlineBriefcase className="w-4 h-4 text-purple-400" />
            <span>Dual Role: Software Development & Accounting</span>
          </div>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="exp-card relative rounded-3xl bg-slate-950/85 border border-purple-500/30 p-6 sm:p-10 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-pink-500/60 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-brand-gradient text-white shadow-lg shadow-pink-500/30 mt-1">
                    <HiOutlineBuildingOffice2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                        {exp.title}
                      </h3>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-pink-500/20 border border-pink-500/50 text-pink-300 text-xs font-mono font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping" />
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 font-mono">
                      <span className="text-purple-300 font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-purple-500/30 text-xs font-mono text-pink-300 self-start lg:self-auto">
                  <HiOutlineCalendarDays className="w-4 h-4 text-purple-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="mb-8 relative z-10">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <HiOutlineSparkles className="w-3.5 h-3.5 text-pink-400" />
                  <span>Key Impact & Responsibilities</span>
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <HiOutlineCheckCircle className="w-4 h-4 text-pink-400 mt-1 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2 relative z-10">
                <span className="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-purple-500/30 text-xs font-mono text-slate-300 hover:border-pink-500/60 hover:text-pink-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Raw CSS Animation replacing GSAP */}
      <style jsx>{`
        .exp-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.45s ease-out,
                      transform 0.45s ease-out;
        }

        .exp-card.animate-exp-in {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .exp-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}