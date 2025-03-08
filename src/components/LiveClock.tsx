
import React, { useState, useEffect } from 'react';

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const formattedTime = time.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: true 
  });
  
  return (
    <section className="py-10 px-4 text-center">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="bg-ps-gray/20 backdrop-blur-sm border border-white/5 rounded-xl p-6 animate-float">
            <h2 className="text-2xl md:text-3xl font-bold text-ps-accent mb-2">{formattedTime}</h2>
            <p className="text-gray-400">Your time is valuable</p>
          </div>
          
          <div className="max-w-lg">
            <blockquote className="text-xl md:text-2xl italic font-semibold text-gradient animate-text-shimmer">
              "IF YOU WANT YOU WILL DO"
              <footer className="text-right text-sm text-ps-teal mt-2">— Kavipriyan</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveClock;
