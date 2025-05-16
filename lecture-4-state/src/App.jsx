import { useEffect, useState } from "react"

const App = () => {
  const [count, setCount] = useState(0);
 
  return (
    <div className="container my-5">
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={() => {
        setCount(count + 1);
      }}>click me</button>
    </div>
  )
}

export default App