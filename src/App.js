import React, { useState } from 'react';
import './App.css';

// Sample questions data
const questions = [
  {
    questionText: 'What is the atomic number of Oxygen?',
    options: [
      { answerText: '8', isCorrect: true },
      { answerText: '12', isCorrect: false },
      { answerText: '16', isCorrect: false },
      { answerText: '20', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the value of pi (π) approximately?',
    options: [
      { answerText: '2.14', isCorrect: false },
      { answerText: '3.14', isCorrect: true },
      { answerText: '4.14', isCorrect: false },
      { answerText: '5.14', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the chemical symbol for water?',
    options: [
      { answerText: 'H2O', isCorrect: true },
      { answerText: 'HO2', isCorrect: false },
      { answerText: 'O2H', isCorrect: false },
      { answerText: 'OH2', isCorrect: false },
    ],
  },
  {
    questionText: 'How many planets are in the Solar System?',
    options: [
      { answerText: '8', isCorrect: true },
      { answerText: '9', isCorrect: false },
      { answerText: '10', isCorrect: false },
      { answerText: '7', isCorrect: false },
    ],
  },
  {
    questionText: 'What is 7 times 8?',
    options: [
      { answerText: '56', isCorrect: true },
      { answerText: '54', isCorrect: false },
      { answerText: '52', isCorrect: false },
      { answerText: '58', isCorrect: false },
    ],
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answerResults, setAnswerResults] = useState([]);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const result = {
      isCorrect: isCorrect
    };
    setAnswerResults([...answerResults, result]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswerResults([]);
  };

  return (
    <div className="app">
      {showResult ? (
        <div className="result">
          <h2>Your Score: {score} out of {questions.length}</h2>
          <ul>
            {answerResults.map((result, index) => (
              <li
                key={index}
                className={result.isCorrect ? 'correct' : 'wrong'}
              >
                {index + 1}
              </li>
            ))}
          </ul>
          <button onClick={handleRestartQuiz}>Retake Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1} of {questions.length}</h2>
          <p>{questions[currentQuestion].questionText}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option.isCorrect)}>
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
