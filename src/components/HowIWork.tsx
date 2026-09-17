import { CheckCircle2, Gauge, Layers, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeSection from "@/components/ui/fade-section";

const principles = [
  {
    icon: Layers,
    title: "Full stack de ponta a ponta",
    description: "Do banco de dados à interface: React/TypeScript no front, Ruby on Rails no back.",
  },
  {
    icon: CheckCircle2,
    title: "Código limpo e escalável",
    description: "Boas práticas e design patterns para um código legível, testável e fácil de manter.",
  },
  {
    icon: Gauge,
    title: "Performance e responsividade",
    description: "Interfaces rápidas, mobile-first, com atenção a UX e acessibilidade.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação e entrega",
    description: "Processo transparente, prazos claros e comunicação direta do briefing ao deploy.",
  },
];

const scrollToSection = (hash: string) => {
  const id = hash.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const HowIWork = () => {
  return (
    <section id="how-i-work" className="py-24 px-4 scroll-mt-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 border border-border">
          {/* Fake code editor visual */}
          <FadeSection className="relative min-h-[420px] bg-card">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative h-full flex items-center justify-center p-8">
              <div className="w-full max-w-md rounded-lg border border-border bg-background shadow-card overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                  <span className="w-3 h-3 rounded-full bg-destructive/70" />
                  <span className="w-3 h-3 rounded-full bg-muted-foreground/40" />
                  <span className="w-3 h-3 rounded-full bg-primary/60" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">app.tsx</span>
                </div>
                <div className="p-5 font-mono text-xs md:text-sm leading-relaxed space-y-2">
                  <p><span className="text-primary">const</span> <span className="text-accent">dev</span> = {"{"}</p>
                  <p className="pl-4"><span className="text-muted-foreground">stack:</span> [<span className="text-primary">"React"</span>, <span className="text-primary">"Rails"</span>],</p>
                  <p className="pl-4"><span className="text-muted-foreground">focus:</span> <span className="text-primary">"clean code"</span>,</p>
                  <p className="pl-4"><span className="text-muted-foreground">status:</span> <span className="text-primary">"shipping"</span>,</p>
                  <p>{"}"}</p>
                  <p className="text-muted-foreground">// sempre aprendendo algo novo</p>
                  <p className="inline-flex items-center">
                    <span className="w-2 h-4 bg-primary animate-pulse" />
                  </p>
                </div>
              </div>
            </div>
          </FadeSection>

          {/* Text panel */}
          <FadeSection className="bg-card/60 border-t lg:border-t-0 lg:border-l border-border p-10 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-8 bg-primary" />
              <span className="label-eyebrow">Como eu trabalho</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Feito para performar
            </h2>
            <p className="text-muted-foreground mb-10">
              Cada projeto é pensado, testado e construído para funcionar bem nas condições
              reais: prazos apertados, requisitos que mudam e usuários exigentes.
            </p>

            <div className="space-y-6 mb-10">
              {principles.map((principle) => (
                <div key={principle.title} className="flex gap-4">
                  <principle.icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="rounded-none uppercase tracking-[0.15em] text-xs w-fit"
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
              </a>
            </Button>
          </FadeSection>
        </div>
      </div>
    </section>
  );
};
