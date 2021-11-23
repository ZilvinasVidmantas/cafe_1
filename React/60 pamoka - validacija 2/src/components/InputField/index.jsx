import React, { PureComponent } from 'react';
import styles from './styles.module.css';

class InputField extends PureComponent {

  handleInputChange = (e) => this.props.onChange(e.target.value);

  render() {
    const { type, name, label, id, value, error } = this.props;

    let className = styles.fieldContainer;
    if (error) className += ' ' + styles.error;

    return (
      <div className={styles.container}>
        <div className={className}>
          <label htmlFor={id} className={styles.label}>{label}</label>
          <input
            type={type}
            name={name}
            className={styles.input}
            id={id}
            value={value}
            onChange={this.handleInputChange}
          />
          <div className={styles.lineFocused}></div>
        </div>
        {error ? <div className={styles.errorMessage}>{error}</div> : null}
      </div>

    );
  }
}

export default InputField;

// 21:18
// klaidingos įveststies stiliai
