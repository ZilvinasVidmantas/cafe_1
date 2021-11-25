import { useState } from 'react'

const [min, max] = [50, 600];
const amount = 50

const Square = () => {
  const [size, setSize] = useState(200);

  const handleSizeChange = (numericDirection) => {
    const potentialSize = amount * numericDirection + size;

    if (potentialSize >= min && potentialSize <= max) {
      setSize(potentialSize);
    }
  }

  return (
    <section style={{ textAlign: 'center' }}>
      <h2>Square</h2>
      <div style={{ margin: '1rem 0' }}>
        <button onClick={() => handleSizeChange(1)}>Increase</button>
        <button onClick={() => handleSizeChange(-1)}>Decrease</button>
      </div>
      <div style={{ display: 'inline-block', width: size, height: size, background: '#009' }}></div>
    </section>
  )
}

export default Square;
