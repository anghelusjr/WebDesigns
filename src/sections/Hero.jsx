import { motion } from "framer-motion";

export default function SplitHero() {
  return (
    <section className="w-full bg-white">

      <div className="flex flex-col xl:flex-row min-h-screen">

        {/* ================= LEFT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full xl:w-[60%] h-[45vh] sm:h-[55vh] xl:h-screen overflow-hidden"
        >
          <img
            src="/images/hero.webp"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ================= RIGHT TEXT ================= */}
        <div className="w-full xl:w-[40%] flex flex-col justify-center px-6 sm:px-10 xl:px-16 py-10">

          {/* SMALL LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs tracking-[0.2em] text-[#4A3F35]/60 mb-4"
          >
            LEAD GENERATION WEBSITES FOR SMALL BUSINESSES
          </motion.p>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl leading-tight text-[#4A3F35]"
          >
            Clients Scroll. <br />
            Your Website Takes Control
          </motion.h1>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 text-sm sm:text-base xl:text-lg text-[#4A3F35]/80 leading-relaxed max-w-xl"
          >
            We build websites that turn visitors into real inquiries
            through clear structure, strong messaging, and simple user experience.
          </motion.p>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6"
          >
            <a
              href="http://localhost:5173/free-audit"
              className="inline-block px-6 py-3 text-sm sm:text-base border border-[#4A3F35]/40 text-[#4A3F35] rounded-full hover:bg-[#4A3F35] hover:text-[#FAF9F6] transition"
            >
              Get Your Free Website Audit
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}