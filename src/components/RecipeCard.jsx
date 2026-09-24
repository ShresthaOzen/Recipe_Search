import React from 'react'
import useFavourites from '../hooks/useFavourites'

const RecipeCard = ({ recipe, favourites, addFavourite, isFavourite, removeFavourite }) => {

  function handleFavouriteClick(event) {
    event.preventDefault();
    event.stopPropagation();
    if (favourited) {
      removeFavourite(recipe.idMeal)
    }
    else {
      addFavourite(recipe)
    }
  }

  const favourited = isFavourite(recipe.idMeal)
  return (
    <div className='card'>
      <img src={recipe.strMealThumb} className='card-img-top' alt={recipe.strMeal} />
      <div className='card-body'>
        <h5 className='card-title'>{recipe.strMeal}</h5>
      </div>
      <span
        className={isFavourite(recipe.idMeal) ? "material-symbols-outlined text-danger" : "material-symbols-outlined"}
        onClick={handleFavouriteClick}
      >
        favorite
      </span>
    </div>
  )
}

export default RecipeCard
