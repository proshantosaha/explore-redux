
import Count from './component/Count'
import IncrementBtn from './component/increment'
import DccrementBtn from './component/decrement'
import { useSelector } from 'react-redux'
import History from './component/History'

const App = () => {
  const state = useSelector((state)=> state)
  console.log(state);
  return (
    <div>
      <Count/>
      <div>
      <IncrementBtn/>
      <DccrementBtn/>
      </div>
      
      <History/>
    </div>
  )
}

export default App