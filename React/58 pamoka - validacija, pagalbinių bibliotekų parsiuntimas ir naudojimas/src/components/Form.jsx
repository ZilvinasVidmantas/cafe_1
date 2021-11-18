import React from 'react';
import InputField from './InputField';
class Form extends React.Component {

  constructor(props){
    super(props);
    
    
    this.state = {
      fields: {
        name: {
          type: 'text',
          label: 'Vardas',
          value: ''
        },
        surname: {
          type: 'text',
          label: 'Pavardė',
          value: ''
        },
        age: {
          type: 'number',
          label: 'Amžius',
          value: ''
        },
        password: {
          type: 'password',
          label: 'Slaptažodis',
          value: ''
        },
        email: {
          type: 'email',
          label: 'El. paštas',
          value: ''
        },
      },
      fieldChangeHandlers: {
        name: (value) => this.handleFieldChange('name', value),
        surname: (value) => this.handleFieldChange('surname', value),
        age: (value) => this.handleFieldChange('age', value),
        password: (value) => this.handleFieldChange('password', value),
        email: (value) => this.handleFieldChange('email', value),
      }
    }
    console.log('Tai:');
    console.log(props.fields);
    console.log('Turi tapti, tai:');
    console.log(this.state.fields);
    // Rezultatus išsaugokite kitamajame:
    // const fields = ...;

    // iki 18:10 sprendimas
    // 10 min pertrauka
    // 18:20 Atsakymas ir klausimai

    // P.S.:
    //  * Object.entries(...)
    //  * Array.prototype.reduce
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