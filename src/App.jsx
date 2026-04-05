import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Landing components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import PainPoints from "./components/PainPoints";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ComparisonSection from "./components/ComparisonSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import GetMoreInquiries from "./components/GetMoreInquiries";
import Testimonials from "./components/Testimonials";
import FloatingWidget from "./components/FloatingWidget";
import About from "./components/About"

// Pages
import QuoteModal from "./pages/QuoteModal";
import FreeAudit from "./pages/FreeAudit";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/Privacy";

function HomePage() {
  return (
    <div className="relative overflow-x-hidden">

      <FloatingWidget />

      <Helmet>
        <title>Lead Generation Website Design for Small Businesses | WDA</title>
        <meta
          name="description"
          content="We design high-converting websites for small businesses that turn visitors into real clients. Built to generate leads and grow your business."
        />
      </Helmet>


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