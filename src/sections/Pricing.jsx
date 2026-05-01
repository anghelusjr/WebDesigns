// UPDATED PRICING VERSION

import { motion } from "framer-motion";
import { useState } from "react";
import QuoteModal from "../components/QuoteModal";

export default function Pricing() {

    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (plan) => {
        setSelectedPlan(plan);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const plans = [
        {
            title: "Starter Website",
            price: "$215 (~₱11,999)",
            slug: "starter",
            description: "A simple, professional website to help you get online and start receiving inquiries.",
            features: [
                "Up to 5 pages",
                "Clear layout that explains your services",
                "Mobile-friendly design",
                "Contact form for inquiries",
                "Basic SEO setup",
                "Built on an easy-to-manage platform"
            ],
            bestFor: "Best for new businesses or simple websites",
            highlight: false
        },
        {
            title: "Business Website",
            price: "$540 (~₱29,999)",
            slug: "business",
            description: "A structured website designed to guide visitors and turn them into consistent clients.",
            features: [
                "Up to 10–12 pages",
                "Conversion-focused page structure",
                "Built on WordPress (easy to update & scale)",
                "Improved content layout for clarity",
                "Lead-focused design strategy",
                "Optimized for speed and performance"
            ],
            bestFor: "Ideal for growing businesses that want steady leads",
            highlight: true
        },
        {
            title: "Lead Generation Website",
            price: "$1,080 (~₱59,000)",
            slug: "lead",
            description: "A high-converting website built to turn visitors into real inquiries and sales.",
            features: [
                "Fully custom layout based on your service",
                "Step-by-step conversion funnel structure",
                "Strategic call-to-action placement",
                "Built using WordPress or modern frameworks",
                "WooCommerce setup (if needed)",
                "Ongoing support after launch"
            ],
            bestFor: "Best for businesses that want more inquiries and higher conversion rates",
            highlight: false
        }
    ];

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="pricing" className="relative px-4 sm:px-6 py-20 bg-[#FAF9F6]">

            <div className="max-w-7xl mx-auto">

                {/* HEADING */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#4A3F35] text-center font-semibold tracking-tight"
                >
                    Website Design Packages
                </motion.h2>

                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl md:text-2xl 
               mb-16 sm:mb-20 md:mb-28 lg:mb-32 
               text-center font-medium leading-relaxed px-2 sm:px-0"
                >
                    <span className="text-[#6B5F55]">
                        Conversion-focused websites
                    </span>{" "}
                    <span className="text-[#4A3F35] font-semibold">
                        starting at $215
                    </span>{" "}
                    <span className="text-[#6B5F55]">
                        (~₱11,999)
                    </span>
                </motion.h3>

                {/* CARDS */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
                >
                    {plans.map((p) => (
                        <motion.div
                            key={p.slug}
                            variants={item}
                            className={`relative flex flex-col p-7 sm:p-8 rounded-2xl transition-all duration-300

                                ${p.highlight
                                    ? "bg-[#4A3F35] text-[#FAF9F6] lg:scale-[1.05] lg:-translate-y-4 shadow-xl z-10"
                                    : "bg-[#E8D5C4] text-[#4A3F35] border border-[#4A3F35]/10 hover:-translate-y-1 hover:shadow-md"
                                }`}
                        >

                            {/* BADGE */}
                            {p.highlight && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-4 py-1 bg-[#A8B5A2] text-[#4A3F35] rounded-full font-medium shadow">
                                    Best Buy
                                </span>
                            )}

                            {/* TITLE */}

                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                                {p.title}
                            </h3>


                            <div className="mb-5">
                                <span className={`text-3xl sm:text-4xl font-semibold ${p.highlight ? "text-[#FAF9F6]" : "text-[#4A3F35]"}`}>
                                    {p.price.split(" (~")[0]}
                                </span>
                                <span className={`text-lg ml-2 ${p.highlight ? "text-[#FAF9F6]/70" : "text-[#4A3F35]/60"}`}>
                                    (~{p.price.split("(~")[1]}
                                </span>
                            </div>

                            {/* DESCRIPTION */}
                            <p className={`text-sm sm:text-base md:text-lg mb-5 leading-relaxed ${p.highlight ? "text-[#FAF9F6]/90" : "text-[#4A3F35]/80"
                                }`}>
                                {p.description}
                            </p>

                            {/* FEATURES */}
                            <ul className="space-y-2 sm:space-y-3 mb-5 text-sm sm:text-base md:text-lg">
                                {p.features.map((f, idx) => (
                                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                        <span className={`mt-[5px] text-xs sm:text-sm ${p.highlight ? "text-[#FAF9F6]" : "text-[#4A3F35]"
                                            }`}>
                                            ✓
                                        </span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* BEST FOR */}
                            <p className={`text-xs sm:text-sm italic mb-5 ${p.highlight ? "text-[#FAF9F6]/70" : "text-[#4A3F35]/60"
                                }`}>
                                👉 {p.bestFor}
                            </p>

                            {/* BUTTON */}
                            <a
                                href="https://wda-web-design.plutio.com/p/form/jgrK6Wn8ZQCmZyHeZ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-auto py-2 sm:py-3 rounded-md text-sm sm:text-base transition text-center font-medium transform hover:scale-[1.03] inline-block

                                    ${p.highlight
                                        ? "bg-[#FAF9F6] text-[#4A3F35] hover:opacity-90"
                                        : "border border-[#4A3F35] text-[#4A3F35] hover:bg-[#4A3F35] hover:text-[#FAF9F6]"
                                    }`}
                            >
                                Get Quote
                            </a>

                        </motion.div>
                    ))}
                </motion.div>

            </div>

            <QuoteModal
                isOpen={isOpen}
                onClose={closeModal}
                plan={selectedPlan}
            />

        </section>
    );
}
