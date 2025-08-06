import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science and Artificial Intelligence",
      institution: "Zagazig University",
      year: "2022-2026",
      location: "Zagazig, Egypt"
    },
 
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, education, and what drives my passion for technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-hero-gradient rounded-2xl transform rotate-3 opacity-20"></div>
                <img
                  src={profileImage}
                  alt="Hla Khaled EL Tahawy - Professional Portrait"
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-card-hover object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in space-y-8">
              {/* Bio */}
              <div>
                <h3 className="text-2xl font-display font-semibold mb-4">
                  Hello! I'm Hla Khaled EL Tahawy
                </h3>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    I'm a dedicated Computer Science and Artificial Intelligence student specializing in Flutter 
                    development and mobile app design. Currently pursuing my Bachelor's degree at Zagazig University 
                    with a strong GPA of 3.8, I have delivered impactful projects in authentication, UI/UX design, 
                    and responsive cross-platform applications.
                  </p>
                 
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-display font-semibold mb-6">Education</h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <Card key={index} className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                          <p className="text-primary font-medium mb-2">{edu.institution}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {edu.year}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {edu.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;