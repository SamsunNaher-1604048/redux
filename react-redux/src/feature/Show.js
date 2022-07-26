import React from 'react'
import { useSelector,useDispatch}  from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBook } from './bookSclice'


const Show = () => {
  const book=useSelector((state)=>state.bookReducer.books)
   const dispatch=useDispatch()

  const DeleteBook=(id)=>{
      dispatch(deleteBook(id))
  }

  return (
    <div>
      <h2>List of Books</h2>
      <thred>
        <tr>
          <th>Title</th>
          <th>Auther</th>
          <th>Action</th>
        </tr>
      </thred>
      <tbody>
        {book&& book.map((b)=>{
          const{id,title,author}=b
          return<tr key={id}>
            <td>{title}</td>
            <td>{author}</td>
            <td>
              <button onClick={()=>{DeleteBook(id)}}>Delete</button>
              <Link to="/edit-book" state={{id,title,author}}><button>Edit</button></Link>
            </td>
          </tr>
        })}
      </tbody>
    </div>
  )
}

export default Show