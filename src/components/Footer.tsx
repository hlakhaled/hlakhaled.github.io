import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#services', label: 'Services' },
     { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <span className="text-2xl font-display font-bold bg-hero-gradient bg-clip-text text-transparent">
                  Hla Khaled EL Tahawy
                </span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Computer Science and AI student specializing in Flutter development and mobile app design. 
                Passionate about creating user-centered mobile solutions with clean architecture and modern design principles.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-display font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <a 
                    href="mailto:hlakhaled647@gmail.com" 
                    className="hover:text-primary transition-colors"
                  >
                    hlakhaled647@gmail.com
                  </a>
                </p>
                <p>
                  <a 
                    href="tel:+201016950043" 
                    className="hover:text-primary transition-colors"
                  >
                    +20 1016950043
                  </a>
                </p>
                <p>Zagazig, Egypt</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
            <div className="flex items-center text-sm text-muted-foreground mb-4 md:mb-0">
              <span>© {currentYear} Hla Khaled EL Tahawy. All rights reserved.</span>
            </div>
            
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;