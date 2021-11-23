import React, { Component } from 'react';
import validator from 'validator';
import Form from './components/Form';

// 2-32 simbolių, tik raidės ir tarpai 
const nameValidator = (val) => /^[a-zA-Z ąčęėįšųūžĄČĘĖĮŠŲŪŽ]{2,32}$/.test(val)
  ? null
  : 'Privalo būti nuo 2 iki 32 lietuviškų raidžių';
// 2-32 simbolių, tik raidės ir tarpai 
const surnameValidator = (val) => /^[a-zA-Z ąčęėįšųūžĄČĘĖĮŠŲŪŽ]{2,32}$/.test(val)
  ? null
  : 'Privalo būti nuo 2 iki 32 lietuviškų raidžių';
// 1 - 150 
const ageValidator = (val) => validator.isInt(val, { min: 1, max: 150 }) ? null : 'Amžius privalo būti nuo 1 iki 150 metų.';
// 1 Didžioji, 1 Mažoji, min 6 simboliai
const passwordValidator = (val) => validator.isStrongPassword(val, { minLength: 6, minSymbols: 0, minNumbers: 0 })
  ? null
  : 'Slapažodis privalo būti nors 6 simbolių, su nors viena mažąja ir nors viena didžiąja raide.';
// Turi būt paštas
const emailValidator = (val) => validator.isEmail(val) ? null : 'Neteisingas pašto formatas';

const formFields = [
  { name: 'name', type: 'text', label: 'Vardas', validator: nameValidator },
  { name: 'surname', type: 'text', label: 'Pavardė', validator: surnameValidator },
  { name: 'age', type: 'number', label: 'Amžius', validator: ageValidator },
  { name: 'password', type: 'password', label: 'Slaptažodis', validator: passwordValidator },
  { name: 'email', type: 'email', label: 'El. paštas', validator: emailValidator },
];

class App extends Component {

  render() {
    return (
      <main style={{ width: '900px', margin: '1rem auto' }}>
        <h1>Čia yra aplikacija</h1>
        <Form
          title="Registracija"
          submitText="Registruotis"
          fields={formFields}
        />
      </main>
    );
  }
}

export default App;

