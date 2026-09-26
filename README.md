# Recipe Finder

A React-powered recipe discovery app where you can search thousands of dishes, view full recipe details, and save your favourites for later — all backed by TheMealDB's free API.

## Features

- 🔍 Search recipes by name or ingredient
- 📖 View full recipe details — ingredients (with checkable list), step-by-step instructions, category
- ❤️ Save/remove favourite recipes, persisted with localStorage
- 🍽️ Personalized "You May Like" suggestions based on your favourited recipes' categories
- 🎲 Rotating "Popular Recipes" section on the home page
- 📱 Fully responsive layout (desktop and mobile)
- ⚡ Client-side routing (Home / Favourites / Recipe Detail) with React Router

## Technologies Used

- React (functional components + hooks: `useState`, `useEffect`)
- React Router
- Axios
- Bootstrap 5 (layout, navbar, carousel components)
- Material Symbols (icons)
- TheMealDB API
- Vite

## Known Limitations

- No pagination on search results
- "You May Like" suggestions are based only on the most recently favourited recipe's category, not a full recommendation algorithm
- No user accounts — favourites are stored per-browser via localStorage, not synced across devices