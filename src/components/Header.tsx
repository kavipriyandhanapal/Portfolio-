
import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/portfolio' },
    { label: 'Skills', path: '/portfolio#skills' },
    { label: 'Experience', path: '/portfolio#experience' },
    { label: 'Projects', path: '/portfolio#projects' },
    { label: 'Mentor', path: '/portfolio#mentor' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled 
          ? "py-2 bg-ps-darker/80 backdrop-blur-lg shadow-lg" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <NavLink 
          to="/portfolio" 
          className="font-bold text-2xl text-white hover:opacity-90 transition-opacity"
          onClick={closeMobileMenu}
        >
          <span className="text-gradient">KP</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-medium transition-colors relative py-2",
                      "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ps-accent after:transition-all after:duration-300",
                      "hover:text-white hover:after:w-full",
                      isActive ? "text-white after:w-full" : "text-gray-400"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-3">
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
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-400 hover:text-white"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-ps-darker/95 backdrop-blur-lg z-50 md:hidden flex flex-col justify-center p-8",
          "transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close mobile menu"
        >
          <X size={24} />
        </button>

        <nav className="flex flex-col items-center space-y-8">
          <ul className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <li key={item.path} className="w-full text-center">
                <NavLink
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    cn(
                      "text-xl font-medium transition-colors block py-2",
                      isActive ? "text-ps-accent" : "text-gray-400 hover:text-white"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-6 pt-4">
            <a
              href="https://github.com/kavipriyandhanapal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kavipriyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
