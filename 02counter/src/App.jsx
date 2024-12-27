// import {useState} from "react";
// import './App.css'

// function App() {
//   const [counter, setCounter] = useState(10);
//   // let counter=15;

//   const addValue=function(){
//     setCounter(counter+1);
//   }
//   const removeValue=function(){
//     setCounter(counter-1);
//   }
//   return (
//     <>
//      <h1>Learning React from Manikanta {counter}</h1>
//      <h2>Counter Value:{counter}</h2>
//      <button onClick={addValue}>Add Value</button>
//      <button onClick={removeValue}>Remove Value</button>
//      <p>footer:{counter}</p>
//     </>
//   )
// }

// export default App

import {useState} from "react";
import "./App.css"
function App() {
  const[counter,setCounter]=useState(10);
  const addValue=function(){
    setCounter((prevCounter)=>prevCounter+1);//these lines are actually updating the value which is the previous updated value and plus one to it
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);

  }
  const removeValue=function(){
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Learning react from Manikanta {counter}</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <p>footer:{counter}</p>
    </>
  )
}
export default App;