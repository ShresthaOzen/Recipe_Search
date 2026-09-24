import React from 'react'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import { Route, Routes } from 'react-router-dom'
import RecipeDetail from './pages/RecipeDetail'

const MyRoute = ({favourites, addFavourite, isFavourite, removeFavourite}) => {
  return (
   <Routes>
        <Route path="/" element={<Home addFavourite={addFavourite} isFavourite={isFavourite} />} />
        <Route path='/favourites' element={<Favourites favourites={favourites} removeFavourite={removeFavourite} isFavourite={isFavourite} addFavourite={addFavourite} />} />
        <Route path='/recipe/:id' element={<RecipeDetail addFavourite={addFavourite} removeFavourite={removeFavourite} isFavourite={isFavourite} />} />
        
   </Routes>
  )
}

export default MyRoute
