import React, { useState } from 'react';
import StartPage from './pages/StartPage';
import ExamPage from './pages/ExamPage';
import ReviewPage from './pages/ReviewPage';
import './styles/global.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('start'); // 'start', 'exam', 'review'
  const [userAnswers, setUserAnswers] = useState({});

  const handleStartExam = () => {
    setCurrentPage('exam');
    setUserAnswers({});
  };

  const handleEndExam = (answers) => {
    setUserAnswers(answers);
    setCurrentPage('review');
  };

  return (
    <div className="app">
      {currentPage === 'start' && <StartPage onStart={handleStartExam} />}
      {currentPage === 'exam' && <ExamPage onEnd={handleEndExam} />}
      {currentPage === 'review' && <ReviewPage userAnswers={userAnswers} />}
    </div>
  );
};

export default App;
