import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const images = [
  { src: "/images/portfolio/Cleaning-Company-Website.webp", link: "https://demo.websitedesigns.art/cleaning-company-master/" },
  { src: "/images/portfolio/Business-Corporate-Website.webp", link: "https://demo.websitedesigns.art/builerz-master/" },
  { src: "/images/portfolio/Auto-Repair-Website.webp", link: "https://demo.websitedesigns.art/autorepair-master/" },
  { src: "/images/portfolio/Garage-Auto-Service-Website.webp", link: "https://demo.websitedesigns.art/garage/" },
  { src: "/images/portfolio/Landscaping-Website.webp", link: "https://demo.websitedesigns.art/landscaper-master/" },
  { src: "/images/portfolio/Construction-Company-Website.webp", link: "https://demo.websitedesigns.art/builerz-master/" },
];

export default function SmoothScrollGallery() {
  const ref = useRef(null);
  const [screen, setScreen] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) setScreen("small");
      else if (window.innerWidth < 640) setScreen("mobile");
      else if (window.innerWidth < 1024) setScreen("tablet");
      else setScreen("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const sectionHeight =
    screen === "small"
      ? "h-[110vh]"
      : screen === "mobile"
        ? "h-[130vh]"
        : screen === "tablet"
          ? "h-[160vh]"
          : "h-[140vh]";

  const scale = useTransform(
    smooth,
    [0, 0.2, 0.5],
    screen === "small"
      ? [1.05, 1, 0.9]
      : screen === "mobile"
        ? [1.1, 1.05, 0.9]
        : [1.5, 1.5, 0.6]
  );

  const yCenter = useTransform(
    smooth,
    [0, 0.2, 0.5],
    screen === "small"
      ? [0, 0, -30]
      : screen === "mobile"
        ? [0, 0, -40]
        : [0, 0, -120]
  );

  const opacity = useTransform(smooth, [0.2, 0.5], [0, 1]);

  const getPositions = () => {
    if (screen === "small") {
      return [
        { x: -70, y: -90 },
        { x: 70, y: -90 },
        { x: -80, y: 50 },
        { x: 80, y: 50 },
        { x: -40, y: 120 },
        { x: 40, y: 120 },
      ];
    }

    if (screen === "mobile") {
      return [
        { x: -90, y: -120 },
        { x: 90, y: -120 },
        { x: -110, y: 60 },
        { x: 110, y: 60 },
        { x: -60, y: 150 },
        { x: 60, y: 150 },
      ];
    }

    if (screen === "tablet") {
      return [
        { x: -220, y: -180 },
        { x: 220, y: -180 },
        { x: -260, y: 120 },
        { x: 260, y: 120 },
        { x: -140, y: 260 },
        { x: 140, y: 260 },
      ];
    }

    return [
      { x: -400, y: -250 },
      { x: 400, y: -250 },
      { x: -500, y: 120 },
      { x: 500, y: 120 },
      { x: -250, y: 350 },
      { x: 250, y: 350 },
    ];
  };

  const positions = getPositions();

  const imageSize =
    screen === "small"
      ? "w-[70px] h-[95px]"
      : screen === "mobile"
        ? "w-[85px] h-[115px]"
        : screen === "tablet"
          ? "w-[200px] h-[150px]"
          : "w-[300px] h-[200px]";

  return (
    <section className="bg-[#FAF9F6]">

      {/* ================= HEADING ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
    w-full
    px-6 sm:px-10 lg:px-16
    pt-16 sm:pt-20 lg:pt-28
    pb-8 sm:pb-10
    text-center
  "
      >
        <h2
          className="
      text-2xl sm:text-3xl lg:text-4xl xl:text-5xl
      font-extrabold
      text-[#4A3F35]
      leading-tight
      mb-4 sm:mb-6
    "
        >
          Sample Website Designs for Small Businesses
        </h2>

        <p
          className="
      text-sm sm:text-base md:text-lg
      text-[#4A3F35]/80
      max-w-xl sm:max-w-2xl
      mx-auto
      leading-relaxed
    "
        >
          These are sample and concept designs created to showcase layout, structure, and conversion-focused design.
        </p>
      </motion.div>

      {/* ================= DESKTOP / TABLET ================= */}
      <div
        ref={ref}
        className={`${sectionHeight} -mt-5 hidden lg:flex items-center justify-center`}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">

            {/* CENTER IMAGE */}
            <motion.div
              style={{ scale, y: yCenter }}
              className="relative group mx-auto flex items-center justify-center w-[92%] sm:w-[85%] md:w-[75%] lg:max-w-5xl h-[45vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] z-10"
            >
              <img
                src="images/portfolio/devices.webp"
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href="https://demo.websitedesigns.art/"
                  target="_blank"
                  className="px-6 py-3 sm:px-10 sm:py-4 text-sm sm:text-base bg-transparent text-[#FAF9F6] border border-[#FAF9F6]/60 rounded-lg hover:bg-[#E8D5C4] hover:text-[#4A3F35]"
                >
                  View Website
                </a>
              </div>
            </motion.div>

            {/* FLOATING IMAGES */}
            {images.map((img, i) => {
              const pos = positions[i];
              const x = useTransform(smooth, [0.2, 0.7], [0, pos.x]);
              const y = useTransform(smooth, [0.2, 0.7], [0, pos.y]);

              return (
                <motion.a
                  key={i}
                  href={img.link}
                  target="_blank"
                  style={{ x, y, opacity }}
                  className="absolute"
                >
                  <img
                    src={img.src}
                    className={`${imageSize} object-cover rounded-xl shadow-lg hover:scale-105 transition`}
                  />
                </motion.a>
              );
            })}

          </div>
        </div>
      </div>

      {/* ================= MOBILE ONLY ================= */}
      <div className="block lg:hidden px-4 py-16">


        {/* ✅ FIXED GRID (NO AWKWARD WRAP) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {images.map((img, i) => (
            <motion.a
              key={i}
              href={img.link}
              target="_blank"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img
                src={img.src}
                className="w-full h-[140px] sm:h-[120px] object-cover rounded-xl shadow-sm"
              />
            </motion.a>
          ))}

        </div>
      </div>

    </section>
  );
}