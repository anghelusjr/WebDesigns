import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="w-full py-14 sm:py-20 lg:py-28 px-5 sm:px-10 bg-[#FAF9F6] flex justify-center">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h2 className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            font-semibold
            text-[#4A3F35]
            leading-tight
            mb-4 sm:mb-6
          ">
            Ready to get more clients?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#4A3F35]/80 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
            Your website should grow your business, not hold it back.
          </p>

          {/* 🔥 CTA BUTTON (FIXED) */}
          <div className="flex flex-col items-center lg:items-start">
            <a
              href="https://wda-web-design.plutio.com/p/form/zGr4yTuMAd5WGuF3G"
              className="
                w-full
                min-[500px]:w-auto
                inline-flex items-center justify-center

                bg-[#4A3F35] text-white

                px-6 sm:px-8 py-4
                text-sm sm:text-base md:text-lg
                font-medium

                rounded-full
                shadow-sm

                hover:shadow-md
                hover:scale-[1.02]
                active:scale-[0.98]

                transition duration-200
              "
            >
              Start Your Project
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="
            w-full
            h-65 sm:h-80 md:h-100
            lg:h-87.5
            rounded-xl sm:rounded-2xl
            overflow-hidden
            shadow-sm
          "
          style={{
            backgroundImage: "url('/images/overdesign.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </section>
  );
}