import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Container from '../components/layout/Container';
import QuestionCard from '../components/exam/QuestionCard';
import OptionItem from '../components/exam/OptionItem';
import NavigationBar from '../components/exam/NavigationBar';
import LastQuestionAlert from '../components/exam/LastQuestionAlert';
import { questions } from '../data/questions';

const ExamPage = ({ onEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const selectedAnswer = answers[currentQuestion.id];

  const handleSelectOption = (optionId) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: optionId
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleEnd = () => {
    onEnd(answers);
  };

  return (
    <div>
      <Header />
      <Container>
        <LastQuestionAlert show={isLastQuestion} />
        <QuestionCard 
          question={currentQuestion.question}
          questionNumber={currentQuestion.id}
        />
        <div style={styles.optionsContainer}>
          {currentQuestion.options.map((option) => (
            <OptionItem
              key={option.id}
              option={option}
              selected={selectedAnswer === option.id}
              onSelect={() => handleSelectOption(option.id)}
            />
          ))}
        </div>
        <NavigationBar
          onPrev={handlePrev}
          onNext={handleNext}
          onEnd={handleEnd}
          showPrev={currentQuestionIndex > 0}
          showNext={!isLastQuestion}
          showEnd={isLastQuestion}
        />
      </Container>
    </div>
  );
};

const styles = {
  optionsContainer: {
    marginBottom: '24px'
  }
};

export default ExamPage;
