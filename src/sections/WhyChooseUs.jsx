import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const steps = [
    {
      title: "Understand Your Business",
      desc: "We learn your service and customers to build the right strategy."
    },
    {
      title: "Plan & Design",
      desc: "We structure your website so visitors quickly understand and take action."
    },
    {
      title: "Build",
      desc: "We create a fast, mobile-friendly website designed to convert."
    },
    {
      title: "Launch & Support",
      desc: "We launch your site and support you as your business grows."
    }
  ];

  return (
    <section
      className="relative w-full py-24 px-6 sm:px-10 lg:px-20 text-white"
      style={{
        backgroundImage: "url('/images/shakehand.webp')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">

        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Why Small Businesses Choose Us
          </h2>

          <p className="max-w-4xl mx-auto text-gray-300 text-base sm:text-lg">
            Simple, conversion-focused websites—built to help you get client inquiries.
            We keep everything clear and focused, so you get a website that actually works for your business.
          </p>
        </motion.div>

        {/* Process Title */}
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-xl sm:text-2xl font-semibold mb-12"
        >
          How We Build Your Website
        </motion.h3>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="
                bg-[#4A3F35]/60 backdrop-blur-md
                p-6 rounded-2xl
                border border-white/10
                hover:bg-[#4A3F35]/90
                transition duration-300
              "
            >
              <h4 className="font-semibold text-lg mb-3">
                {step.title}
              </h4>

              <p className="text-gray-300 text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}