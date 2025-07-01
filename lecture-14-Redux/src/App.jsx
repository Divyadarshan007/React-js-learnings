import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, reset } from './redux/action';

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  return (
    <div>
      <h1>count: {state}</h1>
      <button onClick={()=>dispatch(increament())}>add</button>
      <button onClick={()=>dispatch(decreament())}>minus</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default App