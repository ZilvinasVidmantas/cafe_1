import React from 'react';
import InputField from './InputField';
class Form extends React.Component {

  constructor(props) {
    super(props);

    const state = props.fields.reduce((result, { name, ...fieldProps }) => {
      result.fields[name] = { ...fieldProps, value: '' };
      result.fieldChangeHandlers[name] = value => this.handleFieldChange(name, value);
      result.errors[name] = null;

      return result;
    }, {
      fields: {},
      fieldChangeHandlers: {},
      errors: {}
    });

    /*
      1. Pakeisti state struktūrą, jog pradinės reikšmės būtų išsaugomos atskirame objekte, 
        values: {
          name: '',
          surname: '',
          age: '',
          password: '',
          email: '',
        }

      2. Pervadinti state.fields į  ->  state.fieldProps

      10 min sprendimui
      10 min pertrauka
      21:10
      
    */
    this.state = state;
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