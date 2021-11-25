import { useState } from 'react';

const { arithmeticActions, options, initialAction } = [
  { name: 'add', action: (a, b) => a + b, text: 'Pridėti' },
  { name: 'subtract', action: (a, b) => a - b, text: 'Atimti' },
  { name: 'multiply', action: (a, b) => a * b, text: 'Padauginti' },
  { name: 'divide', action: (a, b) => a / b, text: 'Padalinti' },
]
  .reduce((result, { name, action, text }, i) => {
    if (i === 0) result.initialAction = name;
    result.arithmeticActions[name] = action;
    result.options.push(<option key={name} value={name}>{text}</option>);
    return result;
  }, {
    arithmeticActions: {},
    options: [],
    initialAction: null
  });

const styles = {
  resultContainer: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    background: '#e9e9e9',
    borderRadius: 4,
    margin: '0.5rem'
  }
}

const Calculator = () => {
  const [result, setResult] = useState(1);
  const [operand, setOperand] = useState(1);
  const [selectedAction, setSelectedAction] = useState(initialAction);

  const handleCalculation = () => {
    const selectedFunction = arithmeticActions[selectedAction];
    const calculateValue = selectedFunction(result, operand);
    setResult(calculateValue);
  };

  return (
    <section>
      <h2>Calculator</h2>
      <span style={styles.resultContainer}>{result}</span>
      <div>
        <input type="number" value={operand} onChange={(e) => setOperand(Number(e.target.value))} />
        <select value={selectedAction} onChange={(event) => setSelectedAction(event.target.value)}>
          {options}
        </select>
        <button onClick={handleCalculation}>Calculate</button>
      </div>
    </section>
  );
}

export default Calculator;
