import { useState } from "react";

export default function List({name, key,setSection,section}) {
  const [isedit, setIsEdit] = useState(false);
  return (
    <li key={key}>
      <input type="text" onChange={(e)=>{
        setSection((pre)=>({
          ...pre ,
          [key]:[...section[key] , e.target.value]
        }))
      }} disabled={!isedit} value={name} />
      <button onClick={() => setIsEdit(!isedit)}>Edit</button>
    </li>
  );
}
