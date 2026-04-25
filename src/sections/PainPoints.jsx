import { motion } from "framer-motion";

export default function SplitHero() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-28">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center px-6 sm:px-10 md:px-14 lg:px-20">

        {/* ================= IMAGES ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative order-1 flex justify-center items-center"
        >
          <div className="relative w-full max-w-[520px]">

            {/* MAIN IMAGE */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/web-email-wda.webp"
                alt="Email marketing interface on laptop for business website communication"
                loading="lazy"
                className="w-full h-[320px] sm:h-[400px] md:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent rounded-3xl"></div>
            </div>

            {/* TOP SMALL IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden sm:block absolute -top-10 -left-10 w-[180px] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
            >
              <img
                src="/images/web-reimagined.webp"
                alt="Responsive website design mockup for modern business website"
                loading="lazy"
                className="w-full h-[140px] object-cover"
              />
            </motion.div>

            {/* BOTTOM SMALL IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden sm:block absolute -bottom-10 -right-10 w-[180px] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
            >
              <img
                src="/images/web-confused-wda.webp"
                alt="Website wireframe layout for user interface design"
                loading="lazy"
                className="w-full h-[140px] object-cover"
              />
            </motion.div>

            {/* GLOW */}
            <div className="absolute -z-10 -bottom-12 -left-12 w-48 h-48 bg-[#A8B5A2]/30 blur-3xl rounded-full"></div>

          </div>
        </motion.div>

        {/* ================= TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative order-2"
        >
          <div className="bg-[#E8D5C4] rounded-3xl shadow-2xl p-7 sm:p-9 md:p-11 lg:p-14">

            {/* HEADLINE */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#4A3F35] leading-tight mb-6 md:mb-8">
              We Fix What’s Stopping Your Website from Getting Clients
            </h2>

            {/* TEXT */}
            <p className="text-base sm:text-lg md:text-lg text-[#4A3F35]/80 mb-8 md:mb-10 leading-relaxed max-w-[540px]">
              We improve your website so visitors understand your offer, trust your business, and take action.
            </p>

            {/* SUBTITLE */}
            <h3 className="text-base sm:text-lg md:text-xl text-[#4A3F35] mb-6 md:mb-8">
              How we help:
            </h3>

            {/* BULLETS */}
            <ul className="space-y-5 sm:space-y-6">
              {[
                "Clarify your message",
                "Guide visitors to act",
                "Build trust with clean design",
                "Optimize for mobile",
                "Add clear contact points",
                "Turn visitors into inquiries ",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 sm:gap-5">

                  {/* ICON */}
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#A8B5A2] flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  {/* TEXT */}
                  <p className="text-base sm:text-lg text-[#4A3F35] leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

          </div>

          {/* SHADOW DEPTH */}
          <div className="hidden sm:block absolute -z-10 top-8 left-8 w-full h-full bg-[#E8D5C4]/40 blur-2xl rounded-3xl"></div>

        </motion.div>

      </div>
    </section>
  );
}