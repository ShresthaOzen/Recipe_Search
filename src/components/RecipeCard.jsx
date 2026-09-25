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
    <div className='recipe-card'>
      <div className='recipe-card-img-wrapper'>
        <img src={recipe.strMealThumb} className='recipe-card-img' alt={recipe.strMeal} />
        <span className='recipe-card-badge'>{recipe.strCategory}</span>
        <span
          className={favourited ? "recipe-card-heart favourited" : "recipe-card-heart"}
          onClick={handleFavouriteClick}
        >
          <span className="material-symbols-outlined">favorite</span>
        </span>
      </div>
      <div className='recipe-card-body'>
        <h5 className='recipe-card-title'>{recipe.strMeal}</h5>
      </div>
    </div>
  )
}

export default RecipeCard
