import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CustomButton from './components/button'
import DeleteButton from './components/deleteButton'

function App() {
  let [todo, setTodo] = useState("")
  let [todos, setTodos] = useState([])

  const addTodo = () => {
    setTodos([...todos, todo])
  }

  return (
    <div className="main">
      <h1>useState with todo</h1>

      <input
        value={todo}
        type={"text"}
        onFocus={
          (e) => {
            e.target.value = "";
          }
        }
        onChange={
          (e) => setTodo(e.target.value)
        }
      />

      <CustomButton
        content="Add Todo"
        fontcolor={"lightgreen"}
        bgcolor={"darkgreen"}
        onclick={
          (e) => {
            if (e.target.parentElement.children[1].value !== "") {
              addTodo()
              // console.log("hi")
            }
            e.target.parentElement.children[1].value = ''
          }
        }
      />

      {todos.map((data, ind) => (
        <CustomButton
          key={ind}
          value={data}
          content={data}
          fontcolor={"black"}
          bgcolor={"lavender"}
          childButton={
            <DeleteButton
              key={ind}
              content={"delete"}
              onclick={
                (e) => {
                  let content = e.target.parentElement.innerHTML.split("<")
                  content = content[0]
                  let index = todos.indexOf(content)
                  todos.splice(index, 1)
                  setTodos([...todos])
                }
              }
            />
          }
        />
      ))
      }

    </div>
  )
}

export default App
