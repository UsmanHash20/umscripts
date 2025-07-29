import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      duration: '2022 - Present',
      description: 'Leading development of web applications using React, Node.js, and cloud technologies. Implemented automation workflows that reduced manual tasks by 70%.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript'],
      achievements: [
        'Architected scalable microservices architecture',
        'Reduced page load times by 45%',
        'Led team of 4 developers'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      duration: '2020 - 2022',
      description: 'Developed custom web applications and e-commerce solutions for various clients. Specialized in MERN stack development and API integrations.',
      technologies: ['React', 'Express', 'MongoDB', 'JavaScript', 'N8N'],
      achievements: [
        'Delivered 15+ client projects on time',
        'Implemented automated testing pipeline',
        'Improved client satisfaction by 30%'
      ]
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'StartupHub',
      location: 'San Francisco, CA',
      duration: '2019 - 2020',
      description: 'Worked on frontend development and learned backend technologies. Contributed to the development of the company\'s main product.',
      technologies: ['JavaScript', 'HTML/CSS', 'React', 'Node.js'],
      achievements: [
        'Built responsive user interfaces',
        'Collaborated with design team',
        'Learned modern development practices'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-hover mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary-hover transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-card p-6 rounded-lg border border-border card-hover">
                    <div className="space-y-4">
                      {/* Header */}
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <ExternalLink size={16} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground">{exp.description}</p>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 py-1 bg-primary/10 text-primary rounded text-sm border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;