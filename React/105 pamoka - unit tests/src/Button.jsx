import React from 'react'

const Button = ({ children, onClick, color, ...props }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button