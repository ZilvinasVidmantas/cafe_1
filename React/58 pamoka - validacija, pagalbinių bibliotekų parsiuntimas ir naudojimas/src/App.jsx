import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {

  render() {
    return (
      <main>
        <h1>Čia yra aplikacija</h1>
        <Form />
      </main>
    );
  }
}

export default App;

/*
  Sukurkite papildomą prop'są formai 'title': string. 
    Perdavus šį prop'są formai, turi atsirast <h2>{this.props.title}</h2> antraštė virš formos

*/
