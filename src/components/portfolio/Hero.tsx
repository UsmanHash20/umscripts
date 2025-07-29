import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleDownloadCV = () => {
    // This would download the CV file
    console.log('Downloading CV...');
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding bg-gradient-to-br from-background to-primary-light/10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{' '}
                <span className="text-primary bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  Usman
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                A Web Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Passionate about creating beautiful, functional web applications with modern technologies. 
                Specializing in full-stack development, automation, and AI integration.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleDownloadCV}
                className="btn-hero group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:justify-self-end slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20 animate-float">
                  {/* Profile Image Placeholder */}
                  <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-6xl font-bold text-primary">
                        U
                      </div>
                      <p className="text-sm">Profile Image</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;