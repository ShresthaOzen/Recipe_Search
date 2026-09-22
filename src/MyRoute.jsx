import React from 'react'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import { Route, Routes } from 'react-router-dom'

const MyRoute = () => {
  return (
   <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favourites' element={<Favourites />} />
   </Routes>
  )
}

export default MyRoute
