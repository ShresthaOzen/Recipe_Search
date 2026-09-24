import React from 'react'
import RecipeGrid from '../components/RecipeGrid'

const Favourites = ({favourites, addFavourites, isFavourite, removeFavourite}) => {
  return (
    <div>
      <h2>My Favorites</h2>
      {favourites.length === 0 ? (
        <p>You dont have any favourite recipies</p>
      ):(
        <RecipeGrid 
        recipes={favourites}
        addFavourite={addFavourites}
        isFavourite={isFavourite}
        removeFavourite={removeFavourite} />
      )}
    </div>
  )
}

export default Favourites
