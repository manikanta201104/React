import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  // function ColorChange(color) {
  //   setColor(color)
  // }
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-80 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 drop-shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={()=>setColor("red")} 
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-500'>red</button>
        <button onClick={()=>setColor("rgb(0,255,0)")} 
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-green-500'>green</button>
        <button onClick={()=>setColor("yellow")}
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-yellow-500'>yellow</button>
        <button onClick={()=>setColor("Pink")} className='outline-dotted px-4 py-1 rounded-full shadow-lg text-black bg-pink-500'>Pink</button>
        <button onClick={()=>setColor("orange")} className='outline-solid px-4 py-1 rounded-full shadow-lg text-black bg-orange-400'>orange</button>
      </div>
    </div>

    </div>
  )
}

export default App
