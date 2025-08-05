import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Palette, 
  Code, 
  Database, 
  Globe, 
  Wrench 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "text-blue-500",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "Dart", level: 88 },
        { name: "Clean Architecture", level: 85 },
        { name: "MVVM Pattern", level: 80 },
        { name: "OOP", level: 85 }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      color: "text-pink-500",
      skills: [
        { name: "Figma", level: 88 },
        { name: "UI/UX Design", level: 85 },
        { name: "Wireframing", level: 82 },
        { name: "Prototyping", level: 80 },
        { name: "User Research", level: 75 }
      ]
    },
    {
      title: "State Management",
      icon: Code,
      color: "text-green-500",
      skills: [
        { name: "BLoC Pattern", level: 85 },
        { name: "Cubit", level: 83 },
        { name: "State Management", level: 80 },
        { name: "Clean Code", level: 85 },
        { name: "Debugging", level: 82 }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "text-purple-500",
      skills: [
        { name: "Firebase", level: 85 },
        { name: "REST APIs", level: 80 },
        { name: "Stripe Integration", level: 75 },
        { name: "PayPal Integration", level: 73 },
        { name: "Hive Database", level: 70 }
      ]
    },
    {
      title: "Development Tools",
      icon: Globe,
      color: "text-orange-500",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 83 },
        { name: "Responsive Design", level: 88 },
        { name: "Visual Consistency", level: 80 },
        { name: "Accessibility", level: 75 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Wrench,
      color: "text-gray-500",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Teamwork", level: 88 },
        { name: "Management", level: 80 },
        { name: "Organization", level: 85 }
      ]
    }
  ];

  const certifications = [
    "Flutter Advanced Course: Bloc and MVVM Pattern",
    "Deep Dive into Clean Architecture in Flutter",
    "Responsive Design and Git for Flutter Developers",
    "Flutter Payment Integration: Stripe, PayPal & More",
    "NASA International Space Apps Challenge Certificate"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Skills & <span className="bg-hero-gradient bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and professional competencies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-4`}>
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-display font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Certifications */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-semibold text-center mb-8">
              Certifications & Achievements
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;