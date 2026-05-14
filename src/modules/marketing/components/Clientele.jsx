import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_LOGOS } from "./ClienteleLogos";

const PAUSE_MS      = 4000;
const TRANSITION_MS = 600;

// ─── LogoCard ─────────────────────────────────────────────────────────────────

function LogoCard({ logo }) {
  const { Component } = logo;
  return (
    <div className="group flex-shrink-0 px-0.5 sm:px-1 md:px-1.5 bg-neutral-100 h-10 sm:h-12 md:h-[60px] rounded-full flex items-center justify-center w-[120px] sm:w-[150px] md:w-[180px]">
      <div className="opacity-40 group-hover:opacity-100 transition-all duration-500">
        <Component />
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function Clientele() {
  const [current, setCurrent]   = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef             = useRef(null);
  const total                   = ALL_LOGOS.length;

  const advance = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  // Set up the auto-advance interval
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(advance, PAUSE_MS);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, advance]);

  // Build a visible window: show 4 cards on desktop, 2 on mobile
  // We always render current through current+4, wrapping around
  const visibleCount = 4; // max visible; CSS handles narrower viewports
  const visibleLogos = Array.from({ length: visibleCount }, (_, i) => ({
    ...ALL_LOGOS[(current + i) % total],
    key: `${current}-${i}`,
  }));

  // Dot indicators
  const dots = Array.from({ length: total }, (_, i) => i);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: TRANSITION_MS / 1000, ease: [0.4, 0, 0.2, 1] } },
    exit:  (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, transition: { duration: TRANSITION_MS / 1000, ease: [0.4, 0, 0.2, 1] } }),
  };

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    // Reset interval timer
    clearInterval(intervalRef.current);
    if (!isPaused) intervalRef.current = setInterval(advance, PAUSE_MS);
  };

  return (
    <>
      <section className="common-section overflow-hidden">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-4">

            {/* Title */}
            <motion.h6
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="subtitle2 text-theme-text-secondary"
            >
              4,000+ companies already growing
            </motion.h6>

            {/* Slider track */}
            <div
              className="relative w-full overflow-hidden"
              dir="ltr"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
            >
              {/* Fade edges */}
              <span className="pointer-events-none absolute h-full w-16 sm:w-24 top-0 left-0 z-10 bg-[linear-gradient(90deg,_var(--theme-bg-default)_0%,_transparent_100%)]" />
              <span className="pointer-events-none absolute h-full w-16 sm:w-24 top-0 right-0 z-10 bg-[linear-gradient(270deg,_var(--theme-bg-default)_0%,_transparent_100%)]" />

              {/* Animated row */}
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex gap-3 sm:gap-4 md:gap-4 justify-center"
                >
                  {visibleLogos.map((logo) => (
                    <LogoCard key={logo.key} logo={logo} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2 mt-2">
              {dots.map((i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={
                    "rounded-full transition-all duration-300 " +
                    (i === current
                      ? "w-5 h-2 bg-primary-500"
                      : "w-2 h-2 bg-neutral-300 hover:bg-neutral-400")
                  }
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
