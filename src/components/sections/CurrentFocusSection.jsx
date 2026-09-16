"use client";

import React, { useEffect, useRef } from 'react';
import {
  HiOutlineSparkles,
  HiOutlineBolt,
  HiOutlineRocketLaunch,
  HiOutlineCheckCircle,
  HiOutlineLanguage,
  HiOutlineCpuChip,
  HiOutlineMap,
  HiOutlineCodeBracket,
  HiOutlineWrenchScrewdriver
} from 'react-icons/hi2';

const approachSteps = [
  {
    number: '01',
    title: 'Understand',
    subtitle: 'Deep Dive & Discovery',
    description: 'Understand the business, users and requirements thoroughly. Unpack project goals, target audience personas, and technical constraints to establish a bulletproof roadmap.',
    deliverables: ['Requirement Mapping', 'Technical Scope Document', 'Architecture Blueprints'],
    icon: HiOutlineMap
  },
  {
    number: '02',
    title: 'Plan',
    subtitle: 'Architecture & Tech Stack',
    description: 'Choose the right architecture and technologies. Plan database schemas, API contracts, state management boundaries, and performance benchmarks before writing a single line of code.',
    deliverables: ['Database Schema Diagrams', 'API Specification', 'Design System Setup'],
    icon: HiOutlineCpuChip
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Clean & Scalable Code',
    description: 'Create clean, scalable and maintainable systems. Develop modular components, type-safe APIs, and responsive layouts following enterprise best practices and atomic design principles.',
    deliverables: ['Modular React/Next Components', 'Secure REST Endpoints', 'Interactive Animations'],
    icon: HiOutlineCodeBracket
  },
  {
    number: '04',
    title: 'Optimize',
    subtitle: 'Speed, Security & Quality',
    description: 'Improve performance, security and user experience. Audit Core Web Vitals, implement caching strategies, test cross-browser responsiveness, and stress-test endpoints.',
    deliverables: ['Performance Audits (95+ Vitals)', 'Security & Auth Verification', 'Cross-Device QA'],
    icon: HiOutlineWrenchScrewdriver
  },
  {
    number: '05',
    title: 'Deliver',
    subtitle: 'Deployment & Continuity',
    description: 'Deploy a polished production-ready solution. Configure CI/CD pipelines, live monitoring, SSL certification, and provide clear documentation for frictionless handover.',
    deliverables: ['Vercel/Production Deployment', 'Domain & DNS Setup', 'Handover & Ongoing Support'],
    icon: HiOutlineRocketLaunch
  }
];

const currentFocusAreas = [
  {
    id: 'focus-1',
    title: 'AI Integration',
    category: 'Next-Gen Engineering',
    tag: 'GenAI & LLMs',
    description: 'Orchestrating autonomous AI agents, semantic vector search, dynamic prompt pipelines, and embedding Gemini / OpenAI models directly into production web workflows.',
    technologies: ['Gemini API', 'LangChain', 'Vector DBs', 'Function Calling', 'RAG Architecture'],
    highlight: 'Building smart, context-aware user interfaces that automate real business tasks.'
  },
  {
    id: 'focus-2',
    title: 'System Design',
    category: 'Scalable Systems',
    tag: 'Enterprise Architecture',
    description: 'Mastering distributed system principles, microservice boundaries, event-driven messaging, high-availability caching, and resilient API gateway design.',
    technologies: ['Microservices', 'Event Bus', 'Redis Caching', 'Load Balancing', 'Rate Limiting'],
    highlight: 'Engineering software designed to scale gracefully from 1,000 to 1,000,000+ concurrent requests.'
  },
  {
    id: 'focus-3',
    title: 'Backend Scaling',
    category: 'High Concurrency',
    tag: 'Data & Performance',
    description: 'Optimizing high-throughput Node.js clustering, Supabase / PostgreSQL query planning, indexing strategies, and connection pooling under heavy load.',
    technologies: ['PostgreSQL Indexing', 'Node Cluster API', 'Supabase RLS', 'Connection Pooling'],
    highlight: 'Eliminating database bottlenecks and delivering sub-50ms API response times.'
  }
];

const languagesData = [
  {
    name: 'Bangla (বাংলা)',
    proficiency: 'Native / Bilingual',
    desc: 'Fluent primary language for clear communication, collaboration and conceptual articulation.',
    flag: '🇧🇩',
    
  },
  {
    name: 'English',
    proficiency: 'Professional Working Proficiency',
    desc: 'Full professional command for international team collaboration, technical writing, and code reviews.',
    flag: '🌐',
   
  },
  {
    name: 'Hindi (हिन्दी)',
    proficiency: 'Conversational Proficiency',
    desc: 'Strong verbal comprehension and spoken fluency for regional communication.',
    flag: '🇮🇳',
    
  }
];

export default function CurrentFocusSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP এর বদলে Intersection Observer ব্যবহার করা হয়েছে
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -8% 0px', // GSAP এর 'top 92%' এর মতো কাজ করবে
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = sectionRef.current.querySelectorAll('.focus-card');
          cards.forEach((card, index) => {
            // GSAP এর stagger: 0.08 এর হুবহু কাজ
            card.style.transitionDelay = `${index * 0.08}s`;
            card.classList.add('animate-focus-in');
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
      id="focus"
      className="relative py-24 lg:py-32 bg-background/85 border-t border-slate-900 overflow-hidden backdrop-blur-[3px]"
    >
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-flow-matrix opacity-25 pointer-events-none" />

      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-pink-400 font-semibold uppercase tracking-wider">
                09 // Continuous Evolution & Process
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Approach, <span className="text-brand-gradient-glow">Focus & Languages</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-purple-500/40 text-pink-300 text-xs font-mono">
            <HiOutlineRocketLaunch className="w-4 h-4 text-purple-400" />
            <span>2026 Innovation Roadmap & Engineering Lifecycle</span>
          </div>
        </div>

        {/* Development Lifecycle & Approach */}
        <div className="mb-24">
          <h3 className="text-xl font-display font-bold text-white mb-8 flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_12px_#EC4899]" />
            <span>Development Lifecycle & Approach</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {approachSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.number}
                  className="focus-card relative p-6 rounded-3xl bg-slate-950/85 border border-purple-500/30 hover:border-pink-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-full pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-3xl font-black text-slate-700 group-hover:text-pink-400 transition-colors">
                        {step.number}
                      </span>
                      <div className="p-3 rounded-2xl bg-purple-950/60 border border-purple-500/40 text-pink-400 group-hover:bg-brand-gradient group-hover:text-white transition-all shadow-md">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="text-[10px] font-mono text-pink-400 uppercase tracking-widest mb-1">
                      {step.subtitle}
                    </div>

                    <h4 className="text-lg font-display font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Deliverables:
                    </div>
                    <div className="space-y-1.5">
                      {step.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300">
                          <HiOutlineCheckCircle className="w-3 h-3 text-pink-400 shrink-0" />
                          <span className="truncate">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: First 2 Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_12px_#EC4899]" />
              <span>Active Deep Dives & Engineering Frontiers</span>
            </h3>

            <div className="space-y-4">
              {currentFocusAreas.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="focus-card p-6 sm:p-8 rounded-3xl bg-slate-950/85 border border-purple-500/30 hover:border-pink-500/60 transition-all duration-300 shadow-xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-full pointer-events-none" />

                  <div className="flex items-start justify-between gap-4 mb-3 relative z-10">
                    <div>
                      <span className="text-xs font-mono text-pink-400 uppercase tracking-wide block mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-xl font-display font-bold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-pink-300 text-xs font-mono shrink-0">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 relative z-10">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-purple-500/30 text-xs font-mono text-pink-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-300 font-mono relative z-10">
                    <HiOutlineCheckCircle className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Language Proficiency */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_#8B5CF6]" />
              <span>Language Proficiency</span>
            </h3>

            <div className="focus-card p-6 sm:p-8 rounded-3xl bg-slate-950/85 border border-purple-500/30 shadow-2xl backdrop-blur-xl space-y-5">
              {languagesData.map((lang, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 hover:border-purple-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-sm font-bold text-white">
                        {lang.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-pink-400 px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30">
                      {lang.proficiency}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang.desc}
                  </p>

                  <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-pink-300 font-medium">{lang.greeting}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Width 3rd Focus Card (Backend Scaling) */}
          {currentFocusAreas[2] && (
            <div className="lg:col-span-12">
              <div
                key={currentFocusAreas[2].id}
                className="focus-card p-6 sm:p-8 rounded-3xl bg-slate-950/85 border border-purple-500/30 hover:border-pink-500/60 transition-all duration-300 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex items-start justify-between gap-4 mb-3 relative z-10">
                  <div>
                    <span className="text-xs font-mono text-pink-400 uppercase tracking-wide block mb-1">
                      {currentFocusAreas[2].category}
                    </span>
                    <h4 className="text-xl font-display font-bold text-white">
                      {currentFocusAreas[2].title}
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-pink-300 text-xs font-mono shrink-0">
                    {currentFocusAreas[2].tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 relative z-10">
                  {currentFocusAreas[2].description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
                  {currentFocusAreas[2].technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-purple-500/30 text-xs font-mono text-pink-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-300 font-mono relative z-10">
                  <HiOutlineCheckCircle className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>{currentFocusAreas[2].highlight}</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Raw CSS Animation replacing GSAP */}
      <style jsx>{`
        .focus-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.45s ease-out,
                      transform 0.45s ease-out;
        }

        .focus-card.animate-focus-in {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .focus-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}