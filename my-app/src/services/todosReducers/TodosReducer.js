import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS,GET_TODOS_FAILOR} from '../todosConstent/TodosConstent'



const initState = {
    isLoading: false,
    todos: [],
    error: null
}


const todosReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
            
                isLoading:false,
                todos:action.payload,
                error:null,
                 // loading hower drkr nei tai isloading false

            }
        case GET_TODOS_FAILOR:
            return {
                isLoading:false,
               todos:[],
                error:action.payload
                 // loading hower drkr nei tai isloading false
            }

        default:
          return  state;
    }
}
export default todosReducer