
import React, { useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Mentor from '@/components/Mentor';
import PersonalFacts from '@/components/PersonalFacts';
import Footer from '@/components/Footer';
import LiveClock from '@/components/LiveClock';

const Portfolio = () => {
  useEffect(() => {
    toast({
      title: "Welcome to my portfolio!",
      description: "Feel free to explore my work and skills.",
      duration: 5000,
    });
  }, []);

  return (
    <div className="min-h-screen bg-ps-dark text-white">
      <Header />
      <main>
        <Profile />
        <LiveClock />
        <Skills />
        <Experience />
        <Projects />
        <Mentor />
        <PersonalFacts />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
