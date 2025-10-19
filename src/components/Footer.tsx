import { Linkedin } from "lucide-react";
import { siGithub, siMaildotru } from 'simple-icons';
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Seu Nome. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-white w-5 h-5">
                  <title>{siGithub.title}</title>
                  <path d={siGithub.path} />
                </svg>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:seu@email.com" aria-label="Email">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-white w-5 h-5">
                  <title>{siMaildotru.title}</title>
                  <path d={siMaildotru.path} />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
