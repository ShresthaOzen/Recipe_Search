import React, { useState } from 'react'
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  function handleSearch(term){
    setSearchTerm(term);
    console.log(term);
    
  }
  return (
    <>
      <h1>Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      
    </>
  )
}

export default App
