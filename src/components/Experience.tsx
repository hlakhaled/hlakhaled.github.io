import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "UI/UX Design Trainee",
      company: "National Telecommunication Institute – NTI",
      duration: "July 2025 – August 2025",
      location: "Remote",
      type: "Internship",
      responsibilities: [
        "Learned fundamental UI/UX concepts including user research, wireframing, and prototyping",
        "Applied clean architecture and state management techniques like Bloc and Cubit in real projects",
        "Integrated Firebase services and improved UI responsiveness across multiple screen sizes",
        "Created user-centered designs following modern design principles",
        "Developed skills in creating wireframes, mockups, and interactive prototypes"
      ],
      technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "User Research"]
    },
    {
      title: "Flutter Intern",
      company: "Information Technology Institute – ITI",
      duration: "August 2024 – September 2024",
      location: "Remote",
      type: "Internship",
      responsibilities: [
        "Gained hands-on experience in building mobile applications using Flutter and Dart",
        "Applied clean architecture and state management techniques like Bloc and Cubit in real projects",
        "Integrated Firebase services and improved UI responsiveness across multiple screen sizes",
        "Developed feature-rich applications with real-time data handling",
        "Collaborated with team members on mobile app development projects"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "BLoC", "Cubit", "Clean Architecture"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Work <span className="bg-hero-gradient bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the impactful projects I've contributed to
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-8 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <Building className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ml-16">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Responsibilities & Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-foreground/80">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;