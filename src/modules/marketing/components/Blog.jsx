import React, { useEffect, useRef } from "react";

export default function Blog() {
  const sliderRef = useRef(null);
  const sliderInstance = useRef(null);

  useEffect(() => {
    const initSlider = () => {
      if (!sliderRef.current || !window.tns) return;
      if (sliderInstance.current) return;
      
      sliderInstance.current = window.tns({
        container: sliderRef.current,
        items: 1,
        center: false,
        nav: false,
        autoHeight: false,
        speed: 500,
        gutter: 24,
        autoplayTimeout: 6000,
        slideBy: 1,
        loop: true,
        controls: false,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayButton: false,
        mouseDrag: true,
        responsive: {
          575: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 },
          1266: { items: 3 }
        }
      });
    };

    if (window.tns) {
      initSlider();
    } else {
      const scriptId = "tiny-slider-script";
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src = "/assets/js/plugins/tiny-slider.js";
        document.body.appendChild(script);
      }
      script.addEventListener("load", initSlider);
    }

    return () => {
      if (sliderInstance.current && sliderInstance.current.destroy) {
        sliderInstance.current.destroy();
        sliderInstance.current = null;
      }
    };
  }, []);

  return (
    <>
      <section className="common-section">
        <div className="flex flex-col gap-4">
          <div className="container">
            <div className="animate-y delay-reset flex flex-col gap-2 sm:gap-3 text-center">
              <h2>Insights from the Infrastructure Layer</h2>
              <p className="body1 text-theme-text-secondary max-w-[600px] mx-auto">Fintech deep dives, product updates, and industry trends from the Fincorex team.</p>
            </div>
          </div>
          <div className="animate-y relative overflow-hidden" dir="ltr">
            <div className="blog-slider4 flex items-stretch" ref={sliderRef}>
              <div className="item">
                <div className="bg-[url('/assets/images/blog/blog1.png')] relative h-[464px] rounded-2xl sm:rounded-2xl md:rounded-2xl w-full bg-cover bg-center">
                  <div className="-bottom-[2%] left-0 mb-1 p-6 absolute w-full z-10 select-none bg-neutral-100 rounded-2xl sm:rounded-2xl md:rounded-2xl">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row justify-between items-center flex-wrap gap-2">
                        <div className="flex flex-row gap-2">
                          <span className="bg-neutral-300 px-4 py-2 rounded-full caption text-theme-text-secondary">
                            Technology
                          </span>
                        </div>
                        <p className="caption text-theme-text-secondary text-nowrap">
                          15 Jan 2026
                        </p>
                      </div>
                      <a
                        href="#"
                        className="group flex flex-row items-center gap-5 text-theme-text-primary hover:text-primary-500"
                      >
                        <div className="grow">
                          <h4 className="line-clamp-2 text-theme-text-primary hover:text-primary-500 group-hover:text-primary-500">
                            Navigating the Digital Highway: Technology Trends
                            Reshaping the Trucking Industry
                          </h4>
                        </div>
                        <div className="shrink-0">
                          <i className="ti ti-arrow-up-right text-[40px] leading-none"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="bg-[url('/assets/images/blog/blog6.png')] relative h-[464px] rounded-2xl sm:rounded-2xl md:rounded-2xl w-full bg-cover bg-center">
                  <div className="-bottom-[2%] left-0 mb-1 p-6 absolute w-full z-10 select-none bg-neutral-100 rounded-2xl sm:rounded-2xl md:rounded-2xl">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row justify-between items-center flex-wrap gap-2">
                        <div className="flex flex-row gap-2">
                          <span className="bg-neutral-300 px-4 py-2 rounded-full caption text-theme-text-secondary">
                            Business
                          </span>
                          <span className="bg-neutral-300 px-4 py-2 rounded-full caption text-theme-text-secondary">
                            Productivity
                          </span>
                        </div>
                        <p className="caption text-theme-text-secondary text-nowrap">
                          03 Feb 2026
                        </p>
                      </div>
                      <a
                        href="#"
                        className="group flex flex-row items-center gap-5 text-theme-text-primary hover:text-primary-500"
                      >
                        <div className="grow">
                          <h4 className="line-clamp-2 text-theme-text-primary hover:text-primary-500 group-hover:text-primary-500">
                            Sustainable Practices: The Future of Eco-Friendly
                            Supply Chains
                          </h4>
                        </div>
                        <div className="shrink-0">
                          <i className="ti ti-arrow-up-right text-[40px] leading-none"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="bg-[url('/assets/images/blog/blog4.jpg')] relative h-[464px] rounded-2xl sm:rounded-2xl md:rounded-2xl w-full bg-cover bg-center">
                  <div className="-bottom-[2%] left-0 mb-1 p-6 absolute w-full z-10 select-none bg-neutral-100 rounded-2xl sm:rounded-2xl md:rounded-2xl">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row justify-between items-center flex-wrap gap-2">
                        <div className="flex flex-row gap-2">
                          <span className="bg-neutral-300 px-4 py-2 rounded-full caption text-theme-text-secondary">
                            Business
                          </span>
                          <span className="bg-neutral-300 px-4 py-2 rounded-full caption text-theme-text-secondary">
                            AI
                          </span>
                        </div>
                        <p className="caption text-theme-text-secondary text-nowrap">
                          20 Feb 2026
                        </p>
                      </div>
                      <a
                        href="#"
                        className="group flex flex-row items-center gap-5 text-theme-text-primary hover:text-primary-500"
                      >
                        <div className="grow">
                          <h4 className="line-clamp-2 text-theme-text-primary hover:text-primary-500 group-hover:text-primary-500">
                            Harnessing the Power of AI: Innovations in the
                            Logistics Sector
                          </h4>
                        </div>
                        <div className="shrink-0">
                          <i className="ti ti-arrow-up-right text-[40px] leading-none"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="bg-[url('/assets/images/blog/blog2.jpg')] relative h-[464px] rounded-2xl sm:rounded-2xl md:rounded-2xl w-full bg-cover bg-center">
                  <div className="-bottom-[2%] left-0 mb-1 p-6 absolute w-full z-10 select-none bg-neutral-100 rounded-2xl sm:rounded-2xl md:rounded-2xl">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row justify-between items-center flex-wrap gap-2">
                        <div className="flex flex-row gap-2">
                          <span className="bg-neutral-300 px-4 py-2 rounded-full caption text-theme-text-secondary">
                            Trade
                          </span>
                          <span className="bg-neutral-300 px-4 py-2 rounded-full caption text-theme-text-secondary">
                            Market
                          </span>
                        </div>
                        <p className="caption text-theme-text-secondary text-nowrap">
                          10 Mar 2026
                        </p>
                      </div>
                      <a
                        href="#"
                        className="group flex flex-row items-center gap-5 text-theme-text-primary hover:text-primary-500"
                      >
                        <div className="grow">
                          <h4 className="line-clamp-2 text-theme-text-primary hover:text-primary-500 group-hover:text-primary-500">
                            Global Trade Dynamics: Exploring New Markets and
                            Opportunities
                          </h4>
                        </div>
                        <div className="shrink-0">
                          <i className="ti ti-arrow-up-right text-[40px] leading-none"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="animate-y flex flex-col items-center justify-center gap-3 text-center">
              <h6 className="text-theme-text-secondary max-w-[75%] sm:max-w-[45%]">
                Stay ahead with fintech infrastructure insights, product updates, and industry analysis from the Fincorex team.
              </h6>
              <button className="btn btn-outline-primary btn-lg capitalize">
                Explore All Insights
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
