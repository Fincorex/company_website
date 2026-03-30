import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "collapseOne",
    question: "How do I get started with Fincorex?",
    answer: "Getting started is simple. Request a demo or contact our sales team. We'll guide you through a sandbox environment, API documentation review, and a tailored integration plan — typically live within 4–8 weeks."
  },
  {
    id: "collapsetwo",
    question: "Does Fincorex support multi-currency and multi-branch operations?",
    answer: "Yes. All Fincorex modules are built to support multi-currency, multi-branch, and multi-entity configurations out of the box. You can define entities, branches, and currency mappings through the admin console.",
    bullets: [
      "Multi-currency ledger management with real-time FX rates.",
      "Independent branch configurations with centralized reporting.",
      "Cross-entity settlement and interbank transfer support."
    ]
  },
  {
    id: "collapsethree",
    question: "Can Fincorex integrate with our existing core banking system?",
    answer: "Absolutely. Fincorex is designed as complementary infrastructure. You can deploy individual modules alongside your existing stack via our REST APIs. We support middleware connectors for popular CBS platforms."
  },
  {
    id: "collapsefour",
    question: "How does Fincorex ensure data security and regulatory compliance?",
    answer: "Security is foundational to everything we build. Fincorex is designed to meet the most stringent regulatory requirements.",
    bullets: [
      "End-to-end encryption for all data in transit and at rest.",
      "Built-in compliance controls for CBN, PCI-DSS, and ISO 27001.",
      "Comprehensive audit trails and role-based access controls."
    ],
    defaultOpen: true
  },
  {
    id: "collapsefive",
    question: "What kind of SLA and support does Fincorex offer?",
    answer: "We offer a 99.9% uptime SLA for all production environments. Support tiers include standard email support, priority SLA support, and dedicated account management for enterprise clients. Our engineering team is available 24/7 for critical incidents."
  }
];

export default function Faq() {
  const [activeId, setActiveId] = useState("collapsefour");

  return (
    <>
      <section className="common-section">
        <div className="container">
          <div className="flex flex-col gap-4 sm:gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="basis-full sm:basis-6/12">
                <div className="flex flex-col gap-5 justify-between h-full">
                  <div className="animate-y delay-reset flex flex-col gap-2 sm:gap-3">
                    <h2>Frequently Asked Questions</h2>
                    <h6 className="text-theme-text-secondary max-w-[750px]">
                      Everything you need to know about Fincorex infrastructure, integration, and support.
                    </h6>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="animate-y p-6 sm:p-6 md:p-6 rounded-2xl sm:rounded-2xl md:rounded-2xl bg-neutral-100 overflow-hidden hidden sm:block">
                      <div className="flex flex-col items-start gap-4 sm:gap-4 md:gap-4">
                        <div className="flex flex-col gap-3">
                          <h4>Still Have a Question?</h4>
                          <p className="body1">
                            Our solutions team is ready to answer technical questions, discuss integration paths, and help you find the right Fincorex module for your institution.
                          </p>
                        </div>
                        <button className="btn btn-primary btn-lg">
                          Talk to Sales
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-full sm:basis-6/12">
                <div className="flex flex-col gap-3">
                  {faqs.map((faq, index) => {
                    const isOpen = activeId === faq.id;
                    return (
                      <div key={faq.id} className="animate-y px-4 sm:px-6 pt-2 sm:pt-3 pb-3 sm:pb-4 rounded-2xl bg-neutral-100 overflow-hidden">
                        <button
                          onClick={() => setActiveId(isOpen ? null : faq.id)}
                          className="group flex flex-row items-center gap-3 relative w-full text-left"
                        >
                          <span className="absolute inset-0"></span>
                          <div className="grow">
                            <h4 className={`my-2 transition duration-300 ${isOpen ? "text-primary-500" : "group-hover:text-primary-500"}`}>
                              {faq.question}
                            </h4>
                          </div>
                          <div className="leading-none">
                            <motion.i 
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              className="ti ti-chevron-down text-xl leading-none inline-block text-primary-500"
                            ></motion.i>
                          </div>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pt-3">
                                <p className="body1 text-theme-text-secondary">{faq.answer}</p>
                                {faq.bullets && (
                                  <div className="w-full pt-4 md:pt-5">
                                    <ul className="*:py-2 *:last:pb-0 *:first:pt-0 leading-none">
                                      {faq.bullets.map((bullet, i) => (
                                        <li key={i}>
                                          <div className="flex items-center gap-[10px]">
                                            <div className="shrink-0">
                                              <div className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-theme-bg-paper">
                                                <i className="ti ti-check text-[16px] leading-none text-primary-500"></i>
                                              </div>
                                            </div>
                                            <div className="grow">
                                              <p className="body1 text-theme-text-secondary">{bullet}</p>
                                            </div>
                                          </div>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                  <div className="animate-y p-6 sm:p-6 md:p-6 rounded-2xl sm:rounded-2xl md:rounded-2xl bg-neutral-100 overflow-hidden block sm:hidden">
                    <div className="flex flex-col items-start gap-4 sm:gap-4 md:gap-4">
                      <div className="flex flex-col gap-3">
                        <h4>Still Have a Question?</h4>
                        <p className="body1">
                          Our solutions team is ready to answer technical questions and help you find the right infrastructure path.
                        </p>
                      </div>
                      <button className="btn btn-primary btn-lg">
                        Talk to Sales
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
