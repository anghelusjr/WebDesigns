import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function QuoteModal({ isOpen, onClose }) {

  // scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleRedirect = () => {
    window.open(
      "https://wda-web-design.plutio.com/p/form/jgrK6Wn8ZQCmZyHeZ",
      "_blank"
    );
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* BACKDROP */}
          <div
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
          />

          {/* MODAL */}
          <motion.div
            initial={{ scale: 0.9, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 40, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8"
          >

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="cursor-pointer absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center"
            >
              ✕
            </button>

            {/* HEADER */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#4A3F35] mb-3">
              Request a Quote
            </h2>

            <p className="text-sm sm:text-base text-[#4A3F35]/70 mb-6 leading-relaxed">
              Tell us about your project and we’ll provide a clear, customized
              quote based on your needs.
            </p>

            {/* BENEFITS */}
            <ul className="space-y-3 mb-6">
              {[
                "Custom pricing based on your project",
                "Clear scope and deliverables",
                "No hidden fees",
                "Fast response within 24 hours",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-[#4A3F35]">
                  <div className="w-5 h-5 rounded-full bg-[#A8B5A2] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={handleRedirect}
              className="cursor-pointer w-full bg-[#A8B5A2] hover:scale-[1.02] transition text-white py-3 rounded-xl font-semibold shadow-md"
            >
              Continue to Quote Form →
            </button>

            {/* TRUST */}
            <p className="text-xs text-center text-gray-400 mt-4">
              Takes less than 2 minutes • No commitment required
            </p>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}