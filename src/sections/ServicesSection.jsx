import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  const services = [
    {
      title: "Business Website Design",
      desc: "Clear, professional websites that turn visitors into clients."
    },
    {
      title: "Landing Page Design",
      desc: "Focused pages that guide visitors to take action."
    },
    {
      title: "Website Redesign",
      desc: "Upgrade your site for better design, clarity, and conversions."
    },
    {
      title: "Custom Website Design",
      desc: "Unique designs tailored to your business and brand."
    },
    {
      title: "Advanced Website Features",
      desc: "Add custom functionality and improvements to your site."
    },
    {
      title: "WooCommerce Setup",
      desc: "Simple online stores built ready for products, payments, and orders."
    }
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#4A3F35] leading-tight">
          What We Do to Help You Get More Clients
        </h2>

      </motion.div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="
              group
              p-6
              rounded-2xl
              border border-[#A8B5A2]/50
              hover:shadow-xl
              transition-all
              duration-300
              bg-[#FDFBF9]
              flex flex-col justify-between
            "
          >
            <div>
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-[#4A3F35] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B5E55] text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>

            {/* CTA */}
            <Link to="/free-audit">
              <div className="mt-6 text-sm text-[#708d62] font-medium opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                Get Free Audit →
              </div>
            </Link>

          </motion.div>
        ))}
      </div>

    </section>
  );
}