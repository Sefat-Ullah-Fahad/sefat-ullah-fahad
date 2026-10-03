"use client";

import { useState, useCallback, useEffect } from "react";
import Preloader from "./Preloader";

export default function ClientLayout({ children }) {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);
  const handleComplete = useCallback(() => setShowPreloader(false), []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsPageReady(true));
    return () => window.cancelAnimationFrame(frame);
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
