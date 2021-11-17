import React, { Component } from 'react';

class Field extends Component {

  render() {
    const { type, name, label, id } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label> <br />
        <input type={type} name={name} id={id} />
      </div>
    );
  }
}

export default Field;
