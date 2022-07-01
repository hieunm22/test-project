import { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)

  const decrease = () => {
    setCounter(counter - 1)
  }

  const increase = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="counter">
      <button id="increment-btn" onClick={increase}>Increase</button>
      <button id="decrement-btn" onClick={decrease}>Decrease</button>
      <div id="counter">Counter:
        <span id="counter-value">{counter}</span>
      </div>
    </div>
  )
}

export default Counter
