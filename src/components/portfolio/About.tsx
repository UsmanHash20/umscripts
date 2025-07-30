import React from 'react';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB',
    'MySQL', 'Python', 'AI/ML', 'Automation', 'N8N', 'Docker', 'AWS', 'Git'
  ];

  const techStack = [
    { name: 'MERN Stack', description: 'MongoDB, Express, React, Node.js' },
    { name: 'JavaScript', description: 'ES6+, Modern JS Development' },
    { name: 'AI Integration', description: 'Machine Learning & AI APIs' },
    { name: 'Automation', description: 'Workflow automation & scripting' },
    { name: 'N8N', description: 'No-code automation platform' },
    { name: 'Cloud Services', description: 'AWS, Digital Ocean, Vercel' }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-hover mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: About Text & Skills */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate web developer with expertise in building modern, scalable applications. 
                With a strong foundation in both frontend and backend technologies, I love creating 
                solutions that make a real impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in development spans across various technologies, with a particular focus on 
                JavaScript ecosystem, automation, and AI integration. I'm always eager to learn new 
                technologies and tackle challenging problems.
              </p>
            </div>

            {/* Skills Tags */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Floating Bubble Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Core Technologies</h3>
            <div className="relative h-96 overflow-hidden rounded-lg bg-gradient-to-br from-background to-muted/30 border border-primary/10">
              {skills.map((skill, index) => {
                const size = 60 + (index % 3) * 20; // Variable sizes: 60px, 80px, 100px
                const left = 10 + (index * 7) % 80; // Spread across width
                const animationDelay = index * 0.2; // Staggered animation
                const animationDuration = 3 + (index % 3); // Variable speeds
                
                return (
                  <div 
                    key={skill}
                    className="absolute group animate-pulse"
                    style={{ 
                      left: `${left}%`,
                      top: `${20 + (index % 4) * 20}%`,
                      width: `${size}px`,
                      height: `${size}px`,
                      animationDelay: `${animationDelay}s`,
                      animationDuration: `${animationDuration}s`,
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div 
                      className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/30 transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-primary/30 cursor-pointer animate-bounce"
                      style={{
                        animationDelay: `${animationDelay}s`,
                        animationDuration: `${animationDuration}s`,
                        animationDirection: index % 2 === 0 ? 'normal' : 'reverse'
                      }}
                    >
                      <div className="text-center">
                        <div className="w-6 h-6 bg-primary rounded-full mx-auto mb-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <p className="text-xs font-medium text-foreground group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                          {skill}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;