import {createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
 
const initialProducts ={

    products : ["sugar","salt"],
    numberofProducts :2,

}


const GET_PRODUCT =  "GET_PRODUCT"
const ADD_PRODUCT =  "ADD_PRODUCT"



const getProductAction = () =>{
     return{
        type: GET_PRODUCT
     };
};

const addProductAction = (product) =>{
    return{
       type: ADD_PRODUCT,
       payload : product,
    }
}

const productReducer = (state=initialProducts,action) =>{

    switch (action.type) {
        case GET_PRODUCT :
            return{
                ...state,
        };
        case ADD_PRODUCT:
            return{
                product:[...state.products, action.payload],
                numberofProducts: state.numberofProducts + 1
        };
    
        default:
          return  state;
    }

}


const middleware =applyMiddleware(logger())

const store = createStore(productReducer,middleware)

store.subscribe(()=>{
    console.log(store.getState());
}) 
 

store.dispatch(getProductAction())
store.dispatch(addProductAction("rice"))

