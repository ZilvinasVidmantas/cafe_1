import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {

  render() {
    return (
      <main style={{ width: '900px', margin: '1rem auto'}}>
        <h1>Čia yra aplikacija</h1>
        <Form
          title="Registracija"
          submitText="Registruotis"
          fields={[
            { name: 'name', type: 'text', label: 'Vardas', validator: val =>  val.length < 6 ? 'Klaida': null },
            { name: 'surname', type: 'text', label: 'Pavardė', },
            { name: 'age', type: 'number', label: 'Amžius', },
            { name: 'password', type: 'password', label: 'Slaptažodis', },
            { name: 'email', type: 'email', label: 'El. paštas', },
          ]}
        />
      </main>
    );
  }
}

export default App;

