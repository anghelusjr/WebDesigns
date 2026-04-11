import { Link } from "react-router-dom";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

export default function TermsOfService() {
  useEffect(() => {
    document.getElementById("terms-top")?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <main
      id="terms-top"
      className="bg-[#FAF9F6] text-[#4A3F35]"
    >
      <Helmet>
        <title>Terms of Service | WDA Web Design</title>

        <meta
          name="description"
          content="Read the Terms of Service for WebsiteDesigns.art regarding website design and development services."
        />

        <meta name="robots" content="noindex, follow" />

        <link
          rel="canonical"
          href="https://websitedesigns.art/terms-of-service"
        />
      </Helmet>

      {/* CONTENT WRAPPER */}
      <div className="min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto">

          {/* 🔙 BACK + DIVIDER */}
          <div className="mb-12">
            <Link
              to="/"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="text-sm text-[#4A3F35]/60 hover:text-[#4A3F35]"
            >
              ← Back to Home
            </Link>

            <div className="mt-6 h-[1px] bg-[#4A3F35]/10"></div>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Terms of Service
          </h1>

          <p className="text-base text-[#4A3F35]/60 mb-14">
            Last Updated: March 2026
          </p>

          {/* CONTENT */}
          <div className="space-y-12 text-base md:text-lg leading-relaxed">

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                1. Services
              </h2>
              <p>
                WebsiteDesigns.art provides website design and development services including, but not limited to, landing page design, website redesign, frontend development, and template customization.
              </p>
              <p className="mt-3">
                Each project will have a clearly defined scope, deliverables, and features agreed upon before work begins. Any additional work outside the agreed scope may require additional fees and timeline adjustments.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                2. Payments
              </h2>
              <p>
                A non-refundable deposit is required before any work begins. The remaining balance must be paid in full prior to final delivery, transfer of files, or website launch.
              </p>
              <p className="mt-3">
                Failure to complete payment may result in suspension, delayed delivery, or termination of the project.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                3. Revisions
              </h2>
              <p>
                Projects include a limited number of revisions as specified in the agreement. Additional revisions, redesigns, or major changes beyond the approved scope will incur additional charges.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                4. Client Responsibilities
              </h2>
              <p>
                Clients are responsible for providing all required content, images, branding materials, access credentials, and feedback in a timely manner.
              </p>
              <p className="mt-3">
                Delays in providing necessary materials or approvals may result in extended timelines and may incur additional costs.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                5. Timeline and Delivery
              </h2>
              <p>
                Project timelines are estimates and depend on project complexity and client responsiveness.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                6. Intellectual Property
              </h2>
              <p>
                Upon full payment, ownership of the final approved deliverables is transferred to the client.
              </p>
              <p className="mt-3">
                WebsiteDesigns.art retains the right to display completed projects in its portfolio.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                7. Third-Party Services
              </h2>
              <p>
                We are not responsible for issues caused by third-party tools, hosting, or platforms.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                8. Hosting and Domain
              </h2>
              <p>
                Clients are responsible for managing their domain and hosting unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                9. Maintenance
              </h2>
              <p>
                Ongoing support is not included unless specified in a separate agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                10. Performance Disclaimer
              </h2>
              <p>
                We do not guarantee results such as increased traffic, leads, or sales.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                11. Liability
              </h2>
              <p>
                We are not liable for damages including loss of data, revenue, or business opportunities.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                12. Refund Policy
              </h2>
              <p>
                All payments are non-refundable once work has started.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                13. Project Cancellation
              </h2>
              <p>
                Projects may be paused or terminated if the client becomes unresponsive for more than 14 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                14. Client Approval
              </h2>
              <p>
                Approved work may require additional fees for further changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                15. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of the Philippines.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                16. Contact Information
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

      <Footer />
    </main>
  );
}