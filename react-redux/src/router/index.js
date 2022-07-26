import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from '../feature/Add'
import Edit from '../feature/Edit'
import Show from '../feature/Show'
import Navber from '../layouts/Navber'
import Error from '../pages/Error'
import Home from '../pages/home'

const Index = () => {
  return (
     <BrowserRouter>
     <Navber/>
       <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/show-book' element={<Show/>}/>
          <Route path='/add-book' element={<Add/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/edit-book' element={<Edit/>}/>
        </Routes>
       </main>
     </BrowserRouter>
  )
}

export default Index