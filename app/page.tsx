import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import ProcessSection from "@/components/process-section";
import Services from "@/components/services";
import GrowthPlaybook from "@/components/growth-playbook";
import CaseStudies from "@/components/case-studies";
import Testimonial from "@/components/testimonial";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <ProcessSection />
      <Services />
      <GrowthPlaybook />
      <CaseStudies />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
}
