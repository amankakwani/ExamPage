import React from 'react';

const QuestionNavigator = ({ questions, currentQuestion, onQuestionSelect, userAnswers, correctAnswers }) => {
  return (
    <div style={styles.navigator}>
      {questions.map((q, index) => {
        const isCorrect = userAnswers[index + 1] === correctAnswers[index + 1];
        const isSelected = currentQuestion === index + 1;
        
        return (
          <button
            key={index}
            onClick={() => onQuestionSelect(index + 1)}
            style={{
              ...styles.questionButton,
              ...(isCorrect ? styles.correctButton : styles.incorrectButton),
              ...(isSelected ? styles.selectedButton : {})
            }}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

const styles = {
  navigator: {
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
    flexWrap: 'wrap'
  },
  questionButton: {
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  correctButton: {
    background: '#c8e6c9',
    color: '#2e7d32'
  },
  incorrectButton: {
    background: '#ffcdd2',
    color: '#c62828'
  },
  selectedButton: {
    transform: 'scale(1.1)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
  }
};

export default QuestionNavigator;
