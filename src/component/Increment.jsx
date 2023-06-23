import { useDispatch } from 'react-redux'
import {increment,addHistory,Increment} from '../store'

const IncrementBtn = () => {
    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(increment(1))
        dispatch(addHistory({action :Increment,count:1}))
    }
   
  return (
    <button onClick={handleClick}>+</button>
  )
}

export default IncrementBtn