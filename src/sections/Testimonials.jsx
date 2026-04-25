import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      title: "More inquiries coming in",
      quote:
        "After improving the website, businesses start receiving more consistent inquiries.",
      role: "Plumbing Business Owner",
    },
    {
      title: "Clearer message, better results",
      quote:
        "When visitors understand the service quickly, they are more likely to reach out.",
      role: "Home Services Business Owner",
    },
    {
      title: "Simple, effective website",
      quote:
        "A clear and easy-to-use website helps turn visitors into real clients.",
      role: "Startup Founder",
    },
  ];

  return (
    <section className="w-full py-24 px-6 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#4A3F35] mb-4">
            What You Can Expect from a Better Website
          </h2>
          <p className="text-[#6B5E57] max-w-xl mx-auto">
            Here’s what small businesses typically experience after improving their website:
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8D5C4]/40"
            >

              {/* STARS */}
              <div className="mb-4 text-[#ffae00] text-sm">
                ★★★★★
              </div>

              {/* RESULT HEADLINE */}
              <h3 className="text-lg font-semibold text-[#4A3F35] mb-3">
                “{item.title}”
              </h3>

              {/* QUOTE */}
              <p className="text-[#6B5E57] text-sm leading-relaxed mb-6">
                {item.quote}
              </p>

              {/* DIVIDER */}
              <div className="w-full h-px bg-[#E8D5C4]/50 mb-4" />

              {/* CLIENT ROLE */}
              <div className="text-xs text-[#8A7F77] tracking-wide uppercase">
                {item.role}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}