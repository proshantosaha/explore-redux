import {useStoreState} from 'easy-peasy'

const Count = () => {
 const count= useStoreState(state=>state.count)

  return (
    <div>Counter:{count.value}</div>
  )
}

export default Count