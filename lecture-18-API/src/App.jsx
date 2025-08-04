import { useEffect, useRef, useState } from "react"
const App = () => {
  const [users, setUsers] = useState([])
  const idRef = useRef(null)
  const [input, setInput] = useState({
    name: '', age: ''
  })

  console.log(idRef)
  const URL = "http://localhost:8175/users"
  const fetchUser = async () => {
    const res = await fetch(URL);
    const data = await res.json();

    setUsers(data)
  }
  useEffect(() => {
    fetchUser()
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (idRef.current) {
      await fetch(`${URL}/${idRef.current}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(input)
      })

      fetchUser()
      setInput({ name: '', age: '', course: '' })
      idRef.current = null;
      return

    }
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(input)
    })

    fetchUser()
    setInput({ name: '', age: '', course: '' })

  }

  const handleDelete = async (id) => {
    await fetch(`${URL}/${id}`, {
      method: "DELETE",
    })
    fetchUser()
  }

  const handleEdit = async (id) => {
    const res = await fetch(`${URL}/${id}`);
    const data = await res.json();

    setInput(data)
    idRef.current = id;

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input.name} id="name" onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} />
        <input type="text" value={input.age} id="age" onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} />
        <input type="text" value={input.course} id="course" onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} />
        <button>submit</button>
      </form>
      <div>

        {
          users.map((user) => {
            return <div key={user.id}>
              <h1>{user.name}</h1>
              <h2>{user.age}</h2>
              <h2>{user.course}</h2>
              <button onClick={() => handleDelete(user.id)}>X</button>
              <button onClick={() => handleEdit(user.id)}>up</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App