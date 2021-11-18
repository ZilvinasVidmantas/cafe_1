import React from 'react';
import InputField from './InputField';
class Form extends React.Component {

  constructor(props) {
    super(props);

    // this.state = props.fields.reduce(({ fields, fieldChangeHandlers, errors, values }, { name, ...fieldProps }) => ({
    //   fields: { ...fields, [name]: fieldProps },
    //   fieldChangeHandlers: { ...fieldChangeHandlers, [name]: value => this.handleFieldChange(name, value) },
    //   errors: { ...errors, [name]: null },
    //   values: { ...values, [name]: '' },
    // }), {
    //   fields: {},
    //   fieldChangeHandlers: {},
    //   errors: {},
    //   values: {}
    // });

    const { fieldsProps, fieldChangeHandlers, ...state } = props.fields.reduce((result, { name, ...fieldProps }) => {
      result.fieldsProps[name] = fieldProps;
      result.fieldChangeHandlers[name] = value => this.handleFieldChange(name, value);
      result.errors[name] = null;
      result.values[name] = '';

      return result;
    }, {
      fieldsProps: {},
      fieldChangeHandlers: {},
      errors: {},
      values: {}
    });

    this.fieldsProps = fieldsProps;
    this.fieldChangeHandlers = fieldChangeHandlers;

    this.state = state;

  }


  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleFieldChange = (fieldName, value) => this.setState({
    values: {
      ...this.state.values,
      [fieldName]: value
    }
  });

  createFields = () => {
    const { fieldsProps, fieldChangeHandlers, state: { values } } = this;

    return Object.keys(fieldsProps).map(name =>
      <InputField
        key={name}
        name={name}
        id={`${name}-field-id`}
        value={values[name]}
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