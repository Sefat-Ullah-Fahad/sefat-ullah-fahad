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
    { name: "LinkedIn", url: "https://linkedin.com/in/sefatullahfahad" },
    { name: "GitHub", url: "https://github.com/sefatullahfahad" },
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
      className="relative py-24 lg:py-32 bg-background/85 border-t border-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-graph-grid opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-isometric-grid opacity-20 pointer-events-none" />

      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#5B21B6]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#DB2777]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-pink-400 font-semibold uppercase tracking-wider">
                11 // Connect & Collaborate
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Get In <span className="text-brand-gradient-glow">Touch</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-purple-500/40 text-pink-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
            <span>{personalInfo.status}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="contact-col lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-950/85 border border-purple-500/30 backdrop-blur-xl shadow-2xl space-y-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Let&#39;s discuss your next project
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Whether you need a high-performance web platform, API
                architecture, database optimization, or financial analytics
                integration, I am available to help.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 text-sm text-slate-300 hover:text-pink-300 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/40 text-pink-400 group-hover:bg-brand-gradient group-hover:text-white transition-all shadow-md">
                    <HiOutlineEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 uppercase">
                      Email Address
                    </div>
                    <div className="font-semibold text-slate-200 group-hover:text-pink-300">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 text-sm text-slate-300 hover:text-pink-300 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/40 text-pink-400 group-hover:bg-brand-gradient group-hover:text-white transition-all shadow-md">
                    <HiOutlinePhone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 uppercase">
                      Phone / Mobile
                    </div>
                    <div className="font-semibold text-slate-200 group-hover:text-pink-300">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-sm text-slate-300">
                  <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/40 text-pink-400 shadow-md">
                    <HiOutlineMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 uppercase">
                      Location
                    </div>
                    <div className="font-semibold text-slate-200">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
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
                        className="btn-shimmer flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-purple-500/30 hover:border-pink-500/70 text-slate-300 hover:text-white text-xs font-mono transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        <Icon className="w-3.5 h-3.5 text-pink-400" />
                        <span>{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-col lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/85 border border-purple-500/30 backdrop-blur-xl shadow-2xl relative">
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center justify-between">
                <span>Send Direct Message</span>
                <span className="font-mono text-xs text-pink-400">
                  Response &lt; 24 hrs
                </span>
              </h3>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-purple-950/60 border border-pink-500/60 text-center space-y-3 shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-brand-gradient text-white flex items-center justify-center mx-auto shadow-[0_0_20px_#EC4899]">
                    <HiOutlineCheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Transmitted Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. Your message has been sent
                    directly to {personalInfo.name}&apos;s inbox. I will reply
                    promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 flex items-center gap-3 text-xs font-mono">
                      <HiOutlineExclamationCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-purple-500/30 focus:border-pink-500 text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-all shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-purple-500/30 focus:border-pink-500 text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-purple-500/30 focus:border-pink-500 text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-purple-500/30 focus:border-pink-500 text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-all shadow-inner resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shimmer w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-brand-gradient text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-600/30 hover:shadow-[0_0_35px_rgba(236,72,153,0.5)] hover:scale-[1.01] active:scale-98 transition-all duration-300 cursor-pointer disabled:opacity-50"
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
          transition: opacity 0.45s ease-out,
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