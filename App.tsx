import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Training from "./components/Training";
import WhyChoose from "./components/WhyChoose";
import Projects from "./components/Projects";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Training />
        <WhyChoose />
        <Projects />
        <HowItWorks />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
