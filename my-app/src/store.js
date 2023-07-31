import {applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import todosReducer from "./services/todosReducers/TodosReducer";

const store = createStore(todosReducer,applyMiddleware(thunk));
// store.subscribe()


export default store