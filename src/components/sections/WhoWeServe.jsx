import React from "react";
import { motion } from "framer-motion";

const targets = [
  {
    title: "Commercial Banks",
    desc: "Modernize core systems without a rip-and-replace. Plug Fincorex modules alongside your existing infrastructure.",
    icon: "ti-building-bank",
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Fintech Startups",
    desc: "Launch bank-grade products at startup speed. API-first architecture means you ship faster, stay compliant.",
    icon: "ti-rocket",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Microfinance Institutions",
    desc: "Affordable, scalable infrastructure tailored for lending, savings, and community-focused financial products.",
    icon: "ti-users-group",
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Wallet & Payment Providers",
    desc: "Fincorex Zebra lets you issue virtual and physical cards, manage transaction flows, and settle in real time.",
    icon: "ti-credit-card",
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Lending Platforms",
    desc: "CashRecova automates your entire collection cycle — from mandate capture to retry logic and reconciliation.",
    icon: "ti-coin",
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Agent Network Operators",
    desc: "Agentix gives you the tools to onboard, manage, and monitor thousands of agents at scale.",
    icon: "ti-map-pin-cog",
    color: "bg-teal-50 text-teal-600"
  }
];

export default function WhoWeServe() {
  return (
    <section className="common-section bg-neutral-100">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary-500/10 text-primary-500 mb-4"
          >
            <i className="ti ti-target text-lg"></i>
            <span className="text-sm font-semibold uppercase tracking-wider">Who We Serve</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h2 max-w-[700px]"
          >
            Built for Every <span className="text-primary-500">Financial Institution</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body1 text-theme-text-secondary max-w-[600px] mt-4"
          >
            From traditional banks to next-gen fintechs, Fincorex powers the financial infrastructure of institutions across the spectrum.
          </motion.p>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-4">
          {targets.map((item, index) => (
            <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 sm:p-6 rounded-2xl bg-white border border-neutral-200 hover:border-primary-500/30 hover:shadow-lg transition-all group h-full flex flex-col gap-5"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color} transition-transform group-hover:scale-110`}>
                  <i className={`ti ${item.icon} text-2xl`}></i>
                </div>
                <div>
                  <h4 className="h6 mb-2 group-hover:text-primary-500 transition-colors">{item.title}</h4>
                  <p className="body2 text-theme-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
