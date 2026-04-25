import { motion } from "framer-motion";

const items = [
  {
    title: "We make it clear what happens next",
    desc: "Some visitors are ready to ask — but stop because they don’t know what will happen after they click.",
    solution:
      "We guide them step-by-step, so reaching out feels simple and safe.",
  },
  {
    title: "We make your offer easy to understand",
    desc: "Sometimes people are interested, but leave because they’re not fully sure what you actually do.",
    solution:
      "We simplify your message so they quickly understand and stay.",
  },
  {
    title: "We make your website feel trustworthy",
    desc: "Even a small layout issue or outdated look can make people hesitate — even if your service is good.",
    solution:
      "We fix the details so your website feels professional and reliable.",
  },
  {
    title: "We make people feel ready to take action",
    desc: "There are times when people almost message — but something holds them back.",
    solution:
      "We remove doubt and give them enough clarity to move forward.",
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-[#FAF9F6] py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-semibold text-[#4A3F35] text-center mb-12 md:mb-20"
        >
          What This Looks Like on Your Website
        </motion.h2>

        <div className="relative">

          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-[#E8D5C4]" />

          <div className="space-y-12 md:space-y-20">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0;
              const step = String(i + 1).padStart(2, "0");

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center ${
                    isLeft ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="w-full md:w-1/2 px-2 md:px-4">
                    <div className="group bg-white rounded-xl md:rounded-2xl p-5 md:p-7 border border-[#E8D5C4] transition-all duration-300">

                      {/* Step */}
                      <div className="mb-3">
                        <span className="text-2xl md:text-4xl font-semibold text-[#A8B5A2] transition-all duration-300 group-hover:text-[#4A3F35]">
                          {step}
                        </span>
                      </div>

                      <h3 className="text-base md:text-lg font-semibold text-[#4A3F35] mb-2 transition-all duration-300 group-hover:text-black">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-sm md:text-base mb-1 leading-relaxed">
                        {item.desc}
                      </p>

                      <p className="text-[#4A3F35] text-sm md:text-base font-medium leading-relaxed">
                        {item.solution}
                      </p>

                      {/* Hover accent line */}
                      <div className="mt-4 h-[2px] w-0 bg-[#A8B5A2] transition-all duration-300 group-hover:w-full" />
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex items-center justify-center w-10 h-10">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-[#A8B5A2]"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="w-full md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 md:mt-20 text-center text-[#4A3F35] text-sm md:text-lg max-w-2xl mx-auto"
        >
          We keep things simple, clear, and on time — so you’re never left guessing what’s happening next.
        </motion.p>

      </div>
    </section>
  );
}