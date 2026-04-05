import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  const services = [
    {
      title: "Business Website Design",
      desc: "We design small business websites that clearly explain your service and help turn visitors into clients."
    },
    {
      title: "Landing Page Design",
      desc: "We build high-converting landing pages that guide visitors step by step to take action."
    },
    {
      title: "Website Redesign",
      desc: "We redesign websites using WordPress, Duda, or React — improving design and user experience to help convert more visitors into real client inquiries."
    },
    {
      title: "WordPress Websites",
      desc: "We design and build WordPress websites from scratch with a clean, conversion-focused layout that helps turn visitors into actual clients."
    },
    {
      title: "Lead-Focused Website Design",
      desc: "We design websites that help service-based businesses get more inquiries by combining clean, professional design with strategic layouts, clear messaging, and strong call-to-actions that guide visitors to take action."
    },
    {
      title: "Basic Online Store Setup",
      desc: "We set up simple WooCommerce online stores with product listings and basic payment integration — designed to help you start selling and turn visitors into paying customers."
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
          Our Website Services That Help You Get More Clients
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-4 text-[#6B5E55] text-base sm:text-lg"
        >
          We build websites designed not just to look good — but to convert visitors into real inquiries.
        </motion.p>
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
              <div className="mt-6 text-sm text-[#C89B7B] font-medium opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                Get Free Audit →
              </div>
            </Link>

          </motion.div>
        ))}
      </div>

    </section>
  );
}