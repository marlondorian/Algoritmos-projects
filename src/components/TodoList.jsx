import TodoItem from "./TodoItem";

const TodoList = ({todos,removeTodo}) =>{
    return (
        <div className="todo-list">
            {todos.length===0?(
                <p>No hay tareas pendientes</p>
            ) : (
                todos.map((todo,idx)=>(
                    <TodoItem todo={todo} index={idx} removeTodo={removeTodo} key={idx}/>
                ))
            )}
        </div>
    )
}
export default TodoList;