import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeGrid = ({recipes}) => {
  return (
    <div className='row'>
        {recipes.map((recipe)=> (
        <div className='col-md-4 mb-4' key={recipe.idMeal}>
            <RecipeCard recipe={recipe} />
        </div>
    ))}

    </div>
  )
}

export default RecipeGrid
