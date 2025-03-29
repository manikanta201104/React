import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200 'style={{backgroundColor:color}}>
      <div className='flex justify-center items-center top-12 p-10'>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl items-center text-white'>
          <button onClick={()=>setColor("red")} className='rounded-full p-3 outline-none px-4 py-1 shadow-sm'style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className='rounded-full p-3 outline-none px-4 py-1 shadow-sm'style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className=' rounded-full p-3 outline-none px-4 py-1 shadow-sm'style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("white")} className='text-black rounded-full p-3 outline-none px-4 py-1 shadow-sm'style={{backgroundColor:"white"}}>White</button>
          <button onClick={()=>setColor("lightblue")} className=' rounded-full p-3 outline-none px-4 py-1 shadow-sm'style={{backgroundColor:"lightblue"}}>LightBlue</button>
          <button onClick={()=>setColor("black")} className=' rounded-full p-3 outline-none px-4 py-1 shadow-sm'style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=>setColor("violet")} className=' rounded-full p-3 outline-none px-4 py-1 shadow-sm'style={{backgroundColor:"violet"}}>Violet</button>
          <button onClick={()=>setColor("orange")} className=' rounded-full p-3 outline-none px-4 py-1 shadow-sm'style={{backgroundColor:"Orange"}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App

