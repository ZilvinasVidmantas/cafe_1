import React, { Component } from 'react';

class InputField extends Component {

  handleInputChange = (e) => this.props.onChange(e.target.value);

  render() {
    const { type, name, label, id, value } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label> <br />
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default InputField;
