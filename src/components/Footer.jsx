import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#4A3F35] border-t border-[#E8D5C4]/10 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">

          {/* LEFT */}
          <div>
            <Link to="/">
              <h3 className="text-2xl font-[Playfair_Display] text-[#E8D5C4] mb-4 hover:opacity-80 transition">
                websitedesigns<span className="opacity-70">.art</span>
              </h3>
            </Link>

            <p className="text-[#E8D5C4]/70 text-sm max-w-sm">
              Conversion-focused website design for businesses that want to turn visitors into clients.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* Contact */}
            <div>
              <p className="text-[#E8D5C4] font-medium mb-2">Contact</p>
              <div className="text-[#E8D5C4]/70 text-sm space-y-1">
                <a
                  href="mailto:hello@websitedesigns.art"
                  className="block hover:text-[#E8D5C4] transition"
                >
                  hello@websitedesigns.art
                </a>
                <a
                  href="mailto:support@websitedesigns.art"
                  className="block hover:text-[#E8D5C4] transition"
                >
                  support@websitedesigns.art
                </a>
              </div>
            </div>

            {/* Business Info */}
            <div className="text-[#E8D5C4]/60 text-sm leading-relaxed">
              <p>DTI Business Name Registration No.: 8033290</p>
              <p>WDA Web Design Services</p>
              <p>Based in the Philippines — Serving clients worldwide.</p>
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-[1px] bg-[#E8D5C4]/20"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#E8D5C4]/60 text-center md:text-left">

          {/* ✅ LEGAL LINKS FIXED */}
          <div className="flex gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-[#E8D5C4] transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-of-service"
              className="hover:text-[#E8D5C4] transition"
            >
              Terms of Service
            </Link>
          </div>

          {/* Copyright */}
          <p>© {new Date().getFullYear()} WDA Web Design Services</p>

        </div>

      </div>
    </footer>
  );
}