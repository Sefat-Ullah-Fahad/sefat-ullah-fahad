"use client";

import React, { useEffect, useRef } from "react";
import {
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineBuildingOffice2,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi2";

const experienceData = [
  {
    id: "exp-1",
    title: "Full-Stack Developer & Accountant",
    company: "Experivia",
    period: "April 2026 – Present",
    isCurrent: true,
    type: "Full-time / Permanent",
    responsibilities: [
      "Architecting and maintaining full-stack web applications and client CMS environments with Next.js and MERN stack.",
      "Building custom WordPress widgets, themes, and dynamic plugins tailored for high-conversion marketing funnels.",
      "Developing secure backend REST APIs, JWT authentication protocols, and Supabase / MongoDB query pipelines.",
      "Leading database schema optimization and automated data migration pipelines for growing product catalogs.",
      "Managing corporate bookkeeping, financial reporting, cash flow analysis, and data auditing with strict accuracy.",
    ],
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Supabase",
      "WordPress",
      "Financial Analysis",
      "API Optimization",
    ],
  },
  {
    id: "exp-2",
    title: "Full-Stack Developer & Accountant — Intern",
    company: "Experivia",
    period: "December 2025 – March 2026",
    isCurrent: false,
    type: "4-Month Intensive Internship",
    responsibilities: [
      "Contributed actively to core frontend development sprints, converting design specifications into responsive React components.",
      "Assisted in backend endpoint testing, bug remediation, and third-party API integrations.",
      "Handled day-to-day transaction records, financial ledger updates, and weekly financial summarization.",
      "Demonstrated high engineering velocity and dual-discipline reliability, resulting in rapid promotion to permanent full-time role.",
    ],
    skills: [
      "JavaScript ES6+",
      "React.js",
      "Express.js",
      "Tailwind CSS",
      "Bookkeeping",
      "Postman",
    ],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = sectionRef.current.querySelectorAll(".exp-card");
          cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.08}s`;
            card.classList.add("animate-exp-in");
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
      id="experience"
      className="relative py-24 lg:py-32 bg-brand-cream border-t border-brand-blue/10 overflow-hidden backdrop-blur-[3px]"
    >
      {/* Subtle Light Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(var(--brand-blue-rgb),0.06)_1px,transparent_1px)] bg-[size:100%_40px] bg-fixed pointer-events-none opacity-80" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--brand-sage-rgb),0.06)_1px,transparent_1px)] bg-[size:40px_100%] bg-fixed pointer-events-none opacity-80" />

      {/* Light Gradient Glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-brand-sage/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-brand-blue/20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-brand-olive font-bold uppercase tracking-wider">
                04 // Professional History
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-blue tracking-tight">
              Work <span className="text-brand-gradient-glow">Experience</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-blue/30 text-brand-blue text-xs font-mono shadow-sm">
            <HiOutlineBriefcase className="w-4 h-4 text-brand-sage" />
            <span>Dual Role: Software Development & Accounting</span>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="exp-card group relative rounded-3xl bg-brand-blue border border-white/20 p-6 sm:p-10 overflow-hidden shadow-xl shadow-brand-blue-dark/25 transition-all duration-300 hover:border-brand-sage hover:shadow-2xl hover:shadow-brand-sage/20"
            >
              <div className="absolute inset-0 bg-brand-blue transition-transform duration-700 group-hover:scale-105 z-0">
                <div className="experience-card-reveal absolute -top-[200px] -right-[200px] h-[400px] w-[400px] rounded-full bg-brand-sage/25 transition-transform duration-700 ease-out group-hover:scale-[2.5]" />
              </div>

              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-brand-blue-deep border border-white/15 text-brand-sage-pale shadow-md mt-1">
                    <HiOutlineBuildingOffice2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                        {exp.title}
                      </h3>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-sage/20 border border-brand-sage/45 text-brand-sage-pale text-xs font-mono font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-sage animate-ping" />
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-brand-ice font-mono">
                      <span className="text-brand-sage-pale font-bold">
                        {exp.company}
                      </span>
                      <span className="text-white/50">•</span>
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-blue-deep border border-white/15 text-xs font-mono text-brand-cream self-start lg:self-auto shadow-inner">
                  <HiOutlineCalendarDays className="w-4 h-4 text-brand-sage-pale" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-8 relative z-10">
                <h4 className="text-xs text-brand-sage-pale uppercase tracking-wider mb-4 flex items-center gap-2 font-bold">
                  <HiOutlineSparkles className="w-3.5 h-3.5 text-brand-sage" />
                  <span>Key Impact & Responsibilities</span>
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-3 text-sm text-brand-cream leading-relaxed"
                    >
                      <HiOutlineCheckCircle className="w-4 h-4 text-brand-sage mt-1 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-2 relative z-10">
                <span className="text-xs font-mono text-brand-ice mr-2 font-semibold">
                  Technologies Used:
                </span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg bg-brand-blue-deep border border-white/15 text-xs font-mono text-brand-cream hover:border-brand-sage hover:text-brand-sage-pale hover:bg-brand-blue-mid transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .exp-card {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.45s ease-out,
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

          .experience-card-reveal {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
