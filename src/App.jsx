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
        <title>Lead Generation Website Design for Small Businesses | WDA</title>

        <meta
          name="description"
          content="We design high-converting websites for small businesses that turn visitors into real clients. Built to generate leads and grow your business."
        />

        <link rel="canonical" href="https://websitedesigns.art/" />
      </Helmet>

      <div className="relative overflow-x-hidden">
        <FloatingWidget />

        <Navbar />
        <Hero />
        <Problems />
        <PainPoints />
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
      </div>
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