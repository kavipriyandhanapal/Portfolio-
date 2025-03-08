
import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Layout, 
  Box, 
  FileJson,
  Map
} from 'lucide-react';

const SkillCard = ({ 
  icon: Icon, 
  title, 
  skills, 
  delay 
}: { 
  icon: React.ElementType; 
  title: string; 
  skills: string[]; 
  delay: number;
}) => {
  return (
    <div 
      className="bg-ps-gray/20 backdrop-blur-sm border border-white/5 rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] hover:bg-ps-gray/30 hover:shadow-lg"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-md bg-ps-accent/10 text-ps-accent">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2 text-gray-400">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-ps-accent mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      icon: Layout,
      title: "Frontend",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5/CSS3", "Material UI", "Responsive Design"],
      delay: 0
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Custom Node Modules", "API Integration"],
      delay: 100
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB", "Mongoose", "Data Modeling", "Schema Design", "Aggregation"],
      delay: 200
    },
    {
      icon: Map,
      title: "GIS & Mapping",
      skills: ["MapboxGL", "Geospatial Data", "GIS Applications", "Interactive Maps", "Location Services"],
      delay: 300
    },
    {
      icon: Code,
      title: "Tools & Methods",
      skills: ["Git/GitHub", "Agile/Scrum", "JIRA", "VS Code", "Chrome DevTools"],
      delay: 400
    },
    {
      icon: FileJson,
      title: "Others",
      skills: ["Pagination", "Authentication", "Authorization", "Error Handling", "Testing"],
      delay: 500
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-ps-accent/10 border border-ps-accent/20">
            <p className="text-sm font-medium tracking-wide text-ps-accent">WHAT I BRING TO THE TABLE</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I specialize in modern web technologies with a focus on the MERN stack,
            building responsive and interactive web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
              delay={skill.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
