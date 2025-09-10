import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data.json'; // Import the mock data

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="container mx-auto p-4 text-red-500">Recipe not found!</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-6" />
      <p className="text-gray-700 text-lg mb-4">{recipe.summary}</p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Ingredients:</h2>
        <ul className="list-disc list-inside text-gray-700 text-base">
          {/* Assuming ingredients are part of the recipe object in data.json for full detail view */}
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Instructions:</h2>
        <ol className="list-decimal list-inside text-gray-700 text-base">
          {/* Assuming instructions are part of the recipe object in data.json for full detail view */}
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipePage;
