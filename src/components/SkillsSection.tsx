import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Responsive Design", level: 92 },
  { name: "Tailwind CSS", level: 88 },
];

const additionalSkills = [
  "TypeScript",
  "Git & GitHub",
  "Problem Solving",
  "Clean Code Practices",
  "UI/UX Principles",
  "API Integration",
  "Debugging",
  "Agile Methodology",
];

export const SkillsSection = () => {
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
      id="skills"
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container-padding max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            My Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground">
            A showcase of my technical proficiencies and the tools I use to bring ideas to
            life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Progress Bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100 + 300}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Skill Chips */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="font-display font-semibold text-xl mb-6">Additional Skills</h3>
            <div className="flex flex-wrap gap-3">
              {additionalSkills.map((skill, index) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 500}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Learning Section */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
              <h4 className="font-display font-semibold text-lg mb-3">Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Node.js", "PostgreSQL", "Testing"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
