import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold text-gray-800">{recipe.name}</h3>
      <p className="text-gray-600 mt-2">{recipe.description}</p>
      <div className="mt-4">
        <h4 className="text-lg font-medium text-gray-700">Ingredients:</h4>
        <ul className="list-disc list-inside text-gray-600">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium text-gray-700">Instructions:</h4>
        <ol className="list-decimal list-inside text-gray-600">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Recipe;
