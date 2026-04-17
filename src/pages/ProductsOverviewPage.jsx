import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { productsData } from '../data/productsData';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ProductsOverviewPage() {
  const products = Object.values(productsData);

  const getColorClass = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-100 shadow-blue-500/10',
      emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-emerald-500/10',
      purple: 'bg-purple-50 text-purple-600 border-purple-100 shadow-purple-500/10',
      orange: 'bg-orange-50 text-orange-600 border-orange-100 shadow-orange-500/10',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 bg-white overflow-hidden">
      <div className="absolute top-0 z-10 inset-x-0 block bg-neutral-100 h-[450px] lg:h-[550px] overflow-hidden rounded-b-3xl sm:rounded-b-[32px] lg:rounded-b-[40px]">
        <div className="absolute inset-0 z-20 bg-[radial-gradient(47.33%_47.33%_at_50%_46.88%,_transparent_0%,_var(--neutral-200)_100%)]"></div>
        <div className="relative z-10 h-full bg-[length:40px_40px] bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2050%2060%22><text%20x=%220%22%20y=%2225%22%20fill=%22%23E6E8EE%22%20font-size=%2280px%22>.%3C/text%3E</svg>')]"></div>
      </div>
      <div className="container relative z-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary-500/10 text-primary-500 mb-4 font-semibold text-sm uppercase tracking-wider"
          >
            Our Infrastructure
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="h1 mb-6"
          >
            Scalable Solutions for <span className="text-primary-500">Every Financial Institutional Needs</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="body1 text-theme-text-secondary text-lg"
          >
            Fincorex provides the foundational building blocks for modern banking, payments, and card services. Modular, API-first, and built for scale.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5, delay: index * 0.1 } 
                }
              }}
              className="group p-8 rounded-3xl border border-neutral-200 bg-white hover:shadow-2xl hover:shadow-primary-500/5 transition-all flex flex-col h-full"
            >
              <div className="flex gap-6 mb-8 items-start">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border transition-transform group-hover:rotate-6 ${getColorClass(product.color)}`}>
                  <i className={`ti ${product.icon} text-4xl`}></i>
                </div>
                <div>
                  <h3 className="h4 mb-2 group-hover:text-primary-500 transition-colors">{product.name}</h3>
                  <p className="body1 text-theme-text-secondary line-clamp-2">
                    {product.tagline}
                  </p>
                </div>
              </div>
              
              <p className="body2 text-theme-text-secondary mb-10 flex-grow text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-100">
                <Link to={`/products/${product.id}`} className="inline-flex items-center gap-2 text-primary-500 font-bold group-hover:gap-3 transition-all text-lg">
                  Learn More <i className="ti ti-arrow-right"></i>
                </Link>
                <div className="flex gap-2 opacity-50 text-sm">
                   {product.keyCapabilities.slice(0, 2).map((cap, i) => (
                       <span key={i} className="px-2 py-1 bg-neutral-100 rounded-md truncate max-w-[120px]">
                           {cap}
                       </span>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="p-12 rounded-[40px] bg-primary-600 text-white text-center relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150"></div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a custom solution?</h2>
                <p className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto">
                    Talk to our infrastructure experts to design a setup tailored specifically to your institution's requirements.
                </p>
                <button className="bg-white text-primary-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
                    Get in Touch with Sales
                </button>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
