import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { updatebook } from './bookSclice'
import { useDispatch } from 'react-redux/es/exports'

const Edit = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const dispatch=useDispatch()


  const[title,Settitle]=useState(location.state.title)
  const[author,Setauthor]=useState(location.state.author)
  const[id,Setid]=useState(location.state.id)

    const Submitdata=(e)=>{
       e.preventDefault();
       dispatch(updatebook({id,title,author}))
        navigate("/show-book",{replace:true})
    }


  return (
    <div>
        <form onSubmit={Submitdata}>
        <div className='form-field'>
          <label htmlFor='title'>Title: </label>
          <input type="text" id="title" value={title} onChange={(e)=>{Settitle(e.target.value)}} required/>
        </div>

        <div className='from-field'>
          <label htmlFor='author'>Aurhor: </label>
          <input type="text" id="author" value={author} onChange={(e)=>{Setauthor(e.target.value)}} required/>
        </div>
        <button type='submit'>Edit Book</button>
      </form>
    </div>
  )
}

export default Edit
