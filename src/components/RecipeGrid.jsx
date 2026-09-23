import React from 'react'
import RecipeCard from './RecipeCard'
import { Link } from 'react-router-dom'

const RecipeGrid = ({recipes}) => {
  return (
    <div className='row'>
        {recipes.map((recipe)=> (
        <div className='col-md-4 mb-4' key={recipe.idMeal}>
          <Link to={`/recipe/${recipe.idMeal}`} className='text-decoration-none text dark'>
          <RecipeCard recipe={recipe} />
          </Link>
            
        </div>
    ))}

    </div>
  )
}

export default RecipeGrid
