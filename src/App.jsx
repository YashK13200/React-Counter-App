import { useState } from 'react' // using State Hook here
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
    if (counter <= 0) {
      alert("stop Here")
    }
  }

  return (
    <>
      <h1>Basic Counter App</h1>
      <h2>Counter Value {counter}</h2>
      
      <button onClick={addValue} >Add Value </button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
