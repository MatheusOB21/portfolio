import { Linkedin, ArrowRight, ArrowDown } from "lucide-react";
import { siGithub, siMaildotru } from "simple-icons";
import { Button } from "@/components/ui/button";
import { useParallaxOffset } from "@/hooks/use-parallax";

const scrollToSection = (hash: string) => {
  const id = hash.replace("#", "");
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Hero = () => {
  const offset = useParallaxOffset();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 pt-32 pb-20 overflow-hidden scroll-mt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div
        className="absolute -top-24 -bottom-24 left-0 right-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]"
        style={{ transform: `translate3d(0, ${offset * 0.15}px, 0)` }}
      />
      <div
        className="absolute -top-40 -right-20 w-[500px] h-[500px] bg-primary/20 blur-[140px] rounded-full pointer-events-none"
        style={{ transform: `translate3d(0, ${offset * 0.35}px, 0)` }}
      />

      <div className="relative container max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="label-eyebrow">Disponível para novos projetos</span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl font-semibold leading-[0.95] tracking-tight mb-8 animate-fade-in">
          MATHEUS
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            DEV FULL STACK
          </span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-12 animate-fade-in">
          Transformando ideias em experiências digitais incríveis através de código limpo e design intuitivo.
        </p>

        <div className="flex flex-wrap gap-4 mb-16 animate-fade-in">
          <Button
            size="lg"
            className="rounded-none uppercase tracking-[0.15em] text-xs px-8"
            asChild
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#projects");
              }}
            >
              Ver projetos
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-none uppercase tracking-[0.15em] text-xs px-8"
            asChild
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
            >
              Entre em contato
            </a>
          </Button>
        </div>

        <div className="flex gap-2 animate-fade-in">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/MatheusOB21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>{siGithub.title}</title>
                <path d={siGithub.path} />
              </svg>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/matheusoliveira2101/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:matheus53barros@gmail.com" aria-label="Email">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>{siMaildotru.title}</title>
                <path d={siMaildotru.path} />
              </svg>
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        aria-label="Rolar para baixo"
        className="hidden md:flex absolute bottom-10 right-6 lg:right-10 flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-smooth"
      >
        <span className="[writing-mode:vertical-rl] text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="h-16 w-px bg-border" />
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};
