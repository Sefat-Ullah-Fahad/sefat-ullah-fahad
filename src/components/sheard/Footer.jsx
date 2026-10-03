"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineArrowUp,
} from "react-icons/hi2";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa6";

const personalInfo = {
  name: "Sefat Ullah Fahad",
  tagline:
    "Building scalable digital experiences with clean code, thoughtful design and modern technology.",
  location: "Rajshahi, Bangladesh",
  email: "fahad.web.code@gmail.com",
  phone: "01943850789",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sefat-ullah-fahad/",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/Sefat-Ullah-Fahad",
      icon: FaGithub,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/sefat.ullah.fahad",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sefatullahfahad/",
      icon: FaInstagram,
    },
    {
      name: "Discord",
      url: "https://discord.com/users/fahad_5562",
      icon: FaDiscord,
    },
  ],
};

const quickLinks = [
  { name: "Skills & Capabilities", href: "#skills" },
  { name: "Work Experience", href: "#experience" },
  { name: "About Me", href: "#about" },
  { name: "Featured Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact Me", href: "#contact" },
];

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    // GSAP এর বদলে Intersection Observer ব্যবহার করা হয়েছে
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // top 90% এর মতো কাজ করবে (১০% স্ক্রিনে আসলেই ট্রিগার হবে)
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements =
            footerRef.current.querySelectorAll(".footer-element");
          elements.forEach((el, index) => {
            // GSAP এর stagger: 0.1 এর হুবহু কাজ
            el.style.transitionDelay = `${index * 0.1}s`;
            el.classList.add("animate-footer-in");
          });
          // একবার অ্যানিমেশন হওয়ার পর অবজার্ভার বন্ধ করে দেওয়া হবে (toggleActions: 'play none none none')
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    <footer
      ref={footerRef}
      className="relative bg-brand-blue-dark pt-20 pb-10 border-t border-brand-sage/45 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(var(--brand-cream-rgb),0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--brand-sage-rgb),0.05) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-brand-sage/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="footer-element md:col-span-12 lg:col-span-5">
            <div
              className="flex-shrink-0 cursor-pointer inline-block mb-6"
              onClick={scrollToTop}
            >
              <Image
                src="https://res.cloudinary.com/dp08caz1r/image/upload/v1786982036/sefat-ullah-fahad_abjxxg.png"
                alt="Sefat Ullah Fahad"
                width={160}
                height={45}
                className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-base text-brand-ice leading-relaxed max-w-sm mb-8">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              {personalInfo.socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} Profile`}
                    className="p-3 rounded-xl bg-brand-blue-deep border border-white/15 text-brand-ice hover:text-brand-blue-dark hover:bg-brand-sage hover:border-brand-sage transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-element md:col-span-6 lg:col-span-3">
            <h4 className="text-brand-cream font-display font-bold text-lg mb-6">
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="text-sm font-mono text-brand-ice hover:text-brand-sage-pale transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-sage/60 group-hover:bg-brand-sage-pale transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-element md:col-span-6 lg:col-span-4">
            <h4 className="text-brand-cream font-display font-bold text-lg mb-6">
              Contact Info
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-3 text-brand-ice hover:text-brand-cream transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-brand-blue-deep border border-white/15 group-hover:border-brand-sage transition-colors">
                    <HiOutlineEnvelope className="w-4 h-4 text-brand-sage-pale" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-brand-sage-light mb-0.5">
                      Email
                    </span>
                    <span className="text-sm">{personalInfo.email}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-start gap-3 text-brand-ice hover:text-brand-cream transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-brand-blue-deep border border-white/15 group-hover:border-brand-sage transition-colors">
                    <HiOutlinePhone className="w-4 h-4 text-brand-sage-pale" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-brand-sage-light mb-0.5">
                      Phone
                    </span>
                    <span className="text-sm">{personalInfo.phone}</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-brand-ice">
                <div className="p-2 rounded-lg bg-brand-blue-deep border border-white/15">
                  <HiOutlineMapPin className="w-4 h-4 text-brand-sage-pale" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-brand-sage-light mb-0.5">
                    Location
                  </span>
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-element pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-mono text-brand-ice text-center md:text-left">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-sm font-mono text-brand-ice">
              Built with Next.js & Tailwind
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-brand-blue-deep border border-white/15 hover:border-brand-sage text-brand-sage-pale hover:text-brand-blue-dark hover:bg-brand-sage transition-all duration-300 shadow-md"
              aria-label="Scroll to top"
            >
              <HiOutlineArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Raw CSS Animation replacing GSAP */}
      <style jsx>{`
        .footer-element {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1),
            transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .footer-element.animate-footer-in {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-element {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
}
