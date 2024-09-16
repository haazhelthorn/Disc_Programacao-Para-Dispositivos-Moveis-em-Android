import { useState } from 'react';

const HelperButton = ({ children }) => {
  const [showHelper, setShowHelper] = useState(false);

  const toggleHelper = () => {
    setShowHelper(!showHelper);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <span
        onClick={toggleHelper}
        style={{
          cursor: 'pointer',
          display: 'inline-block',
          backgroundColor: '#FFC107',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          textAlign: 'center',
          lineHeight: '30px',
          color: '#FFF',
          fontWeight: 'bold',
        }}
        onMouseDown={(e) => {
          e.target.style.backgroundColor = '#808080';
          e.target.style.transform = 'scale(0.75)';
        }}
        onMouseUp={(e) => {
          e.target.style.backgroundColor = '#FFC107';
          e.target.style.transform = 'scale(1)';
        }}
      >
        ?
      </span>
      {showHelper && (
        <p style={{ marginTop: '10px', color: '#CCC', fontSize: '14px' }}>
          {children}
        </p>
      )}
    </div>
  );
};

export default HelperButton;