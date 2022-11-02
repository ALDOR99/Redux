import react from 'react'
import { useSelector } from 'react-redux'

//------------------------------------------

function Counter() {
  const { counter } = useSelector((state) => state)
  //console.log(counter)
  return <h1>{counter}</h1>
}

export default Counter
