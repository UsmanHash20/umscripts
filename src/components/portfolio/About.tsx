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
                const size = 55 + (index % 3) * 15; // Variable sizes: 55px, 70px, 85px
                const cols = 4;
                const rows = Math.ceil(skills.length / cols);
                const col = index % cols;
                const row = Math.floor(index / cols);
                
                // Calculate position with proper spacing
                const leftPercent = 15 + (col * 70 / (cols - 1));
                const topPercent = 15 + (row * 70 / Math.max(rows - 1, 1));
                
                const animationDelay = index * 0.5; // Staggered animation
                const animationDuration = 3 + (index % 3); // Variable speeds
                
                return (
                  <div 
                    key={skill}
                    className="absolute group"
                    style={{ 
                      left: `${leftPercent}%`,
                      top: `${topPercent}%`,
                      width: `${size}px`,
                      height: `${size}px`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${animationDelay}s`
                    }}
                  >
                    <div 
                      className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/30 transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-primary/30 cursor-pointer bubble-float"
                      style={{
                        '--duration': `${animationDuration}s`,
                        animationDelay: `${animationDelay}s`,
                        animationDirection: index % 2 === 0 ? 'normal' : 'reverse'
                      } as React.CSSProperties}
                    >
                      <div className="text-center">
                        <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <p className="text-xs font-medium text-foreground group-hover:text-primary transition-colors duration-300 whitespace-nowrap px-1">
                          {skill}
                        </p>
                      </div>
                    </div>
                    
                    {/* Floating decoration dots */}
                    {index % 3 === 0 && (
                      <div 
                        className="absolute -top-2 -right-2 w-3 h-3 bg-primary/60 rounded-full animate-pulse"
                        style={{ animationDelay: `${animationDelay + 1}s` }}
                      ></div>
                    )}
                    {index % 4 === 0 && (
                      <div 
                        className="absolute -bottom-2 -left-2 w-2 h-2 bg-accent/60 rounded-full animate-bounce"
                        style={{ animationDelay: `${animationDelay + 2}s` }}
                      ></div>
                    )}
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