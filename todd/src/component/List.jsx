import { useState } from "react";

export default function List({name, key}) {
  const [isedit, setIsEdit] = useState(false);
  return (
    <li key={key}>
      <input type="text" disabled={!isedit} value={name} />{" "}
      <button onClick={() => setIsEdit(!isedit)}>Edit</button>
    </li>
  );
}
