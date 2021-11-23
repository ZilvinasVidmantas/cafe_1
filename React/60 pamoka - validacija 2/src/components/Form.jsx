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

  get valid() {
    return Object.values(this.state.errors).every(x => x === null);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.valid) {
      this.props.onSubmit(this.state.values);
    } else {
      console.error('Yra klaidų. Uždaugęs būsiu alert\'u su animacija');
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

  /* 
    Sukurkite submit mygtukui stilius:
      * pagrąžintas paprastas mygtukas ( savo nuožiūra )                    .submitBtn
      * pagrąžintas paprastas mygtukas + ATRODANTIS UŽBUKINTAS/PAPILKINTAS  .submitBtn.muted
    
    Eiga:
      * Komponentui sukurkite aplanką, tokiu pavadinimu, kaip vadinasi failas
      * failą pervadinkite index.jsx
      * stilius saugokit faile styles.module.scss tame pačiame aplanke kaip ir komponento logika
      * panaudokite stilius, importuojant scss failo klasių pavadinimus į kintamajį <styles>
    */
  render() {
    const { title, submitText } = this.props;
    const fields = this.createFields();

    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'flex', gap: '40px' }}>
        <div>
          <h2>{title}</h2>
          {fields}
          <button type="submit" className={styles.submitBtn}>{submitText}</button>
          <button type="submit" className={styles.submitBtn + ' ' + styles.muted}>{submitText}</button>
        </div>
        <pre>{JSON.stringify(this.state, undefined, 3)}</pre>
      </form>
    )
  }
}

export default Form;
