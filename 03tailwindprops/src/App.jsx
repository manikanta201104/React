import { useState } from 'react'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-3xl bg-amber-100 text-black'>This is manikanta</h1> */}
      <Card username="Manikanta" About="Click Me" />
      <Card />
    </>
  )
}

export default App
