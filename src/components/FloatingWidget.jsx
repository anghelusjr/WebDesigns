import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const options = [
    {
      label: "Chat on WhatsApp",
      link: "https://wa.me/639947544208",
      bg: "bg-green-500 hover:bg-green-600",
    },
    {
      label: "Start a Project",
      link: "https://wda-web-design.plutio.com/p/form/zGr4yTuMAd5WGuF3G",
      bg: "bg-black hover:bg-gray-800",
    },
  ];

  return (
    <div
      ref={ref}
      className="
        fixed 
        bottom-4 sm:bottom-5 
        right-3 sm:right-5 
        z-50 
        flex 
        flex-col 
        items-end 
        max-w-full
      "
    >
      {/* OPTIONS */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="mb-3 flex flex-col gap-2 items-end"
          >
            {options.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  max-w-[80vw] sm:max-w-xs
                  break-words
                  px-4 py-2
                  rounded-full
                  text-white
                  shadow-lg
                  text-sm font-medium
                  ${item.bg}
                `}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* BUTTON */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        className="
          cursor-pointer
          w-12 h-12 sm:w-14 sm:h-14
          rounded-full
          bg-[#A8B5A2]
          text-white
          text-lg sm:text-xl
          shadow-xl
          flex items-center justify-center
        "
      >
        {open ? "✕" : "💬"}
      </motion.button>
    </div>
  );
}