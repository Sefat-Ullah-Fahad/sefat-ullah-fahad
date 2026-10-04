import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaBolt, FaRocket, FaShieldHalved } from "react-icons/fa6";

// 7. Dynamic Import (Lazy Loading): vhari client component ba interactivity achhe emon component ke dynamic import kora holo
const HeroScrollButtons = dynamic(() => import("../HeroScrollButtons"), {
  ssr: true, // Jokhoni page render hobe sathe asbe, but client-side e JS alada load hobe
});

// Utility function for Cloudinary (Jodi vobisshote external image use koren)
function optimizeCloudinaryUrl(url, width = 640) {
  if (!url || !url.includes("/upload/")) return url;
  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto:best,w_${width},dpr_auto/`,
  );
}

const heroSectionData = {
  name: "Sefat Ullah Fahad",
  nickname: "Sefat ullah Fahad",
  title: "Full Stack Developer",
  tagline:
    "Building scalable digital experiences with clean code, thoughtful design and modern technology.",
  location: "Rajshahi Shaheed A. H. M. Kamaruzzaman Stadium, Bangladesh",
  status: "Available for selected opportunities",
  heroIntro:
    "Hi, I'm Sefatullah Fahad, a passionate Full-Stack Web Developer. I love building fast, scalable, and user-friendly web applications from scratch.",
  heroSubIntro:
    "As a tech-agnostic developer, I adapt quickly and use the best tools, frameworks, and technologies required to turn ideas into clean, efficient code.",
  floatingBadges: [
    {
      label: "Next.js 15 App Router",
      icon: <FaBolt className="text-brand-sage" />,
      pos: "top-2 -left-4 sm:-left-8",
    },
    {
      label: "Full-Stack MERN",
      icon: <FaRocket className="text-brand-blue" />,
      pos: "bottom-8 -left-4 sm:-left-10",
    },
    {
      label: "GSAP Animation Suite",
      icon: <HiOutlineSparkles className="text-brand-sage" />,
      pos: "top-14 -right-4 sm:-right-8",
    },
    {
      label: "Supabase & REST APIs",
      icon: <FaShieldHalved className="text-brand-blue" />,
      pos: "bottom-4 -right-4 sm:-right-6",
    },
  ],
  stats: [
    { label: "Clean Code & RLS", value: "100", suffix: "%", color: "sage" },
    {
      label: "Modern Full Stack",
      value: "MERN",
      suffix: "+Next",
      color: "blue",
    },
    {
      label: "Active Full-Time",
      value: "Experivia",
      suffix: "",
      color: "sage",
    },
  ],
};

// 2. Client Component Check: Ekhane kono useState ba onClick nai, tai eta 100% Server Component hisebe thakbe. SEO er jonno eta best.
export default function Hero() {
  return (
    // 6. Semantic HTML: <div> er poriborte <section> ebong aspasher structural element use kora hoyeche
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden hero-section-container bg-white text-brand-blue"
    >
      {/* Background Ornaments */}
      <div
        className="hero-grid-pattern absolute inset-0 opacity-100 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* 6. Semantic HTML: <header> for the main introductory text */}
          <header className="lg:col-span-7 flex flex-col items-start">
            <div
              className="hero-animate-text inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/75 border border-brand-sage/50 text-brand-blue text-xs font-medium mb-6 shadow-[0_8px_24px_rgba(var(--brand-blue-rgb),0.10)] backdrop-blur-md"
              style={{ animationDelay: "0s" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sage opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-sage" />
              </span>
              <span className="font-mono">{heroSectionData.status}</span>
            </div>

            <div
              className="hero-animate-text space-y-1 mb-3"
              style={{ animationDelay: "0.1s" }}
            >
              {/* <span className="font-mono text-xs sm:text-sm text-brand-blue tracking-wider uppercase font-semibold flex items-center gap-2">
                <HiOutlineSparkles className="w-4 h-4 text-brand-sage" />
                <span>Full-Stack Portfolio of</span>
              </span> */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-brand-blue-dark leading-[1.08]">
                Sefat Ullah <br className="hidden sm:block" />
                <span className="hero-name-gradient font-black">Fahad</span>
              </h1>
              <p className="sr-only">
                Official portfolio of Sefat Ullah Fahad, Full Stack Developer in
                Rajshahi, Bangladesh.
              </p>
            </div>

            <div
              className="hero-animate-text flex flex-wrap items-center gap-3 mb-6"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="h-0.5 w-8 bg-brand-sage rounded-full" />
              <h2 className="text-lg sm:text-xl font-mono font-semibold text-brand-blue tracking-tight">
                {heroSectionData.title}
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-sage/15 border border-brand-sage/45 text-brand-blue font-mono">
                Software & Financial Accounting
              </span>
            </div>

            <div
              className="hero-animate-text space-y-3.5 mb-8 max-w-2xl text-brand-blue-muted text-base sm:text-lg leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="font-medium text-brand-blue-dark">
                {heroSectionData.heroIntro}
              </p>
              <p className="text-sm sm:text-base text-brand-blue-soft leading-relaxed font-normal">
                {heroSectionData.heroSubIntro}
              </p>
            </div>

            {/* Render dynamically loaded client component */}
            <HeroScrollButtons />

            <div
              className="hero-animate-text grid grid-cols-3 gap-6 pt-6 border-t border-brand-blue/20 w-full max-w-lg"
              style={{ animationDelay: "0.5s" }}
            >
              {heroSectionData.stats.map((stat, idx) => (
                <div key={idx} className="group cursor-default">
                  <div
                    className={`text-xl sm:text-2xl font-display font-extrabold text-brand-blue-dark tracking-tight ${stat.color === "sage" ? "group-hover:text-brand-sage" : "group-hover:text-brand-blue"} transition-colors`}
                  >
                    {stat.value}
                    <span
                      className={
                        stat.color === "sage"
                          ? "text-brand-sage"
                          : "text-brand-blue"
                      }
                    >
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-xs text-brand-blue-soft font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </header>

          {/* 6. Semantic HTML: <figure> is best for showcasing an image with elements around it */}
          <figure className="lg:col-span-5 flex justify-center items-center relative hero-animate-image m-0">
            <div className="relative w-[320px] h-[320px] sm:w-[410px] sm:h-[410px] flex items-center justify-center [perspective:1000px]">
              {/* Orbital Animations (Kept completely unchanged as per request) */}
              <div className="absolute -inset-8 rounded-full border-2 border-dashed border-brand-blue/35 animate-spin-cw pointer-events-none" />
              <div className="absolute -inset-4 rounded-full border border-dotted border-brand-sage/65 animate-spin-ccw-fast pointer-events-none" />

              <div className="absolute -inset-6 rounded-full border-2 border-brand-blue/45 animate-spin-3d-cw pointer-events-none shadow-[0_0_20px_rgba(var(--brand-blue-rgb),0.18)]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-blue shadow-[0_0_15px_rgba(var(--brand-blue-rgb),0.35)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </div>
              </div>

              <div className="absolute -inset-10 rounded-full border border-brand-sage/55 animate-spin-3d-ccw pointer-events-none shadow-[0_0_25px_rgba(var(--brand-sage-rgb),0.2)]">
                <div className="absolute -bottom-2 right-1/4 w-3.5 h-3.5 rounded-full bg-brand-sage shadow-[0_0_15px_rgba(var(--brand-sage-rgb),0.45)]" />
              </div>

              <div className="absolute -inset-2 rounded-full border border-dashed border-brand-blue/25 animate-spin-3d-vert pointer-events-none" />

              <div className="absolute -inset-6 rounded-full animate-spin-cw-fast pointer-events-none">
                <div className="w-3 h-3 rounded-full bg-brand-blue shadow-[0_0_12px_rgba(var(--brand-blue-rgb),0.35)] absolute -top-1.5 left-1/3" />
                <div className="w-2.5 h-2.5 rounded-full bg-brand-sage shadow-[0_0_12px_rgba(var(--brand-sage-rgb),0.4)] absolute -bottom-1 right-1/3" />
              </div>

              <div className="absolute inset-0 rounded-full bg-brand-sage/15 blur-2xl animate-pulse-glow pointer-events-none" />

              <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full p-1.5 bg-gradient-to-b from-brand-blue via-brand-sage to-brand-blue shadow-2xl shadow-brand-blue/25 overflow-hidden group">
                <div className="w-full h-full rounded-full bg-white overflow-hidden relative flex items-center justify-center border border-brand-sage/40">
                  {/* 1. Images Optimize: next/image sothik vabe optimized */}
                  <Image
                    src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1786959761/sefat-ullah-fahad_fdxwuu.jpg"
                    alt="Sefat Ullah Fahad - Full Stack Developer"
                    fill
                    preload
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 410px"
                    className="object-cover object-center filter saturate-105 contrast-105 transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-45" />
                </div>
              </div>

              {heroSectionData.floatingBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className={`hero-animate-badge absolute ${badge.pos} z-20 hidden xs:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-brand-sage/50 hover:border-brand-blue/70 text-brand-blue-dark text-xs font-mono font-medium shadow-xl shadow-brand-blue/15 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-default`}
                  style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
                >
                  <span className="text-sm">{badge.icon}</span>
                  <span className="whitespace-nowrap">{badge.label}</span>
                </div>
              ))}
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
