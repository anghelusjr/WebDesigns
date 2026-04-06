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
            alt="Lead generation website design preview"
            loading="eager"
            fetchpriority="high"
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
            className="text-xs sm:text-sm lg:text-lg xl:pt-10 tracking-[0.2em] text-[#4A3F35]/70 mb-4"
          >
            WEBSITES BUILT TO GENERATE CLIENT INQUIRIES
          </motion.p>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl leading-tight text-[#3E352C]"
          >
            Clients Scroll. <br />
            Your Website Takes Control.
          </motion.h1>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 text-sm sm:text-base xl:text-lg text-[#3E352C]/80 leading-relaxed max-w-xl"
          >
            We design conversion-focused websites that guide visitors,
            build trust, and turn them into real inquiries—without
            overwhelming your users.
          </motion.p>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6"
          >
            <a
              href="/free-audit"
              className="inline-block px-6 py-3 text-sm sm:text-base border border-[#3E352C]/40 text-[#3E352C] rounded-full hover:bg-[#3E352C] hover:text-[#FAF9F6] transition"
            >
              Get a Free Website Audit
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}