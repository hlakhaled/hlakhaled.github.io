import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Eye } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-hero-gradient p-1 shadow-hero-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-4xl font-bold text-primary">
                  HK
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Hla Khaled EL Tahawy
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              Flutter Developer | UI/UX Designer
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Computer Science and AI student specializing in Flutter development and mobile app design. 
              Passionate about creating user-centered mobile solutions with clean architecture and real-time API integration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-hero-gradient hover:opacity-90 transition-opacity shadow-hero-glow text-white font-medium px-8 py-3 h-auto"
                onClick={() => scrollToNext()}
              >
                <Eye className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="font-medium px-8 py-3 h-auto"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <button
                onClick={scrollToNext}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Scroll to next section"
              >
                <ArrowDown className="h-6 w-6 mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;