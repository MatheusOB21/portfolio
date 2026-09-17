import { ArrowRight, Clock, GitBranch, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  {
    icon: Clock,
    title: "Resposta rápida",
    description: "Retorno em até 24h úteis",
  },
  {
    icon: GitBranch,
    title: "Código versionado",
    description: "Git em todos os projetos",
  },
  {
    icon: ShieldCheck,
    title: "Compromisso com qualidade",
    description: "Boas práticas do início ao fim",
  },
];

const scrollToSection = (hash: string) => {
  const id = hash.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const CtaBand = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden border-y border-border">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative container max-w-6xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Vamos construir
          <br />
          algo juntos
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Tem um projeto em mente ou uma oportunidade para conversar? Estou disponível
          para novos desafios.
        </p>
        <Button
          size="lg"
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
            Enviar mensagem
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>

        <div className="grid sm:grid-cols-3 gap-8 mt-20 pt-10 border-t border-border text-left">
          {badges.map((badge) => (
            <div key={badge.title} className="flex items-start gap-3">
              <badge.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">{badge.title}</p>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
