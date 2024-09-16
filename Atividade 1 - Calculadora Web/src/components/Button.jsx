const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#FFC107',
        color: '#FFF',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '20px',
        borderRadius: '5px',
        transition: 'background-color 0.3s, transform 0.3s',
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
      {children}
    </button>
  );
};

export default Button;
