"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  // { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  // { name: "Focus", href: "#focus" },
  // { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Background blur / shadow on scroll
  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 50);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateScrollState);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollState();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reliable, smooth active-section tracking with IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const visibleSections = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size > 0) {
          // Pick the section with the largest visible ratio (most "in view")
          const topId = [...visibleSections.entries()].sort(
            (a, b) => b[1] - a[1],
          )[0][0];
          setActiveSection(`#${topId}`);
        }
      },
      {
        // Treat a section as "active" once it clears the fixed header,
        // and stop counting it once it's mostly scrolled past.
        rootMargin: "-96px 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleScrollToSection = useCallback((e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full transition-all duration-500 header-animate-in ${
          isMobileMenuOpen ? "z-[70]" : "z-50"
        } ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
            : "bg-white/95 backdrop-blur-md border-b border-brand-blue/10 py-4 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={(e) => handleScrollToSection(e, "top")}
            >
              {/*  */}
             <Image
  src="https://res.cloudinary.com/dp08caz1r/image/upload/v1791028367/sefat-ullah-fahad_x79dpk.png"
  alt="Sefat Ullah Fahad - Full Stack Developer"
  width={200}
  height={64}
  className="h-12 sm:h-14 md:h-18 w-auto object-contain hover:scale-105 transition-transform duration-300"
  style={{ width: "auto" }}
  priority
/>
            </div>

            <div className="flex items-center gap-6 lg:gap-8">
              <nav
                className="hidden lg:flex items-center gap-8"
                aria-label="Primary"
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleScrollToSection(e, link.href)}
                      className={`text-sm font-mono transition-colors duration-300 relative group ${
                        isActive
                          ? isScrolled
                            ? "text-brand-sage-light font-bold"
                            : "text-brand-blue font-bold"
                          : isScrolled
                            ? "text-white hover:text-brand-sage-light"
                            : "text-brand-blue hover:text-brand-olive"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 ${isScrolled ? "bg-brand-sage" : "bg-brand-olive"} transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </a>
                  );
                })}
              </nav>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/sefat-ullah-fahad/"
                  target="_blank"
                  aria-label="Sefat Ullah Fahad on LinkedIn"
                  rel="noopener noreferrer"
                  className={`p-2 sm:p-2.5 rounded-full border transition-all duration-300 group ${
                    isScrolled
                      ? "bg-white/5 border-white/10 text-white"
                      : "bg-brand-blue/5 border-brand-blue/15 text-brand-blue"
                  } hover:bg-brand-linkedin hover:border-brand-linkedin hover:text-white hover:shadow-[0_0_15px_rgba(var(--brand-linkedin-rgb),0.5)]`}
                >
                  <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen((open) => !open)}
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-side-menu"
                  className={`lg:hidden relative z-[70] p-1 focus:outline-none ${isScrolled ? "text-white" : "text-brand-blue"}`}
                >
                  <span className="relative block w-7 h-7">
                    <HiOutlineBars3
                      className={`w-7 h-7 absolute inset-0 transition-all duration-300 ease-out ${
                        isMobileMenuOpen
                          ? "opacity-0 rotate-90 scale-75"
                          : "opacity-100 rotate-0 scale-100"
                      }`}
                    />
                    <HiOutlineXMark
                      className={`w-7 h-7 absolute inset-0 ${isScrolled ? "text-brand-sage-light" : "text-brand-olive"} transition-all duration-300 ease-out ${
                        isMobileMenuOpen
                          ? "opacity-100 rotate-0 scale-100"
                          : "opacity-0 -rotate-90 scale-75"
                      }`}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-500 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(var(--brand-blue-dark-rgb),0.45)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />

      {/* Full-screen side drawer (from right) */}
      <aside
        id="mobile-side-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-[65] h-[100dvh] w-full lg:hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "rgba(var(--brand-blue-dark-rgb),0.55)",
          backdropFilter: "blur(28px) saturate(160%)",
          WebkitBackdropFilter: "blur(28px) saturate(160%)",
          borderLeft: "1px solid rgba(var(--brand-white-rgb),0.12)",
          boxShadow: "-20px 0 60px rgba(var(--brand-black-rgb),0.45)",
        }}
      >
        <div className="flex items-center justify-between px-5 sm:px-6 pt-[max(1.25rem,env(safe-area-inset-top))] pb-4 border-b border-white/10">
          <span className="font-mono text-xs uppercase tracking-wider text-pink-300">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:border-pink-500/40 hover:text-pink-300 transition-colors"
          >
            <HiOutlineXMark className="w-6 h-6" />
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 flex flex-col gap-1.5"
          aria-label="Mobile"
        >
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`nav-item-animate px-4 py-3.5 rounded-2xl text-base font-mono transition-colors duration-200 ${
                  isMobileMenuOpen ? "menu-open" : ""
                } ${
                  isActive
                    ? "text-pink-300 bg-white/10 font-bold border border-pink-500/30 shadow-[0_0_24px_rgba(var(--brand-sage-rgb),0.15)]"
                    : "text-white/90 hover:text-pink-200 hover:bg-white/5 border border-transparent"
                }`}
                style={{
                  animationDelay: isMobileMenuOpen
                    ? `${120 + index * 45}ms`
                    : "0ms",
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="px-5 sm:px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 border-t border-white/10">
          <a
            href="https://www.linkedin.com/in/sefat-ullah-fahad/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-white/8 border border-white/15 text-sm font-mono text-white hover:bg-brand-linkedin/80 hover:border-brand-linkedin transition-all"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <p className="mt-4 text-center text-[11px] font-mono text-slate-400">
            Sefat Ullah Fahad
          </p>
        </div>
      </aside>

      <style jsx>{`
        .header-animate-in {
          opacity: 0;
          transform: translateY(-100px);
          animation: slideDownFade 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s
            forwards;
        }

        @keyframes slideDownFade {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-item-animate {
          opacity: 0;
          transform: translateX(24px);
        }

        .nav-item-animate.menu-open {
          animation: navItemIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes navItemIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .header-animate-in,
          .nav-item-animate {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}
