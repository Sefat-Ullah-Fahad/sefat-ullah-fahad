"use client";

import React, { useEffect, useRef } from 'react';
import { 
  HiOutlineCpuChip, 
  HiOutlineChartBar, 
  HiOutlineShieldCheck, 
  HiOutlineSparkles, 
  HiOutlineArrowTrendingUp 
} from 'react-icons/hi2';

const aboutSectionData = {
  sectionNumber: '02 // Philosophy & Background',
  heading: 'About',
  headingHighlight: 'Me',
  subtitleBadge: 'Bridging analytical precision with modern web architecture.',
  storyQuote: "I am a Full-Stack Web Developer currently managing responsibilities at Experivia. Balancing the logic of clean code with the precision of financial data has allowed me to develop a unique problem-solving mindset.",
  storyParagraphs: [
    "My engineering philosophy revolves around clarity, reliability, and business impact. Whether architecting high-throughput REST APIs, optimizing complex MongoDB queries, or choreographing 60FPS GSAP animations, I treat every project with meticulous attention to detail.",
    "Managing financial ledgers while simultaneously developing full-stack software cultivates strong discipline, strict time management, and a deep appreciation for data integrity. I do not just write code — I build sustainable digital engines that empower businesses to scale securely."
  ],
  tags: ['#FullStackEngineer', '#AccountingPrecision', '#ContinuousLearner', '#ScalableArchitecture'],
  pillars: [
    {
      title: 'Full-Stack Engineering',
      icon: HiOutlineCpuChip,
      badge: 'Core Competency',
      description: 'Architecting complete web ecosystems from intuitive React/Next.js interfaces to robust Node.js/Express backends and high-performance databases.'
    },
    {
      title: 'Financial & Logic Precision',
      icon: HiOutlineChartBar,
      badge: 'Accounting Mindset',
      description: 'Bridging financial data accuracy and business workflows with software engineering, ensuring zero-error calculations and audit-ready data models.'
    },
    {
      title: 'Scalability & Security',
      icon: HiOutlineShieldCheck,
      badge: 'Enterprise Standards',
      description: 'Implementing strict Supabase Row-Level Security, JWT authentication cycles, modular schemas, and database query optimization.'
    },
    {
      title: 'Continuous Velocity',
      icon: HiOutlineSparkles,
      badge: 'Growth Trajectory',
      description: 'Relentlessly adopting modern advancements — from GSAP micro-interactions to autonomous AI integration and serverless cloud architectures.'
    }
  ]
};

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = sectionRef.current.querySelectorAll('.about-pillar-card');
          cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.08}s`;
            card.classList.add('animate-pillar-in');
          });
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
      id="about"
      aria-label="About Me and Core Philosophy"
      className="relative py-24 lg:py-32 bg-slate-100 border-t border-slate-300 overflow-hidden backdrop-blur-[3px] section-perf"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-circuit-grid opacity-[0.04] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-dots-pattern opacity-[0.06] pointer-events-none" aria-hidden="true" />

      {/* Custom #0784B5 Glow Blurs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#0784B5]/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0784B5]/10 rounded-full blur-[130px] pointer-events-none" aria-hidden="true" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="circuitGrad1" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0784B5" stopOpacity="0.3" />
              <stop offset="0.6" stopColor="#0784B5" stopOpacity="0.6" />
              <stop offset="1" stopColor="#0784B5" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="circuitGrad2" x1="1200" y1="600" x2="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0784B5" stopOpacity="0.4" />
              <stop offset="1" stopColor="#0784B5" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          <path d="M 0 120 L 180 120 L 260 200 L 480 200 L 540 140 L 780 140 L 860 220 L 1200 220" stroke="url(#circuitGrad1)" strokeWidth="1.8" strokeDasharray="8 4" fill="none" />
          <path d="M 0 480 L 220 480 L 300 400 L 620 400 L 680 460 L 920 460 L 980 380 L 1200 380" stroke="url(#circuitGrad2)" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
          <path d="M 120 0 L 120 180 L 200 260 L 200 500 L 280 580 L 280 600" stroke="url(#circuitGrad1)" strokeWidth="1.2" opacity="0.4" fill="none" />

          <g>
            <circle cx="260" cy="200" r="4" fill="#0784B5" className="animate-ping" opacity="0.8" />
            <circle cx="260" cy="200" r="4" fill="#0784B5" />
            <circle cx="540" cy="140" r="3.5" fill="#0784B5" opacity="0.9" />
            <circle cx="860" cy="220" r="4.5" fill="#0784B5" />
            <circle cx="300" cy="400" r="3.5" fill="#0784B5" opacity="0.8" />
            <circle cx="680" cy="460" r="4" fill="#0784B5" />
            <circle cx="980" cy="380" r="4.5" fill="#0784B5" className="animate-pulse" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-300">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-[#0784B5] font-bold uppercase tracking-wider">
                {aboutSectionData.sectionNumber}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-800 tracking-tight">
              {aboutSectionData.heading} <span className="text-[#0784B5]">{aboutSectionData.headingHighlight}</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 border border-slate-300">
            <HiOutlineArrowTrendingUp className="w-4 h-4 text-[#0784B5] animate-pulse" />
            <span className="font-mono text-xs text-slate-700 font-medium">
              {aboutSectionData.subtitleBadge}
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-2">
          
          <article className="lg:col-span-7 space-y-6 text-slate-700">
            <p className="text-xl sm:text-2xl font-light text-slate-800 leading-relaxed font-sans">
              I am a <strong className="font-semibold text-[#0784B5]">Full-Stack Web Developer</strong> currently managing responsibilities at <span className="text-slate-900 font-medium underline decoration-[#0784B5]/60 hover:decoration-[#0784B5] transition-colors decoration-2 underline-offset-4">Experivia</span>. Balancing the logic of clean code with the precision of financial data has allowed me to develop a unique problem-solving mindset.
            </p>
            
            {aboutSectionData.storyParagraphs.map((para, idx) => (
              <p key={idx} className="text-base text-slate-600 leading-relaxed">
                {para}
              </p>
            ))}

            <div className="pt-2 flex flex-wrap items-center gap-3" aria-label="Skill Tags">
              {aboutSectionData.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-md bg-slate-200 border border-slate-300 text-xs font-mono text-slate-700 font-medium shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <aside aria-labelledby="core-strengths-title" className="lg:col-span-5 bg-slate-200/60 border border-slate-300 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-lg shadow-slate-300/50">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0784B5]/15 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />
            
            <h3 id="core-strengths-title" className="text-lg font-display font-bold text-slate-800 mb-6 flex items-center justify-between">
              <span>Core Strengths</span>
              <span className="font-mono text-xs text-[#0784B5] font-bold">Pillars</span>
            </h3>

            <div className="space-y-4">
              {aboutSectionData.pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <article
                    key={idx}
                    className="about-pillar-card p-4 rounded-xl bg-slate-100 border border-slate-300 hover:border-[#0784B5]/60 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-slate-200 border border-slate-300 text-[#0784B5] mt-0.5 group-hover:scale-105 group-hover:bg-[#0784B5] group-hover:text-white group-hover:border-[#0784B5] transition-all duration-300 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#0784B5] transition-colors">
                            {pillar.title}
                          </h4>
                          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-200 border border-slate-300 text-[#0784B5]">
                            {pillar.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-normal">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}