import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {

  render() {
    return (
      <main>
        <h1>Čia yra aplikacija</h1>
        <Form title="Registracija"/>
      </main>
    );
  }
}

export default App;

/*
  Sukurkite papildomą prop'są formai 'submitText': string. 
    Panaudokite šį props'ą vietoj į'hardcode'into žodžiu Submit Formos mygtuke

  18:20
*/
