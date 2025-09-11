import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import RecipeList from '../components/RecipeList';
import recipesData from '../data.json'; // Import the mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setRecipes(recipesData);
  }, []);

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to the Recipe Sharing Platform!</h1>
      <div className="mb-8 p-4 bg-gray-50 rounded-md shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Recipes:</h2>
        <ul className="list-disc list-inside">
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`} className="text-blue-600 hover:underline">
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};

export default HomePage;
