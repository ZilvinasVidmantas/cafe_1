import React from 'react';
import InputField from '../InputField';
import SelectField from '../SelectField';
import styles from './styles.module.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);

    const { fieldsProps, validators, ...state } = props.fields.reduce(
      (result, { name, validator, ...fieldProps }) => {
        result.fieldsProps[name] = fieldProps;
        result.values[name] = fieldProps.options ? fieldProps.options[0].value : '';
        result.errors[name] = null;
        result.touched[name] = false;
        if (validator) {
          result.validators[name] = validator;
          result.errors[name] = validator('');
        }

        return result;
      }, {
      fieldsProps: {},
      errors: {},
      values: {},
      touched: {},
      validators: {}
    });

    this.fieldsProps = fieldsProps;
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

  handleFieldChange = (event) => {
    const { value, name: fieldName} = event.target;
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
    const { fieldsProps, state: { values, errors, touched } } = this;

    return Object.keys(fieldsProps).map(name => {
      const fieldProps = fieldsProps[name];
      const props = {
        key: name,
        name: name,
        id: `${name}-field-id`,
        value: values[name],
        error: touched[name] && errors[name],
        onChange: this.handleFieldChange,
        onFocus: this.handleTouch,
        ...fieldProps
      }

      return fieldProps.options ? <SelectField {...props} /> : <InputField {...props} />;
    }
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
