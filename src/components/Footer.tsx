import { Linkedin } from "lucide-react";
import { siGithub, siMaildotru } from "simple-icons";
import { Button } from "@/components/ui/button";

const menuItems = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "O que faço", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

const scrollToSection = (hash: string) => {
  const id = hash.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="font-display text-lg font-semibold tracking-[0.2em] uppercase mb-4">
              Matheus
            </p>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              Desenvolvedor Full Stack transformando ideias em experiências digitais
              incríveis através de código limpo e design intuitivo.
            </p>
            <div className="flex gap-2">
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

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Navegação
            </p>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Contato
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:matheus53barros@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  matheus53barros@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5585991385292"
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  +55 (85) 9 9138-5292
                </a>
              </li>
              <li className="text-muted-foreground">SP, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs">
            © {currentYear} Matheus. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs">
            Feito com React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
