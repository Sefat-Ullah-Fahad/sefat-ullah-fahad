"use client";

import React, { useEffect, useRef } from "react";
import {
  HiOutlineCpuChip,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";

const aboutSectionData = {
  sectionNumber: "02 // Philosophy & Background",
  heading: "About",
  headingHighlight: "Me",
  subtitleBadge: "Bridging analytical precision with modern web architecture.",
  storyQuote:
    "I am a Full-Stack Web Developer currently managing responsibilities at Experivia. Balancing the logic of clean code with the precision of financial data has allowed me to develop a unique problem-solving mindset.",
  storyParagraphs: [
    "My engineering philosophy revolves around clarity, reliability, and business impact. Whether architecting high-throughput REST APIs, optimizing complex MongoDB queries, or choreographing 60FPS GSAP animations, I treat every project with meticulous attention to detail.",
    "Managing financial ledgers while simultaneously developing full-stack software cultivates strong discipline, strict time management, and a deep appreciation for data integrity. I do not just write code — I build sustainable digital engines that empower businesses to scale securely.",
  ],
  tags: [
    "#FullStackEngineer",
    "#AccountingPrecision",
    "#ContinuousLearner",
    "#ScalableArchitecture",
  ],
  pillars: [
    {
      title: "Full-Stack Engineering",
      icon: HiOutlineCpuChip,
      badge: "Core Competency",
      description:
        "Architecting complete web ecosystems from intuitive React/Next.js interfaces to robust Node.js/Express backends and high-performance databases.",
    },
    {
      title: "Financial & Logic Precision",
      icon: HiOutlineChartBar,
      badge: "Accounting Mindset",
      description:
        "Bridging financial data accuracy and business workflows with software engineering, ensuring zero-error calculations and audit-ready data models.",
    },
    {
      title: "Scalability & Security",
      icon: HiOutlineShieldCheck,
      badge: "Enterprise Standards",
      description:
        "Implementing strict Supabase Row-Level Security, JWT authentication cycles, modular schemas, and database query optimization.",
    },
    {
      title: "Continuous Velocity",
      icon: HiOutlineSparkles,
      badge: "Growth Trajectory",
      description:
        "Relentlessly adopting modern advancements — from GSAP micro-interactions to autonomous AI integration and serverless cloud architectures.",
    },
  ],
};

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards =
            sectionRef.current.querySelectorAll(".about-pillar-card");
          cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.08}s`;
            card.classList.add("animate-pillar-in");
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
      className="relative py-24 lg:py-32 bg-brand-blue border-t border-brand-sage/45 overflow-hidden section-perf"
    >
      <div
        className="about-grid-pattern absolute inset-0 opacity-70 pointer-events-none"
        aria-hidden="true"
      />

      {/* SVG Circuit Overlay */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-30"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="circuitGrad1"
              x1="0"
              y1="0"
              x2="1200"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--brand-sage)" stopOpacity="0.8" />
              <stop offset="0.6" stopColor="var(--brand-cream)" stopOpacity="0.28" />
              <stop offset="1" stopColor="var(--brand-sage)" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient
              id="circuitGrad2"
              x1="1200"
              y1="600"
              x2="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--brand-cream)" stopOpacity="0.24" />
              <stop offset="1" stopColor="var(--brand-sage)" stopOpacity="0.3" />
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
            opacity="0.4"
            fill="none"
          />

          <g>
            <circle
              cx="260"
              cy="200"
              r="4"
              fill="var(--brand-sage)"
              className="animate-ping"
              opacity="0.8"
            />
            <circle cx="260" cy="200" r="4" fill="var(--brand-sage)" />
            <circle cx="540" cy="140" r="3.5" fill="var(--brand-cream)" opacity="0.65" />
            <circle cx="860" cy="220" r="4.5" fill="var(--brand-sage)" />
            <circle cx="300" cy="400" r="3.5" fill="var(--brand-cream)" opacity="0.55" />
            <circle cx="680" cy="460" r="4" fill="var(--brand-sage)" />
            <circle
              cx="980"
              cy="380"
              r="4.5"
              fill="var(--brand-sage)"
              className="animate-pulse"
            />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/25">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-brand-sage-pale font-bold uppercase tracking-wider">
                {aboutSectionData.sectionNumber}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-cream tracking-tight">
              {aboutSectionData.heading}{" "}
              <span className="text-brand-gradient-glow">
                {aboutSectionData.headingHighlight}
              </span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue-mid border border-brand-sage/65">
            <HiOutlineArrowTrendingUp className="w-4 h-4 text-brand-sage-light animate-pulse" />
            <span className="font-mono text-xs text-brand-cream font-medium">
              {aboutSectionData.subtitleBadge}
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-2">
          {/* Main Story Content */}
          <article className="lg:col-span-7 space-y-6 text-brand-ice-light">
            <p className="text-xl sm:text-2xl font-light text-brand-cream leading-relaxed font-sans">
              I am a{" "}
              <strong className="font-semibold text-brand-sage-pale">
                Full-Stack Web Developer
              </strong>{" "}
              currently managing responsibilities at{" "}
              <span className="text-brand-cream font-medium underline decoration-brand-sage hover:decoration-white transition-colors decoration-2 underline-offset-4">
                Experivia
              </span>
              . Balancing the logic of clean code with the precision of
              financial data has allowed me to develop a unique problem-solving
              mindset.
            </p>

            {aboutSectionData.storyParagraphs.map((para, idx) => (
              <p key={idx} className="text-base text-brand-ice-light leading-relaxed">
                {para}
              </p>
            ))}

            <div
              className="pt-2 flex flex-wrap items-center gap-3"
              aria-label="Skill Tags"
            >
              {aboutSectionData.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-md bg-brand-blue-mid border border-brand-sage/60 text-xs font-mono text-brand-cream font-medium shadow-sm hover:border-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Core Strengths / Pillars Sidebar */}
          <aside
            aria-labelledby="core-strengths-title"
            className="lg:col-span-5 bg-brand-blue-mid border border-brand-sage/55 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-brand-blue-dark/35"
          >
            <h3
              id="core-strengths-title"
              className="text-lg font-display font-bold text-brand-cream mb-6 flex items-center justify-between"
            >
              <span>Core Strengths</span>
              <span className="font-mono text-xs text-brand-sage-pale font-bold">
                Pillars
              </span>
            </h3>

            <div className="space-y-4">
              {aboutSectionData.pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <article
                    key={idx}
                    className="about-pillar-card p-4 rounded-xl bg-brand-blue-deep border border-white/15 hover:border-brand-sage hover:bg-brand-blue-mid transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-brand-sage border border-brand-sage text-brand-blue-dark mt-0.5 group-hover:scale-105 group-hover:bg-brand-sage-pale group-hover:text-brand-blue-dark group-hover:border-brand-sage-pale transition-all duration-300 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-bold text-brand-cream group-hover:text-brand-sage-pale transition-colors">
                            {pillar.title}
                          </h4>
                          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-brand-sage/20 border border-brand-sage/60 text-brand-ice-light">
                            {pillar.badge}
                          </span>
                        </div>
                        <p className="text-xs text-brand-ice leading-normal">
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
