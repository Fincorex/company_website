import React from 'react';
import { motion } from 'framer-motion';
import hero from "../assets/Product-Images/Corepoint.png"
import about from "../assets/Product-Images/CashRecova.png"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 z-10 inset-x-0 block bg-neutral-100 h-full overflow-hidden rounded-b-3xl sm:rounded-b-[32px] lg:rounded-b-[40px]">
          <div className="absolute inset-0 z-20 bg-[radial-gradient(47.33%_47.33%_at_50%_46.88%,_transparent_0%,_var(--neutral-200)_100%)]"></div>
          <div className="relative z-10 h-full bg-[length:40px_40px] bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2050%2060%22><text%20x=%220%22%20y=%2225%22%20fill=%22%23E6E8EE%22%20font-size=%2280px%22>.%3C/text%3E</svg>')]"></div>
        </div>
        <div className="container relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-500/10 text-primary-600 mb-6 font-semibold tracking-wide text-sm">
                About Fincorex
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-neutral-900 leading-[1.1]">
                Empowering Banking with Fincorex
              </h1>
              <p className="text-xl text-theme-text-secondary leading-relaxed mb-10">
                We provide the scalable architecture that powers the next generation of financial institutions.
              </p>
            </motion.div>
            <motion.div initial="hidden" animate="visible" transition={{ delay: 0.2, duration: 0.8 }} variants={fadeInUp}>
              <div className="w-full aspect-[5/4]  rounded-3xl flex items-center justify-center relative overflow-hidden">
                <img src={hero} alt="" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are & What We Do */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 text-neutral-900">Who We Are</h2>
              <p className="text-lg text-theme-text-secondary leading-relaxed mb-6">
                Fincorex is a financial infrastructure company building modular platforms that power modern banking systems.
              </p>
              <p className="text-lg text-theme-text-secondary leading-relaxed mb-10">
                We provide the technology layer that enables financial institutions to operate efficiently, scale rapidly, and innovate without constraints.
              </p>
              <div className="w-full aspect-video  rounded-3xl flex items-center justify-center  overflow-hidden relative ">
                 <img src={about} alt="" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-neutral-50 p-8 md:p-12 rounded-[2rem] border border-neutral-100">
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">What We Do</h2>
              <p className="text-lg text-theme-text-secondary leading-relaxed mb-8">
                We design and deliver infrastructure built on a unified API-first architecture:
              </p>
              <ul className="space-y-4">
                {[
                  "Core banking infrastructure",
                  "Payment and collection systems",
                  "Card issuing platforms",
                  "Agency banking solutions"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 group">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-white shadow-sm border border-neutral-100 flex items-center justify-center text-primary-500">
                      <i className="ti ti-check text-base font-bold"></i>
                    </div>
                    <span className="text-lg text-theme-text-primary font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 pattern text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[100px] mix-blend-screen -translate-y-1/2 translate-x-1/3"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
              Our Approach
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-xl text-neutral-400">
              We believe financial infrastructure should be robust, adaptable, and invisible.
            </motion.p>
          </div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: "Modular", desc: "Adopt only what you need", icon: "ti-puzzle" },
              { title: "Interoperable", desc: "Integrate with any system", icon: "ti-plug-connected" },
              { title: "Scalable", desc: "Grow without limitations", icon: "ti-chart-arrows" },
              { title: "Reliable", desc: "Built for mission-critical operations", icon: "ti-shield-check" }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="w-14 h-14 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center text-3xl mb-6">
                  <i className={`ti ${feature.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-neutral-400 text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-primary-50 to-white border border-primary-100 flex flex-col justify-center">
              <h2 className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4">Mission</h2>
              <p className="text-2xl md:text-3xl font-medium text-neutral-900 leading-tight">
                To empower financial institutions with the infrastructure needed to build, scale, and deliver modern financial services.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 flex flex-col justify-center">
              <h2 className="text-neutral-500 font-bold tracking-widest uppercase text-sm mb-4">Vision</h2>
              <p className="text-2xl md:text-3xl font-medium text-neutral-900 leading-tight">
                To become the backbone of financial services infrastructure across emerging markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-100">
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-neutral-900">Business Model</h2>
            <p className="text-xl text-center text-theme-text-secondary mb-12">
              Fincorex operates strictly as a <strong className="text-primary-500">B2B infrastructure provider</strong>.
            </p>
            
            <h3 className="text-xl font-bold mb-6 text-neutral-900">Revenue Streams Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "SaaS licensing per module",
                "Transaction-based fees",
                "Card issuing and processing fees",
                "Direct debit processing fees",
                "Integration and support services"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <i className="ti ti-point-filled text-primary-500"></i>
                  <span className="font-medium text-neutral-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-15  pattern-grid relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[120px] opacity-50 mix-blend-screen translate-x-1/3 -translate-y-1/3"></div>
        <div className="container relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-12 md:p-16 rounded-[3rem]"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Ready to build the future of finance?</h2>
            <button className="bg-purple-300 text-black hover:bg-purple-400 hover:-translate-y-1 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-[0_0_40px_rgba(216,180,254,0.3)] hover:shadow-[0_0_60px_rgba(216,180,254,0.5)]">
              Partner With Us →
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
