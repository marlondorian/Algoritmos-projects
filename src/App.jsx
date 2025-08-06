import { useState } from "react"
import Button from "./components/Button";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  let [todos, setTodos] = useState();

  const addTodo = (todo) =>{
    setTodos([...todos,todo])
  }
  const removeTodo = (todo) =>{
    console.log('w');
    
  }

  // setCount(10);


  return (
    <>
      <div className="container">
        {/* <div>Hola Mundo</div> */}
        <TodoForm addTodo={addTodo()}/>
        <TodoList todos={todos} removeTodo={removeTodo()}/>
    </div>
    </>
  )
}


export default App
