import { useDebugValue, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./component/List";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();
  // console.log("🚀 ~ App ~ name:", name)
  const [error, setError] = useState("");
  const [sectionName, setSectionName] = useState("");
  console.log("🚀 ~ App ~ sectionName:", sectionName);
  const [innerData, setData1] = useState("");
  const [section, setSection] = useState({});
  const [isedit, setIsEdit] = useState(false);
  console.log("🚀 ~ App ~ section:", section);
  // const allKeys = Object.keys(section)
  // console.log("🚀 ~ App ~ allKeys:", allKeys)
  const addSection = () => {
    if (sectionName.trim() !== "") {
      setSection((prevSection) => ({
        ...prevSection,
        [sectionName]: [], // Dynamically add a new section with an empty array
      }));
      setSectionName(""); // Clear the input after adding the section
    } else {
      console.warn("Section name cannot be empty!");
    }
  };

  const addData = () => {
    if (innerData !== "" && name !== null) {
      Object.keys(section).map((data) => {
        if (data == name) {
          setSection((pre) => ({
            ...pre,
            [data]: [...section[data], innerData],
          }));
        }
        setData1("");
      });
    }
  };

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
        <select
          onChange={(e) => {
            setName(e.target.value);
          }}
        >
          <option value="null" selected>
            Select Section
          </option>
          {Object.keys(section).map((key, index) => (
            <option value={key} key={index}>
              {key.toUpperCase()}
            </option>
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
          {Object.keys(section).map((data) => (
            <div className="section" key={data}>
              <h1 className="header">{data.toUpperCase()}</h1> <hr />
              <div className="lists">
                <ul>
                  {section[data].map((item, index) => (
                    <List name={item} key={data} section={section} setSection={setSection}/>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
