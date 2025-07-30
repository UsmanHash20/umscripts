import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AddExperienceModalProps {
  onAddExperience: (experience: any) => void;
}

const AddExperienceModal = ({ onAddExperience }: AddExperienceModalProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    duration: '',
    description: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newExperience = {
      id: Date.now(),
      ...formData
    };
    
    onAddExperience(newExperience);
    setFormData({
      title: '',
      company: '',
      location: '',
      duration: '',
      description: ''
    });
    setOpen(false);
    
    toast({
      title: "Success",
      description: "Experience added successfully",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="btn-hero">
          <Plus className="mr-2 h-4 w-4" />
          Add Experience
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Add New Experience</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Job Title</label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Senior Full Stack Developer"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Company</label>
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g., Tech Solutions Inc."
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., Remote"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Duration</label>
              <Input
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 2022 - Present"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your role and achievements..."
              rows={4}
              required
            />
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="btn-hero">
              Add Experience
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddExperienceModal;