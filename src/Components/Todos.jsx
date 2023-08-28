import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import {removeTodo} from '../Features/todo/todoSlice'
 

function Todos() {
   const todos =  useSelector((state) => state.todos)
    console.log(todos)
    console.log(todos.text)
const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    
    {todos.map((todo)=>{
        return(
           <ul>
            <li>
                {todo.text}
                <button onClick={()=> dispatch(removeTodo(todo.id))}>Remove</button>
            </li>

          
           </ul>
        )
    })}
    </>
  )
}

export default Todos