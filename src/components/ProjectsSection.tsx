import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and order tracking.",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with smooth animations and clean design.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Weather Application",
    description:
      "A beautiful weather app that displays current conditions and forecasts with location-based data and interactive UI.",
    tags: ["React", "API Integration", "CSS"],
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "Task Management Tool",
    description:
      "A productivity app for managing tasks and projects with drag-and-drop functionality and progress tracking.",
    tags: ["React", "TypeScript", "Tailwind"],
    color: "from-green-500/20 to-emerald-500/20",
  },
];

export const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      <div className="container-padding max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            My Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A collection of projects that showcase my skills and dedication to creating
            quality web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Preview Area */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="text-6xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">
                  💻
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </Button>
                  <Button size="sm" variant="secondary" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button variant="outline" size="lg" className="gap-2">
            <Github className="w-5 h-5" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
