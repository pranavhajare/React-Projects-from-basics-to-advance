import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(0);

  const increase = () =>{
      if(counter<21)  setCounter(++counter);
    
    

  }
  const decrease = () => {
    if(counter>0) setCounter(--counter);
  }



  return (
    <>

     <h1>Counter App</h1>

     <h3>Current count : {counter}</h3>

     <button onClick={increase}>Increase</button>
     <button onClick={decrease}>Decrease</button>

     
    </>
  )
}

export default App
