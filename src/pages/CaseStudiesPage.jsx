import React from 'react';
import { motion } from 'framer-motion';
import hero from "../assets/Product-Images/Agentix.png"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const caseStudies = [
  {
    icon: "ti-building-bank",
    color: "blue",
    product: "Corepoint",
    title: "Digital Transformation of a Microfinance Institution",
    challenge: "Manual processes, delayed transactions, and limited scalability restricted growth.",
    solution: "Implemented Corepoint to unify core banking and ledger operations.",
    outcomes: [
      "Real-time transaction processing",
      "Faster customer onboarding",
      "Significantly improved efficiency",
      "Better regulatory compliance"
    ]
  },
  {
    icon: "ti-credit-card",
    color: "purple",
    product: "Zebra",
    title: "Launching a Card Program in Weeks",
    challenge: "Needed to launch a proprietary physical and virtual card program quickly without an existing infrastructure stack.",
    solution: "Implemented Zebra for end-to-end card issuing and processing.",
    outcomes: [
      "Rapid time-to-market within weeks",
      "Seamless wallet integration",
      "Unlocked new revenue streams",
      "Automated settlement handling"
    ]
  },
  {
    icon: "ti-refresh",
    color: "emerald",
    product: "CashRecova",
    title: "Automating Loan Repayments",
    challenge: "High default rates and intensely manual collection processes causing significant cash flow bottlenecks.",
    solution: "Implemented CashRecova for automated direct debit and recurring collections.",
    outcomes: [
      "Directly reduced loan defaults",
      "Highly predictable cash flow",
      "Significantly lower collections overhead",
      "Improved intelligent retry success rates"
    ]
  },
  {
    icon: "ti-users-group",
    color: "orange",
    product: "Agentix",
    title: "Expanding Financial Access Through Agents",
    challenge: "Limited physical branch reach resulting in severe capability boundaries within rural operational zones.",
    solution: "Implemented Agentix to deploy and manage a scaled out agent banking network.",
    outcomes: [
      "Massively expanded agent network",
      "Exponentially increased rural reach",
      "Higher transaction volume mapping",
      "Streamlined commission payouts"
    ]
  }
];

export default function CaseStudiesPage() {
  const getColorClasses = (color) => {
    switch(color) {
      case 'blue': return 'text-blue-600 bg-blue-50 border-blue-100';
      case 'purple': return 'text-purple-600 bg-purple-50 border-purple-100';
      case 'emerald': return 'text-emerald-600 bg-emerald-50 border-emerald-100';
      case 'orange': return 'text-orange-600 bg-orange-50 border-orange-100';
      default: return 'text-primary-600 bg-primary-50 border-primary-100';
    }
  };

  return (
    <div className="overflow-hidden bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-32 overflow-hidden border-b border-neutral-100 -mt-20">
        <div className="absolute top-0 z-10 inset-x-0 block bg-neutral-100 h-full overflow-hidden rounded-b-3xl sm:rounded-b-[32px] lg:rounded-b-[40px]">
          <div className="absolute inset-0 z-20 bg-[radial-gradient(47.33%_47.33%_at_50%_46.88%,_transparent_0%,_var(--neutral-200)_100%)]"></div>
          <div className="relative z-10 h-full bg-[length:40px_40px] bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2050%2060%22><text%20x=%220%22%20y=%2225%22%20fill=%22%23E6E8EE%22%20font-size=%2280px%22>.%3C/text%3E</svg>')]"></div>
        </div>
        <div className="container relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-xl mt-20">
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-500/10 text-primary-600 mb-6 font-semibold tracking-wide text-sm">
                Case Studies
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-neutral-900 leading-[1.1]">
                Scale without limits.
              </h1>
              <p className="text-xl text-theme-text-secondary leading-relaxed">
                Discover how leading institutions use our modular infrastructure to solve complex challenges and accelerate growth.
              </p>
            </motion.div>
            <motion.div initial="hidden" animate="visible" transition={{ delay: 0.2 }} variants={fadeInUp} className="relative w-full flex items-center -mt-60">
              <div className="w-full flex justify-end">
                <img src={hero} alt="Case Studies Architecture" className="w-[120%] lg:w-[100%] max-w-none h-auto object-contain transform translate-x-[10%] lg:translate-x-[15%] drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 lg:py-24">
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {caseStudies.map((study, idx) => {
              const colorClasses = getColorClasses(study.color);
              return (
                <motion.div 
                  key={idx} variants={fadeInUp} 
                  className="bg-white rounded-[2rem] border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className={`px-8 py-6 border-b ${colorClasses} flex items-center gap-4`}>
                     <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                       <i className={`ti ${study.icon} text-2xl`}></i>
                     </div>
                     <div>
                       <span className="font-semibold text-sm uppercase tracking-wider block mb-1 opacity-80">Powered by {study.product}</span>
                       <h3 className="text-xl font-bold font-sans text-neutral-900 leading-tight">{study.title}</h3>
                     </div>
                  </div>
                  
                  <div className="p-8 grow flex flex-col gap-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">Challenge</h4>
                      <p className="text-lg text-neutral-800 font-medium leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-primary-500 mb-2">Solution</h4>
                      <p className="text-lg text-theme-text-secondary leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="mt-auto pt-6 border-t border-neutral-100">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-4">Outcome</h4>
                      <ul className="space-y-3">
                        {study.outcomes.map((outcome, oIdx) => (
                          <li key={oIdx} className="flex gap-3">
                            <i className="ti ti-check text-emerald-500 mt-1"></i>
                            <span className="text-neutral-700">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 pattern-grid relative overflow-hidden mt-12 lg:mt-24">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[120px] opacity-50 mix-blend-screen translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] opacity-40 mix-blend-screen -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container relative z-10 text-center text-white">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-12 md:p-16 rounded-[3rem]"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Ready to transform your infrastructure?</h2>
            <button className="bg-purple-300 text-black hover:bg-purple-400 hover:-translate-y-1 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-[0_0_40px_rgba(216,180,254,0.3)] hover:shadow-[0_0_60px_rgba(216,180,254,0.5)]">
              Talk to Sales →
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
