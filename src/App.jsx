import React from 'react'
import MyRoute from './MyRoute';
import Navbar from './components/Navbar';
import useFavourites from './hooks/useFavourites';


const App = () => {
  const {favourites, addFavourite, removeFavourite, isFavourite} = useFavourites();
  return (
    <>
    <Navbar />
    <MyRoute favourites={favourites} addFavourite={addFavourite} removeFavourite={removeFavourite} isFavourite={isFavourite} />
    </>
    
  )
}

export default App
