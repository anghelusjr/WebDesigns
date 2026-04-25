import { motion } from "framer-motion";

export default function Problems() {
    const problems = [
        {
            text: "Unclear offer",
            icon: "/icons/icons1-Photoroom.png"
        },
        {
            text: "No clear next step",
            icon: "/icons/icons2-Photoroom.png"
        },
        {
            text: "Lacks trust",
            icon: "/icons/icons3-Photoroom.png"
        },
        {
            text: "Confusing layout",
            icon: "/icons/icons4-Photoroom.png"
        },
        {
            text: "Slow or not mobile-friendly",
            icon: "/icons/icons5-Photoroom.png"
        }
    ];

    return (
        <section className="py-24 bg-[#FAF9F6]">
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
                    className="text-base sm:text-lg lg:text-xl text-[#4A3F35]/80 max-w-3xl mx-auto mb-20"
                >
                    Most small business websites in the Philippines lose customers in seconds.
                    If your website isn’t clear, visitors leave.
                </motion.p>

                {/* GRID */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-16"
                >
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.4 }}

                            /* 🔥 HOVER GROUP */
                            whileHover={{ y: -6 }}
                            className="group flex flex-col items-center text-center gap-6 cursor-pointer transition"
                        >
                            {/* ICON */}

                            <div className="

                                w-16 h-16 lg:w-20 lg:h-20 

                                rounded-full 

                                bg-[#E8D5C4]

                                flex items-center justify-center

                                transition-all duration-300

                                group-hover:bg-[#4A3F35]

                                group-hover:scale-110

                            ">
                                <img
                                    src={item.icon}
                                    alt="icon"
                                    className="
                                        w-12 h-12 lg:w-16 lg:h-16 object-contain
                                        transition-all duration-300
                                        group-hover:brightness-0 group-hover:invert
                                    "
                                />
                            </div>

                            {/* TEXT */}
                            <h3 className="
                                text-base sm:text-lg lg:text-xl 
                                text-[#4A3F35] 
                                max-w-[260px]
                                transition-all duration-300
                                group-hover:text-[#000]
                            ">
                                {item.text}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}