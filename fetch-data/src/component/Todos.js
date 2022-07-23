import React, { useEffect } from 'react'
import { GetallTodos } from '../services/action/TodosAction';
import { useDispatch,useSelector } from 'react-redux'


const Todos = () => {
    const todo=useSelector(state=>state)
    const {isLoading,todos,error}=todo;

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(GetallTodos())
    },[])

  return (
    <div>
        <h1>Todo-App</h1>
        {isLoading&& <h2>Loading.....</h2> }
        {error&&<h2>error.message</h2>}
        <section>
            {todos&& todos.map((t)=>{
              return <article key={t.id}>
                <h4>{t.id}</h4>
                <h4>{t.title}</h4>
              </article>
            })}
        </section>
    </div>
  )
}

export default Todos