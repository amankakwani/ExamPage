import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Container from '../components/layout/Container';
import ScoreBadge from '../components/review/ScoreBadge';
import QuestionNavigator from '../components/review/QuestionNavigator';
import ReviewPanel from '../components/review/ReviewPanel';
import { questions } from '../data/questions';

const ReviewPage = ({ userAnswers }) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState(1);

  // Calculate score
  const correctAnswers = {};
  questions.forEach(q => {
    correctAnswers[q.id] = q.correctAnswer;
  });

  let correctCount = 0;
  Object.keys(userAnswers).forEach(questionId => {
    if (userAnswers[questionId] === correctAnswers[questionId]) {
      correctCount++;
    }
  });

  const score = Math.round((correctCount / questions.length) * 100);

  // Get selected question details
  const selectedQuestion = questions.find(q => q.id === selectedQuestionId);
  const userAnswer = userAnswers[selectedQuestionId];
  const correctAnswer = correctAnswers[selectedQuestionId];

  const getUserAnswerText = () => {
    if (!userAnswer) return 'Not answered';
    const option = selectedQuestion.options.find(opt => opt.id === userAnswer);
    return option ? option.text : 'Not answered';
  };

  const getCorrectAnswerText = () => {
    const option = selectedQuestion.options.find(opt => opt.id === correctAnswer);
    return option ? option.text : '';
  };

  return (
    <div>
      <Header />
      <Container>
        <ScoreBadge score={score} />
        <QuestionNavigator
          questions={questions}
          currentQuestion={selectedQuestionId}
          onQuestionSelect={setSelectedQuestionId}
          userAnswers={userAnswers}
          correctAnswers={correctAnswers}
        />
        <h2 style={styles.questionTitle}>
          {selectedQuestion.id}: {selectedQuestion.question}
        </h2>
        <ReviewPanel
          question={selectedQuestion}
          selectedAnswer={getUserAnswerText()}
          correctAnswer={getCorrectAnswerText()}
        />
      </Container>
    </div>
  );
};

const styles = {
  questionTitle: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#2c3e50',
    marginBottom: '24px'
  }
};

export default ReviewPage;
