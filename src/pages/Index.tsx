import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { HowIWork } from "@/components/HowIWork";
import { Projects } from "@/components/Projects";
import { CtaBand } from "@/components/CtaBand";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import FadeSection from "@/components/ui/fade-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />

        <FadeSection>
          <About />
        </FadeSection>

        <Skills />

        <HowIWork />

        <FadeSection>
          <Projects />
        </FadeSection>

        <FadeSection>
          <CtaBand />
        </FadeSection>

        <FadeSection>
          <Contact />
        </FadeSection>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
