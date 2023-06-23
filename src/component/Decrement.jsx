import { useDispatch } from 'react-redux'
import {decrement,addHistory,Decrement} from '../store'

const DccrementBtn = () => {
    const dispatch = useDispatch()

    const handleClick = () =>{
        dispatch(decrement(1))
        dispatch(addHistory({action :Decrement,count:1}))
    }
   
  return (
    <button onClick={handleClick}>-</button>
  )
}

export default DccrementBtn