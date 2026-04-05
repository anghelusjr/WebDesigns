import { motion } from "framer-motion";

export default function Problems() {
    const problems = [
        {
            text: "Visitors do not understand what you offer",
            icon: "/icons/icons1-Photoroom.png"
        },
        {
            text: "They cannot find what to do next",
            icon: "/icons/icons2-Photoroom.png"
        },
        {
            text: "Your website does not build trust quickly",
            icon: "/icons/icons3-Photoroom.png"
        },
        {
            text: "The layout feels confusing or hard to follow",
            icon: "/icons/icons4-Photoroom.png"
        },
        {
            text: "It is slow or hard to use on mobile",
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
                    What Happens When People Visit Your Website?
                </motion.h2>

                {/* SUBTEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-base sm:text-lg lg:text-xl text-[#4A3F35]/80 max-w-3xl mx-auto mb-20"
                >
                    Most people decide in a few seconds if they will stay or leave your business website. If your message is not clear, they leave without taking action, costing you real clients.
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