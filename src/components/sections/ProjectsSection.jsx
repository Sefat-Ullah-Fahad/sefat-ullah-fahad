"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HiOutlineCodeBracket,
  HiOutlineSparkles,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineGlobeAlt,
  HiOutlineChevronDown,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";

const projectsData = [
  {
    id: "proj-1",
    title: "Zero Olympiad",
    url: "https://www.zeroolympiad.com/",
    github: "https://github.com/sefatullahfahad/zero-olympiad",
    description:
      "Zero Olympiad empowers students to become Global Citizens by mastering the UN's 17 SDGs. From Zero Poverty to Zero Hunger, we prepare future leaders to navigate World Affairs, Global Policies, and Diplomacy by 2030.",
    image:
      "https://res.cloudinary.com/dsga4gyw9/image/upload/v1779348906/Zero-Olympiad-Cultivating-Global-Leaders-from-Bangladesh-05-21-2026_01_22_PM_jjcs6w.png",
    tech: [
      "Next.js",
      "Tailwind",
      "NextAuth.js",
      "Redux Toolkit",
      "GSAP",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "JWT",
      "Supabase",
    ],
  },
  {
    id: "proj-2",
    title: "GLTS : Global Leadership Training & Skills",
    url: "https://glts.faatihaaayat.com/",
    github: "https://github.com/sefatullahfahad/glts",
    description:
      "Transform your potential into global excellence with GLTS by Faatiha Aayat. An exclusive professional development program for strategic leadership, public speaking, and global representation.",
    image:
      "https://res.cloudinary.com/dsga4gyw9/image/upload/v1779348881/GLTS-Global-Leadership-Training-Skills-Faatiha-Aayat-05-21-2026_01_23_PM_gdwluf.png",
    tech: [
      "Next.js",
      "Tailwind",
      "Supabase Auth",
      "Redux Toolkit",
      "GSAP",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "JWT",
      "Supabase",
    ],
  },
  {
    id: "proj-3",
    title: "Axialoop",
    url: "https://axialoop.vercel.app/en",
    github: "https://github.com/sefatullahfahad/axialoop",
    description:
      "Empowering Businesses Through Advanced AI Transformation. Your Strategic AI Partner for Seamless Solutions at 360 Degrees.",
    image:
      "https://res.cloudinary.com/dsga4gyw9/image/upload/v1781001892/axialoop-vercel-app-en-06-09-2026_04_44_PM_qvrmwn.png",
    tech: ["Next.js", "Tailwind", "Redux Toolkit", "GSAP", "Framer Motion"],
  },
  {
    id: "proj-4",
    title: "William White",
    url: "https://alabamaoutside.vercel.app/",
    github: "https://github.com/RaselMridha792/alabamaoutside",
    description:
      "With decades of combined legal experience, our firm is dedicated to delivering high-caliber, strategic solutions for our clients. We combine seasoned courtroom expertise with personalized client care to ensure your rights and assets are fully protected.",
    image:
      "https://res.cloudinary.com/dsga4gyw9/image/upload/v1781783904/alabamaoutside-vercel-app-06-18-2026_05_57_PM_nhtsww.png",
    tech: [
      "Next.js",
      "React-DOM",
      "Tailwind CSS",
      "Framer Motion",
      "Motion",
      "Swiper",
      "Lucide React",
      "React icon",
      "ESLint",
      "eslint-config-next",
    ],
  },
];

const SHIMMER_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iIzBmMTcyYSIvPjwvc3ZnPg==";

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
      className="relative py-24 lg:py-32 bg-brand-blue border-t border-white/15 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(var(--brand-cream-rgb),0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--brand-sage-rgb),0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-white/20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-brand-sage-pale font-semibold uppercase tracking-wider">
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-cream tracking-tight">
              Selected{" "}
              <span className="text-brand-gradient-glow">Projects</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-mid border border-brand-sage/50 text-brand-cream text-xs font-mono">
            <HiOutlineCodeBracket className="w-4 h-4 text-brand-sage-pale" />
            <span>Full-Stack Implementations</span>
          </div>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {displayedProjects.map((project, index) => {
            const isEven = index % 2 !== 0;

            return (
              <div
                key={project.id}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 sm:p-10 rounded-3xl bg-brand-blue-mid border border-white/15 hover:border-brand-sage/80 shadow-xl shadow-brand-blue-dark/20 group ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-7/12 relative">
                  <div className="absolute inset-0 bg-brand-sage rounded-2xl blur-xl opacity-10 group-hover:opacity-25 transition-opacity duration-500 transform-gpu" />

                  <div className="relative rounded-2xl overflow-hidden border border-white/15 group-hover:border-brand-sage/70 transition-colors duration-500 bg-brand-blue-deep aspect-[16/10] sm:aspect-[16/9] shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 5rem), (max-width: 1023px) calc(100vw - 8rem), (max-width: 1200px) 58vw, 746px"
                      className="object-cover object-top filter transition-all duration-700 group-hover:scale-105 group-hover:saturate-110 transform-gpu"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/85 via-brand-blue-dark/15 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue-deep/95 backdrop-blur-md border border-white/20 text-[10px] font-mono text-brand-cream">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-sage animate-pulse" />
                      Live Project
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-5/12 flex flex-col items-start transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-brand-sage-pale mb-4">
                    <HiOutlineSparkles className="w-5 h-5" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                      Project Showcase
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-brand-cream mb-6 group-hover:text-brand-sage-pale transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-brand-ice-light leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mb-10">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-brand-blue-deep border border-white/15 text-xs font-mono text-brand-ice hover:border-brand-sage hover:text-brand-cream transition-colors"
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
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-sage text-brand-blue-dark font-bold text-sm tracking-wide transition-all duration-300 shadow-md shadow-black/15 hover:bg-brand-sage-pale hover:scale-[1.02] active:scale-95 transform-gpu"
                    >
                      <HiOutlineGlobeAlt className="w-5 h-5" />
                      <span>Live View</span>
                      <HiOutlineArrowTopRightOnSquare className="w-4 h-4 ml-1" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-blue-deep border border-white/20 hover:border-brand-sage text-brand-cream hover:text-brand-sage-pale font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-95 transform-gpu"
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
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-blue-mid border border-white/20 hover:border-brand-sage text-brand-cream hover:text-brand-sage-pale font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95 cursor-pointer"
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
