import React from 'react'

const Button = ({ children, onClick, color, style = {}, ...props }) => {

  if (color) {
    style.backgroundColor = color;
  }
  return (
    <button
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button