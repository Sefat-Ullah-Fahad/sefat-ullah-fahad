"use client";

import React, { useEffect, useRef } from 'react';
import { HiOutlineCpuChip, HiOutlineChartBar, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineArrowTrendingUp } from 'react-icons/hi2';

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
    // GSAP এর বদলে Raw JS Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // 'top 90%' এর সমতুল্য
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = sectionRef.current.querySelectorAll('.about-pillar-card');
          cards.forEach((card, index) => {
            // GSAP এর stagger: 0.08 এর হুবহু কাজ
            card.style.transitionDelay = `${index * 0.08}s`;
            card.classList.add('animate-pillar-in');
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
      id="about"
      className="relative py-24 lg:py-32 bg-background/75 border-t border-slate-900 overflow-hidden backdrop-blur-[3px]"
    >
      <div className="absolute inset-0 bg-circuit-grid opacity-45 pointer-events-none" />
      <div className="absolute inset-0 bg-dots-pattern opacity-20 pointer-events-none" />

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#5B21B6]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#DB2777]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="circuitGrad1" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5B21B6" stopOpacity="0.9" />
              <stop offset="0.6" stopColor="#5B21B6" stopOpacity="1" />
              <stop offset="1" stopColor="#DB2777" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="circuitGrad2" x1="1200" y1="600" x2="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DB2777" stopOpacity="0.7" />
              <stop offset="1" stopColor="#5B21B6" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          <path
            d="M 0 120 L 180 120 L 260 200 L 480 200 L 540 140 L 780 140 L 860 220 L 1200 220"
            stroke="url(#circuitGrad1)"
            strokeWidth="1.8"
            strokeDasharray="8 4"
            fill="none"
          />

          <path
            d="M 0 480 L 220 480 L 300 400 L 620 400 L 680 460 L 920 460 L 980 380 L 1200 380"
            stroke="url(#circuitGrad2)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            fill="none"
          />

          <path
            d="M 120 0 L 120 180 L 200 260 L 200 500 L 280 580 L 280 600"
            stroke="url(#circuitGrad1)"
            strokeWidth="1.2"
            opacity="0.5"
            fill="none"
          />

          <g>
            <circle cx="260" cy="200" r="4" fill="#EC4899" className="animate-ping" />
            <circle cx="260" cy="200" r="4" fill="#EC4899" />
            <circle cx="540" cy="140" r="3.5" fill="#7C3AED" />
            <circle cx="860" cy="220" r="4.5" fill="#EC4899" />
            <circle cx="300" cy="400" r="3.5" fill="#C084FC" />
            <circle cx="680" cy="460" r="4" fill="#F472B6" />
            <circle cx="980" cy="380" r="4.5" fill="#EC4899" className="animate-pulse" />
          </g>

          <rect x="230" y="185" width="60" height="30" rx="4" fill="none" stroke="#EC4899" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <rect x="830" y="205" width="60" height="30" rx="4" fill="none" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-pink-400 font-semibold uppercase tracking-wider">
                {aboutSectionData.sectionNumber}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              {aboutSectionData.heading} <span className="text-brand-gradient-glow">{aboutSectionData.headingHighlight}</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30">
            <HiOutlineArrowTrendingUp className="w-4 h-4 text-pink-400 animate-pulse" />
            <span className="font-mono text-xs text-purple-200">
              {aboutSectionData.subtitleBadge}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-2">
          
          <div className="lg:col-span-7 space-y-6 text-slate-300">
            <p className="text-xl sm:text-2xl font-light text-slate-100 leading-relaxed font-sans">
              I am a <strong className="font-semibold text-pink-400">Full-Stack Web Developer</strong> currently managing responsibilities at <span className="text-white underline decoration-pink-500/60 decoration-2 underline-offset-4">Experivia</span>. Balancing the logic of clean code with the precision of financial data has allowed me to develop a unique problem-solving mindset.
            </p>
            
            {aboutSectionData.storyParagraphs.map((para, idx) => (
              <p key={idx} className="text-base text-slate-400 leading-relaxed">
                {para}
              </p>
            ))}

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {aboutSectionData.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-md bg-slate-900 border border-purple-500/30 text-xs font-mono text-pink-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950/80 border border-purple-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center justify-between">
              <span>Core Strengths</span>
              <span className="font-mono text-xs text-pink-400">Pillars</span>
            </h3>

            <div className="space-y-4">
              {aboutSectionData.pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="about-pillar-card p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-purple-500/50 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-500/40 text-pink-400 mt-0.5 group-hover:scale-105 group-hover:bg-brand-gradient group-hover:text-white transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-semibold text-slate-100 group-hover:text-pink-300 transition-colors">
                            {pillar.title}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 border border-purple-500/30 text-pink-300">
                            {pillar.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-normal">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Raw CSS Animation replacing GSAP */}
      <style jsx>{`
        .about-pillar-card {
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.45s ease-out,
                      transform 0.45s ease-out;
        }

        .about-pillar-card.animate-pillar-in {
          opacity: 1;
          transform: translateX(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .about-pillar-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}