import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Landing Sections
import Hero from "./sections/Hero";
import Problems from "./sections/Problems";
import PainPoints from "./sections/PainPoints";
import Portfolio from "./sections/Portfolio";
import Pricing from "./sections/Pricing";
import CTA from "./sections/CTA";
import ComparisonSection from "./sections/ComparisonSection";
import ServicesSection from "./sections/ServicesSection";
import WhyChooseUs from "./sections/WhyChooseUs";
import GetMoreInquiries from "./sections/GetMoreInquiries";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import WebsiteIssues from "./sections/WebsiteIssues";
import SolutionsSection from "./sections/SolutionsSection";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";
import FreeAudit from "./components/FreeAudit";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/Privacy";
import FloatingWidget from "./components/FloatingWidget";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Affordable Website Design Philippines | Small Business</title>

        <meta name="description"
          content="WDA Web Design creates modern, responsive websites for construction, cleaning, dental, HVAC, auto repair, and service-based businesses looking to grow online." />

        <meta name="robots" content="index, follow" />

        <meta name="keywords"
          content="business website design Philippines, contractor website design, dental clinic website design, HVAC website design, cleaning company website design, construction company web designer, auto repair website design, handyman business website, landscaping website design, healthcare website designer, responsive business websites, modern service business websites, WordPress business websites, React frontend developer, custom landing page design" />

        <link rel="canonical" href="https://www.websitedesigns.art/" />


        <meta name="author" content="Website Designs Arts" />

        {/* <!-- Theme / Browser --> */}
        <meta name="theme-color" content="#FAF9F6" />
        <meta name="color-scheme" content="light" />

        {/* <!-- Open Graph / Facebook / Discord --> */}
        <meta
          property="og:title"
          content="Business Website Design Philippines | WDA Web Design"
        />

        <meta
          property="og:description"
          content="Conversion-focused website design for businesses that want to turn visitors into clients."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.websitedesigns.art/"
        />

        <meta
          property="og:image"
          content="https://www.websitedesigns.art/favicon.png"
        />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Business Website Design Philippines | WDA Web Design"
        />

        <meta
          name="twitter:description"
          content="Modern, responsive, and conversion-focused websites for service businesses."
        />

        <meta
          name="twitter:image"
          content="https://www.websitedesigns.art/favicon.png"
        />

        {/* <!-- Mobile / Apple --> */}
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />

        <meta
          name="apple-mobile-web-app-title"
          content="WDA Web Design"
        />

        {/* <!-- Favicons --> */}
        <link rel="icon" type="image/png" href="/favicon.png" />

        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* <!-- Preconnect for Performance --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Helmet>

      <main className="relative overflow-x-hidden">
        <FloatingWidget />

        <Navbar />
        <Hero />
        <Problems />
        <WebsiteIssues />
        <PainPoints />
        <SolutionsSection />
        <ServicesSection />
        <About />
        <WhyChooseUs />
        <Portfolio />
        <ComparisonSection />
        <Pricing />
        <Testimonials />
        <GetMoreInquiries />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/free-audit" element={<FreeAudit />} />

        <Route path="/terms-of-service" element={<TermsOfService />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/quote" element={<QuoteModal />} />
      </Routes>
    </Router>
  );
}