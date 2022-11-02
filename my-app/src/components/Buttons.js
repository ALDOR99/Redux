import react from 'react'
import { useDispatch } from 'react-redux'
import { arttir, azalt } from '../store/actions/Counter'

//------------------------------------------------------

function Buttons() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(arttir())}>+</button>
      <button onClick={() => dispatch(azalt())}>-</button>
    </div>
  )
}
export default Buttons
