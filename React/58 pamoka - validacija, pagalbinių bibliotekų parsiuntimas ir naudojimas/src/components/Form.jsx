import React from 'react';
import InputField from './InputField';
class Form extends React.Component {

  constructor(props) {
    super(props);

    const fields = props.fields.reduce((fieldsObject, { name,  ...fieldProps }) => {
      fieldsObject[name] = {...fieldProps, value: '' };

      return fieldsObject;
    }, {});

    const fieldChangeHandlers =  Object.keys(fields).reduce((handlers, fieldName) => {
      handlers[fieldName] = value => this.handleFieldChange(fieldName, value);

      return handlers;
    }, {});

    const state = props.fields.reduce((result, { name,  ...fieldProps }) => {
      result.fields[name] = {...fieldProps, value: '' };
      result.fieldChangeHandlers[name] = value => this.handleFieldChange(name, value);

      return result;
    }, {
      fields: {},
      fieldChangeHandlers: {}
    });

    this.state = {
      fields,
      fieldChangeHandlers
    };

    console.log('Sugeneruota atskirai:');
    console.log({
      fields,
      fieldChangeHandlers
    })
    console.log('Sugeneruota vienu ciklu:');
    console.log(state);
  }


  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleFieldChange = (fieldName, value) => this.setState({
    fields: {
      ...this.state.fields,
      [fieldName]: {
        ...this.state.fields[fieldName],
        value
      }
    }
  });

  createFields = () => Object.entries(this.state.fields)
    .map(([name, { type, label, value }]) => (
      <InputField
        key={name}
        name={name}
        type={type}
        label={label}
        id={`${name}-field-id`}
        value={value}
        onChange={this.state.fieldChangeHandlers[name]}
      />
    ));

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