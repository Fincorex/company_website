import React, { useState } from "react";

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  return (
    <>
      <nav className="z-50 w-full relative bg-neutral-200">
        <div className="container">
          <div className="static flex py-4 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-1 flex-shrink-0 items-center justify-between text-primary-500">
                <a href="/" className="flex items-center gap-2 no-underline">
                  <span className="text-2xl font-bold text-primary-500 tracking-tight">Fincorex</span>
                </a>
              </div>
              <div
                className="nav-collapse grow hidden w-full lg:flex lg:w-full flex-auto justify-center"
                id="main-navbar-collapse"
              >
                <div className="justify-center flex flex-col lg:flex-row p-0 lg:bg-neutral-200 lg:rounded-full">
                  <div className={`btn-group group ${isProductsOpen ? 'drp-show' : ''}`}>
                    <button
                      className="inline-flex text-neutral-900 hover:bg-primary-500/[.04] rounded-full px-[18px] py-3 text-[14px] font-medium transition-all leading-[1.429] dropdown-toggle arrow-none ltr:text-left rtl:text-right max-lg:w-full justify-between items-center"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={isProductsOpen}
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      onMouseEnter={() => setIsProductsOpen(true)}
                    >
                      Products
                      <i className="ti ti-chevron-down ml-1"></i>
                    </button>
                    <div 
                      className={`dropdown-menu dropdown-center group-[.drp-show]:max-lg:!relative !w-[936px] max-lg:!w-full max-lg:!transform-none !p-0 overflow-hidden shadow-[0px_0px_2px_0px_rgba(0,0,0,0.2),_rgba(26,28,30,0.06)_0px_16px_10px_0px] ${isProductsOpen ? 'show' : ''}`}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <div className="p-2 h-auto overflow-auto">
                        <div className="grid grid-cols-12 gap-2">
                          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                            <a href="#" className="group/landinglinks block">
                              <div className="p-4 rounded-xl overflow-hidden hover:bg-neutral-50 transition-all duration-300">
                                <div className="flex flex-col gap-2">
                                  <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500">
                                      <i className="ti ti-building-bank text-2xl"></i>
                                    </div>
                                    <h6 className="subtitle1 text-theme-text-primary">Fincorex CBA</h6>
                                  </div>
                                  <p className="body2 text-theme-text-secondary">Core banking engine for accounts, loans, and ledger</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                            <a href="#" className="group/landinglinks block">
                              <div className="p-4 rounded-xl overflow-hidden hover:bg-neutral-50 transition-all duration-300">
                                <div className="flex flex-col gap-2">
                                  <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500">
                                      <i className="ti ti-refresh text-2xl"></i>
                                    </div>
                                    <h6 className="subtitle1 text-theme-text-primary">CashRecova</h6>
                                  </div>
                                  <p className="body2 text-theme-text-secondary">Automated direct debit & recurring collections</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                            <a href="#" className="group/landinglinks block">
                              <div className="p-4 rounded-xl overflow-hidden hover:bg-neutral-50 transition-all duration-300">
                                <div className="flex flex-col gap-2">
                                  <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500">
                                      <i className="ti ti-credit-card text-2xl"></i>
                                    </div>
                                    <h6 className="subtitle1 text-theme-text-primary">Zebra</h6>
                                  </div>
                                  <p className="body2 text-theme-text-secondary">Card issuing & processing infrastructure</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                            <a href="#" className="group/landinglinks block">
                              <div className="p-4 rounded-xl overflow-hidden hover:bg-neutral-50 transition-all duration-300">
                                <div className="flex flex-col gap-2">
                                  <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500">
                                      <i className="ti ti-users-group text-2xl"></i>
                                    </div>
                                    <h6 className="subtitle1 text-theme-text-primary">Agentix</h6>
                                  </div>
                                  <p className="body2 text-theme-text-secondary">Agency banking & agent network platform</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-neutral-100 border-t border-theme-divider">
                        <a href="#" className="flex items-center justify-center gap-2 text-primary-500 font-medium hover:gap-3 transition-all">
                          View All Products <i className="ti ti-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-block text-neutral-900 hover:bg-primary-500/[.04] rounded-full px-[18px] lg:px-6 py-3 text-[14px] font-medium transition-all leading-[1.429]"
                  >
                    Solutions
                  </a>
                  <a
                    href="#"
                    className="inline-block text-neutral-900 hover:bg-primary-500/[.04] rounded-full px-[18px] lg:px-6 py-3 text-[14px] font-medium transition-all leading-[1.429]"
                  >
                    Case Studies
                  </a>
                  <a
                    href="#"
                    className="inline-block text-neutral-900 hover:bg-primary-500/[.04] rounded-full px-[18px] lg:px-6 py-3 text-[14px] font-medium transition-all leading-[1.429]"
                  >
                    Technology
                  </a>
                  <a
                    href="#"
                    className="inline-block text-neutral-900 hover:bg-primary-500/[.04] rounded-full px-[18px] lg:px-6 py-3 text-[14px] font-medium transition-all leading-[1.429]"
                  >
                    Company
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="btn-group">
                <a
                  href="#"
                  className="flex items-center justify-center h-10 w-10 rounded-full btn-outline-primary dropdown-toggle arrow-none"
                  data-pc-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ti ti-settings text-lg leading-none"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-end leading-none !mt-2">
                  <div className="dropdown-item !bg-transparent">
                    <label className="flex items-center gap-3 flex-1" htmlFor="theme-setup-dark">
                      <div className="shrink-0">
                        <i className="ti ti-sun-moon !text-2xl !leading-none"></i>
                      </div>
                      <div className="grow text-base leading-none">Dark Mode</div>
                      <div className="shrink-0">
                        <div className="form-check form-switch custom-switch-v1 !inline-flex !m-0">
                          <input type="checkbox" className="form-check-input input-primary" id="theme-setup-dark" />
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="dropdown-item !bg-transparent">
                    <label className="flex items-center gap-3 flex-1" htmlFor="theme-setup-rtl">
                      <div className="shrink-0">
                        <i className="ti ti-text-direction-ltr !text-2xl !leading-none"></i>
                      </div>
                      <div className="grow text-base leading-none">RTL Layout</div>
                      <div className="shrink-0">
                        <div className="form-check form-switch custom-switch-v1 !inline-flex !m-0">
                          <input type="checkbox" className="form-check-input input-primary" id="theme-setup-rtl" />
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <a
                href="https://github.com/fincorex"
                target="_blank"
                rel="noopener noreferrer"
                className="max-sm:hidden flex items-center justify-center h-10 w-10 rounded-full btn-outline-primary"
              >
                <i className="ti ti-brand-github text-lg leading-none"></i>
              </a>
              <a
                href="#"
                className="btn-primary btn max-sm:hidden px-6"
              >
                Request Demo
              </a>
              <button
                data-pc-toggle="nav-collapse"
                type="button"
                data-pc-target="#main-navbar-collapse"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-neutral-900 rounded-full lg:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200"
              >
                <i className="ti ti-menu-2 text-2xl leading-none"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
