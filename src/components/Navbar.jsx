import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#E8D5C4]/80 backdrop-blur-md shadow-sm z-9999 border-b border-black/5">

      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-5 sm:px-8 lg:px-12">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold text-[#4A3F35] tracking-tight"
        >
          WDA
        </Link>

        {/* CTA BUTTON */}
        <Link
          to="/free-audit"
        className="
        text-xs sm:text-sm
        border border-[#4A3F35]
        px-4 sm:px-5 py-2 sm:py-2.5
        rounded-full
        hover:bg-[#4A3F35]
        hover:text-white
        transition
        whitespace-nowrap
      "
        >
          Get Free Audit
        </Link>

      </nav>

    </header>
  );
}