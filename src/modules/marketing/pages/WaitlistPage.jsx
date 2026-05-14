import React from 'react';

export default function WaitlistPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-[100px] pb-12 relative overflow-hidden">
      {/* Decorative gradient glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-primary-500/20 rounded-full blur-[100px] lg:blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-md mx-auto rounded-2xl p-6 md:p-8 bg-transparent relative overflow-hidden">
           {/* inner border glow effect */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-40"></div>
          
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
              Join the <span className="text-primary-500">Waitlist</span>
            </h1>
            <p className="text-neutral-300 text-sm md:text-base">
              Get early access to our next-generation FinTech infrastructure.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-medium text-neutral-300 ml-0.5">First Name</label>
                 <input type="text" className="w-full bg-gray-200/90 border border-primary-300/50 text-white rounded-lg px-4 py-2.5 placeholder:text-neutral-500 focus:ring-1 focus:ring-primary-200 transition-shadow outline-none" placeholder="John" />
               </div>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-medium text-neutral-300 ml-0.5">Last Name</label>
                 <input type="text" className="w-full bg-gray-200/90 border border-primary-300/50 text-white rounded-lg px-4 py-2.5 placeholder:text-neutral-500 focus:ring-1 focus:ring-primary-200 transition-shadow outline-none" placeholder="Doe" />
               </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-neutral-300 ml-0.5">Work Email</label>
              <input type="email" className="w-full bg-gray-200/90 border border-primary-300/50 text-white rounded-lg px-4 py-2.5 placeholder:text-neutral-500 focus:ring-1 focus:ring-primary-200 transition-shadow outline-none" placeholder="john@company.com" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-neutral-300 ml-0.5">Product</label>
              <select className="w-full bg-gray-200/90 border border-primary-300/50 text-black rounded-lg px-4 py-2.5 appearance-none focus:ring-1 focus:ring-primary-200 transition-shadow outline-none cursor-pointer text-sm">
                <option value="" className="text-neutral-500">Select product...</option>
                <option value="corepoint">Corepoint</option>
                <option value="cashrecova">CashRecova</option>
                <option value="zebra">Zebra</option>
                <option value="agentix">Agentix</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-neutral-300 ml-0.5">Company Size</label>
              <select className="w-full bg-gray-200/90 border border-primary-300/50 text-black rounded-lg px-4 py-2.5 appearance-none focus:ring-1 focus:ring-primary-200 transition-shadow outline-none cursor-pointer text-sm">
                <option value="" className="text-neutral-500">Select size...</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201+">201+ employees</option>
              </select>
            </div>
            <button type="button" className="w-full bg-primary-500 text-white font-bold rounded-lg py-3 hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20 mt-1 text-sm">
              Secure My Spot
            </button>
          </form>
          <p className="text-neutral-500 text-[10px] md:text-xs text-center mt-4">
            By joining, you agree to receive updates. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
