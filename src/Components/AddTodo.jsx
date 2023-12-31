import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../Features/todo/todoSlice'
 
function AddTodo() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e) =>{
        // e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

  return ( 
    <div className='mainheader'>

        <form onSubmit={addTodoHandler}>
            <input type="text" placeholder='Add your todo'  value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button type='submit'>Add</button>
            <button>remove</button>
        </form>
    </div>
  )
}

export default AddTodo