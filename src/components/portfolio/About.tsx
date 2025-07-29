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

          {/* Right: Tech Stack */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Technology Stack</h3>
            <div className="space-y-4">
              {techStack.map((tech, index) => (
                <div 
                  key={tech.name}
                  className="bg-card p-6 rounded-lg border border-border card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-primary rounded-sm"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{tech.name}</h4>
                      <p className="text-muted-foreground text-sm">{tech.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;