import React from 'react';

const ScoreBadge = ({ score }) => {
  return (
    <div style={styles.scoreBadge}>
      Score: {score}%
    </div>
  );
};

const styles = {
  scoreBadge: {
    background: '#f44336',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '10px',
    fontSize: '18px',
    fontWeight: '600',
    display: 'inline-block',
    marginBottom: '24px'
  }
};

export default ScoreBadge;
