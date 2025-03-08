
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Map, Database, Code, PenTool, LayoutGrid } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-ps-darker">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-ps-accent/10 border border-ps-accent/20">
            <p className="text-sm font-medium tracking-wide text-ps-accent">MY PROFESSIONAL JOURNEY</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My work experience has equipped me with practical skills in MERN stack development
            and specialized knowledge in GIS applications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Timeline line */}
            <div className="absolute top-0 left-0 sm:left-16 h-full w-0.5 bg-ps-gray/30 group-last:h-6"></div>
            
            {/* Timeline dot */}
            <div className="absolute top-0 left-0 sm:left-16 h-6 w-6 rounded-full bg-ps-accent flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-md">
              <div className="h-3 w-3 rounded-full bg-ps-darker"></div>
            </div>
            
            <div className="bg-ps-gray/20 border border-white/5 rounded-xl p-6 transition-all duration-300 hover:bg-ps-gray/30">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-xl font-semibold mb-2 sm:mb-0">MERN Stack Developer</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-ps-blue/20 text-ps-blue hover:bg-ps-blue/30">1 Year Experience</Badge>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6">
                Working on a variety of web applications using the MERN stack, with a special focus on GIS-related tasks.
              </p>
              
              <h4 className="text-lg font-medium mb-3 text-white">Key Achievements & Responsibilities:</h4>
              
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-3 mt-1 p-1 rounded-md bg-ps-accent/10 text-ps-accent">
                    <Map size={18} />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">GIS Integration</p>
                    <p className="text-gray-400">Implemented interactive map features using MapboxGL library for geographic data visualization and analysis.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-3 mt-1 p-1 rounded-md bg-ps-accent/10 text-ps-accent">
                    <PenTool size={18} />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">UI Development</p>
                    <p className="text-gray-400">Built responsive user interfaces using Material UI library, ensuring consistent design and optimal user experience.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-3 mt-1 p-1 rounded-md bg-ps-accent/10 text-ps-accent">
                    <Code size={18} />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Custom Node Modules</p>
                    <p className="text-gray-400">Developed and implemented custom Node.js modules to extend application functionality and optimize performance.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-3 mt-1 p-1 rounded-md bg-ps-accent/10 text-ps-accent">
                    <LayoutGrid size={18} />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Pagination Implementation</p>
                    <p className="text-gray-400">Created efficient pagination systems for large datasets, improving application performance and user experience.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-3 mt-1 p-1 rounded-md bg-ps-accent/10 text-ps-accent">
                    <Database size={18} />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Database Management</p>
                    <p className="text-gray-400">Designed and implemented MongoDB schemas and performed complex queries for data retrieval and manipulation.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
