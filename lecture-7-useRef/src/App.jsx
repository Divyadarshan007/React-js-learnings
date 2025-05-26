import { useRef, useState } from "react"
const App = () => {
  const [count, setCount] = useState(0);
  const valRef = useRef(1);
  const inputRef = useRef(null);
  return (
    <div>
      <h1>{count}</h1>
      <h2>count of render{valRef.current}</h2>
      <input type="text" ref={inputRef}/>
      <button onClick={() => {
        valRef.current++;
        setCount(count + 1);
        inputRef.current.value="";
      }}>click</button>
    </div>
  )
}

export default App