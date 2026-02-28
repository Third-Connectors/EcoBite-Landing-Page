import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TickerBanner from "@/components/TickerBanner";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TickerBanner />
        <HowItWorks />
        <Features />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
