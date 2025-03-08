
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { AtSign, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !subject || !message) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Email service would be integrated here in a production app
      // For now, we'll simulate sending and show success message
      console.log('Form data:', { name, email, subject, message });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact me directly at kavipriyanilluminate@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-ps-accent/10 border border-ps-accent/20">
            <p className="text-sm font-medium tracking-wide text-ps-accent">GET IN TOUCH</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Together</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Let's connect and create something amazing together.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-ps-gray/20 backdrop-blur-sm border border-white/5 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-ps-darker border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-ps-accent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-ps-darker border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-ps-accent"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-ps-darker border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-ps-accent"
                placeholder="Project Collaboration"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-ps-darker border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-ps-accent resize-none"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                className="bg-ps-accent hover:bg-ps-accent/90 text-white px-8 py-6 h-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2" size={18} />
                    Send Message
                  </span>
                )}
              </Button>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-gray-400 flex items-center justify-center">
                <AtSign size={16} className="mr-1 text-ps-accent" />
                <span>Or email me directly at: </span>
                <a href="mailto:kavipriyanilluminate@gmail.com" className="text-ps-accent ml-1 hover:underline">
                  kavipriyanilluminate@gmail.com
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
