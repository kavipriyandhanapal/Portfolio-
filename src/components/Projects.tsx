
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LucidePackage, Code2, BrainCircuit, Bot } from 'lucide-react';

const ProjectCard = ({ 
  icon: Icon, 
  description, 
  tags,
  comingSoon = false
}: { 
  icon: React.ElementType; 
  description: string; 
  tags: string[];
  comingSoon?: boolean;
}) => {
  return (
    <div className="group relative bg-ps-gray/20 border border-white/5 rounded-xl p-6 overflow-hidden transition-all duration-300 hover:bg-ps-gray/30 hover:translate-y-[-5px] hover:shadow-lg">
      {comingSoon && (
        <div className="absolute top-3 right-3">
          <Badge className="bg-gradient-to-r from-ps-blue via-ps-teal to-ps-accent animate-text-shimmer bg-[length:200%_auto] text-white">
            Coming Soon
          </Badge>
        </div>
      )}
      
      <div className="mb-6 p-3 inline-block rounded-md bg-ps-accent/10 text-ps-accent">
        <Icon size={24} />
      </div>
      
      <div className="flex justify-center items-center h-16 mb-3">
        <div className="text-2xl font-bold bg-gradient-to-r from-ps-blue via-ps-teal to-ps-accent animate-text-shimmer bg-[length:200%_auto] bg-clip-text text-transparent">
          Coming Soon
        </div>
      </div>
      
      <p className="text-gray-400 mb-6 line-clamp-3">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <Badge key={index} className="bg-ps-gray/30 text-gray-300 hover:bg-ps-gray/40">
            {tag}
          </Badge>
        ))}
      </div>
      
      {!comingSoon ? (
        <Button 
          className="bg-ps-accent hover:bg-ps-accent/90 text-white w-full"
          disabled={comingSoon}
        >
          View Project
        </Button>
      ) : (
        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-ps-accent to-ps-blue rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      icon: LucidePackage,
      description: "A web application for visualizing and analyzing geographic data using MapboxGL, with custom filtering and data manipulation capabilities.",
      tags: ["React", "MapboxGL", "Node.js", "Express", "MongoDB"],
      comingSoon: false
    },
    {
      icon: Code2,
      description: "Full-featured e-commerce platform with product management, cart functionality, payment integration, and order tracking.",
      tags: ["MERN Stack", "Stripe", "Redux", "Material UI"],
      comingSoon: true
    },
    {
      icon: BrainCircuit,
      description: "Data visualization dashboard with AI-driven insights and predictive analytics for business intelligence.",
      tags: ["React", "TensorFlow.js", "Chart.js", "Node.js", "MongoDB"],
      comingSoon: true
    },
    {
      icon: Bot,
      description: "Productivity application with automated task scheduling, reminders, and team collaboration features.",
      tags: ["MERN Stack", "Socket.io", "PWA", "Notification API"],
      comingSoon: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-ps-accent/10 border border-ps-accent/20">
            <p className="text-sm font-medium tracking-wide text-ps-accent">MY PORTFOLIO</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest work and upcoming projects, showcasing my abilities as a MERN stack developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              icon={project.icon}
              description={project.description}
              tags={project.tags}
              comingSoon={project.comingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
