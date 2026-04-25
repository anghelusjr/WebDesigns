import { motion } from "framer-motion";

export default function Problems() {

    return (
        <section className="pt-24 bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* TITLE */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#4A3F35]"
                >
                    Why Small Business Websites in the Philippines Fail to Convert Visitors
                </motion.h2>

                {/* SUBTEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-base sm:text-lg lg:text-xl text-[#4A3F35]/80 max-w-7xl mx-auto lg:mt-12"
                >
                    Most small business websites in the Philippines fail not because of design but because they don’t guide visitors clearly. When users land on your website, they decide within seconds whether to stay or leave. If your message is unclear, your layout is confusing, or there’s no clear next step, potential customers will leave without taking action. 

                </motion.p>


            </div>
        </section>
    );
}