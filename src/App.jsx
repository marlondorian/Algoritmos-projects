import { useState } from "react"
import Button from "./components/Button";
import TodoForm from "./components/TodoForm";

function App() {

  const [todos, setTodos] = useState();

  const addTodo = (todo) =>{
    setTodos([...todos,todo])
  }

  // setCount(10);


  return (
    <>
      <div>
        <div>Hola Mundo</div>
        <TodoForm addTodo={addTodo}/>
      </div>
    </>
  )
}


export default App
