import { ExternalLink } from "lucide-react";
import { siGithub } from 'simple-icons';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "Portifolio",
    description: "Portifolio pessoal para aprendizado e experiências de código",
    image: project1,
    technologies: ["React", "TypeScript", "Vite", "Node.js"],
    github: "https://github.com/MatheusOB21/portfolio",
    demo: "https://matheusob21.github.io/portfolio/"
  },
  {
    title: "Landing Page",
    description: "Landing page para exibição de produto.",
    image: project2,
    technologies: ["React", "TypeScript", "Vite", "Tailwind", "Node.js"],
    github: "https://github.com/MatheusOB21/hopwire",
    demo: "https://hopwireisp.com.br/"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-slide-up">
          Projetos
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card border-border hover:shadow-glow transition-smooth overflow-hidden animate-slide-up">
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-smooth"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-white w-4 h-4">
                      <title>{siGithub.title}</title>
                      <path d={siGithub.path} />
                    </svg>

                    Código
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
