import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {

  render() {
    return (
      <main>
        <h1>Čia yra aplikacija</h1>
        <Form
          title="Registracija"
          submitText="Registruotis"
          fields={[{
            name: 'name',
            type: 'text',
            label: 'Vardas',
          }, {
            name: 'surname',
            type: 'text',
            label: 'Pavardė',
          }, {
            name: 'age',
            type: 'number',
            label: 'Amžius',
          }, {
            name: 'password',
            type: 'password',
            label: 'Slaptažodis',
          }, {
            name: 'email',
            type: 'email',
            label: 'El. paštas',
          },
          ]}
        />
      </main>
    );
  }
}

export default App;

/*
  Sukurkite papildomą prop'są formai 'submitText': string.
    Panaudokite šį props'ą vietoj į'hardcode'into žodžiu Submit Formos mygtuke

  18:30
*/
