import { useEffect, useState } from "react"

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const URL = "http://localhost:8175/users"
    const fetchUser = async () => {
      const res = await fetch(URL);
      const data = await res.json();

      setUsers(data)
    }

    fetchUser()
  }, [])

  return (
    <div>
      {
        users.map((user) => {
          return <div key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <h2>{user.course}</h2>
          </div>
        })
      }
    </div>
  )
}

export default App