import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";

const projects = [
  {
    title: "Portfólio",
    description: "Portfólio pessoal para aprendizado e experiências de código",
    image: project1,
    technologies: ["React", "TypeScript", "Vite", "Node.js"],
    github: "https://github.com/MatheusOB21/portfolio",
    demo: "https://matheusob21.github.io/portfolio/",
  },
  {
    title: "Landing Page",
    description: "Landing page para exibição de produto.",
    image: project2,
    technologies: ["React", "TypeScript", "Vite", "Tailwind", "Node.js"],
    github: "https://github.com/MatheusOB21/hopwire",
    demo: "https://hopwireisp.com.br/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 scroll-mt-20">
      <div className="container max-w-6xl mx-auto">
        <Carousel opts={{ align: "start" }}>
          <div className="flex items-end justify-between mb-16 gap-4">
            <SectionHeading eyebrow="Portfólio" title="Projetos em destaque" />
            <div className="hidden sm:flex gap-2 shrink-0">
              <CarouselPrevious className="static translate-y-0 rounded-none h-10 w-10" />
              <CarouselNext className="static translate-y-0 rounded-none h-10 w-10" />
            </div>
          </div>

          <CarouselContent className="-ml-6">
            {projects.map((project) => (
              <CarouselItem key={project.title} className="pl-6 sm:basis-4/5 md:basis-1/2">
                <div className="group border border-border bg-card/40 overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir demo de ${project.title}`}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                      <Button variant="outline" size="sm" className="rounded-none" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-foreground w-4 h-4"
                          >
                            <title>{siGithub.title}</title>
                            <path d={siGithub.path} />
                          </svg>
                          Código
                        </a>
                      </Button>
                      <Button size="sm" className="rounded-none" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
