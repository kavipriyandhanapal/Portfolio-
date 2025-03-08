
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const headlineText = [
    "MERN Stack Developer",
    "Frontend Specialist",
    "Backend Engineer",
    "JavaScript Enthusiast",
    "Continuous Learner"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prevIndex) => (prevIndex + 1) % headlineText.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 pt-32 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-ps-accent/10 border border-ps-accent/20">
              <p className="text-sm font-medium tracking-wide text-ps-accent">MERN Developer</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              Hi, I'm{" "}
              <span className="text-gradient animate-text-shimmer">
                Kavipriyan Dhanapal
              </span>
            </h1>
            
            <div className="h-12 mb-6">
              <p 
                key={headlineIndex}
                className="text-xl md:text-2xl text-gray-300 animate-fade-in"
              >
                {headlineText[headlineIndex]}
              </p>
            </div>
            
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              I specialize in building modern web applications with the MERN stack.
              Always enthusiastic to learn new skills and love to be surrounded by tech people.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                className="bg-ps-accent hover:bg-ps-accent/90 text-white"
                asChild
              >
                <a href="#experience">View My Work</a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-ps-accent text-ps-accent hover:bg-ps-accent/10"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/kavipriyan/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-ps-accent to-ps-blue rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div className="relative bg-ps-darker rounded-full p-2">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQGUfsSr3sRCMA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727014595003?e=1746662400&v=beta&t=nBp8HJFoilDXHDkHRtxqAwF0LYc7lWYmuv7HwPodF-A"
                  alt="Kavipriyan Dhanapal"
                  className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-ps-darker"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
            <ChevronDown size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
