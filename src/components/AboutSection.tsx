import { useEffect, useRef, useState } from "react";
import { Code2, Lightbulb, Rocket, Target } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, readable, and efficient code following best practices.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Approaching challenges with creativity and analytical thinking.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and development workflows.",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Focused on delivering quality results that exceed expectations.",
  },
];

export const AboutSection = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container-padding max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div>
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                About Me
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
                Aspiring Developer with a{" "}
                <span className="text-gradient">Passion for Learning</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a dedicated frontend developer currently pursuing opportunities to grow
                professionally. My journey in web development started with curiosity and has
                evolved into a genuine passion for creating impactful digital experiences.
              </p>
              <p>
                With a strong foundation in HTML, CSS, and JavaScript, I'm constantly expanding
                my skill set to include modern frameworks and best practices. I believe in the
                power of clean code and user-centered design.
              </p>
              <p>
                As an intern, I bring fresh perspectives, unwavering enthusiasm, and a
                commitment to learning quickly. I'm eager to contribute to meaningful projects
                and grow alongside experienced professionals.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
