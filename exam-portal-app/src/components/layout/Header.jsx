import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <button style={styles.menuButton}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <h1 style={styles.title}>Exam Portal</h1>
      <button style={styles.menuButton}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
        </svg>
      </button>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    marginBottom: '20px'
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#2c3e50'
  },
  menuButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#7f8c8d',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default Header;
