import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Flowerly App",
      description:
        "A plant care and task management app helping users organize and maintain their plant collection. Features include plant categories, favorites, care schedules, and a responsive UI built with Flutter.",
      link: "https://github.com/hlakhaled/flowerlly_app/tree/master",
      isLive: false,
    },
    {
      title: "Book App",
      description:
        "A Flutter-based app for browsing, searching, and previewing a curated collection of computer science books. Includes responsive design, detailed book info, and in-app preview functionality.",
      link: "https://github.com/hlakhaled/Book_App/tree/master",
      isLive: false,
    },
    {
      title: "Bite Guide App",
      description:
        "A feature-rich cooking app where users can search, create, and favorite recipes. Includes checklists, detailed views, and built using Flutter, BLoC pattern, and Firebase.",
      link: "https://github.com/ftomara/Iti-CookingProject/tree/cooking",
      isLive: false,
    },
    {
      title: "Music App UI/UX Design",
      description:
        "A music app interface designed with a focus on user flow, accessibility, and visual harmony. Built in Figma with wireframes, mockups, and interactive prototypes based on modern design principles.",
      link: "https://www.behance.net/gallery/231680245/Moodoo-Discover-Music-Discover-Yourself",
      isLive: true,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Project <span className="bg-hero-gradient bg-clip-text text-transparent">Showcase</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated collection of apps and designs I’ve created
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="p-8 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-display font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="text-white">
                    {project.isLive ? (
                      <ExternalLink className="mr-2 h-4 w-4" />
                    ) : (
                      <Github className="mr-2 h-4 w-4" />
                    )}
                    {project.isLive ? "View Design" : "Source Code"}
                  </Button>
                </a>
              </Card>
            ))}
            
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to start your next project?
            </p>
            <Button 
              size="lg" 
              className="bg-hero-gradient hover:opacity-90 transition-opacity shadow-hero-glow text-white font-medium px-8 py-3 h-auto"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
