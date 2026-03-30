import React from "react";
import { motion } from "framer-motion";
import dashboard from "../../assets/dashboard.jpg";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute top-0 z-10 inset-x-0 block bg-neutral-100 h-[540px] sm:h-[738px] lg:h-[878px] overflow-hidden rounded-b-3xl sm:rounded-b-[32px] lg:rounded-b-[40px]">
          <div className="absolute inset-0 z-20 bg-[radial-gradient(47.33%_47.33%_at_50%_46.88%,_transparent_0%,_var(--neutral-200)_100%)]"></div>
          <div className="relative z-10 h-full bg-[length:40px_40px] bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2050%2060%22><text%20x=%220%22%20y=%2225%22%20fill=%22%23E6E8EE%22%20font-size=%2280px%22>.%3C/text%3E</svg>')]"></div>
        </div>
        <div className="common-section relative z-20">
          <div className="container animation-ref">
            <motion.div 
              className="pb-5 sm:pb-11 lg:pb-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-col items-center gap-3">
                <motion.div variants={fadeInUp} className="py-3 px-6 text-theme-text-secondary caption rounded-full border border-theme-divider bg-white/50 backdrop-blur-sm">
                  <p className="body1 font-medium">
                    ✦&nbsp;&nbsp; Banking Infrastructure for the Next Generation &nbsp;&nbsp;✦
                  </p>
                </motion.div>
                <motion.h1 variants={fadeInUp} className="max-w-[1000px] text-center text-3xl sm:text-3xl lg:text-5xl font-bold tracking-tight">
                  Empowering Financial Institutions with <span className="text-primary-500">Modern Infrastructure</span>
                </motion.h1>
                <motion.div variants={fadeInUp} className="text-primary-500">
                  <svg
                    className="w-[92px] md:w-[122px] h-auto"
                    viewBox="0 0 122 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M1.46484 6.83613L4.45387 3.7103C7.74598 0.267505 13.38 0.760513 16.0241 4.72277L16.5428 5.50001C19.2423 9.54539 25.1877 9.54539 27.8873 5.5V5.5C30.5869 1.45461 36.5322 1.45461 39.2318 5.5V5.5C41.9314 9.54539 47.8768 9.54539 50.5764 5.5V5.5C53.2759 1.45461 59.2213 1.45461 61.9209 5.5V5.5C64.6205 9.54539 70.5658 9.54539 73.2654 5.5V5.5C75.965 1.45461 81.9104 1.45461 84.61 5.5V5.5C87.3096 9.54539 93.2549 9.54539 95.9545 5.5V5.5C98.6541 1.45461 104.599 1.45461 107.299 5.5V5.5C109.999 9.54539 115.944 9.54539 118.644 5.5L120.534 2.66667"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
                <motion.h6 variants={fadeInUp} className="max-w-[750px] text-center text-theme-text-secondary text-lg sm:text-xl">
                  Scalable, API-first solutions for core banking engine, automated collections, 
                  card issuing, and agency banking networks.
                </motion.h6>
              </div>
              <div className="flex flex-row items-center justify-center gap-4 mt-8 sm:mt-8">
                <motion.div variants={fadeInUp}>
                  <button className="btn btn-primary btn-lg px-8">
                    Get Started
                  </button>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <button className="btn btn-outline-primary btn-lg px-8 bg-white/30 backdrop-blur-sm">
                    Talk to Sales
                  </button>
                </motion.div>
              </div>
              <motion.div variants={fadeInUp} className="flex flex-row gap-4 justify-center mt-8 flex-wrap opacity-70">
                <div className="flex flex-row items-center gap-2 text-theme-text-secondary">
                  <i className="ti ti-shield-check text-2xl text-primary-500"></i>
                  <p className="body2 font-medium">Enterprise Grade Security</p>
                </div>
                <div className="flex flex-row items-center gap-2 text-theme-text-secondary">
                  <i className="ti ti-api text-2xl text-primary-500"></i>
                  <p className="body2 font-medium">Developer First APIs</p>
                </div>
                <div className="flex flex-row items-center gap-2 text-theme-text-secondary">
                  <i className="ti ti-chart-bar text-2xl text-primary-500"></i>
                  <p className="body2 font-medium">Real-time Settlement</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="sticky top-0 mt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="img-hero-1 relative rounded-2xl border-[1px] border-neutral-300/50 overflow-hidden group shadow-2xl w-full">
                <img
                  src={dashboard}
                  alt="Fincorex Banking Infrastructure Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
