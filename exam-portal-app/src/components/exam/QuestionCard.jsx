import React from 'react';

const QuestionCard = ({ question, questionNumber }) => {
  return (
    <div style={styles.questionCard}>
      <h2 style={styles.questionText}>
        {questionNumber}: {question}
      </h2>
    </div>
  );
};

const styles = {
  questionCard: {
    background: '#f8f9fa',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px'
  },
  questionText: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#2c3e50',
    margin: 0
  }
};

export default QuestionCard;
