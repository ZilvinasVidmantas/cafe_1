import React, { Component } from 'react';
import Field from './components/Field';

class App extends Component {

  render() {
    return (
      <main>
        <h1>Čia yra aplikacija</h1>
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
      </main>
    );
  }
}

export default App;

