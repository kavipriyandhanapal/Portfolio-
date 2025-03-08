
import React, { useEffect } from 'react';
import QuizModal from '@/components/QuizModal';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Mentor from '@/components/Mentor';
import PersonalFacts from '@/components/PersonalFacts';
import Footer from '@/components/Footer';

const Quiz = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-ps-dark text-white overflow-hidden">
      <div className="blur-sm pointer-events-none">
        <Header />
        <Profile />
        <Skills />
        <Experience />
        <Projects />
        <Mentor />
        <PersonalFacts />
        <Footer />
      </div>
      <QuizModal />
    </div>
  );
};

export default Quiz;
