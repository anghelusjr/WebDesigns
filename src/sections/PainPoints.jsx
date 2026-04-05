import { motion } from "framer-motion";

export default function SplitHero() {
  return (
    <section className="w-full bg-white py-12 pt-6 md:pt-8 lg:pt-30">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-5 sm:px-8 md:px-12 lg:px-20">

        {/* ================= IMAGES (PREMIUM) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative order-1 lg:order-none flex justify-center items-center"
        >
          <div className="relative w-full max-w-[520px]">

            {/* MAIN IMAGE */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/web-email-wda.webp"
                alt="Main"
                className="w-full h-[300px] sm:h-[380px] md:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent rounded-3xl"></div>
            </div>

            {/* TOP SMALL IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                hidden sm:block 
                absolute 
                -top-6 sm:-top-8 
                -left-6 sm:-left-8
                w-[160px] sm:w-[200px]
                rounded-2xl overflow-hidden shadow-xl border-4 border-white
              "
            >
              <img
                src="/images/web-reimagined.webp"
                alt="Top"
                className="w-full h-[120px] sm:h-[150px] object-cover"
              />
            </motion.div>

            {/* BOTTOM SMALL IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="
                hidden sm:block 
                absolute 
                -bottom-6 sm:-bottom-8 
                -right-6 sm:-right-8
                w-[160px] sm:w-[200px]
                rounded-2xl overflow-hidden shadow-xl border-4 border-white
              "
            >
              <img
                src="/images/web-confused-wda.webp"
                alt="Bottom"
                className="w-full h-[120px] sm:h-[150px] object-cover"
              />
            </motion.div>

            {/* GLOW */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-[#A8B5A2]/30 blur-3xl rounded-full"></div>

          </div>
        </motion.div>

        {/* ================= TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-none"
        >
          <div className="bg-[#E8D5C4] rounded-2xl sm:rounded-3xl shadow-xl lg:shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">

            {/* HEADLINE */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#4A3F35] leading-tight mb-5 sm:mb-6">
              We Fix What Is Stopping Your Website from Getting Clients
            </h2>

            {/* TEXT */}
            <p className="text-sm sm:text-base md:text-lg text-[#4A3F35]/80 mb-6 sm:mb-8 leading-relaxed">
              We improve your website so visitors clearly understand your offer,
              trust your business, and take action helping you get more inquiries
              and close more deals.
            </p>

            {/* SUBTITLE */}
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#4A3F35] mb-5 sm:mb-6">
              How we help
            </h3>

            {/* BULLETS */}
            <ul className="space-y-4 sm:space-y-5">
              {[
                "Make your message clear",
                "Guide visitors to take action",
                "Build trust with simple layouts",
                "Make your site easy on mobile",
                "Add clear ways to contact you",
                "Turn visitors into real inquiries",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 sm:gap-4">
                  
                  {/* ICON */}
                  <div className="mt-1 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#A8B5A2] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  {/* TEXT */}
                  <p className="text-sm sm:text-base md:text-lg text-[#4A3F35] leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

          </div>

          {/* shadow depth */}
          <div className="hidden sm:block absolute -z-10 top-6 left-6 w-full h-full bg-[#E8D5C4]/40 blur-2xl rounded-3xl"></div>
        </motion.div>

      </div>
    </section>
  );
}