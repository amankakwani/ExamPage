import React from 'react';
import Header from '../components/layout/Header';
import Container from '../components/layout/Container';

const StartPage = ({ onStart }) => {
  return (
    <div>
      <Header />
      <Container>
        <div style={styles.content}>
          <button onClick={onStart} style={styles.startButton}>
            Start Assessment
          </button>
        </div>
      </Container>
    </div>
  );
};

const styles = {
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  startButton: {
    padding: '18px 48px',
    borderRadius: '12px',
    border: 'none',
    background: '#bbdefb',
    color: '#1976d2',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  }
};

export default StartPage;
