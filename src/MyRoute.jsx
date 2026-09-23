import React from 'react'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import { Route, Routes } from 'react-router-dom'
import RecipeDetail from './pages/RecipeDetail'

const MyRoute = () => {
  return (
   <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/recipe/:id' element={<RecipeDetail/>} />
   </Routes>
  )
}

export default MyRoute
