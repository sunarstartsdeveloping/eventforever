import Header from "@/components/Header";
import MobileDrawer from "@/components/MobileDrawer";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Accessible Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />
      <MobileDrawer />

      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <Process />
        <Gallery />
        <Packages />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTABand />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
