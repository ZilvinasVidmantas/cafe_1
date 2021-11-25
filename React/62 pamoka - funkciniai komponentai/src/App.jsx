import { useState } from 'react';

const arithmeticActions = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}

const App = () => {
  const [counter, setCounter] = useState(5);
  const [amount, setAmount] = useState(2);
  const [arithmeticAction, setArtimethicAction] = useState();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{counter}</h1>
      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <select value="ccc" onChange={(event) => {/* Ką daryti, jeigu keičiasi pasirinkta reikšmė*/ }}>
        <option value="aaa">Add</option>
        <option value="bbb">Subtract</option>
        <option value="ccc">Multiply</option>
        <option value="ddd">Divide</option>
      </select>
      <button onClick={() => { }}>Count</button>
    </div>
  );
}

export default App;

/*
  Įgalinkite logiką, jog paspaudus mygtuką 'count', būtų atliekaas veiksmas, kuris nurodytas select'e

*/
