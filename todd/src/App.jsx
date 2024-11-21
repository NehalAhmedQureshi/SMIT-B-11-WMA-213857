import { useDebugValue, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name , setName] = useState()
  console.log("🚀 ~ App ~ name:", name)
  const [error , setError] = useState('')
  const [sectionName, setSectionName] = useState("");
  const [innerData, setData1] = useState("");
  const [section, setSection] = useState([]);
  console.log("🚀 ~ App ~ section:", section)
  // console.log("🚀 ~ App ~ data:", data)
  // console.log("🚀 ~ App ~ section:", section)
  const addSection = () => {
    if(sectionName != ''){
      setSection([...section,{sectionName , data:[]}])
    }
    setSectionName('')
  }
  const addData=()=>{
    if (innerData !== '' && name !== null) {
        section.map((data,index)=>{
          console.log(data)
          const currentData = data.sectionName == name ? data.data : []
          const newArr = section.filter((a)=> a.sectionName !== name)
          console.log("🚀 ~ section.map ~ currentData:", currentData)
          setSection(
            [...newArr , {
              sectionName : name,
              data:[...currentData,innerData]
            }]
          )
          setData1('')
        })
    }
  }

  return (
    <div className="main">
      <div className="addCard">
        <h1>Add Cards</h1>
        <input
          type="text"
          className="cardData"
          onChange={(e) => setData1(e.target.value)}
          placeholder="Card Data..."
          value={innerData}
        />
        <select onChange={(e)=>{setName(e.target.value)}}>
          <option value="null" selected>Select Section</option>
          {section.map((data,index)=>(
            <option value={data.sectionName}>{data.sectionName}</option>
          ))}
        </select>
        <button onClick={addData}>Add</button>
      </div>
      <div className="list">
        <div className="addSections">
          <h2>Add Sections</h2>
          <div className="error">{error}</div>
          <input
            type="text"
            className="addSections"
            onChange={(e) => setSectionName(e.target.value)}
            placeholder="Add Section Name"
            value={sectionName}
          />
          <button onClick={addSection}>Add</button>
        </div>
        <div className="sections">
          {section.map((data, index) => (
            <div className="section">
              <h1 className="header">{data.sectionName}</h1>
                <div className="lists">
                  {data.data.map((innerData , index1 ) => (
                    <input type="text" value={innerData} disabled={true} />
                  ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
