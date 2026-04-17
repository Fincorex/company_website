import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { productsData } from '../data/productsData';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProductPage() {
  const { slug } = useParams();
  const product = productsData[slug];

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const getColorClass = (color) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-50',
      emerald: 'text-emerald-600 bg-emerald-50',
      purple: 'text-purple-600 bg-purple-50',
      orange: 'text-orange-600 bg-orange-50',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 z-10 inset-x-0 block bg-neutral-100 h-full overflow-hidden rounded-b-3xl sm:rounded-b-[32px] lg:rounded-b-[40px]">
          <div className="absolute inset-0 z-20 bg-[radial-gradient(47.33%_47.33%_at_50%_46.88%,_transparent_0%,_var(--neutral-200)_100%)]"></div>
          <div className="relative z-10 h-full bg-[length:40px_40px] bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2050%2060%22><text%20x=%220%22%20y=%2225%22%20fill=%22%23E6E8EE%22%20font-size=%2280px%22>.%3C/text%3E</svg>')]"></div>
        </div>
        <div className="container relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-2xl"
            >
              <div className={`inline-flex items-center gap-2 py-1 px-3 rounded-full mb-6 font-semibold text-sm uppercase tracking-wider ${getColorClass(product.color)}`}>
                <i className={`ti ${product.icon} text-lg`}></i>
                {product.name}
              </div>
              <h1 className="h1 mb-6">
                {product.tagline}
              </h1>
              <p className="body1 text-theme-text-secondary mb-10 text-lg leading-relaxed">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary px-8 py-4 text-lg">
                  {product.ctaText} →
                </button>
                <button className="btn btn-outline-primary px-8 py-4 text-lg">
                  View API Docs
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="flex items-center justify-center relative">
                 {product.image ? (
                    <img src={product.image} alt={`${product.name} illustration`} className="w-full max-w-[120%] h-auto object-contain transform scale-110 lg:scale-125" />
                 ) : (
                    <div className="text-center py-20">
                       <i className={`ti ${product.icon} text-[120px] opacity-10 mb-4`}></i>
                       <p className="text-neutral-400 font-medium">Illustration for {product.name}</p>
                    </div>
                 )}
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-32 relative">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center p-8 md:p-12 bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem]"
          >
            <h2 className="h2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500">
              Product Overview
            </h2>
            <p className="body1 text-theme-text-secondary text-xl font-medium leading-relaxed">
              {product.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You Can Do / Key Capabilities */}
      <section className="py-24 lg:py-32 bg-neutral-50 border-y border-neutral-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-500/10 text-primary-600 mb-6 font-semibold tracking-wide text-sm"
              >
                Features
              </motion.div>
              <motion.h3 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-10 text-neutral-900"
              >
                Everything you need to scale
              </motion.h3>
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6"
              >
                {product.whatYouCanDo.map((item, idx) => (
                  <motion.li key={idx} variants={fadeInUp} className="flex gap-4 group">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-white shadow-sm border border-neutral-100 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                      <i className="ti ti-check text-base font-bold"></i>
                    </div>
                    <span className="body1 text-theme-text-primary text-lg group-hover:text-neutral-900 transition-colors">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <div className="relative">
              {/* Background accent */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/5 to-transparent rounded-[2.5rem] -z-10"></div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 lg:p-8"
              >
                {product.keyCapabilities.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: { opacity: 1, scale: 1, transition: { delay: idx * 0.05 } }
                    }}
                    className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 hover:border-primary-500/30 transition-all duration-300 font-semibold text-neutral-800 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-500/50 shrink-0"></div>
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 relative bg-primary text-white overflow-hidden">
        {/* Abstract glowing shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mb-12 lg:mb-20">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-neutral-900 leading-tight"
            >
              A simple <span className="text-primary-500 bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">4-step process</span> to get started
            </motion.h2>
            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-xl text-neutral-500"
            >
              Follow our streamlined implementation protocol designed for rapid deployment and minimal disruption.
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Center connecting line */}
            <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary-500/0 via-primary-500/30 to-primary-500/0 -translate-x-1/2"></div>

            <div className="flex flex-col gap-10 lg:gap-0 lg:py-4">
              {product.howItWorks.map((step, idx) => {
                const isEven = idx % 2 !== 0;
                return (
                  <motion.div 
                    key={idx}
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0, x: isEven ? 50 : -50, y: 30 },
                        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.1 } }
                    }}
                    className={`relative flex flex-col lg:flex-row items-center gap-6 w-full lg:-my-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                  >
                    {/* Node on the center line */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-neutral-900 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] items-center justify-center z-20">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-400 to-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
                    </div>

                    {/* Content Box */}
                    <div className={`w-full lg:w-1/2 flex ${isEven ? 'lg:justify-start lg:pl-16' : 'lg:justify-end lg:pr-16 0'  }`}>
                      <div className="relative group w-full max-w-lg">
                        {/* Huge background number */}
                        <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? '-left-4 lg:-left-12' : '-right-4 lg:-right-12'} text-[120px] lg:text-[180px] font-black text-white/[0.015] group-hover:text-primary-500/[0.03] transition-colors duration-700 pointer-events-none select-none z-0 border border-purple-50`}>
                          0{idx + 1}
                        </div>
                        
                        {/* Actual card - Darkened */}
                        <div className="relative z-10 p-6 md:p-10 rounded-[2.5rem] bg-black/40 border border-white/5 backdrop-blur-xl hover:bg-black/60 hover:border-primary-500/30 transition-all duration-500 shadow-2xl">
                           <div className="inline-flex items-center gap-3 mb-5">
                             <div className="w-12 h-12 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center text-xl font-bold border border-primary-500/20 shadow-inner">
                               {idx + 1}
                             </div>
                             <h4 className="text-2xl font-bold text-white tracking-wide">Step</h4>
                           </div>
                           <p className="text-lg md:text-xl text-neutral-100 leading-relaxed font-medium drop-shadow-sm">
                             {step}
                           </p>
                        </div>
                      </div>
                    </div>

                    {/* Empty half for spacing */}
                    <div className="hidden lg:block w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Built For */}
      <section className="py-12 pattern text-white relative border-y border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
        <div className="container text-center relative z-10">
          <motion.h3 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-primary-400 font-bold uppercase tracking-[0.2em] text-sm mb-6"
          >
            Built For
          </motion.h3>
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-5xl mb-8 font-bold max-w-3xl mx-auto leading-tight"
          >
            {product.builtFor}
          </motion.h2>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32  relative overflow-hidden">
        {/* Abstract glowing shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[120px] opacity-50 mix-blend-screen translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] opacity-40 mix-blend-screen -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-12 md:p-16 rounded-[3rem]"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Ready to transform your infrastructure?</h2>
            <button className="bg-purple-300 text-black hover:bg-purple-400 hover:-translate-y-1 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-[0_0_40px_rgba(216,180,254,0.3)] hover:shadow-[0_0_60px_rgba(216,180,254,0.5)]">
              {product.ctaText} →
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
