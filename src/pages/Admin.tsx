import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  FolderOpen, 
  Settings, 
  LogOut,
  Plus,
  Edit,
  Trash2,
  Save
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import AuthPage from '@/components/auth/AuthPage';
import AddExperienceModal from '@/components/admin/AddExperienceModal';
import AddProjectModal from '@/components/admin/AddProjectModal';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const { toast } = useToast();

  // Mock data - in real app, this would come from a database
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      duration: '2022 - Present',
      description: 'Leading development of web applications...'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      duration: '2020 - 2022',
      description: 'Developed custom web applications...'
    }
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution...',
      technologies: ['React', 'Node.js', 'MongoDB'],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Task Automation Tool',
      description: 'AI-powered automation platform...',
      technologies: ['React', 'Python', 'N8N'],
      status: 'In Progress'
    }
  ]);

  const stats = {
    totalProjects: projects.length,
    completedProjects: projects.filter(p => p.status === 'Completed').length,
    totalExperience: experiences.length,
    yearsExperience: 4
  };

  const handleAddExperience = (newExperience: any) => {
    setExperiences([...experiences, newExperience]);
  };

  const handleAddProject = (newProject: any) => {
    setProjects([...projects, newProject]);
  };

  const handleDelete = (type: 'experience' | 'project', id: number) => {
    if (type === 'experience') {
      setExperiences(experiences.filter(exp => exp.id !== id));
      toast({
        title: "Success",
        description: "Experience deleted successfully",
      });
    } else {
      setProjects(projects.filter(proj => proj.id !== id));
      toast({
        title: "Success", 
        description: "Project deleted successfully",
      });
    }
  };

  const handleSave = () => {
    toast({
      title: "Success",
      description: "Changes saved successfully",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    toast({
      title: "Success",
      description: "Logged out successfully",
    });
  };

  if (!isAuthenticated) {
    return <AuthPage />;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-primary">umscripts</h1>
              <Badge variant="secondary">Admin Panel</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <User size={16} />
              Overview
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase size={16} />
              Experience
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <FolderOpen size={16} />
              Projects
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings size={16} />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h2>
              <p className="text-muted-foreground">Manage your portfolio content and view analytics</p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Projects</p>
                      <p className="text-3xl font-bold text-primary">{stats.totalProjects}</p>
                    </div>
                    <FolderOpen className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Completed</p>
                      <p className="text-3xl font-bold text-success">{stats.completedProjects}</p>
                    </div>
                    <FolderOpen className="h-8 w-8 text-success" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Experience</p>
                      <p className="text-3xl font-bold text-primary">{stats.totalExperience}</p>
                    </div>
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Years Experience</p>
                      <p className="text-3xl font-bold text-primary">{stats.yearsExperience}</p>
                    </div>
                    <User className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>

          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Experience Management</h2>
                <p className="text-muted-foreground">Add, edit, and manage your work experience</p>
              </div>
              <AddExperienceModal onAddExperience={handleAddExperience} />
            </div>

            <div className="space-y-4">
              {experiences.map((exp) => (
                <Card key={exp.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-muted-foreground text-sm">{exp.location} • {exp.duration}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-destructive"
                          onClick={() => handleDelete('experience', exp.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Projects Management</h2>
                <p className="text-muted-foreground">Add, edit, and manage your projects</p>
              </div>
              <AddProjectModal onAddProject={handleAddProject} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card key={project.id}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                        <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-destructive"
                          onClick={() => handleDelete('project', project.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Settings</h2>
              <p className="text-muted-foreground">Update your personal information and contact details</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input defaultValue="Usman" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Title</label>
                    <Input defaultValue="Web Developer" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">About Me</label>
                  <Textarea 
                    rows={4}
                    defaultValue="I'm a passionate web developer with expertise in building modern, scalable applications..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input defaultValue="usman@umscripts.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>

                <Button className="btn-hero" onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;