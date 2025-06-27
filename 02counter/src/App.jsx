
import { useState } from 'react';
import './App.css'

function App() {

  let  [counter,setCounter]= useState(12)
 
  // let counter=12

  
  
  const addValue = () => {
    // console.log("value added",Math.random());
    // console.log("clicked",Math.random());
    console.log("clicked",counter);
    counter=counter+1
    setCounter(counter)
  }
  

  const decValue = () => {
    // console.log("value added",Math.random());
    // console.log("clicked",Math.random());
    console.log("clicked",counter);
    counter=counter-1
    setCounter(counter)
  }
  
  
  

  return (
    <>
      <h1>Counter app vite</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
