
import React from 'react';
import { Linkedin, Quote } from 'lucide-react';

const Mentor = () => {
  return (
    <section id="mentor" className="py-20 px-4 bg-ps-darker">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-ps-accent/10 border border-ps-accent/20">
            <p className="text-sm font-medium tracking-wide text-ps-accent">LEARNING & MENTORSHIP</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Mentor</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Behind every successful developer is a great mentor who provides guidance, 
            support, and valuable industry insights.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-ps-gray/20 border border-white/5 rounded-xl p-8 relative">
          <div className="absolute -top-6 left-8 text-ps-accent">
            <Quote size={48} className="opacity-50" />
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-ps-accent to-ps-blue rounded-full blur opacity-75"></div>
              <img 
                src="https://media.licdn.com/dms/image/v2/C5603AQEyoMvcZf_trw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1592562752343?e=1746662400&v=beta&t=v5NszkRFWuVTIqNiLGOEq2iLsOKX4HvrUmmCmfM8zuc" 
                alt="Vignesh Murugan" 
                className="relative w-32 h-32 rounded-full object-cover border-4 border-ps-darker"
                loading="lazy"
              />
            </div>
            
            <div className="flex-1">
              <p className="text-gray-300 text-lg mb-6 italic">
                "Learning is a continuous journey, and having a mentor who challenges you to push your boundaries
                is invaluable in the tech industry. Vignesh has been instrumental in guiding me through complex
                development challenges and helping me grow as a MERN stack developer."
              </p>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Vignesh Murugan</h3>
                  <p className="text-gray-400">Senior Software Engineer & Mentor</p>
                </div>
                
                <a 
                  href="https://www.linkedin.com/in/iamvigneshmurugan/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-0 flex items-center text-ps-blue hover:text-ps-blue/80 transition-colors"
                >
                  <Linkedin size={18} className="mr-1" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
