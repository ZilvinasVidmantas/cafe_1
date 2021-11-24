import React from 'react';
import InputField from '../InputField';
import styles from './styles.module.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);

    const { fieldsProps, fieldChangeHandlers, validators, ...state } = props.fields.reduce(
      (result, { name, validator, ...fieldProps }) => {
        result.fieldsProps[name] = fieldProps;
        result.fieldChangeHandlers[name] = value => this.handleFieldChange(name, value);
        result.values[name] = '';
        result.errors[name] = null;
        result.touched[name] = false;
        if (validator) {
          result.validators[name] = validator;
          result.errors[name] = validator('');
        }

        return result;
      }, {
      fieldsProps: {},
      fieldChangeHandlers: {},
      errors: {},
      values: {},
      touched: {},
      validators: {}
    });

    this.fieldsProps = fieldsProps;
    this.fieldChangeHandlers = fieldChangeHandlers;
    this.validators = validators;

    this.state = state;
  }

  get valid() {
    return Object.values(this.state.errors).every(x => x === null);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.valid) {
      this.props.onSubmit(this.state.values);
    }
  }

  handleFieldChange = (fieldName, value) => {
    const newState = {
      values: {
        ...this.state.values,
        [fieldName]: value
      }
    }

    const fieldValidator = this.validators[fieldName];
    if (fieldValidator) {
      newState.errors = {
        ...this.state.errors,
        [fieldName]: fieldValidator(value)
      }
    }

    this.setState(newState);
  }

  handleTouch = (event) => {
    this.setState(state => ({
      touched: {
        ...state.touched,
        [event.target.name]: true
      }
    }));
  }

  createFields = () => {
    const { fieldsProps, fieldChangeHandlers, state: { values, errors, touched } } = this;

    return Object.keys(fieldsProps).map(name =>
      <InputField
        key={name}
        name={name}
        id={`${name}-field-id`}
        value={values[name]}
        error={touched[name] && errors[name]}
        onChange={fieldChangeHandlers[name]}
        onFocus={this.handleTouch}
        {...fieldsProps[name]}
      />
    );
  }

  render() {
    const { title, submitText } = this.props;
    const fields = this.createFields();

    let submitBtnClassName = styles.submitBtn;
    if (!this.valid) submitBtnClassName += ' ' + styles.muted;

    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'flex', gap: '40px' }}>
        <div>
          <h2>{title}</h2>
          {fields}
          <button type="submit" className={submitBtnClassName}>{submitText}</button>
        </div>
        <pre>{JSON.stringify(this.state, undefined, 3)}</pre>
      </form>
    )
  }
}

export default Form;
