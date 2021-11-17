import React from 'react';
import InputField from './InputField';
class Form extends React.Component {
  state = {
    password: '',
    email: '',
    formDataJSON: '' 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      formDataJSON: JSON.stringify({
        email: this.state.email,
        password: this.state.email
      })
    })
  }

  handleEmailChange = (email) => this.setState({email });
  
  handlePasswordChange = (password) => this.setState({ password });
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputField
          type="email"
          label="El. Paštas"
          name="email"
          id="email-field-id"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <InputField
          type="password"
          label="Slaptažodis"
          name="password"
          id="password-field-id"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />

        <button type="submit">Submit</button>
        <pre>{this.state.formDataJSON}</pre>
      </form>
    )
  }
}

export default Form;

/*
  Sukurkite dar 3 įvesties laukus:
    * name
    * surname
    * age

  Nepamirškite, kad reikia:
    * render() metode sukurti įvesties laukus
    * Papildyti state
    * Papildyti handleSubmit funkciją, jog this.stateformDataJSON atsirastų duomenys
    * sukurti funkcijas keisti naujų (name, surname, age) įvesčių reikšmes
*/