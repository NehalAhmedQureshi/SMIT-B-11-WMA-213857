import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className="text-red-600 bg-blue-500 p-3 border-4 border-red-600 text-3xl font-bold underline">
    Hello world!
  </h1>

  )
}

export default App
