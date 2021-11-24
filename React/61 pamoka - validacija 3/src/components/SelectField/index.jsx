import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class SelectField extends Component {
  render() {
    const { name, label, id, value, error, onChange, onFocus, options } = this.props;

    let className = styles.fieldContainer;
    if (error) className += ' ' + styles.error;

    return (
      <div className={styles.container}>
        <div className={className}>
          <label htmlFor={id} className={styles.label}>{label}</label>
          <select
            name={name}
            className={styles.select}
            id={id}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
          >
            {options.map((x) =>
              <option
                key={x.value}
                value={x.value}
                disabled={x.disabled}
              >
                {x.title}
              </option>
            )}
          </select>
          <div className={styles.lineFocused}></div>
        </div>
        {error ? <div className={styles.errorMessage}>{error}</div> : null}
      </div>
    );
  }
}
