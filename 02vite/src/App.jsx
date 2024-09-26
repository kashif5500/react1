import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter=15
  const addValue =()=>{
    // counter=counter+1 
    counter=counter + 1
    setCounter(counter ) 
    console.log("clicked",counter);
  }
  const removeValue=()=>{
    setCounter(counter - 1)
  }
  return (
    <>
    
      <h1>chai aur react {counter}</h1>
      <h2>Countervalue:{counter}</h2>

      <button
      onClick={addValue}> Add value</button>
      <br/>
      <button onClick={removeValue}>remove value:{counter}</button>
   
      
    </>
  )
}

export default App
