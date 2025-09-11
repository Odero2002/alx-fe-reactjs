import React, { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeList';
import recipesData from '../data.json'; // Import the mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setRecipes(recipesData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to the Recipe Sharing Platform!</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Recipes:</h2>
        <ul className="list-disc list-inside">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="text-blue-600 hover:underline">
              {recipe.title}
            </li>
          ))}
        </ul>
      </div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default HomePage;
