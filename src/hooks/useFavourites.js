import axios from "axios";
import { useEffect, useState } from "react";

function useFavourites() {
    const [favourites, setFavourites] = useState(() => {
        return localStorage.getItem("favourites") != null
            ? JSON.parse(localStorage.getItem("favourites"))
            : [];
    });
    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);
    async function addFavourite(recipe) {
        try {
            let response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`,
            );
            let fullRecipe = response.data.meals[0];
            setFavourites([...favourites, fullRecipe]);
        } catch (error) {
            console.log("Error fetching full recipe details", error);
            setFavourites([...favourites, recipe]); // fallback to whatever we had
        }
    }

    function removeFavourite(id) {
        setFavourites(favourites.filter((item) => item.idMeal !== id));
    }

    function isFavourite(id) {
        return favourites.some((item) => item.idMeal === id);
    }

    return { favourites, addFavourite, removeFavourite, isFavourite };
}

export default useFavourites;
