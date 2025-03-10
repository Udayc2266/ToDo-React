import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function todolist (){
    let [todo , setTodo] = useState([{ task :"Coding" , id: uuidv4()}]);
    let [newtodo , setNewtodo]= useState("")
    let updateTodovalue = (event)=>{
        setNewtodo(event.target.value);
    }
    let addTodo = ()=>{
        setTodo((preTodo)=>{
            return [...preTodo , {task:newtodo, id :uuidv4()}]
        })
        setNewtodo("")
    }

    let deleteTodo=(id)=>{
        setTodo((preTodo) => todo.filter((preTodo)=> preTodo.id != id))
        
    }

    let doneTodo =(id)=>{
        setTodo((todo)=>todo.map((todo)=>{
            if (todo.id == id)
            return {
                ...todo,
                task: todo.task.toUpperCase()
            } 
            else {
                return todo
            }
            
        }))
    }

    return (
        <div>
            <input className="input" value={newtodo} onChange={updateTodovalue}  placeholder="Add Task" />
            <button className="button" onClick={addTodo}>Add</button>
            <br /><br /><hr />
        <h3>ToDo list</h3>
        <ul>
            {
                todo.map((todo)=>{
                    return<li className="ul" key={todo.id}><span>{todo.task}</span>
                    <button className="but" onClick={()=>deleteTodo(todo.id)}>delete</button>
                    <button className="but" onClick={()=>doneTodo(todo.id)}>done </button>
                    </li>
                })
            }
        </ul>
        </div>
    )
}