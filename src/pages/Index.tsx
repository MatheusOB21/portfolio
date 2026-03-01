import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import FadeSection from "@/components/ui/fade-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <FadeSection>
          <Hero />
        </FadeSection>
        
        <FadeSection>
          <About />
        </FadeSection>

        <FadeSection>
          <Skills />
        </FadeSection>

        <FadeSection>
          <Projects />
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
