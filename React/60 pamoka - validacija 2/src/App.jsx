import React, { Component } from 'react';
import validator from 'validator';
import Form from './components/Form';

// 2-32 simbolių, tik raidės ir tarpai 
const nameValidator = (val) => /^[a-zA-Z ąčęėįšųūžĄČĘĖĮŠŲŪŽ]{2,32}$/.test(val) 
  ? null 
  : 'Privalo būti nuo 2 iki 32 lietuviškų raidžių';
// 2-32 simbolių, tik raidės ir tarpai 
const surnameValidator = (val) => val.length < 6 ? 'Klaida' : null;
// 1 - 150 
const ageValidator = (val) => val.length < 6 ? 'Klaida' : null;
// 1 Didžioji, 1 Mažoji, min 6 simboliai
const passwordValidator = (val) => val.length < 6 ? 'Klaida' : null;
// Turi būt paštas
const emailValidator = (val) => val.length < 6 ? 'Klaida' : null;

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

