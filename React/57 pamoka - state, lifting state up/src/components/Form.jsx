import React from 'react';
import InputField from './InputField';
class Form extends React.Component {
  state = {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    age: '19',
    password: 'Labas123',
    email: 'serbentas@gmail.com',
    formDataJSON: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      formDataJSON: JSON.stringify({
        name: this.state.name,
        surname: this.state.surname,
        age: this.state.age,
        password: this.state.password,
        email: this.state.email,
      }, undefined, 1)
    })
  }

  handleNameChange = (name) => this.setState({ name });

  handleSurnameChange = (surname) => this.setState({ surname });

  handleAgeChange = (age) => this.setState({ age });

  handleEmailChange = (email) => this.setState({ email });

  handlePasswordChange = (password) => this.setState({ password });


  render() {
    console.log(this.state.formDataJSON);
    return (
      <form onSubmit={this.handleSubmit}>
        <InputField
          name="name"
          type="text"
          label="Vardas"
          id="name-field-id"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <InputField
          name="surname"
          type="text"
          label="Pavardė"
          id="surname-field-id"
          value={this.state.surname}
          onChange={this.handleSurnameChange}
        />
        <InputField
          name="age"
          type="number"
          label="Amžius"
          id="age-field-id"
          value={this.state.age}
          onChange={this.handleAgeChange}
        />
        <InputField
          name="email"
          type="email"
          label="El. Paštas"
          id="email-field-id"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <InputField
          name="password"
          type="password"
          label="Slaptažodis"
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