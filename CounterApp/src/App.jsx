import { useState } from 'react'
// import Counter from './components/Counter';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleChangeIn() {
    setCount(count + 1);
  }

  function handleChangeDe() {
    setCount(count - 1);
  }

  return (
    <>
      <h4>Count: {count}</h4>
      <button onClick={handleChangeIn}>Increment</button>
      <button onClick={handleChangeDe}>Decrement</button>
      {/* {<Counter
        handleChangeIn = {()=> handleChangeIn(count)}
        handleChangeDe = {()=> handleChangeDe(count)}
      />} */}
    </>
  )
}

export default App
