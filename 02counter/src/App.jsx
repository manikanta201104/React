import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)

  function Add_Value() {
    setCounter((prevCounter) => {
      if (prevCounter >= 20) {
        alert("Counter is greater than 20, you can't add");
        return prevCounter; // Prevents increment if already 20+
      }
      return prevCounter + 1;
    });
  }

  function Subtract_Value() {
    setCounter((prevCounter) => {
      if (prevCounter <= 0) {
        alert("Counter is less than 0, you can't subtract");
        return prevCounter; // Prevents decrement if already 0-
      }
      return prevCounter - 1;
    });
  }

  return (
    <>
      <h1>Counter by Manikanta</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={Add_Value}>Add Value</button> <br />
      <button onClick={Subtract_Value}>Subtract Value</button>
      <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
