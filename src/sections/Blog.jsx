"use client";

import { motion } from "framer-motion";

import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const blogPosts = [
  {
    id: 1,
    category: "Web Design",
    title: "Modern Landing Page Trends for 2026",
    description:
      "Discover clean layouts, interactive experiences, and conversion-focused design strategies for modern websites.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    author: "Angel Buenavista",
    date: "May 12, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Frontend Development",
    title: "How Responsive Design Improves User Experience",
    description:
      "Learn how responsive layouts help your website perform better across desktop, tablet, and mobile devices.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    author: "Angel Buenavista",
    date: "May 10, 2026",
    readTime: "7 min read",
  },
  {
    id: 3,
    category: "SEO",
    title: "SEO-Friendly Web Design Best Practices",
    description:
      "Create websites that not only look professional but also rank better in search engines.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
    author: "Angel Buenavista",
    date: "May 8, 2026",
    readTime: "4 min read",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function BlogSection() {
  return (
    <section
      className="w-full py-20 px-5 md:px-10 lg:px-16"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-5"
            style={{
              backgroundColor: "#E8D5C4",
              color: "#4A3F35",
            }}
          >
            Latest Articles
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "#4A3F35" }}
          >
            Insights & Creative Blog Posts
          </h2>

          <p
            className="max-w-2xl mx-auto mt-5 text-base md:text-lg leading-relaxed"
            style={{ color: "#6B5B4D" }}
          >
            Explore web design inspiration, frontend development tips,
            responsive UI ideas, and strategies to grow your online presence.
          </p>
        </motion.div>

        {/* BLOG GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[28px] border border-[#E6DED6] bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden h-[240px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-4 left-4">
                  <span
                    className="px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md"
                    style={{
                      backgroundColor: "rgba(250,249,246,0.92)",
                      color: "#4A3F35",
                    }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-7">
                {/* META */}
                <div
                  className="flex flex-wrap items-center gap-4 text-sm mb-5"
                  style={{ color: "#7B6A5E" }}
                >
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* TITLE */}
                <h3
                  className="text-2xl font-semibold leading-snug mb-4 transition-colors duration-300"
                  style={{ color: "#4A3F35" }}
                >
                  {post.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="text-[15px] leading-relaxed mb-7"
                  style={{ color: "#6B5B4D" }}
                >
                  {post.description}
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between pt-5 border-t border-[#EEE6DE]">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "#A8B5A2",
                        color: "#FAF9F6",
                      }}
                    >
                      <UserIcon className="w-5 h-5" />
                    </div>

                    <div>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#4A3F35" }}
                      >
                        {post.author}
                      </p>
                    </div>
                  </div>

                  <button
                    className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                    style={{ color: "#4A3F35" }}
                  >
                    Read More
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}