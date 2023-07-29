
import Count from './component/Count'
import IncrementBtn from './component/increment'
import DccrementBtn from './component/decrement'
import History from './component/History'

const App = () => {

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