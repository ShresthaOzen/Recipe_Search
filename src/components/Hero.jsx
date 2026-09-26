import React from 'react'
import SearchBar from './SearchBar'

const Hero = ({onSearch}) => {
    const quickFilters = ['Chicken','Pasta', 'Desert', 'Vegetarian', 'Soup']
  return (
    <>
      <section className='hero'>
        <div className="hero-overlay">
            <span className="hero-badge">Fresh Hearth & kitchen Journals</span>
            <h1 className="hero-heading">Find comfort in <span className="hero-heading-accent">every simmered</span> bite.</h1>
            <p className="hero-subtext"> Explore hundreds of recipes for cozy weeknight dinners and deeply nourishing bowls.</p>
            <SearchBar onSearch={onSearch} />
            <div className="hero-pills">
                {quickFilters.map((term)=> (
                    <button
                        key={term}
                        type='button'
                        className='hero-pill '
                        onClick={()=> onSearch(term)}
                        >
                        {term}
                    </button>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
