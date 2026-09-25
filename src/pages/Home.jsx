import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import axios from 'axios';
import RecipeGrid from '../components/RecipeGrid';
import Hero from '../components/Hero';

const Home = ({addFavourite, isFavourite}) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  
  async function handleSearch(term){
    setLoading(true)
    setSearchTerm(term);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    try{
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
    }catch (error) {
    console.log("Error");
    }finally{
    setLoading(false)
    }

    
  }
    
  return (
    <div>
      <Hero onSearch={handleSearch}/>
      <RecipeGrid recipes={recipes} addFavourite={addFavourite} isFavourite={isFavourite} />
    </div>
  )
}

export default Home
