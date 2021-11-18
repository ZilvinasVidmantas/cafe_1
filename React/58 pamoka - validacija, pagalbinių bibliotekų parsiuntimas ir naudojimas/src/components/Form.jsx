import React from 'react';
import InputField from './InputField';
class Form extends React.Component {

  constructor(props) {
    super(props);

    const fields = props.fields.reduce((fieldsObject, { name,  ...fieldProps }) => {
      fieldsObject[name] = {...fieldProps, value: '' };

      return fieldsObject;
    }, {});

    this.state = {
      fields,
      fieldChangeHandlers: {
        name: (value) => this.handleFieldChange('name', value),
        surname: (value) => this.handleFieldChange('surname', value),
        age: (value) => this.handleFieldChange('age', value),
        password: (value) => this.handleFieldChange('password', value),
        email: (value) => this.handleFieldChange('email', value),
      }
    }
    /*
      MOKYMOSI TIKSLAIS:
        Panaudokite performuotus laukus Objektu <fields>, kad suformuoti fieldChangeHandlers objektą 
        19:40

        const fieldsChangeHandlers = ...    
        P.S.:
          * Array.prototype.reduce
          * Object.keys
    */
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