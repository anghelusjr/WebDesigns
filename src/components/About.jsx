import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="/images/angel-buenavista.webp"
            className="
            rounded-2xl shadow-xl object-cover object-top w-full
            h-[320px] sm:h-[420px] md:h-[520px] lg:h-[650px]
          "
          />

          {/* subtle design accent */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D6C3B3] rounded-2xl opacity-40 blur-xl"></div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-widest text-sm text-[#A1866F] mb-3">
            Why Work With Me
          </p>

          <h2 className="font-playfair text-4xl lg:text-5xl leading-tight mb-6 text-[#4A3F35]">
            Built for Businesses That Want More Than Just a Website
          </h2>

          <p className="font-poppins text-lg text-[#4B4B4B] mb-5 leading-relaxed">
            I'm Angel, a Web Designer with 4+ Years of Experience creating modern,
            conversion-focused websites for small and growing businesses.
          </p>

          <p className="font-poppins text-lg text-[#4B4B4B] mb-6 leading-relaxed">
            I don’t just design — I help turn your visitors into actual clients
            through structured layouts, clear messaging, and a streamlined process
            from inquiry to launch.
          </p>

          {/* VALUE POINTS */}
          <div className="space-y-3 mb-8">
            <p className="text-[#4A3F35] font-medium">
              ✔ Clear and simple process (no confusion)
            </p>
            <p className="text-[#4A3F35] font-medium">
              ✔ Modern, high-converting design
            </p>
            <p className="text-[#4A3F35] font-medium">
              ✔ Built to generate real business results
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://wda-web-design.plutio.com/p/form/zGr4yTuMAd5WGuF3G"
            className="inline-block bg-[#4A3F35] text-white px-7 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Start Your Project
          </a>
        </motion.div>

      </div>
    </section>
  );
}