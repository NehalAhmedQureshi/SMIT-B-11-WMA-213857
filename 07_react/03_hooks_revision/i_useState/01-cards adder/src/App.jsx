import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CustomInput from '../../../../03-hooks/ii-useEffect/src/components/customInput'
import CustomButton from './components/button'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'

function App() {
  // const [count, setCount] = useState(0)
  const [text, settextvalue] = useState(null)
  const [fontcolorvalue, setfontcolorvalue] = useState("black")
  const [bgcolorvalue, setBgcolorvalue] = useState('black')
  const [card, setcards] = useState([])

  const cardDataAdder = () => {
    console.log('hi')
    const cardData = {
      text: text,
      bgcolor: bgcolorvalue,
      textcolor: fontcolorvalue,
      createdAt: Date.now()
    }
    setcards([...card, cardData])
    console.log(card)

  }

  return (
    <div className="main">
      <h1 > card adder</h1 >
      <CustomInput
        placeHolder={"Enter text....."}
        inputValue={text}
        bgcolor={"skyblue"}
        onchange={(e) => {
          settextvalue(e.target.value)
          console.log(text)
        }}
      />
      <label htmlFor="fontcolorvalue">Select Font Color</label>
      <CustomInput
        placeHolder={"Enter Font Color....."}
        inputid={'fontcolorvalue'}
        // inputValue={text}
        inputtype={'color'}
        bgcolor={"skyblue"}
        inputValue={fontcolorvalue}
        onchange={(e) => {
          setfontcolorvalue(e.target.value)
          console.log(fontcolorvalue)
        }}
      />
      <label htmlFor="bgcolorvalue">Select Background Color</label>
      <CustomInput
        // placeHolder={"Enter text....."}
        inputid={'bgcolorvalue'}
        bgcolor={"none"}
        inputValue={bgcolorvalue}
        inputtype={"color"}
        onchange={(e) => {
          setBgcolorvalue(e.target.value)
          console.log(bgcolorvalue)
        }}
      />
      <CustomButton
        onclick={cardDataAdder}
        content={'Add Card'}
        online
      />

      <div className="cards">
        {card.map((data, index) => (
          <div key={index} className="card" style={{
            backgroundColor: data.bgcolor,
            color: data.textcolor,
          }} >{data.text} <i></i></div>
        ))}
      </div>
    </div>
  )
}

export default App
