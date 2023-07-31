//  json api :   https://jsonplaceholder.typicode.com/todos
import axios from 'axios';
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

const apiURL = 'https://jsonplaceholder.typicode.com/todos'

// constant/variable


const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILOR = "GET_TODOS_FAILOR";




// state
const initTodosState ={
    todos :[],
    isLoading :false,
    error:null,
};


// actions

const getTodosRequest = () =>{

    return{
        type: GET_TODOS_REQUEST
    }
}

const getTodosSuccess = (todos) =>{

    return{
        type: GET_TODOS_SUCCESS,
        payload:todos
    }
}


const getTodosFailor = (error) =>{

    return{
        type: GET_TODOS_FAILOR,
        payload:error
    }
}

const todosReducer = (state=initTodosState,action) =>{
    switch (action.type) {
        case GET_TODOS_REQUEST :
            return{
                ...state,
                isLoading:true
        };
        case GET_TODOS_SUCCESS :
            return{
                ...state,
                isLoading:false,
                payload:action.payload
                // loading hower drkr nei tai isloading false
        };
        case GET_TODOS_FAILOR :
            return{
                ...state,
                isLoading:false,
                todos:action.payload
                 // loading hower drkr nei tai isloading false
        };

        default:
            break;
    }

}



// data fetch 
const fetchData = () =>{
    return(dispatch)=>{
       
        dispatch(getTodosRequest());
        axios.get(apiURL)
        .then(res=>{
           const todos = res.data;
           const titles = todos.map(todo=>todo.title)
           console.log(titles);
           dispatch(getTodosSuccess(titles));


        })
        .catch((error)=>{
            const errorMessage=(error.message);
            dispatch(getTodosFailor(errorMessage))

        });
       

    }
};




// const store = compose(
//     applyMiddleware(
//         thunk,
//         logger
//     )
// )(createStore)(counter);


const store = createStore(todosReducer,applyMiddleware(thunk.default))

store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch(fetchData())