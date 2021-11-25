import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(5);

  return (
    <div style={{ textAlign: 'center'}}>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
}

export default App;

/*
  Sukurkite input'ą, kuriame saugokite skaičių, susietą dvipusiu(two-way) binding būdų
  Paspaudus paddinimo/sumažinimo mygtukus, turi būti didinama/mažina pagal įvesties lauke įrašytą reikšmę 
*/
