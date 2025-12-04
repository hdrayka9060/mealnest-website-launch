import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TodaysMenu from "@/components/TodaysMenu";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Packaging from "@/components/Packaging";
import Testimonials from "@/components/Testimonials";
import CTAStrip from "@/components/CTAStrip";
import Footer from "@/components/Footer";
import MobileOrderButton from "@/components/MobileOrderButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <About />
      <TodaysMenu />
      <Features />
      <Pricing />
      <Packaging />
      <Testimonials />
      <CTAStrip />
      <Footer />
      <MobileOrderButton />
    </main>
  );
};

export default Index;
