import React from 'react';
import Field from './Field';
class Form extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Pas\'submit\'inta');
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
         <Field
          type="password"
          label="Slaptažodis"
          name="password"
          id="password-field-id"
        />
        <Field
          type="email"
          label="El. Paštas"
          name="email"
          id="email-field-id"
        />

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form;
