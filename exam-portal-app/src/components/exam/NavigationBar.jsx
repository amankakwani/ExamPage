import React from 'react';

const NavigationBar = ({ onPrev, onNext, onEnd, showPrev, showNext, showEnd }) => {
  return (
    <div style={styles.navigationBar}>
      {showPrev && (
        <button onClick={onPrev} style={styles.prevButton}>
          &lt; Prev
        </button>
      )}
      <div style={styles.spacer}></div>
      {showNext && (
        <button onClick={onNext} style={styles.nextButton}>
          Next
        </button>
      )}
      {showEnd && (
        <button onClick={onEnd} style={styles.endButton}>
          End
        </button>
      )}
    </div>
  );
};

const styles = {
  navigationBar: {
    display: 'flex',
    gap: '12px',
    marginTop: 'auto',
    paddingTop: '24px'
  },
  spacer: {
    flex: 1
  },
  prevButton: {
    padding: '14px 28px',
    borderRadius: '10px',
    border: '2px solid #e9ecef',
    background: 'white',
    color: '#7f8c8d',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  nextButton: {
    padding: '14px 28px',
    borderRadius: '10px',
    border: 'none',
    background: '#4caf50',
    color: 'white',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  endButton: {
    padding: '14px 28px',
    borderRadius: '10px',
    border: 'none',
    background: '#f44336',
    color: 'white',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

export default NavigationBar;
