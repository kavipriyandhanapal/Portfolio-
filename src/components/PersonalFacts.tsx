
import React from 'react';
import { Coffee, Heart, Lightbulb, Users, Hash, Phone } from 'lucide-react';

const FactCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: React.ReactNode }) => {
  return (
    <div className="bg-ps-gray/20 border border-white/5 rounded-xl p-6 transition-all duration-300 hover:bg-ps-gray/30 hover:translate-y-[-5px]">
      <div className="mb-4 p-3 inline-block rounded-md bg-ps-accent/10 text-ps-accent">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-gray-400">{description}</div>
    </div>
  );
};

const HashmapLover = () => {
  const [blink, setBlink] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setBlink(prev => !prev);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <span className="flex items-center">
      HashMap Lover <span className={`ml-1 transform transition-opacity duration-300 ${blink ? 'opacity-100' : 'opacity-0'}`}>😉</span>
    </span>
  );
};

const PersonalFacts = () => {
  const facts = [
    {
      icon: Coffee,
      title: "Sugar-Free Journey",
      description: "Been off sugar for 5 months and counting! My code might be sweet, but my coffee isn't.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learner",
      description: "Always enthusiastic about learning new technologies and expanding my skill set in the tech world.",
    },
    {
      icon: Users,
      title: "Tech Community",
      description: "Love being surrounded by tech people who inspire me to grow and innovate daily.",
    },
    {
      icon: Heart,
      title: "Teetotaler",
      description: "Focused on clean living and clear thinking to maintain peak coding performance.",
    },
    {
      icon: Hash,
      title: "Algorithm Enthusiast",
      description: <HashmapLover />,
    },
    {
      icon: Phone,
      title: "Contact Me",
      description: "Feel free to reach out: +91 9361677612",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-ps-accent/10 border border-ps-accent/20">
            <p className="text-sm font-medium tracking-wide text-ps-accent">BEYOND THE CODE</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Personal Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A glimpse into my personal life and values that influence my approach to development and teamwork.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <FactCard 
              key={index} 
              icon={fact.icon} 
              title={fact.title} 
              description={fact.description as any} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalFacts;
