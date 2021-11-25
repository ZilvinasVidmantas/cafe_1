import { useState } from 'react';

const { arithmeticActions, options, initialOption } = [
  { name: 'add', action: (a, b) => a + b, text: 'Pridėti' },
  { name: 'subtract', action: (a, b) => a - b, text: 'Atimti' },
  { name: 'multiply', action: (a, b) => a * b, text: 'Padauginti' },
  { name: 'divide', action: (a, b) => a / b, text: 'Padalinti' },
]
  .reduce((result, { name, action, text }, i) => {
    if (i === 0) result.initialOption = name;
    result.arithmeticActions[name] = action;
    result.options.push(<option key={name} value={name}>{text}</option>);
    return result;
  }, {
    arithmeticActions: {},
    options: [],
    initialOption: null
  });

const App = () => {
  const [base, setBase] = useState(1);
  const [operand, setOperand] = useState(1);
  const [selectedAction, setSelectedAction] = useState(initialOption);

  const handleCalculation = () => {
    const selectedFunction = arithmeticActions[selectedAction];
    const calculateValue = selectedFunction(base, operand);
    setBase(calculateValue);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{base}</h1>
      <input type="number" value={operand} onChange={(e) => setOperand(Number(e.target.value))} />
      <select value={selectedAction} onChange={(event) => setSelectedAction(event.target.value)}>
        {options}
      </select>
      <button onClick={handleCalculation}>Calculate</button>
    </div>
  );
}

export default App;
