import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetail = ({ addFavourite, removeFavourite, isFavourite }) => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function fetchRecipe() {
            let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            let response = await axios.get(url);
            setRecipe(response.data.meals != null ? response.data.meals[0] : null)
        }
        fetchRecipe();
    }, [id]);

    if (recipe === null) {
        return <p>Loading......</p>;
    }

    const favourited = isFavourite(recipe.idMeal)

    function handleFavouriteClick() {
        if (favourited) {
            removeFavourite(recipe.idMeal)
        }
        else {
            addFavourite(recipe)
        }
    }

    return (
        <div className="recipe-detail">
            <div className="recipe-detail-hero">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-detail-img" />
                <div className="recipe-detail-overlay">
                    <span className="recipe-card-badge">{recipe.strCategory}</span>
                    <h2 className="recipe-detail-title">{recipe.strMeal}</h2>
                </div>
            </div>

            <div className="recipe-detail-body">
                <button
                    className={favourited ? "recipe-detail-fav-btn favourited" : "recipe-detail-fav-btn"}
                    onClick={handleFavouriteClick}
                >
                    <span className="material-symbols-outlined">favorite</span>
                    {favourited ? "Saved to Favourites" : "Save Recipe"}
                </button>

                <h3>Instructions</h3>
                <p className="recipe-detail-instructions">{recipe.strInstructions}</p>
            </div>
        </div>
    )
}

export default RecipeDetail