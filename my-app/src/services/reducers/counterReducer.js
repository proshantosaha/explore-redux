import { INCREMENT, DECREMENT, RESET } from  "../constent/counterConstent";

const initCount = { count: 0}

const CounterReducer = (state = initCount, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        case RESET:
            return {
                state,
                count: 0
            }


        default:
          return  state;
    }


}


export default CounterReducer