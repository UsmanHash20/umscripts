import React, { useState } from 'react';
import { ExternalLink, Github, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  completedDate: string;
  category: string;
  features: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
      longDescription: 'A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing, order management, and a complete admin dashboard for managing products, orders, and customers.',
      images: ['/api/placeholder/400/250', '/api/placeholder/600/400', '/api/placeholder/500/300'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/username/ecommerce',
      completedDate: '2023',
      category: 'Web Application',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and checkout process',
        'Payment integration with Stripe',
        'Order tracking and management',
        'Admin dashboard with analytics'
      ]
    },
    {
      id: 2,
      title: 'Task Automation Tool',
      description: 'AI-powered automation platform for workflow optimization.',
      longDescription: 'An intelligent automation platform that helps businesses streamline their workflows. Uses AI to analyze processes and suggest optimizations, with N8N integration for complex workflow automation.',
      images: ['/api/placeholder/400/250', '/api/placeholder/600/400'],
      technologies: ['React', 'Python', 'N8N', 'FastAPI', 'PostgreSQL'],
      liveUrl: 'https://example-automation.com',
      githubUrl: 'https://github.com/username/automation',
      completedDate: '2023',
      category: 'Automation',
      features: [
        'Visual workflow builder',
        'AI-powered process optimization',
        'Integration with 100+ services',
        'Real-time monitoring and alerts',
        'Custom API endpoints',
        'Advanced analytics dashboard'
      ]
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with CMS integration.',
      longDescription: 'A modern, responsive portfolio website with an integrated content management system. Built with performance and SEO in mind, featuring smooth animations and mobile-first design.',
      images: ['/api/placeholder/400/250', '/api/placeholder/800/500', '/api/placeholder/400/300', '/api/placeholder/600/400'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      liveUrl: 'https://example-portfolio.com',
      githubUrl: 'https://github.com/username/portfolio',
      completedDate: '2023',
      category: 'Portfolio',
      features: [
        'Responsive design',
        'Content management system',
        'SEO optimized',
        'Contact form integration',
        'Blog functionality',
        'Dark/light mode toggle'
      ]
    }
  ];

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{project.completedDate}</span>
                </div>
                <Badge variant="secondary">{project.category}</Badge>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>

          {/* Images */}
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-3">Project Images</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Project Screenshot {index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-3">About This Project</h4>
            <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
            <ul className="grid md:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.liveUrl && (
              <Button asChild className="btn-hero">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" className="btn-outline">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-hover mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-card rounded-lg border border-border overflow-hidden card-hover cursor-pointer"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-48 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Project Image</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="p-2 h-8 w-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                    >
                      <ExternalLink size={14} />
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="p-2 h-8 w-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <Github size={14} />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;