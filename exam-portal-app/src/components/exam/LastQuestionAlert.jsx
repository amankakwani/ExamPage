import React from 'react';

const LastQuestionAlert = ({ show }) => {
  if (!show) return null;

  return (
    <div style={styles.alert}>
      <svg style={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <span>This is the last question. Click "End" to finish.</span>
    </div>
  );
};

const styles = {
  alert: {
    background: '#fff3cd',
    border: '1px solid #ffc107',
    borderRadius: '8px',
    padding: '12px 16px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#856404',
    fontSize: '14px'
  },
  icon: {
    flexShrink: 0
  }
};

export default LastQuestionAlert;
