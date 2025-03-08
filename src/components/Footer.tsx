
import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ps-darker py-10 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Kavipriyan Dhanapal. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-sm text-gray-400 flex items-center mb-4 md:mb-0 md:mr-8">
              Crafted with <Heart size={14} className="text-ps-accent mx-1" /> and JavaScript
            </p>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/kavipriyandhanapal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kavipriyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
