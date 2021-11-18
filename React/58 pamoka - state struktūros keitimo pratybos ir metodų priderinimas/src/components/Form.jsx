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

    this.state = props.fields.reduce((result, { name, ...fieldProps }) => {
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
  }


  handleSubmit = (e) => {
    e.preventDefault();
  }

  /*
    Įrašykite gautą parametro <value> reikšmę į atitinkamą this.state.values lauko reikšmę pagal parametrą <fieldName>
      tai atlikdami, nepakeiskite kitų this.state esančių duomenų

    21:50
  */ 
  handleFieldChange = (fieldName, value) => this.setState({
    fields: {
      ...this.state.fields,
      [fieldName]: {
        ...this.state.fields[fieldName],
        value
      }
    }
  });

  createFields = () => {
    const { fieldsProps, values, fieldChangeHandlers } = this.state;

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