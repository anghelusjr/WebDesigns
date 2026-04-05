import { motion } from "framer-motion";

export default function ComparisonSection() {

const container = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // 🔥 smooth easeOutExpo feel
      when: "beforeChildren",
      staggerChildren: 0.08, // slight stagger = mas buhay
    },
  },
  exit: {
    opacity: 0,
    x: 40,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }, // faster feel
    },
  };

  return (
    <section className="w-full bg-[#FAF9F6] py-16 lg:py-24 px-5 sm:px-10 lg:px-20">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center"
      >

        {/* ================= IMAGE (LEFT) ================= */}
        <motion.div variants={item} className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/images/complex-features-wda.webp"
              alt="Website design"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover object-[35%]"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#A8B5A2]/30 blur-2xl rounded-full"></div>
        </motion.div>

        {/* ================= TEXT (RIGHT) ================= */}
        <motion.div
          variants={item}
          className="bg-[#E8D5C4] rounded-3xl shadow-xl p-6 sm:p-10"
        >
          <motion.p variants={item} className="text-[#4A3F35]/70 text-sm mb-3">
            Most Agencies vs Us
          </motion.p>

          <motion.h2 variants={item} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#4A3F35] mb-5">
            What Most Agencies Get Wrong
          </motion.h2>

          <motion.p variants={item} className="text-[#4A3F35]/80 mb-6">
            Many agencies focus too much on trends and complex features.
            But most businesses don’t need that. They need a website that
            clearly explains their service, builds trust, works on mobile,
            and makes it easy for customers to take action.
          </motion.p>

          <div className="space-y-3 text-[#4A3F35]">
            {[
              "Clear messaging that explains your service",
              "Mobile-first design that actually works",
              "Focused on getting inquiries, not just looks",
            ].map((text, i) => (
              <motion.div key={i} variants={item} className="flex gap-3">
                <span className="text-[#A8B5A2]">✔</span>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}