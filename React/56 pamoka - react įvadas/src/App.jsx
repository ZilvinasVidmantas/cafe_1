import React from 'react';
import Paragraph from './components/Paragraph';
import Header from './components/Header';
import Input from './components/Input';
import Field from './components/Field';

class App extends React.Component {

  render() {
    return (
      <main>
        <h1>Čia yra aplikacija</h1>
        <Header text="Headerio tekstas"/>
        <Paragraph text="Paragrafo tekstas"/>
        <Input type="number" name="pavadinimas"/>
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

/*
  PASIDARYKITE 10 MIN PERTAUKA

  Sukurkite Header.jsx komponentą, kuris kurtų:
     <h2>tekstas</h2>

  Perduokite Header komponentu prop'są, jog būtų galima nustatyti header'io turinį:
    * text
  ----------------------------------
  Sukurkite Input.jsx komponentą, kuris kurtų:
    <input type="text" name="field" />

  Perduokite Input komponentu prop'sus, jog būtų galima nustatyti jo atributus:
    * type
    * name

  ----------------------------------
  Sukurkite Field.jsx komponentą, kuris kurtų:
    <div>
      <label htmlFor="id-raktas">laukas</label> <br/>
      <input type="text" name="field" id="id-raktas" />
    <div>

  Perduokite Field komponentu prop'sus, jog būtų galima nustatyti jo atributus ir turinį:
    * type
    * name
    * label
    * id
  -----------------------------------

    Visus šiuos komponenetus panaudokite App.jsx faile
*/