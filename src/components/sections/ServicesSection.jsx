"use client";

import React, { useEffect, useRef } from 'react';
import {
  HiOutlineSparkles,
  HiOutlineCheckBadge,
  HiOutlineSquares2X2,
  HiOutlineComputerDesktop,
  HiOutlineBolt,
  HiOutlineCodeBracket,
  HiOutlineChartBar,
  HiOutlineUsers
} from 'react-icons/hi2';

const servicesData = [
  {
    id: 'srv-1',
    number: '01',
    title: 'Full-Stack Web Development',
    shortTitle: 'End-to-End Solutions',
    description: 'Building secure, scalable, and high-performance full-stack web applications from scratch using the MERN stack and Next.js.',
    iconName: 'Layers',
    deliverables: [
      'Complete MERN / Next.js Web Apps',
      'Scalable Node.js & Express REST APIs',
      'Database Schema Design (Supabase/Mongo)',
      'Secure Authentication & Role-Based Access'
    ],
    tags: ['Next.js', 'Node.js', 'Express', 'Supabase', 'MongoDB']
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'Pixel-Perfect Frontend',
    shortTitle: 'Figma to React/Next.js',
    description: 'Converting Figma, Adobe XD, or reference designs into highly accurate, fully responsive and clean-coded frontend interfaces.',
    iconName: 'MonitorCheck',
    deliverables: [
      '100% Accurate Figma-to-Code Translation',
      'Fully Responsive (Mobile, Tablet, Desktop)',
      'Clean Semantic HTML5 & Modern CSS/Tailwind',
      'Accessible & Cross-Browser Tested'
    ],
    tags: ['Figma', 'React', 'Tailwind CSS', 'TypeScript', 'A11y']
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'Creative Web Animations',
    shortTitle: 'Interactive UI/UX',
    description: 'Crafting dynamic scroll-based animations and smooth transitions using GSAP, ScrollTrigger, and Framer Motion.',
    iconName: 'Sparkles',
    deliverables: [
      'ScrollTrigger Choreography & Parallax',
      'Micro-Interactions & Magnetic Hover Effects',
      'Smooth Page Transitions & Staggered Enters',
      'High-Performance 60FPS GPU Animations'
    ],
    tags: ['GSAP', 'ScrollTrigger', 'Framer Motion', 'Canvas', 'UI/UX']
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'Performance & SEO Optimization',
    shortTitle: 'Speed & Visibility',
    description: 'Optimizing loading speeds and Core Web Vitals using modern Next.js rendering strategies to create fast and SEO-friendly websites.',
    iconName: 'Zap',
    deliverables: [
      '95+ Google PageSpeed & Core Web Vitals',
      'Next.js SSR/SSG & Edge Caching',
      'Dynamic OpenGraph & Structured JSON-LD',
      'Asset Compression & Code Splitting'
    ],
    tags: ['Core Web Vitals', 'SSR/SSG', 'SEO', 'Edge Caching']
  },
  {
    id: 'srv-5',
    number: '05',
    title: 'WordPress Development',
    shortTitle: 'CMS & Custom Sites',
    description: 'Developing custom WordPress websites, landing pages and blogs that are responsive, editable and easy for clients to manage.',
    iconName: 'FileCode2',
    deliverables: [
      'Custom Elementor / Gutenberg Widgets',
      'Tailored Themes & Fast Loading Speed',
      'E-Commerce (WooCommerce) Integration',
      'Zero-Hassle Client Dashboard Training'
    ],
    tags: ['WordPress', 'Elementor', 'PHP', 'Custom Widgets', 'CMS']
  },
  {
    id: 'srv-6',
    number: '06',
    title: 'Custom Web Applications',
    shortTitle: 'Dashboards & E-Commerce',
    description: 'Developing tailored web solutions including authentication, complex state management, custom dashboards and e-commerce platforms.',
    iconName: 'LayoutGrid',
    deliverables: [
      'Interactive Analytics & Admin Dashboards',
      'Custom E-Commerce & Checkout Workflows',
      'Real-Time Notifications & WebSockets',
      'Redux Toolkit Predictable State Flow'
    ],
    tags: ['Redux Toolkit', 'Auth.js', 'Stripe/Payment', 'Dashboards']
  },
  {
    id: 'srv-7',
    number: '07',
    title: 'Technical Project Management',
    shortTitle: 'Team Leadership',
    description: 'Leading web development teams, managing agile workflows, and ensuring seamless project execution from planning to deployment.',
    iconName: 'Users',
    deliverables: [
      'Agile Team Coordination & Standups',
      'Code Reviews & Architecture Planning',
      'Project Rescue & Seamless Handover',
      'CI/CD Pipeline & Deployment Management'
    ],
    tags: ['Project Management', 'Agile', 'Leadership', 'DevOps']
  }
];

export default function ServicesSection() {
  const sectionRef = useRef(null);

  const iconMap = {
    Layers: HiOutlineSquares2X2,
    MonitorCheck: HiOutlineComputerDesktop,
    Sparkles: HiOutlineSparkles,
    Zap: HiOutlineBolt,
    FileCode2: HiOutlineCodeBracket,
    LayoutGrid: HiOutlineChartBar,
    Users: HiOutlineUsers,
  };

  useEffect(() => {
    // GSAP ScrollTrigger এর বদলে Raw JS Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -20% 0px', // 'top 80%' এর মতো কাজ করবে
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = sectionRef.current.querySelectorAll('.service-bento-card');
          cards.forEach((card, index) => {
            // GSAP এর stagger: 0.1 এর হুবহু কাজ
            card.style.transitionDelay = `${index * 0.1}s`;
            card.classList.add('animate-service-in');
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
      id="services"
      className="relative py-24 lg:py-32 bg-background/90 border-t border-slate-900 overflow-hidden backdrop-blur-[3px]"
    >
      <div className="absolute inset-0 bg-flow-matrix opacity-25 pointer-events-none" />

      <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-[#5B21B6]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#DB2777]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-pink-400 font-semibold uppercase tracking-wider">
                07 // Services & Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Services & <span className="text-brand-gradient-glow">Offerings</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-purple-500/40 text-pink-300 text-xs font-mono">
            <HiOutlineSparkles className="w-4 h-4 text-purple-400" />
            <span>High-Velocity Engineering & Architecture</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(min-content,max-content)]">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || HiOutlineSparkles;
            
            let spanClass = 'col-span-1';
            if (index === 0) spanClass = 'md:col-span-2 lg:col-span-2';
            else if (index === 5) spanClass = 'md:col-span-2 lg:col-span-2';
            else if (index === 6) spanClass = 'md:col-span-2 lg:col-span-1';

            const isLargeCard = index === 0 || index === 5;

            return (
              <div
                key={service.id}
                className={`service-bento-card group relative rounded-[2rem] border border-slate-800/80 hover:border-pink-500/50 p-8 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] transition-all duration-500 hover:-translate-y-2 ${spanClass}`}
              >
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl transition-transform duration-700 group-hover:scale-105 z-0">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.12)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative z-10 flex-1">
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-4 rounded-2xl bg-slate-900 border border-purple-500/30 text-pink-400 group-hover:bg-brand-gradient group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-md">
                      <Icon className={`${isLargeCard ? 'w-8 h-8' : 'w-6 h-6'}`} />
                    </div>
                    <span className="font-display text-4xl font-black text-slate-800/50 group-hover:text-pink-500/20 transition-colors duration-500">
                      {service.number}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-md">
                      {service.shortTitle}
                    </span>
                  </div>
                  
                  <h3 className={`font-display font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300 ${
                    isLargeCard ? 'text-3xl' : 'text-xl'
                  }`}>
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.deliverables.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs font-mono text-slate-300">
                        <HiOutlineCheckBadge className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-6 border-t border-slate-800/80 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-[11px] font-mono text-slate-300 group-hover:border-purple-500/40 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Raw CSS Animation replacing GSAP */}
      <style jsx>{`
        .service-bento-card {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1),
                      transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1),
                      border-color 0.5s, box-shadow 0.5s;
        }

        .service-bento-card.animate-service-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .service-bento-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}