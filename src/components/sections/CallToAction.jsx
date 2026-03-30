import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CTA_LOGOS } from "./CTALogos";

const PAUSE_MS = 4000;
const TRANSITION_MS = 600;

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: TRANSITION_MS / 1000, ease: [0.4, 0, 0.2, 1] } },
  exit:  (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0, transition: { duration: TRANSITION_MS / 1000, ease: [0.4, 0, 0.2, 1] } }),
};

function LogoCard({ logo }) {
  if (!logo || !logo.Component) return null;
  const { Component } = logo;
  return (
    <div className="group flex-shrink-0 px-0.5 sm:px-1 md:px-1.5 bg-neutral-100 h-10 sm:h-12 md:h-[60px] rounded-full flex items-center justify-center w-[120px] sm:w-[150px] md:w-[180px]">
      <div className="opacity-40 group-hover:opacity-100 transition-all duration-500">
        <Component />
      </div>
    </div>
  );
}

export default function CallToAction() {
  const logos = CTA_LOGOS || [];
  const total = logos.length;
  
  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused]   = useState(false);
  const intervalRef               = useRef(null);

  const advance = useCallback(() => {
    if (total === 0) return;
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused || total === 0) return;
    intervalRef.current = setInterval(advance, PAUSE_MS);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, advance, total]);

  if (total === 0) return null;

  const visibleCount = 4;
  const visibleLogos = Array.from({ length: visibleCount }, (_, i) => ({
    ...logos[(current + i) % total],
    keyIdx: (current + i) % total,
  }));

  const dots = Array.from({ length: total }, (_, i) => i);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused) intervalRef.current = setInterval(advance, PAUSE_MS);
  };

  return (
    <section className="common-section">
      <div className="container">
        <div className="rounded-2xl sm:rounded-2xl md:rounded-2xl bg-neutral-100 overflow-hidden relative">
          <div className="flex flex-col gap-4 md:gap-16 p-6 sm:p-6 md:p-16">
            <div className="flex flex-col items-center gap-4 sm:gap-4 md:gap-4 text-center">
              <div className="flex flex-col items-center gap-4 sm:gap-5">
                <div className="relative flex items-center justify-center">
                  <i className="ti ti-cloud-up text-2xl leading-none absolute z-10 text-primary-500"></i>
                  <svg
                    className="w-[55px] h-[55px]"
                    viewBox="0 0 84 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.552 4.67508L45.6912 3.14787C43.5455 1.38675 40.4545 1.38675 38.3088 3.14787L36.448 4.67509C35.6785 5.30667 34.6395 5.50091 33.6937 5.18995L31.407 4.43804C28.7699 3.57097 25.8877 4.68757 24.523 7.10489L23.3396 9.20116C22.8502 10.0681 21.9515 10.6245 20.9573 10.6762L18.5533 10.8012C15.7812 10.9452 13.4969 13.0276 13.0976 15.7747L12.7514 18.1569C12.6082 19.1421 11.9712 19.9856 11.0628 20.3929L8.86631 21.3779C6.33339 22.5136 4.95561 25.2806 5.57567 27.9864L6.11338 30.3328C6.33575 31.3031 6.04647 32.3198 5.34657 33.0278L3.65418 34.7397C1.70259 36.7138 1.41739 39.7916 2.97302 42.0907L4.32203 44.0844C4.87993 44.9089 4.97746 45.9614 4.58057 46.8744L3.62087 49.0821C2.51418 51.6278 3.36008 54.6008 5.64117 56.1827L7.61931 57.5545C8.43737 58.1218 8.90854 59.068 8.86826 60.0627L8.77086 62.468C8.65855 65.2416 10.5213 67.7083 13.2198 68.3593L15.5599 68.9239C16.5276 69.1573 17.3088 69.8695 17.6306 70.8115L18.4086 73.0896C19.3059 75.7165 21.9339 77.3437 24.6853 76.9759L27.0713 76.657C28.0581 76.5251 29.0438 76.907 29.6841 77.6692L31.2326 79.5123C33.0181 81.6377 36.0565 82.2057 38.4893 80.8689L40.599 79.7096C41.4715 79.2301 42.5285 79.2301 43.401 79.7096L45.5107 80.8689C47.9435 82.2057 50.9818 81.6377 52.7674 79.5123L54.3159 77.6692C54.9562 76.907 55.9419 76.5251 56.9286 76.657L59.3147 76.9759C62.0661 77.3437 64.6941 75.7165 65.5914 73.0896L66.3694 70.8115C66.6912 69.8695 67.4724 69.1573 68.4401 68.9239L70.7802 68.3593C73.4787 67.7083 75.3414 65.2416 75.2291 62.468L75.1317 60.0627C75.0915 59.068 75.5626 58.1218 76.3807 57.5545L78.3588 56.1827C80.6399 54.6008 81.4858 51.6278 80.3791 49.0821L79.4194 46.8744C79.0225 45.9614 79.1201 44.9089 79.678 44.0844L81.027 42.0907C82.5826 39.7916 82.2974 36.7138 80.3458 34.7397L78.6534 33.0278C77.9535 32.3198 77.6642 31.3031 77.8866 30.3328L78.4243 27.9864C79.0444 25.2806 77.6666 22.5136 75.1337 21.3779L72.9372 20.3929C72.0288 19.9856 71.3918 19.1421 71.2486 18.1569L70.9024 15.7747C70.5031 13.0276 68.2188 10.9452 65.4467 10.8012L63.0427 10.6762C62.0485 10.6245 61.1498 10.0681 60.6604 9.20115L59.477 7.10489C58.1123 4.68757 55.2301 3.57097 52.593 4.43804L50.3062 5.18995C49.3605 5.50091 48.3215 5.30667 47.552 4.67508Z"
                      fill="url(#paint0_linear_5005_3474)"
                      stroke="url(#paint1_linear_5005_3474)"
                      strokeWidth="2.90909"
                    />
                    <defs>
                      <linearGradient id="paint0_linear_5005_3474" x1="82" y1="42" x2="2" y2="42" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F3F4F6" />
                        <stop offset="1" stopColor="#F9FAFB" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_5005_3474" x1="84.8571" y1="42.7143" x2="-3" y2="42.7143" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9FAFB" />
                        <stop offset="1" stopColor="#F3F4F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h2>Build the Future of Finance with Fincorex</h2>
                  <p className="h6 max-w-[560px] mx-auto text-theme-text-secondary">
                    Join leading banks, fintechs, and financial platforms already powering their operations with Fincorex infrastructure.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 flex-wrap justify-center">
                <button className="btn btn-primary btn-lg px-8">
                  Request Demo
                </button>
                <button className="btn btn-outline-primary btn-lg px-8">
                  Talk to Sales
                </button>
              </div>

              {/* ── Step slider ── */}
              <div
                className="relative overflow-hidden w-full pb-2"
                dir="ltr"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
              >
                {/* Edge fades using direct colors for reliability */}
                <span className="pointer-events-none absolute h-full w-[20px] sm:w-24 top-0 left-0 z-10 bg-[linear-gradient(90deg,#F3F4F6_0%,transparent_100%)]" />
                <span className="pointer-events-none absolute h-full w-[20px] sm:w-24 top-0 right-0 z-10 bg-[linear-gradient(270deg,#F3F4F6_0%,transparent_100%)]" />

                <div className="min-h-[60px]">
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
                      {visibleLogos.map((logo, idx) => (
                        <LogoCard key={`${logo.id}-${idx}`} logo={logo} />
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center gap-2">
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
        </div>
      </div>
    </section>
  );
}
