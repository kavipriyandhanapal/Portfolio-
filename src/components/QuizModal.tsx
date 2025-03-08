
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getRandomQuestion } from '@/lib/quizData';
import { toast } from '@/components/ui/use-toast';
import { X } from 'lucide-react';

const QuizModal = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState(getRandomQuestion());
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    const correct = option === question.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      toast({
        title: "Awesome! 🎉",
        description: "That's the correct answer!",
        duration: 3000,
      });
      setCountdown(3);
    } else {
      toast({
        title: "Not quite right 🤔",
        description: `The correct answer is: ${question.correctAnswer}`,
        variant: "destructive",
        duration: 3000,
      });
      setCountdown(3);
    }
  };

  const handleSkip = () => {
    toast({
      title: "Quiz skipped",
      description: "Welcome to my portfolio!",
      duration: 3000,
    });
    navigate('/portfolio');
  };

  useEffect(() => {
    if (countdown === null) return;
    
    if (countdown <= 0) {
      navigate('/portfolio');
      return;
    }
    
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      <div className="glassmorphism w-full max-w-md p-6 rounded-xl z-10 animate-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gradient animate-text-shimmer">
            Brain Teaser Time! 🧠✨
          </h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleSkip}
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </Button>
        </div>
        
        <div className="mb-6">
          <p className="text-lg mb-4">{question.question}</p>
          
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !selectedOption && handleOptionSelect(option)}
                disabled={selectedOption !== null}
                className={`w-full text-left p-3 rounded-md transition-all duration-300 ${
                  selectedOption === option
                    ? option === question.correctAnswer
                      ? 'bg-green-500/20 border border-green-500'
                      : 'bg-red-500/20 border border-red-500'
                    : selectedOption !== null && option === question.correctAnswer
                    ? 'bg-green-500/20 border border-green-500'
                    : 'bg-ps-gray/30 hover:bg-ps-gray/50 border border-transparent'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handleSkip}
            className="border-ps-accent text-ps-accent hover:bg-ps-accent/10"
          >
            Skip Quiz
          </Button>
          
          {countdown !== null && (
            <p className="text-white/70 flex items-center">
              Redirecting in {countdown}...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
