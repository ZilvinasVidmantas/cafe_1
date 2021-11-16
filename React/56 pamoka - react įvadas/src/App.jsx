import React from 'react';
import Paragraph from './components/Paragraph';

class App extends React.Component {

  render() {
    return (
      <main>
        <h1>Čia yra aplikacija</h1>
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <Paragraph />
      </main>
    );
  }
}

export default App;

/*
  Sukurkite Header.jsx komponentą, kuris kurtų:
     <h2>tekstas</h2> 

  Sukurkite Input.jsx komponentą, kuris kurtų:
    <input type="text" name="field" />
     
  Sukurkite Field.jsx komponentą, kuris kurtų:
    <div>
      <label htmlFor="id-raktas">laukas</label> <br/>
      <input type="text" name="field" id="id-raktas" />
    <div>

    Visus šiuos komponenetus panaudokite App.jsx faile
*/