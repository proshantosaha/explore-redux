import {useDispatch, useSelector} from 'react-redux'
import { clearHistory } from '../store-redux';

const History = () => {
    const history = useSelector(state => state.history)
   const dispatch = useDispatch()


  return (
    <div>
       <p>Historis <button onClick={()=>dispatch(clearHistory())}>Clear History</button></p>
       <ul>
        {history.map((item)=>(
            <li key ={item.id}>
                {' '}
                {item.action}-{item.count}-{item.time.toISOString()}{' '}
             </li>
        ))}
       </ul>
    </div>
  )
}

export default History