import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const reducer = (state, action) => {
    console.log("🚀 ~ reducer ~ action:", action.type)
    console.log("🚀 ~ reducer ~ state:", state)

    switch (action.type) {
      case 'add':
        // Create a new state based on the current state
        return {
          ...state,
          isdislike : state.isLike ? true : false,
          isLike : !state.isLike,
          add: state.isLike ? 0 : 1, // Increment the click count
        };
        case 'dislike':
        // Create a new state based on the current state
        return {
          ...state,
          isdislike : !state.isdislike,
          isLike : state.isdislike ? true : false
        };
      default:
        return state; // Return the current state if action type is not matched
    }

  }

  const initialValue = {
    isLike:false,
    isdislike:false,
  }

  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <>
      <div>{state.isLike ? 'You Like this post ' : state.isdislike ? "You dislike this post":"You didn't like this post"}</div>

      <button onClick={() => {
        dispatch({ type: 'add' });
      }}>
        <i class={state.isLike ? 'bx bxs-like' : 'bx bx-like'} onClick={()=>{dispatch({type:'like'})}}></i>
      </button>
      <button onClick={() => {
        dispatch({ type: 'dislike' });
      }}>
        <i class={state.isdislike ? 'bx bxs-dislike' : 'bx bx-dislike'}></i>
      </button>
    </>
  )
}
export default App
