import React from 'react';

const ReviewPanel = ({ question, selectedAnswer, correctAnswer }) => {
  return (
    <div style={styles.reviewPanel}>
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Selected question</h3>
        <div style={styles.selectedQuestion}>
          {question.id}: {question.question}
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Correct answer</h3>
        <div style={styles.correctAnswer}>
          {correctAnswer}
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Selected answer</h3>
        <div style={styles.selectedAnswer}>
          {selectedAnswer}
        </div>
      </div>
    </div>
  );
};

const styles = {
  reviewPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#2c3e50',
    margin: 0
  },
  selectedQuestion: {
    background: '#c8e6c9',
    padding: '16px 20px',
    borderRadius: '10px',
    fontSize: '15px',
    color: '#2e7d32'
  },
  correctAnswer: {
    background: '#c8e6c9',
    padding: '16px 20px',
    borderRadius: '10px',
    fontSize: '15px',
    color: '#2e7d32'
  },
  selectedAnswer: {
    background: '#ffcdd2',
    padding: '16px 20px',
    borderRadius: '10px',
    fontSize: '15px',
    color: '#c62828'
  }
};

export default ReviewPanel;
