"use client";

import React, { useEffect, useRef } from 'react';
import {
  HiOutlineAcademicCap,
  HiOutlineCalendarDays,
  HiOutlineBuildingLibrary,
  HiOutlineSparkles,
  HiOutlineCheckBadge,
  HiOutlineMapPin
} from 'react-icons/hi2';

const educationData = [
  {
    id: 'edu-1',
    degree: 'Alim — 2nd Year (Higher Secondary Equivalent)',
    institution: 'Khulna Nesaria Kamil Madrasah',
    location: 'Khulna, Bangladesh',
    period: '2024 – Present',
    expectedGraduation: '2026',
    status: 'In Progress',
    highlights: [
      'Advanced curriculum in Islamic Studies, Arabic literature, Logic, and General Science & Mathematics.',
      'Mastered disciplined time management by successfully balancing rigorous academic curriculum with full-time software engineering.',
      'Cultivated ethical leadership, analytical problem breakdown, and focused personal dedication.'
    ]
  },
  {
    id: 'edu-2',
    degree: 'Dakhil — Secondary School Certificate',
    institution: 'East Chitki D H D Madrasa',
    location: 'Jhalakathi, Kathalia, Bangladesh',
    period: 'Graduated 2024',
    status: 'Completed',
    highlights: [
      'Graduated with outstanding academic distinction across core sciences and foundational studies.',
      'Active participant in regional logic debates, mathematical problem solving, and community initiatives.',
      'Established early passion for programming, computer science principles, and web technologies.'
    ]
  }
];

export default function EducationSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger এর বদলে Raw JS Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -15% 0px', // 'top 85%' এর মতো কাজ করবে
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = sectionRef.current.querySelectorAll('.edu-card-wrapper');
          cards.forEach((card, index) => {
            // GSAP এর stagger: 0.15 এর হুবহু কাজ
            card.style.transitionDelay = `${index * 0.15}s`;
            card.classList.add('animate-edu-in');
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
      id="education"
      className="relative py-24 lg:py-32 bg-background/85 border-t border-slate-900 overflow-hidden backdrop-blur-[3px]"
    >
      <div className="absolute inset-0 bg-constellation opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#5B21B6]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#DB2777]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-pink-400 font-semibold uppercase tracking-wider">
                05 // Academic Foundation
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Educational <span className="text-brand-gradient-glow">Background</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-purple-500/40 text-pink-300 text-xs font-mono">
            <HiOutlineAcademicCap className="w-4 h-4 text-purple-400" />
            <span>Analytical & Quantitative Studies</span>
          </div>
        </div>

        <div className="relative border-l-2 border-purple-500/20 pl-6 sm:pl-10 ml-3 sm:ml-5 space-y-16">
          {educationData.map((edu) => (
            <div key={edu.id} className="edu-card-wrapper relative">
              
              <div className="absolute -left-[35px] sm:-left-[51px] top-6 w-5 h-5 rounded-full bg-slate-950 border-2 border-pink-500 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)] z-20">
                <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              </div>

              <div className="absolute top-8 -left-6 sm:-left-10 w-6 sm:w-10 h-0.5 bg-gradient-to-r from-purple-500/40 to-transparent pointer-events-none" />

              <div className="relative rounded-3xl bg-slate-950/85 border border-purple-500/30 p-6 sm:p-10 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-pink-500/60 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-brand-gradient text-white shadow-lg shadow-pink-500/30 mt-1 shrink-0">
                      <HiOutlineBuildingLibrary className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-mono text-pink-400 font-semibold uppercase tracking-wider block mb-1.5">
                        {edu.status}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-display font-bold text-white mb-2 leading-tight">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-mono text-purple-300 font-medium flex flex-wrap items-center gap-2">
                        <span>{edu.institution}</span>
                        <span className="text-slate-500 hidden sm:inline">•</span>
                        <span className="text-slate-400 flex items-center gap-1 w-full sm:w-auto mt-1 sm:mt-0">
                          <HiOutlineMapPin className="w-3.5 h-3.5 text-pink-400" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-purple-500/40 text-pink-300 text-xs font-mono shrink-0 self-start">
                    <HiOutlineCalendarDays className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <HiOutlineSparkles className="w-3.5 h-3.5 text-pink-400" />
                    <span>Key Achievements & Focus Areas</span>
                  </div>
                  <div className="space-y-3">
                    {edu.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                      >
                        <HiOutlineCheckBadge className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Raw CSS Animation replacing GSAP */}
      <style jsx>{`
        .edu-card-wrapper {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1),
                      transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .edu-card-wrapper.animate-edu-in {
          opacity: 1;
          transform: translateX(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .edu-card-wrapper {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}