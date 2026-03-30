import React from "react";
import scale from "../../assets/sales.jpg";

const capabilities = [
  { icon: "ti-server-cog", title: "99.9% Uptime SLA", desc: "Guaranteed high availability across all modules." },
  { icon: "ti-bolt", title: "1M+ TPS Throughput", desc: "Process millions of transactions per second without compromise." },
  { icon: "ti-shield-check", title: "Bank-Grade Compliance", desc: "Built-in regulatory compliance for CBN, PCI-DSS, and ISO 27001." },
  { icon: "ti-plug-connected", title: "Seamless Integration", desc: "RESTful APIs and SDKs for rapid third-party connectivity." },
];

export default function ScalableInfrastructure() {
  return (
    <>
      <section className="common-section">
        <div className="container">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="basis-full sm:basis-6/12">
                <div className="flex flex-col gap-5 justify-between h-full">
                  <div className="animate-y delay-reset flex flex-col gap-2 sm:gap-3">
                    <h2>Built for Scale</h2>
                    <h6 className="text-theme-text-secondary max-w-[750px]">
                      Infrastructure designed to grow with your institution — from Day 1 to millions of customers.
                    </h6>
                  </div>
                  <div className="flex flex-row gap-3">
                    {capabilities.slice(0, 2).map((cap, i) => (
                      <div key={i} className="animate-y rounded-2xl sm:rounded-2xl md:rounded-2xl bg-neutral-100 overflow-hidden h-full basis-1/2">
                        <div className="p-3 sm:p-4 md:p-6 flex flex-col items-start h-full gap-9 sm:gap-4">
                          <div className="w-[60px] h-[60px] bg-neutral-300 rounded-full flex items-center justify-center">
                            <i className={`ti ${cap.icon} text-2xl leading-none text-primary-500`}></i>
                          </div>
                          <div className="flex flex-col gap-2 sm:gap-3 grow">
                            <h4>{cap.title}</h4>
                            <p className="body1 text-theme-text-secondary">{cap.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="basis-full sm:basis-6/12">
                <div className="animate-y-down rounded-2xl sm:rounded-2xl md:rounded-2xl bg-neutral-100 overflow-hidden flex flex-col h-full">
                  <div className="min-h-[343px] h-full sm:h-[445px] md:h-[530px] flex">
                    {/* Infrastructure scale diagram */}
                    <img src={scale} alt="Scale" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="basis-full sm:basis-6/12">
                <div className="animate-y-down pt-14 rounded-2xl sm:rounded-2xl md:rounded-2xl bg-neutral-100 overflow-hidden flex flex-col items-center gap-4 h-full">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex -space-x-[14px] *:w-[42px] *:h-[42px] *:rounded-full *:border *:border-theme-bg-paper">
                        <img src="/assets/images/user/avatar1.png" alt="Institution" className="z-40" />
                        <img src="/assets/images/user/avatar2.png" alt="Institution" className="z-30" />
                        <img src="/assets/images/user/avatar3.png" alt="Institution" className="z-20" />
                        <img src="/assets/images/user/avatar4.png" alt="Institution" className="z-10" />
                        <img src="/assets/images/user/avatar5.png" alt="Institution" className="z-0" />
                      </div>
                      <h6 className="subtitle2">50+ Institutions Trust Fincorex</h6>
                    </div>
                    <div className="text-primary-500">
                      <svg className="w-[92px] md:w-[122px] h-auto" viewBox="0 0 122 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M1.46484 6.83613L4.45387 3.7103C7.74598 0.267505 13.38 0.760513 16.0241 4.72277L16.5428 5.50001C19.2423 9.54539 25.1877 9.54539 27.8873 5.5V5.5C30.5869 1.45461 36.5322 1.45461 39.2318 5.5V5.5C41.9314 9.54539 47.8768 9.54539 50.5764 5.5V5.5C53.2759 1.45461 59.2213 1.45461 61.9209 5.5V5.5C64.6205 9.54539 70.5658 9.54539 73.2654 5.5V5.5C75.965 1.45461 81.9104 1.45461 84.61 5.5V5.5C87.3096 9.54539 93.2549 9.54539 95.9545 5.5V5.5C98.6541 1.45461 104.599 1.45461 107.299 5.5V5.5C109.999 9.54539 115.944 9.54539 118.644 5.5L120.534 2.66667" stroke="currentColor" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="h-[157px] sm:h-[241px] md:h-[352px] w-full relative bg-neutral-200 flex items-center justify-center">
                    {/* Placeholder for institution logos / social proof */}
                    <p className="text-sm text-neutral-400 uppercase tracking-widest font-medium">Partner Logos Placeholder</p>
                  </div>
                </div>
              </div>
              <div className="basis-full sm:basis-6/12">
                <div className="flex flex-col gap-3 justify-between h-full">
                  <div className="flex flex-row gap-3">
                    {capabilities.slice(2, 4).map((cap, i) => (
                      <div key={i} className="animate-y rounded-2xl sm:rounded-2xl md:rounded-2xl bg-neutral-100 overflow-hidden h-full basis-1/2">
                        <div className="p-3 sm:p-4 md:p-6 flex flex-col items-start h-full gap-9 sm:gap-4">
                          <div className="w-[60px] h-[60px] bg-neutral-300 rounded-full flex items-center justify-center">
                            <i className={`ti ${cap.icon} text-2xl leading-none text-primary-500`}></i>
                          </div>
                          <div className="flex flex-col gap-2 sm:gap-3 grow">
                            <h4>{cap.title}</h4>
                            <p className="body1 text-theme-text-secondary">{cap.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="animate-y rounded-2xl sm:rounded-2xl md:rounded-2xl bg-neutral-100 overflow-hidden">
                    <div className="p-4 sm:p-6 flex flex-col items-start h-full gap-4 sm:gap-14">
                      <h6 className="text-theme-text-secondary max-w-[530px]">
                        "Fincorex gave us the infrastructure foundation to scale from 10,000 to over 500,000 customers in under 18 months."
                      </h6>
                      <button className="btn btn-primary btn-md capitalize">
                        <span className="flex items-center gap-2 ltr:-ml-1 rtl:-mr-1">
                          <i className="ti ti-arrow-right text-base leading-none"></i>
                          Explore Capabilities
                        </span>
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
