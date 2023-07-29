// state - count:0
// action - increament,decreament,reset
// reducer
// store
// dispetch

import { createStore } from "redux"


const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

const RESET = "RESET"



const countState = {
    count:0 
}


const increamentAction = () =>{
    return {
        type:INCREMENT
    }
}
const decreamentAction = () =>{
    return {
        type:DECREMENT
    }
}
const resetAction = () =>{
    return {
        type:RESET
    }
}


const countReducer = (state=countState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count : state.count + 1
        };
            
        case DECREMENT:
        return{
            ...state,
            count : state.count - 1
        };
        case RESET:
            return{
                ...state,
                count : 0
         };
    
        default:
            state;
    }
}



const store = createStore(countReducer)

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(increamentAction());
store.dispatch(decreamentAction());
store.dispatch(resetAction()) ;

