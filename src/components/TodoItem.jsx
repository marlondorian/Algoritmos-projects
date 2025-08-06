const TodoItem = (todo, index, removeTodo)=>{
    return(
        <div className="todo-item"> 
            {todo}
            <button className="remove-btn" onClick={()=> removeTodo(index)}>
                Eliminar
            </button>
        </div>
    )
}
export default TodoItem;