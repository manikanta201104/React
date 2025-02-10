import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)

  // let counter=17;

  // const addValue=()=>{
  //   setCounter(counter+1);
  //   console.log(counter);
  // }

  //interview question create a counter 
  const addValue=()=>{
    setCounter((prevCounter)=> prevCounter+100);
    setCounter((prevCounter)=> prevCounter+100);
    setCounter((prevCounter)=> prevCounter+100);
    setCounter((prevCounter)=> prevCounter+100);

    console.log(counter);
  }
  const removeValue=()=>{
    // setCounter(counter-1);
    setCounter((prevCounter)=> prevCounter-100);
    setCounter((prevCounter)=> prevCounter-100);
    setCounter((prevCounter)=> prevCounter-100);
    setCounter((prevCounter)=> prevCounter-100);
    console.log(counter)
  }
  return (
    <>
      <h1>This is Manikanta from react {counter}</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value</button> {""}
      <button onClick={removeValue}>Remove Value</button>
      <h3>Footer:{counter}</h3>
    </>
  )
}

export default App
