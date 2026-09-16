"use client";

import { useState, useEffect, useRef } from 'react';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  preload: true,
});

export default function Preloader({ onComplete }) {
  const [isFading, setIsFading] = useState(false);
  const dismissedRef = useRef(false);

  useEffect(() => {
    const startFade = () => {
      if (dismissedRef.current) return;
      dismissedRef.current = true;
      setIsFading(true);
    };

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    if (reducedMotion) {
      startFade();
      return;
    }

    // Handwriting draw lasts ~2.5s; then fade out. Cap as safety if animationend is missed.
    const safety = window.setTimeout(startFade, 2600);
    return () => window.clearTimeout(safety);
  }, []);

  useEffect(() => {
    if (!isFading) return;
    const t = window.setTimeout(() => onComplete?.(), 700);
    return () => window.clearTimeout(t);
  }, [isFading, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-brand-preloader transition-opacity duration-700 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onTransitionEnd={(e) => {
        if (e.propertyName === 'opacity' && isFading) onComplete?.();
      }}
    >
      <style jsx>{`
        .loader-wrap {
          width: 100%;
          max-width: 700px;
          padding: 0 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .stroke-text,
        .fill-text {
          font-size: 80px;
          text-anchor: middle;
          dominant-baseline: middle;
        }

        .stroke-text {
          fill: none;
          stroke: #f7f7f7;
          stroke-width: 2.5;
          stroke-linejoin: round;
          stroke-linecap: round;
          stroke-dasharray: 1500;
          stroke-dashoffset: 1500;
          animation: draw 2.5s ease-in-out forwards;
          will-change: stroke-dashoffset;
        }

        .fill-text {
          fill: var(--brand-pink-fill);
          opacity: 0;
          animation: fadeIn 2.5s ease-in-out forwards;
        }

        @keyframes draw {
          0% {
            stroke-dashoffset: 1500;
          }
          70% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeIn {
          0%,
          75% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @media (max-width: 480px) {
          .stroke-text,
          .fill-text {
            font-size: 60px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stroke-text {
            stroke-dashoffset: 0;
            animation: none;
          }
          .fill-text {
            opacity: 1;
            animation: none;
          }
        }
      `}</style>

      <div className={`loader-wrap ${dancingScript.className}`}>
        <svg viewBox="0 0 700 150" xmlns="http://www.w3.org/2000/svg" aria-label="sefat ullah fahad">
          <text x="350" y="75" className="stroke-text">
            sefat ullah fahad
          </text>
          <text x="350" y="75" className="fill-text">
            sefat ullah fahad
          </text>
        </svg>
      </div>
    </div>
  );
}
