import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import CustomButton from './components/button'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [textcolor, settextcolor] = useState('black')
  const [bgcolor, setbgcolor] = useState('white')
  return (
    <div className="main">
      <div className="themes">
        <CustomButton onclick={() => {
          setbgcolor('pink'); settextcolor('red')
        }}
          bgcolor={'pink'}
          fontcolor={'red'}
          content={'RED'} />
        <CustomButton onclick={() => {
          setbgcolor('skyblue'); settextcolor('blue')
        }}
          bgcolor={'skyblue'}
          fontcolor={'blue'}
          content={'BLUE'} />
        <CustomButton onclick={() => {
          setbgcolor('lightgreen'); settextcolor('green')
        }}
          bgcolor={'lightgreen'}
          fontcolor={'green'}
          content={'GREEN'} />
        <CustomButton onclick={() => {
          setbgcolor('grey'); settextcolor('black')
        }}
          bgcolor={'grey'}
          fontcolor={'black'}
          content={'BLACK'} />
        <CustomButton onclick={() => {
          setbgcolor('darkgrey'); settextcolor('white')
        }}
          bgcolor={'darkgrey'}
          fontcolor={'white'}
          content={'WHITE'} />
      </div>
      <div className="screen" style={{
        color: textcolor ? textcolor : "black",
        backgroundColor: bgcolor ? bgcolor : "white",
        borderColor: textcolor ? textcolor : 'black',
      }}> <h1>TRY</h1></div>
    </div>
  )
}

export default App
