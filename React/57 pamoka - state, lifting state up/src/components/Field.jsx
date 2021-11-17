import React, { Component } from 'react';

class Field extends Component {
  state = { value: '' };

  handleInputChange = (e) => this.setState({ value: e.target.value });

  render() {
    const { type, name, label, id } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label> <br />
        <input
          type={type}
          name={name}
          id={id}
          value={this.state.value}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Field;
