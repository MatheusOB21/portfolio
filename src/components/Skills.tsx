import { Code, Database, Globe, Palette, Server, Smartphone, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import FadeSection from "@/components/ui/fade-section";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    description: "React, TypeScript, Tailwind CSS",
    skills: ["React", "Vite", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    description: "Ruby on Rails, APIs RESTful",
    skills: ["Ruby", "Rails", "RESTful APIs", "Design Patterns", "Clean Code"],
  },
  {
    icon: Database,
    title: "Database",
    description: "SQL, ORM",
    skills: ["PostgreSQL", "Redis", "Supabase"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "React Native, Progressive Web Apps",
    skills: ["React Native", "PWA", "Responsive Design", "Mobile First"],
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX, Design Systems",
    skills: ["Figma", "UI/UX Design", "Design Systems"],
  },
  {
    icon: Globe,
    title: "DevOps",
    description: "CI/CD, Cloud, Docker",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-card/40 scroll-mt-20">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading eyebrow="O que eu faço" title="Minhas frentes de trabalho" className="mb-16" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {skillCategories.map((category, index) => (
            <FadeSection key={category.title} delay={index * 80}>
              <div className="group relative bg-background p-8 h-full flex flex-col overflow-hidden">
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-smooth" />

                <div className="relative flex items-start justify-between mb-10">
                  <span className="font-display text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-smooth" />
                </div>

                <div className="relative w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-6">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <h3 className="relative font-display text-xl font-semibold mb-2">{category.title}</h3>
                <p className="relative text-sm text-muted-foreground mb-6">{category.description}</p>

                <div className="relative flex flex-wrap gap-2 mt-auto pt-6 border-t border-border">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs bg-secondary rounded-full text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
};
