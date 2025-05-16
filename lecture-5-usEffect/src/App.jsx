import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [imgUrl, setImgUrl] = useState("")

  let URL = "https://dog.ceo/api/breeds/image/random";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setImgUrl(data.message);
      })
  }, [count])

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

      {imgUrl == "" ? <div class="spinner-border m-5" role="status">
        <span class="visually-hidden">Loading...</span>
      </div> : <img src={imgUrl} alt="" width={'20%'} />}
    </>
  )
}

export default App
