"use client";

import React from "react";
import { HiOutlineArrowRight, HiOutlinePaperAirplane } from "react-icons/hi2";

export default function HeroScrollButtons() {
  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div
      className="hero-animate-text flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8"
      style={{ animationDelay: "0.4s" }}
    >
      <button
        onClick={(e) => handleScrollToSection(e, "#projects")}
        id="hero-cta-projects"
        className="btn-shimmer group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-sage text-brand-cream font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_8px_24px_rgba(var(--brand-blue-rgb),0.24)] hover:shadow-[0_12px_30px_rgba(var(--brand-blue-rgb),0.32)] hover:scale-[1.03] active:scale-95 cursor-pointer"
      >
        <span>Explore Projects</span>
        <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </button>

      <button
        onClick={(e) => handleScrollToSection(e, "#contact")}
        id="hero-cta-contact"
        className="btn-shimmer group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/70 hover:bg-white border border-brand-blue/30 hover:border-brand-sage text-brand-blue hover:text-brand-blue-dark font-semibold text-sm transition-all duration-300 shadow-md shadow-brand-blue/10 hover:shadow-[0_8px_24px_rgba(var(--brand-blue-rgb),0.16)] hover:scale-[1.02] active:scale-95 cursor-pointer"
      >
        <span>Let&#39;s Build Together</span>
        <HiOutlinePaperAirplane className="w-4 h-4 text-brand-sage transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-12" />
      </button>
    </div>
  );
}
