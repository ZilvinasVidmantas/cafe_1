import React, { PureComponent } from 'react';
import styles from './styles.module.scss';

class InputField extends PureComponent {

  render() {
    const { name, label, id, value, error, onChange, onFocus, type } = this.props;

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
            onChange={onChange}
            onFocus={onFocus}
          />
          <div className={styles.lineFocused}></div>
        </div>
        {error ? <div className={styles.errorMessage}>{error}</div> : null}
      </div>
    );
  }
}

export default InputField;
