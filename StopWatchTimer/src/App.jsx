import React from 'react'
import Timer from './Components/Timer'
import './App.css'

function App() {
  const [showComponent, setShowComponent] = React.useState(false)
  
  return (
    <>
      {showComponent ? <Timer /> : <></>}
      <button onClick={()=> setShowComponent(!showComponent)}>{!showComponent ? "Show Timer App" : "Hide Timer App"}</button>
      {/* <Timer /> */}
    </>
  )
}

export default App