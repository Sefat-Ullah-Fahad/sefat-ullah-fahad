"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {
  HiOutlineCodeBracket,
  HiOutlineSparkles,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineGlobeAlt,
  HiOutlineChevronDown
} from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa6';

const projectsData = [
  {
    id: 'proj-1',
    title: 'Zero Olympiad',
    url: 'https://www.zeroolympiad.com/',
    github: 'https://github.com/sefatullahfahad/zero-olympiad',
    description: "Zero Olympiad empowers students to become Global Citizens by mastering the UN's 17 SDGs. From Zero Poverty to Zero Hunger, we prepare future leaders to navigate World Affairs, Global Policies, and Diplomacy by 2030.",
    image: 'https://res.cloudinary.com/dsga4gyw9/image/upload/v1779348906/Zero-Olympiad-Cultivating-Global-Leaders-from-Bangladesh-05-21-2026_01_22_PM_jjcs6w.png',
    tech: ['Next.js', 'Tailwind', 'NextAuth.js', 'Redux Toolkit', 'GSAP', 'Framer Motion', 'Node.js', 'Express.js', 'JWT', 'Supabase']
  },
  {
    id: 'proj-2',
    title: 'GLTS : Global Leadership Training & Skills',
    url: 'https://glts.faatihaaayat.com/',
    github: 'https://github.com/sefatullahfahad/glts',
    description: 'Transform your potential into global excellence with GLTS by Faatiha Aayat. An exclusive professional development program for strategic leadership, public speaking, and global representation.',
    image: 'https://res.cloudinary.com/dsga4gyw9/image/upload/v1779348881/GLTS-Global-Leadership-Training-Skills-Faatiha-Aayat-05-21-2026_01_23_PM_gdwluf.png',
    tech: ['Next.js', 'Tailwind', 'Supabase Auth', 'Redux Toolkit', 'GSAP', 'Framer Motion', 'Node.js', 'Express.js', 'JWT', 'Supabase']
  },
  {
    id: 'proj-3',
    title: 'Axialoop',
    url: 'https://axialoop.vercel.app/en',
    github: 'https://github.com/sefatullahfahad/axialoop',
    description: 'Empowering Businesses Through Advanced AI Transformation. Your Strategic AI Partner for Seamless Solutions at 360 Degrees.',
    image: 'https://res.cloudinary.com/dsga4gyw9/image/upload/v1781001892/axialoop-vercel-app-en-06-09-2026_04_44_PM_qvrmwn.png',
    tech: ['Next.js', 'Tailwind', 'Redux Toolkit', 'GSAP', 'Framer Motion']
  },
  {
    id: 'proj-4',
    title: 'William White',
    url: 'https://alabamaoutside.vercel.app/',
    github: 'https://github.com/RaselMridha792/alabamaoutside',
    description: 'With decades of combined legal experience, our firm is dedicated to delivering high-caliber, strategic solutions for our clients. We combine seasoned courtroom expertise with personalized client care to ensure your rights and assets are fully protected.',
    image: 'https://res.cloudinary.com/dsga4gyw9/image/upload/v1781783904/alabamaoutside-vercel-app-06-18-2026_05_57_PM_nhtsww.png',
    tech: ['Next.js', 'React-DOM', 'Tailwind CSS', 'Framer Motion', 'Motion', 'Swiper', 'Lucide React', 'React icon', 'ESLint', 'eslint-config-next']
  }
];

function optimizeCloudinaryUrl(url, width = 1200) {
  if (!url.includes('/upload/')) return url;
  return url.replace(
    '/upload/',
    `/upload/f_auto,q_auto,w_${width},dpr_auto/`
  );
}

const SHIMMER_BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iIzBmMTcyYSIvPjwvc3ZnPg==';

export default function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const displayedProjects = projectsData.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projectsData.length;

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 bg-background border-t border-slate-900 overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: 'radial-gradient(#EC4899 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.03)_0%,transparent_100%)] pointer-events-none z-0" />

      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#5B21B6]/15 rounded-full blur-[150px] pointer-events-none transform-gpu z-0" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-[#DB2777]/15 rounded-full blur-[150px] pointer-events-none transform-gpu z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-pink-400 font-semibold uppercase tracking-wider">
                06 // Featured Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Selected <span className="text-brand-gradient-glow">Projects</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-purple-500/40 text-pink-300 text-xs font-mono backdrop-blur-md">
            <HiOutlineCodeBracket className="w-4 h-4 text-purple-400" />
            <span>Full-Stack Implementations</span>
          </div>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {displayedProjects.map((project, index) => {
            const isEven = index % 2 !== 0;
            const isPriority = index === 0;

            return (
              <div
                key={project.id}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 sm:p-10 rounded-3xl bg-slate-950/60 border border-slate-800/80 hover:border-pink-500/30 shadow-xl backdrop-blur-sm group ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-7/12 relative">
                  <div className="absolute inset-0 bg-brand-gradient rounded-2xl blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 transform-gpu" />
                  
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 group-hover:border-pink-500/50 transition-colors duration-500 bg-slate-900 aspect-[16/10] sm:aspect-[16/9] shadow-2xl">
                    <Image
                      src={optimizeCloudinaryUrl(project.image, 1200)}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
                      priority={isPriority}
                      loading={isPriority ? undefined : 'lazy'}
                      quality={75}
                      placeholder="blur"
                      blurDataURL={SHIMMER_BLUR_DATA_URL}
                      className="object-cover object-top filter transition-all duration-700 group-hover:scale-105 group-hover:saturate-110 transform-gpu"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                      Live Project
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-5/12 flex flex-col items-start transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-pink-400 mb-4">
                    <HiOutlineSparkles className="w-5 h-5" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                      Project Showcase
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-6 group-hover:text-pink-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mb-10">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-purple-500/30 text-xs font-mono text-slate-300 hover:border-pink-500/60 hover:text-pink-300 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-gradient text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_35px_rgba(236,72,153,0.5)] hover:scale-[1.02] active:scale-95 transform-gpu"
                    >
                      <HiOutlineGlobeAlt className="w-5 h-5" />
                      <span>Live View</span>
                      <HiOutlineArrowTopRightOnSquare className="w-4 h-4 ml-1" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-purple-500/50 text-slate-300 hover:text-white font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-[1.02] active:scale-95 transform-gpu"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>Source Code</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {hasMoreProjects && (
          <div className="mt-20 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-slate-900/80 border border-purple-500/40 hover:border-pink-500/60 text-slate-300 hover:text-white font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.25)] hover:scale-[1.02] active:scale-95 backdrop-blur-md cursor-pointer"
            >
              <span>Load More Projects</span>
              <HiOutlineChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}