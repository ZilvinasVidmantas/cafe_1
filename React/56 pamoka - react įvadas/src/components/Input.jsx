import React from 'react';

class Input extends React.Component {

  render() {
    const { type, name} = this.props;
    return (
      <input type={type} name={name} /> 
    );
  }
}

export default Input;
