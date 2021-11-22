import React from 'react';
import InputField from './InputField';


class Form extends React.Component {

  constructor(props) {
    super(props);

    const { fieldsProps, fieldChangeHandlers, validators, ...state } = props.fields.reduce(
      (result, { name, validator, ...fieldProps }) => {
        result.fieldsProps[name] = fieldProps;
        result.fieldChangeHandlers[name] = value => this.handleFieldChange(name, value);
        result.errors[name] = null;
        result.values[name] = '';
        if (validator) {
          result.validators[name] = validator;
        }

        return result;
      }, {
      fieldsProps: {},
      fieldChangeHandlers: {},
      errors: {},
      values: {},
      validators: {}
    });

    this.fieldsProps = fieldsProps;
    this.fieldChangeHandlers = fieldChangeHandlers;
    this.validators = validators;

    this.state = state;
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleFieldChange = (fieldName, value) => {
    const newState = {
      values: {
        ...this.state.values,
        [fieldName]: value
      }
    }
    
    const fieldValidator = this.validators[fieldName];
    if (this.validators[fieldName]) {
      const errorResult = fieldValidator(value);
      newState.errors = {
        ...this.state.errors,
        [fieldName]: errorResult === true ? null : errorResult
      }
    }

    this.setState(newState);
  }

  createFields = () => {
    const { fieldsProps, fieldChangeHandlers, state: { values, errors } } = this;

    return Object.keys(fieldsProps).map(name =>
      <InputField
        key={name}
        name={name}
        id={`${name}-field-id`}
        value={values[name]}
        error={errors[name]}
        onChange={fieldChangeHandlers[name]}
        {...fieldsProps[name]}
      />
    );
  }

  render() {
    const { title, submitText } = this.props;
    const fields = this.createFields();

    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'flex', gap: '40px' }}>
        <div>
          <h2>{title}</h2>
          {fields}
          <button type="submit">{submitText}</button>
        </div>
        <pre>{JSON.stringify(this.state, undefined, 3)}</pre>
      </form>
    )
  }
}

export default Form;
