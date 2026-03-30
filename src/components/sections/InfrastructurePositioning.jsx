import React from "react";
import { motion } from "framer-motion";
import security from "../../assets/security.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function InfrastructurePositioning() {
  return (
    <section className="common-section bg-neutral-100">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary-500/10 text-primary-500 mb-4">
                <i className="ti ti-binary text-lg"></i>
                <span className="text-sm font-semibold uppercase tracking-wider">Infrastructure First</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="h2 mb-6">
                Infrastructure — <span className="text-neutral-500 italic">Not Just Software</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="body1 text-theme-text-secondary mb-8 max-w-[540px]">
                Fincorex provides the foundational layers that power modern financial institutions. 
                Instead of building monolithic systems, we offer modular, API-first infrastructure 
                that integrates seamlessly with your existing stack.
              </motion.p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Reliable & Scalable",
                    desc: "Built to handle millions of transactions with 99.99% uptime guarantee.",
                    icon: "ti-server-cog"
                  },
                  {
                    title: "API-First Architecture",
                    desc: "Complete documentation and SDKs for rapid integration and development.",
                    icon: "ti-api"
                  },
                  {
                    title: "Enterprise Security",
                    desc: "Bank-grade encryption and compliance at every layer of the infrastructure.",
                    icon: "ti-shield-lock"
                  }
                ].map((item, index) => (
                  <motion.div key={index} variants={fadeInUp} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-neutral-200">
                      <i className={`ti ${item.icon} text-2xl text-primary-500`}></i>
                    </div>
                    <div>
                      <h4 className="h6 mb-1">{item.title}</h4>
                      <p className="body2 text-theme-text-secondary">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-300 group shadow-lg"
            >
              {/* Technical architecture diagram */}
              <img src={security} alt="Security" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent pointer-events-none"></div>
              
              <div className="absolute top-1/4 right-1/4 w-32 h-1 bg-primary-500/20 rounded-full blur-sm"></div>
              <div className="absolute bottom-1/3 left-1/4 w-40 h-1 bg-secondary-500/20 rounded-full blur-sm"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
