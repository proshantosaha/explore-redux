import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getALLTodos } from '../services/todosActions/TodosActions';

const Todos = () => {
    const {isLoading,todos,error}= useSelector((state) => state);
   
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getALLTodos())

    },[])

    return (

        <div className='App'>
            
            <h2>this is todos</h2>
            {isLoading && <h3>Loading ....</h3>}
            {error && <h3>{error.message}</h3>}
            {/* {isLoading && <h3>Loading ...</h3>} */}

            <section>{todos && todos.map((todo)=>{
                return <article key={todo.id}>
                    <h4>{todo.id}</h4>
                    <h4>{todo.title}</h4>


                </article>

            })}</section>

        </div>
    )
}

export default Todos