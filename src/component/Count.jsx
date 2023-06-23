import {useSelector} from 'react-redux'

const Count = () => {
    const count = useSelector(state => state.count)

  return (
    <div>Counter:{count}</div>
  )
}

export default Count