import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-gray-800">{recipe.title}</h3>
      <p className="text-gray-600 mt-2">{recipe.summary}</p>
    </div>
  );
};

export default Recipe;
