import { useStoreActions } from "easy-peasy"

const DecrementBtn = () => {
  const {count,history} =  useStoreActions(actions => actions.count)
  const handleClick = () =>{
   count.increment(1)
    history.addHistory({actions:'decrement', count:1})
  }
   
  return (
    <button onClick={handleClick}>-</button>
  )
}

// export default DecrementBtn