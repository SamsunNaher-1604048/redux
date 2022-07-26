
import React, { useState } from 'react'
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBook } from './bookSclice'
import { v4 as uuidv4 } from 'uuid';


const Add = () => {
  const[title,Settitle]=useState("")
  const[author,Setauthor]=useState("")
  const navigate=useNavigate()

  //const numberOfbooks = useSelector((state)=>state.bookReducer.books.length)
  const dispatch=useDispatch()

  const Handlesubmit=(e)=>{
     e.preventDefault();
     const book={id:uuidv4(), title, author}
     dispatch(addBook(book))
     navigate("/show-book",{replace:true})
  }

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={Handlesubmit}>
        <div className='form-field'>
          <label htmlFor='title'>Title: </label>
          <input type="text" id="title" value={title} onChange={(e)=>{Settitle(e.target.value)}} required/>
        </div>

        <div className='from-field'>
          <label htmlFor='author'>Aurhor: </label>
          <input type="text" id="author" value={author} onChange={(e)=>{Setauthor(e.target.value)}} required/>
        </div>
        <button type='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default Add
