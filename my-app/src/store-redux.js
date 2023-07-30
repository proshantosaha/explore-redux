
import { createStore,combineReducers } from 'redux'

export const Increment = "Increment"

export const Decrement = "Decrement"

// {
//   type : Increment
// }


export const increment = (payload) =>({
  type:Increment,
  payload,
})


export const decrement = (payload) =>({
    type:Decrement,
    payload,
  })

const countReducer = (state = 0, action)=>{

  switch(action.type){
    case Increment:
        return state + action.payload;

   case Decrement:
         return state - action.payload
        
    default:
        return state;


  }
  return 0
}



const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
const CLEAR_HISTORY = 'CLEAR_HISTORY';

let id = 1;

function generateID(){
    return id++
}


export const addHistory = ( history) =>({
    type : ADD_TO_HISTORY,
    payload:{
        id:generateID(),
        action:history.action,
        count: history.count,
        time : new Date(),
    },
});

export const clearHistory = () =>({
    type:CLEAR_HISTORY
})



 const historyReducer = (state = [], action) =>{
    switch(action.type){
        case ADD_TO_HISTORY:
            return [...state, action.payload];
    
       case CLEAR_HISTORY:
             return []
            
        default:
            return state;
    
    
      }
}


const store = createStore(combineReducers({
  count : countReducer,
  history: historyReducer

}));

export default store