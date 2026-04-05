import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function FreeAudit() {
    return (
        <div id="top" className="w-full min-h-screen bg-[#FAF9F6] text-[#4A3F35] overflow-hidden">

            {/* SEO */}
            <Helmet>
                <title>Free Website Audit | Get More Clients From Your Website</title>
                <meta
                    name="description"
                    content="Get a free website audit and discover what’s stopping your site from getting clients. Receive actionable feedback within 24 hours."
                />
            </Helmet>

            {/* BACK */}
            <div className="max-w-4xl mx-auto px-6 pt-6">
                <Link to="/" className="text-xs opacity-60 hover:opacity-100 transition">
                    ← Back to Home
                </Link>
            </div>

            {/* HERO */}
            <section className="max-w-4xl mx-auto px-6 pt-14 pb-20 text-center relative">

                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#E8D5C4]/40 to-transparent blur-2xl"></div>

                <p className="text-[11px] uppercase tracking-[0.25em] opacity-60 mb-4">
                    Free Website Audit
                </p>

                <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6">
                    Find Out Why Your Website Isn’t Getting Clients
                </h1>

                <p className="text-base opacity-80 max-w-xl mx-auto mb-10">
                    We’ll review your website and show you exactly what’s stopping visitors
                    from turning into real inquiries — and how to fix it.
                </p>

                {/* TRUST */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs opacity-70 mb-10">
                    <span>✔ Takes less than 1 minute</span>
                    <span>✔ No commitment</span>
                    <span>✔ Real feedback</span>
                </div>

                {/* 🔥 PRIMARY CTA */}
                <a
                    href="https://forms.gle/GpMG7SZF3SJLcEJj8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-block
                        bg-[#4A3F35]
                        text-white
                        px-8 py-4
                        rounded-full
                        text-sm
                        shadow-md
                        hover:shadow-xl
                        hover:scale-105
                        transition-all duration-300
                    "
                >
                    Get My Free Audit →
                </a>

                <p className="text-xs opacity-50 mt-3">
                    Opens in a new tab • Takes less than 1 minute
                </p>

            </section>

            {/* VALUE SECTION */}
            <section className="bg-[#E8D5C4]/30 py-24 px-6">

                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-3xl font-semibold mb-14">
                        What You’ll Get From This Audit
                    </h2>

                    <div className="grid sm:grid-cols-3 gap-6">

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5 hover:shadow-md transition">
                            <p className="font-medium mb-2">Conversion Issues</p>
                            <p className="text-sm opacity-70">
                                Find out why visitors aren’t contacting you.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5 hover:shadow-md transition">
                            <p className="font-medium mb-2">Design Feedback</p>
                            <p className="text-sm opacity-70">
                                See what makes your site look untrustworthy.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5 hover:shadow-md transition">
                            <p className="font-medium mb-2">Action Steps</p>
                            <p className="text-sm opacity-70">
                                Clear improvements you can apply immediately.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* FINAL CTA */}
            <section className="py-20 text-center px-6">

                <h3 className="text-2xl font-semibold mb-4">
                    Ready to improve your website?
                </h3>

                <p className="text-sm opacity-70 mb-6">
                    Get your free audit and start getting more inquiries.
                </p>

                <a
                    href="https://forms.gle/GpMG7SZF3SJLcEJj8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-block
                        border border-[#4A3F35]
                        px-7 py-3.5
                        rounded-full
                        text-sm
                        hover:bg-[#4A3F35]
                        hover:text-white
                        transition
                    "
                >
                    Start My Free Audit
                </a>

            </section>

        </div>
    );
}