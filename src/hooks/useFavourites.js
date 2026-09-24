import { useEffect, useState } from "react";

function useFavourites() {
    const [favourites, setFavourites] = useState(() => {
        return localStorage.getItem('favourites') != null ? (JSON.parse(localStorage.getItem('favourites'))) : ([])
    });
    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }, [favourites]);
    function addFavourite(recipe) {
        setFavourites([...favourites, recipe]);
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
