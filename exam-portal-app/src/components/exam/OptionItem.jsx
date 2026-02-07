import React from 'react';

const OptionItem = ({ option, selected, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      style={{
        ...styles.optionButton,
        ...(selected ? styles.selected : {})
      }}
    >
      <div style={styles.radio}>
        {selected && <div style={styles.radioInner}></div>}
      </div>
      <span style={styles.optionText}>
        Option {option.id}: {option.text}
      </span>
    </button>
  );
};

const styles = {
  optionButton: {
    width: '100%',
    background: '#f8f9fa',
    border: '2px solid #e9ecef',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    transition: 'all 0.3s ease',
    textAlign: 'left',
    fontSize: '16px',
    color: '#2c3e50'
  },
  selected: {
    background: '#e3f2fd',
    borderColor: '#2196f3'
  },
  radio: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '2px solid #7f8c8d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  radioInner: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#2196f3'
  },
  optionText: {
    flex: 1
  }
};

export default OptionItem;
