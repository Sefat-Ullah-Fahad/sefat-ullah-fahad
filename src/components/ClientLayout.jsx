"use client";

import { useState, useCallback, useEffect } from "react";
import Preloader from "./Preloader";

export default function ClientLayout({ children }) {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);
  const handleComplete = useCallback(() => setShowPreloader(false), []);

  useEffect(() => {
    let cancelled = false;

    const waitForImages = () =>
      Promise.all(
        Array.from(document.images)
          .filter((image) => image.loading !== "lazy")
          .map((image) => {
            if (image.complete) return Promise.resolve();

            return new Promise((resolve) => {
              image.addEventListener("load", resolve, { once: true });
              image.addEventListener("error", resolve, { once: true });
            });
          }),
      );

    const waitForPage = async () => {
      if (document.readyState !== "complete") {
        await new Promise((resolve) => {
          window.addEventListener("load", resolve, { once: true });
        });
      }

      await Promise.all([
        waitForImages(),
        document.fonts?.ready ?? Promise.resolve(),
      ]);

      if (!cancelled) setIsPageReady(true);
    };

    waitForPage();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {showPreloader && (
        <Preloader isReady={isPageReady} onComplete={handleComplete} />
      )}
      <main className="relative z-10">{children}</main>
    </>
  );
}
