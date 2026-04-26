"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    LightBulbIcon,
    CursorArrowRaysIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const issues = [
    {
        title: "Unclear Offer",
        icon: LightBulbIcon,
        description:
            "Many websites fail because visitors cannot immediately understand what the business actually offers. If your homepage doesn’t clearly explain your service, target audience, and value, users will feel confused and leave. A strong website should answer three questions instantly: What do you do? Who is it for? Why should they choose you? Without this clarity, even interested visitors won’t convert into clients.",
    },
    {
        title: "No Clear Next Step",
        icon: CursorArrowRaysIcon,
        description:
            "Even if visitors are interested, they often don’t know what to do next. Websites without clear calls-to-action (like “Get a Quote” or “Book a Call”) lose potential leads. Every page should guide users toward a specific action. Without direction, visitors will simply browse and leave—resulting in lost opportunities for your business.",
    },
    {
        title: "Lack of Trust",
        icon: ShieldCheckIcon,
        description:
            "Trust is one of the biggest factors in converting visitors into clients. If your website lacks testimonials, clear branding, professional design, or proof of results, users may hesitate to contact you. Small businesses especially need to build credibility online. A trustworthy website reassures visitors that your business is legitimate and capable of delivering results.",
    },
    {
        title: "Confusing Layout",
        icon: Squares2X2Icon,
        description:
            "A cluttered or poorly structured website makes it hard for users to find information. When visitors have to “figure out” your website instead of easily navigating it, they leave. Good website design should be simple, organized, and easy to scan. Clear sections, proper spacing, and logical flow help users understand your content quickly and comfortably.",
    },
    {
        title: "Slow or Not Mobile-Friendly",
        icon: DevicePhoneMobileIcon,
        description:
            "Most users in the Philippines browse on mobile devices. If your website loads slowly or doesn’t display properly on mobile, visitors will leave immediately. Speed and responsiveness are critical for both user experience and SEO. A fast, mobile-friendly website ensures that users can easily interact with your business anytime, anywhere.",
    },
];

export default function ImageStepSection() {
    const [active, setActive] = useState(0);
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    return (
        <section className="bg-[#FAF9F6] py-16 md:py-24 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h3 className="text-2xl md:text-3xl text-[#4A3F35] leading-snug">
                        Common reasons websites fail to convert and hurt your business.
                    </h3>
                </motion.div>

                {/* Steps */}
                <div className="relative mb-12">

                    {/* Line (hidden on small screens for better UX) */}
                    <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-[#E8D5C4]"></div>

                    {/* Scroll container on mobile */}
                  <div className="flex md:justify-between justify-start overflow-x-auto md:overflow-visible px-4 md:px-0 pb-4 md:pb-0 scroll-smooth gap-4">
                        {issues.map((item, index) => {
                            const isActive = active === index;
                            const Icon = item.icon;

                            return (
                                <motion.button
                                    key={index}
                                    onClick={() => setActive(index)}
                                    initial={isMobile ? false : { opacity: 0, y: 40 }}
                                    whileInView={isMobile ? false : { opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center z-10 min-w-[80px] flex-shrink-0"
                                >
                                    {/* Icon */}
                                    <div
                                        className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border transition cursor-pointer ${isActive
                                                ? "bg-[#A8B5A2] border-[#A8B5A2]"
                                                : "bg-white border-[#E8D5C4]"
                                            }`}
                                    >
                                        <Icon
                                            strokeWidth={1.8}
                                            className={`w-5 h-5 md:w-6 md:h-6 transition ${isActive
                                                    ? "text-white scale-110"
                                                    : "text-[#4A3F35]"
                                                }`}
                                        />
                                    </div>

                                    {/* Label */}
                                    <span
                                        className={`mt-2 md:mt-3 text-[11px] md:text-sm text-center max-w-[90px] md:max-w-[120px] ${isActive ? "text-[#4A3F35]" : "text-[#4A3F35]/50"
                                            }`}
                                    >
                                        {item.title}
                                    </span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto px-2 md:px-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white border border-[#E8D5C4] rounded-2xl md:rounded-3xl p-6 md:p-8 text-center"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-[#4A3F35] mb-3 md:mb-4">
                                {issues[active].title}
                            </h3>

                            <p className="text-[#4A3F35]/70 text-sm md:text-base leading-relaxed">
                                {issues[active].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 md:mt-16"
                >
                    <a
                        href="https://wda-web-design.plutio.com/p/form/jgrK6Wn8ZQCmZyHeZ"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-[#4A3F35] text-[#FAF9F6] px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-medium hover:opacity-90 transition cursor-pointer">
                            Fix My Website
                        </button>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}