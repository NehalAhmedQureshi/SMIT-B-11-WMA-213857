// import { Input } from 'postcss'
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/react";

function App() {
  const [password, setPassword] = useState("est01");
  const [length, setLength] = useState(8);
  const [isChar, setIsChar] = useState(false);
  const [isNum, setIsNum] = useState(false);
  const [reactColor, setReactColor] = useState('red')
  const [reactMsg, setReactMsg] = useState('Weakest Password')
  const passRef = useRef(null)
  const passCopyToClipboard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passChecker = useCallback(()=>{
    // console.count(length)
    if(length >= 14 ){
      if(isChar && isNum){
        setReactColor("green")
        setReactMsg('Strongest Password')
      } else if (isChar || isNum) {
        setReactMsg('Strong Password')
        setReactColor('lightGreen')
      } else {
        setReactMsg('Weak Password')
        setReactColor('orange')
      }
      
    }else{
      setReactMsg('Weakest Password')
        setReactColor('red')
    }
  } , [password, isChar , isNum])

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "1234567890";
    const specialChar = "!@#$%^&*()_-{}[]|<>,.+=?/";

    if (isChar) str += specialChar;
    if (isNum) str += num;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isChar, isNum, setPassword]);

  useEffect(()=>{
    passChecker()
  } , [password])

  useEffect(() => {
    passGen();
    passChecker();
  }, [length, isChar, isNum,passGen]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-gray-500 h-3/5 sm:h-1/2  text-center w-5/6 sm:w-9/12 md:h-2/6 p-4 rounded-lg py-3 flex flex-col md:justify-evenly justify-center">
        <h1 className="text-2xl ">Password Generator</h1>
        <div>
          <div className="my-2 p-3 flex-col md:flex-row md:gap-0 gap-2  flex justify-center items-center">
            <Button className="bg-blue-500 w-auto h-10 rounded-lg text-white font-semibold text-medium md:rounded-xl  md:rounded-r-none" onClick={() => {
              passGen() 
              passChecker()
            }}>Re-generate 🔃</Button>
            <input
              className="h-10 w-full rounded-lg md:rounded-none text-center md:text-start sm:w-4/5 px-3 text-black text-xl font-semibold font-mono placeholder:text-black placeholder:font-semibold active:border-none focus:border-none focus-visible:outline-none
             border-none"
              readOnly
              placeholder={password}
              ref={passRef}
              value={password}
            />
            <Button onClick={passCopyToClipboard} className="bg-blue-500 rounded-lg h-10 text-white font-semibold md:text-medium  md:rounded-xl md:rounded-l-none">
              Copy
            </Button>
          </div>
        </div>
        <div
          className="font-mono text-xl font-normal"
          style={{ color: reactColor ? reactColor : white }}
        >{reactMsg}</div>
        <div className="flex flex-wrap gap-2 justify-center">
          <div className="flex gap-1">
            <input
              id="range"
              type="range"
              min={1}
              max={40}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="range" className="font-semibold">Length {length}</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" id="char" defaultChecked={isChar} onClick={() => { setIsChar((prev) => !prev) }} />
            <label htmlFor="char" className="font-semibold hover:text-blue-500 active:text-blue-700 active:animate-bounce">Character</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" id="num" defaultChecked={isNum} onClick={() => { setIsNum((prev) => !prev) }} />
            <label htmlFor="num" className="font-semibold hover:text-blue-500 active:text-blue-700 active:animate-bounce">Number</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
