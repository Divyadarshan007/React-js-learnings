import { useCallback, useState } from "react"
import List from "./components/List";

const App = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([{ id: 1, name: 'raman' }, { id: 2, name: 'baman' }, { id: 3, name: 'chaman' },])

  const handleCount = () => {
    setCount(count + 1);
  }

  const handleRemove = useCallback((id) => {
    const newArr = users.filter((user) => {
      return user.id !== id;
    })
    setUsers(newArr)

  }, [users])
  return (
    <div>
      <h1>count: {count}</h1>
      <button className="border" onClick={handleCount}>Click</button>
      <List users={users} handleRemove={handleRemove} />
    </div>
  )
}

export default App