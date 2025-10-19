import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 gradient-hero">
      <div className="container max-w-6xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Seu Nome Aqui
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
          Desenvolvedor Full Stack
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Transformando ideias em experiências digitais incríveis através de código limpo e design intuitivo.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" asChild>
            <a href="#projects">Ver Projetos</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Entre em Contato</a>
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:seu@email.com" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
