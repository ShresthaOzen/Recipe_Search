import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {

    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);


    function handleSubmit(e){
        e.preventDefault();
        onSearch(query);
    }

  return (
    <>
      <form onSubmit={handleSubmit} className='d-flex'>
        <input type="search" className='form-control me-2' placeholder='Search recipes....' value={query} onChange={(e)=> setQuery(e.target.value)} />
        <button className='btn btn-outline-success' type='submit'>Search</button>
      </form>
    </>
  )
}

export default SearchBar
