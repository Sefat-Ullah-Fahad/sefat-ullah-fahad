"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  HiOutlinePaperAirplane,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const personalInfo = {
  name: "Md Sefat Ullah Fahad",
  location: "Rajshahi Shaheed A. H. M. Kamaruzzaman Stadium, Bangladesh",
  email: "fahad.web.code@gmail.com",
  phone: "01943850789",
  status: "Available for selected opportunities",
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sefat-ullah-fahad/" },
    { name: "GitHub", url: "https://github.com/Sefat-Ullah-Fahad" },
    { name: "Facebook", url: "https://facebook.com/sefatullahfahad" },
    { name: "Instagram", url: "https://instagram.com/sefatullahfahad" },
    { name: "Discord", url: "https://discord.com/users/fahad_5562" },
  ],
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const sectionRef = useRef(null);

  const socialIconMap = {
    LinkedIn: FaLinkedin,
    GitHub: FaGithub,
    Facebook: FaFacebook,
    Instagram: FaInstagram,
    Discord: FaDiscord,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const time = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: time,
        reply_to: formData.email,
      };

      await emailjs.send(
        "service_5eb2p25",
        "template_5h0xhgh",
        templateParams,
        {
          publicKey: "2_VQS7CX2e64XTkcE",
        },
      );

      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    } catch (error) {
      console.log("EmailJS Error:", error);

      setErrorMessage(
        "Something went wrong. Please try again or contact me directly by email.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // GSAP এর বদলে Raw JS Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -5% 0px", // top 92% এর মতো কাজ করবে
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cols = sectionRef.current.querySelectorAll(".contact-col");
          cols.forEach((col, index) => {
            // GSAP এর stagger: 0.08 এর হুবহু কাজ
            col.style.transitionDelay = `${index * 0.08}s`;
            col.classList.add("animate-contact-in");
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
      id="contact"
      className="relative py-24 lg:py-32 bg-brand-cream border-t border-brand-blue/15 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(var(--brand-blue-rgb),0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--brand-sage-rgb),0.045) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-brand-blue/20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-sm text-brand-sage-dark font-semibold uppercase tracking-wider">
                Connect & Collaborate
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-blue-dark tracking-tight">
              Get In <span className="text-brand-sage-dark">Touch</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-sage/45 text-brand-blue-mid text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-brand-sage animate-ping" />
            <span>{personalInfo.status}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="contact-col lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-brand-sage/35 shadow-xl shadow-brand-blue/10 space-y-6">
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-2">
                Let&#39;s discuss your next project
              </h3>
              <p className="text-base text-brand-blue leading-relaxed">
                Whether you need a high-performance web platform, API
                architecture, database optimization, or financial analytics
                integration, I am available to help.
              </p>

              <div className="space-y-4 pt-4 border-t border-brand-blue/15">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 text-base text-brand-blue hover:text-brand-sage-dark transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-brand-surface-sage border border-brand-sage/35 text-brand-blue group-hover:bg-brand-sage group-hover:text-brand-blue-dark transition-all shadow-sm">
                    <HiOutlineEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-mono text-brand-blue uppercase">
                      Email Address
                    </div>
                    <div className="font-semibold text-brand-blue-dark group-hover:text-brand-sage-dark">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 text-base text-brand-blue hover:text-brand-sage-dark transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-brand-surface-sage border border-brand-sage/35 text-brand-blue group-hover:bg-brand-sage group-hover:text-brand-blue-dark transition-all shadow-sm">
                    <HiOutlinePhone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-mono text-brand-blue uppercase">
                      Phone / Mobile
                    </div>
                    <div className="font-semibold text-brand-blue-dark group-hover:text-brand-sage-dark">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-base text-brand-blue">
                  <div className="p-3 rounded-xl bg-brand-surface-sage border border-brand-sage/35 text-brand-blue shadow-sm">
                    <HiOutlineMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-mono text-brand-blue uppercase">
                      Location
                    </div>
                    <div className="font-semibold text-brand-blue-dark">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-blue/15">
                <div className="text-sm font-mono text-brand-blue uppercase tracking-wider mb-4">
                  Professional Channels:
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {personalInfo.socialLinks.map((social) => {
                    const Icon = socialIconMap[social.name] || FaLinkedin;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${social.name} Profile`}
                        className="btn-shimmer flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-blue-dark border border-brand-blue/15 hover:border-brand-sage hover:bg-brand-sage text-brand-cream hover:text-brand-blue-dark text-sm font-mono transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        <Icon className="w-3.5 h-3.5 text-brand-sage-pale" />
                        <span>{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-col lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-sage/35 shadow-xl shadow-brand-blue/10 relative">
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-6 flex items-center justify-between">
                <span>Send Direct Message</span>
                <span className="font-mono text-sm text-brand-blue">
                  Response &lt; 24 hrs
                </span>
              </h3>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-brand-surface-sage border border-brand-sage/45 text-center space-y-3 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-brand-sage text-brand-blue-dark flex items-center justify-center mx-auto shadow-md">
                    <HiOutlineCheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-brand-blue-dark">
                    Message Transmitted Successfully!
                  </h4>
                  <p className="text-sm sm:text-base text-brand-blue max-w-md mx-auto">
                    Thank you for reaching out. Your message has been sent
                    directly to {personalInfo.name}&apos;s inbox. I will reply
                    promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-3 text-sm font-mono">
                      <HiOutlineExclamationCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-mono text-brand-blue-mid mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-brand-blue/30 focus:border-brand-sage text-base text-brand-blue-dark placeholder-brand-blue-soft focus:outline-none transition-all shadow-sm focus:shadow-[0_0_0_3px_rgba(var(--brand-sage-rgb),0.16)]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-mono text-brand-blue-mid mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-brand-blue/30 focus:border-brand-sage text-base text-brand-blue-dark placeholder-brand-blue-soft focus:outline-none transition-all shadow-sm focus:shadow-[0_0_0_3px_rgba(var(--brand-sage-rgb),0.16)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-brand-blue-mid mb-2">
                      Subject / Project Scope *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Next.js SaaS Web Application Development"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-blue/30 focus:border-brand-sage text-base text-brand-blue-dark placeholder-brand-blue-soft focus:outline-none transition-all shadow-sm focus:shadow-[0_0_0_3px_rgba(var(--brand-sage-rgb),0.16)]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-brand-blue-mid mb-2">
                      Message Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Briefly describe your objectives, timeline, or engineering inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-blue/30 focus:border-brand-sage text-base text-brand-blue-dark placeholder-brand-blue-soft focus:outline-none transition-all shadow-sm focus:shadow-[0_0_0_3px_rgba(var(--brand-sage-rgb),0.16)] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shimmer w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-brand-blue text-white font-bold text-base tracking-wide shadow-md shadow-brand-blue/20 hover:bg-brand-blue-mid hover:shadow-lg hover:scale-[1.01] active:scale-98 transition-all duration-300 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Message...</span>
                      </span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <HiOutlinePaperAirplane className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Raw CSS Animation replacing GSAP */}
      <style jsx>{`
        .contact-col {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.45s ease-out,
            transform 0.45s ease-out;
        }

        .contact-col.animate-contact-in {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-col {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
