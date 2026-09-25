import React from 'react'
import RecipeGrid from '../components/RecipeGrid'

const Favourites = ({ favourites, addFavourites, isFavourite, removeFavourite }) => {
  return (
    <div>
      <h2>My Favorites</h2>
      {favourites.length === 0 ? (
        <div className="empty-state">
          <span className="material-symbols-outlined empty-state-icon">bookmark_heart</span>
          <h3>No favourites yet</h3>
          <p>Start exploring recipes and tap the heart to save your favourites here.</p>
        </div>
      ) : (
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
