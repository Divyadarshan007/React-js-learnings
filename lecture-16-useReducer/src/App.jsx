import { useReducer } from "react"

let initialState = {
  users: [
    { id: 1, name: "Aman" },
    { id: 2, name: "Raman" },
    { id: 3, name: "Baman" }
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_USERS":
      return {
        users: []
      }
    case "DELETE":
      let { id } = action.payload
      let newUsers = state.users.filter((user) => {
        return user.id !== id;
      })

      return {
        users: newUsers
      }
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleClear = () => {
    dispatch({ type: "CLEAR_USERS" })
  }

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE", payload: {
        id,
      }
    })
  }
  return (
    <div>
      {
        state.users.map((user) => {
          return <div>
            <p>{user.name}</p>
            <button onClick={() => handleDelete(user.id)}>X</button>
          </div>
        })
      }
      <div>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  )
}

export default App