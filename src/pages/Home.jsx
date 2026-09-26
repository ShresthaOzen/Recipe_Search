import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import axios from 'axios';
import RecipeGrid from '../components/RecipeGrid';
import Hero from '../components/Hero';
import MetricsBar from '../components/MetricsBar';

const Home = ({ addFavourite, isFavourite, favourites }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [popularRecipes, setPopularrecipes] = useState([]);
  const [suggestRecipes, setSuggestRecipes] = useState([]);

  useEffect(() => {
    async function fetchPopular() {
      const categories = ['Chicken', 'Seafood', 'Vegetarian', 'Dessert', 'Pasta', 'Beef'];
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      try {
        let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${randomCategory}`);
        setPopularrecipes(response.data.meals != null ? response.data.meals.slice(0, 8) : []);
      } catch (error) {
        console.log("Error fetching popular recipes", error);
      }
    }
    fetchPopular();
  }, []);

  useEffect(() => {
    async function fetchSuggestion() {
      try {
        if (favourites.length === 0) {
          let response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
          setSuggestRecipes(response.data.meals != null ? response.data.meals.slice(0, 8) : []);
        }
        else {
          let category = favourites[favourites.length - 1].strCategory;
          console.log("last favourite object:", JSON.stringify(favourites[favourites.length - 1], null, 2));
          let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
          setSuggestRecipes(response.data.meals != null ? response.data.meals.slice(0, 8) : []);
        }
      } catch (error) {
        console.log("Error fetching suggestion", error);
      }
    }
    fetchSuggestion();
  }, [favourites]);

  async function handleSearch(term) {
    setLoading(true)
    setSearchTerm(term);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    try {
      let response = await axios.get(url)
      //This is like if else statement 
      // setRecipes( condition ? valueIfTrue : valueIfFalse )
      setRecipes(response.data.meals != null ? response.data.meals : [])
      // if(response.data.meals != null){
      //     setRecipes(response.data.meals)
      // }
      // else{
      //     setRecipes([])
      // }
    } catch (error) {
      console.log("Error");
    } finally {
      setLoading(false)
    }


  }
  return (
    <div>
      <Hero onSearch={handleSearch} />

      <MetricsBar />

      {recipes.length === 0 && !loading && (
        <section className="recipe-section popular-section">
          <div className="section-heading">
            <span className="section-eyebrow">WHAT'S TRENDING</span>

            <h2>Popular Recipes</h2>

            <p>
              Discover the recipes everyone is loving right now.
            </p>
          </div>

          <RecipeGrid
            recipes={popularRecipes}
            addFavourite={addFavourite}
            isFavourite={isFavourite}
          />
        </section>
      )}

      {recipes.length === 0 && !loading && (
        <section className="recipe-section suggested-section">
          <div className="section-heading">
            <span className="section-eyebrow">HANDPICKED FOR YOU</span>

            <h2>You May Like</h2>

            <p>
              A few delicious ideas you might want to try next.
            </p>
          </div>

          <RecipeGrid
            recipes={suggestRecipes}
            addFavourite={addFavourite}
            isFavourite={isFavourite}
          />
        </section>
      )}

      <RecipeGrid
        recipes={recipes}
        addFavourite={addFavourite}
        isFavourite={isFavourite}
      />
    </div>
  )
}

export default Home
