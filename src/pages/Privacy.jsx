import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <main className="bg-[#FAF9F6] text-[#4A3F35]">

      {/* CONTENT WRAPPER */}
      <div className="min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto">

          {/* 🔙 BACK */}
          <div className="mb-12">
            <Link
              to="/"
              className="text-sm text-[#4A3F35]/60 hover:text-[#4A3F35]"
            >
              ← Back to Home
            </Link>

            <div className="mt-6 h-[1px] bg-[#4A3F35]/10"></div>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Privacy Policy
          </h1>

          <p className="text-base text-[#4A3F35]/60 mb-14">
            Last Updated: March 2026
          </p>

          {/* CONTENT */}
          <div className="space-y-12 text-base md:text-lg leading-relaxed">

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                1. Information We Collect
              </h2>
              <p>
                We may collect personal information such as your name, email address, and any details you provide when filling out forms on our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                Your information is used to respond to inquiries, provide services, communicate with you, and improve our website and offerings.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                3. Data Protection
              </h2>
              <p>
                We take reasonable measures to protect your personal data from unauthorized access, disclosure, or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                4. Sharing of Information
              </h2>
              <p>
                We do not sell or rent your personal information. We may share data with trusted third-party services only when necessary to operate our website or provide services.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                5. Cookies and Tracking
              </h2>
              <p>
                Our website may use cookies or similar technologies to enhance user experience and analyze website performance.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                6. Third-Party Services
              </h2>
              <p>
                We may use third-party tools such as analytics, hosting, or communication platforms. We are not responsible for their privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                7. Your Rights
              </h2>
              <p>
                You may request access, correction, or deletion of your personal data by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                8. Data Retention
              </h2>
              <p>
                We retain personal information only as long as necessary to provide services or comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy at any time. Changes will be posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                10. Contact Information
              </h2>
              <p>
                For inquiries, please contact:
                hello@websitedesigns.art

                For support-related concerns:
                support@websitedesigns.art
              </p>
            </section>

          </div>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}