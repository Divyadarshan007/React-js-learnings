import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, fetchTodo } from "./features/todos/todoSlice"

const App = () => {
  const [input, setInput] = useState({
    task: '', priority: ''
  })
  const { data } = useSelector(store => store.todos)
  console.log(data);
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodo())
  }, [])
  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value })
  }
  return (
    <div>
      <div>
        <label htmlFor="task">Task</label>
        <input type="text" id="task" onChange={handleChange} value={input.task} />
      </div>
      <div>
        <label htmlFor="task">Priority</label>
        <select name="" id="priority" onChange={handleChange} value={input.priority}>
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <button className="" onClick={() => dispatch(addTodo(input))}>Add Task</button>

      {
        data.map((todo) => {
          return <div>
            <h1>{todo.task}||{todo.priority}</h1>
          </div>
        })
      }
    </div>
  )
}

export default App