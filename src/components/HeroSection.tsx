import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";

export const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-padding max-w-6xl mx-auto relative z-10 pt-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open for Opportunities
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up-delay-1">
            Hi, I'm a{" "}
            <span className="text-gradient">Frontend Developer</span>
            <br />
            <span className="text-muted-foreground">Building Digital Experiences</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed animate-slide-up-delay-2">
            Passionate about creating beautiful, responsive, and user-friendly web applications.
            Currently seeking internship opportunities to grow and contribute to innovative projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delay-3">
            <Button
              variant="hero"
              size="xl"
              onClick={() => handleScroll("#projects")}
              className="w-full sm:w-auto"
            >
              <ExternalLink className="w-5 h-5" />
              View Projects
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => handleScroll("#contact")}
              className="w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
          </div>

          {/* Stats */}
          <div className="pt-12 grid grid-cols-3 gap-8 max-w-md mx-auto animate-slide-up-delay-3">
            {[
              { value: "5+", label: "Projects" },
              { value: "10+", label: "Technologies" },
              { value: "100%", label: "Dedication" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-scroll">
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-primary" />
        </div>
      </div>
    </section>
  );
};
