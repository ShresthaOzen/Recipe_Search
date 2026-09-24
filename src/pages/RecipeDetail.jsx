import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetail = ({ addFavourite, removeFavourite, isFavourite }) => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function fetchRecipe() {
            let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            let response = await axios.get(url);
            setRecipe(response.data.meals != null ? response.data.meals[0] : [])
        }
        fetchRecipe();
    }, [id]);

    function handleFavouriteClick() {
        console.log("clicked");
        if (isFavourite(recipe.idMeal)) {
            removeFavourite(recipe.idMeal)
        }
        else {
            addFavourite(recipe)
        }
    }

    return (
        <>
            {
                recipe === null ? (<p>Loading......</p>) :
                    (
                        <div>
                            <h2 className='recipe-title'>{recipe.strMeal}</h2>
                            <span
                                className={isFavourite(recipe.idMeal) ? "material-symbols-outlined text-danger" : "material-symbols-outlined"}
                                onClick={handleFavouriteClick}
                            >
                                favorite
                            </span>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} className='recipe-img' />
                            <p className='recipe-description'>{recipe.strInstructions}</p>
                        </div>
                    )
            }
        </>
    )
}

export default RecipeDetail
