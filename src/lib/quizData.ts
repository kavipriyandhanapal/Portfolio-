
interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which of these is NOT part of the MERN stack?",
    options: ["MongoDB", "Express", "Ruby", "Node.js"],
    correctAnswer: "Ruby"
  },
  {
    id: 2,
    question: "What does GIS stand for?",
    options: ["Geographic Information System", "Global Internet Service", "General Interface Software", "Grid Integration System"],
    correctAnswer: "Geographic Information System"
  },
  {
    id: 3,
    question: "Which library is used for creating user interfaces in React?",
    options: ["React DOM", "Material UI", "React Router", "Redux"],
    correctAnswer: "Material UI"
  },
  {
    id: 4,
    question: "What is MapboxGL primarily used for?",
    options: ["Data visualization", "State management", "Interactive maps", "Form validation"],
    correctAnswer: "Interactive maps"
  },
  {
    id: 5,
    question: "Which of these is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    correctAnswer: "MongoDB"
  }
];

export const getRandomQuestion = (): QuizQuestion => {
  const randomIndex = Math.floor(Math.random() * quizQuestions.length);
  return quizQuestions[randomIndex];
};
