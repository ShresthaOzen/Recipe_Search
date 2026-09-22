import React from 'react'

const RecipeCard = ({ recipe }) => {
  return (
    <div className='card'>
        <img src= {recipe.strMealThumb} className='card-img-top' alt={recipe.strMeal} />
        <div className='card-body'>
            <h5 className='card-title'>{recipe.strMeal}</h5>
        </div>
    </div>
  )
}

export default RecipeCard
