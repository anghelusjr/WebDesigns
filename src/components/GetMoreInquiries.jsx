import { motion } from "framer-motion";

export default function GetMoreInquiries() {
  const results = [
    "Visitors understand your service faster",
    "More people take action instead of leaving",
    "Your website becomes easier to use on mobile",
    "Customers can quickly call, message, or request a quote"
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="
              text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
              font-semibold
              leading-snug
              mb-4 sm:mb-6
            ">
              Websites That Help Businesses Get More Inquiries
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              We build websites designed to increase conversion rates and make it
              easier for people to contact you.
            </p>
          </motion.div>

          {/* RIGHT RESULTS */}
          <div className="
            w-full lg:w-1/2
            grid grid-cols-1 sm:grid-cols-2
            gap-4 sm:gap-6
          ">

            {results.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="
                  p-5 sm:p-6
                  rounded-xl sm:rounded-2xl
                  border border-gray-200
                  bg-gray-50
                  hover:bg-white
                  hover:shadow-md
                  transition duration-300
                "
              >
                <div className="flex items-start gap-3 sm:gap-4">

                  {/* CHECK ICON */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.1
                    }}
                    className="flex-shrink-0"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#A8B5A2] flex items-center justify-center">
                      <svg
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </motion.div>

                  {/* TEXT */}
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    {item}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}