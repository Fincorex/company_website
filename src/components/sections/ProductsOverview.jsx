import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const products = [
  {
    id: "corepoint",
    title: "Corepoint",
    desc: "Core banking engine for accounts, loans, and ledger. The heart of your financial operations.",
    icon: "ti-database-cog",
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    id: "cashrecova",
    title: "CashRecova",
    desc: "Automated direct debit & recurring collections. Streamline your revenue recovery.",
    icon: "ti-refresh",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100"
  },
  {
    id: "zebra",
    title: "Zebra",
    desc: "Card issuing & processing infrastructure. Ship physical and virtual cards in weeks, not months.",
    icon: "ti-credit-card",
    color: "bg-purple-50 text-purple-600 border-purple-100"
  },
  {
    id: "agentix",
    title: "Agentix",
    desc: "Agency banking & agent network platform. Extend your reach with powerful agent management.",
    icon: "ti-users-group",
    color: "bg-orange-50 text-orange-600 border-orange-100"
  }
];

export default function ProductsOverview() {
  return (
    <section className="common-section">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-16">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeInUp}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary-500/10 text-primary-500 mb-4"
          >
            <i className="ti ti-stack text-lg"></i>
            <span className="text-sm font-semibold uppercase tracking-wider">Our Product Suite</span>
          </motion.div>
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeInUp}
            className="h2 max-w-[700px]"
          >
            Comprehensive Infrastructure for <span className="text-primary-500">Modern Banking</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {products.map((product, index) => (
            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.5, delay: index * 0.1 } 
                  }
                }}
                className="h-full p-6 rounded-2xl border border-neutral-200 bg-white hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/5 transition-all group flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-transform group-hover:scale-110 ${product.color}`}>
                  <i className={`ti ${product.icon} text-3xl`}></i>
                </div>
                <h3 className="h5 mb-4 group-hover:text-primary-500 transition-colors">{product.title}</h3>
                <p className="body2 text-theme-text-secondary mb-8 flex-grow">
                  {product.desc}
                </p>
                <div className="mt-auto">
                  <Link to={`/products/${product.id}`} className="inline-flex items-center gap-2 text-primary-500 font-semibold group-hover:gap-3 transition-all">
                    Learn More <i className="ti ti-arrow-right leading-none"></i>
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-8 text-center"
        >
          <p className="body1 text-theme-text-secondary mb-6 italic">
            "Fincorex handles the complexity of core systems so you can focus on building amazing customer experiences."
          </p>
          <Link to="/products" className="btn btn-outline-primary px-8 inline-block">
            View All Infrastructure Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
