import { useState } from "react";

const TodoForm = (addTodo) => {

    const [value, setValue] = useState('')


    const handleSubmit = (e) =>{
        e.preventDefault()
        if (!value.trim()) return;
        addTodo(value)
        setValue('')    
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="todo-input"
                value={value}
                onChange={e=> setValue(e.target.value)}
                placeholder="Agrega una tarea...."
            
            
            />
            <button type="submit" className="todo-btn" >Agregar</button>
        </form>
    )


}

export default TodoForm