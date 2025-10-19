import { Code, Database, Globe, Palette, Server, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    description: "React, TypeScript, Tailwind CSS",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"]
  },
  {
    icon: Server,
    title: "Backend",
    description: "Node.js, Python, APIs RESTful",
    skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"]
  },
  {
    icon: Database,
    title: "Database",
    description: "SQL, NoSQL, ORM",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Supabase"]
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "React Native, Progressive Web Apps",
    skills: ["React Native", "PWA", "Responsive Design", "Mobile First"]
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX, Prototipagem, Design Systems",
    skills: ["Figma", "UI/UX Design", "Design Systems", "Wireframing"]
  },
  {
    icon: Globe,
    title: "DevOps",
    description: "CI/CD, Cloud, Containerização",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-slide-up">
          Habilidades
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card border-border hover:shadow-glow transition-smooth animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
