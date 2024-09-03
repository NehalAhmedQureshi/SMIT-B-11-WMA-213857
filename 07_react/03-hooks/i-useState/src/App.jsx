import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CustomButton from './components/button'

function App() {

  const [counter , setCounter] = useState(0)

  return(
    <div className="main">
      <h1>use state with number</h1>
      <h1>count {counter}</h1>
      <CustomButton 
        text='+1'
        onClick={()=>{
          setCounter(counter+1)
        }}
        />
      <CustomButton 
        text='+2'
        onClick={()=>{
          setCounter(counter+2)
        }}
      />
      <CustomButton 
        text='+5'
        onClick={()=>{
          setCounter(counter+5)
        }}
      />
      <CustomButton 
        text='Reset'
        onClick={()=>{
          setCounter(0)
        }}
      />
    </div>
  )
}

export default App
