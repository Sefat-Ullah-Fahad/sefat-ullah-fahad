"use client";

import React, { useEffect, useRef, useState } from 'react';
import {
  HiOutlineCalendarDays,
  HiOutlineArrowTrendingUp
} from 'react-icons/hi2';

const careerTimeline = [
  {
    year: '2024',
    tag: 'Foundation & Rigor',
    title: 'Education Foundation & Computer Science Immersion',
    description: 'Graduated Dakhil with honors and commenced Alim at Khulna Nesaria Kamil Madrasah. Established core programming fundamentals, algorithmic logic, and web standards.',
    skills: ['JavaScript ES6+', 'HTML5/CSS3', 'Data Structures', 'Islamic Studies & Ethics']
  },
  {
    year: '2025',
    tag: 'Growth & Rapid Velocity',
    title: 'Intensive Internship & Full-Stack Development',
    description: 'Joined Experivia as Full-Stack Developer & Accountant Intern. Mastered the MERN stack, Next.js App Router, GSAP motion systems, and corporate financial data integrity.',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Accounting Systems']
  },
  {
    year: '2026',
    tag: 'Professional Impact',
    title: 'Full-Time Professional Role at Experivia',
    description: 'Promoted to permanent dual-discipline role managing full-stack web platforms, custom WordPress CMS engineering, API architecture, and financial reporting.',
    skills: ['Full-Stack Leadership', 'Supabase RLS', 'Custom WordPress', 'Performance Optimization']
  },
  {
    year: 'Present',
    tag: 'Advanced Frontier',
    title: 'AI Engineering, System Design & High Concurrency',
    description: 'Deepening practical mastery in autonomous AI integration, cloud-native system design, and sub-50ms backend scaling to build world-class products.',
    skills: ['Gemini / LLMs', 'Distributed Architecture', 'High-Load Databases', 'Scalability']
  },
  {
    year: 'Future',
    tag: 'Aspirational Horizon',
    title: 'Building High-Impact Global Technology Platforms',
    description: 'Aspirational trajectory toward architecting transformative web products, contributing to open-source developer ecosystems, and creating global solutions.',
    skills: ['Cloud Native', 'Global SaaS', 'Developer Tools', 'Strategic Leadership'],
    isFuture: true
  }
];

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    // Respect prefers-reduced-motion: skip animation, show immediately
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // Replicates ScrollTrigger's `start: 'top 92%'` + `toggleActions: 'play none none none'`
    // i.e. fires once when the section's top crosses 92% down the viewport, never reverses.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="relative py-24 lg:py-32 bg-background/85 border-t border-slate-900 overflow-hidden"
    >
      {/* bg-fixed removed — was forcing a full repaint on every scroll frame on mobile */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.45)_1.5px,transparent_1.5px)] bg-[size:28px_28px] pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.1)_0%,transparent_75%)] pointer-events-none" />

      {/* Blur blobs: smaller radius + narrower blur on mobile, full size from sm breakpoint up */}
      <div className="absolute top-1/3 left-1/4 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-blue-600/15 rounded-full blur-[70px] sm:blur-[160px] pointer-events-none" />
      <div className="hidden sm:block absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-pink-400 font-semibold uppercase tracking-wider">
                10 // Career Progression
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Milestones & <span className="text-brand-gradient-glow">Timeline</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-purple-500/40 text-pink-300 text-xs font-mono">
            <HiOutlineArrowTrendingUp className="w-4 h-4 text-purple-400" />
            <span>Chronological Journey of Engineering & Analytical Growth</span>
          </div>
        </div>

        <div className="relative border-l-2 border-purple-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {careerTimeline.map((item, idx) => {
            return (
              <div
                key={idx}
                className="timeline-node relative group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.45s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.45s cubic-bezier(0.215, 0.61, 0.355, 1)`,
                  transitionDelay: `${idx * 0.08}s`
                }}
              >
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-slate-950 border-2 border-pink-500 flex items-center justify-center shadow-[0_0_15px_#EC4899] group-hover:scale-110 transition-transform">
                  <HiOutlineCalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-400" />
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/85 border border-purple-500/30 hover:border-pink-500/60 backdrop-blur-xl shadow-2xl transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-pink-300 text-xs font-mono font-semibold">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-purple-500/30 text-[11px] font-mono text-pink-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}