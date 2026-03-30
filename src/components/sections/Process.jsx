import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import flow from "../../assets/flow.jpg";

const accordionData = [
  {
    id: 1,
    title: "Connect via APIs",
    description: "Integrate Fincorex modules into your existing stack using our REST APIs and SDKs.",
    icon: "ti ti-api",
    content: [
      "Access full API documentation and sandbox environments from day one.",
      "SDKs available for JavaScript, Python, Java, and more.",
      "Webhooks and event streams for real-time data synchronization."
    ]
  },
  {
    id: 2,
    title: "Configure Your Infrastructure",
    description: "Tailor accounts, ledgers, products, and workflows to your institution's needs.",
    icon: "ti ti-settings-cog",
    content: [
      "Define custom product types — savings, loans, wallets, and fixed deposits.",
      "Set up automated reconciliation, settlement rules, and transaction limits.",
      "Configure multi-currency and multi-branch structures with ease."
    ]
  },
  {
    id: 3,
    title: "Launch & Scale",
    description: "Go live with confidence and scale as your customer base grows.",
    icon: "ti ti-rocket",
    content: [
      "Dedicated onboarding team to guide you through production deployment.",
      "Real-time monitoring dashboards with alerts and audit trails.",
      "Auto-scaling infrastructure that grows with your transaction volumes."
    ]
  }
];

export default function Process() {
  const [activeId, setActiveId] = useState(1);

  return (
    <>
      <section className="common-section">
        <div className="container">
          <div className="flex flex-col gap-4 sm:gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="basis-full sm:basis-6/12">
                <div className="flex flex-col gap-5 justify-between h-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-2 sm:gap-3"
                  >
                    <h2>How Fincorex Works</h2>
                    <h6 className="text-theme-text-secondary max-w-[750px]">
                      From API integration to full production deployment — get your
                      financial infrastructure live in days, not months.
                    </h6>
                  </motion.div>
                  <div className="flex flex-col gap-3">
                    {accordionData.map((item, idx) => {
                      const isActive = activeId === item.id;
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className={"p-6 md:p-6 rounded-2xl sm:rounded-2xl md:rounded-2xl bg-neutral-100 overflow-hidden transition-all duration-300 " + (isActive ? "shadow-sm" : "")}
                        >
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveId(isActive ? null : item.id);
                            }}
                            className="flex flex-row items-start gap-3 relative w-full text-left"
                          >
                            <span className="absolute inset-0"></span>
                            <div className="flex flex-col gap-2 sm:gap-3 grow">
                              <h4>{item.title}</h4>
                              <p className="body1 text-theme-text-secondary">
                                {item.description}
                              </p>
                            </div>
                            <div>
                              <i className={item.icon + " text-2xl sm:text-[40px] leading-none text-primary-500"}></i>
                            </div>
                          </button>
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="w-[90%] sm:w-[90%] md:w-[80%] pt-3 md:pt-5">
                                  <ul className="*:py-2">
                                    {item.content.map((listItem, i) => (
                                      <li key={i}>
                                        <div className="flex items-center gap-[10px]">
                                          <div className="shrink-0">
                                            <svg className="pc-icon w-6 h-6 fill-primary-200 stroke-neutral-900 stroke-[2.5] sm:stroke-2 md:stroke-[1.5] shrink-0">
                                              <use xlinkHref="#custom-check"></use>
                                            </svg>
                                          </div>
                                          <div className="grow my-1">
                                            <p className="body2 text-theme-text-secondary">
                                              {listItem}
                                            </p>
                                          </div>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="basis-full sm:basis-6/12">
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl sm:rounded-2xl md:rounded-2xl bg-neutral-100 overflow-hidden flex flex-col h-full"
                >
                  <div className="min-h-[400px] h-full sm:h-[880px] flex">
                    {/* Product/flow diagram */}
                    <img src={flow} alt="Flow" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
