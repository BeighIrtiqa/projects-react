import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const incValue = () => {
    if(counter < 20){
      setCounter(counter + 1);
    }
  }
  const decValue = () =>{
    if(counter > 0){
      setCounter(counter - 1);
    }
  }
  return (
    <>
     <h1>A Counter Application</h1>
     <h4>Counter Value: {counter}</h4>
      <button onClick={incValue}>Increase Count</button>
      <button onClick={decValue}>Decrease Count</button>
    </>
  )
}

export default App
