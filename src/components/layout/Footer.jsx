import React from "react";

export default function Footer() {
  return (
    <>
      <section className="common-section">
        <div className="container">
          <div className="animate-y delay-reset bg-neutral-100 rounded-2xl sm:rounded-2xl md:rounded-2xl">
            <div className="bg-neutral-200 rounded-2xl sm:rounded-2xl md:rounded-2xl">
              <div className="p-5 sm:p-6 lg:p-6">
                <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
                  <div className="flex flex-col gap-1 w-full md:w-[60%] max-lg:mx-auto max-lg:text-center">
                    <h3>Stay in the Loop</h3>
                    <p className="body1 text-theme-text-secondary">
                      Get Fincorex product updates, API changelogs, and fintech infrastructure insights delivered to your inbox.
                    </p>
                  </div>
                  <div className="relative w-full lg:w-[400px]">
                    <button className="btn btn-primary absolute top-1 ltr:right-1 rtl:left-1 py-[15px] px-[23px] leading-none">
                      <i className="ti ti-send text-[16px] leading-none w-4 h-4 inline-block"></i>
                    </button>
                    <input
                      type="email"
                      className="form-control py-[15.2px] ltr:pl-6 rtl:pr-6 ltr:pr-16 rtl:pl-16 rounded-full bg-neutral-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6 lg:p-6">
              <div className="flex flex-col gap-4 sm:gap-4 lg:gap-4">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-4 lg:gap-4">
                  <div className="basis-full lg:basis-6/12">
                    <div className="flex flex-col items-center lg:items-start justify-between gap-4 h-full pb-5 lg:pb-0">
              <div className="flex flex-1 flex-shrink-0 items-center justify-between text-primary-500">
                <a href="/" className="flex items-center gap-2 no-underline">
                  <span className="text-2xl font-bold text-primary-500 tracking-tight">Fincorex</span>
                </a>
              </div>
                      <div className="btn-group">
                        <button
                          className="btn btn-outline-primary dropdown-toggle arrow-none w-full"
                          type="button"
                          data-pc-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          ENG
                          <i className="ti ti-chevron-down"></i>
                        </button>
                        <div className="dropdown-menu dropdown-center overflow-hidden border border-neutral-200">
                          <a
                            className="dropdown-item subtitle1 active"
                            href="#!"
                          >
                            English (UK)
                          </a>
                          <a className="dropdown-item subtitle1" href="#!">
                            Arabic (عربي)
                          </a>
                          <a className="dropdown-item subtitle1" href="#!">
                            Chinese (中国人)
                          </a>
                          <a className="dropdown-item subtitle1" href="#!">
                            French (français)
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 max-md:text-center">
                        <h4>Follow Us on</h4>
                        <div className="flex flex-row flex-wrap gap-1 text-2xl leading-none *:flex *:items-center *:justify-center sm:gap-3 *:w-10 sm:*:w-[52px] md:*:w-14 *:h-10 sm:*:h-[52px] md:*:h-14 *:rounded-xl *:text-primary-500 *:bg-neutral-200 *:hover:bg-neutral-300 *:transition-all *:duration-500">
                          <a
                            href="https://in.linkedin.com/company/phoenixcoded"
                            target="_blank"
                          >
                            <i className="ti ti-brand-linkedin"></i>
                          </a>
                          <a
                            href="https://www.facebook.com/Phoenixcoded/"
                            target="_blank"
                          >
                            <i className="ti ti-brand-facebook-filled"></i>
                          </a>
                          <a
                            href="https://www.youtube.com/@Phoenixcoded"
                            target="_blank"
                          >
                            <i className="ti ti-brand-youtube-filled"></i>
                          </a>
                          <a
                            href="https://github.com/phoenixcoded"
                            target="_blank"
                          >
                            <i className="ti ti-brand-github-filled"></i>
                          </a>
                          <a
                            href="https://dribbble.com/Phoenixcoded"
                            target="_blank"
                          >
                            <i className="ti ti-brand-dribbble-filled"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basis-full lg:basis-6/12">
                    <div className="flex flex-row flex-wrap justify-between gap-5 md:gap-4">
                      <div className="basis-full sm:basis-auto">
                        <div className="flex flex-col md:gap-4 items-start">
                          <h4>Products</h4>
                          <ul className="*:*:min-h-9 sm:*:*:min-h-10 *:*:py-1.5 *:*:flex *:*:items-center max-sm:caption2 caption1 py-2 *:*:text-neutral-800 *:*:hover:text-primary-500 *:*:transition-all *:*:duration-500">
                            <li><a href="#">Fincorex CBA</a></li>
                            <li><a href="#">CashRecova</a></li>
                            <li><a href="#">Zebra</a></li>
                            <li><a href="#">Agentix</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="basis-5/12 sm:basis-auto">
                        <div className="flex flex-col md:gap-4 items-start">
                          <h4>Support</h4>
                          <ul className="*:*:min-h-9 sm:*:*:min-h-10 *:*:py-1.5 *:*:flex *:*:items-center max-sm:caption2 caption1 py-2 *:*:text-neutral-800 *:*:hover:text-primary-500 *:*:transition-all *:*:duration-500">
                            <li>
                              <a
                                href="https://tailwind.saasable.io/pages/pricing.html"
                                target="_blank"
                              >
                                Pricing
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://tailwind.saasable.io/pages/faq.html"
                                target="_blank"
                              >
                                FAQ
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://phoenixcoded.authordesk.app/"
                                target="_blank"
                              >
                                Support
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://themeforest.net/licenses/standard"
                                target="_blank"
                              >
                                License Terms
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://discord.gg/gmqz4BWYA8"
                                target="_blank"
                              >
                                Discord
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="basis-6/12 sm:basis-auto">
                        <div className="flex flex-col md:gap-4 items-start">
                          <h4>Company</h4>
                          <ul className="*:*:min-h-9 sm:*:*:min-h-10 *:*:py-1.5 *:*:flex *:*:items-center max-sm:caption2 caption1 py-2 *:*:text-neutral-800 *:*:hover:text-primary-500 *:*:transition-all *:*:duration-500">
                            <li><a href="#">About Fincorex</a></li>
                            <li><a href="#">Case Studies</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact Us</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border-theme-divider" />
                <div className="flex flex-col sm:flex-row items-center caption justify-center gap-3 text-neutral-800">
                  <span className="caption2">
                    Copyright © 2026{" "}
                    <a href="#" className="caption hover:text-primary-500 hover:underline">
                      Fincorex
                    </a>
                  </span>
                  <div className="border-t sm:border-t-0 sm:border-l border-theme-divider self-stretch h-auto"></div>
                  <div className="flex flex-col sm:flex-row items-center caption justify-center md:justify-end gap-3 text-neutral-800">
                    <a
                      href="https://tailwind.saasable.io/pages/privacy-policy.html"
                      className="hover:text-primary-500 hover:underline"
                    >
                      Privacy Policy
                    </a>
                    <div className="border-t sm:border-t-0 sm:border-l border-theme-divider self-stretch h-auto"></div>
                    <a
                      href="https://themeforest.net/licenses/standard"
                      className="hover:text-primary-500 hover:underline"
                    >
                      Terms & Conditions
                    </a>
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
