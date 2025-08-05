import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Palette, 
  Globe, 
  Plug, 
  Layers,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Create stunning cross-platform mobile applications using Flutter with clean architecture, BLoC state management, and Firebase integration.",
      features: [
        "Cross-platform Flutter development",
        "Clean Architecture & MVVM",
        "BLoC & Cubit state management",
        "Firebase integration & deployment"
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Design user-centered interfaces with modern principles, focusing on accessibility, visual consistency, and engaging user experiences.",
      features: [
        "User research & wireframing",
        "Interactive prototyping in Figma",
        "Responsive design principles",
        "Accessibility & usability testing"
      ],
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-500"
    },
    {
      icon: Globe,
      title: "Responsive Web Design",
      description: "Build responsive mobile applications with performance optimization and clean code practices for seamless user experiences.",
      features: [
        "Responsive Flutter layouts",
        "Performance optimization",
        "Clean code practices",
        "Cross-device compatibility"
      ],
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500"
    },
    {
      icon: Plug,
      title: "API Integration",
      description: "Integrate payment systems, Firebase services, and REST APIs for enhanced functionality and real-time data handling.",
      features: [
        "Firebase services integration",
        "Payment integration (Stripe, PayPal)",
        "REST API implementation",
        "Real-time data synchronization"
      ],
      color: "from-purple-500/20 to-violet-500/20",
      iconColor: "text-purple-500"
    },
    {
      icon: Layers,
      title: "Prototyping",
      description: "Create interactive prototypes to validate ideas and gather feedback before development begins.",
      features: [
        "Interactive prototypes",
        "User flow mapping",
        "Design validation",
        "Stakeholder collaboration"
      ],
      color: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What I <span className="bg-hero-gradient bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to bring your ideas to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer animate-fade-in border-0 bg-gradient-to-br from-background to-muted/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Service Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${service.iconColor}`} />
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-display font-semibold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-primary/10 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;