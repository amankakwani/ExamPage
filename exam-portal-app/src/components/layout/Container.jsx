import React from 'react';

const Container = ({ children }) => {
  return (
    <div style={styles.container}>
      {children}
    </div>
  );
};

const styles = {
  container: {
    background: 'white',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    minHeight: '500px',
    display: 'flex',
    flexDirection: 'column'
  }
};

export default Container;
