import profileImage from "@/assets/profile.jpg";
import { SectionHeading } from "@/components/ui/section-heading";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 scroll-mt-20">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading eyebrow="Quem sou eu" title="Sobre mim" className="mb-16" />

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 border border-border pointer-events-none" />
              <img
                src={profileImage}
                alt="Foto de perfil"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-[filter] duration-700"
              />
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Olá! Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras.
              Com experiência em desenvolvimento web, tenho expertise em transformar
              conceitos complexos em interfaces intuitivas e funcionais.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha jornada na tecnologia começou em 2023. Desde então,
              venho constantemente aprimorando minhas habilidades e me mantendo atualizado
              com as últimas tendências do mercado.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Quando não estou codificando, gosto de assistir séries, tocar piano, jogar e
              cultivar bons hábitos. Acredito que o equilíbrio entre trabalho e vida pessoal
              é essencial para manter a criatividade e a produtividade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
