import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(5);

  return (
    <div style={{ textAlign: 'center'}}>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}

export default App;

/*
  Sukurkite mygtuką, kuris sumažintų <counter> reikšmę vienetu

*/
